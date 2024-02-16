import React, { useEffect, useState } from 'react';
import { RootState, useAppDispatch } from '../../redux/store';
import { addComment, loadComments } from './commentsSlice';
import './styles/style.css';
import { useSelector } from 'react-redux';
import CommentCard from './CommentCard';
import type { Video } from '../videos/types';

const FormAddComment = ({ video }: { video: Video }): JSX.Element => {
  const [title, setTitle] = useState('');
  const dispatch = useAppDispatch();
  const comment = useSelector((store: RootState) => store.comments.comments);
  const user = useSelector((store: RootState) => store.auth.auth);

  useEffect(() => {
    dispatch(loadComments()).catch(console.log);
  }, [comment]);

  return (
    <>
      <form
        id="add-comment"
        className="input-group"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addComment({
              title,
              user_id: user?.id,
              video_id: video.id,
            }),
          ).catch(console.log);
          setTitle('');
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
          placeholder="Написать комментарий"
        />
        <button className="btn btn-outline-secondary" type="submit">
          ДOБАВИТЬ
        </button>
      </form>
      <div>
        {comment &&
          comment.length > 0 &&
          comment
            .filter((el) => el?.video_id === video.id)
            .map(
              (comment: {
                video_id: any;
                id: any;
                User?: any;
                title?: string;
                user_id?: number | undefined;
              }) => <CommentCard key={comment.id} comment={comment} video={video.id} />,
            )}
      </div>
    </>
  );
};

export default FormAddComment;
