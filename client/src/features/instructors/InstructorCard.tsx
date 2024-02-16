/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { InstructorUpdate } from './types';
import { removeInstructor } from './instructorsSlice';
import { RootState, useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import './styles/style.css';
import { Link } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { SwiperSlide } from 'swiper/react';
import FormUpdateInstructor from './FormUpdateInstructor';

function InstructorCard({ instructor }: { instructor: InstructorUpdate }): JSX.Element {
  const dispatch = useAppDispatch();
  const [formUpdate, setFormUpdate] = useState(false);

  const user = useSelector((store: RootState) => store.auth.auth);

  const onHandleRemove = (): void => {
    dispatch(removeInstructor(instructor.id)).catch(console.log);
  };

  return (
    <div style={{ zIndex: 0 }}>
      <div>{formUpdate === true && <FormUpdateInstructor instructor={instructor} />}</div>
      <SwiperSlide>
        <StyledEngineProvider injectFirst>
          <Card className="card-instructor swiper-slide">
            <CardMedia image={instructor.img} title="dance" className="card-photo">
              {user.name === 'admin' && (<button
                type="button"
                onClick={() => setFormUpdate((prev) => !prev)}
                className="btn btn-warning"
              >
                ✎
              </button>)}
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className="card-text">
                {instructor.name}
              </Typography>
              <Typography gutterBottom variant="h5" component="div" className="card-text">
                {instructor.styleDance}
              </Typography>
            </CardContent>
            {user && user.name === 'admin' && (
              <>
                <div className="card-btns">
                  <button type="button" onClick={onHandleRemove} className="btn btn-danger">
                    Удалить
                  </button>
                </div>
              </>
            )}

            <Link className="details-button" to={`/instructors/${instructor.id}`}>
              Подробнее
            </Link>
          </Card>
        </StyledEngineProvider>
      </SwiperSlide>
    </div>
  );
}

export default InstructorCard;
