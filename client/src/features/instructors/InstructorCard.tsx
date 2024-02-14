/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { Instructor } from './types';
import { removeInstructor } from './instructorsSlice';
import { useAppDispatch } from '../../redux/store';
import './styles/style.css';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import FormUpdateInstructor from './FormUpdateInstructor';

function InstructorCard({ instructor }: { instructor: Instructor }): JSX.Element {
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
      <div className="card">
        <div className="card-flex">
          <img
            className="card-photo"
            src="https://images.unsplash.com/photo-1601128426315-7a1d9168f163?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGhpcCUyMGhvcHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Nice dancer"
          />
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
    </>
  );
}

export default InstructorCard;
