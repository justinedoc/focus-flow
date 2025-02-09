import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { type sidebarProject } from "@/types/sidebarTypes";
import { MoreHorizontal } from "lucide-react";
import { TASK_STATUS } from "../constants/status";

function SidebarProjects({ project }: { project: sidebarProject }) {
  return (
    <SidebarMenuButton className="group">
      <div
        id="circle"
        className={cn("size-2 rounded-full", TASK_STATUS.get(project.status))}
      ></div>
      <span className="font-semibold group-data-[collapsible=icon]:hidden">
        {project.title}
      </span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="ml-auto">
          <MoreHorizontal className="group-data-[collapsible=icon]:hidden hidden group-data-[active=true]:block" />
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" align="start">
          <DropdownMenuItem>
            <span>Edit Project</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Delete Project</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuButton>
  );
}

export default SidebarProjects;
