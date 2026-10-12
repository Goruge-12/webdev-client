import { ReactNode } from "react";
import CourseNavigation from "./Navigation";

export default async function CourseLayout({ children, params }: {
  children: ReactNode;
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div className="wd-course-layout">
      <CourseNavigation cid={cid} />
      <section className="wd-course-content">{children}</section>
    </div>
  );
}
