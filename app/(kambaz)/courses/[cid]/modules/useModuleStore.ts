
import { create } from "zustand";
import { modules as initialModules } from "../../../database";

export type CourseModule = (typeof initialModules)[number];

type ModuleStore = {
  modules: CourseModule[];
  addModule: (module: CourseModule) => void;
  updateModule: (module: CourseModule) => void;
  deleteModule: (moduleId: string) => void;
};

export const useModuleStore = create<ModuleStore>((set) => ({
  modules: [...initialModules],

  addModule: (module) =>
    set((state) => ({
      modules: [...state.modules, module],
    })),

  updateModule: (module) =>
    set((state) => ({
      modules: state.modules.map((m) =>
        m._id === module._id ? module : m
      ),
    })),

  deleteModule: (moduleId) =>
    set((state) => ({
      modules: state.modules.filter((m) => m._id !== moduleId),
    })),
}));
