
"use client";

import Module from "./module";
import Lesson from "./lesson";
import { useModuleStore, type CourseModule } from "./useModuleStore";

export default function ModulesClient({ cid }: { cid: string }) {
  const { modules, addModule, updateModule, deleteModule } =
    useModuleStore();

  const courseModules = modules.filter(
    (module) => module.course === cid
  );

  const handleAddModule = () => {
    const name = window.prompt("Enter module name:");

    if (!name?.trim()) {
      return;
    }

    const newModule = {
      ...modules[0],
      _id: Date.now().toString(),
      name: name.trim(),
      course: cid,
    } as CourseModule;

    addModule(newModule);
  };

  const handleEditModule = (module: CourseModule) => {
    const name = window.prompt("Edit module name:", module.name);

    if (!name?.trim()) {
      return;
    }

    updateModule({
      ...module,
      name: name.trim(),
    });
  };

  const handleDeleteModule = (moduleId: string) => {
    if (window.confirm("Delete this module?")) {
      deleteModule(moduleId);
    }
  };

  return (
    <div>
      <button>Collapse All</button>{" "}
      <button>View Progress</button>{" "}

      <select defaultValue="publish-all">
        <option value="publish-all">Publish All</option>
      </select>{" "}

      <button type="button" onClick={handleAddModule}>
        + Module
      </button>

      <ul id="wd-modules">
        {courseModules.map((module) => (
          <Module
            key={module._id}
            title={module.name}
            onEdit={() => handleEditModule(module)}
            onDelete={() => handleDeleteModule(module._id)}
          >
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
