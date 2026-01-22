import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Send } from "lucide-react";
import contactHeroImg from "@/assets/contact-hero.jpg";
const contactInfo = [{
  icon: Phone,
  label: "Phone",
  value: "+91 9444126240",
  href: "tel:+919444126240"
}, {
  icon: Mail,
  label: "Email",
  value: "shekar@plotray.com",
  href: "mailto:shekar@plotray.com"
}];
const Contact = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={contactHeroImg} alt="Contact Plotray" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-plotray-blue/80 via-plotray-blue/60 to-teal/50" />
        
        <div className="container-custom relative z-10 text-center pt-20 py-0">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 animate-fade-in leading-tight text-card-foreground lg:text-6xl mx-0 text-right">                 Get in Touch with <br />
            <span className="text-gold"><span style={{
              color: '#166534'
            }}>PLOT</span><span style={{
              color: '#F97316'
            }} className="text-orange-500">RAY</span></span>
          </h1>
          
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Talk to Our Experts Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Talk to Our Experts
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get personalized guidance from experts. Discuss your requirements in detail and make informed decisions with support at every step
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => <a key={index} href={info.href} className="glass-card rounded-2xl p-6 hover-lift group text-center w-64">
                <div className="w-16 h-16 rounded-xl gradient-hero flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                <p className="font-semibold text-lg text-foreground group-hover:text-plotray-teal transition-colors">
                  {info.value}
                </p>
              </a>)}
          </div>
          
        </div>
      </section>

      {/* Send Us a Message Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
                Send Us a Message
              </h2>
              <p className="text-lg text-muted-foreground">
                Submit your inquiry and we'll respond promptly.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-8 md:p-10">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-plotray-teal transition-all" placeholder="" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-plotray-teal transition-all" placeholder="" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-plotray-teal transition-all" placeholder="" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-plotray-teal transition-all" placeholder="" />
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
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-plotray-teal transition-all resize-none" placeholder="Type Here..." />
                </div>
                
                <Button variant="hero" size="lg" className="w-full">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Contact;