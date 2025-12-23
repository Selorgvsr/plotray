import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, MapPin, TrendingUp, ArrowRight, CheckCircle, Shield, Route, Layers, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import projectsHeroImg from "@/assets/projects-hero.jpg";
import projectSlide1 from "@/assets/project-slide-1.png";
import projectSlide2 from "@/assets/project-slide-2.png";
import projectSlide3 from "@/assets/project-slide-3.png";
import projectSlide4 from "@/assets/project-slide-4.png";
import projectCardImage from "@/assets/kilambakkam-aerial.png";
const projects = [{
  name: "Green Valley Township",
  location: "Near Kilambakkam Bus Terminus",
  plots: 120,
  size: "1200-2400 sq ft",
  growth: "+22%",
  status: "Active"
}];
const projectSlides = [{
  image: projectSlide1,
  title: "Premium Villa Plots"
}, {
  image: projectSlide2,
  title: "Amenities"
}, {
  image: projectSlide3,
  title: "Location Advantages"
}, {
  image: projectSlide4,
  title: "Location Map"
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
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleOpenSheet = () => {
    setCurrentSlide(0);
    setIsSheetOpen(true);
  };
  const handleNextSlide = () => {
    if (currentSlide < projectSlides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={projectsHeroImg} alt="PLOTRAY Projects" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-plotray-blue/80 via-plotray-blue/60 to-teal/50" />
        <div className="container-custom relative z-10 text-center pt-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 animate-fade-in leading-tight">
            ​Invest in Villa Plot <br />
          </h1>
          
          <p style={{
          animationDelay: '0.2s'
        }} className="text-lg max-w-2xl mx-auto mb-8 animate-fade-in text-primary-foreground md:text-2xl">
            Investing in land brings financial peace and lasting growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <Button variant="hero" size="lg" className="bg-gold hover:bg-gold/90 text-plotray-blue font-semibold text-lg px-8" onClick={() => document.getElementById('projects-section')?.scrollIntoView({
            behavior: 'smooth'
          })}>
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
          
          <div className="grid grid-cols-1 gap-6">
            {projects.map((project, index) => <div key={index} className="glass-card rounded-2xl overflow-hidden hover-lift group">
                <div className="aspect-[16/9] md:aspect-[21/9] relative overflow-hidden">
                  <img alt={project.name} className="w-full h-full object-cover" src="/lovable-uploads/5629dd19-e44d-43f7-b5a1-7d905e28bef5.png" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground text-sm font-medium">
                    {project.status}
                  </div>
                  <Building2 className="absolute bottom-4 left-4 w-10 h-10 text-primary-foreground opacity-80" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-foreground mb-2 text-2xl">{project.name}</h3>
                  <div className="flex items-center gap-2 mb-4 text-[plotray-deep-blue] text-sidebar-primary">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                  
                  
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-1 text-plotray-emerald">
                      <TrendingUp className="w-4 h-4" />
                      <span className="font-semibold">{project.growth} YoY</span>
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:bg-muted" onClick={handleOpenSheet}>
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Project Details Sheet */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent side="right" className="w-full sm:max-w-2xl lg:max-w-4xl p-0 overflow-hidden">
          <div className="relative h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-background">
              <h2 className="text-xl font-heading font-bold text-foreground">
                {projectSlides[currentSlide].title}
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  {currentSlide + 1} / {projectSlides.length}
                </span>
                <Button variant="ghost" size="icon" onClick={() => setIsSheetOpen(false)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Slide Content */}
            <div className="flex-1 overflow-auto relative">
              <div className="flex transition-transform duration-500 ease-out h-full" style={{
              transform: `translateX(-${currentSlide * 100}%)`
            }}>
                {projectSlides.map((slide, index) => <div key={index} className="min-w-full h-full flex items-center justify-center p-4">
                    <img src={slide.image} alt={slide.title} className="max-w-full max-h-full object-contain rounded-lg shadow-lg" />
                  </div>)}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between p-4 border-t border-border bg-background">
              <Button variant="outline" onClick={handlePrevSlide} disabled={currentSlide === 0} className="gap-2">
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>
              
              {/* Dots indicator */}
              <div className="flex gap-2">
                {projectSlides.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2.5 h-2.5 rounded-full transition-colors ${index === currentSlide ? 'bg-primary' : 'bg-muted-foreground/30'}`} />)}
              </div>
              
              <Button variant="outline" onClick={handleNextSlide} disabled={currentSlide === projectSlides.length - 1} className="gap-2">
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </Layout>;
};
export default Projects;