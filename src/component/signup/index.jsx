import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      const data = { username, email, password, password2 };
      try {
        const response = await fetch('http://16.170.37.57/api/v1/user/register/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        if (!response.ok) throw new Error('regist error')
        const result = await response.json();
        console.log(result);
        localStorage.setItem("username", username);
        localStorage.setItem("token", result.token);
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrors({});
        navigate('/profile/:id/edit')

      } catch (error) {
        console.error('Error registering user:', error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!username.trim()) {
      errors.username = "Имя пользователя обязательно для заполнения";
    }
    if (!email.trim()) {
      errors.email = "Email обязателен для заполнения";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Неправильный формат Email";
    }
    if (!password) {
      errors.password = "Пароль обязателен для заполнения";
    } else if (password.length < 6) {
      errors.password = "Пароль должен быть длиннее 6 символов";
    }
    if (!password2) {
      errors.password2 =
        "Подтверждение пароля обязательно для заполнения";
    } else if (password !== password2) {
      errors.password2 = "Подтверждение пароля не соответствует паролю";
    }
    return errors;
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit} className="form-3d">
        <h1 className="text-center mb-4">Регистрация</h1>
        <div className="form-group">
          <input
            type="text"
            id="username"
            className="form-control"
            placeholder="Имя пользователя"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          {errors.username && <div className="feedback">{errors.username}</div>}
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            className={`form-control ${errors.email && "is-invalid"}`}
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {errors.email && <div className="feedback">{errors.email}</div>}
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            className={`form-control ${errors.password && "is-invalid"}`}
            placeholder="Пароль"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {errors.password && <div className="feedback">{errors.password}</div>}
        </div>
        <div className="form-group">
          <input
            type="password"
            id="confirmPassword"
            className={`form-control ${errors.password2 && "is-invalid"}`}
            placeholder="Повторить пароль"
            value={password2}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          {errors.password2 && (
            <div className="feedback">{errors.password2}</div>
          )}
        </div>
        <button type="submit" className="btn-signup">
          Зарегистрироваться
        </button>
        <div className="link">
          Уже есть аккаунт? <Link to="/login">Войти</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
