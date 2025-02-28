import { TaskList } from "@/components/TaskList";
import { TitleText } from "@/components/TitleText";
import { Wrapper } from "@/components/Wrapper";
import { useTasksStore } from "@/stores/taskStore";

export default function Inbox() {
  const { tasks } = useTasksStore();

  return (
    <Wrapper>
      <TitleText>Inbox</TitleText>
      <TaskList tasks={tasks} />
    </Wrapper>
  );
}
