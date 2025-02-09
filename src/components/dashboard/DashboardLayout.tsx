import Navbar from "./ui/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/AppSidebar";
import { Outlet } from "react-router";

function DashboardLayout(): JSX.Element {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <Navbar />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}

export default DashboardLayout;
