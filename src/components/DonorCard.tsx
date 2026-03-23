import { Donor } from "@/lib/types";
import { Phone, MapPin, Droplets } from "lucide-react";
import { motion } from "framer-motion";

interface DonorCardProps {
  donor: Donor;
  index?: number;
}

const DonorCard = ({ donor, index = 0 }: DonorCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
    className="bg-card rounded-xl border border-border p-5 shadow-card hover:shadow-card-hover transition-shadow duration-300"
  >
    <div className="flex items-start justify-between mb-3">
      <div>
        <h3 className="font-semibold text-foreground">{donor.name}</h3>
        <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
          <MapPin className="w-3.5 h-3.5" /> {donor.city}
        </p>
      </div>
      <span className="flex items-center gap-1 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
        <Droplets className="w-3.5 h-3.5" /> {donor.bloodGroup}
      </span>
    </div>

    <div className="flex items-center justify-between mt-4">
      <span
        className={`text-xs font-medium px-2.5 py-1 rounded-full ${
          donor.available
            ? "bg-green-50 text-green-600 border border-green-200"
            : "bg-muted text-muted-foreground"
        }`}
      >
        {donor.available ? "Available" : "Unavailable"}
      </span>

      {donor.available && (
        <a
          href={`tel:${donor.phone}`}
          className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          <Phone className="w-4 h-4" /> Contact
        </a>
      )}
    </div>
  </motion.div>
);

export default DonorCard;
