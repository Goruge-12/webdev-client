
"use client";

import { useState } from "react";
import CourseCard from "./CourseCard";
import { useCourseStore, type Course } from "./useCourseStore";

type CourseForm = {
  name: string;
  description: string;
  number: string;
  startDate: string;
};

const emptyCourse: CourseForm = {
  name: "",
  description: "",
  number: "",
  startDate: "2026-09-01",
};

export default function Dashboard() {
  const { courses, addCourse, updateCourse, deleteCourse } =
    useCourseStore();

  const [course, setCourse] = useState<CourseForm>(emptyCourse);
  const [editingId, setEditingId] = useState<string | null>(null);

  const clearForm = () => {
    setCourse(emptyCourse);
    setEditingId(null);
  };

  const add = () => {
    if (!course.name.trim()) {
      return;
    }

    const newCourse: Course = {
      _id: Date.now().toString(),
      name: course.name,
      description: course.description,
      number: course.number,
      startDate: course.startDate,
      image: "/images/reactjs.jpg",
    };

    addCourse(newCourse);
    clearForm();
  };

  const edit = (selectedCourse: Course) => {
    setEditingId(selectedCourse._id);

    setCourse({
      name: selectedCourse.name,
      description: selectedCourse.description,
      number: selectedCourse.number,
      startDate: selectedCourse.startDate ?? "2026-09-01",
    });
  };

  const update = () => {
    if (!editingId || !course.name.trim()) {
      return;
    }

    const selectedCourse = courses.find(
      (c) => c._id === editingId
    );

    if (!selectedCourse) {
      return;
    }

    updateCourse({
      ...selectedCourse,
      ...course,
    });

    clearForm();
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      <h2>Course</h2>

      <div className="mb-3">
        <label htmlFor="wd-course-name">Course Name</label>
        <input
          id="wd-course-name"
          className="form-control"
          value={course.name}
          onChange={(e) =>
            setCourse({ ...course, name: e.target.value })
          }
        />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-course-description">
          Course Description
        </label>
        <textarea
          id="wd-course-description"
          className="form-control"
          value={course.description}
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
        />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-course-number">Course Number</label>
        <input
          id="wd-course-number"
          className="form-control"
          value={course.number}
          onChange={(e) =>
            setCourse({ ...course, number: e.target.value })
          }
        />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-course-start-date">Start Date</label>
        <input
          id="wd-course-start-date"
          type="date"
          className="form-control"
          value={course.startDate}
          onChange={(e) =>
            setCourse({ ...course, startDate: e.target.value })
          }
        />
      </div>

      <button
        type="button"
        className="btn btn-primary me-2"
        onClick={add}
      >
        Add
      </button>

      <button
        type="button"
        className="btn btn-success me-2"
        onClick={update}
      >
        Update
      </button>

      <button
        type="button"
        className="btn btn-secondary"
        onClick={clearForm}
      >
        Cancel
      </button>

      <hr />

      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />

      <div id="wd-dashboard-courses">
        {courses.map((c) => (
          <CourseCard
            key={c._id}
            id={c._id}
            title={c.name}
            subtitle={c.description}
            image={c.image}
            onEdit={() => edit(c)}
            onDelete={() => deleteCourse(c._id)}
          />
        ))}
      </div>
    </div>
  );
}
