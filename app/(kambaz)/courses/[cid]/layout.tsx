
import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import { courses } from "../../database";

export default async function CourseLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  const course = courses.find((course) => course._id === cid);

  return (
    <div className="wd-course-layout">
      <CourseNavigation cid={cid} />

      <section className="wd-course-content">
        <div id="wd-course-header">
          <h2 id="wd-course-heading">
            <Breadcrumb course={course} />
          </h2>
        </div>

        {children}
      </section>
    </div>
  );
}
