
import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import CourseHeading from "./CourseHeading";

export default async function CourseLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;

  return (
    <div className="wd-course-layout">
      <CourseNavigation cid={cid} />

      <section className="wd-course-content">
        <CourseHeading cid={cid} />
        {children}
      </section>
    </div>
  );
}
