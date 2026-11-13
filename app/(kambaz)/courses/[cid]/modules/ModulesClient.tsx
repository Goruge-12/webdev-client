
"use client";

import { useState } from "react";
import Module from "./module";
import Lesson from "./lesson";
import { useModuleStore, type CourseModule } from "./useModuleStore";

export default function ModulesClient({ cid }: { cid: string }) {
  const { modules, addModule, updateModule, deleteModule } =
    useModuleStore();

  const [moduleName, setModuleName] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [collapsed, setCollapsed] = useState(false);

  const courseModules = modules.filter(
    (module) => module.course === cid
  );

  const handleSaveModule = () => {
    const name = moduleName.trim();

    if (!name) {
      alert("Please enter a module name.");
      return;
    }

    if (editingId) {
      const existingModule = modules.find(
        (module) => module._id === editingId
      );

      if (existingModule) {
        updateModule({
          ...existingModule,
          name,
        });
      }

      setEditingId(null);
    } else {
      const newModule: CourseModule = {
        _id: Date.now().toString(),
        name,
        course: cid,
        lessons: [],
      };

      addModule(newModule);
    }

    setModuleName("");
  };

  const handleEditModule = (module: CourseModule) => {
    setEditingId(module._id);
    setModuleName(module.name);
  };

  const handleDeleteModule = (moduleId: string) => {
    if (window.confirm("Delete this module?")) {
      deleteModule(moduleId);

      if (editingId === moduleId) {
        setEditingId(null);
        setModuleName("");
      }
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setModuleName("");
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? "Expand All" : "Collapse All"}
      </button>{" "}

      <button type="button">View Progress</button>{" "}

      <select defaultValue="publish-all">
        <option value="publish-all">Publish All</option>
      </select>

      <div className="mt-3 mb-3">
        <input
          type="text"
          placeholder="Module name"
          value={moduleName}
          onChange={(e) => setModuleName(e.target.value)}
          className="form-control mb-2"
        />

        <button
          type="button"
          onClick={handleSaveModule}
          className="btn btn-danger"
        >
          {editingId ? "Update Module" : "+ Module"}
        </button>

        {editingId && (
          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={handleCancel}
          >
            Cancel
          </button>
        )}
      </div>

      <ul id="wd-modules">
        {courseModules.map((module) => (
          <Module
            key={module._id}
            title={module.name}
            onEdit={() => handleEditModule(module)}
            onDelete={() => handleDeleteModule(module._id)}
          >
            {!collapsed && (
              <Lesson title="LEARNING OBJECTIVES">
                <li className="wd-content-item">
                  {module.name}
                </li>
              </Lesson>
            )}
          </Module>
        ))}
      </ul>
    </div>
  );
}
