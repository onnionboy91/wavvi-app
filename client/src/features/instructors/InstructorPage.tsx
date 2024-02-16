/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../redux/store';
import facebook from '../../../assets/img/2959749_facebook_icon.png';
import mail from '../../../assets/img/622401_mail_packet_email_envelope_letter_icon.png';
import inst from '../../../assets/img//1161953_instagram_icon (1).png';
import location from '../../../assets/img/211766_location_icon.png';

function InstructorPage(): JSX.Element {
  const { instructorId } = useParams();
  const instructors = useSelector((store: RootState) => store.instructors.instructors);

  const currentInstructor = instructorId && instructors.find((el) => el.id === +instructorId);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.className = 'qqq';
    script.src = 'https://w1079066.yclients.com/widgetJS';
    document.body.appendChild(script);

    return () => {
      console.log(script);
      const qqq = document.querySelector('.qqq');
      const yButton = document.querySelector('.yButton');
      yButton?.remove();
      qqq?.remove();
    };
  }, []);

  return (
    <div className="container-instructorPage">
      {currentInstructor && (
        <>
          <div className="instr-container">
            <div className="instr-profile">
              <img className="instr-img" src={currentInstructor.img}></img>
              <div className="instr-contacts">
                <div className="instr-description">
                  <h1>{currentInstructor.name}</h1>
                </div>
                <div className="instr-networks">
                  <div className="inst">
                    <img src={inst} className="netw" />
                    <img src={facebook} className="netw" />
                    <img src={mail} className="netw" />
                  </div>
                </div>
              </div>
            </div>
            <div className="instr-podrobnee">
              <div className="instr-video">
                <div>
                  <iframe
                    width="600"
                    height="350"
                    src="https://www.youtube.com/embed/vBKYRIUhUUM?si=9T1BByH9iEe8BVoQ"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    style={{ borderRadius: '5px' }}
                    allowFullScreen
                  ></iframe>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <iframe
                    width="600"
                    height="350"
                    src="https://www.youtube.com/embed/IW1HZAoKuGA?si=r5tdWI8LnrRnPNaR"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="instr-descr">
                <div className="instr-border">
                  <h4 className="instr-description">{currentInstructor.styleDance}</h4>
                  <h4 className="instr-description">{currentInstructor.level}</h4>
                </div>
                <div className="instr-border instr-description">
                  {/* <p>Информация</p> */}
                  {currentInstructor.description}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default InstructorPage;
