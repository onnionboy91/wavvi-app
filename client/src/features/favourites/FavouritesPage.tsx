/* eslint-disable @typescript-eslint/no-misused-promises */
import { RootState, useAppDispatch } from '../../redux/store';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import CategoryVideosItem from '../videos/CategoryVideosItem';
import { loadVideosAll } from './videosWithLikesSlice';

function FavouritesPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const userInSystem = useSelector((store: RootState) => store.auth.auth);
  console.log(userInSystem);
  const allLikes = useSelector((store: RootState) => store.likes.likes);
  console.log(allLikes);
  const currentLikes =
    userInSystem && allLikes.filter((el: any) => el.user_id === +userInSystem.id);
  console.log(currentLikes, 888);
  const allVideos = useSelector((store: RootState) => store.videosWithLikes.videosWithLikes);
  console.log(allVideos, 666);

  const currentVideos =
    currentLikes &&
    allVideos.filter((video) => currentLikes.some((el) => video.id === el.video_id));

  console.log(currentVideos, 555);

  useEffect(() => {
    dispatch(loadVideosAll);
  }, []);

  return (
    <div className="containerDiv">
      <div style={{ marginTop: '60px' }}>
        <h1>Избранное</h1>
        <div className="containerOne">
          {currentVideos &&
            currentVideos.map((video) => <CategoryVideosItem key={video.id} video={video} />)}
        </div>
      </div>
    </div>
  );
}

export default FavouritesPage;
