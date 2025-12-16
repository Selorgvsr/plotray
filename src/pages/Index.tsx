import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  TrendingUp, 
  Shield, 
  Search, 
  Building2, 
  ArrowRight, 
  CheckCircle,
  Star,
  Users,
  Briefcase
} from "lucide-react";

const locations = [
  { city: "Chennai", growth: "+18%", color: "bg-plotray-teal" },
  { city: "Bengaluru", growth: "+22%", color: "bg-plotray-emerald" },
  { city: "Hyderabad", growth: "+15%", color: "bg-plotray-orange" },
  { city: "Pune", growth: "+20%", color: "bg-plotray-purple" },
];

const features = [
  {
    icon: Shield,
    title: "Verified Listings",
    description: "Every property is legally verified and documented for your peace of mind.",
  },
  {
    icon: TrendingUp,
    title: "Growth Analytics",
    description: "Data-driven insights on property appreciation and market trends.",
  },
  {
    icon: Search,
    title: "Smart Discovery",
    description: "Advanced filters and maps to find your perfect investment location.",
  },
  {
    icon: Building2,
    title: "Premium Projects",
    description: "Curated land projects near malls, highways, and growing urban centers.",
  },
];

const stats = [
  { value: "500+", label: "Properties Listed" },
  { value: "₹200Cr+", label: "Transaction Value" },
  { value: "10,000+", label: "Happy Investors" },
  { value: "50+", label: "Cities Covered" },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Real Estate Investor",
    content: "Plotray helped me find the perfect plot near the upcoming metro line. The value has already appreciated 25% in just one year.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "First-time Buyer",
    content: "As a first-time land buyer, I was nervous. Plotray's team guided me through every step. Highly recommended!",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Portfolio Investor",
    content: "Managing multiple land assets is so easy with Plotray. Their insights on growth potential are invaluable.",
    rating: 5,
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-plotray-teal rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm mb-6 animate-fade-in">
                <Star className="w-4 h-4 text-plotray-gold" fill="currentColor" />
                <span className="text-sm font-medium">Trusted by 10,000+ investors</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 animate-slide-up">
                Invest in Land
                <br />
                <span className="text-plotray-gold">Near Growing Cities</span>
              </h1>
              
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg animate-slide-up" style={{ animationDelay: "0.1s" }}>
                Discover premium land parcels strategically located near malls, plazas, highways, 
                and expanding city zones. Build long-term wealth with verified land investments.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/buy">
                    Explore Properties
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <Link to="/sell">List Your Land</Link>
                </Button>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl md:text-3xl font-heading font-bold text-plotray-gold">{stat.value}</div>
                    <div className="text-sm text-primary-foreground/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="hidden lg:block relative">
              <div className="relative animate-float">
                <div className="absolute -inset-4 bg-primary-foreground/5 rounded-3xl backdrop-blur-xl" />
                <div className="relative glass-card rounded-3xl p-6 space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-foreground">Featured Properties</span>
                    <span className="text-xs text-muted-foreground">Live Updates</span>
                  </div>
                  {locations.map((loc, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg ${loc.color} flex items-center justify-center`}>
                          <MapPin className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <span className="font-medium text-foreground">{loc.city}</span>
                      </div>
                      <span className="text-plotray-emerald font-semibold">{loc.growth}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Why Choose <span className="text-plotray-teal">Plotray</span>
            </h2>
            <p className="text-muted-foreground">
              We provide verified land listings with transparent details, market insights, 
              and expert guidance for smarter investments.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group glass-card rounded-2xl p-6 hover-lift cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Locations Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Top Locations to <span className="text-plotray-teal">Invest</span>
              </h2>
              <p className="text-muted-foreground max-w-lg">
                Explore handpicked locations identified for high growth and demand. 
                Each location is evaluated based on connectivity and urban expansion.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/buy">
                View All Locations
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((loc, index) => (
              <div 
                key={index} 
                className="group relative rounded-2xl overflow-hidden hover-lift cursor-pointer"
              >
                <div className={`absolute inset-0 ${loc.color} opacity-90`} />
                <div className="relative p-6 text-primary-foreground min-h-[200px] flex flex-col justify-between">
                  <div>
                    <MapPin className="w-8 h-8 mb-4 opacity-80" />
                    <h3 className="text-2xl font-heading font-bold">{loc.city}</h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm opacity-80">Annual Growth</span>
                    <span className="text-xl font-bold">{loc.growth}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              How <span className="text-plotray-teal">Plotray</span> Works
            </h2>
            <p className="text-muted-foreground">
              A simple, transparent process to help you invest in land with confidence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Discover", desc: "Browse verified land listings with detailed information and growth insights." },
              { step: "02", title: "Analyze", desc: "Compare properties using smart filters, maps, and investment analytics." },
              { step: "03", title: "Invest", desc: "Connect with sellers, complete documentation, and secure your investment." },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-7xl font-heading font-bold text-muted/50 mb-4">{item.step}</div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 right-0 w-1/2 h-0.5 bg-gradient-to-r from-plotray-teal to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding gradient-hero text-primary-foreground">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Trusted by <span className="text-plotray-gold">Investors</span>
            </h2>
            <p className="text-primary-foreground/80">
              See what our community of investors says about their experience with Plotray.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 bg-primary-foreground/10 backdrop-blur-lg border-primary-foreground/20">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-plotray-gold" fill="currentColor" />
                  ))}
                </div>
                <p className="text-primary-foreground/90 mb-6">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-primary-foreground/70">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden gradient-cta p-8 md:p-12 lg:p-16">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
            </div>
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent-foreground mb-4">
                Start Your Investment Journey Today
              </h2>
              <p className="text-accent-foreground/80 mb-8">
                Join thousands of investors who trust Plotray for their land investment needs. 
                Get started with verified listings and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link to="/buy">
                    Browse Properties
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
