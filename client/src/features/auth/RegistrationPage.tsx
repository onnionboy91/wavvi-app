/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { type RootState, useAppDispatch } from '../../redux/store';
import {
  clearError,
  signUp,
  validatePassword,
  setPasswordError,
  validatePasswordsMatchs,
  // validatePasswordsMatch,
} from './authSlice';
import './styles/auth.scss';

const RegistrationPage = (): JSX.Element => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rpassword, setRpassword] = useState('');
  const [img, setImg] = useState('');

  const [role, setRole] = useState('Instructor');

  const error = useSelector((store: RootState) => store.auth.error);
  const passwordError = useSelector((store: RootState) => store.auth.passwordError);
  const dispatch = useAppDispatch();

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const passwordError = validatePassword(newPassword); // Вызов функции для валидации пароля
    dispatch(setPasswordError(passwordError)); // Вызов action для задания ошибки пароля в хранилище
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRpassword = e.target.value;
    setRpassword(newRpassword);
    const passwordsMatchError = validatePasswordsMatchs(password, newRpassword);
    setPasswordError(passwordsMatchError);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signUp({ name, email, password, rpassword, img, role })).catch(console.log);
  };

  return (
    <div className="auth-container">
      <h4 className="auth">Регистрация</h4>
      <div className="errorForm">{error && <h6>{error}</h6>}</div>
      <form className="sign-up" onSubmit={handleSubmit}>
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
          onChange={handlePasswordChange}
          type="password"
          required
        />

        {passwordError && (
          <span className="errorPassword" style={{ color: 'red' }}>
            {passwordError}
          </span>
        )}
        <input
          className="form-control input"
          placeholder="rpassword"
          value={rpassword}
          onChange={handleConfirmPasswordChange}
          type="password"
          required
        />
        <input
          className="form-control input"
          placeholder="img"
          value={img}
          onChange={(e) => setImg(e.target.value)}
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
