import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  DollarSign, 
  Briefcase, 
  Users, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  PieChart,
  Handshake
} from "lucide-react";

const revenueStreams = [
  { icon: DollarSign, title: "Listing Fees", desc: "Premium listing services for property owners and developers.", percentage: "35%" },
  { icon: Briefcase, title: "Project Partnerships", desc: "Revenue share from curated land development projects.", percentage: "40%" },
  { icon: Users, title: "Advisory Services", desc: "Expert consultation and investment guidance services.", percentage: "15%" },
  { icon: Handshake, title: "Transaction Fees", desc: "Success-based fees on completed transactions.", percentage: "10%" },
];

const partnerBenefits = [
  "Access to verified buyer network",
  "Marketing and visibility support",
  "Transaction management tools",
  "Market insights and analytics",
  "Dedicated partnership manager",
  "Flexible revenue sharing models",
];

const BusinessModel = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
              Business <span className="text-plotray-gold">Revenue Model</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Clear platform-driven revenue structure built on strong partnerships 
              and scalable growth opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Revenue Streams */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Revenue <span className="text-plotray-teal">Streams</span>
            </h2>
            <p className="text-muted-foreground">
              Diversified revenue sources ensure sustainable growth and value creation.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {revenueStreams.map((stream, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 hover-lift">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center">
                    <stream.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-2xl font-heading font-bold text-plotray-teal">{stream.percentage}</span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{stream.title}</h3>
                <p className="text-sm text-muted-foreground">{stream.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Breakdown */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-6 flex items-center gap-2">
                <PieChart className="w-6 h-6 text-plotray-teal" />
                Revenue Distribution
              </h3>
              
              <div className="space-y-4">
                {revenueStreams.map((stream, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-foreground">{stream.title}</span>
                      <span className="text-sm font-semibold text-foreground">{stream.percentage}</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 ${
                          index === 0 ? "bg-plotray-teal" :
                          index === 1 ? "bg-plotray-emerald" :
                          index === 2 ? "bg-plotray-orange" :
                          "bg-plotray-purple"
                        }`}
                        style={{ width: stream.percentage }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Scalable & <span className="text-plotray-teal">Transparent</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Our business model is designed for sustainable growth. We focus on 
                creating value for all stakeholders - investors, property owners, 
                and development partners.
              </p>
              <p className="text-muted-foreground mb-6">
                Revenue is generated through platform services rather than speculative 
                trading, ensuring aligned interests with our users.
              </p>
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-plotray-teal/10 border border-plotray-teal/20">
                <TrendingUp className="w-8 h-8 text-plotray-teal flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">45% YoY Growth</div>
                  <div className="text-sm text-muted-foreground">Consistent revenue growth since 2020</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Partner <span className="text-plotray-teal">Ecosystem</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Our strong partner ecosystem drives mutual growth. We work with 
                developers, landowners, and financial institutions to create 
                comprehensive investment solutions.
              </p>
              
              <div className="space-y-4 mb-8">
                {partnerBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-plotray-teal flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="teal" size="lg" asChild>
                <Link to="/contact">
                  Become a Partner
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="text-4xl font-heading font-bold text-plotray-teal mb-2">100+</div>
                <p className="text-muted-foreground text-sm">Active Partners</p>
              </div>
              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="text-4xl font-heading font-bold text-plotray-orange mb-2">50+</div>
                <p className="text-muted-foreground text-sm">Developer Partnerships</p>
              </div>
              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="text-4xl font-heading font-bold text-plotray-emerald mb-2">25+</div>
                <p className="text-muted-foreground text-sm">Financial Partners</p>
              </div>
              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="text-4xl font-heading font-bold text-plotray-purple mb-2">500+</div>
                <p className="text-muted-foreground text-sm">Property Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden gradient-hero p-8 md:p-12 text-center">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                Explore Partnership Opportunities
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Join our growing ecosystem and benefit from Plotray's market reach 
                and technology platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Partner With Us
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="lg">
                  Download Investor Deck
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BusinessModel;
