import Navbar from "./../components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div style={{ border: "1px solid blue", padding: 20, borderRadius: 10 }}>
      <Navbar />
      {children}
    </div>
  );
}
