"use client";

import MobileNav from "@/components/organisms/mobilenav/MobileNav";
import Sidebar from "@/components/organisms/sidebar/superadmin/Sidebar";
import { useMediaQuery } from "react-responsive";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const mobile = useMediaQuery({ query: "(max-width:1224px)" });

  return (
    <div className="relative flex flex-row h-screen">
      {mobile ? <MobileNav /> : <Sidebar />}
      <main className="flex-1">{children}</main>
    </div>
  );
}
