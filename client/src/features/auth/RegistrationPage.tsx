/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { type RootState, useAppDispatch } from '../../redux/store';
import { clearError, signUp } from './authSlice';
import './styles/auth.scss';

const RegistrationPage = (): JSX.Element => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPasssword] = useState('');
  const [rpassword, setRpasssword] = useState('');
  const [role, setRole] = useState('');

  const error = useSelector((store: RootState) => store.auth.error);
  const dispatch = useAppDispatch();

  return (
    <div className="auth-container">
      {/* <h1>RegistrationPage</h1> */}
      {error && <h1 style={{ color: 'blue' }}>{error}</h1>}
      <form
        className="sign-up"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(signUp({ name, email, password, rpassword, role })).catch(console.log);
        }}
      >
        <input
          className="form-control"
          placeholder="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            dispatch(clearError());
          }}
          type="text"
          required
        />
        <input
          className="form-control"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <input
          className="form-control"
          placeholder="rpassword"
          value={rpassword}
          onChange={(e) => setRpasssword(e.target.value)}
          type="text"
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)} className="form-control">
          <option value="Instructor">Инструктор</option>
          <option value="Dancer">Пользователь</option>
        </select>

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
