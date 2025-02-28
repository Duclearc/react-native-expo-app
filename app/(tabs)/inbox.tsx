import { TaskItem } from "@/components/TaskItem";
import { Wrapper } from "@/components/Wrapper";
import { classes } from "@/lib/constants";
import { useTasksStore } from "@/stores/taskStore";
import { Text, View } from "react-native";

export default function Inbox() {
  const tasksStore = useTasksStore();
  return (
    <Wrapper>
      <Text className={`${classes.title}`}>Inbox</Text>
      <TaskItem task={tasksStore.tasks[0]} />
    </Wrapper>
  );
}
