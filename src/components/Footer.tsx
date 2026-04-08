import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-muted/50 mt-auto">
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-primary font-semibold">
          <Heart className="w-5 h-5 fill-primary" />
          <span>LifeLink</span>
        </div>
        <p className="text-sm text-muted-foreground text-center">
          A college minor project · Helping connect blood donors with those in need
        </p>
        <p className="text-sm text-muted-foreground">
          Contact: lifelink@college.edu
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
