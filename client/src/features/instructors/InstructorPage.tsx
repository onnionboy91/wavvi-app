/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../redux/store';

export type CurrentInstructor = {};

function InstructorPage(): JSX.Element {
  const { instructorId } = useParams();
  const instructors = useSelector((store: RootState) => store.instructors.instructors);
  console.log(instructors, 77777);

  const currentInstructor = instructorId && instructors.find((el) => el.id === +instructorId);

  return (
    <>
      {currentInstructor && (
        <>
          <div className="instr-container">
            <div className="instr-profile">
              <img
                className="instr-img"
                src="https://images.unsplash.com/photo-1601128426315-7a1d9168f163?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGhpcCUyMGhvcHxlbnwwfHwwfHx8MA%3D%3D"
              ></img>
              <div>
                <h1>{currentInstructor.name}</h1>
                <div className="instr-networks instr-border">
                  <p>social networks</p>
                  <p>sity</p>
                </div>
              </div>
            </div>
            <div className="instr-podrobnee">
              <div className="instr-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=hMEEDBBJ_Xed6s_s"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="instr-descr">
                <div className="instr-border">
                  <div className="instr-description">{currentInstructor.styleDance}</div>
                  <div className="instr-description">{currentInstructor.level}</div>
                </div>
                <div className="instr-border instr-description">
                  {currentInstructor.description}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default InstructorPage;
