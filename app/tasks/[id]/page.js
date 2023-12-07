import { getTask } from "@/utils/actions";
import Link from "next/link";
import EditForm from "@/components/EditForm";

export default async function SingleTaskPage({ params }) {
  const task = await getTask(params.id);
  return (
    <>
      <div className="mb-16">
        <Link href="/tasks" className="btn btn-accent">
          back to tasks
        </Link>
      </div>
      <EditForm task={task} />
    </>
  );
}
