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
        <h5>Личный кабинет</h5>
        <form className="form-update-lk">
          {user?.role === 'Instructor' ? (
            <>
              <div>
                <img className="image" src={user?.img} alt="image" />
              </div>
              <div className="userInfo">
                <p>Имя: {user?.name}</p>
                <p>Стиль танца: {user?.styleDance}</p>
                <p>О себе: {user?.description}</p>
              </div>
            </>
          ) : user?.role === 'Dancer' ? (
            <>
              <div>
                <img className="image" src={user?.img} alt="image" />
              </div>
              <div>
                <h5>Имя: {user?.name}</h5>
                <h5>О себе: {user?.description}</h5>
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
