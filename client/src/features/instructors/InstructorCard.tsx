/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { Instructor } from './types';

function InstructorCard({ instructor }: { instructor: Instructor }): JSX.Element {
  return (
    <div>
      <img
        src="https://st.focusedcollection.com/14026668/i/650/focused_522995932-stock-photo-male-dancer-practicing-arabesque-position.jpg"
        alt="nice dancer"
      ></img>
      <h3>{instructor.name}</h3>
      <h3>{instructor.styleDance}</h3>
    </div>
  );
}

export default InstructorCard;
