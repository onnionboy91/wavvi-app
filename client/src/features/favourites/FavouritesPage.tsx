/* eslint-disable @typescript-eslint/no-misused-promises */
import { RootState, useAppDispatch } from '../../redux/store';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import CategoryVideosItem from '../videos/CategoryVideosItem';
import { loadVideosAll } from '../videos/videosSlice';

function FavouritesPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const userInSystem = useSelector((store: RootState) => store.auth.auth);
  const allLikes = useSelector((store: RootState) => store.likes.likes);
  const currentLikes =
    userInSystem && allLikes.filter((el: any) => el.user_id === +userInSystem.id);
  const allVideos = useSelector((store: RootState) => store.videos.videos);
  const currentVideos =
    currentLikes &&
    allVideos.filter((video) => currentLikes.some((el) => video.id === el.video_id));

  useEffect(() => {
    dispatch(loadVideosAll);
  }, []);

  return (
    <>
      <div style={{ marginTop: '7%' }}>
        <h1>Favourites</h1>
        <div className="container">
          {currentVideos &&
            currentVideos.map((video) => <CategoryVideosItem key={video.id} video={video} />)}
        </div>
      </div>
    </>
  );
}

export default FavouritesPage;
