export type Video = {
    id: number,
    name: string,
    content: string,
    level: string,
    category_id: number,
}

export type VideoId = Video['id']

export type VideoWithOutId = Omit<Video, 'id'>;

export type VideosState = {
    videos: Video[],
    error: string | undefined,
    loading: boolean
}