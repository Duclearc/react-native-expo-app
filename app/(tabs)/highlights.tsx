import { TaskList } from "@/components/TaskList";
import { TaskSectionHeader } from "@/components/TaskSectionHeader";
import { Wrapper } from "@/components/Wrapper";
import { useTasksStore } from "@/stores/taskStore";

export default function Highlights() {
  const { tasks } = useTasksStore();

  return (
    <Wrapper>
      <TaskSectionHeader title={"Highlights"} />
      <TaskList tasks={tasks.filter((task) => task.isHighlight)} />
    </Wrapper>
  );
}
