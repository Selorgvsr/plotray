import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingBag, TrendingUp, Shield, Map, BarChart3, Route, Grid3X3, Lock, Users, ArrowRight, CheckCircle } from "lucide-react";

// Import all section images
import heroImage from "@/assets/buy-hero.jpg";
import mallImage from "@/assets/buy-mall.jpg";
import urbanZoneImage from "@/assets/buy-urban-zone.jpg";
import verifiedImage from "@/assets/buy-verified.jpg";
import mapImage from "@/assets/buy-map.jpg";
import appreciationImage from "@/assets/buy-appreciation.jpg";
import connectivityImage from "@/assets/buy-connectivity.jpg";
import layoutImage from "@/assets/buy-layout.jpg";
import gatedImage from "@/assets/buy-gated.jpg";
import siteVisitImage from "@/assets/buy-sitevisit.jpg";
import ctaImage from "@/assets/buy-cta.jpg";
const Buy = () => {
  return <Layout>
      {/* Section 1: Hero - Only Heading */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${heroImage})`
      }} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-teal/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
        
        {/* Animated city glow effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gold/20 to-transparent animate-pulse" />
        
        <div className="relative z-10 text-center px-4">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-2xl animate-fade-in">
            Buy Land Where Cities Are Expanding
          </h1>
        </div>
      </section>

      {/* Section 2: Prime Land Near Malls */}
      <section className="py-20 bg-sky-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-8">
                Prime Land Near Malls & Commercial Centers
              </h2>
              <div className="bg-white rounded-2xl p-8 border-2 border-gold/30 shadow-xl">
                <ul className="space-y-4 text-lg text-foreground/80">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald shrink-0 mt-1" />
                    <span>Land near malls and commercial hubs attracts continuous demand.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald shrink-0 mt-1" />
                    <span>These locations benefit from strong footfall and retail growth.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald shrink-0 mt-1" />
                    <span>Plotray focuses on land with high commercial influence.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald shrink-0 mt-1" />
                    <span>Such areas offer better resale and rental potential.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald shrink-0 mt-1" />
                    <span>Proximity to commerce drives long-term value.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <img src={mallImage} alt="Mall with surrounding land plots" className="rounded-2xl shadow-2xl w-full" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: High-Growth Urban Investment Zones */}
      <section className="py-20 bg-gradient-to-br from-teal to-emerald text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img src={urbanZoneImage} alt="Urban development zone" className="rounded-2xl shadow-2xl w-full" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-white/20 rounded-full blur-3xl" />
            </div>
            <div className="order-1 lg:order-2 animate-fade-in">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-card-foreground">
                High-Growth Urban Investment Zones
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 shrink-0 mt-1" />
                  <span>Plotray identifies locations before major price appreciation.</span>
                </p>
                <p className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 shrink-0 mt-1" />
                  <span>Infrastructure expansion fuels rapid growth.</span>
                </p>
                <p className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 shrink-0 mt-1" />
                  <span>Early-stage urban zones offer higher ROI.</span>
                </p>
                <p className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 shrink-0 mt-1" />
                  <span>Strategic city planning increases demand.</span>
                </p>
                <p className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 shrink-0 mt-1" />
                  <span>Invest ahead of the curve.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Verified & Transparent */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-8">
                Verified Land with Complete Transparency
              </h2>
              <div className="space-y-4 text-lg text-foreground/80">
                <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-xl">
                  <Shield className="w-8 h-8 text-primary shrink-0" />
                  <span>All Plotray listings are carefully verified.</span>
                </div>
                <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-xl">
                  <Shield className="w-8 h-8 text-primary shrink-0" />
                  <span>Clear documentation reduces buyer risk.</span>
                </div>
                <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-xl">
                  <Shield className="w-8 h-8 text-primary shrink-0" />
                  <span>Location and access details are transparent.</span>
                </div>
                <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-xl">
                  <Shield className="w-8 h-8 text-primary shrink-0" />
                  <span>Buyers know exactly what they are investing in.</span>
                </div>
                <div className="flex items-start gap-4 p-4 bg-emerald/10 rounded-xl border border-emerald/30">
                  <Shield className="w-8 h-8 text-emerald shrink-0" />
                  <span className="font-semibold text-emerald">Trust begins with clarity.</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img alt="Verified listings dashboard" className="rounded-2xl shadow-2xl w-full" src="/lovable-uploads/ad6711f3-56ad-4f81-a739-e76a174e32b3.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Smart Search & Maps */}
      <section className="py-20 bg-teal/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img src={mapImage} alt="Interactive map interface" className="rounded-2xl shadow-2xl w-full" />
            </div>
            <div className="order-1 lg:order-2 animate-fade-in">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-8">
                Smart Search with Interactive Map View
              </h2>
              <div className="bg-white rounded-2xl p-8 shadow-xl space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal/20 rounded-full flex items-center justify-center">
                    <Map className="w-6 h-6 text-teal" />
                  </div>
                  <span className="text-lg">Advanced filters simplify land discovery.</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal/20 rounded-full flex items-center justify-center">
                    <Map className="w-6 h-6 text-teal" />
                  </div>
                  <span className="text-lg">Maps show exact plot locations.</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal/20 rounded-full flex items-center justify-center">
                    <Map className="w-6 h-6 text-teal" />
                  </div>
                  <span className="text-lg">View nearby landmarks instantly.</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal/20 rounded-full flex items-center justify-center">
                    <Map className="w-6 h-6 text-teal" />
                  </div>
                  <span className="text-lg">Compare multiple plots visually.</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald/20 rounded-full flex items-center justify-center">
                    <Map className="w-6 h-6 text-emerald" />
                  </div>
                  <span className="text-lg font-semibold text-emerald">Smarter tools enable better decisions.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Land as High-Appreciating Asset */}
      <section className="py-20 bg-gradient-to-br from-gold/20 via-gold/10 to-orange/10 bg-emerald-200">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-8">
                Land is a High-Appreciating Asset by Location Advantage
              </h2>
              <div className="space-y-4 text-lg text-foreground/80">
                <p className="flex items-start gap-3">
                  <BarChart3 className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <span>Land consistently appreciates over time.</span>
                </p>
                <p className="flex items-start gap-3">
                  <BarChart3 className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <span>Location determines growth potential.</span>
                </p>
                <p className="flex items-start gap-3">
                  <BarChart3 className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <span>City-adjacent land outperforms most assets.</span>
                </p>
                <p className="flex items-start gap-3">
                  <BarChart3 className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <span>Unlike buildings, land does not depreciate.</span>
                </p>
                <p className="flex items-start gap-3 font-semibold text-primary">
                  <BarChart3 className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <span>A stable path to wealth creation.</span>
                </p>
              </div>
            </div>
            <div className="relative">
              <img src={appreciationImage} alt="Land appreciation visualization" className="rounded-2xl shadow-2xl w-full" />
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-gold/30 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: External Infrastructure Connectivity */}
      <section className="py-20 bg-emerald text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img src={connectivityImage} alt="Infrastructure connectivity" className="rounded-2xl shadow-2xl w-full" />
            </div>
            <div className="order-1 lg:order-2 animate-fade-in">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-card-foreground">
                Excellent Connectivity Through Major Infrastructure
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p className="flex items-start gap-3">
                  <Route className="w-6 h-6 shrink-0 mt-1" />
                  <span>Road connectivity boosts accessibility.</span>
                </p>
                <p className="flex items-start gap-3">
                  <Route className="w-6 h-6 shrink-0 mt-1" />
                  <span>Airports support business expansion.</span>
                </p>
                <p className="flex items-start gap-3">
                  <Route className="w-6 h-6 shrink-0 mt-1" />
                  <span>Rail and metro increase demand.</span>
                </p>
                <p className="flex items-start gap-3">
                  <Route className="w-6 h-6 shrink-0 mt-1" />
                  <span>Infrastructure drives faster appreciation.</span>
                </p>
                <p className="flex items-start gap-3 font-semibold">
                  <Route className="w-6 h-6 shrink-0 mt-1" />
                  <span>Connectivity defines land success.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Internal Layout Infrastructure */}
      <section className="py-20 bg-purple-500">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-8">
                Well-Planned Layouts with Modern Infrastructure
              </h2>
              <div className="space-y-4 text-lg text-foreground/80">
                <div className="flex items-start gap-4 p-4 bg-emerald/5 rounded-xl border-l-4 border-emerald">
                  <Grid3X3 className="w-6 h-6 text-emerald shrink-0 mt-1" />
                  <span>Internal roads ensure smooth movement.</span>
                </div>
                <div className="flex items-start gap-4 p-4 bg-emerald/5 rounded-xl border-l-4 border-emerald">
                  <Grid3X3 className="w-6 h-6 text-emerald shrink-0 mt-1" />
                  <span>Electricity and water connections are planned.</span>
                </div>
                <div className="flex items-start gap-4 p-4 bg-emerald/5 rounded-xl border-l-4 border-emerald">
                  <Grid3X3 className="w-6 h-6 text-emerald shrink-0 mt-1" />
                  <span>Stormwater drainage supports sustainability.</span>
                </div>
                <div className="flex items-start gap-4 p-4 bg-emerald/5 rounded-xl border-l-4 border-emerald">
                  <Grid3X3 className="w-6 h-6 text-emerald shrink-0 mt-1" />
                  <span>Landscaping enhances value and appeal.</span>
                </div>
                <div className="flex items-start gap-4 p-4 bg-emerald/10 rounded-xl border-l-4 border-emerald">
                  <Grid3X3 className="w-6 h-6 text-emerald shrink-0 mt-1" />
                  <span className="font-semibold">Infrastructure strengthens investment quality.</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={layoutImage} alt="Community layout plan" className="rounded-2xl shadow-2xl w-full bg-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Gated Communities & Security */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img alt="Gated community entrance" className="rounded-2xl shadow-2xl w-full" src="/lovable-uploads/75069692-4b85-4e68-a094-bb54435cd167.jpg" />
              <div className="absolute top-4 left-4 bg-gold text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                Premium Living
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-fade-in">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-8">
                Secure Gated Communities with Modern Living
              </h2>
              <div className="space-y-4 text-lg text-foreground/80">
                <p className="flex items-start gap-3">
                  <Lock className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <span>Gated layouts improve safety.</span>
                </p>
                <p className="flex items-start gap-3">
                  <Lock className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <span>Controlled access attracts premium buyers.</span>
                </p>
                <p className="flex items-start gap-3">
                  <Lock className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <span>Organized communities boost demand.</span>
                </p>
                <p className="flex items-start gap-3">
                  <Lock className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <span>Security adds long-term value.</span>
                </p>
                <p className="flex items-start gap-3 font-semibold text-primary">
                  <Lock className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <span>Future-ready land investments.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Free Site Visit */}
      <section className="py-20 bg-sky-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-8">
                Free Site Visit with Expert Guidance
              </h2>
              <div className="space-y-4 text-lg text-foreground/80 mb-8">
                <p className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span>Visit land before investing.</span>
                </p>
                <p className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span>Understand surroundings firsthand.</span>
                </p>
                <p className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span>Experts explain growth potential.</span>
                </p>
                <p className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span>No obligation, complete clarity.</span>
                </p>
                <p className="flex items-start gap-3 font-semibold text-primary">
                  <Users className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span>Confidence through experience.</span>
                </p>
              </div>
              <Button size="lg" variant="premium" asChild>
                <Link to="/contact">
                  Schedule Free Visit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img src={siteVisitImage} alt="Expert guiding site visit" className="rounded-2xl shadow-2xl w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Final CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${ctaImage})`
      }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-teal/70" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8 animate-fade-in">
            Choose Land That Grows with the City
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-xl text-white/90 mb-10">
            <p>Infrastructure-backed land delivers returns.</p>
            <p>Plotray curates future-ready locations.</p>
            <p>Make informed, confident investments.</p>
            <p className="font-semibold text-gold">Your asset starts here.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="premium" className="text-lg px-8" asChild>
              <Link to="/projects">
                <ShoppingBag className="mr-2 w-5 h-5" />
                Explore Projects
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Buy;