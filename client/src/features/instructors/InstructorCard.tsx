/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { Instructor } from './types';
import likeImg from '../../../assets/img/party_13739378.png';
import likeImgRed from '../../../assets/img/heart_2107845.png';
import { removeInstructor } from './instructorsSlice';
import { useAppDispatch } from '../../redux/store';

function InstructorCard({ instructor }: { instructor: Instructor }): JSX.Element {
  const [like, setLike] = useState(likeImg);

  const dispatch = useAppDispatch();

  const onHandleLike = (): void => {
    setLike((prev) => (prev === likeImg ? likeImgRed : likeImg));
  };

  const onHandleRemove = (): void => {
    dispatch(removeInstructor(instructor.id)).catch(console.log);
  };

  return (
    <>
      <div className="card" style={{ width: '12rem', margin: '10px' }}>
        <img
          src="https://images.unsplash.com/photo-1495791185843-c73f2269f669?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="card-img-top"
          alt="nice guy"
        />
        <div className="card-body">
          <h5 className="card-title">{instructor.name}</h5>
          <p className="card-text">{instructor.styleDance}</p>
          <a href="#" className="btn btn-primary">
            Подробнее
          </a>
          <button type="button" onClick={onHandleRemove} className="btn btn-danger">
            Удоли
          </button>
          <button onClick={onHandleLike} type="button">
            <img style={{ width: '30px', margin: '8px' }} src={like}></img>
          </button>
        </div>
      </div>
    </>
  );
}

export default InstructorCard;
