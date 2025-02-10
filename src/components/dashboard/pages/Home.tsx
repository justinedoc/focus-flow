import { SidebarProvider } from "@/components/ui/sidebar";
import HomeSidebar from "../_components/HomeSidebar";

function Home() {
  return (
    <SidebarProvider>
      <main className="max-h-fit relative w-full">
        <HomeSidebar />
      </main>
    </SidebarProvider>
  );
}

export default Home;
