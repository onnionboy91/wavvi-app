/* eslint-disable @typescript-eslint/no-misused-promises */
import { RootState } from '../../redux/store';
import React from 'react';
import { useSelector } from 'react-redux';
import './style.css';
// import CategoryVideosItem from '../videos/CategoryVideosItem';

function FavouritesPage(): JSX.Element {
  const userInSystem = useSelector((store: RootState) => store.auth.auth);
  const allLike = useSelector((store: RootState) => store.likes.likes).result;
  const currentLikes = userInSystem && allLike.filter((el: any) => el.user_id === +userInSystem.id);
  const videos = useSelector((store: RootState) => store.videos.videos);

  // allLike.map((video) => console.log(video, 'ggggggggg'));
  // const CurrentVideos =
  //   userInSystem && VideosWithLikes?.filter((el) => el.user_id === +userInSystem.id);
  // console.log(allLike, 'VideosWithLikes');

  // let d = [];
  // if (userInSystem) {
  //   for (let index = 0; index < allLike.length; index++) {
  //     if (allLike[index].user_id === +userInSystem.id) {
  //       d.push(allLike[index]);
  //     }
  //   }
  // }

  return (
    <>
      <h1>Favourites</h1>
      <div className="container"></div>
    </>
  );
}

export default FavouritesPage;
