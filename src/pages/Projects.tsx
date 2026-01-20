import { useEffect, useRef, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Building2, MapPin, CheckCircle, Shield, Route, Layers, Train, Bus, Plane, Clock, Trophy, Flower2, Users, Zap, Footprints } from "lucide-react";

// Import amenity images

// Import amenity images
import amenitySports from "@/assets/amenity-sports.jpg";
import amenityCricket from "@/assets/amenity-cricket.jpg";
import amenityGarden from "@/assets/amenity-garden.jpg";
import amenityKids from "@/assets/amenity-kids.jpg";
import amenityRoads from "@/assets/amenity-roads.jpg";
import amenityJogging from "@/assets/amenity-jogging.jpg";
const amenities = [{
  title: "Multi-Sports Play Area",
  image: amenitySports,
  icon: Trophy
}, {
  title: "Cricket Nets",
  image: amenityCricket,
  icon: Trophy
}, {
  title: "Landscaped Garden",
  image: amenityGarden,
  icon: Flower2
}, {
  title: "Kids Play Area",
  image: amenityKids,
  icon: Users
}, {
  title: "Concrete Roads with Solar Lights",
  image: amenityRoads,
  icon: Zap
}, {
  title: "Paved Walkways & Jogging Track",
  image: amenityJogging,
  icon: Footprints
}];
const kilambakkamAdvantages = ["Centrally Located With Excellent Connectivity", "Gateway to Southern Districts", "Rapid Infrastructure Development", "Commercial, IT, and Industrial Growth", "Recreational Amenities", "Affordable Real Estate Price at Present", "Future Real Estate Growth and Investment Potential"];
const projectAdvantages = [{
  text: "2 Minutes from Urapakkam Railway Station",
  icon: Train
}, {
  text: "3 Minutes from Kilambakkam Bus Terminus & upcoming Metro Rail Station",
  icon: Bus
}, {
  text: "2 Minutes from GST Road",
  icon: MapPin
}, {
  text: "10 Minutes from Tambaram",
  icon: Clock
}, {
  text: "15 Minutes from Airport",
  icon: Plane
}];
const specifications = ["High-Strength Concrete Roads", "Solar-Powered Street Lights", "Paved Walkways", "Underground Stormwater Drains", "Underground Pipelines for Electric Cables", "Underground Pipelines for Water Supply", "Kids Play Area", "Multi-Sport Play Area", "Cricket Nets", "Jogging Track", "Landscaped Garden"];
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
  const [visibleAmenities, setVisibleAmenities] = useState<number[]>([]);
  const [visibleAdvantages, setVisibleAdvantages] = useState(false);
  const amenityRefs = useRef<(HTMLDivElement | null)[]>([]);
  const advantagesRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = amenityRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1 && !visibleAmenities.includes(index)) {
            setVisibleAmenities(prev => [...prev, index]);
          }
        }
      });
    }, {
      threshold: 0.2
    });
    amenityRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, [visibleAmenities]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleAdvantages(true);
        }
      });
    }, {
      threshold: 0.2
    });
    if (advantagesRef.current) {
      observer.observe(advantagesRef.current);
    }
    return () => observer.disconnect();
  }, []);
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Project</h2>
            <p className="text-foreground">
              ​Highway Land = 25% Faster Gains than your Flat, Data Proven                     
            </p>
          </div>
          
          {/* Walkable Distance Points */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-8">
            <div className="flex items-center gap-3 bg-gradient-to-r from-plotray-blue to-teal px-5 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 bg-card-foreground">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-sm md:text-base lg:text-lg tracking-wide">
                Walkable Distance from Kilambakkam Bus Terminus
              </span>
            </div>
            <div className="flex items-center gap-3 bg-gradient-to-r from-fuchsia-600 to-purple-600 px-5 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Route className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-sm md:text-base lg:text-lg tracking-wide">
                Walkable Distance from Urappakkam Railway Station
              </span>
            </div>
            <div className="flex items-center gap-3 bg-gradient-to-r from-gold to-amber-500 px-5 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 bg-card-foreground">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-sm md:text-base lg:text-lg tracking-wide">
                Walkable Distance from the Upcoming Metro Station
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {projects.map((project, index) => <div key={index} className="glass-card rounded-2xl overflow-hidden hover-lift group">
                <div className="aspect-[16/9] md:aspect-[21/9] relative overflow-hidden">
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
                  <h3 className="font-heading font-bold text-foreground mb-2 text-5xl">{project.name}</h3>
                  <div className="flex items-center gap-2 mb-4 text-[plotray-deep-blue] text-sidebar-primary border-0">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                </div>
              </div>)}
          </div>

          {/* Project Details - Always Visible */}
          <div className="mt-12">
            {/* Hero Section */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-rose-50 via-amber-50/50 to-rose-100 p-8 md:p-16 mb-12">
                {/* Decorative floral elements */}
                <div className="absolute top-0 left-0 w-64 h-64 opacity-20">
                  <svg viewBox="0 0 200 200" className="w-full h-full text-rose-300">
                    <path fill="currentColor" d="M30,100 Q50,50 100,30 Q150,50 170,100 Q150,150 100,170 Q50,150 30,100" />
                    <circle cx="100" cy="100" r="20" fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20 transform rotate-180">
                  <svg viewBox="0 0 200 200" className="w-full h-full text-rose-300">
                    <path fill="currentColor" d="M30,100 Q50,50 100,30 Q150,50 170,100 Q150,150 100,170 Q50,150 30,100" />
                    <circle cx="100" cy="100" r="20" fill="currentColor" />
                  </svg>
                </div>
                
                <div className="relative z-10 text-center">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
                    Premium Villa Plots at <br />
                    <span className="text-primary">Kilambakkam / Urapakkam</span>
                    <br />
                    <span className="text-xl sm:text-2xl md:text-3xl">(GST Road), Chennai</span>
                  </h2>
                  
                  <div className="mt-6 inline-block">
                    <div className="px-6 py-3 bg-primary/10 border-2 border-primary/20 rounded-2xl backdrop-blur-sm">
                      <p className="text-lg sm:text-xl md:text-2xl font-semibold text-primary">
                        Opposite to Asia's Largest Bus Terminus
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Amenities Section */}
              <div className="py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white rounded-3xl mb-12">
                <div className="px-4 md:px-8">
                  <div className="text-center max-w-2xl mx-auto mb-12">
                    <h3 className="text-2xl md:text-4xl font-heading font-bold text-foreground mb-4">
                      Amenities
                    </h3>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {amenities.map((amenity, index) => <div key={index} ref={el => amenityRefs.current[index] = el} className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-700 ${visibleAmenities.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
                  transitionDelay: `${index * 100}ms`
                }}>
                        <div className="aspect-[4/3] overflow-hidden">
                          <img src={amenity.image} alt={amenity.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                              <amenity.icon className="w-5 h-5 text-white" />
                            </div>
                            <h4 className="text-lg md:text-xl font-semibold text-white">
                              {amenity.title}
                            </h4>
                          </div>
                        </div>
                      </div>)}
                  </div>
                </div>
              </div>

              {/* Location Advantages & Specifications */}
              <div ref={advantagesRef} className="py-12 md:py-16 bg-gradient-to-b from-white to-rose-50/50 rounded-3xl mb-12">
                <div className="px-4 md:px-8">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 transition-all duration-1000 ${visibleAdvantages ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Left Column - Kilambakkam Location Advantages */}
                    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-rose-100">
                      <h4 className="text-xl md:text-2xl font-heading font-bold text-primary mb-6">
                        Kilambakkam Location Advantages
                      </h4>
                      <ul className="space-y-3">
                        {kilambakkamAdvantages.map((advantage, index) => <li key={index} className="flex items-start gap-3" style={{
                      opacity: visibleAdvantages ? 1 : 0,
                      transform: visibleAdvantages ? 'translateX(0)' : 'translateX(-20px)',
                      transition: `all 0.5s ease ${index * 100}ms`
                    }}>
                            <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-foreground">{advantage}</span>
                          </li>)}
                      </ul>
                    </div>
                    
                    {/* Right Column - Our Project Location Advantages */}
                    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-rose-100">
                      <h4 className="text-xl md:text-2xl font-heading font-bold text-primary mb-6">
                        Our Project Location Advantages
                      </h4>
                      <ul className="space-y-3">
                        {projectAdvantages.map((advantage, index) => <li key={index} className="flex items-start gap-3" style={{
                      opacity: visibleAdvantages ? 1 : 0,
                      transform: visibleAdvantages ? 'translateX(0)' : 'translateX(20px)',
                      transition: `all 0.5s ease ${index * 100}ms`
                    }}>
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                              <advantage.icon className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-foreground mt-2">{advantage.text}</span>
                          </li>)}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Specifications Section */}
                  <div className={`bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-6 md:p-10 transition-all duration-1000 delay-300 ${visibleAdvantages ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h4 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-6 text-center">
                      Specifications
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {specifications.map((spec, index) => <div key={index} className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm border border-rose-100/50" style={{
                    opacity: visibleAdvantages ? 1 : 0,
                    transform: visibleAdvantages ? 'scale(1)' : 'scale(0.95)',
                    transition: `all 0.4s ease ${300 + index * 50}ms`
                  }}>
                          <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <CheckCircle className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-foreground font-medium text-sm">{spec}</span>
                        </div>)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Map */}
              <div className="py-12 md:py-16 bg-gradient-to-b from-rose-50/50 to-white rounded-3xl">
                <div className="px-4 md:px-8">
                  <div className="text-center max-w-2xl mx-auto mb-8">
                    <h3 className="text-2xl md:text-4xl font-heading font-bold text-foreground mb-4">
                      Location Map
                    </h3>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                  </div>
                  
                  <div className="bg-white rounded-3xl p-4 md:p-6 shadow-xl border border-rose-100">
                    <div className="aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border-4 border-rose-100">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1234567890123!2d80.0892!3d12.8756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b0b0b0b0b0b%3A0x0b0b0b0b0b0b0b0b!2sKilambakkam%20Bus%20Terminus!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin" width="100%" height="100%" style={{
                    border: 0
                  }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Project Location Map" className="w-full h-full" />
                    </div>
                    
                    <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-3 h-3 rounded-full bg-primary" />
                        <span>GST Road</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-3 h-3 rounded-full bg-blue-500" />
                        <span>Urapakkam Railway Station</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span>Kilambakkam Bus Terminus</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-3 h-3 rounded-full bg-amber-500" />
                        <span>Our Project Site</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Projects;