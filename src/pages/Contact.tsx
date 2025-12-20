import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Users,
  Headphones
} from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 9444126240", href: "tel:+919444126240" },
  { icon: Mail, label: "Email", value: "shekar@plotray.com", href: "mailto:shekar@plotray.com" },
  { icon: MapPin, label: "Address", value: "123 Business Park, Chennai, India", href: "#" },
  { icon: Clock, label: "Working Hours", value: "Mon - Sat: 9AM - 6PM", href: "#" },
];

const supportOptions = [
  { icon: MessageSquare, title: "Sales Inquiry", desc: "Talk to our sales team about properties and investments." },
  { icon: Users, title: "Partnership", desc: "Explore business partnership opportunities with Plotray." },
  { icon: Headphones, title: "Customer Support", desc: "Get help with your existing account or transactions." },
];

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-plotray-blue/90 via-plotray-blue/70 to-teal/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(45,212,191,0.2),transparent_50%)]" />
        
        <div className="container-custom relative z-10 text-center pt-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 animate-fade-in leading-tight">
            Get in Touch with<br />
            <span className="text-gold">Plotray</span>
          </h1>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-2">Send Us a Message</h2>
              <p className="text-muted-foreground mb-6">Submit your inquiry and we'll respond promptly.</p>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-plotray-teal transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-plotray-teal transition-all"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-plotray-teal transition-all"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-plotray-teal transition-all"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-plotray-teal transition-all">
                    <option>Select a topic</option>
                    <option>Buying Property</option>
                    <option>Selling Property</option>
                    <option>Investment Advice</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <textarea
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-plotray-teal transition-all resize-none"
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-2">Talk to Our Experts</h2>
                <p className="text-muted-foreground">
                  Get personalized guidance from experts. Discuss your requirements in detail 
                  and make informed decisions with support at every step.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="glass-card rounded-xl p-4 hover-lift group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium text-foreground group-hover:text-plotray-teal transition-colors">{info.value}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              
              {/* Support Options */}
              <div className="space-y-4">
                <h3 className="text-lg font-heading font-semibold text-foreground">How can we help?</h3>
                {supportOptions.map((option, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors cursor-pointer">
                    <div className="w-10 h-10 rounded-lg bg-plotray-teal/20 flex items-center justify-center flex-shrink-0">
                      <option.icon className="w-5 h-5 text-plotray-teal" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{option.title}</h4>
                      <p className="text-sm text-muted-foreground">{option.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Map Placeholder */}
              <div className="glass-card rounded-2xl p-4 h-48 flex items-center justify-center bg-muted/50">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Map Integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
