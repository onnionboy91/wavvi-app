import React from 'react';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import './styles/style.scss';
import { Link } from 'react-router-dom';

function ProfilePage(): JSX.Element {
  const user = useSelector((store: RootState) => store.auth.auth);

  return (
    <div className="profile">
      <div className="container-profile">
        <h5>ЛИЧНЫЙ КАБИНЕТ</h5>
        <form className="form-update-lk">
          {user?.role === 'Instructor' ? (
            <>
              <div>
                <img className="image" src={user?.img} alt="image" />
              </div>
              <div className="userInfo">
                <h5 className="h5">
                  <strong>Имя:</strong> {user?.name}
                </h5>
                <h5 className="h5">
                  <strong>Стиль танца:</strong> {user?.styleDance}
                </h5>
                <h5 className="h5">
                  <strong>О себе:</strong> {user?.description}
                </h5>
              </div>
            </>
          ) : user?.role === 'Dancer' ? (
            <>
              <div>
                <img className="image" src={user?.img} alt="image" />
              </div>
              <div className="userInfo">
                <h5 className="h5">
                  <strong>Имя:</strong> {user?.name}
                </h5>
                <h5 className="h5">
                  <strong>Стиль танца:</strong> {user?.styleDance}
                </h5>
                <h5 className="h5">
                  <strong>О себе:</strong> {user?.description}
                </h5>
              </div>
            </>
          ) : null}
        </form>
        <div className="button-container">
          <Link className="link-button" to="/profile/edit">
            Редактировать
          </Link>
          <Link className="link-button" to="/">
            На главную
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

{
  /* <i className="bx bxl-telegram"></i>
<i className="bx bxl-whatsapp"></i>
<i className="bx bxl-facebook"></i>
<i className="bx bxl-instagram"></i> */
}
