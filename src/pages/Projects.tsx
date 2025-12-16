import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Building2, 
  MapPin, 
  TrendingUp, 
  ArrowRight,
  CheckCircle,
  Shield,
  Route,
  Layers
} from "lucide-react";

const projects = [
  {
    name: "Green Valley Township",
    location: "Near Chennai Outer Ring Road",
    plots: 120,
    size: "1200-2400 sq ft",
    growth: "+22%",
    status: "Active",
  },
  {
    name: "Metro Edge Plots",
    location: "Bengaluru Metro Corridor",
    plots: 85,
    size: "1000-1800 sq ft",
    growth: "+18%",
    status: "Active",
  },
  {
    name: "Highway Heights",
    location: "Hyderabad ORR Junction",
    plots: 95,
    size: "1500-3000 sq ft",
    growth: "+15%",
    status: "Launching",
  },
];

const highlights = [
  { icon: Route, title: "Road Access", desc: "Well-planned road access and layouts" },
  { icon: Layers, title: "Infrastructure", desc: "Essential infrastructure included" },
  { icon: Shield, title: "Clear Approvals", desc: "Clear demarcation and approvals" },
  { icon: CheckCircle, title: "Transparency", desc: "Transparency in every detail" },
];

const Projects = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(160 84% 25%) 0%, hsl(174 62% 35%) 100%)" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-plotray-emerald rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
              Curated Land
              <br />
              <span className="text-plotray-gold">Projects</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Explore professionally planned land projects selected for growth potential. 
              Focus on accessibility and future demand with quality benchmarks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="hero" size="lg">
                <Building2 className="w-5 h-5" />
                Explore Projects
              </Button>
              <Button variant="hero-outline" size="lg">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Projects Near Malls & <span className="text-plotray-teal">Cities</span>
            </h2>
            <p className="text-muted-foreground">
              Location drives long-term value. Projects are near commercial hubs and city centers 
              with high demand areas ensuring better appreciation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="glass-card rounded-2xl overflow-hidden hover-lift group">
                <div className="h-48 gradient-success relative">
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground text-sm font-medium">
                    {project.status}
                  </div>
                  <Building2 className="absolute bottom-4 left-4 w-10 h-10 text-primary-foreground opacity-80" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">{project.name}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Plots Available</p>
                      <p className="font-semibold text-foreground">{project.plots}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Plot Size</p>
                      <p className="font-semibold text-foreground">{project.size}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-1 text-plotray-emerald">
                      <TrendingUp className="w-4 h-4" />
                      <span className="font-semibold">{project.growth} YoY</span>
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:bg-muted">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Project <span className="text-plotray-teal">Highlights</span>
            </h2>
            <p className="text-muted-foreground">
              Each project is designed for long-term use with essential features and clear approvals.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center p-6 glass-card rounded-2xl">
                <div className="w-16 h-16 rounded-2xl gradient-success flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth & ROI Potential */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-6">ROI Comparison</h3>
              
              <div className="space-y-6">
                {[
                  { label: "Plotray Projects", value: 85, color: "bg-plotray-emerald" },
                  { label: "Traditional Real Estate", value: 60, color: "bg-plotray-teal" },
                  { label: "Fixed Deposits", value: 30, color: "bg-muted-foreground" },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-foreground">{item.label}</span>
                      <span className="text-sm font-semibold text-foreground">{item.value}%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-xs text-muted-foreground mt-6">*Based on 5-year average returns</p>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Growth & ROI <span className="text-plotray-emerald">Potential</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Urban expansion increases land demand. Projects benefit from surrounding development. 
                Plotray highlights ROI-focused insights for informed investments.
              </p>
              
              <div className="space-y-4 mb-8">
                {["Projects near expanding city zones", "Strong infrastructure development", "High appreciation potential", "Verified legal documentation"].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-plotray-emerald flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="teal" size="lg">
                Calculate Your ROI
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden gradient-success p-8 md:p-12 lg:p-16 text-center">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                Explore Project Opportunities
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Browse projects aligned with your goals. Access complete project information 
                and get expert assistance when needed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  View All Projects
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <Link to="/contact">Schedule Site Visit</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
