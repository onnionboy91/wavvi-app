export type Comment = {
    id: number,
    title: string,
    user_id: number,
    video_id: number,
    // createdAt: number
}

export type CommentId = Comment['id']

export type CommentWithOutId = Omit<Comment, 'id'>;

export type CommentsState = {
    comments: Comment[],
    error: string | undefined,
    loading: boolean
}