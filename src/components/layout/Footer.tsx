import { Link } from "react-router-dom";
import { Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import plotrayLogo from "@/assets/plotray-logo-2.png";
const footerLinks = {
  company: [{
    name: "About Us",
    path: "/about"
  }, {
    name: "Sustainability",
    path: "/sustainability"
  }, {
    name: "Business Revenue Model",
    path: "/business-model"
  }],
  services: [{
    name: "Buy Land",
    path: "/buy"
  }, {
    name: "Sell Land",
    path: "/sell"
  }, {
    name: "Land Assets",
    path: "/landasset"
  }, {
    name: "Projects",
    path: "/projects"
  }],
  support: [{
    name: "Contact Us",
    path: "/contact"
  }, {
    name: "Privacy Policy",
    path: "/privacy"
  }, {
    name: "Terms & Conditions",
    path: "/terms"
  }]
};
const socialLinks = [{
  icon: Facebook,
  href: "#"
}, {
  icon: Twitter,
  href: "#"
}, {
  icon: Linkedin,
  href: "#"
}, {
  icon: Instagram,
  href: "#"
}];
export const Footer = () => {
  return <footer className="bg-white text-foreground">
      <div className="container-custom section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img alt="PLOTRAY - Land Investment Platform" className="h-24 md:h-32 w-auto object-contain" src="/lovable-uploads/Gemini_Generated_Image_694q4y694q4y694q-removebg-preview.png" />
              <span className="text-2xl md:text-3xl font-heading font-bold">
                <span className="text-[#166534] text-4xl font-extrabold">PLOT</span>
                <span className="text-4xl font-extrabold text-orange-500">RAY</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
              <span className="font-bold text-green-800">PLOT</span><span className="text-[#C2410C] font-bold">RAY</span> is your trusted partner for strategic land investments near growing cities. We connect buyers with premium land opportunities.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => <a key={index} href={social.href} className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
                  <social.icon className="w-4 h-4" />
                </a>)}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => <li key={link.name}>
                  <Link to={link.path} className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map(link => <li key={link.name}>
                  <Link to={link.path} className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map(link => <li key={link.name}>
                  <Link to={link.path} className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-muted-foreground">
              <a href="mailto:contact@plotray.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                shekar@plotray.com
              </a>
              <a href="tel:+911234567890" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" />
                +91 9444126240   
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} <span className="font-bold text-orange-500">PLOT</span><span className="text-[#C2410C] font-bold">RAY</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};