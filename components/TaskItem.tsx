import { Text } from "react-native";
import { Checkbox } from "./Checkbox";
import { Task } from "@/api/tasksApi";
import { Card } from "./Card";
import { useState } from "react";

export const TaskItem = ({ task }: { task: Task }) => {
  const [isCompleted, setIsCompleted] = useState(task.completed);

  return (
    <Card className="flex-row items-center gap-3 p-3 w-full">
      <Checkbox checked={isCompleted} onCheckedChange={setIsCompleted} />
      <Text>{task.todo}</Text>
    </Card>
  );
};
