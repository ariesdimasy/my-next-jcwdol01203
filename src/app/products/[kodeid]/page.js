import DashboardLayout from "@/app/dashboardLayout";

export default function Page(props) {
  return (
    <DashboardLayout>
      <h1> Product Detail id {props.params.kodeid}</h1>
      <hr></hr>
    </DashboardLayout>
  );
}
