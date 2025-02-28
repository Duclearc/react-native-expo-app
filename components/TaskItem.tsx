import { Task } from "@/api/tasksApi";
import { Card } from "@/components/Card";
import { Checkbox } from "@/components/Checkbox";
import { Star } from "@/lib/icons";
import { useTasksStore } from "@/stores/taskStore";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export const TaskItem = ({ task }: { task: Task }) => {
  const [isCompleted, setIsCompleted] = useState(task.completed);
  const [isHighlight, setIsHighlight] = useState(task.isHighlight);
  const { updateTask } = useTasksStore();

  const onIsCompletedChange = async () => {
    const updatedTask: Task = { ...task, completed: !task.completed };
    try {
      await updateTask(updatedTask);
      setIsCompleted(updatedTask.completed);
    } catch (error) {
      console.error(error);
    }
  };

  const onIsHighlightChange = async () => {
    const updatedTask: Task = { ...task, isHighlight: !task.isHighlight };
    try {
      await updateTask(updatedTask);
      setIsHighlight(updatedTask.isHighlight);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card>
      <View className="flex-row items-center pl-3 gap-1">
        <View className="flex-row gap-3 items-center">
          <Checkbox
            checked={isCompleted}
            onCheckedChange={onIsCompletedChange}
          />
          <Text className="text-lg text-wrap w-10/12">{task.todo}</Text>
        </View>
        <Pressable
          onPress={onIsHighlightChange}
          className="relative right-5 p-3"
        >
          <Star
            className={`${
              isHighlight ? "text-accent" : "text-disabled opacity-50"
            }`}
            fill={isHighlight ? "#FF531CBB" : "#00000000"}
          />
        </Pressable>
      </View>
    </Card>
  );
};
