
import Sidebar from "@/components/organisms/sidebar/superadmin/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row ">
      <Sidebar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
