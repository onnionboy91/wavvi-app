/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { Instructor } from './types';
import { removeInstructor } from './instructorsSlice';
import { useAppDispatch } from '../../redux/store';
import './styles/style.css';

function InstructorCard({ instructor }: { instructor: Instructor }): JSX.Element {
  const dispatch = useAppDispatch();

  const onHandleRemove = (): void => {
    dispatch(removeInstructor(instructor.id)).catch(console.log);
  };

  return (
    <>
      <div className="card">
        <div className="card-flex">
          <img
            className="card-photo"
            src="https://images.unsplash.com/photo-1601128426315-7a1d9168f163?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGhpcCUyMGhvcHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Nice dancer"
          />
          <h2>{instructor.name}</h2>
          <h3>{instructor.styleDance}</h3>
          <p className="card-text">{instructor.description}</p>
        </div>
        <div className="card-btns">
          <button type="button" onClick={onHandleRemove} className="btn btn-danger">
            Удоли
          </button>
          <button type="button" className="btn btn-warning">
            Измени
          </button>
        </div>
        <button className="details-button">Подробнее</button>
      </div>
    </>
  );
}

export default InstructorCard;
