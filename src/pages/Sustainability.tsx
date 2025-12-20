import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, ArrowRight } from "lucide-react";

// Import images
import heroImage from "@/assets/sustainability-hero.jpg";
import responsibleImage from "@/assets/sustainability-responsible.jpg";
import layoutImage from "@/assets/sustainability-layout.jpg";
import waterImage from "@/assets/sustainability-water.jpg";
import solarImage from "@/assets/sustainability-solar.jpg";
import greenImage from "@/assets/sustainability-green.jpg";
import esgImage from "@/assets/sustainability-esg.jpg";
import urbanImage from "@/assets/sustainability-urban.jpg";
import ctaImage from "@/assets/sustainability-cta.jpg";
const Sustainability = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-br from-plotray-blue/90 via-plotray-blue/70 to-teal/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(45,212,191,0.2),transparent_50%)]" />
        
        <div className="container-custom relative z-10 text-center pt-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 animate-fade-in leading-tight">
            Building Sustainable Land for<br />
            <span className="text-gold">Future Generations</span>
          </h1>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Section 2: Responsible Land Development */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Responsible Land Development Practices
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                PLOTRAY believes in responsible and planned land development. We focus on organized layouts instead of unplanned expansion. Sustainable planning protects land value and the environment. Balanced growth ensures long-term usability. Responsible development benefits both investors and communities.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={responsibleImage} alt="Responsible land development" className="w-full h-[350px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Eco-Friendly Layout Planning */}
      <section className="section-padding bg-plotray-emerald/5">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl">
              <img src={layoutImage} alt="Eco-friendly layout planning" className="w-full h-[350px] object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Eco-Friendly Layout & Infrastructure Planning
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our plotted layouts support natural land flow. Stormwater drainage reduces waterlogging. Green landscaping improves air quality. Proper road planning minimizes environmental impact. Sustainability starts with smart design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Water & Resource Management */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Smart Water & Resource Management
              </h2>
              <p className="text-muted-foreground leading-relaxed">PLOTRAY promotes efficient water usage in layouts. Stormwater systems support groundwater recharge. Planned drainage prevents soil erosion. Resource management improves long-term land value. Sustainable land lasts longer.</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={waterImage} alt="Water and resource management" className="w-full h-[350px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Renewable Energy Integration (Solar) */}
      <section className="section-padding bg-plotray-emerald/5">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl">
              <img src={solarImage} alt="Solar-powered infrastructure" className="w-full h-[350px] object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Solar-Powered Infrastructure for Sustainable Living
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Solar energy reduces long-term infrastructure costs. Layouts support solar streetlights and common-area panels. Renewable energy lowers carbon footprint. Energy-efficient planning attracts future buyers. Clean energy strengthens sustainable land value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Green Spaces & Landscaping */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Green Spaces That Enhance Living & Value
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Green spaces create healthier environments. Landscaping improves visual appeal and comfort. Trees reduce heat and pollution. Well-planned greenery attracts future residents. Nature and investment grow together.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={greenImage} alt="Green spaces and landscaping" className="w-full h-[350px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: ESG Commitment */}
      <section className="section-padding bg-plotray-emerald/5">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl">
              <img src={esgImage} alt="ESG principles" className="w-full h-[350px] object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Built on Strong ESG Principles
              </h2>
              <p className="text-muted-foreground leading-relaxed">PLOTRAY aligns projects with ESG standards. Environmental care protects land ecosystems. Social planning supports future communities. Governance ensures transparency and compliance. Strong ESG builds investor and buyer confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Sustainable Urban Expansion */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Supporting Sustainable Urban Expansion
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                PLOTRAY aligns with responsible city growth. We focus on expansion that supports infrastructure. Avoiding overcrowding preserves land quality. Planned growth increases long-term appreciation. Sustainable cities create sustainable assets.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={urbanImage} alt="Sustainable urban expansion" className="w-full h-[350px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${ctaImage})`
      }} />
        <div className="absolute inset-0 bg-gradient-to-r from-plotray-emerald/90 to-plotray-teal/80" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <Leaf className="w-4 h-4 text-plotray-gold" />
              <span className="text-sm font-medium text-white">Sustainable Future</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              Invest in Land That Respects the Future
            </h2>
            
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Sustainability protects long-term investments. Eco-planned land holds value over decades. PLOTRAY combines growth with responsibility. Choose land that aligns with future needs. Build wealth the sustainable way.
            </p>
            
            <Button size="lg" className="bg-gradient-to-r from-plotray-gold to-yellow-500 hover:from-yellow-500 hover:to-plotray-gold text-plotray-navy font-semibold rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
              <Link to="/contact">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Sustainability;