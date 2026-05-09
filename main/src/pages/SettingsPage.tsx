import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function SettingsPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-semibold text-foreground">Settings</h1>
        <p className="font-body text-sm text-muted-foreground mt-1">
          Manage your account preferences
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        {/* Profile */}
        <div className="bg-card rounded-lg p-6 shadow-card border border-border/50">
          <h2 className="font-display text-lg font-semibold mb-4">Profile</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="font-body text-sm text-muted-foreground">First Name</Label>
                <Input defaultValue="Sarah" className="mt-1.5 rounded-md font-body" />
              </div>
              <div>
                <Label className="font-body text-sm text-muted-foreground">Last Name</Label>
                <Input defaultValue="Palmer" className="mt-1.5 rounded-md font-body" />
              </div>
            </div>
            <div>
              <Label className="font-body text-sm text-muted-foreground">Email</Label>
              <Input defaultValue="sarah@weddingplanner.com" className="mt-1.5 rounded-md font-body" />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-card rounded-lg p-6 shadow-card border border-border/50">
          <h2 className="font-display text-lg font-semibold mb-4">Notifications</h2>
          <div className="space-y-4">
            {[
              { label: "Email notifications for new RSVPs", defaultChecked: true },
              { label: "Reminder before events", defaultChecked: true },
              { label: "Weekly summary reports", defaultChecked: false },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span className="font-body text-sm text-foreground">{item.label}</span>
                <Switch defaultChecked={item.defaultChecked} />
              </div>
            ))}
          </div>
        </div>

        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md font-body shadow-none">
          Save Changes
        </Button>
      </motion.div>
    </div>
  );
}
