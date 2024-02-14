/* eslint-disable @typescript-eslint/no-misused-promises */
import { RootState } from '../../redux/store';
import React from 'react';
import { useSelector } from 'react-redux';
import InstructorCard from './InstructorCard';
import FormAddInstructor from './FormAddInstructor';

function InstructorsPage(): JSX.Element {
  const instructors = useSelector((store: RootState) => store.instructors.instructors);
  const user = useSelector((store: RootState) => store.auth.auth);
  return (
    <>
      {user?.name === 'admin' && <FormAddInstructor />}
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          <div className="card-container">
            {instructors.map((instructor) => (
              <InstructorCard key={instructor.id} instructor={instructor} />
            ))}
          </div>
        </div>
      </div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
      {/* <script src="https://unpkg.com/swiper/swiper-bundle.min.js" /> */}
    </>
  );
}

export default InstructorsPage;
