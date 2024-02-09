/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { signIn } from './authSlice';
import './styles/auth.scss';

const AuthorizationPage = (): JSX.Element => {
  const [name, setName] = useState('');
  const [password, setPasssword] = useState('');

  const dispatch = useAppDispatch();

  return (
    <div className="auth-container">
      {/* <h1>AuthorizationPage</h1> */}
      <form
        className="sign-in"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(signIn({ name, password })).catch(console.log);
        }}
      >
        <input
          className="form-control"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          required
        />
        <input
          className="form-control"
          placeholder="password"
          value={password}
          onChange={(e) => setPasssword(e.target.value)}
          type="text"
          required
        />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default AuthorizationPage;
