import { Text, View } from "react-native";
import { Checkbox } from "./Checkbox";
import { Task } from "@/api/tasksApi";
import { Card, CardContent } from "./Card";
import { useState } from "react";

export const TaskItem = ({ task }: { task: Task }) => {
  const [isCompleted, setIsCompleted] = useState(task.completed);

  return (
    <Card>
      <View className="flex-row w-full gap-3 p-3">
        <Checkbox checked={isCompleted} onCheckedChange={setIsCompleted} />
        <Text className="text-wrap w-10/12">{task.todo}</Text>
      </View>
    </Card>
  );
};
