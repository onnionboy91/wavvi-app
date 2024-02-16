import React, { useState } from 'react';
import { RootState, useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import './styles/style.scss';
import { profileUpdate } from './ProfileSlice';
import { redirect, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "public/img");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage });

function ProfileCard(): JSX.Element {
  const user = useSelector((store: RootState) => store.auth.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState(user?.name || '');
  const [styleDance, setStyleDance] = useState(user?.styleDance || '');
  const [img, setImg] = useState(user?.img || '');

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
      window.location.href = '/profile';
      // navigate(-1);
    }
  }; // console.log(user, 333);

  return (
    <div className="profile">
      <div className="container-profile">
        <h5>ЛИЧНЫЙ КАБИНЕТ</h5>
        <form className="form-update-form" onSubmit={(e) => e.preventDefault()}>
          {user?.role === 'Instructor' && (
            <>
              <div>
                <img className="image" src={user?.img} alt="image" />
              </div>
              <div className="userInfo">
                <div>
                  <strong className="name-input">Фотография:</strong>
                  <div>
                    <input
                      className="inputProfile"
                      onChange={(e) => setImg(e.target.files)}
                      type="file"
                    />
                  </div>
                  <button className="delete-button" onClick={(e) => handleUpdateUser(e)}>
                    <i className="bx bxs-trash"></i>
                  </button>
                </div>
                <div>
                  <strong className="name-input">Имя:</strong>
                  <input
                    className="inputProfile"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <strong className="name-input">Стили танцев:</strong>
                  <input
                    className="inputProfile"
                    type="text"
                    value={styleDance}
                    onChange={(e) => setStyleDance(e.target.value)}
                  />
                </div>
                <div>
                  <strong className="name-input">О себе:</strong>
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
                <strong className="name-input">Имя:</strong>
                <input
                  className="inputProfile"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <strong className="name-input">Стиль танца:</strong>
                <input
                  className="inputProfile"
                  type="text"
                  value={styleDance}
                  onChange={(e) => setStyleDance(e.target.value)}
                />
              </div>

              <div>
                <strong className="name-input">Описание:</strong>
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
            <Link className="save-button" to="/profile">
              Назад
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileCard;
