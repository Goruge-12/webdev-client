
import { create } from "zustand";
import { courses as initialCourses } from "../database";

export type Course = {
  _id: string;
  name: string;
  number: string;
  description: string;
  image: string;
  startDate?: string;
};

type CourseStore = {
  courses: Course[];
  addCourse: (course: Course) => void;
  updateCourse: (course: Course) => void;
  deleteCourse: (courseId: string) => void;
};

export const useCourseStore = create<CourseStore>((set) => ({
  courses: [...initialCourses],

  addCourse: (course) =>
    set((state) => ({
      courses: [...state.courses, course],
    })),

  updateCourse: (course) =>
    set((state) => ({
      courses: state.courses.map((c) =>
        c._id === course._id ? course : c
      ),
    })),

  deleteCourse: (courseId) =>
    set((state) => ({
      courses: state.courses.filter((c) => c._id !== courseId),
    })),
}));
