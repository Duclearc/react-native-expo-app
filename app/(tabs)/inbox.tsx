import { TaskList } from "@/components/TaskList";
import { TaskSectionHeader } from "@/components/TaskSectionHeader";
import { Wrapper } from "@/components/Wrapper";
import { useTasksStore } from "@/stores/taskStore";

export default function Inbox() {
  const { tasks } = useTasksStore();

  return (
    <Wrapper>
      <TaskSectionHeader title={"Inbox"} />
      <TaskList tasks={tasks ?? []} />
    </Wrapper>
  );
}
