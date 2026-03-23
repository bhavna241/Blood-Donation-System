import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Search, Droplets, Users, Clock, ArrowRight, ShieldCheck, Activity, Smile } from "lucide-react";
import { BLOOD_GROUPS } from "@/lib/data";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: Users, title: "Register as Donor", desc: "Fill in your details and blood group to join the donor network." },
  { icon: Search, title: "Search Donors", desc: "Search by blood group and city to find matching donors nearby." },
  { icon: Clock, title: "Get Connected", desc: "Contact available donors directly during emergencies." },
];

const benefits = [
  { icon: Heart, title: "Save Lives", desc: "One donation can save up to 3 lives." },
  { icon: Activity, title: "Health Check", desc: "Free mini health screening before each donation." },
  { icon: ShieldCheck, title: "Safe Process", desc: "Completely safe, sterile, and supervised." },
  { icon: Smile, title: "Feel Good", desc: "Experience the joy of helping someone in need." },
];

const HomePage = () => {
  const navigate = useNavigate();
  const [bloodGroup, setBloodGroup] = useState("");
  const [city, setCity] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (bloodGroup) params.set("bg", bloodGroup);
    if (city) params.set("city", city);
    navigate(`/search?${params.toString()}`);
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="gradient-hero py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Droplets className="w-4 h-4" /> Every Drop Counts
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight mb-4">
              Save Lives with<br />
              <span className="text-primary">Blood Donation</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Quickly connect with blood donors in your city during emergencies. Register as a donor or find one now.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" onClick={() => navigate("/search")} className="gap-2 px-8">
                <Search className="w-4 h-4" /> Find Donor
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/register")} className="gap-2 px-8">
                <Heart className="w-4 h-4" /> Become Donor
              </Button>
            </div>
          </motion.div>

          {/* Search bar */}
          <motion.form
            onSubmit={handleSearch}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 max-w-2xl mx-auto bg-card rounded-2xl shadow-card border border-border p-4 flex flex-col sm:flex-row gap-3"
          >
            <select
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
              className="flex-1 rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">All Blood Groups</option>
              {BLOOD_GROUPS.map((bg) => (
                <option key={bg} value={bg}>{bg}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Enter city..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="flex-1 rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button type="submit" className="gap-2">
              <Search className="w-4 h-4" /> Search
            </Button>
          </motion.form>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">Benefits of Donating Blood</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl border border-border p-6 shadow-card text-center"
              >
                <b.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="gradient-cta rounded-3xl p-10 md:p-16 text-center text-primary-foreground max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
              Join our growing community of blood donors and help save lives in your city.
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => navigate("/register")}
              className="gap-2 px-8"
            >
              Register Now <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
