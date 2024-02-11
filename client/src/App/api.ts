/* eslint-disable import/prefer-default-export */
import type { User, UserSignIn, UserSignUp } from '../features/auth/types';
import type { Instructor, InstructorId, InstructorWithOutId } from '../features/instructors/types';
import { Category, CategoryId, CategoryWithOutId } from '../features/categories/types';
import { Like, LikeWithOutId } from '../features/favourites/types';

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
  const data: { hero: Category } = (await res.json()) as { hero: Category };
  return data.hero;
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

export const fetchAddInstructor = async (instructor: InstructorWithOutId): Promise<Instructor> => {
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
  return data.user;
};

export const fetchSignUp = async (user: UserSignUp): Promise<User> => {
  const res = await fetch('/api/auth/sign-up', {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (res.status >= 400) {
    const data: { message: string } = (await res.json()) as { message: string };
    throw new Error(data.message);
  }
  const data: { message: string; user: User } = (await res.json()) as {
    message: string;
    user: User;
  };
  // console.log(data, 77);
  return data.user;
};

export const fetchLogOut = async (): Promise<void> => {
  const res = await fetch('/api/auth/logout');
  const data: { message: string } = (await res.json()) as { message: string };
  if (data.message !== 'success') {
    throw new Error(data.message);
  }
};

export const fetchLoadLikes = async (): Promise<Like[]> => {
  const result = await fetch('/api/likes');
  const data: Like[] = await result.json();
  return data;
};

export const fetchAddLike = async (like: LikeWithOutId): Promise<string> => {
  const res = await fetch('/api/likes', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(like),
  });
  const data: { message: string } = (await res.json()) as { message: string };
  return data.message;
};
