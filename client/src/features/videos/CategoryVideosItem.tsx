import React, { useState } from 'react';
import { Video } from './types';
import Modal from './Modal';
import likeImg from '../../../assets/img/party_13739378.png';
import likeImgRed from '../../../assets/img/heart_2107845.png';
import { addLike, removeLike } from '../favourites/likesSlice';
import { useAppDispatch } from '../../redux/store';

type VideosItemProps = {
  video: Video;
};

const CategoryVideosItem = ({ video }: VideosItemProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [likeState, setLike] = useState(likeImg);

  const dispatch = useAppDispatch();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const onHandleLike = async (): Promise<void> => {
    if (likeState === likeImg) {
      const result = await dispatch(addLike({ user_id: 1, video_id: video.id })).catch(console.log);
      if (result) {
        setLike(likeImgRed);
      }
    } else {
      const result = await dispatch(removeLike({ user_id: 1, video_id: video.id })).catch(
        console.log,
      );
      if (result) {
        setLike(likeImg);
      }
    }
  };

  return (
    <>
      <div className="card" style={{ margin: '50px' }}>
        <button onClick={openModal}>Open Modal</button>
        <Modal isOpen={modalOpen} onClose={closeModal}>
          <iframe src={video.content}></iframe>
        </Modal>
        <div className="card-body">
          <h5 className="card-title">{video.name}</h5>
          <h5 className="card-title">{video.level}</h5>
          <p className="card-text">Description</p>
          <button onClick={onHandleLike} type="button">
            <img className="btn-like-img" src={likeState}></img>
          </button>
        </div>
      </div>
    </>
  );
};

export default CategoryVideosItem;
