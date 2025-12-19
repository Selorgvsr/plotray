import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Users, Zap, BarChart3, TrendingUp } from "lucide-react";

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
      <section className="section-padding bg-gradient-to-br from-[hsl(220,30%,98%)] via-background to-[hsl(220,40%,96%)] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(220,80%,50%)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[hsl(45,90%,45%)]/5 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(220,80%,50%)]/10 border border-[hsl(220,80%,50%)]/20 mb-6">
                <Globe className="w-4 h-4 text-[hsl(220,80%,50%)]" />
                <span className="text-sm font-medium text-[hsl(220,80%,50%)]">Technology Driven</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-8 tracking-wide leading-tight">
                Digital Platform at the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(220,80%,50%)] to-[hsl(220,70%,60%)]">Core</span>
              </h2>
              
              {/* Feature cards */}
              <div className="space-y-4">
                {[
                  { icon: Globe, text: "Plottray operates as a technology-driven land platform.", color: "hsl(220,80%,50%)" },
                  { icon: Users, text: "Our digital ecosystem connects buyers, sellers, and projects.", color: "hsl(175,70%,40%)" },
                  { icon: Zap, text: "Automation improves efficiency and scalability.", color: "hsl(45,90%,45%)" },
                  { icon: BarChart3, text: "Data-driven insights enhance decision-making.", color: "hsl(220,80%,50%)" },
                  { icon: TrendingUp, text: "Technology enables consistent revenue growth.", color: "hsl(145,60%,40%)" },
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-md hover:border-[hsl(220,80%,50%)]/30 transition-all duration-300 group"
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${item.color}15` }}
                    >
                      <item.icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <p className="text-muted-foreground leading-relaxed pt-2">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[hsl(220,80%,50%)]/20 to-[hsl(45,90%,45%)]/20 rounded-3xl blur-2xl" />
                
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                  <img 
                    src={businessPlatform} 
                    alt="Digital Platform Dashboard" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,70%,15%)]/30 via-transparent to-transparent" />
                  
                  {/* Floating stats card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-md shadow-lg border border-white/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-muted-foreground">Platform Efficiency</p>
                        <p className="text-xl font-bold text-[hsl(220,80%,50%)]">98.5%</p>
                      </div>
                      <div className="h-10 w-px bg-border" />
                      <div>
                        <p className="text-xs text-muted-foreground">Active Users</p>
                        <p className="text-xl font-bold text-[hsl(145,60%,40%)]">10K+</p>
                      </div>
                      <div className="h-10 w-px bg-border" />
                      <div>
                        <p className="text-xs text-muted-foreground">Data Points</p>
                        <p className="text-xl font-bold text-[hsl(45,90%,45%)]">5M+</p>
                      </div>
                    </div>
                  </div>
                </div>
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
