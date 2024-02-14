import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { loadVideos } from './videosSlice';
import { useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import CategoryVideosItem from './CategoryVideosItem';
import './styles/style.css';
import CommonlyUsedComponents from "../instructors/Calendar"
import FormAddVideo from './FormAddVideo';
// import CallComponent from "../Call/CallComponent"

const CategoryVideos = () => {
  const dispatch = useAppDispatch();
  const { categoryId } = useParams();
  const videos = useSelector((store: RootState) => store.videos.videos);
  console.log(videos, 'videos');

  useEffect(() => {
    dispatch(loadVideos(+categoryId!)).catch(console.log);
  }, []);

  return (
    <div className="cards-videos">
      <FormAddVideo categoryId={categoryId}/>
      {videos.map((video) => (
        <CategoryVideosItem key={video.id} video={video} />
      ))}
          <div>
      <h1>Video Call App</h1>
      {/* <CallComponent /> */}
    </div>
    </div>
  );
};

export default CategoryVideos;
