import { Pencil, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const guests = [
  { name: "Alice Johnson", contact: "alice@email.com", status: "Confirmed" },
  { name: "Robert Smith", contact: "+1 555-0123", status: "Pending" },
  { name: "Emily Davis", contact: "emily.d@email.com", status: "Confirmed" },
  { name: "Michael Brown", contact: "+1 555-0456", status: "Declined" },
  { name: "Jessica Wilson", contact: "jess.w@email.com", status: "Confirmed" },
  { name: "David Martinez", contact: "+1 555-0789", status: "Pending" },
  { name: "Sophie Anderson", contact: "sophie.a@email.com", status: "Confirmed" },
  { name: "James Taylor", contact: "+1 555-0321", status: "Pending" },
];

const statusStyles: Record<string, string> = {
  Confirmed: "bg-sage/15 text-sage border-sage/30",
  Pending: "bg-dusty-rose/15 text-dusty-rose border-dusty-rose/30",
  Declined: "bg-muted text-slate-muted border-border",
};

export default function GuestList() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-semibold text-foreground">Guest List</h1>
        <p className="font-body text-sm text-muted-foreground mt-1">
          Manage your wedding guests
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-card rounded-lg shadow-card border border-border/50 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-4">
                  Guest Name
                </th>
                <th className="text-left font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-4">
                  Contact
                </th>
                <th className="text-left font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-4">
                  RSVP Status
                </th>
                <th className="text-right font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-4">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {guests.map((guest, i) => (
                <tr
                  key={i}
                  className="border-b border-border/50 last:border-0 hover:bg-accent/30 transition-colors"
                >
                  <td className="px-6 py-5">
                    <span className="font-body text-sm font-medium text-foreground">{guest.name}</span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="font-body text-sm text-muted-foreground">{guest.contact}</span>
                  </td>
                  <td className="px-6 py-5">
                    <Badge
                      variant="outline"
                      className={`font-body text-xs font-medium rounded-full px-3 py-1 ${statusStyles[guest.status]}`}
                    >
                      {guest.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-2 rounded-md hover:bg-accent transition-colors">
                        <Pencil className="h-4 w-4 text-secondary" strokeWidth={1.5} />
                      </button>
                      <button className="p-2 rounded-md hover:bg-destructive/10 transition-colors">
                        <Trash2 className="h-4 w-4 text-destructive/70" strokeWidth={1.5} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
