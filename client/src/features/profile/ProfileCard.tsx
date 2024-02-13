import React, { useState } from 'react';
import { RootState, useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import './styles/style.scss';
import { profileUpdate } from './ProfileSlice';
import { useNavigate } from 'react-router-dom';

function ProfileCard(): JSX.Element {
  const user = useSelector((store: RootState) => store.auth.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState(user?.name || '');
  const [styleDance, setStyleDance] = useState(user?.styleDance || '');
  const [description, setDescription] = useState(user?.description || '');

  const handleUpdateUser = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (user) {
      const updatedUser = {
        ...user,
        name: name,
        styleDance: styleDance,
        description: description,
      };
      dispatch(profileUpdate(updatedUser));
      navigate('/profile');
    }
  }; // console.log(user, 333);

  return (
    <div className="profile">
      <div className="container-profile">
        <h5>Личный кабинет</h5>
        <form className="form-update-form">
          {user?.role === 'Instructor' && (
            <>
              <div>
                <img className="image" src={user?.img} alt="image" />
              </div>
              <div className="userInfo">
                <div>
                  <p className="name-input">Имя:</p>
                  <input
                    className="inputProfile"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <p className="name-input">Стиль танца:</p>
                  <input
                    className="inputProfile"
                    type="text"
                    value={styleDance}
                    onChange={(e) => setStyleDance(e.target.value)}
                  />
                </div>
                <div>
                  <p className="name-input">Описание:</p>
                  <textarea
                    className="inputProfile"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </>
          )}
          {user?.role === 'Dancer' && (
            <>
              <div>
                <img className="image" src={user?.img} alt="image" />
              </div>
              <div>
                <p className="name-input">Имя:</p>
                <input
                  className="inputProfile"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <p className="name-input">Описание:</p>
                <textarea
                  className="inputProfile"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </>
          )}
          <div className="button-container">
            <button className="save-button" onClick={(e) => handleUpdateUser(e)}>
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileCard;
