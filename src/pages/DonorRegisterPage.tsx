import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, CheckCircle } from "lucide-react";
import { BLOOD_GROUPS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const DonorRegisterPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", age: "", bloodGroup: "", city: "", phone: "", lastDonation: "", available: true,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.age || +form.age < 18 || +form.age > 65) e.age = "Age must be 18-65";
    if (!form.bloodGroup) e.bloodGroup = "Select blood group";
    if (!form.city.trim()) e.city = "City is required";
    if (!/^\d{10}$/.test(form.phone)) e.phone = "Enter valid 10-digit number";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    toast.success("Registration successful! Thank you for becoming a donor.");
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </motion.div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Thank You!</h2>
        <p className="text-muted-foreground">Your registration as a blood donor has been recorded.</p>
      </div>
    );
  }

  const inputClass = (field: string) =>
    `w-full rounded-lg border ${errors[field] ? "border-destructive" : "border-input"} bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring`;

  return (
    <div className="container mx-auto px-4 py-12 max-w-lg">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-2 text-primary mb-2">
          <Heart className="w-5 h-5 fill-primary" />
          <span className="text-sm font-medium">Become a Donor</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Donor Registration</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Full Name</label>
            <input className={inputClass("name")} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Age</label>
              <input type="number" className={inputClass("age")} value={form.age} onChange={(e) => setForm({ ...form, age: e.target.value })} />
              {errors.age && <p className="text-xs text-destructive mt-1">{errors.age}</p>}
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Blood Group</label>
              <select className={inputClass("bloodGroup")} value={form.bloodGroup} onChange={(e) => setForm({ ...form, bloodGroup: e.target.value })}>
                <option value="">Select</option>
                {BLOOD_GROUPS.map((bg) => <option key={bg} value={bg}>{bg}</option>)}
              </select>
              {errors.bloodGroup && <p className="text-xs text-destructive mt-1">{errors.bloodGroup}</p>}
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">City</label>
            <input className={inputClass("city")} value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
            {errors.city && <p className="text-xs text-destructive mt-1">{errors.city}</p>}
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Phone Number</label>
            <input className={inputClass("phone")} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Last Donation Date</label>
            <input type="date" className={inputClass("lastDonation")} value={form.lastDonation} onChange={(e) => setForm({ ...form, lastDonation: e.target.value })} />
          </div>
          <div className="flex items-center justify-between bg-muted rounded-lg px-4 py-3">
            <span className="text-sm font-medium text-foreground">Available for Donation</span>
            <button
              type="button"
              onClick={() => setForm({ ...form, available: !form.available })}
              className={`relative w-12 h-6 rounded-full transition-colors ${form.available ? "bg-primary" : "bg-border"}`}
            >
              <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-primary-foreground transition-transform ${form.available ? "translate-x-6" : ""}`} />
            </button>
          </div>
          <Button type="submit" className="w-full" size="lg">
            Register as Donor
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default DonorRegisterPage;
