import TaskForm from "@/components/TaskForm";
import TaskFormCustom from "@/components/TaskFormCustom";
import TaskList from "@/components/TaskList";

export default function TasksPage() {
  return (
    <div className="max-w-lg">
      <TaskFormCustom />
      <TaskList />
      <h1 className="text-7xl">TasksPage</h1>
    </div>
  );
}
