/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { type RootState, useAppDispatch } from '../../redux/store';
import { clearError, signUp } from './authSlice';

const RegistrationPage = (): JSX.Element => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPasssword] = useState('');
  const [rpassword, setRpasssword] = useState('');

  const error = useSelector((store: RootState) => store.auth.error);

  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>RegistrationPage</h1>
      {error && <h1 style={{ color: 'red', textTransform: 'uppercase' }}>{error}</h1>}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(signUp({ name, email, password, rpassword })).catch(console.log);
        }}
      >
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            dispatch(clearError());
          }}
          type="text"
        />
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
        <input value={password} onChange={(e) => setPasssword(e.target.value)} type="text" />
        <input value={rpassword} onChange={(e) => setRpasssword(e.target.value)} type="text" />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
