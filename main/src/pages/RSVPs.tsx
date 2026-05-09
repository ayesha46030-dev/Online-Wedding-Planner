import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { MailCheck, Filter } from "lucide-react";

type Status = "All" | "Confirmed" | "Pending" | "Declined";

const rsvps = [
  { name: "Alice Johnson", event: "Emma & Jack Wedding", status: "Confirmed", date: "Feb 28, 2026" },
  { name: "Robert Smith", event: "Emma & Jack Wedding", status: "Pending", date: "—" },
  { name: "Emily Davis", event: "Sarah & Tom Wedding", status: "Confirmed", date: "Mar 1, 2026" },
  { name: "Michael Brown", event: "Emma & Jack Wedding", status: "Declined", date: "Feb 25, 2026" },
  { name: "Jessica Wilson", event: "Mia & Leo Wedding", status: "Confirmed", date: "Mar 3, 2026" },
  { name: "David Martinez", event: "Sarah & Tom Wedding", status: "Pending", date: "—" },
  { name: "Sophie Anderson", event: "Mia & Leo Wedding", status: "Confirmed", date: "Mar 5, 2026" },
  { name: "James Taylor", event: "Emma & Jack Wedding", status: "Pending", date: "—" },
  { name: "Olivia Thomas", event: "Sarah & Tom Wedding", status: "Confirmed", date: "Mar 2, 2026" },
  { name: "William Garcia", event: "Mia & Leo Wedding", status: "Declined", date: "Mar 1, 2026" },
];

const statusStyles: Record<string, string> = {
  Confirmed: "bg-sage/15 text-sage border-sage/30",
  Pending: "bg-dusty-rose/15 text-dusty-rose border-dusty-rose/30",
  Declined: "bg-muted text-slate-muted border-border",
};

const filterTabs: Status[] = ["All", "Confirmed", "Pending", "Declined"];

const filterStyles: Record<Status, string> = {
  All: "bg-primary text-primary-foreground",
  Confirmed: "bg-sage text-sage-foreground",
  Pending: "bg-dusty-rose text-dusty-rose-foreground",
  Declined: "bg-muted text-foreground",
};

export default function RSVPs() {
  const [activeFilter, setActiveFilter] = useState<Status>("All");
  const filtered = activeFilter === "All" ? rsvps : rsvps.filter((r) => r.status === activeFilter);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-3xl font-semibold text-foreground">RSVP Management</h1>
          <p className="font-body text-sm text-muted-foreground mt-1">
            Track guest confirmations across all events
          </p>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MailCheck className="h-5 w-5 text-secondary" strokeWidth={1.5} />
          <span className="font-body text-sm font-medium">{rsvps.filter((r) => r.status === "Confirmed").length} confirmed</span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 mb-6">
        <Filter className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
        {filterTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveFilter(tab)}
            className={`font-body text-sm px-4 py-1.5 rounded-full transition-all ${
              activeFilter === tab
                ? filterStyles[tab]
                : "bg-accent text-muted-foreground hover:bg-accent/80"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* RSVP Cards */}
      <div className="grid gap-3">
        {filtered.map((rsvp, i) => (
          <motion.div
            key={rsvp.name + rsvp.event}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            className="bg-card rounded-lg p-5 shadow-card border border-border/50 flex items-center justify-between"
          >
            <div className="flex-1">
              <p className="font-body text-sm font-medium text-foreground">{rsvp.name}</p>
              <p className="font-body text-xs text-muted-foreground mt-0.5">{rsvp.event}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-body text-xs text-muted-foreground hidden sm:block">
                {rsvp.date}
              </span>
              <Badge
                variant="outline"
                className={`font-body text-xs font-medium rounded-full px-3 py-1 ${statusStyles[rsvp.status]}`}
              >
                {rsvp.status}
              </Badge>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
