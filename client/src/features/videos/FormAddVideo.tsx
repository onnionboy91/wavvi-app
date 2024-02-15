import React, { useState } from 'react';
import './styles/style.css';
import { useAppDispatch } from '../../redux/store';
import { addVideo } from './videosSlice';

const FormAddVideo = ({ categoryId }: { categoryId: string }): JSX.Element => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [img, setImg] = useState('');
  const [level, setLevel] = useState('');

  const dispatch = useAppDispatch();
  return (
    <div className="auth-container">
      <h4 className="auth">Добавить видео</h4>
      <form
        action=""
        className="sign-in"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addVideo({ name, content, img, level, category_id: +categoryId })).catch(
            console.log,
          );
        }}
      >
        <input
          className="form-control input"
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Название"
        />
        <input
          className="form-control input"
          onChange={(e) => setContent(e.target.value)}
          type="text"
          placeholder="Ссылка на видео"
        />
        <input
          className="form-control input"
          onChange={(e) => setImg(e.target.value)}
          type="text"
          placeholder="Ссылка на изображение"
        />
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="form-input-video"
        >
          <option value="">Cложность</option>
          <option value="BEGGINER">BEGGINER</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="PRO">PRO</option>
        </select>
        <button className="form-control input submit" type="submit">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default FormAddVideo;
