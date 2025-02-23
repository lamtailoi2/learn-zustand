import { create } from "zustand";
import { persist } from "zustand/middleware";
import { PRIORITY, STATUS } from "../constants";

type Task = {
  ID: string;
  name: string;
  priority: PRIORITY;
  status: STATUS;
};

interface TaskState {
  tasks: Task[];
  addNewTask: (newTask: Omit<Task, "ID">) => void;
  removeTask: (ID: number | string) => void;
}

export const useStore = create<TaskState>()(
  persist(
    (set) => ({
      tasks: [],
      addNewTask: (newTask) =>
        set((state) => ({
          tasks: [...state.tasks, { ...newTask, ID: crypto.randomUUID() }],
        })),
      removeTask: (ID) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.ID !== ID),
        })),
    }),
    {
      name: "task-storage",
    }
  )
);
