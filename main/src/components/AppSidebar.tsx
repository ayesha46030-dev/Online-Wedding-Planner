import { Heart, LayoutDashboard, CalendarHeart, Users, MailCheck, Settings } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import floralAccent from "@/assets/floral-accent.png";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Events", url: "/events", icon: CalendarHeart },
  { title: "Guest List", url: "/guests", icon: Users },
  { title: "RSVPs", url: "/rsvps", icon: MailCheck },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  return (
    <Sidebar collapsible="icon" className="border-r-0">
      <SidebarContent className="relative overflow-hidden">
        {/* Logo */}
        <div className="px-4 py-6 flex items-center gap-2">
          <Heart className="h-6 w-6 text-primary fill-primary shrink-0" />
          {!collapsed && (
            <span className="font-display text-lg font-semibold text-foreground tracking-tight">
              Wedding Planner
            </span>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-11 rounded-md">
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className="flex items-center gap-3 px-3 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                      activeClassName="bg-accent text-foreground font-medium"
                    >
                      <item.icon className="h-[18px] w-[18px] text-secondary shrink-0" strokeWidth={1.5} />
                      {!collapsed && <span className="font-body text-sm">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Floral decoration at bottom */}
        {!collapsed && (
          <div className="absolute bottom-0 left-0 w-full opacity-20 pointer-events-none">
            <img src={floralAccent} alt="" className="w-full" />
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
