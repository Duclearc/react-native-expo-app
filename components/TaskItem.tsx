import { Task } from "@/api/tasksApi";
import { Card } from "@/components/Card";
import { Checkbox } from "@/components/Checkbox";
import { Star } from "@/lib/icons";
import { useTasksStore } from "@/stores/taskStore";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { IsHighlightButton } from "./IsHighlightButton";

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
    <Card className="bg-bgDefault dark:bg-bgOnDark">
      <View className="flex-row items-center pl-3 gap-1">
        <View className="flex-row gap-3 items-center">
          <Checkbox
            checked={isCompleted}
            onCheckedChange={onIsCompletedChange}
          />
          <Text className="text-lg text-wrap w-10/12 text-textDefault dark:text-textOnDark">
            {task.todo}
          </Text>
        </View>
        <IsHighlightButton
          isHighlight={isHighlight}
          onIsHighlightChange={onIsHighlightChange}
        />
      </View>
    </Card>
  );
};
