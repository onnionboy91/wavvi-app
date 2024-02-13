/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { type RootState, useAppDispatch } from '../../redux/store';
import {
  clearError,
  signUp,
  validatePassword,
  setPasswordErrorLength,
  setPasswordMatchError,
  validateEmailFormat,
  setEmailError,
  validatePasswordsMatch,
} from './authSlice';
import './styles/auth.scss';

const RegistrationPage = (): JSX.Element => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rpassword, setRpassword] = useState('');
  const [img, setImg] = useState<FileList | null>(null);
  const [role, setRole] = useState('Instructor');

  const error = useSelector((store: RootState) => store.auth.error);
  const passwordError = useSelector((store: RootState) => store.auth.passwordError);
  const dispatch = useAppDispatch();

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const passwordError = validatePassword(newPassword); // Вызов функции для валидации пароля
    dispatch(setPasswordErrorLength(passwordError)); // Вызов action для задания ошибки пароля в хранилище
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRpassword = e.target.value;
    setRpassword(newRpassword);
    const passwordsMatchError = validatePasswordsMatch(password, newRpassword);
    setPasswordMatchError(passwordsMatchError);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    const emailError = validateEmailFormat(newEmail); // Проверяем формат email
    dispatch(setEmailError(emailError)); // Вызываем action для задания ошибки email в хранилище
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('rpassword', rpassword);
    formData.append('img', img);
    formData.append('role', role);
    dispatch(signUp(formData));
  };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     setImg(e.target.files);
  //   }
  // };  добавили с Ваней

  return (
    <div className="auth-container">
      <h4 className="auth">Регистрация</h4>
      <div className="errorForm">{error && <h6>{error}</h6>}</div>
      <form className="sign-up" encType="multipart/form-data" onSubmit={handleSubmit}>
        <input
          className="form-control input"
          placeholder="Введите имя"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            dispatch(clearError());
          }}
          type="text"
          required
        />
        <i className="bx bxs-user"></i>
        <input
          className="form-control input"
          placeholder="Почта"
          value={email}
          onChange={handleEmailChange}
          type="text"
          autoComplete="username"
          required
        />
        <i className="bx bxs-envelope"></i>
        <input
          className="form-control input"
          placeholder="Введите пароль"
          value={password}
          onChange={handlePasswordChange}
          type="password"
          autoComplete="new-password"
          required
        />
        <i className="bx bxs-lock-alt bzz1"></i>

        {passwordError && (
          <span className="errorPassword" style={{ color: 'red' }}>
            {passwordError}
          </span>
        )}
        <input
          className="form-control input"
          placeholder="Повторите пароль"
          value={rpassword}
          onChange={handleConfirmPasswordChange}
          type="password"
          autoComplete="new-password"
          required
        />
        <i className="bx bxs-lock-alt bxx"></i>

        <input
          className="form-control input"
          // placeholder="img"
          onChange={(e) => {
            setImg(e.target.value);
          }}
          type="file"
          name="img"
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
