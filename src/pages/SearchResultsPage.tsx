import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Loader2 } from "lucide-react";
import { BLOOD_GROUPS, DUMMY_DONORS } from "@/lib/data";
import DonorCard from "@/components/DonorCard";

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const [bloodGroup, setBloodGroup] = useState(searchParams.get("bg") || "");
  const [city, setCity] = useState(searchParams.get("city") || "");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, [bloodGroup, city]);

  const results = useMemo(() => {
    return DUMMY_DONORS.filter((d) => {
      const bgMatch = !bloodGroup || d.bloodGroup === bloodGroup;
      const cityMatch = !city || d.city.toLowerCase().includes(city.toLowerCase());
      return bgMatch && cityMatch;
    });
  }, [bloodGroup, city]);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Find Blood Donors</h1>

      <div className="flex flex-col sm:flex-row gap-3 mb-10">
        <select
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
          className="flex-1 max-w-xs rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="">All Blood Groups</option>
          {BLOOD_GROUPS.map((bg) => <option key={bg} value={bg}>{bg}</option>)}
        </select>
        <input
          type="text"
          placeholder="Filter by city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 max-w-xs rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
          <Loader2 className="w-8 h-8 animate-spin text-primary mb-3" />
          <p className="text-sm">Searching donors...</p>
        </div>
      ) : results.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
          <Search className="w-10 h-10 mb-3 opacity-40" />
          <p>No donors found matching your criteria.</p>
        </div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {results.map((donor, i) => (
            <DonorCard key={donor.id} donor={donor} index={i} />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default SearchResultsPage;
