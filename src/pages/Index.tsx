import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, ShoppingBag, Handshake, Route, Grid3X3, Users, Leaf, Shield, BarChart3, ArrowRight, Zap, Droplets, Lock, CheckCircle } from "lucide-react";

// Image imports
import homeHero from "@/assets/home-hero.jpg";
import homeAppreciation from "@/assets/home-appreciation.jpg";
import homeBuy from "@/assets/home-buy.jpg";
import homeSell from "@/assets/home-sell.jpg";
import homeInfrastructure from "@/assets/home-infrastructure.jpg";
import homeLayout from "@/assets/home-layout.jpg";
import homeSitevisit from "@/assets/home-sitevisit.jpg";
import homeSustainable from "@/assets/home-sustainable.jpg";
import homeInvestors from "@/assets/home-investors.jpg";
import homeBusiness from "@/assets/home-business.jpg";
import homeCta from "@/assets/home-cta.jpg";
const Index = () => {
  return <Layout>
      {/* Section 1: Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${homeHero})`
      }} />
        <div className="absolute inset-0 bg-gradient-to-br from-plotray-blue/90 via-plotray-blue/70 to-teal/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(45,212,191,0.2),transparent_50%)]" />
        
        <div className="container-custom relative z-10 text-center pt-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 animate-fade-in leading-tight">
            Where Smart Land Meets<br />
            <span className="text-gold">Future Cities</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <Link to="/buy">
              <Button variant="hero" size="lg" className="bg-gold hover:bg-gold/90 text-plotray-blue font-semibold text-lg px-8">
                Buy Land
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/sell">
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 text-lg px-8">
                Sell Land to Plotray
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Animated glow effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Section 2: Why Land is the Smartest Asset */}
      <section className="py-20 bg-gradient-to-br from-gold/20 via-gold/10 to-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                Land Is a <span className="text-gold">High-Appreciating</span> Asset
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  Land consistently grows in value over time.
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  Location drives appreciation more than any other factor.
                </p>
                <p className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  Unlike buildings, land does not depreciate.
                </p>
                <p className="flex items-start gap-3">
                  <BarChart3 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  Urban expansion fuels long-term returns.
                </p>
                <p className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  Smart investors choose land for stability and growth.
                </p>
              </div>
            </div>
            <div className="relative">
              <img src={homeAppreciation} alt="Land appreciation with city skyline" className="rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Buy Land Near Expanding Cities */}
      <section className="py-20 bg-gradient-to-br from-plotray-blue via-plotray-blue/90 to-teal/80 bg-popover-foreground">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img src={homeBuy} alt="Modern Indian city expanding" className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="order-1 lg:order-2 text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                Buy Land Where <span className="text-teal-300">Cities Are Growing</span>
              </h2>
              <div className="space-y-4 text-white/80 text-lg">
                <p>Plotray curates land near malls, highways, and business hubs.</p>
                <p>City-adjacent locations ensure strong future demand.</p>
                <p>Infrastructure-backed land delivers higher ROI.</p>
                <p>Verified listings reduce investment risk.</p>
                <p className="font-semibold text-white">Buy where growth is guaranteed.</p>
              </div>
              <Link to="/buy">
                <Button variant="hero" size="lg" className="mt-8">
                  Explore Land
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Sell Your Land Directly to Plotray */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                Sell Your Land <span className="text-orange-500">Directly</span> to Plotray
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p className="flex items-start gap-3">
                  <Handshake className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  We buy land directly from owners.
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  No brokers, no middlemen, no confusion.
                </p>
                <p className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  Fair market-based pricing.
                </p>
                <p className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  Fast decision-making and a clear process.
                </p>
                <p className="font-semibold text-foreground">Sell with confidence and clarity.</p>
              </div>
              <Link to="/sell">
                <Button size="lg" className="mt-8 bg-orange-500 hover:bg-orange-600 text-white">
                  Sell Your Land
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img src={homeSell} alt="Landowner shaking hands" className="rounded-2xl shadow-2xl" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-orange-500/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Infrastructure Drives Land Value */}
      <section className="py-20 bg-emerald">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img src={homeInfrastructure} alt="Land connected to infrastructure" className="rounded-2xl shadow-2xl" />
            </div>
            <div className="order-1 lg:order-2 text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-card-foreground">
                Strong Infrastructure = <span className="text-green-500">Strong Returns</span>
              </h2>
              <div className="space-y-4 text-lg text-popover-foreground">
                <p className="flex items-start gap-3">
                  <Route className="w-6 h-6 flex-shrink-0 mt-1 text-green-500" />
                  Road connectivity boosts accessibility.
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1 text-green-500" />
                  Airport and rail access increase demand.
                </p>
                <p className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 flex-shrink-0 mt-1 text-green-500" />
                  Metro expansion fuels appreciation.
                </p>
                <p className="flex items-start gap-3">
                  <BarChart3 className="w-6 h-6 flex-shrink-0 mt-1 text-green-500" />
                  Infrastructure-backed land grows faster.
                </p>
                <p className="font-semibold">Connectivity defines success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Modern Plotted Layouts */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Well-Planned Layouts with <span className="text-teal">Modern Amenities</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src={homeLayout} alt="Gated plotted community" className="rounded-2xl shadow-2xl" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[{
              icon: Route,
              title: "Internal Roads",
              desc: "Smooth access throughout"
            }, {
              icon: Zap,
              title: "Electricity",
              desc: "Pre-planned connections"
            }, {
              icon: Droplets,
              title: "Water & Drainage",
              desc: "Complete systems included"
            }, {
              icon: Leaf,
              title: "Landscaping",
              desc: "Enhanced living quality"
            }, {
              icon: Lock,
              title: "Security",
              desc: "Gated communities"
            }, {
              icon: Grid3X3,
              title: "Clear Layouts",
              desc: "Organized plots"
            }].map((item, idx) => <div key={idx} className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-border">
                  <item.icon className="w-8 h-8 text-teal mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Free Site Visit */}
      <section className="py-20 bg-sky-100">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                See the Land <span className="text-sky-600">Before You Invest</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>Free site visits for serious buyers.</p>
                <p>Understand location and surroundings firsthand.</p>
                <p>Expert guidance on growth potential.</p>
                <p>No pressure, complete transparency.</p>
                <p className="font-semibold text-foreground">Invest with clarity.</p>
              </div>
              <Link to="/contact">
                <Button size="lg" className="mt-8 bg-sky-600 hover:bg-sky-700 text-white">
                  Book Site Visit
                  <Users className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div>
              <img src={homeSitevisit} alt="Expert guiding investors" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Sustainable Growth */}
      <section className="py-20 bg-gradient-to-br from-emerald/10 via-emerald/5 to-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img src={homeSustainable} alt="Green urban development" className="rounded-2xl shadow-2xl" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                Sustainable Land for <span className="text-emerald">Future Cities</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p className="flex items-start gap-3">
                  <Leaf className="w-6 h-6 text-emerald flex-shrink-0 mt-1" />
                  Eco-friendly layout planning.
                </p>
                <p className="flex items-start gap-3">
                  <Droplets className="w-6 h-6 text-emerald flex-shrink-0 mt-1" />
                  Stormwater and green spaces included.
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald flex-shrink-0 mt-1" />
                  Responsible urban expansion.
                </p>
                <p className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-emerald flex-shrink-0 mt-1" />
                  Community-focused development.
                </p>
                <p className="font-semibold text-foreground">Growth that respects the future.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Trusted Platform */}
      <section className="py-20 bg-plotray-blue bg-red-800">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                Trusted by <span className="text-gold">Smart Investors</span>
              </h2>
              <div className="space-y-4 text-white/80 text-lg">
                <p className="flex items-start gap-3">
                  <BarChart3 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  Market insights backed by data.
                </p>
                <p className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  Verified land opportunities.
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  Transparent processes.
                </p>
                <p className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  Long-term value focus.
                </p>
                <p className="font-semibold text-white">Built for serious investors.</p>
              </div>
              
              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 mt-8">
                {["100+ Properties", "500+ Investors", "10+ Cities"].map((badge, idx) => <div key={idx} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-gold/30">
                    <span className="text-gold font-semibold">{badge}</span>
                  </div>)}
              </div>
            </div>
            <div>
              <img src={homeInvestors} alt="Professional investors analyzing data" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Business Model */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img src={homeBusiness} alt="Business dashboard" className="rounded-2xl shadow-2xl" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                A Scalable <span className="text-plotray-blue">Land Investment</span> Platform
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p className="flex items-start gap-3">
                  <ShoppingBag className="w-6 h-6 text-plotray-blue flex-shrink-0 mt-1" />
                  Direct land acquisition and resale.
                </p>
                <p className="flex items-start gap-3">
                  <Handshake className="w-6 h-6 text-plotray-blue flex-shrink-0 mt-1" />
                  Project partnerships and advisory.
                </p>
                <p className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-plotray-blue flex-shrink-0 mt-1" />
                  Technology-driven scalability.
                </p>
                <p className="flex items-start gap-3">
                  <BarChart3 className="w-6 h-6 text-plotray-blue flex-shrink-0 mt-1" />
                  Sustainable revenue streams.
                </p>
                <p className="font-semibold text-foreground">Designed for long-term growth.</p>
              </div>
              <Link to="/business-model">
                <Button variant="outline" size="lg" className="mt-8">
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Final CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${homeCta})`
      }} />
        <div className="absolute inset-0 bg-gradient-to-br from-plotray-blue/90 via-plotray-blue/80 to-teal/70" />
        
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Build Wealth with Land That<br />
            <span className="text-gold">Grows with Cities</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Infrastructure-backed land delivers returns. Plotray curates future-ready locations. 
            Make informed, confident investments. Your asset starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/buy">
              <Button variant="hero" size="lg" className="bg-gold hover:bg-gold/90 text-plotray-blue font-semibold text-lg px-8 animate-pulse">
                Explore Land Opportunities
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/sell">
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 text-lg px-8">
                Sell Your Land to Plotray
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Index;