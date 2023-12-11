import { revalidateTag } from "next/cache";
import Link from "next/link";
import DashboardLayout from "../dashboardLayout";

async function getData() {
  const res = await fetch("/api/todo", {
    next: { tags: ["collection"] },
  });

  if (!res.ok) {
    throw new Error("Failed to fecth Data");
  }

  return res.json();
}

export default async function Todos() {
  const { todo } = await getData();

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-heading heading"></h1>
        <hr></hr>
        <ul>
          {todo?.map((item, index) => {
            return (
              <li key={index}>
                <Link href={`/todos/${item.id}`}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </DashboardLayout>
  );
}
