import { createTask, getAllTasks, Task, updateTask } from "@/api/tasksApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { toast } from "sonner-native";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type TasksState = {
  tasks: Task[];
  setTasks: (tasks?: Task[]) => void;
  addTask: (todo: string, isHighlight: boolean) => Promise<boolean>;
  refreshTasks: (userId: number) => Promise<void>;
  updateTask: (task: Task) => Promise<void>;
};

export const useTasksStore = create(
  persist<TasksState>(
    (set, get) => ({
      tasks: [],
      addTask: async (todo, isHighlight) => {
        const tasks = get().tasks;
        const newTask: Task = {
          userId: 1,
          id: tasks.length + 1,
          todo,
          completed: false,
          isHighlight,
        };
        const handleError = (error?: unknown) => {
          toast.error("failed to update task");
          if (error) console.error(error);
          return false;
        };
        try {
          const newTaskResponse = await createTask(newTask);
          if (newTaskResponse) {
            tasks.unshift(newTask);
            get().setTasks(tasks);
            return true;
          } else {
            return handleError();
          }
        } catch (error) {
          return handleError(error);
        }
      },
      refreshTasks: async (userId) => {
        if (!userId) return;
        try {
          const tasks = await getAllTasks(userId);

          set((state) => ({ ...state, tasks }));
        } catch (error) {
          toast.error("no tasks found");
          console.error(error);
        }
      },
      updateTask: async (updatedTask) => {
        const tasks = get().tasks;
        const taskIndex = tasks.findIndex((t) => t.id === updatedTask.id);
        const handleError = (error?: unknown) => {
          toast.error("failed to update task");
          if (error) console.error(error);
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
