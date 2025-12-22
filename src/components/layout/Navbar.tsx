import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import plotrayLogo from "@/assets/plotray-logo-2.png";
const navLinks = [{
  name: "Home",
  path: "/"
}, {
  name: "Buy",
  path: "/buy"
}, {
  name: "Sell",
  path: "/sell"
}, {
  name: "LandAsset",
  path: "/landasset"
}, {
  name: "Project",
  path: "/projects"
}, {
  name: "Contact",
  path: "/contact"
}];
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img alt="PLOTRAY - Land Investment Platform" className="h-24 md:h-28 w-auto object-contain" src="/lovable-uploads/Gemini_Generated_Image_694q4y694q4y694q-removebg-preview.png" />
            <span className="text-2xl md:text-3xl font-heading font-bold">
              <span className="text-green-800">PLOT</span>
              <span className="text-orange-700">RAY</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={cn("px-4 py-2 rounded-lg text-base font-medium transition-all duration-200", location.pathname === link.path ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted")}>
                {link.name}
              </Link>)}
          </div>

          {/* CTA Button */}
          

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden py-4 border-t border-border/50 animate-slide-up">
            <div className="flex flex-col gap-2">
              {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={cn("px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200", location.pathname === link.path ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted")}>
                  {link.name}
                </Link>)}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border/50">
                <Button variant="ghost" className="justify-center">
                  Sign In
                </Button>
                <Button variant="hero" className="justify-center">
                  Get Started
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};