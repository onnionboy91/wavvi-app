import FormAddComment from '../comments/FormAddComment'
import React, { useState } from 'react';
import { Video } from './types';
import Modal from './Modal';
import likeImg from '../../../assets/img/party_13739378.png';
import likeImgRed from '../../../assets/img/heart_2107845.png';
import { addLike, removeLike } from '../favourites/likesSlice';
import { useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

type VideosItemProps = {
  video: Video;
};

const CategoryVideosItem = ({ video }: VideosItemProps) => {
  const userInSystem = useSelector((store: RootState) => store.auth.auth);

  const [modalOpen, setModalOpen] = useState(false);
  const [likeState, setLike] = useState(likeImg);

  const dispatch = useAppDispatch();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const onHandleLike = async (): Promise<void> => {
    if (userInSystem) {
      if (likeState === likeImg) {
        const result = await dispatch(
          addLike({ user_id: userInSystem.id, video_id: video.id }),
        ).catch(console.log);
        if (result) {
          setLike(likeImgRed);
        }
      } else {
        const result = await dispatch(
          removeLike({ user_id: userInSystem.id, video_id: video.id }),
        ).catch(console.log);
        if (result) {
          setLike(likeImg);
        }
      }
    }
  };

  return (
    <>
    <div className="card-videos" style={{margin: '50px'}} >
    <img src={video.img} className="card-img-videos" alt="..."/>
    <button className='card-modal-videos' onClick={openModal}>PLAY</button>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <iframe width="560" height="315" src={video.content} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <FormAddComment key={video.id} video={video}/>
      </Modal>
  <div className="card-body">
    <h5 className="card-title-videos">{video.name}</h5>
    <h5 className="card-title-level">{video.level}</h5>
    <p className="card-text">Description</p>
    <button onClick={onHandleLike} type="button">
      <img className="btn-like-img" src={likeState}></img>
    </button>
  </div>
</div>
{/* <div data-poster-url="https://assets-global.website-files.com/5dbb40d6d8c97447e9450447/6195bc3f9e9c991b6505ab49_GRID_STYLES_LANDING_PAGE_1-poster-00001.jpg" data-video-urls="https://assets-global.website-files.com/5dbb40d6d8c97447e9450447/6195bc3f9e9c991b6505ab49_GRID_STYLES_LANDING_PAGE_1-transcode.mp4,https://assets-global.website-files.com/5dbb40d6d8c97447e9450447/6195bc3f9e9c991b6505ab49_GRID_STYLES_LANDING_PAGE_1-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" data-beta-bgvideo-upgrade="false" className="background-video updated w-background-video w-background-video-atom"><video id="98f8b142-c4aa-3696-4aef-7a3dcef0c0b3-video" autoplay="" style="background-image:url(&quot;https://assets-global.website-files.com/5dbb40d6d8c97447e9450447/6195bc3f9e9c991b6505ab49_GRID_STYLES_LANDING_PAGE_1-poster-00001.jpg&quot;)" playsinline="" data-wf-ignore="true" data-object-fit="cover"><source src="https://assets-global.website-files.com/5dbb40d6d8c97447e9450447/6195bc3f9e9c991b6505ab49_GRID_STYLES_LANDING_PAGE_1-transcode.mp4" data-wf-ignore="true" /><source src="https://assets-global.website-files.com/5dbb40d6d8c97447e9450447/6195bc3f9e9c991b6505ab49_GRID_STYLES_LANDING_PAGE_1-transcode.webm" data-wf-ignore="true" /></video> 

</div> */}
    </>
  );
};

export default CategoryVideosItem;
