import React, { useState } from 'react'
import { Video } from "./types"
import Modal from "./Modal"

type VideosItemProps = {
  video: Video
}

const CategoryVideosItem = ({video}:VideosItemProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  console.log(modalOpen)

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
    <div className="card" style={{margin: '50px'}} >
    <img src={video.img} className="card-img-top" alt="..."/>
    <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <iframe src={video.content}></iframe>
      </Modal>
  <div className="card-body">
    <h5 className="card-title">{video.name}</h5>
    <h5 className="card-title">{video.level}</h5>
    <p className="card-text">Description</p>

  </div>
</div>
</>
  )
}

export default CategoryVideosItem