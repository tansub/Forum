import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./login.css";

const Login = () => {
  const loginSchema = Yup.object().shape({
    username: Yup.string().required("Введите логин"),
    password: Yup.string()
      .required("Введите пароль")
      .test("password", "Пароль должен содержать минимум 5", (value) => {
        const commonPasswords = ["123456", "password", "123456789"];
        return value && !commonPasswords.includes(value.toLowerCase());
      }),
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate()
  


  const handleSubmit = async (event) => {
    event.preventDefault();
    fetch("http://16.170.37.57/api/v1/user/auth_token/", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.reload();
        console.log(data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", username);
      });
  
    try {
      await loginSchema.validate({ username, password }, { abortEarly: false });
      setUsername("");
      setPassword("");
      setErrors({});
      navigate('/profile')
    } catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };


  return (
    <div className="wrapper-login">
      <form id="login" onSubmit={handleSubmit} className="p-3 rounded shadow form">
        <h1 className="text-center mb-4">Вход</h1>
        <div className="form-group">
          <input
            type="text"
            id="username"
            className={`form-control ${errors.username ? "is-invalid" : ""}`}
            placeholder="Логин"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          {errors.username && (
            <div className="invalid-feedback">{errors.username}</div>
          )}
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            placeholder="Пароль"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-4">
          Войти
        </button>
        <div className="link">
          Нет аккаунта?<Link to="/signup">Зарегистрируйся</Link>
        </div>
      </form>
    </div>
  );
};
export default Login;
