/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { RootState, useAppDispatch } from '../../redux/store';
import { setEmailErrorAuth, setPasswordErrorAuth, signIn } from './authSlice';
import './styles/auth.scss';
import { useSelector } from 'react-redux';

const AuthorizationPage = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPasssword] = useState('');

  const passwordError = useSelector((store: RootState) => store.auth.passwordError);
  const emailError = useSelector((store: RootState) => store.auth.emailError);

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // валидация пароля
    if (!password) {
      dispatch(setPasswordErrorAuth('Введите пароль'));
      return;
    } else if (password.length < 6) {
      dispatch(setPasswordErrorAuth('Пароль должен содержать минимум 6 символов'));
      return;
    }

    // валидация электронной почты
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      dispatch(setEmailErrorAuth('Введите адрес электронной почты'));
      return;
    } else if (!emailRegex.test(email)) {
      dispatch(setEmailErrorAuth('Неправильный адрес электронной почты'));
      return;
    }

    // Очистить ошибки валидации
    dispatch(setPasswordErrorAuth(''));
    dispatch(setEmailErrorAuth(''));
    dispatch(signIn({ email, password }));
  };

  return (
    <div className="auth-container">
      <h4 className="auth">Авторизация</h4>
      {/* <div className="errorForm">{error && <h6>{error}</h6>}</div> */}
      <form className="sign-in" onSubmit={handleSubmit}>
        <input
          className="form-control input"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          autoComplete="username"
          required
        />

        {/* <i className="bx bxs-user"></i> */}

        {emailError && (
          <div className="errorPassword" style={{ color: 'red' }}>
            {emailError}
          </div>
        )}
        <input
          className="form-control input"
          placeholder="password"
          value={password}
          onChange={(e) => setPasssword(e.target.value)}
          type="password"
          autoComplete="new-password"
          required
        />
        {/* <i className="bx bxs-lock-alt"></i> */}
        {passwordError && (
          <div className="errorPassword" style={{ color: 'red' }}>
            {passwordError}
          </div>
        )}
        <button type="submit" className="form-control input submit">
          Войти
        </button>
        <div className="reg">
          <p>
            У вас ещё нет аккаунта? <a href="/sign-up">Зарегистрироваться</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default AuthorizationPage;
