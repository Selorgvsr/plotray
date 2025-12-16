import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, 
  Eye, 
  Heart, 
  Users,
  ArrowRight,
  CheckCircle,
  Award,
  TrendingUp
} from "lucide-react";

const values = [
  { icon: Heart, title: "Integrity", desc: "Transparency in every transaction we facilitate." },
  { icon: TrendingUp, title: "Growth", desc: "Growth-driven thinking for long-term value creation." },
  { icon: Users, title: "Customer First", desc: "Your success is our primary focus and motivation." },
  { icon: Award, title: "Excellence", desc: "Commitment to quality in everything we do." },
];

const milestones = [
  { year: "2020", title: "Founded", desc: "Plotray was established with a vision to transform land investments." },
  { year: "2021", title: "Expansion", desc: "Expanded operations to 10+ cities across India." },
  { year: "2022", title: "10,000 Users", desc: "Crossed 10,000 happy investors on our platform." },
  { year: "2023", title: "₹200Cr+ Transactions", desc: "Facilitated over ₹200 Crore in land transactions." },
];

const About = () => {
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
              About <span className="text-plotray-gold">Plotray</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Plotray is a digital platform focused on land investments near cities. 
              We connect people with high-potential land assets built on trust and transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Who We <span className="text-plotray-teal">Are</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Plotray is a digital platform focused on land investments near cities. 
                We connect people with high-potential land assets through a platform built on trust and transparency.
              </p>
              <p className="text-muted-foreground mb-6">
                Our team comprises experienced real estate professionals, technology experts, 
                and financial analysts who work together to identify the best land investment opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="teal" size="lg" asChild>
                  <Link to="/buy">Explore Properties</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="text-4xl font-heading font-bold text-plotray-teal mb-2">500+</div>
                <p className="text-muted-foreground text-sm">Properties Listed</p>
              </div>
              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="text-4xl font-heading font-bold text-plotray-orange mb-2">50+</div>
                <p className="text-muted-foreground text-sm">Cities Covered</p>
              </div>
              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="text-4xl font-heading font-bold text-plotray-emerald mb-2">10K+</div>
                <p className="text-muted-foreground text-sm">Happy Investors</p>
              </div>
              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="text-4xl font-heading font-bold text-plotray-purple mb-2">₹200Cr+</div>
                <p className="text-muted-foreground text-sm">Transactions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-4">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To simplify land buying and selling across India. Enable smarter investment decisions 
                through technology and data-driven insights. Create long-term value for every investor 
                who trusts Plotray.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl gradient-cta flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To become India's most trusted land investment platform by providing verified listings, 
                transparent processes, and expert guidance to help every investor make informed decisions 
                about their land investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our <span className="text-plotray-teal">Values</span>
            </h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do at Plotray.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 glass-card rounded-2xl hover-lift">
                <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our <span className="text-plotray-teal">Journey</span>
            </h2>
            <p className="text-muted-foreground">
              Key milestones in our growth story.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-heading font-bold text-plotray-teal/30 mb-2">{milestone.year}</div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{milestone.title}</h3>
                <p className="text-sm text-muted-foreground">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden gradient-hero p-8 md:p-12 text-center">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                Join Our Growing Community
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Be part of the Plotray family and start your land investment journey today.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/buy">
                  Get Started
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

export default About;
