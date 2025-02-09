import Navbar from "../ui/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSideBar";

function Dashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <Navbar />
        <h1 className="text-3xl text-center">Under construction</h1>
      </main>
    </SidebarProvider>
  );
}

export default Dashboard;
