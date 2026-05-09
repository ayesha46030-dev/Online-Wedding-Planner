import { MapPin, CalendarDays, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import cover1 from "@/assets/wedding-cover-1.jpg";
import cover2 from "@/assets/wedding-cover-2.jpg";
import cover3 from "@/assets/wedding-cover-3.jpg";

const events = [
  {
    couple: "Emma & Jack",
    date: "March 17, 2026",
    venue: "Rose Garden Estate",
    guests: 120,
    image: cover1,
  },
  {
    couple: "Sarah & Tom",
    date: "April 5, 2026",
    venue: "Lakeside Chapel",
    guests: 85,
    image: cover2,
  },
  {
    couple: "Mia & Leo",
    date: "May 12, 2026",
    venue: "The Grand Ballroom",
    guests: 200,
    image: cover3,
  },
];

export default function Events() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-3xl font-semibold text-foreground">Events</h1>
          <p className="font-body text-sm text-muted-foreground mt-1">
            Manage all your wedding events
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, i) => (
          <motion.div
            key={event.couple}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="bg-card rounded-lg shadow-card border border-border/50 overflow-hidden group"
          >
            {/* Cover image */}
            <div className="relative aspect-[3/2] overflow-hidden">
              <img
                src={event.image}
                alt={event.couple}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <h3 className="absolute bottom-4 left-4 font-display text-xl font-semibold text-card">
                {event.couple}
              </h3>
            </div>

            {/* Details */}
            <div className="p-5 space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CalendarDays className="h-4 w-4 text-secondary" strokeWidth={1.5} />
                <span className="font-body text-sm">{event.date}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-secondary" strokeWidth={1.5} />
                <span className="font-body text-sm">{event.venue}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="h-4 w-4 text-secondary" strokeWidth={1.5} />
                <span className="font-body text-sm">{event.guests} guests</span>
              </div>

              <Button className="w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md font-body text-sm h-10 shadow-none">
                Manage Event
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
