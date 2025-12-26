import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Building2, LineChart, Leaf, Shield, Users, Sparkles } from "lucide-react";

// Import images
import aboutHero from "@/assets/about-hero-new.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import aboutVision from "@/assets/about-vision.jpg";
import aboutMission from "@/assets/about-mission.jpg";
import aboutDifferent from "@/assets/about-different.jpg";
import aboutAsset from "@/assets/about-asset.jpg";
import aboutEsg from "@/assets/about-esg.jpg";
import aboutTrust from "@/assets/about-trust.jpg";
import aboutJourney from "@/assets/about-journey.jpg";
import aboutCta from "@/assets/about-cta-new.jpg";
const differentiators = [{
  icon: Building2,
  text: "Direct land buying without brokers"
}, {
  icon: LineChart,
  text: "Asset-focused evaluation, not short-term pricing"
}, {
  icon: Leaf,
  text: "ESG-aligned sustainable development"
}, {
  icon: Sparkles,
  text: "Technology-driven insights and tracking"
}, {
  icon: Shield,
  text: "Professional, transparent execution"
}];
const About = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${aboutHero})`
      }} />
        <div className="absolute inset-0 bg-gradient-to-br from-plotray-blue/90 via-plotray-blue/70 to-teal/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(45,212,191,0.2),transparent_50%)]" />
        
        <div className="container-custom relative z-10 text-center pt-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 animate-fade-in leading-tight">
            Redefining Land Ownership,<br />
            <span className="text-gold">Growth & Opportunity</span>
          </h1>
          <p style={{
          animationDelay: '0.2s'
        }} className="text-lg max-w-2xl mx-auto animate-fade-in font-serif text-primary-foreground md:text-2xl">
            Wake up to 3X portfolio growth, financial freedom, and generational wealth from your <span className="text-[#166534] font-bold">PLOT</span><span className="text-[#C2410C] font-bold">RAY</span> land.
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Section 2: Who We Are */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Who <span className="text-[hsl(220,60%,40%)]">We Are</span>
              </h2>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-plotray-gold mt-1 shrink-0" />
                  <span><span className="text-[#166534] font-semibold">PLOT</span><span className="text-[#C2410C] font-semibold">RAY</span> is a modern land-focused real estate Company</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-plotray-gold mt-1 shrink-0" />
                  <span>We specialize in buying, managing, and developing land assets</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-plotray-gold mt-1 shrink-0" />
                  <span>Our approach combines market intelligence with transparency</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-plotray-gold mt-1 shrink-0" />
                  <span>We work directly with landowners and investors</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-plotray-gold mt-1 shrink-0" />
                  <span>Every decision is driven by long-term value creation</span>
                </p>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={aboutTeam} alt="PLOTRAY Team" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Vision */}
      <section className="section-padding bg-[hsl(220,60%,97%)]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-2xl">
              <img src={aboutVision} alt="Our Vision" className="w-full h-auto object-cover" />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Our Vision for the <span className="text-plotray-gold">Future</span> of Land
              </h2>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[hsl(220,60%,40%)] mt-1 shrink-0" />
                  <span>We envision land as a powerful long-term asset</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[hsl(220,60%,40%)] mt-1 shrink-0" />
                  <span>Our goal is to create organized, valuable land ecosystems</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[hsl(220,60%,40%)] mt-1 shrink-0" />
                  <span>We focus on sustainable growth over speculation</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[hsl(220,60%,40%)] mt-1 shrink-0" />
                  <span>Future-ready planning guides every acquisition</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[hsl(220,60%,40%)] mt-1 shrink-0" />
                  <span><span className="text-[#166534] font-semibold">PLOT</span><span className="text-[#C2410C] font-semibold">RAY</span> builds land value responsibly</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Our Mission */}
      <section className="section-padding bg-[hsl(220,60%,15%)]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                Our <span className="text-plotray-gold">Mission</span>
              </h2>
              <div className="space-y-3 text-white/80">
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-plotray-gold mt-1 shrink-0" />
                  <span>To simplify land transactions for owners</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-plotray-gold mt-1 shrink-0" />
                  <span>To create strong land assets for investors</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-plotray-gold mt-1 shrink-0" />
                  <span>To remove middlemen and inefficiencies</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-plotray-gold mt-1 shrink-0" />
                  <span>To ensure transparency and legal clarity</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-plotray-gold mt-1 shrink-0" />
                  <span>To build trust through responsible development</span>
                </p>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img alt="Our Mission" className="w-full h-auto object-cover" src="/lovable-uploads/697a371b-38a2-4e15-9390-368fa4ee6ef5.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: What Makes PLOTRAY Different */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-2xl">
              <img src={aboutDifferent} alt="What Makes PLOTRAY Different" className="w-full h-auto object-cover" />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                What Makes <span className="text-orange-500">PLOT</span><span className="text-[#C2410C]">RAY</span> <span className="text-plotray-gold">Different</span>
              </h2>
              <div className="space-y-4">
                {differentiators.map((item, index) => <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-[hsl(220,60%,97%)] hover:bg-[hsl(220,60%,95%)] transition-colors" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(220,60%,40%)] to-[hsl(220,60%,25%)] flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Land as Asset Philosophy */}
      <section className="section-padding bg-[hsl(220,60%,97%)]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                We Treat Land as a <span className="text-[hsl(220,60%,40%)]">Long-Term Asset</span>
              </h2>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-plotray-emerald mt-1 shrink-0" />
                  <span>Land appreciates with urban expansion</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-plotray-emerald mt-1 shrink-0" />
                  <span>Scarcity increases its future value</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-plotray-emerald mt-1 shrink-0" />
                  <span>Unlike buildings, land never depreciates</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-plotray-emerald mt-1 shrink-0" />
                  <span>Strategic locations drive wealth creation</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-plotray-emerald mt-1 shrink-0" />
                  <span><span className="text-[#166534] font-semibold">PLOT</span><span className="text-[#C2410C] font-semibold">RAY</span> unlocks land's true potential</span>
                </p>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={aboutAsset} alt="Land as Asset" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Sustainability & ESG */}
      <section className="section-padding bg-gradient-to-br from-plotray-emerald/10 to-plotray-teal/10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-2xl">
              <img src={aboutEsg} alt="Sustainability & ESG" className="w-full h-auto object-cover" />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Built on <span className="text-plotray-emerald">Sustainability</span> & ESG Values
              </h2>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-plotray-emerald mt-1 shrink-0" />
                  <span>We prioritize eco-friendly land planning</span>
                </p>
                <p className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-plotray-emerald mt-1 shrink-0" />
                  <span>Solar-ready and green infrastructure layouts</span>
                </p>
                <p className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-plotray-emerald mt-1 shrink-0" />
                  <span>Responsible water and resource management</span>
                </p>
                <p className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-plotray-emerald mt-1 shrink-0" />
                  <span>Community-centric development approach</span>
                </p>
                <p className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-plotray-emerald mt-1 shrink-0" />
                  <span>Governance ensures compliance and trust</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Trusted Partner */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                A Trusted Partner for <span className="text-plotray-gold">Landowners</span> & Investors
              </h2>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-plotray-gold mt-1 shrink-0" />
                  <span>Landowners trust us for fair, direct deals</span>
                </p>
                <p className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-plotray-gold mt-1 shrink-0" />
                  <span>Investors rely on our asset evaluation</span>
                </p>
                <p className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-plotray-gold mt-1 shrink-0" />
                  <span>Clear documentation ensures peace of mind</span>
                </p>
                <p className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-plotray-gold mt-1 shrink-0" />
                  <span>Professional teams manage every stage</span>
                </p>
                <p className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-plotray-gold mt-1 shrink-0" />
                  <span>Trust is the foundation of <span className="text-[#166534] font-semibold">PLOT</span><span className="text-[#C2410C] font-semibold">RAY</span></span>
                </p>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={aboutTrust} alt="Trusted Partner" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Our Journey */}
      <section className="section-padding bg-[hsl(220,60%,15%)]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-2xl">
              <img src={aboutJourney} alt="Our Journey" className="w-full h-auto object-cover" />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                Building the <span className="text-plotray-gold">Future</span> of Land Investment
              </h2>
              <div className="space-y-3 text-white/80">
                <p className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-plotray-gold mt-1 shrink-0" />
                  <span><span className="text-[#166534] font-semibold">PLOT</span><span className="text-[#C2410C] font-semibold">RAY</span> continues expanding strategic land assets</span>
                </p>
                <p className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-plotray-gold mt-1 shrink-0" />
                  <span>We focus on growth corridors and emerging cities</span>
                </p>
                <p className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-plotray-gold mt-1 shrink-0" />
                  <span>Innovation drives smarter land decisions</span>
                </p>
                <p className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-plotray-gold mt-1 shrink-0" />
                  <span>Sustainability guides long-term planning</span>
                </p>
                <p className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-plotray-gold mt-1 shrink-0" />
                  <span>The journey is just beginning</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutCta} alt="Join PLOTRAY" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,60%,15%)]/90 to-[hsl(220,60%,20%)]/80" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              Be a Part of the <span className="inline-flex"><span style={{
                color: '#166534'
              }}>PLOT</span><span style={{
                color: '#C2410C'
              }}>RAY</span></span> Growth Story
            </h2>
            <div className="space-y-3 text-white/80 mb-8">
              <p className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-plotray-gold mt-1 shrink-0" />
                <span>Whether selling land or building assets, we help</span>
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-plotray-gold mt-1 shrink-0" />
                <span>Join a platform built on trust and intelligence</span>
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-plotray-gold mt-1 shrink-0" />
                <span>Create value with responsible land ownership</span>
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-plotray-gold mt-1 shrink-0" />
                <span>Experience transparency and professionalism</span>
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-plotray-gold mt-1 shrink-0" />
                <span>Welcome to the future of land</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-plotray-gold to-[hsl(38,85%,55%)] text-[hsl(220,60%,15%)] font-bold hover:from-[hsl(38,85%,55%)] hover:to-plotray-gold transition-all duration-300" asChild>
                <Link to="/buy">
                  Explore Land Assets
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default About;