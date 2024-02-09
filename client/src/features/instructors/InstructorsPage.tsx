/* eslint-disable @typescript-eslint/no-misused-promises */
import { RootState } from '../../redux/store';
import React from 'react';
import { useSelector } from 'react-redux';
import InstructorCard from './InstructorCard';

function InstructorsPage(): JSX.Element {
  const instructors = useSelector((store: RootState) => store.instructors.instructors);

  return (
    <>
      <h1>Instructors</h1>
      <div style={{ display: 'flex' }}>
        {instructors.map((instructor) => (
          <InstructorCard key={instructor.id} instructor={instructor} />
        ))}
      </div>
    </>
  );
}

export default InstructorsPage;
