import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface Task {}

type TasksState = {
  tasks: Task[];
  setTasks: (tasks?: Task[]) => void;
};

export const useTasksStore = create(
  persist<TasksState>(
    (set) => ({
      tasks: [],
      setTasks: (tasks) => {
        set((state) => ({ ...state, tasks }));
      },
    }),
    {
      name: "duclearc-expo-tasks-store",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
