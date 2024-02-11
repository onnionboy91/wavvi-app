/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { type RootState, useAppDispatch } from '../../redux/store';
import { clearError, signUp } from './authSlice';
import './styles/auth.scss';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = (): JSX.Element => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPasssword] = useState('');
  const [rpassword, setRpasssword] = useState('');
  const [role, setRole] = useState('Instructor');
  const [message, setMessage] = useState('');

  const error = useSelector((store: RootState) => store.auth.error);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (message === 'success') {
      navigate('/categories');
    }
  }, [message]);

  return (
    <div className="auth-container">
      <h4 className="auth">Регистрация</h4>
      {error && <h1 style={{ color: 'blue' }}>{error}</h1>}
      <form
        className="sign-up"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(signUp({ name, email, password, rpassword, role }))
            .then(() => {
              setMessage('success');
            })
            .catch((error) => {
              setMessage(error.message);
            });
        }}
      >
        <div className="message">{message}</div>
        <input
          className="form-control input"
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
        <input
          className="form-control input"
          placeholder="rpassword"
          value={rpassword}
          onChange={(e) => setRpasssword(e.target.value)}
          type="text"
          required
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="form-control input"
        >
          <option value="Instructor">Инструктор</option>
          <option value="Dancer">Пользователь</option>
        </select>

        <button type="submit" className="form-control input submit">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
