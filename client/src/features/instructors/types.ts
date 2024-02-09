export type Instructor = {
  id: number;
  name: string;
  styleDance: string;
  level: string;
  description: string;
};

export type InstructorId = Instructor['id'];

export type InstructorWithOutId = Omit<Instructor, 'id'>;

export type InstructorsState = {
  instructors: Instructor[];
  error: string | undefined;
  loading: boolean;
};
