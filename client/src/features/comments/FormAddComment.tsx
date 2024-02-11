import React, { useState } from 'react';
import { RootState, useAppDispatch } from '../../redux/store';
import { addComment } from './commentsSlice';
import './styles/style.css';
import { useSelector } from 'react-redux';
import CommentCard from './CommentCard';

const FormAddComment = (): JSX.Element => {
  const [title, setTitle] = useState('');
  const dispatch = useAppDispatch();
  const comment = useSelector((store: RootState) => store.comments.comments)

  return (
    <>
    <form
      id="add-comment"
      className="input-group"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addComment({
          title,
          user_id: 1,
          video_id: 1
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
  <CommentCard key={comment.id} comment={comment} />
))}
  </div>
  </>
  );
};

export default FormAddComment;
