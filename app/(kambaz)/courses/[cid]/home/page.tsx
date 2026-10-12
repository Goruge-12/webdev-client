import Modules from "../modules/page";
import CourseStatus from "./status";

export default function Home() {
  return (
    <div id="wd-home">
      <div className="wd-home-modules"><Modules /></div>
      <aside className="wd-home-status"><CourseStatus /></aside>
    </div>
  );
}
