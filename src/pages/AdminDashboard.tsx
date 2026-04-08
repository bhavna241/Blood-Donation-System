import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, FileText, Droplets, MapPin, Phone } from "lucide-react";
import { DUMMY_DONORS, DUMMY_REQUESTS } from "@/lib/data";

const AdminDashboard = () => {
  const [tab, setTab] = useState<"donors" | "requests">("donors");
  const [donors, setDonors] = useState([]);
useEffect(() => {
  const fetchDonors = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/donors");
      const data = await res.json();

      // 🔥 merge dummy + real
      setDonors([...DUMMY_DONORS, ...data]);

    } catch (err) {
      console.error(err);
    }
  };

  fetchDonors();
}, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Admin Dashboard</h1>

      <div className="flex gap-2 mb-8">
        <button
          onClick={() => setTab("donors")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
            tab === "donors" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
          }`}
        >
          <Users className="w-4 h-4" /> Donors ({DUMMY_DONORS.length})
        </button>
        <button
          onClick={() => setTab("requests")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
            tab === "requests" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
          }`}
        >
          <FileText className="w-4 h-4" /> Requests ({DUMMY_REQUESTS.length})
        </button>
      </div>

      {tab === "donors" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-3 px-4 font-medium text-muted-foreground">Name</th>
                <th className="py-3 px-4 font-medium text-muted-foreground">Blood Group</th>
                <th className="py-3 px-4 font-medium text-muted-foreground">City</th>
                <th className="py-3 px-4 font-medium text-muted-foreground">Phone</th>
                <th className="py-3 px-4 font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {donors.map((d, index) => (
                <tr key={d.id || index} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="py-3 px-4 font-medium text-foreground">{d.name}</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center gap-1 bg-accent text-accent-foreground px-2 py-0.5 rounded-full text-xs font-medium">
                      <Droplets className="w-3 h-3" /> {d.bloodGroup}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground flex items-center gap-1"><MapPin className="w-3 h-3" /> {d.city}</td>
                  <td className="py-3 px-4 text-muted-foreground flex items-center gap-1"><Phone className="w-3 h-3" /> {d.phone}</td>
                  <td className="py-3 px-4">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${d.available ? "bg-green-50 text-green-600" : "bg-muted text-muted-foreground"}`}>
                      {d.available ? "Available" : "Unavailable"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      )}

      {tab === "requests" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-3 px-4 font-medium text-muted-foreground">Patient</th>
                <th className="py-3 px-4 font-medium text-muted-foreground">Blood Group</th>
                <th className="py-3 px-4 font-medium text-muted-foreground">Hospital</th>
                <th className="py-3 px-4 font-medium text-muted-foreground">City</th>
                <th className="py-3 px-4 font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {DUMMY_REQUESTS.map((r) => (
                <tr key={r.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="py-3 px-4 font-medium text-foreground">{r.patientName}</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center gap-1 bg-accent text-accent-foreground px-2 py-0.5 rounded-full text-xs font-medium">
                      <Droplets className="w-3 h-3" /> {r.bloodGroup}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">{r.hospital}</td>
                  <td className="py-3 px-4 text-muted-foreground">{r.city}</td>
                  <td className="py-3 px-4">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      r.status === "completed" ? "bg-green-50 text-green-600" : "bg-amber-50 text-amber-600"
                    }`}>
                      {r.status === "completed" ? "Completed" : "Pending"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      )}
    </div>
  );
};

export default AdminDashboard;
