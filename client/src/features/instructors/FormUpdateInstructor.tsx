/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { type RootState, useAppDispatch } from '../../redux/store';
import { clearError } from '../auth/authSlice';
import '../auth/styles/auth.scss';
import { Instructor } from './types';
import { updateInstructor } from './instructorsSlice';

const FormUpdateInstructor = ({ instructor }: { instructor: Instructor }): JSX.Element => {
  const [name, setName] = useState('');
  const [styleDance, setStyleDance] = useState('');
  const [level, setLevel] = useState('');
  const [img, setImg] = useState('');
  const [description, setDescription] = useState('');

  const error = useSelector((store: RootState) => store.auth.error);
  const dispatch = useAppDispatch();

  const onHandleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      updateInstructor({
        id: instructor.id,
        name,
        styleDance,
        level,
        img,
        description,
      }),
    );
  };

  return (
    <div className="auth-container">
      <h4 className="auth">Изменить инструктора</h4>
      <div className="errorForm">{error && <h6>{error}</h6>}</div>
      <form className="sign-up" onSubmit={onHandleUpdate}>
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
          Изменить
        </button>
      </form>
    </div>
  );
};

export default FormUpdateInstructor;
