/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { type RootState, useAppDispatch } from '../../redux/store';
import {
  clearError,
  validatePassword,
  setPasswordErrorLength,
  validateEmailFormat,
  setEmailError,
} from '../auth/authSlice';
import '../auth/styles/auth.scss';
import { addInstructor } from './instructorsSlice';

const FormAddInstructor = (): JSX.Element => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [styleDance, setStyleDance] = useState('');
  const [level, setLevel] = useState('');
  const [img, setImg] = useState('');
  const [description, setDescription] = useState('');

  const error = useSelector((store: RootState) => store.auth.error);
  const dispatch = useAppDispatch();

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const passwordError = validatePassword(newPassword);
    dispatch(setPasswordErrorLength(passwordError));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    const emailError = validateEmailFormat(newEmail);
    dispatch(setEmailError(emailError));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addInstructor({ name, email, password, styleDance, level, img, description }));
  };

  return (
    <div className="auth-container">
      <h4 className="auth">Добавить инструктора</h4>
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
          onChange={handleEmailChange}
          type="text"
          required
        />

        <input
          className="form-control input"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
          type="password"
          autoComplete="new-password"
          required
        />

        <input
          className="form-control input"
          placeholder="style dance"
          value={styleDance}
          onChange={(e) => setStyleDance(e.target.value)}
          type="text"
          required
        />
        <input
          className="form-control input"
          placeholder="level"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          type="text"
          required
        />
        <input
          className="form-control input"
          placeholder="img"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          type="file"
          required
        />
        <input
          className="form-control input"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          required
        />
        <button type="submit" className="form-control input submit">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default FormAddInstructor;
