import TaskForm from "../../components/TaskForm";
import TaskList from "../../components/TaskList";

export default function TasksPage() {
  return (
    <div className="max-w-lg">
      <TaskForm />
      <TaskList />
      <h1 className="text-7xl">TasksPage</h1>
    </div>
  );
}
