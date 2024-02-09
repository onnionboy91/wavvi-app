/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { useSelector } from 'react-redux';

function SavedPage(): JSX.Element {
  const videosWithLikes = useSelector((store: RootState) => store.likes.likes);
  const userInSystem = useSelector((store: RootState) => store.auth);

  return (
    <div>
      {userInSystem && (
        <div>{videosWithLikes.filter((like) => like.user_id === +userInSystem.id)}</div>
      )}
    </div>
  );
}

export default SavedPage;
