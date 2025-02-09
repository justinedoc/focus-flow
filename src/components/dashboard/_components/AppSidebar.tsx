import {
  LayoutGrid,
  ListChecks,
  MessageSquareMore,
  MoreHorizontal,
  PlusSquare,
  Settings,
  UsersRound,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import Logo from "@/components/landing/ui/Logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
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
              <SidebarMenuButton>
                <div
                  id="circle"
                  className="size-2 bg-green-500 rounded-full"
                ></div>
                <span className="font-semibold">Mobile app</span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuAction>
                      <MoreHorizontal />
                    </SidebarMenuAction>
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
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
