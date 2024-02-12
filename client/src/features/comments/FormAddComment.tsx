import React, { useState } from 'react';
import { RootState, useAppDispatch } from '../../redux/store';
import { addComment } from './commentsSlice';
import './styles/style.css';
import { useSelector } from 'react-redux';
import CommentCard from './CommentCard';
import type { Video } from '../videos/types';


const FormAddComment = ({video}: {video: Video}): JSX.Element => {
  const [title, setTitle] = useState('');
  const dispatch = useAppDispatch();
  const comment = useSelector((store: RootState) => store.comments.comments)
  const user = useSelector((store: RootState) => store.auth.auth)
  
  return (
    <>
    <form
      id="add-comment"
      className="input-group"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(user);
        
        dispatch(addComment({
          title,
          user_id: user?.id,
          video_id: video.id
        })).catch(console.log);
      }}
    >
      {/* <div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2">vxvxv</textarea>
  <label for="floatingTextarea2">Comments</label>
</div> */}
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        className="form-control"
        placeholder="написать комментарий"
      />
      <button className="btn btn-outline-secondary" type="submit">
        добавить
      </button>
    </form>
  <div>
{comment.map((comment) => (
   comment.video_id === video.id &&
    <CommentCard key={comment.id} comment={comment} video={video.id}/>
))}
  </div>
  </>
  );
};

export default FormAddComment;
