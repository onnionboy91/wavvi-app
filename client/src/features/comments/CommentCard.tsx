import React from 'react';
import type { Comment } from './types';
import { useAppDispatch } from '../../redux/store';
import { removeComment } from './commentsSlice';

const CommentCard = ({ comment }: { comment: Comment}): JSX.Element => {

  const dispatch = useAppDispatch()
  return (
    <>
    <div className='comment-card'>
      {/* <h5>{comment.User.name}</h5> */}
       <h4>{comment.title}</h4>
       <button onClick={() => dispatch(removeComment(comment.id))} type="button" className="btn btn-light">Удалить</button>
    </div>
    {/* <p>{comment.createdAt.toLocaleString()}</p> */}
    </>
  )
};

export default CommentCard;
