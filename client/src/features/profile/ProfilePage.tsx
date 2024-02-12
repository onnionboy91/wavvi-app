import React, { useState } from 'react';
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
        <form>
          {user?.role === 'Instructor' ? (
            <>
              <div>
                <img className="image" src={user?.img} alt="image" />
              </div>
              <h5>Имя: {user?.name}</h5>
              <h5>Стиль танца: {user?.styleDance}</h5>
              <h5>О себе: {user?.description}</h5>
            </>
          ) : user?.role === 'Dancer' ? (
            <>
              <div>
                <img className="image" src={user?.img} alt="image" />
              </div>
              <div>Имя: {user?.name}</div>
              <h5>О cебе: {user?.description}</h5>
            </>
          ) : null}
        </form>
        <Link to="/other-form">Редактировать</Link>
      </div>
    </div>
  );
}

export default ProfilePage;
