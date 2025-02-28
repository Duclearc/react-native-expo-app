import { getAllTasks, Task } from "@/api/tasksApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type TasksState = {
  tasks: Task[];
  setTasks: (tasks?: Task[]) => void;
  refreshTasks: () => Promise<void>;
};

export const useTasksStore = create(
  persist<TasksState>(
    (set, get) => ({
      tasks: [],
      refreshTasks: async () => {
        try {
          const tasks = await getAllTasks();

          set((state) => ({ ...state, tasks }));
        } catch (error) {
          console.error("no tasks found");
        }
      },
      updateTask: (taskId: number) => {
        const tasks = get().tasks;
        
      },
      setTasks: (tasks) => {
        set((state) => ({ ...state, tasks }));
      },
    }),
    {
      name: "duclearc-expo-tasks-store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

const initStore = async () => {
  if (useTasksStore.getState().tasks === undefined)
    useTasksStore.getState().refreshTasks();
};

initStore();
