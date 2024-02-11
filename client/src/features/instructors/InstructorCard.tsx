/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { Instructor } from './types';
import likeImg from '../../../assets/img/party_13739378.png';
import likeImgRed from '../../../assets/img/heart_2107845.png';
import { removeInstructor } from './instructorsSlice';
import { useAppDispatch } from '../../redux/store';
import './styles/style.css';
import { addLike } from '../favourites/likesSlice';

function InstructorCard({ instructor }: { instructor: Instructor }): JSX.Element {
  const [likeState, setLike] = useState(likeImg);

  const dispatch = useAppDispatch();

  const onHandleLike = (): void => {
    
   const res = dispatch(addLike({user_id: ???, video_id: instructor.id})).catch(console.log);
   if(res) {
    setLike((prev) => (prev === likeImg ? likeImgRed : likeImg));
   }    
  };

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
        <button onClick={onHandleLike} type="button">
          <img className="btn-like-img" src={likeState}></img>
        </button>
        <button className="details-button">Подробнее</button>
      </div>
    </>
  );
}

export default InstructorCard;
