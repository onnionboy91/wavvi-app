/* eslint-disable import/prefer-default-export */
import type { Instructor, InstructorId, InstructorWithOutId } from '../features/instructors/types';

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
