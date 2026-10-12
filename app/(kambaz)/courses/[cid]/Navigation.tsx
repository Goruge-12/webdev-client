import Link from "next/link";

export default function CourseNavigation({ cid }: { cid: string }) {
  return (
    <nav id="wd-courses-navigation" aria-label="Course navigation">
      <h3>Course</h3>
      <Link href={`/courses/${cid}/home`} id="wd-course-home-link">Home</Link>
      <Link href={`/courses/${cid}/modules`} id="wd-course-modules-link">Modules</Link>
      <Link href={`/courses/${cid}/piazza`} id="wd-course-piazza-link">Piazza</Link>
      <Link href={`/courses/${cid}/zoom`} id="wd-course-zoom-link">Zoom</Link>
      <Link href={`/courses/${cid}/assignments`} id="wd-course-assignments-link">Assignments</Link>
      <Link href={`/courses/${cid}/quizzes`} id="wd-course-quizzes-link">Quizzes</Link>
      <Link href={`/courses/${cid}/grades`} id="wd-course-grades-link">Grades</Link>
      <Link href={`/courses/${cid}/people`} id="wd-course-people-link">People</Link>
    </nav>
  );
}
