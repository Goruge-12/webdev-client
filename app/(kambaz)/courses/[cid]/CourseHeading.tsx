
"use client";

import { usePathname } from "next/navigation";
import { courses } from "../../database";

export default function CourseHeading({ cid }: { cid: string }) {
  const pathname = usePathname();

  const course = courses.find((course) => course._id === cid);

  const section = pathname.split("/")[3] || "home";
  const sectionName =
    section.charAt(0).toUpperCase() + section.slice(1);

  return (
    <h2 id="wd-course-heading">
      {course ? course.name : "Course"} &gt; {sectionName}
    </h2>
  );
}
