
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname();

  const isActive = (section: string) => {
    const path = `/courses/${cid}/${section}`;
    return pathname === path || pathname.startsWith(path + "/");
  };

  const activeStyle = (section: string) => ({
    fontWeight: isActive(section) ? "bold" : "normal",
  });

  return (
    <nav id="wd-courses-navigation" aria-label="Course navigation">
      <h3>Course</h3>

      <Link href={`/courses/${cid}/home`}
        id="wd-course-home-link" style={activeStyle("home")}>
        Home
      </Link>

      <Link href={`/courses/${cid}/modules`}
        id="wd-course-modules-link" style={activeStyle("modules")}>
        Modules
      </Link>

      <Link href={`/courses/${cid}/piazza`}
        id="wd-course-piazza-link" style={activeStyle("piazza")}>
        Piazza
      </Link>

      <Link href={`/courses/${cid}/zoom`}
        id="wd-course-zoom-link" style={activeStyle("zoom")}>
        Zoom
      </Link>

      <Link href={`/courses/${cid}/assignments`}
        id="wd-course-assignments-link" style={activeStyle("assignments")}>
        Assignments
      </Link>

      <Link href={`/courses/${cid}/quizzes`}
        id="wd-course-quizzes-link" style={activeStyle("quizzes")}>
        Quizzes
      </Link>

      <Link href={`/courses/${cid}/grades`}
        id="wd-course-grades-link" style={activeStyle("grades")}>
        Grades
      </Link>

      <Link href={`/courses/${cid}/people`}
        id="wd-course-people-link" style={activeStyle("people")}>
        People
      </Link>
    </nav>
  );
}
