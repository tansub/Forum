import './style.css';

import HamburgerIcon from '../image/bars.png';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HamburgerMenu = ({ username, data, handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu">
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`menu-items ${isOpen ? 'open' : ''}`}>
        {username && data && (
          <div className="user-details">
            <div className="name">{data.username}</div>
            <button className="logout" onClick={handleLogout}>
              Выйти
            </button>
          </div>
        )}
        <NavLink to="/profile">
          <button className="aboutActive" onClick={toggleMenu}>
            Профиль
          </button>
        </NavLink>
        <NavLink to="/events">
          <button className="eventsActive" onClick={toggleMenu}>
            События
          </button>
        </NavLink>
        {!username && (
          <>
            <NavLink to="/signup">
              <button className="signupActive" onClick={toggleMenu}>
                Зарегистрироваться
              </button>
            </NavLink>
            <NavLink to="/login">
              <button className="loginActive" onClick={toggleMenu}>
                Войти
              </button>
            </NavLink>
          </>
        )}
      </ul>
    </div>
  );
};


export function Header() {
  const [data, setData] = useState(null);

  const username = localStorage.getItem("username");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://16.170.37.57/api/v1/app/profile/${username}/`);
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (username) {
      fetchUserData();
    }
  }, [username]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.reload();
  };

  return (
    <>
      <div className="header">
        <NavLink to="/" className="logo">
          Volunteer's <span>spot</span>
        </NavLink>

        <NavLink to="/profile">
          <button className="about">Профиль</button>
        </NavLink>
        <NavLink to="/events">
          <button className="events">События</button>
        </NavLink>
        {!username && (
          <>
            <NavLink to="/signup">
              <button className="signup">Зарегистрироваться</button>
            </NavLink>
            <NavLink to="/login">
              <button className="login">Войти</button>
            </NavLink>
          </>
        )}
        {username && data && (
          <div className="user-burger">
            <div className='name'>{data.username}</div>
            <button className="logout" onClick={handleLogout}>
              Выйти
            </button>
          </div>
        )}
        <HamburgerMenu username={username} data={data} handleLogout={handleLogout} />
      </div>
    </>
  );
}
