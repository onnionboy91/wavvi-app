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
    <form
      action=""
      className="form-add-video"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addVideo({ name, content, img, level, category_id: +categoryId })).catch(
          console.log,
        );
      }}
    >
      <input
        className="form-input-video"
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="название"
      />
      <input
        className="form-input-video"
        onChange={(e) => setContent(e.target.value)}
        type="text"
        placeholder="ссылка на видео"
      />
      <input
        className="form-input-video"
        onChange={(e) => setImg(e.target.value)}
        type="text"
        placeholder="ссылка на изображение"
      />
      <select value={level} onChange={(e) => setLevel(e.target.value)} className="form-input-video">
        <option value="">Cложность</option>
        <option value="BEGGINER">BEGGINER</option>
        <option value="MEDIUM">MEDIUM</option>
        <option value="PRO">PRO</option>
      </select>
      <button className="form-btn-video" type="submit">
        Добавить
      </button>
    </form>
  );
};

export default FormAddVideo;
