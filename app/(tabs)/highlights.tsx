import { TaskList } from "@/components/TaskList";
import { TitleText } from "@/components/TitleText";
import { Wrapper } from "@/components/Wrapper";
import { useTasksStore } from "@/stores/taskStore";

export default function Highlights() {
  const { tasks } = useTasksStore();

  return (
    <Wrapper>
      <TitleText>Highlight</TitleText>
      <TaskList tasks={tasks.filter((task) => task.isHighlight)} />
    </Wrapper>
  );
}
