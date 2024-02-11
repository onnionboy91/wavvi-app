import React, { useEffect } from 'react'
import { useParams } from "react-router-dom"
import { loadVideos } from "./videosSlice"
import { useAppDispatch } from "../../redux/store"
import { useSelector } from "react-redux"
import { RootState } from '../../redux/store'
import CategoryVideosItem from "./CategoryVideosItem"

const CategoryVideos = () => {
  const dispatch = useAppDispatch()
  const { categoryId } = useParams()
  const videos = useSelector((store: RootState) => store.videos.videos)

  console.log(videos)


  useEffect(() => {
    console.log('wefbwehfbweujfbewufbweuyfbewyufweuyfbweu')
    dispatch(loadVideos(+categoryId!)).catch(console.log)
  },[])

  return (
    <div>
      {videos.map((video) => (
        <CategoryVideosItem key={video.id} video={video}/>
    ))}
    </div>

  )
}

export default CategoryVideos