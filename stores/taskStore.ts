import { getAllTasks, Task, updateTask } from "@/api/tasksApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type TasksState = {
  tasks: Task[];
  setTasks: (tasks?: Task[]) => void;
  refreshTasks: () => Promise<void>;
  updateTask: (task: Task) => Promise<void>;
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
      updateTask: async (updatedTask) => {
        const tasks = get().tasks;
        const taskIndex = tasks.findIndex((t) => t.id === updatedTask.id);
        const handleError = (error?: unknown) => {
          console.error("failed to update task");
        };
        try {
          const updatedTaksResponse = await updateTask(updatedTask);
          if (updatedTaksResponse) {
            tasks[taskIndex] = updatedTask;
            get().setTasks(tasks);
          } else {
            handleError();
          }
        } catch (error) {
          handleError(error);
        }
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
