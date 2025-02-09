import {
  LayoutGrid,
  ListChecks,
  MessageSquareMore,
  Settings,
  UsersRound,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import Logo from "@/components/landing/ui/Logo";

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
                  <SidebarMenuButton
                    size={"lg"}
                    className="my-[0.2rem]"
                    asChild
                  >
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
      </SidebarContent>
    </Sidebar>
  );
}
