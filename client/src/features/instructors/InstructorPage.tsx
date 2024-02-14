/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../redux/store';
import facebook from '../../../assets/img/2959749_facebook_icon.png';
import mail from '../../../assets/img/622401_mail_packet_email_envelope_letter_icon.png';
import inst from '../../../assets/img//1161953_instagram_icon (1).png';
import location from '../../../assets/img/211766_location_icon.png';

export type CurrentInstructor = {};

function InstructorPage(): JSX.Element {
  const { instructorId } = useParams();
  const instructors = useSelector((store: RootState) => store.instructors.instructors);

  const currentInstructor = instructorId && instructors.find((el) => el.id === +instructorId);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.className = 'qqq'
    script.src = 'https://w1079066.yclients.com/widgetJS';
    document.body.appendChild(script);

    return () => {
      console.log(script);
      const qqq = document.querySelector('.qqq')
      const yButton = document.querySelector('.yButton')
      yButton?.remove()
        qqq?.remove();
    };
}, []);

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
              <div className="instr-contacts">
                <div className="instr-description">
                  <h1>{currentInstructor.name}</h1>
                </div>
                <div className="instr-networks">
                  <div>
                    <img src={inst} className="netw" />
                    <img src={facebook} className="netw" />
                    <img src={mail} className="netw" />
                  </div>
                  <div className="instr-profile">
                    <img src={location} className="netw" />
                    <p>London</p>
                  </div>
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
                  <p>Об инструкторе:</p>
                  {currentInstructor.description}
                </div>
              </div>
            </div>
            <button >Жми</button>
          </div>
        </>
      )}
    </>
  );
}

export default InstructorPage;
