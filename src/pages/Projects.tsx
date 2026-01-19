import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Building2, MapPin, TrendingUp, ArrowRight, CheckCircle, Shield, Route, Layers } from "lucide-react";
import projectsHeroImg from "@/assets/projects-hero.jpg";
const projects = [{
  id: "green-valley-kilambakkam",
  name: "Green Valley Township",
  location: "Near Kilambakkam Bus Terminus",
  plots: 120,
  size: "1200-2400 sq ft",
  growth: "+22%",
  status: "Active"
}];
const highlights = [{
  icon: Route,
  title: "Road Access",
  desc: "Well-planned road access and layouts"
}, {
  icon: Layers,
  title: "Infrastructure",
  desc: "Essential infrastructure included"
}, {
  icon: Shield,
  title: "Clear Approvals",
  desc: "Clear demarcation and approvals"
}, {
  icon: CheckCircle,
  title: "Transparency",
  desc: "Transparency in every detail"
}];
const Projects = () => {
  const navigate = useNavigate();
  const handleViewDetails = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img alt="PLOTRAY Projects" className="w-full h-full object-cover" src="/lovable-uploads/f5b07c18-af7b-460b-988e-ae4512daee05.jpg" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-plotray-blue/80 via-plotray-blue/60 to-teal/50" />
        <div className="container-custom relative z-10 text-center pt-16 md:pt-20 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-4 md:mb-6 animate-fade-in leading-tight">
            ​Invest in Villa Plot
          </h1>
          
          <p style={{
          animationDelay: '0.2s'
        }} className="text-base sm:text-lg md:text-4xl max-w-2xl mx-auto mb-6 md:mb-8 animate-fade-in text-primary-foreground font-bold px-2">Investing in land brings financial peace and lasting growth</p>
          
          <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 mt-6 md:mt-8 animate-fade-in px-2" style={{
          animationDelay: '0.3s'
        }}>
            <div className="flex items-center gap-2 md:gap-3 md:ml-24">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white flex items-center justify-center shrink-0">
                <CheckCircle className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </div>
              <span className="text-white text-sm sm:text-base md:text-2xl font-semibold px-3 sm:px-4 md:px-6 py-1.5 md:py-2 rounded-full bg-fuchsia-600">
                Our Plots in Prime Locations
              </span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 md:ml-12">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white flex items-center justify-center shrink-0">
                <CheckCircle className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </div>
              <span className="text-white text-sm sm:text-base md:text-2xl font-semibold px-3 sm:px-4 md:px-6 py-1.5 md:py-2 rounded-full bg-fuchsia-600">
                Clear Legal Title
              </span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white flex items-center justify-center shrink-0">
                <CheckCircle className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </div>
              <span className="text-white text-sm sm:text-base md:text-2xl font-semibold px-3 sm:px-4 md:px-6 py-1.5 md:py-2 rounded-full bg-fuchsia-600 text-center">
                Statutory Approvals from Government
              </span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 md:mr-12">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white flex items-center justify-center shrink-0">
                <CheckCircle className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </div>
              <span className="text-white text-sm sm:text-base md:text-2xl font-semibold px-3 sm:px-4 md:px-6 py-1.5 md:py-2 rounded-full bg-fuchsia-600 text-center">
                Investment in our Prime Land is always Appreciating
              </span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mt-6 md:mt-8 animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <Button variant="hero" size="lg" className="bg-gold hover:bg-gold/90 text-plotray-blue font-semibold text-base md:text-lg px-6 md:px-8" onClick={() => document.getElementById('projects-section')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              <Building2 className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Explore Projects
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Featured Projects */}
      <section id="projects-section" className="section-padding bg-plotray-orange">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Projects</h2>
            <p className="text-foreground">
              ​Highway Land = 25% Faster Gains than your Flat, Data Proven                     
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {projects.map((project, index) => <div key={index} className="glass-card rounded-2xl overflow-hidden hover-lift group">
                <div className="aspect-[16/9] md:aspect-[21/9] relative overflow-hidden bg-card-foreground">
                  <img alt={project.name} className="w-full h-full object-cover" src="/lovable-uploads/5629dd19-e44d-43f7-b5a1-7d905e28bef5.png" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold text-white drop-shadow-lg tracking-tight bg-gradient-to-r from-white via-gold to-white bg-clip-text" style={{
                  textShadow: '2px 2px 8px rgba(0,0,0,0.7), 0 0 20px rgba(255,215,0,0.3)'
                }}>
                      Near Kilambakkam Bus Terminus
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground text-sm font-medium shrink-0">
                      {project.status}
                    </span>
                  </div>
                  <Building2 className="absolute bottom-4 left-4 w-10 h-10 text-primary-foreground opacity-80" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-foreground mb-2 text-2xl bg-card-foreground">{project.name}</h3>
                  <div className="flex items-center gap-2 mb-4 text-[plotray-deep-blue] text-sidebar-primary">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                  
                  
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-1 text-plotray-emerald">
                      <TrendingUp className="w-4 h-4" />
                      <span className="font-semibold">{project.growth} YoY</span>
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:bg-muted" onClick={() => handleViewDetails(project.id)}>
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>
    </Layout>;
};
export default Projects;