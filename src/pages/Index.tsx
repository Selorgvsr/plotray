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
import kilambakkamBanner from "@/assets/kilambakkam-villa-banner.jpg";
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
          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 leading-tight">
              We support '<span className="text-gold bg-gold/20 px-2 py-1 rounded">Financial Peace</span>' on Land Investment
            </h1>
            
            <div className="max-w-5xl mx-auto space-y-5 text-left md:text-center">
              <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-emerald-300 flex items-center justify-center gap-3">
                <CheckCircle className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0" />
                Our Plots in Prime Locations
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-sky-300 flex items-center justify-center gap-3">
                <CheckCircle className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0" />
                Clear Legal Title
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-orange-300 flex items-center justify-center gap-3">
                <CheckCircle className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0" />
                Statutory Approval from Government
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-pink-300 flex items-center justify-center gap-3">
                <CheckCircle className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0" />
                Investment in our Prime Land is always Appreciating
              </p>
            </div>
          </div>
          
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
            <Button variant="outline" size="lg" className="bg-plotray-blue/80 border-white/30 text-white hover:bg-plotray-blue/90 text-lg px-8">
              Sell Land to <span className="inline-flex"><span className="text-[#166534] font-bold">PLOT</span><span className="text-[#C2410C] font-bold">RAY</span></span>
            </Button>
            </Link>
          </div>
        </div>
        
        {/* Animated glow effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Ad Banner Card Sliding Section */}
      <section className="relative w-full py-12 md:py-16 bg-gradient-to-br from-muted/50 via-background to-muted/30 overflow-hidden">
        <div className="container-custom">
          <div className="relative">
            {/* Animated Sliding Banner Card */}
            <div className="animate-[slideInFromRight_1s_ease-out_forwards] opacity-0" style={{
            animationFillMode: 'forwards'
          }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group cursor-pointer transform hover:scale-[1.02]">
                {/* Banner Image */}
                <div className="relative aspect-[21/9] md:aspect-[3/1]">
                  <img src={kilambakkamBanner} alt="Book Your Villa Plot in Kilambakkam - Near to Kilambakkam Bus Terminus" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                
                {/* Card Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12">
                  <div className="max-w-xl">
                    <span className="inline-block px-3 py-1 bg-gold/90 text-plotray-blue text-xs md:text-sm font-semibold rounded-full mb-4 animate-pulse text-[#166434] bg-lime-400">
                      Featured Project
                    </span>
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-3 leading-tight">
                      Villa Plots in Kilambakkam
                    </h3>
                    <p className="text-white/80 text-sm md:text-lg mb-6 max-w-md">Premium plots near Kilambakkam Bus Terminus Excellent connectivity & appreciation potential</p>
                    <Link to="/contact">
                      <Button size="lg" className="bg-[#f97316] hover:bg-[#f97316]/90 text-[#ffffff] font-bold text-base md:text-lg px-6 md:px-10 py-3 md:py-6 shadow-2xl hover:shadow-[#f97316]/40 transition-all duration-300 hover:scale-105">
                        Book Now
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 border-2 border-gold/30 rounded-full animate-ping opacity-20" />
                <div className="absolute bottom-4 right-8 w-12 h-12 bg-gold/20 rounded-full blur-xl" />
              </div>
            </div>
          </div>
        </div>
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
                  Land consistently grows in value over time
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-plotray-indigo flex-shrink-0 mt-1" />
                  Location drives appreciation more than any other factor
                </p>
                <p className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  Unlike buildings, land does not depreciate
                </p>
                <p className="flex items-start gap-3">
                  <BarChart3 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  Urban expansion fuels long-term returns
                </p>
                <p className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  Smart investors choose land for stability and growth
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
                <p><span className="text-[#166534] font-semibold">PLOT</span><span className="text-[#C2410C] font-semibold">RAY</span> curates land near malls, highways, and business hubs</p>
                <p>City-adjacent locations ensure strong future demand</p>
                <p>Infrastructure-backed land delivers higher ROI</p>
                <p>Verified listings reduce investment risk</p>
                <p className="font-semibold text-white">Buy where growth is guaranteed</p>
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

      {/* Section 4: Sell Your Land Directly to PLOTRAY */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                Sell Your Land <span className="text-orange-500">Directly</span> to <span className="text-[#166534]">PLOT</span><span className="text-[#C2410C]">RAY</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p className="flex items-start gap-3">
                  <Handshake className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  We buy land directly from owners
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  No brokers, no middlemen, no confusion
                </p>
                <p className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  Fair market-based pricing
                </p>
                <p className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  Fast decision-making and a clear process
                </p>
                <p className="font-semibold text-foreground">Sell with confidence and clarity</p>
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
              <img alt="Land connected to infrastructure" className="rounded-2xl shadow-2xl" src="/lovable-uploads/5159954e-3411-468a-9b8f-2611fd1480c0.jpg" />
            </div>
            <div className="order-1 lg:order-2 text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-card-foreground">
                Strong Infrastructure <span className="text-green-500">Strong Returns</span>
              </h2>
              <div className="space-y-4 text-lg text-popover-foreground">
                <p className="flex items-start gap-3">
                  <Route className="w-6 h-6 flex-shrink-0 mt-1 text-green-500" />
                  Road connectivity boosts accessibility
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1 text-green-500" />
                  Airport and rail access increase demand
                </p>
                <p className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 flex-shrink-0 mt-1 text-green-500" />
                  Metro expansion fuels appreciation
                </p>
                <p className="flex items-start gap-3">
                  <BarChart3 className="w-6 h-6 flex-shrink-0 mt-1 text-green-500" />
                  Infrastructure-backed land grows faster
                </p>
                <p className="font-semibold">Connectivity defines success</p>
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">We Arrange Site Visits​<span className="text-sky-600">​</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>We arrange site visits for serious buyers</p>
                <p>Understand location and surroundings firsthand</p>
                <p>Expert guidance on growth potential</p>
                <p>No pressure, complete transparency</p>
                <p className="font-semibold text-foreground">Invest with clarity</p>
              </div>
              <Link to="/contact">
                <Button size="lg" className="mt-8 bg-sky-600 hover:bg-sky-700 text-white">
                  Book Site Visit
                  <Users className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div>
              <img alt="Expert guiding investors" className="rounded-2xl shadow-2xl" src="/lovable-uploads/f36cdbc6-7b3e-4bec-ac5d-1a6f61f7293a.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Sustainable Growth */}
      <section className="py-20 bg-gradient-to-br from-emerald/10 via-emerald/5 to-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img alt="Green urban development" className="rounded-2xl shadow-2xl" src="/lovable-uploads/31398182-9b4b-405b-9322-999e14f38c20.jpg" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                Sustainable Land for <span className="text-emerald">Future Cities</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p className="flex items-start gap-3">
                  <Leaf className="w-6 h-6 text-emerald flex-shrink-0 mt-1" />
                  Eco-friendly layout planning
                </p>
                <p className="flex items-start gap-3">
                  <Droplets className="w-6 h-6 text-emerald flex-shrink-0 mt-1" />
                  Stormwater and green spaces included
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald flex-shrink-0 mt-1" />
                  Responsible urban expansion
                </p>
                <p className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-emerald flex-shrink-0 mt-1" />
                  Community-focused development
                </p>
                <p className="font-semibold text-foreground">Growth that respects the future</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Trusted Platform */}
      <section className="py-20 bg-plotray-blue bg-plotray-orange">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                Trusted by <span className="text-gold">Smart Investors</span>
              </h2>
              <div className="space-y-4 text-white/80 text-lg">
                <p className="flex items-start gap-3">
                  <BarChart3 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  Market insights backed by data
                </p>
                <p className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  Verified land opportunities
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  Transparent processes
                </p>
                <p className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  Long-term value focus
                </p>
                
              </div>
              
              {/* Trust badges */}
              
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
              <img alt="Business dashboard" className="rounded-2xl shadow-2xl" src="/lovable-uploads/b16deb1c-1552-4c78-8314-8738e1eb80d7.jpg" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                A Scalable <span className="text-plotray-blue">Land Investment</span> Platform
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p className="flex items-start gap-3">
                  <ShoppingBag className="w-6 h-6 text-plotray-blue flex-shrink-0 mt-1" />
                  Direct land acquisition and resale
                </p>
                <p className="flex items-start gap-3">
                  <Handshake className="w-6 h-6 text-plotray-blue flex-shrink-0 mt-1" />
                  Project partnerships and advisory
                </p>
                <p className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-plotray-blue flex-shrink-0 mt-1" />
                  Technology-driven scalability
                </p>
                <p className="flex items-start gap-3">
                  <BarChart3 className="w-6 h-6 text-plotray-blue flex-shrink-0 mt-1" />
                  Sustainable revenue streams
                </p>
                <p className="font-semibold text-foreground">Designed for long-term growth</p>
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
          
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/buy">
              <Button variant="hero" size="lg" className="bg-gold hover:bg-gold/90 text-plotray-blue font-semibold text-lg px-8 animate-pulse">
                Explore Land Opportunities
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/sell">
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 text-lg px-8">
                Sell Your Land to <span className="inline-flex"><span className="text-[#166534] font-bold">PLOT</span><span className="text-[#C2410C] font-bold">RAY</span></span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Index;