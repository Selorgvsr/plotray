import { useEffect, useRef, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Train, Bus, Plane, Clock, CheckCircle, Phone, MessageCircle, Building2, Zap, Droplets, TreeDeciduous, Users, Trophy, Footprints, Flower2 } from "lucide-react";

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
const ProjectDetail = () => {
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
      {/* Page 1 - Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-amber-50/50 to-rose-100 bg-plotray-gold" />
        
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
        
        {/* Content */}
        <div className="container-custom relative z-10 text-center px-4 py-20">
          <Link to="/projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </Link>
          
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
              Premium Villa Plots at <br />
              <span className="text-primary">Kilambakkam / Urapakkam</span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl">(GST Road), Chennai</span>
            </h1>
            
            <div className="mt-8 inline-block">
              <div className="px-8 py-4 bg-primary/10 border-2 border-primary/20 rounded-2xl backdrop-blur-sm">
                <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary">
                  Opposite to Asia's Largest Bus Terminus
                </p>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Page 2 - Amenities Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Amenities
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => <div key={index} ref={el => amenityRefs.current[index] = el} className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-700 ${visibleAmenities.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
            transitionDelay: `${index * 100}ms`
          }}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={amenity.image} alt={amenity.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                
                {/* Dark overlay with title */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                      <amenity.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      {amenity.title}
                    </h3>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Page 3 - Location Advantages & Specifications */}
      <section ref={advantagesRef} className="py-20 md:py-32 bg-gradient-to-b from-white to-rose-50/50 bg-accent">
        <div className="container-custom px-4">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 transition-all duration-1000 ${visibleAdvantages ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Left Column - Kilambakkam Location Advantages */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-rose-100">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8">
                Kilambakkam Location Advantages
              </h3>
              <ul className="space-y-4">
                {kilambakkamAdvantages.map((advantage, index) => <li key={index} className="flex items-start gap-3" style={{
                animationDelay: `${index * 100}ms`,
                opacity: visibleAdvantages ? 1 : 0,
                transform: visibleAdvantages ? 'translateX(0)' : 'translateX(-20px)',
                transition: `all 0.5s ease ${index * 100}ms`
              }}>
                    <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground text-lg">{advantage}</span>
                  </li>)}
              </ul>
            </div>
            
            {/* Right Column - Our Project Location Advantages */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-rose-100">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8">
                Our Project Location Advantages
              </h3>
              <ul className="space-y-4">
                {projectAdvantages.map((advantage, index) => <li key={index} className="flex items-start gap-3" style={{
                opacity: visibleAdvantages ? 1 : 0,
                transform: visibleAdvantages ? 'translateX(0)' : 'translateX(20px)',
                transition: `all 0.5s ease ${index * 100}ms`
              }}>
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <advantage.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground text-lg mt-2">{advantage.text}</span>
                  </li>)}
              </ul>
            </div>
          </div>
          
          {/* Specifications Section */}
          <div className={`bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 transition-all duration-1000 delay-300 ${visibleAdvantages ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8 text-center">
              Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {specifications.map((spec, index) => <div key={index} className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-rose-100/50" style={{
              opacity: visibleAdvantages ? 1 : 0,
              transform: visibleAdvantages ? 'scale(1)' : 'scale(0.95)',
              transition: `all 0.4s ease ${300 + index * 50}ms`
            }}>
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{spec}</span>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Page 4 - Location Map & Contact */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-rose-50/50 to-white">
        <div className="container-custom px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Location Map
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          {/* Map Container */}
          <div className="bg-white rounded-3xl p-4 md:p-8 shadow-xl border border-rose-100 mb-8">
            <div className="aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border-4 border-rose-100">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1234567890123!2d80.0892!3d12.8756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b0b0b0b0b0b%3A0x0b0b0b0b0b0b0b0b!2sKilambakkam%20Bus%20Terminus!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Project Location Map" className="w-full h-full" />
            </div>
            
            {/* Key landmarks */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
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
      </section>

      {/* Fixed Contact Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-rose-100 shadow-2xl z-50">
        
      </div>
      
      {/* Bottom padding to account for fixed contact bar */}
      <div className="h-20" />
    </Layout>;
};
export default ProjectDetail;