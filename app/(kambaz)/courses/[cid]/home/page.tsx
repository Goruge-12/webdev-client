
import Modules from "../modules/page";
import CourseStatus from "./status";

export default async function Home({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;

  return (
    <div id="wd-home">
      <div className="wd-home-modules">
        <Modules params={Promise.resolve({ cid })} />
      </div>

      <aside className="wd-home-status">
        <CourseStatus />
      </aside>
    </div>
  );
}
