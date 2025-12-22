import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, MapPin, TrendingUp, ArrowRight, CheckCircle, Shield, Route, Layers } from "lucide-react";
import projectsHeroImg from "@/assets/projects-hero.jpg";
const projects = [{
  name: "Green Valley Township",
  location: "Near Chennai Outer Ring Road",
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
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={projectsHeroImg} alt="Plotray Projects" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-plotray-blue/80 via-plotray-blue/60 to-teal/50" />
        <div className="container-custom relative z-10 text-center pt-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 animate-fade-in leading-tight">
            ​Invest in Villa Plot     <br />
            
          </h1>
          
          <p style={{
          animationDelay: '0.2s'
        }} className="text-lg max-w-2xl mx-auto mb-8 animate-fade-in text-primary-foreground md:text-2xl">
            Investing in land brings financial peace and lasting growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <Button 
              variant="hero" 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-plotray-blue font-semibold text-lg px-8"
              onClick={() => document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Building2 className="w-5 h-5 mr-2" />
              Explore Projects
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Featured Projects */}
      <section id="projects-section" className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Projects</h2>
            <p className="text-muted-foreground">
              ​Land Always Appreciate  
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => <div key={index} className="glass-card rounded-2xl overflow-hidden hover-lift group">
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
              </div>)}
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      

      {/* Growth & ROI Potential */}
      

      {/* CTA Section */}
      
    </Layout>;
};
export default Projects;