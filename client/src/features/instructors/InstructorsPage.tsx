/* eslint-disable @typescript-eslint/no-misused-promises */
import { RootState } from '../../redux/store';
import React from 'react';
import { useSelector } from 'react-redux';
import InstructorCard from './InstructorCard';
import FormAddInstructor from './FormAddInstructor';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function InstructorsPage(): JSX.Element {
  const instructors = useSelector((store: RootState) => store.instructors.instructors);
  const user = useSelector((store: RootState) => store.auth.auth);

  return (
    <>
      {user?.name === 'admin' && <FormAddInstructor />}

      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{ marginTop: '100px' }}
      >
        {instructors.map((instructor) => (
          <SwiperSlide>
            <InstructorCard key={instructor.id} instructor={instructor} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default InstructorsPage;
