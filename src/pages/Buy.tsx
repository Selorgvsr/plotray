import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  TrendingUp, 
  Shield, 
  Search, 
  Filter,
  ArrowRight,
  CheckCircle,
  Map,
  Building
} from "lucide-react";

const locations = [
  { city: "Chennai", properties: 120, growth: "+18%", color: "bg-plotray-teal" },
  { city: "Bengaluru", properties: 95, growth: "+22%", color: "bg-plotray-emerald" },
  { city: "Hyderabad", properties: 85, growth: "+15%", color: "bg-plotray-orange" },
  { city: "Pune", properties: 75, growth: "+20%", color: "bg-plotray-purple" },
  { city: "Mumbai", properties: 110, growth: "+12%", color: "bg-plotray-sky" },
  { city: "Delhi NCR", properties: 130, growth: "+16%", color: "bg-plotray-indigo" },
];

const benefits = [
  { icon: Shield, title: "Verified Listings", desc: "Every property is legally verified and documented." },
  { icon: TrendingUp, title: "Growth Potential", desc: "Properties selected for long-term appreciation." },
  { icon: Map, title: "Strategic Locations", desc: "Near malls, highways, and expanding city zones." },
  { icon: Building, title: "Infrastructure Focus", desc: "Areas with strong infrastructure development." },
];

const filterOptions = [
  { label: "Budget", options: ["Under ₹20L", "₹20L - ₹50L", "₹50L - ₹1Cr", "Above ₹1Cr"] },
  { label: "Size", options: ["Under 1000 sq ft", "1000-2500 sq ft", "2500-5000 sq ft", "Above 5000 sq ft"] },
  { label: "Type", options: ["Residential", "Commercial", "Agricultural", "Industrial"] },
];

const Buy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-plotray-teal rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
              Buy Land Near
              <br />
              <span className="text-plotray-gold">Growing Cities</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Discover premium land parcels strategically located near malls, plazas, highways, 
              and expanding city zones. Each property is selected for its long-term appreciation potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="hero" size="lg">
                <Search className="w-5 h-5" />
                Search Properties
              </Button>
              <Button variant="hero-outline" size="lg">
                <Filter className="w-5 h-5" />
                Advanced Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Top Locations */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Top Locations to <span className="text-plotray-teal">Invest</span>
            </h2>
            <p className="text-muted-foreground">
              Explore handpicked locations identified for high growth and demand. 
              Each location is evaluated based on connectivity, nearby developments, and urban expansion.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc, index) => (
              <div 
                key={index} 
                className="group glass-card rounded-2xl overflow-hidden hover-lift cursor-pointer"
              >
                <div className={`h-32 ${loc.color} relative`}>
                  <MapPin className="absolute bottom-4 left-4 w-8 h-8 text-primary-foreground opacity-80" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-heading font-bold text-foreground">{loc.city}</h3>
                    <span className="text-plotray-emerald font-semibold">{loc.growth}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{loc.properties} properties available</p>
                  <Button variant="ghost" size="sm" className="w-full group-hover:bg-muted">
                    Explore {loc.city}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Buy with Plotray */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Why Buy with <span className="text-plotray-teal">Plotray</span>
            </h2>
            <p className="text-muted-foreground">
              Plotray provides verified land listings with transparent details. 
              We prioritize legal clarity, accessibility, and location strength.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Filters & Map View */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Smart Filters & <span className="text-plotray-teal">Map View</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Use advanced filters to search land by budget, size, and proximity to cities. 
                Interactive maps help visualize land location and surroundings clearly.
              </p>
              
              <div className="space-y-4 mb-8">
                {["Compare multiple plots easily in one view", "See nearby roads, developments, and landmarks", "Filter by budget, size, and property type", "Real-time availability updates"].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-plotray-teal flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="teal" size="lg">
                <Map className="w-5 h-5" />
                Open Map View
              </Button>
            </div>
            
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-heading font-semibold text-foreground">Filter Properties</h3>
                <Button variant="ghost" size="sm">Reset All</Button>
              </div>
              
              {filterOptions.map((filter, index) => (
                <div key={index} className="mb-6">
                  <label className="text-sm font-medium text-foreground mb-2 block">{filter.label}</label>
                  <div className="flex flex-wrap gap-2">
                    {filter.options.map((option, optIndex) => (
                      <button
                        key={optIndex}
                        className="px-4 py-2 text-sm rounded-lg border border-border hover:border-plotray-teal hover:bg-plotray-teal/10 transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              
              <Button variant="hero" className="w-full">
                <Search className="w-5 h-5" />
                Search Properties
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden gradient-hero p-8 md:p-12 lg:p-16 text-center">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                Start Your Investment Today
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Take the first step toward building long-term wealth through land. 
                Browse curated listings tailored to your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Browse All Properties
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <Link to="/contact">Talk to an Expert</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Buy;
