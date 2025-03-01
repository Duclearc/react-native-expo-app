import { SecureStorage } from "@/lib/secureStorage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { router } from "expo-router";
import { useTasksStore } from "./taskStore";

type UserState = {
  id?: number;
  email?: string;
  login: ({ email, password }: { email: string; password: string }) => void;
  logout: () => void;
};

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      authToken: undefined,
      login: async ({ email }) => {
        const userId = 162;
        set((state) => ({
          ...state,
          id: userId,
          email,
        }));
        await useTasksStore.getState().refreshTasks(userId);
        router.replace("/inbox");
      },
      logout: () => {
        set((state) => ({
          ...state,
          id: undefined,
          email: undefined,
        }));
        useTasksStore.getState().setTasks([]);
        router.replace("/login");
      },
    }),
    {
      name: "duclearc-expo-user-store",
      storage: createJSONStorage(() => SecureStorage),
    }
  )
);
