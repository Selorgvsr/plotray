import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Import images
import businessHero from "@/assets/business-hero.jpg";
import businessPlatform from "@/assets/business-platform.jpg";
import businessAcquisition from "@/assets/business-acquisition.jpg";
import businessPartnership from "@/assets/business-partnership.jpg";
import businessGrowth from "@/assets/business-growth.jpg";
import businessScalable from "@/assets/business-scalable.jpg";
import businessCta from "@/assets/business-cta.jpg";

const BusinessModel = () => {
  return (
    <Layout>
      {/* Section 1: Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={businessHero} 
            alt="Scalable Revenue Model" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,70%,15%)]/80 via-[hsl(220,70%,20%)]/60 to-[hsl(220,70%,15%)]/80" />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-tight max-w-5xl mx-auto animate-fade-in tracking-wide">
            A Scalable Revenue Model Built on Land Growth
          </h1>
        </div>
      </section>

      {/* Section 2: Digital Platform at the Core */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6 tracking-wide">
                Digital Platform at the <span className="text-[hsl(220,80%,50%)]">Core</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Plottray operates as a technology-driven land platform.</p>
                <p>Our digital ecosystem connects buyers, sellers, and projects.</p>
                <p>Automation improves efficiency and scalability.</p>
                <p>Data-driven insights enhance decision-making.</p>
                <p>Technology enables consistent revenue growth.</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={businessPlatform} 
                  alt="Digital Platform Dashboard" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,70%,15%)]/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Land Acquisition & Strategic Resale */}
      <section className="section-padding bg-[hsl(220,20%,97%)]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={businessAcquisition} 
                  alt="Land Acquisition" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,70%,15%)]/20 to-transparent" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6 tracking-wide">
                Land Acquisition & Strategic <span className="text-[hsl(45,90%,45%)]">Resale</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Plottray acquires land in high-growth zones.</p>
                <p>Strategic holding improves asset value.</p>
                <p>Resale is aligned with market demand.</p>
                <p>Location-driven appreciation increases margins.</p>
                <p>Land growth fuels sustainable revenue.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Revenue Through Project Partnerships */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6 tracking-wide">
                Revenue Through Project <span className="text-[hsl(220,80%,50%)]">Partnerships</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Plottray partners with developers and landowners.</p>
                <p>Joint development creates mutual value.</p>
                <p>Revenue is generated through structured agreements.</p>
                <p>Projects near cities attract strong demand.</p>
                <p>Partnerships expand revenue channels.</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={businessPartnership} 
                  alt="Project Partnerships" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,70%,15%)]/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Long-Term Asset Growth Strategy */}
      <section className="section-padding bg-[hsl(220,20%,97%)]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={businessGrowth} 
                  alt="Asset Growth Strategy" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,70%,15%)]/20 to-transparent" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6 tracking-wide">
                Long-Term Asset Growth <span className="text-[hsl(45,90%,45%)]">Strategy</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Land assets are held with a growth vision.</p>
                <p>Infrastructure expansion increases asset worth.</p>
                <p>Time-based appreciation builds strong returns.</p>
                <p>Strategic exits maximize value.</p>
                <p>Patience drives profitability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Scalable, Sustainable & Repeatable Revenue */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6 tracking-wide">
                Scalable, Sustainable & <span className="text-[hsl(175,70%,40%)]">Repeatable</span> Revenue
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Plottray's model supports scalable expansion.</p>
                <p>New locations add incremental revenue.</p>
                <p>Technology reduces operational friction.</p>
                <p>Sustainability ensures long-term stability.</p>
                <p>A repeatable model supports growth.</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={businessScalable} 
                  alt="Scalable Revenue" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,70%,15%)]/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: CTA - Built for Investors & Partners */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={businessCta} 
            alt="Investor Partnership" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,70%,15%)]/90 via-[hsl(220,70%,20%)]/80 to-[hsl(220,70%,15%)]/90" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 tracking-wide">
              A Revenue Model Designed for <span className="text-[hsl(45,90%,60%)]">Long-Term Growth</span>
            </h2>
            <div className="space-y-3 text-white/80 mb-8 text-lg">
              <p>Plotray balances growth with discipline.</p>
              <p>Clear revenue streams build investor confidence.</p>
              <p>Transparency supports strong partnerships.</p>
              <p>Scalable design enables future expansion.</p>
              <p className="font-semibold text-[hsl(45,90%,60%)]">Grow with Plotray.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[hsl(45,90%,45%)] to-[hsl(45,80%,55%)] text-[hsl(220,70%,15%)] hover:from-[hsl(45,90%,50%)] hover:to-[hsl(45,80%,60%)] font-semibold shadow-lg"
                asChild
              >
                <Link to="/contact">
                  Partner With Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Download Investor Deck
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BusinessModel;
