import Calender from "@/assets/icons/Calender";
import Notification from "@/assets/icons/Notification";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Edit } from "lucide-react";

function HomeSidebar() {
  return (
    <Sidebar side="right" className="absolute top-0 right-0">
      <SidebarHeader className="flex-row justify-end gap-4 px-4 py-3">
        <Calender />
        <Notification />
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent>
        <SidebarGroup className="px-3">
          <SidebarGroupContent className="bg-white border rounded-md">
            <header className="flex gap-5 relative">
              <div className="font-semibold p-2 w-24 cursor-pointer text-center">
                Monthly
              </div>
              <div className="font-semibold p-2 w-24 cursor-pointer text-center">
                Daily
              </div>

              <div className="border-b-2 border-blue-700 w-24 absolute bottom-0"></div>
            </header>
            <SidebarSeparator />
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>
            <span>TASKS</span>
          </SidebarGroupLabel>
          <SidebarGroupAction title="Add projects">
            <Edit /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction>

          <SidebarGroupContent></SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default HomeSidebar;
