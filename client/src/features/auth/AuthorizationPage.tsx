/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { signIn } from './authSlice';
import './styles/auth.scss';

const AuthorizationPage = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPasssword] = useState('');

  const dispatch = useAppDispatch();

  return (
    <div className="auth-container">
      <h4 className="auth">Авторизация</h4>
      <form
        className="sign-in"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(signIn({ email, password })).catch(console.log);
        }}
      >
        <input
          className="form-control input"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          required
        />
        <input
          className="form-control input"
          placeholder="password"
          value={password}
          onChange={(e) => setPasssword(e.target.value)}
          type="text"
          required
        />
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
