import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Leaf, 
  Recycle, 
  Users, 
  TreePine,
  ArrowRight,
  CheckCircle,
  Globe,
  Building
} from "lucide-react";

const practices = [
  { icon: TreePine, title: "Eco-Friendly Planning", desc: "Projects designed with environmental considerations in mind." },
  { icon: Recycle, title: "Sustainable Growth", desc: "Balanced urban expansion that preserves natural resources." },
  { icon: Users, title: "Community Focus", desc: "Development that benefits local communities and ecosystems." },
  { icon: Building, title: "Green Infrastructure", desc: "Promoting sustainable building practices in our projects." },
];

const commitments = [
  "Green spaces preserved in all project layouts",
  "Water conservation measures implemented",
  "Support for local biodiversity",
  "Eco-friendly construction guidelines",
  "Community welfare initiatives",
  "Transparent environmental reporting",
];

const Sustainability = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden gradient-success">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm mb-6">
              <Leaf className="w-4 h-4 text-plotray-gold" />
              <span className="text-sm font-medium text-primary-foreground">Our Commitment to the Planet</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
              Sustainable <span className="text-plotray-gold">Development</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Responsible land development practices that balance growth with environmental stewardship.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Our <span className="text-plotray-emerald">Approach</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                At Plotray, we believe in responsible land development that doesn't compromise 
                the environment. Our approach balances urban growth with ecological preservation.
              </p>
              <p className="text-muted-foreground mb-6">
                We work with partners who share our vision for sustainable development, 
                ensuring that every project meets environmental guidelines while delivering 
                value to investors.
              </p>
              
              <Button variant="teal" size="lg" asChild>
                <Link to="/projects">
                  Explore Sustainable Projects
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            
            <div className="glass-card rounded-2xl p-8 bg-gradient-to-br from-plotray-emerald/10 to-plotray-teal/10">
              <Globe className="w-16 h-16 text-plotray-emerald mx-auto mb-6" />
              <h3 className="text-2xl font-heading font-bold text-foreground text-center mb-4">
                Environmental Impact
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between p-3 bg-background rounded-lg">
                  <span className="text-muted-foreground">Green Spaces Preserved</span>
                  <span className="font-semibold text-plotray-emerald">30%+</span>
                </div>
                <div className="flex justify-between p-3 bg-background rounded-lg">
                  <span className="text-muted-foreground">Water Conservation</span>
                  <span className="font-semibold text-plotray-emerald">40%</span>
                </div>
                <div className="flex justify-between p-3 bg-background rounded-lg">
                  <span className="text-muted-foreground">Carbon Neutral Goal</span>
                  <span className="font-semibold text-plotray-emerald">2030</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practices */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Sustainable <span className="text-plotray-emerald">Practices</span>
            </h2>
            <p className="text-muted-foreground">
              Our commitment to environmental responsibility in every project.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {practices.map((practice, index) => (
              <div key={index} className="text-center p-6 glass-card rounded-2xl hover-lift">
                <div className="w-16 h-16 rounded-2xl gradient-success flex items-center justify-center mx-auto mb-4">
                  <practice.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{practice.title}</h3>
                <p className="text-sm text-muted-foreground">{practice.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-6">Our Commitments</h3>
              <div className="space-y-4">
                {commitments.map((commitment, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-plotray-emerald flex-shrink-0" />
                    <span className="text-foreground">{commitment}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Building a <span className="text-plotray-emerald">Greener Future</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Every project we undertake is evaluated for its environmental impact. 
                We work to minimize disruption to local ecosystems while creating 
                valuable investment opportunities.
              </p>
              <p className="text-muted-foreground mb-6">
                Our sustainability initiatives extend beyond individual projects to 
                include community education, partnership with environmental organizations, 
                and advocacy for responsible development practices.
              </p>
              
              <Button variant="teal" size="lg" asChild>
                <Link to="/contact">
                  Partner With Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sustainability;
