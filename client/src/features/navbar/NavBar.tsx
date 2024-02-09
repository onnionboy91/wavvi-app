/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './styles/style.css';
import { NavLink, Outlet } from 'react-router-dom';

const NavBar = (): JSX.Element => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          WaVVi
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link active" aria-current="page" to="/categories">
              Категории
            </NavLink>
            <NavLink className="nav-link" to="/instructors">
              Инструкторы
            </NavLink>
            <NavLink className="nav-link" to="/saved">
              Избранное
            </NavLink>
            <NavLink className="nav-link" to="/sign-in">
              Войти
            </NavLink>
            <NavLink className="nav-link" to="/sign-up">
              Зарегистроваться
            </NavLink>
            <NavLink className="nav-link" to="/logout">
              Выйти
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
    <Outlet />
    </>
  );
};

export default NavBar;
