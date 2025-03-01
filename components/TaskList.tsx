import { Task } from "@/api/tasksApi";
import { TaskItem } from "@/components/TaskItem";
import { useTasksStore } from "@/stores/taskStore";
import { useState } from "react";
import { FlatList, View } from "react-native";
import { toast } from "sonner-native";

export const TaskList = ({ tasks }: { tasks: Task[] }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { refreshTasks } = useTasksStore();
  const onRefresh = async () => {
    setIsLoading(true);
    try {
      await refreshTasks();
    } catch (error) {
      toast.error("couldn't refresh");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <View className="self-center mb-12">
      <FlatList
        contentContainerClassName="gap-3"
        data={tasks}
        renderItem={({ item }) => <TaskItem task={item} />}
        keyExtractor={(item) => `${item.id}`}
        refreshing={isLoading}
        onRefresh={onRefresh}
      />
    </View>
  );
};
