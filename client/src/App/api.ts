/* eslint-disable import/prefer-default-export */
import type { User, UserSignIn } from '../features/auth/types';
import type {
  Instructor,
  InstructorId,
  InstructorUpdate,
  // InstructorWithOutId,
  NewInstructor,
} from '../features/instructors/types';
import { Category, CategoryId, CategoryWithOutId } from '../features/categories/types';
import { Like, LikeId, LikeWithOutId } from '../features/favourites/types';
import type { Comment, CommentId, CommentWithOutId } from '../features/comments/types';
import { Video } from '../features/videos/types';

// import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();

export const fetchLoadCategories = async (): Promise<Category[]> => {
  const res = await fetch('/api/categories');
  const data: { categories: Category[] } = (await res.json()) as { categories: Category[] };
  return data.categories;
};

export const fetchAddCategory = async (hero: CategoryWithOutId): Promise<Category> => {
  const res = await fetch('/api/heroes', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(hero),
  });
  const data: { categories: Category } = (await res.json()) as { categories: Category };
  return data.categories;
};

export const fetchCategoryRemove = async (id: CategoryId): Promise<CategoryId> => {
  const res = await fetch(`/api/categories/${id}`, {
    method: 'DELETE',
  });
  const data: { message: string; categoryId: CategoryId } = (await res.json()) as {
    message: string;
    categoryId: CategoryId;
  };
  if (data.message !== 'success') {
    throw new Error(data.message);
  }
  return data.categoryId;
};

export const fetchLoadInstructors = async (): Promise<Instructor[]> => {
  const res = await fetch('/api/instructors');
  const data: Instructor[] = await res.json();
  return data;
};

export const fetchAddInstructor = async (instructor: NewInstructor): Promise<Instructor> => {
  const res = await fetch('/api/instructors', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(instructor),
  });
  const data: { instructor: Instructor } = (await res.json()) as { instructor: Instructor };
  return data.instructor;
};

export const fetchInstructorRemove = async (id: InstructorId): Promise<InstructorId> => {
  const res = await fetch(`/api/instructors/${id}`, {
    method: 'DELETE',
  });
  const data: { message: string; instructorId: InstructorId } = (await res.json()) as {
    message: string;
    instructorId: InstructorId;
  };
  if (data.message !== 'success') {
    throw new Error(data.message);
  }
  return data.instructorId;
};

export const fetchUpdateInstructor = async (
  instructor: InstructorUpdate,
): Promise<InstructorUpdate> => {
  console.log(instructor, 8888);
  const res = await fetch(`/api/instructors`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(instructor),
  });
  const data: { instructor: InstructorUpdate } = (await res.json()) as {
    instructor: InstructorUpdate;
  };
  return data.instructor;
};

export const fetchCheckUser = async (): Promise<User> => {
  const res = await fetch('/api/auth/check');
  const data: { user: User } = (await res.json()) as { user: User };
  return data.user;
};

export const fetchSignIn = async (user: UserSignIn): Promise<User> => {
  const res = await fetch('/api/auth/sign-in', {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const data: { message: string; user: User } = (await res.json()) as {
    message: string;
    user: User;
  };
  console.log(data, 'daaaaaaaa');
  if (data.message !== 'success') {
    // console.log(111111111111111111111111111111111111111111);
    throw new Error(data.message);
  }

  return data.user;
};

export const fetchSignUp = async (formData: FormData): Promise<User> => {
  const res = await fetch('/api/auth/sign-up', {
    method: 'post',
    body: formData,
  });

  if (res.status >= 400) {
    const data: { message: string } = (await res.json()) as { message: string };
    throw new Error(data.message);
  }

  const data: { message: string; user: User } = (await res.json()) as {
    message: string;
    user: User;
  };
  return data.user;
};

export const fetchLogOut = async (): Promise<void> => {
  const res = await fetch('/api/auth/logout');
  const data: { message: string } = (await res.json()) as { message: string };
  if (data.message !== 'success') {
    throw new Error(data.message);
  }
};

export const fetchLoadComments = async (): Promise<Comment[]> => {
  const res = await fetch('/api/comments');
  const data: { comments: Comment[] } = (await res.json()) as { comments: Comment[] };
  return data.comments;
};

export const fetchAddComment = async (comment: CommentWithOutId): Promise<Comment> => {
  console.log(comment);

  const res = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(comment),
  });
  const data: { comments: Comment } = (await res.json()) as { comments: Comment };
  return data.comments;
};

export const fetchCommentRemove = async (id: CommentId): Promise<CommentId> => {
  const res = await fetch(`/api/comments/${id}`, {
    method: 'DELETE',
  });
  const data: { message: string; commentId: CommentId } = (await res.json()) as {
    message: string;
    commentId: CommentId;
  };
  if (data.message !== 'success') {
    throw new Error(data.message);
  }
  return data.commentId;
};

export const fetchLoadVideos = async (id: number): Promise<Video[]> => {
  console.log(id);
  const res = await fetch(`/api/categories/${id}`);
  const data: { videos: Video[] } = (await res.json()) as { videos: Video[] };
  console.log(data, 'data');

  return data.videos;
};

export const fetchLoadVideosAll = async (): Promise<Video[]> => {
  const result = await fetch(`/api/videos`);
  const data: Video[] = await result.json();
  return data;
};

export const fetchLoadLikes = async (): Promise<Like[]> => {
  const result = await fetch('/api/likes');
  const data: Like[] = await result.json();
  return data;
};

export const fetchAddLike = async (like: LikeWithOutId): Promise<Like> => {
  const res = await fetch('/api/likes', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(like),
  });
  const data: { like: Like } = (await res.json()) as { like: Like };
  return data.like;
};

export const fetchLikeRemove = async (like: LikeWithOutId): Promise<number> => {
  const result = await fetch(`/api/likes/${like.user_id}/${like.video_id}`, {
    method: 'DELETE',
  });
  const data: { message: string; likeId: LikeId } = (await result.json()) as {
    message: string;
    likeId: LikeId;
  };
  if (data.message !== 'success') {
    throw new Error(data.message);
  }
  return data.likeId;
};

// export const fetchUserProfile = async (id: UserInfoId): Promise<UserRole> => {
//   try {
//     const response = await fetch(`/api/profile/${id}`);
//     if (!response.ok) {
//       throw new Error('Ошибка запроса личного кабинета');
//     }
//     const data = await response.json();
//     // console.log(data, 555);
//     return data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

export const fetchProfileUpdate = async (user: User): Promise<User> => {
  const res = await fetch('/api/profile', {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const data: { user: User; message: string } = (await res.json()) as {
    user: User;
    message: string;
  };
  if (data.message !== 'success') {
    throw new Error(data.message);
  }
  return data.user;
};
