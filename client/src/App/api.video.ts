import { VideoWithOutId, Video, VideoId } from "../features/videos/types";


export const fetchAddVideo = async (video: VideoWithOutId): Promise<Video> => {
    const res = await fetch(`/api/videos`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(video),
    });
    const data: { video: Video } = (await res.json()) as { video: Video };
    return data.video;
  };
  
  export const fetchVideoRemove = async (id: VideoId): Promise<VideoId> => {
    const res = await fetch(`/api/videos/${id}`, {
      method: 'DELETE',
    });
    const data: { message: string; videoId: VideoId } = (await res.json()) as {
      message: string;
      videoId: VideoId;
    };
    if (data.message !== 'success') {
      throw new Error(data.message);
    }
    return data.videoId;
  };