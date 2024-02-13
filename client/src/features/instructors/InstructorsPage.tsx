/* eslint-disable @typescript-eslint/no-misused-promises */
import { RootState } from '../../redux/store';
import React from 'react';
import { useSelector } from 'react-redux';
import InstructorCard from './InstructorCard';
import FormAddInstructor from './FormAddInstructor';

function InstructorsPage(): JSX.Element {
  const instructors = useSelector((store: RootState) => store.instructors.instructors);

  return (
    <>
      <FormAddInstructor />
      <div className="card-container">
        {instructors.map((instructor) => (
          <InstructorCard key={instructor.id} instructor={instructor} />
        ))}
      </div>
    </>
  );
}

export default InstructorsPage;
