import React from 'react';
import type { Comment } from './types';
import { RootState, useAppDispatch } from '../../redux/store';
import { removeComment } from './commentsSlice';
import type { Video } from '../videos/types';
import { useSelector } from 'react-redux';

const CommentCard = ({ comment, video }: { comment: Comment, video: number}): JSX.Element => {
  
  const dispatch = useAppDispatch()

  const user = useSelector((store: RootState) => store.auth.auth)

  const date = new Date(comment.createdAt);

const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');
const hours = String(date.getHours()).padStart(2, '0');
const minutes = String(date.getMinutes()).padStart(2, '0');
const seconds = String(date.getSeconds()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  return (
    <>
    <div className='comment-card'>
    <p>{comment.user_id}</p>
       <h4>{comment.title}</h4>
       {user && user.name === 'admin' && (
         <button onClick={() => dispatch(removeComment(comment.id))} type="button" className="btn btn-light">Удалить</button>
       )}
    <p className='comment-date'>{formattedDate}</p>
    </div>
    </>
  )
};

export default CommentCard;
