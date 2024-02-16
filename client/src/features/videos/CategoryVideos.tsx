import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { loadVideos } from './videosSlice';
import { useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import CategoryVideosItem from './CategoryVideosItem';
import './styles/style.css';
import CommonlyUsedComponents from '../instructors/Calendar';
import FormAddVideo from './FormAddVideo';
// import CallComponent from "../Call/CallComponent"

const CategoryVideos = () => {
  const dispatch = useAppDispatch();
  const { categoryId } = useParams();
  const videos = useSelector((store: RootState) => store.videos.videos);
  const user = useSelector((store: RootState) => store.auth.auth);

  useEffect(() => {
    dispatch(loadVideos(+categoryId!)).catch(console.log);
  }, []);

  return (
    <div className="form-add">
      <div>{user && user.name === 'admin' && <FormAddVideo categoryId={categoryId} />}</div>

      <div className="cards-videos">
        {videos.map((video) => (
          <CategoryVideosItem key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default CategoryVideos;
