// using https://dummyjson.com/docs/todos

export interface Task {
  userId: number;
  id: number;
  todo: string;
  completed: boolean;
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
    return jsonResponse;
  } catch (error) {
    console.error("failed to create task");
  }
};

export const getAllTasks = async (
  userId?: number
): Promise<Task[] | undefined> => {
  try {
    const urlPath = userId !== undefined ? `/user/${userId}` : "";
    const response: Response = await fetch(
      `https://dummyjson.com/todos${urlPath}`
    );
    const jsonResponse: GetAllResponse = await response.json();
    return jsonResponse.todos;
  } catch (error) {
    console.error("failed to get all tasks");
  }
};

export const getSingleTask = async (id: number): Promise<Task | undefined> => {
  try {
    const response: Response = await fetch(`https://dummyjson.com/todos/${id}`);
    const jsonResponse: Task = await response.json();
    return jsonResponse;
  } catch (error) {
    console.error("task not found");
  }
};

export const updateTask = async (id: number): Promise<Task | undefined> => {
  try {
    const response: Response = await fetch(
      `https://dummyjson.com/todos/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          completed: false,
        }),
      }
    );
    const jsonResponse: Task = await response.json();
    console.log({ jsonResponse });
    return jsonResponse;
  } catch (error) {
    console.error("failed to update");
  }
};
