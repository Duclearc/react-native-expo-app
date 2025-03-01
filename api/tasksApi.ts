// using https://dummyjson.com/docs/todos

import { toast } from "sonner-native";

export interface Task {
  userId: number;
  id: number;
  todo: string;
  completed: boolean;
  isHighlight: boolean;
}
interface GetAllResponse {
  todos: Task[];
  total: number;
  skip: number;
  limit: number;
}

export const createTask = async (task: Task): Promise<Task | undefined> => {
  try {
    const response: Response = await fetch("https://dummyjson.com/todos/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    const jsonResponse: Task = await response.json();
    console.log("tasksApi/createTask: ", jsonResponse);
    return jsonResponse;
  } catch (error) {
    toast.error("failed to create task");
    console.error(error);
  }
};

export const getAllTasks = async (
  userId: number
): Promise<Task[] | undefined> => {
  if (!userId) return [];
  try {
    const urlPath = userId !== undefined ? `/user/${userId}` : "";
    const response: Response = await fetch(
      `https://dummyjson.com/todos${urlPath}`
    );
    const jsonResponse: GetAllResponse = await response.json();
    console.log("tasksApi/getAllTasks: ", {
      ...jsonResponse,
      todos: jsonResponse.todos[0],
    });
    return jsonResponse.todos.map((todo, i) => ({
      ...todo,
      isHighlight: !!(i % 2), // just some random way to make some of these a highlight
    }));
  } catch (error) {
    toast.error("failed to get all tasks");
    console.error(error);
  }
};

export const getSingleTask = async (id: number): Promise<Task | undefined> => {
  try {
    const response: Response = await fetch(`https://dummyjson.com/todos/${id}`);
    const jsonResponse: Task = await response.json();
    console.log("tasksApi/getSingleTask: ", jsonResponse);
    return jsonResponse;
  } catch (error) {
    toast.error("task not found");
    console.error(error);
  }
};

export const updateTask = async (task: Task): Promise<Task | undefined> => {
  try {
    const response: Response = await fetch(
      `https://dummyjson.com/todos/${task.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          todo: task.todo,
          completed: task.completed,
          isHighlight: task.isHighlight,
        }),
      }
    );
    const jsonResponse: Task = await response.json();
    console.log("tasksApi/updateTask: ", jsonResponse);
    return jsonResponse;
  } catch (error) {
    toast.error("failed to update");
    console.error(error);
  }
};
