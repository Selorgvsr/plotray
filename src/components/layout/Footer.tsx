import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
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
    path: "#"
  }, {
    name: "Terms & Conditions",
    path: "#"
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
  return <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-heading font-bold">
                Plot<span className="text-plotray-teal">ray</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6 max-w-sm">
              PLOTRAY is your trusted partner for strategic land investments near growing cities. We connect buyers with premium land opportunities.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => <a key={index} href={social.href} className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                  <social.icon className="w-4 h-4" />
                </a>)}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => <li key={link.name}>
                  <Link to={link.path} className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map(link => <li key={link.name}>
                  <Link to={link.path} className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map(link => <li key={link.name}>
                  <Link to={link.path} className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-primary-foreground/70">
              <a href="mailto:contact@plotray.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" />
                shekar@plotray.com
              </a>
              <a href="tel:+911234567890" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4" />
                +91 9444126240   
              </a>
            </div>
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} Plotray. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};