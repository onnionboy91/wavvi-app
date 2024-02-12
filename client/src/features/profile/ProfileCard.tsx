import React, { useState } from 'react';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { updateUser } from './ProfileSlice';
import './styles/style.scss';

function ProfilePage(): JSX.Element {
  const user = useSelector((store: RootState) => store.auth.auth);

  const [name, setName] = useState(user?.name || '');
  const [level, setLevel] = useState(user?.level || '');
  const [styleDance, setStyleDance] = useState(user?.styleDance || '');
  const [description, setDescription] = useState(user?.description || '');

  const handleUpdateUser = () => {
    const updatedUser = {
      ...user,
      name: name,
      level: level,
      styleDance: styleDance,
      description: description,
    };
    dispatch(updateUser(updatedUser));
  }; // console.log(user, 333);

  return (
    <div className="profile">
      <div className="container-profile">
        <h5>Личный кабинет</h5>
        <form>
          <div>
            <img className="image" src={user?.img} alt="image" />
          </div>
          <div>
            Имя:
            <input
              // className="input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {user?.role === 'Instructor' && (
            <>
              <div>
                Уровень:
                <input type="text" value={level} onChange={(e) => setLevel(e.target.value)} />
              </div>
              <div>
                Стиль танца:
                <input
                  type="text"
                  value={styleDance}
                  onChange={(e) => setStyleDance(e.target.value)}
                />
              </div>
              <div>
                Описание:
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </>
          )}
          <button onClick={handleUpdateUser}>Сохранить</button>
        </form>
      </div>
    </div>
  );
}

export default ProfilePage;
