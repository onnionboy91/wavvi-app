export type Like = {
  id: number;
  user_id: number;
  video_id: number;
};

export type LikeId = Like['id'];

export type LikeWithOutId = Omit<Like, 'id'>;

export type LikesState = {
  likes: Like[];
  error: string | undefined;
  loading: boolean;
};
