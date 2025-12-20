import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Users, Zap, BarChart3, TrendingUp, MapPin, Target, DollarSign, Building2, Handshake, FileCheck, Clock, Landmark, LineChart, Timer, Rocket, MapPinned, Settings, Leaf, RefreshCw, Shield, CheckCircle, Star, Award } from "lucide-react";

// Import images
import businessHero from "@/assets/business-hero.jpg";
import businessPlatform from "@/assets/business-platform.jpg";
import businessAcquisition from "@/assets/business-acquisition.jpg";
import businessPartnership from "@/assets/business-partnership.jpg";
import businessGrowth from "@/assets/business-growth.jpg";
import businessScalable from "@/assets/business-scalable.jpg";
import businessCta from "@/assets/business-cta.jpg";
const BusinessModel = () => {
  return <Layout>
      {/* Section 1: Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${businessHero})` }} />
        <div className="absolute inset-0 bg-gradient-to-br from-plotray-blue/90 via-plotray-blue/70 to-teal/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(45,212,191,0.2),transparent_50%)]" />
        
        <div className="container-custom relative z-10 text-center pt-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 animate-fade-in leading-tight">
            A Scalable Revenue Model<br />
            <span className="text-gold">Built on Land Growth</span>
          </h1>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Section 2: Digital Platform at the Core */}
      <section className="section-padding bg-gradient-to-br from-[hsl(220,30%,98%)] via-background to-[hsl(220,40%,96%)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(220,80%,50%)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[hsl(45,90%,45%)]/5 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(220,80%,50%)]/10 border border-[hsl(220,80%,50%)]/20 mb-6">
                <Globe className="w-4 h-4 text-[hsl(220,80%,50%)]" />
                <span className="text-sm font-medium text-[hsl(220,80%,50%)]">Technology Driven</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-8 tracking-wide leading-tight">
                Digital Platform at the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(220,80%,50%)] to-[hsl(220,70%,60%)]">Core</span>
              </h2>
              
              <div className="space-y-4">
                {[{
                icon: Globe,
                text: "PLOTRAY operates as a technology-driven land platform.",
                color: "hsl(220,80%,50%)"
              }, {
                icon: Users,
                text: "Our digital ecosystem connects buyers, sellers, and projects.",
                color: "hsl(175,70%,40%)"
              }, {
                icon: Zap,
                text: "Automation improves efficiency and scalability.",
                color: "hsl(45,90%,45%)"
              }, {
                icon: BarChart3,
                text: "Data-driven insights enhance decision-making.",
                color: "hsl(220,80%,50%)"
              }, {
                icon: TrendingUp,
                text: "Technology enables consistent revenue growth.",
                color: "hsl(145,60%,40%)"
              }].map((item, index) => <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-md hover:border-[hsl(220,80%,50%)]/30 transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110" style={{
                  backgroundColor: `${item.color}15`
                }}>
                      <item.icon className="w-5 h-5" style={{
                    color: item.color
                  }} />
                    </div>
                    <p className="text-muted-foreground leading-relaxed pt-2">{item.text}</p>
                  </div>)}
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[hsl(220,80%,50%)]/20 to-[hsl(45,90%,45%)]/20 rounded-3xl blur-2xl" />
                
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                  <img src={businessPlatform} alt="Digital Platform Dashboard" className="w-full h-auto" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,70%,15%)]/30 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-md shadow-lg border border-white/50">
                    <div className="flex items-center justify-between">
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">Efficiency</p>
                        <p className="text-xl font-bold text-[hsl(220,80%,50%)]">98.5%</p>
                      </div>
                      <div className="h-10 w-px bg-border" />
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">Users</p>
                        <p className="text-xl font-bold text-[hsl(145,60%,40%)]">10K+</p>
                      </div>
                      <div className="h-10 w-px bg-border" />
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">Data</p>
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
      <section className="section-padding bg-gradient-to-bl from-[hsl(45,30%,97%)] via-background to-[hsl(45,40%,96%)] relative overflow-hidden bg-accent">
        <div className="absolute top-0 left-0 w-80 h-80 bg-[hsl(45,90%,45%)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[hsl(145,60%,40%)]/5 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[hsl(45,90%,45%)]/20 to-[hsl(145,60%,40%)]/20 rounded-3xl blur-2xl" />
                
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                  <img src={businessAcquisition} alt="Land Acquisition" className="w-full h-auto" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,70%,15%)]/30 via-transparent to-transparent" />
                  
                  {/* Floating badge */}
                  <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-[hsl(45,90%,45%)] text-[hsl(220,70%,15%)] font-semibold text-sm shadow-lg">
                    <span className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      High Growth Zones
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(45,90%,45%)]/10 border border-[hsl(45,90%,45%)]/20 mb-6">
                <MapPin className="w-4 h-4 text-[hsl(45,90%,45%)]" />
                <span className="text-sm font-medium text-[hsl(45,90%,45%)]">Strategic Investment</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-8 tracking-wide leading-tight">
                Land Acquisition & Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(45,90%,45%)] to-[hsl(45,80%,55%)]">Resale</span>
              </h2>
              
              <div className="space-y-4">
                {[{
                icon: MapPin,
                text: "PLOTRAY acquires land in high-growth zones.",
                color: "hsl(45,90%,45%)"
              }, {
                icon: Target,
                text: "Strategic holding improves asset value.",
                color: "hsl(220,80%,50%)"
              }, {
                icon: DollarSign,
                text: "Resale is aligned with market demand.",
                color: "hsl(145,60%,40%)"
              }, {
                icon: Building2,
                text: "Location-driven appreciation increases margins.",
                color: "hsl(45,90%,45%)"
              }, {
                icon: TrendingUp,
                text: "Land growth fuels sustainable revenue.",
                color: "hsl(175,70%,40%)"
              }].map((item, index) => <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-md hover:border-[hsl(45,90%,45%)]/30 transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110" style={{
                  backgroundColor: `${item.color}15`
                }}>
                      <item.icon className="w-5 h-5" style={{
                    color: item.color
                  }} />
                    </div>
                    <p className="text-muted-foreground leading-relaxed pt-2">{item.text}</p>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Revenue Through Project Partnerships */}
      <section className="section-padding bg-gradient-to-br from-[hsl(220,30%,98%)] via-background to-[hsl(175,30%,96%)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(175,70%,40%)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[hsl(220,80%,50%)]/5 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(175,70%,40%)]/10 border border-[hsl(175,70%,40%)]/20 mb-6">
                <Handshake className="w-4 h-4 text-[hsl(175,70%,40%)]" />
                <span className="text-sm font-medium text-[hsl(175,70%,40%)]">Partnerships</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-8 tracking-wide leading-tight">
                Revenue Through Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(175,70%,40%)] to-[hsl(175,60%,50%)]">Partnerships</span>
              </h2>
              
              <div className="space-y-4">
                {[{
                icon: Handshake,
                text: "PLOTRAY partners with developers and landowners.",
                color: "hsl(175,70%,40%)"
              }, {
                icon: Users,
                text: "Joint development creates mutual value.",
                color: "hsl(220,80%,50%)"
              }, {
                icon: FileCheck,
                text: "Revenue is generated through structured agreements.",
                color: "hsl(45,90%,45%)"
              }, {
                icon: Building2,
                text: "Projects near cities attract strong demand.",
                color: "hsl(175,70%,40%)"
              }, {
                icon: TrendingUp,
                text: "Partnerships expand revenue channels.",
                color: "hsl(145,60%,40%)"
              }].map((item, index) => <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-md hover:border-[hsl(175,70%,40%)]/30 transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110" style={{
                  backgroundColor: `${item.color}15`
                }}>
                      <item.icon className="w-5 h-5" style={{
                    color: item.color
                  }} />
                    </div>
                    <p className="text-muted-foreground leading-relaxed pt-2">{item.text}</p>
                  </div>)}
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[hsl(175,70%,40%)]/20 to-[hsl(220,80%,50%)]/20 rounded-3xl blur-2xl" />
                
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                  <img src={businessPartnership} alt="Project Partnerships" className="w-full h-auto" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,70%,15%)]/30 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-md shadow-lg border border-white/50">
                    <div className="flex items-center justify-between">
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">Partners</p>
                        <p className="text-xl font-bold text-[hsl(175,70%,40%)]">100+</p>
                      </div>
                      <div className="h-10 w-px bg-border" />
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">Projects</p>
                        <p className="text-xl font-bold text-[hsl(220,80%,50%)]">50+</p>
                      </div>
                      <div className="h-10 w-px bg-border" />
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">Value</p>
                        <p className="text-xl font-bold text-[hsl(45,90%,45%)]">₹500Cr+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Long-Term Asset Growth Strategy */}
      <section className="section-padding bg-gradient-to-bl from-[hsl(145,30%,97%)] via-background to-[hsl(145,40%,96%)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-[hsl(145,60%,40%)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[hsl(45,90%,45%)]/5 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[hsl(145,60%,40%)]/20 to-[hsl(45,90%,45%)]/20 rounded-3xl blur-2xl" />
                
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                  <img src={businessGrowth} alt="Asset Growth Strategy" className="w-full h-auto" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,70%,15%)]/30 via-transparent to-transparent" />
                  
                  {/* Growth indicator */}
                  <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-[hsl(145,60%,40%)] text-white font-semibold text-sm shadow-lg">
                    <span className="flex items-center gap-2">
                      <LineChart className="w-4 h-4" />
                      Long-Term Vision
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(145,60%,40%)]/10 border border-[hsl(145,60%,40%)]/20 mb-6">
                <Clock className="w-4 h-4 text-[hsl(145,60%,40%)]" />
                <span className="text-sm font-medium text-[hsl(145,60%,40%)]">Growth Strategy</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-8 tracking-wide leading-tight">
                Long-Term Asset Growth <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(145,60%,40%)] to-[hsl(145,50%,50%)]">Strategy</span>
              </h2>
              
              <div className="space-y-4">
                {[{
                icon: Landmark,
                text: "Land assets are held with a growth vision.",
                color: "hsl(145,60%,40%)"
              }, {
                icon: Building2,
                text: "Infrastructure expansion increases asset worth.",
                color: "hsl(220,80%,50%)"
              }, {
                icon: LineChart,
                text: "Time-based appreciation builds strong returns.",
                color: "hsl(45,90%,45%)"
              }, {
                icon: Target,
                text: "Strategic exits maximize value.",
                color: "hsl(145,60%,40%)"
              }, {
                icon: Timer,
                text: "Patience drives profitability.",
                color: "hsl(175,70%,40%)"
              }].map((item, index) => <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-md hover:border-[hsl(145,60%,40%)]/30 transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110" style={{
                  backgroundColor: `${item.color}15`
                }}>
                      <item.icon className="w-5 h-5" style={{
                    color: item.color
                  }} />
                    </div>
                    <p className="text-muted-foreground leading-relaxed pt-2">{item.text}</p>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Scalable, Sustainable & Repeatable Revenue */}
      <section className="section-padding bg-gradient-to-br from-[hsl(220,30%,98%)] via-background to-[hsl(220,40%,96%)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(220,80%,50%)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[hsl(175,70%,40%)]/5 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(220,80%,50%)]/10 border border-[hsl(220,80%,50%)]/20 mb-6">
                <Rocket className="w-4 h-4 text-[hsl(220,80%,50%)]" />
                <span className="text-sm font-medium text-[hsl(220,80%,50%)]">Scalable Model</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-8 tracking-wide leading-tight">
                Scalable, Sustainable & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(175,70%,40%)] to-[hsl(175,60%,50%)]">Repeatable</span> Revenue
              </h2>
              
              <div className="space-y-4">
                {[{
                icon: Rocket,
                text: "PLOTRAY's model supports scalable expansion.",
                color: "hsl(220,80%,50%)"
              }, {
                icon: MapPinned,
                text: "New locations add incremental revenue.",
                color: "hsl(175,70%,40%)"
              }, {
                icon: Settings,
                text: "Technology reduces operational friction.",
                color: "hsl(45,90%,45%)"
              }, {
                icon: Leaf,
                text: "Sustainability ensures long-term stability.",
                color: "hsl(145,60%,40%)"
              }, {
                icon: RefreshCw,
                text: "A repeatable model supports growth.",
                color: "hsl(220,80%,50%)"
              }].map((item, index) => <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-md hover:border-[hsl(175,70%,40%)]/30 transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110" style={{
                  backgroundColor: `${item.color}15`
                }}>
                      <item.icon className="w-5 h-5" style={{
                    color: item.color
                  }} />
                    </div>
                    <p className="text-muted-foreground leading-relaxed pt-2">{item.text}</p>
                  </div>)}
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[hsl(175,70%,40%)]/20 to-[hsl(220,80%,50%)]/20 rounded-3xl blur-2xl" />
                
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                  <img src={businessScalable} alt="Scalable Revenue" className="w-full h-auto" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,70%,15%)]/30 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-md shadow-lg border border-white/50">
                    <div className="flex items-center justify-between">
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">Locations</p>
                        <p className="text-xl font-bold text-[hsl(220,80%,50%)]">25+</p>
                      </div>
                      <div className="h-10 w-px bg-border" />
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">Growth</p>
                        <p className="text-xl font-bold text-[hsl(145,60%,40%)]">45%</p>
                      </div>
                      <div className="h-10 w-px bg-border" />
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">Revenue</p>
                        <p className="text-xl font-bold text-[hsl(175,70%,40%)]">↑ YoY</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: CTA - Built for Investors & Partners */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={businessCta} alt="Investor Partnership" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,70%,12%)]/95 via-[hsl(220,70%,15%)]/90 to-[hsl(220,70%,12%)]/95" />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-10 w-32 h-32 border border-[hsl(45,90%,60%)]/20 rounded-full" />
          <div className="absolute bottom-1/4 right-10 w-48 h-48 border border-[hsl(220,80%,60%)]/20 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/5 rounded-full" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
              <Award className="w-5 h-5 text-[hsl(45,90%,60%)]" />
              <span className="text-sm font-medium text-white">Built for Long-Term Success</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white mb-8 tracking-wide leading-tight">
              A Revenue Model Designed for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(45,90%,60%)] to-[hsl(45,80%,70%)]">Long-Term Growth</span>
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {[{
              icon: Shield,
              text: "Growth with discipline",
              color: "hsl(220,80%,60%)"
            }, {
              icon: CheckCircle,
              text: "Clear revenue streams",
              color: "hsl(145,60%,50%)"
            }, {
              icon: Star,
              text: "Strong partnerships",
              color: "hsl(45,90%,60%)"
            }, {
              icon: Rocket,
              text: "Scalable design",
              color: "hsl(175,70%,50%)"
            }].map((item, index) => <div key={index} className="flex flex-col items-center gap-3 p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{
                backgroundColor: `${item.color}20`
              }}>
                    <item.icon className="w-6 h-6" style={{
                  color: item.color
                }} />
                  </div>
                  <p className="text-white/80 text-sm font-medium">{item.text}</p>
                </div>)}
            </div>
            
            <p className="text-2xl font-heading font-semibold text-[hsl(45,90%,60%)] mb-10">
              Grow with Plotray.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-[hsl(45,90%,45%)] to-[hsl(45,80%,55%)] text-[hsl(220,70%,15%)] hover:from-[hsl(45,90%,50%)] hover:to-[hsl(45,80%,60%)] font-semibold shadow-lg shadow-[hsl(45,90%,45%)]/25 px-8" asChild>
                <Link to="/contact">
                  Partner With Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8">
                Download Investor Deck
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default BusinessModel;