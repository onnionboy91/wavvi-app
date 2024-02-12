export type Comment = {
    id: number,
    title: string,
    user_id: number | undefined,
    video_id: number,
    // createdAt: number
}

export type UserComments = {
    id: number,
}

export type CommentId = Comment['id']

export type CommentWithOutId = Omit<Comment, 'id'>;

export type CommentsState = {
    comments: Comment[],
    error: string | undefined,
    loading: boolean
}