/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { InstructorUpdate } from './types';
import { removeInstructor } from './instructorsSlice';
import { RootState, useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import './styles/style.css';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import FormUpdateInstructor from './FormUpdateInstructor';
import { StyledEngineProvider } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { SwiperSlide } from 'swiper/react';

function InstructorCard({ instructor }: { instructor: InstructorUpdate }): JSX.Element {
  const dispatch = useAppDispatch();

  const user = useSelector((store: RootState) => store.auth.auth);

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
      <SwiperSlide>
        <StyledEngineProvider injectFirst>
          <Card className="card-instructor swiper-slide">
            <CardMedia image={instructor.img} title="dance" className="card-photo" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className="card-text">
                {instructor.name}
              </Typography>
              <Typography gutterBottom variant="h5" component="div" className="card-text">
                {instructor.styleDance}
              </Typography>
            </CardContent>

            {user && user.name === 'admin' && (
              <div className="card-btns">
                <button type="button" onClick={onHandleRemove} className="btn btn-danger">
                  Удалить
                </button>
                <button type="button" onClick={openModal} className="btn btn-warning">
                  Изменить
                </button>
              </div>
            )}
            <Modal isOpen={modalOpen} onClose={closeModal}>
              <FormUpdateInstructor instructor={instructor} />
            </Modal>

            <Link className="details-button" to={`/instructors/${instructor.id}`}>
              Подробнее
            </Link>
          </Card>
        </StyledEngineProvider>
      </SwiperSlide>
    </>
  );
}

export default InstructorCard;
