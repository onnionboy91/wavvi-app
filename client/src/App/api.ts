/* eslint-disable import/prefer-default-export */
import type { User, UserSignIn, UserSignUp, UserWithOutId } from '../features/auth/types';
import type { Instructor, InstructorId, InstructorWithOutId } from '../features/instructors/types';
import { Category } from '../features/categories/types';

export const fetchLoadCategories = async (): Promise<Category[]> => {

  const res = await fetch('/api/categories');
  const data: { categories: Category[] } = (await res.json()) as { categories: Category[] };
  return data.categories;
};

export const fetchLoadInstructors = async (): Promise<Instructor[]> => {
  const res = await fetch('/api/instructors');
  const data: { Instructors: Instructor[] } = (await res.json()) as { Instructors: Instructor[] };
  return data.Instructors;
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
  return data.user;
};

export const fetchLogOut = async (): Promise<void> => {
  const res = await fetch('/api/auth/logout');
  const data: { message: string } = (await res.json()) as { message: string };
  if (data.message !== 'success') {
    throw new Error(data.message);
  }
};
