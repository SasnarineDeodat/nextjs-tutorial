import TaskFormCustom from "@/components/TaskFormCustom";
import TaskList from "@/components/TaskList";

export const dynamic = "force-dynamic";

export default function TasksPage() {
  return (
    <div className="max-w-lg">
      <TaskFormCustom />
      <TaskList />
    </div>
  );
}
