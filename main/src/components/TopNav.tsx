import { Bell, Search, Plus } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function TopNav() {
  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-border bg-card/80 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search events, guests..."
            className="pl-9 w-72 bg-muted/50 border-0 rounded-lg h-9 font-body text-sm placeholder:text-muted-foreground/60"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-lg font-body text-sm h-9 px-4 shadow-none"
        >
          <Plus className="h-4 w-4 mr-1.5" />
          Create Event
        </Button>

        <button className="relative p-2 rounded-lg hover:bg-accent transition-colors">
          <Bell className="h-[18px] w-[18px] text-muted-foreground" strokeWidth={1.5} />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary" />
        </button>

        <Avatar className="h-8 w-8 border-2 border-primary/30">
          <AvatarFallback className="bg-primary/10 text-primary text-xs font-body font-medium">SP</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
