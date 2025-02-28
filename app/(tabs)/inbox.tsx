import { TaskList } from "@/components/TaskList";
import { Wrapper } from "@/components/Wrapper";
import { classes } from "@/lib/constants";
import { useTasksStore } from "@/stores/taskStore";
import { Text } from "react-native";

export default function Inbox() {
  const { tasks } = useTasksStore();

  return (
    <Wrapper>
      <Text className={`${classes.title}`}>Inbox</Text>
      <TaskList tasks={tasks} />
    </Wrapper>
  );
}
