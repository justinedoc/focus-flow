import {
  LayoutGrid,
  ListChecks,
  MessageSquareMore,
  PlusSquare,
  Settings,
  UsersRound,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import Logo from "@/components/landing/ui/Logo";
import SidebarProjects from "./SidebarProjects";
import { Link } from "react-router";
import { type sidebarProject } from "@/types/sidebarTypes";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: LayoutGrid,
  },
  {
    title: "Messages",
    url: "#",
    icon: MessageSquareMore,
  },
  {
    title: "Tasks",
    url: "#",
    icon: ListChecks,
  },
  {
    title: "Members",
    url: "#",
    icon: UsersRound,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const sidebarProjects: sidebarProject[] = [
  {
    id: 1872,
    title: "Mobile app",
    status: "DONE",
  },
  {
    id: 1873,
    title: "Website redesign",
    status: "INPROGRESS",
  },
  {
    id: 1874,
    title: "Design system",
    status: "TODO",
  },
  {
    id: 1875,
    title: "Wireframe",
    status: "DUE",
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="py-[.87rem] flex gap-1">
        <Logo />
      </SidebarHeader>

      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="text-md">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton size={"lg"} asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>
            <span>MY PROJECTS</span>
          </SidebarGroupLabel>
          <SidebarGroupAction title="Add projects">
            <PlusSquare /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction>

          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarProjects.map((project) => (
                <SidebarProjects key={project.id} project={project} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarSeparator />
      <SidebarFooter>
        
      </SidebarFooter>
    </Sidebar>
  );
}
