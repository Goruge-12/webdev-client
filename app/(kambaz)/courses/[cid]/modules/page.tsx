
import Module from "./module";
import Lesson from "./lesson";
import { modules } from "../../../database";

export default async function Modules({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;

  const courseModules = modules.filter(
    (module) => module.course === cid
  );

  return (
    <div>
      <button>Collapse All</button>{" "}
      <button>View Progress</button>{" "}

      <select defaultValue="publish-all">
        <option value="publish-all">Publish All</option>
      </select>{" "}

      <button>+ Module</button>

      <ul id="wd-modules">
        {courseModules.map((module) => (
          <Module key={module._id} title={module.name}>
            <Lesson title="LEARNING OBJECTIVES">
              <li className="wd-content-item">
                {module.name}
              </li>
            </Lesson>
          </Module>
        ))}
      </ul>
    </div>
  );
}
