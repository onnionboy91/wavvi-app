import React from 'react';

import './styles/style.css';
import './styles/navbar.scss';
import { NavLink, Outlet, useNavigate } from 'react-router-dom'; // без перезагрузки можем менять страницу
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { logOut } from '../auth/authSlice';

const NavBar = (): JSX.Element => {
  const user = useSelector((store: RootState) => store.auth.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="container-Navbar">
        <ul className="nav__container">
          {user && user.name ? (
            <>
              <div className="nav__list">
                {/* <li className="hello">Hello, {user.name}!</li> */}
                <li className="nav__item">
                  <NavLink to="/profile">
                    <img src={user.img} className="avatar" />
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink className="nav__link" to="/categories">
                    Категории
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink className="nav__link" to="/instructors">
                    Инструкторы
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink className="nav__link" to="/favourites">
                    Избранное
                  </NavLink>
                </li>
                {/* <li className="nav__item">
                  <NavLink className="nav__link" to="/profile">
                    Личный кабинет
                  </NavLink>
                </li> */}
                <li
                  onClick={() => {
                    dispatch(logOut()).catch(console.log);
                    navigate('/');
                  }}
                  className="nav__item"
                >
                  <NavLink className="nav__link" to="/logout">
                    Выйти
                  </NavLink>
                </li>
              </div>
            </>
          ) : (
            <>
              <div className="nav__list">
                <li className="nav__item">
                  <NavLink className="nav__link" to="/sign-in">
                    Войти
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink className="nav__link" to="/sign-up">
                    Регистрация
                  </NavLink>
                </li>
              </div>
            </>
          )}
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
