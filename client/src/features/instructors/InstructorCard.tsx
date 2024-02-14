/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { InstructorUpdate } from './types';
import { removeInstructor } from './instructorsSlice';
import { useAppDispatch } from '../../redux/store';
import './styles/style.css';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import FormUpdateInstructor from './FormUpdateInstructor';
import Paper from '@mui/material/Paper';

function InstructorCard({ instructor }: { instructor: InstructorUpdate }): JSX.Element {
  const dispatch = useAppDispatch();

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const onHandleRemove = (): void => {
    dispatch(removeInstructor(instructor.id)).catch(console.log);
  };

  return (
    <>
      <Paper elevation={3}>
        <div className="card swiper-slide">
          <div className="card-flex">
            <img className="card-photo" src={instructor.img} alt="Nice dancer" />
            <h2>{instructor.name}</h2>
            <h3>{instructor.styleDance}</h3>
          </div>
          <div className="card-btns">
            <button type="button" onClick={onHandleRemove} className="btn btn-danger">
              Удалить
            </button>
            <button type="button" onClick={openModal} className="btn btn-warning">
              Изменить
            </button>
          </div>
          <Modal isOpen={modalOpen} onClose={closeModal}>
            <FormUpdateInstructor instructor={instructor} />
          </Modal>

          <Link className="details-button" to={`/instructors/${instructor.id}`}>
            Подробнее
          </Link>
        </div>
      </Paper>
    </>
  );
}

export default InstructorCard;
