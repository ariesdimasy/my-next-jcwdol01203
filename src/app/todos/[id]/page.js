import DashboardLayout from "@/app/dashboardLayout";
import { getItem } from "./../../../utils/getItem";

export default async function Page(props) {
  const { id } = props.params;
  const todo = await getItem(id);

  console.log(todo);

  return (
    <DashboardLayout>
      <h1> Title : {todo.title}</h1>
    </DashboardLayout>
  );
}
