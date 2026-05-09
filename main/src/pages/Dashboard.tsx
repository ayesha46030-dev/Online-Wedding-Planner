import { Users, UserCheck, Clock, CalendarHeart, Bell, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import floralAccent from "@/assets/floral-accent.png";

const stats = [
  { label: "Total Guests", value: "248", icon: Users, color: "text-primary" },
  { label: "Confirmed", value: "186", icon: UserCheck, color: "text-sage" },
  { label: "Pending RSVPs", value: "42", icon: Clock, color: "text-dusty-rose" },
  { label: "Upcoming Event", value: "3 days", icon: CalendarHeart, color: "text-secondary" },
];

const upcomingEvents = [
  { couple: "Emma & Jack", date: "Mar 17, 2026", venue: "Rose Garden Estate", guests: 120 },
  { couple: "Sarah & Tom", date: "Apr 5, 2026", venue: "Lakeside Chapel", guests: 85 },
  { couple: "Mia & Leo", date: "May 12, 2026", venue: "The Grand Ballroom", guests: 200 },
];

const notifications = [
  { text: "Emma & Jack's wedding in 3 days!", type: "urgent" },
  { text: "12 new RSVPs received today", type: "info" },
  { text: "Venue confirmed for Sarah & Tom", type: "success" },
];

const rsvpData = [
  { label: "Confirmed", value: 75, color: "bg-sage" },
  { label: "Pending", value: 17, color: "bg-dusty-rose" },
  { label: "Declined", value: 8, color: "bg-slate-muted" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto relative">
      {/* Floral corner accent */}
      <img
        src={floralAccent}
        alt=""
        className="absolute -top-4 -right-4 w-40 opacity-10 pointer-events-none rotate-180"
      />

      {/* Greeting */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-2">
          Welcome back ✨
        </h1>
        <p className="font-body text-muted-foreground">
          Let's plan a beautiful wedding today!
        </p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="bg-card rounded-lg p-5 shadow-card border border-border/50"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-md bg-accent">
                <stat.icon className={`h-5 w-5 ${stat.color}`} strokeWidth={1.5} />
              </div>
            </div>
            <p className="font-display text-2xl font-semibold text-foreground">{stat.value}</p>
            <p className="font-body text-xs text-muted-foreground mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* RSVP Progress */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={4}
          variants={fadeUp}
          className="lg:col-span-2 bg-card rounded-lg p-6 shadow-card border border-border/50"
        >
          <h2 className="font-display text-xl font-semibold mb-5">RSVP Overview</h2>
          
          {/* Progress bar */}
          <div className="h-4 rounded-full overflow-hidden flex bg-muted mb-5">
            {rsvpData.map((d) => (
              <div
                key={d.label}
                className={`${d.color} transition-all duration-700`}
                style={{ width: `${d.value}%` }}
              />
            ))}
          </div>

          <div className="flex gap-6">
            {rsvpData.map((d) => (
              <div key={d.label} className="flex items-center gap-2">
                <span className={`h-3 w-3 rounded-full ${d.color}`} />
                <span className="font-body text-sm text-muted-foreground">
                  {d.label} ({d.value}%)
                </span>
              </div>
            ))}
          </div>

          {/* Upcoming events */}
          <h3 className="font-display text-lg font-semibold mt-8 mb-4">Upcoming Events</h3>
          <div className="space-y-3">
            {upcomingEvents.map((evt) => (
              <div
                key={evt.couple}
                className="flex items-center justify-between p-4 rounded-md bg-accent/50 hover:bg-accent transition-colors cursor-pointer group"
              >
                <div>
                  <p className="font-display text-sm font-medium text-foreground">{evt.couple}</p>
                  <p className="font-body text-xs text-muted-foreground mt-0.5">
                    {evt.date} · {evt.venue} · {evt.guests} guests
                  </p>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-secondary transition-colors" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Notifications */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={5}
          variants={fadeUp}
          className="bg-card rounded-lg p-6 shadow-card border border-border/50"
        >
          <div className="flex items-center gap-2 mb-5">
            <Bell className="h-5 w-5 text-secondary" strokeWidth={1.5} />
            <h2 className="font-display text-xl font-semibold">Notifications</h2>
          </div>

          <div className="space-y-3">
            {notifications.map((n, i) => (
              <div
                key={i}
                className={`p-4 rounded-md border-l-4 bg-accent/50 ${
                  n.type === "urgent"
                    ? "border-l-primary"
                    : n.type === "success"
                    ? "border-l-sage"
                    : "border-l-secondary"
                }`}
              >
                <p className="font-body text-sm text-foreground">{n.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
