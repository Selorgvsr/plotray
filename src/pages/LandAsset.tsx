import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ChevronDown, 
  TrendingUp, 
  BarChart3, 
  MapPin, 
  Shield, 
  Briefcase, 
  Lock,
  ArrowRight,
  Sparkles
} from "lucide-react";

// Image imports
import landassetHero from "@/assets/landasset-hero-new.jpg";
import landassetWealth from "@/assets/landasset-wealth.jpg";
import landassetAnalytics from "@/assets/landasset-analytics.jpg";
import landassetLocation from "@/assets/landasset-location.jpg";
import landassetLegal from "@/assets/landasset-legal.jpg";
import landassetPortfolio from "@/assets/landasset-portfolio.jpg";
import landassetSecurity from "@/assets/landasset-security.jpg";
import landassetCta from "@/assets/landasset-cta.jpg";

interface ExpandableSectionProps {
  heading: string;
  content: React.ReactNode[];
  expandedContent: React.ReactNode;
  image: string;
  imageAlt: string;
  icon: React.ReactNode;
  bgClass: string;
  reverse?: boolean;
}

const ExpandableSection = ({
  heading,
  content,
  expandedContent,
  image,
  imageAlt,
  icon,
  bgClass,
  reverse = false
}: ExpandableSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12`}>
          {/* Image */}
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src={image} 
                alt={imageAlt} 
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute top-4 left-4 bg-gradient-to-r from-plotray-emerald to-plotray-teal text-white p-3 rounded-full shadow-lg">
                {icon}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              {heading}
            </h2>
            
            <div className="space-y-3">
              {content.map((line, index) => (
                <p 
                  key={index} 
                  className="text-foreground/80 text-lg leading-relaxed flex items-start gap-3"
                >
                  <span className="text-plotray-emerald mt-1">✓</span>
                  {line}
                </p>
              ))}
            </div>

            {/* Expandable Content */}
            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pt-6 mt-4 border-t border-border/30">
                <div className="pl-4 border-l-4 border-gradient-to-b from-plotray-emerald to-plotray-gold">
                  <p className="text-foreground/75 leading-loose text-base">
                    {expandedContent}
                  </p>
                </div>
              </div>
            </div>

            {/* Get More Button */}
            <Button 
              onClick={() => setIsExpanded(!isExpanded)} 
              className="bg-gradient-to-r from-plotray-emerald to-plotray-gold hover:from-plotray-emerald/90 hover:to-plotray-gold/90 text-white rounded-full px-8 py-3 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>{isExpanded ? "Show Less" : "Get More"}</span>
              <ChevronDown 
                className={`ml-2 h-5 w-5 transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`} 
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTAExpandable = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const expandedContent = <>Building a land portfolio requires strategic planning. Early entry increases appreciation potential. Asset-worthy land grows with infrastructure. Expert insights reduce investment risk. Clear data supports confident decisions. Long-term focus ensures stability. <span style={{ color: '#166534' }}>PLOT</span><span style={{ color: '#C2410C' }}>RAY</span> supports asset planning. Wealth begins with the right land.</>;
  
  return (
    <div className="space-y-4">
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <p className="text-white/90 leading-loose">
            {expandedContent}
          </p>
        </div>
      </div>

      <Button 
        onClick={() => setIsExpanded(!isExpanded)} 
        variant="outline" 
        className="border-white/30 text-white hover:bg-white/20 rounded-full px-8 bg-transparent"
      >
        <span>{isExpanded ? "Show Less" : "Get More"}</span>
        <ChevronDown 
          className={`ml-2 h-5 w-5 transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`} 
        />
      </Button>
    </div>
  );
};

const LandAsset = () => {
  const sections = [
    {
      heading: "Land Builds Wealth Over Time",
      content: [
        "Land appreciates steadily as cities expand.",
        "Limited availability increases long-term value.",
        "Unlike buildings, land does not depreciate.",
        "Urban growth boosts demand and pricing.",
        "Land remains one of the safest investment assets."
      ],
      expandedContent: "Land has historically proven to be a reliable wealth-building asset. As population and urban boundaries expand, land demand increases naturally. Unlike constructed properties, land does not lose value with age. Scarcity plays a major role in long-term appreciation. Well-located land continues to grow quietly over time. It protects wealth from inflation and market volatility. Investors rely on land for stability and security. Long-term growth makes land a preferred asset.",
      image: landassetWealth,
      imageAlt: "Land wealth building concept",
      icon: <TrendingUp className="h-6 w-6" />,
      bgClass: "bg-gradient-to-br from-emerald-50 to-teal-50"
    },
    {
      heading: "Monitor Appreciation & Market Trends",
      content: [
        <><span style={{ display: 'inline-block' }}><span style={{ color: '#166534' }}>PLOT</span><span style={{ color: '#C2410C' }}>RAY</span></span>{" "}helps track land value changes over time.</>,
        "See nearby developments influencing growth.",
        "Understand price movement clearly.",
        "Better insights support smarter decisions.",
        "Stay informed about your asset's performance."
      ],
      expandedContent: <>Tracking land performance helps investors plan strategically. Market movements become easier to understand with clear data. Nearby infrastructure directly impacts appreciation rates. <span style={{ color: '#166534' }}>PLOT</span><span style={{ color: '#C2410C' }}>RAY</span> visualizes these changes in a simple format. Historical trends support future planning decisions. Data-driven insights reduce uncertainty. Clear analytics strengthen asset confidence. Informed investors make stronger choices.</>,
      image: landassetAnalytics,
      imageAlt: "Land analytics dashboard",
      icon: <BarChart3 className="h-6 w-6" />,
      bgClass: "bg-white"
    },
    {
      heading: "Location Defines Asset Strength",
      content: [
        "Connectivity drives land appreciation.",
        <><span style={{ display: 'inline-block' }}><span style={{ color: '#166534' }}>PLOT</span><span style={{ color: '#C2410C' }}>RAY</span></span>{" "}evaluates access to highways, malls, and cities.</>,
        "Higher location scores attract buyers and investors.",
        "Future infrastructure boosts asset value.",
        "Make location-based decisions with confidence."
      ],
      expandedContent: "Location is the strongest factor in land appreciation. Connectivity improves usability and future demand. Highways, rail access, and city proximity add strength. Commercial activity increases investor interest. Infrastructure projects raise long-term value potential. Location scoring simplifies complex comparisons. Better locations mean faster growth. Strong connectivity secures asset performance.",
      image: landassetLocation,
      imageAlt: "Location connectivity scoring",
      icon: <MapPin className="h-6 w-6" />,
      bgClass: "bg-gradient-to-br from-teal-50 to-cyan-50"
    },
    {
      heading: "Clear Titles. Strong Assets.",
      content: [
        "Legal clarity protects your investment.",
        "Clear titles increase buyer trust.",
        "Proper zoning improves resale potential.",
        "Documentation strengthens asset security.",
        <><span style={{ display: 'inline-block' }}><span style={{ color: '#166534' }}>PLOT</span><span style={{ color: '#C2410C' }}>RAY</span></span> emphasizes transparency and clarity.</>
      ],
      expandedContent: "Legal clarity forms the foundation of a strong land asset. Clear titles reduce future disputes and uncertainty. Proper zoning ensures planned usability. Verified documentation improves resale confidence. Transparent records attract serious buyers. Legal security protects long-term wealth. Confidence begins with clarity. Strong documentation strengthens asset value.",
      image: landassetLegal,
      imageAlt: "Legal verification documents",
      icon: <Shield className="h-6 w-6" />,
      bgClass: "bg-white"
    },
    {
      heading: "One Platform for All Your Land Assets",
      content: [
        "Manage multiple land holdings in one place.",
        "Track location, value, and growth together.",
        "A simplified asset overview saves time.",
        "Organized data improves planning.",
        "A smart way to manage land portfolios."
      ],
      expandedContent: "Managing multiple land assets becomes easier with structure. Centralized visibility reduces confusion. All asset details are accessible in one view. Performance tracking supports long-term planning. Organized portfolios improve decision-making. Time is saved through simplification. Planning becomes more strategic. One platform brings complete clarity.",
      image: landassetPortfolio,
      imageAlt: "Portfolio management dashboard",
      icon: <Briefcase className="h-6 w-6" />,
      bgClass: "bg-gradient-to-br from-amber-50 to-yellow-50"
    },
    {
      heading: "Secure Your Future with Land",
      content: [
        "Land supports long-term financial planning.",
        "Ideal for wealth preservation and legacy creation.",
        "Lower risk compared to volatile assets.",
        "Urban growth strengthens returns.",
        "A stable foundation for future wealth."
      ],
      expandedContent: "Land provides security across generations. It preserves wealth without daily market fluctuation. Urban expansion strengthens long-term returns. Risk remains lower than volatile financial assets. Land supports legacy and inheritance planning. It grows silently over time. Stability defines land investment. Future security starts with land ownership.",
      image: landassetSecurity,
      imageAlt: "Family looking at land investment",
      icon: <Lock className="h-6 w-6" />,
      bgClass: "bg-white"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${landassetHero})` }} />
        <div className="absolute inset-0 bg-gradient-to-br from-plotray-blue/90 via-plotray-blue/70 to-teal/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(45,212,191,0.2),transparent_50%)]" />
        
        <div className="container-custom relative z-10 text-center pt-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 animate-fade-in leading-tight">
            Your Land Is More Than Property—<br />
            <span className="text-gold">It's a Growing Asset</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-semibold tracking-wide">
            3X PORTFOLIO. FINANCIAL FREEDOM. KIDS' LEGACY SECURED.
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Expandable Sections */}
      {sections.map((section, index) => (
        <ExpandableSection 
          key={index} 
          {...section} 
          reverse={index % 2 === 1} 
        />
      ))}

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${landassetCta})` }} 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-plotray-emerald/80 to-plotray-gold/70" />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full">
              <Sparkles className="h-5 w-5 text-plotray-gold" />
              <span className="text-white font-medium">Start Your Journey</span>
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
              Start Building Your Land Asset Portfolio
            </h2>
            
            <div className="space-y-3 text-white/90 text-lg max-w-2xl mx-auto">
              <p>Strategic land ownership creates lasting value.</p>
              <p>Early investments deliver stronger growth.</p>
              <p><span style={{ color: '#166534' }}>PLOT</span><span style={{ color: '#C2410C' }}>RAY</span> helps identify asset-worthy land.</p>
              <p>Make informed decisions with expert insights.</p>
              <p>Turn land into long-term wealth today.</p>
            </div>

            <CTAExpandable />

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-plotray-gold to-amber-400 hover:from-plotray-gold/90 hover:to-amber-400/90 text-primary font-bold text-lg px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Start Managing Assets
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/20 rounded-full px-10 py-6 bg-transparent"
                asChild
              >
                <Link to="/contact">Get Expert Advice</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LandAsset;
