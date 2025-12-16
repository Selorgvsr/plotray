import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Upload, 
  CheckCircle, 
  TrendingUp, 
  Users,
  ArrowRight,
  Shield,
  Clock,
  BarChart3
} from "lucide-react";

const steps = [
  { icon: Upload, title: "Upload Details", desc: "Submit basic land details and location information." },
  { icon: CheckCircle, title: "Verification", desc: "Our team verifies listings for accuracy." },
  { icon: TrendingUp, title: "Go Live", desc: "Once approved, your land goes live instantly." },
];

const benefits = [
  { icon: Users, title: "Genuine Buyers", desc: "Connect with verified investors actively seeking properties." },
  { icon: Shield, title: "Transparent Process", desc: "Clear land details reduce unnecessary negotiations." },
  { icon: BarChart3, title: "Market Valuation", desc: "Get accurate pricing based on market trends." },
  { icon: Clock, title: "Fast Listing", desc: "Your property goes live within 24 hours of approval." },
];

const Sell = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(30 85% 55%) 0%, hsl(45 93% 47%) 100%)" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-accent-foreground leading-tight mb-6 animate-slide-up">
              Sell Your Land
              <br />
              <span className="text-primary">Faster</span>
            </h1>
            <p className="text-lg md:text-xl text-accent-foreground/80 mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Plotray helps landowners reach genuine buyers efficiently. Your land is showcased 
              to users actively seeking city-adjacent properties with quality visibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="default" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Upload className="w-5 h-5" />
                List Your Property
              </Button>
              <Button variant="outline" size="lg" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Listing Process */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Simple Listing <span className="text-plotray-teal">Process</span>
            </h2>
            <p className="text-muted-foreground">
              Listing your land is quick and hassle-free. A streamlined process saves time and effort.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl gradient-cta flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <span className="text-4xl font-heading font-bold text-muted">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 right-0 w-1/3 h-0.5 bg-gradient-to-r from-plotray-orange to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get the Right Valuation */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Get the Right <span className="text-plotray-emerald">Valuation</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Accurate pricing is key to faster sales. Plotray offers market-based valuation insights 
                by analyzing nearby developments and demand trends.
              </p>
              
              <div className="space-y-4 mb-8">
                {["Market-based valuation insights", "Analysis of nearby developments", "Demand trend evaluation", "Competitive pricing suggestions"].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-plotray-emerald flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="teal" size="lg">
                Get Free Valuation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="glass-card rounded-2xl p-8 bg-gradient-to-br from-plotray-emerald/10 to-plotray-teal/10">
              <div className="text-center">
                <BarChart3 className="w-16 h-16 text-plotray-emerald mx-auto mb-4" />
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">Market Analysis</h3>
                <p className="text-muted-foreground mb-6">Get a comprehensive valuation report for your property</p>
                <div className="space-y-3 text-left">
                  <div className="flex justify-between p-3 bg-background rounded-lg">
                    <span className="text-muted-foreground">Average Price/sq ft</span>
                    <span className="font-semibold text-foreground">₹2,500</span>
                  </div>
                  <div className="flex justify-between p-3 bg-background rounded-lg">
                    <span className="text-muted-foreground">YoY Growth</span>
                    <span className="font-semibold text-plotray-emerald">+18%</span>
                  </div>
                  <div className="flex justify-between p-3 bg-background rounded-lg">
                    <span className="text-muted-foreground">Demand Index</span>
                    <span className="font-semibold text-foreground">High</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sellers Trust Plotray */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Why Sellers Trust <span className="text-plotray-teal">Plotray</span>
            </h2>
            <p className="text-muted-foreground">
              Transparency is at the core of our platform. Professional presentation enhances credibility 
              and leads to smoother transactions.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 hover-lift">
                <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden gradient-cta p-8 md:p-12 lg:p-16 text-center">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent-foreground mb-4">
                List Your Land Now
              </h2>
              <p className="text-accent-foreground/80 mb-8">
                Urban land demand is growing rapidly. Listing with Plotray increases your reach 
                to buyers looking for verified properties.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Upload className="w-5 h-5" />
                  Start Listing
                </Button>
                <Button variant="outline" size="lg" asChild className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10">
                  <Link to="/contact">Talk to an Expert</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sell;
