import { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle } from "lucide-react";
import { BLOOD_GROUPS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const BloodRequestPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    patientName: "", bloodGroup: "", city: "", hospital: "", contact: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.patientName.trim()) e.patientName = "Patient name is required";
    if (!form.bloodGroup) e.bloodGroup = "Select blood group";
    if (!form.city.trim()) e.city = "City is required";
    if (!form.hospital.trim()) e.hospital = "Hospital name is required";
    if (!/^\d{10}$/.test(form.contact)) e.contact = "Enter valid 10-digit number";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    toast.success("Blood request submitted successfully!");
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </motion.div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Request Submitted!</h2>
        <p className="text-muted-foreground">We will try to connect you with available donors shortly.</p>
      </div>
    );
  }

  const inputClass = (field: string) =>
    `w-full rounded-lg border ${errors[field] ? "border-destructive" : "border-input"} bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring`;

  return (
    <div className="container mx-auto px-4 py-12 max-w-lg">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-2 text-primary mb-2">
          <AlertCircle className="w-5 h-5" />
          <span className="text-sm font-medium">Emergency Request</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Request Blood</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Patient Name</label>
            <input className={inputClass("patientName")} value={form.patientName} onChange={(e) => setForm({ ...form, patientName: e.target.value })} />
            {errors.patientName && <p className="text-xs text-destructive mt-1">{errors.patientName}</p>}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Blood Group Needed</label>
              <select className={inputClass("bloodGroup")} value={form.bloodGroup} onChange={(e) => setForm({ ...form, bloodGroup: e.target.value })}>
                <option value="">Select</option>
                {BLOOD_GROUPS.map((bg) => <option key={bg} value={bg}>{bg}</option>)}
              </select>
              {errors.bloodGroup && <p className="text-xs text-destructive mt-1">{errors.bloodGroup}</p>}
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">City</label>
              <input className={inputClass("city")} value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
              {errors.city && <p className="text-xs text-destructive mt-1">{errors.city}</p>}
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Hospital Name</label>
            <input className={inputClass("hospital")} value={form.hospital} onChange={(e) => setForm({ ...form, hospital: e.target.value })} />
            {errors.hospital && <p className="text-xs text-destructive mt-1">{errors.hospital}</p>}
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Contact Number</label>
            <input className={inputClass("contact")} value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} />
            {errors.contact && <p className="text-xs text-destructive mt-1">{errors.contact}</p>}
          </div>
          <Button type="submit" className="w-full" size="lg">
            Submit Request
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default BloodRequestPage;
