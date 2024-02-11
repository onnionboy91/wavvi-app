/* eslint-disable @typescript-eslint/no-misused-promises */
import { RootState } from '../../redux/store';
import React from 'react';
import { useSelector } from 'react-redux';

function FavouritesPage(): JSX.Element {
  const instructorsWithLikes = useSelector((store: RootState) => store.likes.likes);
  // const userInSystem = useSelector((store: RootState) => store.auth);

  return (
    <div>
      {/* {userInSystem && (
        <div>{videosWithLikes.filter((like) => like.user_id === +userInSystem.id)}</div>
      )} */}
      {instructorsWithLikes.map((instructorLike) => (
        <div>{instructorLike.id}</div>
      ))}
    </div>
  );
}

export default FavouritesPage;
