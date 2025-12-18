import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ChevronDown, Handshake, MapPin, ClipboardList, Scale, Shield, Heart, Send, ArrowRight } from "lucide-react";

// Image imports
import sellHero from "@/assets/sell-hero.jpg";
import sellDirect from "@/assets/sell-direct.jpg";
import sellGrowth from "@/assets/sell-growth.jpg";
import sellProcess from "@/assets/sell-process.jpg";
import sellPricing from "@/assets/sell-pricing.jpg";
import sellTrust from "@/assets/sell-trust.jpg";
import sellStressfree from "@/assets/sell-stressfree.jpg";
import sellCta from "@/assets/sell-cta.jpg";

interface ExpandableSectionProps {
  heading: string;
  content: string[];
  expandedContent: string[];
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
  reverse = false,
}: ExpandableSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12`}>
          {/* Image */}
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute top-4 left-4 bg-orange-500 text-white p-3 rounded-full">
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
                <p key={index} className="text-muted-foreground text-lg leading-relaxed">
                  {line}
                </p>
              ))}
            </div>

            {/* Expandable Content */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pt-4 border-t border-border/50 space-y-3">
                {expandedContent.map((line, index) => (
                  <p
                    key={index}
                    className="text-muted-foreground leading-relaxed animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>

            {/* Get More Button */}
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-3 font-semibold transition-all duration-300"
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

  const expandedContent = [
    "Submitting land details initiates a quick evaluation process.",
    "Priority locations receive faster responses from the team.",
    "The submission process is simple and digital-friendly.",
    "No complex forms or lengthy documentation is required initially.",
    "PLOTRAY reviews each submission professionally.",
    "Sellers receive timely updates without delays.",
    "Early submission improves acquisition speed.",
    "Opportunities are assessed efficiently.",
  ];

  return (
    <div className="space-y-4">
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-3">
          {expandedContent.map((line, index) => (
            <p
              key={index}
              className="text-white/90 leading-relaxed animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        variant="outline"
        className="border-white/30 text-white hover:bg-white/20 rounded-full px-8"
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

const Sell = () => {
  const sections = [
    {
      heading: "PLOTRAY Buys Land—No Middlemen",
      content: [
        "PLOTRAY purchases land directly from property owners.",
        "There are no brokers, agents, or third-party delays.",
        "You deal directly with a professional buying team.",
        "This ensures faster decisions and clear communication.",
        "A simple and transparent selling experience.",
      ],
      expandedContent: [
        "PLOTRAY operates on a direct land acquisition model designed to eliminate complexity.",
        "By removing brokers and intermediaries, sellers experience faster communication.",
        "Every discussion happens directly with a professional acquisition team.",
        "This approach avoids commission deductions and unnecessary negotiations.",
        "Sellers receive clear responses without repeated follow-ups.",
        "The process is structured for speed and transparency.",
        "Direct buying ensures smoother decision-making and trust.",
        "Efficiency and clarity define every interaction.",
      ],
      image: sellDirect,
      imageAlt: "Direct land transaction",
      icon: <Handshake className="h-6 w-6" />,
      bgClass: "bg-gradient-to-br from-orange-50 to-amber-50",
    },
    {
      heading: "We Buy Land in High-Growth Locations",
      content: [
        "PLOTRAY focuses on land near cities, malls, and highways.",
        "Urban expansion increases strategic value.",
        "We actively acquire land in developing zones.",
        "Well-connected locations receive faster approvals.",
        "If your land is near growth areas, we are interested.",
      ],
      expandedContent: [
        "Land located near expanding cities gains strategic importance over time.",
        "Infrastructure growth naturally increases demand in surrounding areas.",
        "PLOTRAY prioritizes locations close to highways, malls, and urban development.",
        "These zones attract long-term planning and commercial interest.",
        "Connectivity plays a key role in faster acquisition decisions.",
        "Growth corridors align with future expansion strategies.",
        "Well-positioned land receives priority evaluation.",
        "Location-driven demand ensures stronger value.",
      ],
      image: sellGrowth,
      imageAlt: "High-growth urban location",
      icon: <MapPin className="h-6 w-6" />,
      bgClass: "bg-gradient-to-br from-teal-50 to-emerald-50",
    },
    {
      heading: "Sell Your Land in a Few Simple Steps",
      content: [
        "Submit basic land details through our platform.",
        "Our team reviews location and documentation.",
        "We assess land potential and market value.",
        "A clear offer is shared with you.",
        "No complex procedures or long waiting periods.",
      ],
      expandedContent: [
        "The selling journey begins with minimal information from the landowner.",
        "PLOTRAY's team carefully reviews location and documentation details.",
        "Each property is evaluated using clear and consistent criteria.",
        "Market potential is assessed without unnecessary delays.",
        "Offers are communicated transparently and professionally.",
        "There are no complicated procedures or repeated verifications.",
        "The process remains smooth from start to finish.",
        "Simplicity saves time and effort.",
      ],
      image: sellProcess,
      imageAlt: "Simple selling process",
      icon: <ClipboardList className="h-6 w-6" />,
      bgClass: "bg-white",
    },
    {
      heading: "Get a Fair Value for Your Land",
      content: [
        "PLOTRAY offers pricing based on real market data.",
        "We consider location, connectivity, and future growth.",
        "No undervaluation or hidden deductions.",
        "Transparent evaluation builds seller confidence.",
        "You receive a fair and realistic offer.",
      ],
      expandedContent: [
        "Pricing is determined using real market indicators and location strength.",
        "PLOTRAY evaluates accessibility, infrastructure, and growth potential.",
        "This ensures sellers receive realistic and balanced offers.",
        "There are no hidden deductions or last-minute changes.",
        "Every valuation is explained clearly to the seller.",
        "Fair pricing builds long-term confidence and trust.",
        "The goal is mutual value, not pressure.",
        "Transparency defines the offer process.",
      ],
      image: sellPricing,
      imageAlt: "Fair land valuation",
      icon: <Scale className="h-6 w-6" />,
      bgClass: "bg-gradient-to-br from-amber-50 to-yellow-50",
    },
    {
      heading: "A Trusted & Transparent Buyer",
      content: [
        "PLOTRAY follows clear legal and documentation processes.",
        "All terms are explained upfront.",
        "No last-minute changes or confusion.",
        "Professional handling ensures peace of mind.",
        "Trust and clarity are our foundation.",
      ],
      expandedContent: [
        "PLOTRAY follows a clear and professional documentation framework.",
        "All legal steps are explained before moving forward.",
        "There are no unclear clauses or unexpected conditions.",
        "Every agreement is handled with proper compliance.",
        "Sellers are informed at each stage of the transaction.",
        "Professional coordination ensures smooth execution.",
        "Trust is built through clarity and consistency.",
        "Peace of mind is always prioritized.",
      ],
      image: sellTrust,
      imageAlt: "Trusted documentation",
      icon: <Shield className="h-6 w-6" />,
      bgClass: "bg-gradient-to-br from-blue-50 to-sky-50",
    },
    {
      heading: "Sell Without Pressure or Uncertainty",
      content: [
        "No repeated buyer calls or negotiations.",
        "One clear discussion with Plotray's team.",
        "Quick decisions reduce waiting stress.",
        "You stay informed at every stage.",
        "A smooth and worry-free selling journey.",
      ],
      expandedContent: [
        "Selling land often comes with stress and uncertainty.",
        "PLOTRAY removes this by offering a single clear discussion.",
        "There are no repeated calls or forced negotiations.",
        "Decisions are made efficiently without prolonged waiting.",
        "Sellers remain informed throughout the process.",
        "Clear timelines reduce mental pressure.",
        "The experience stays calm and professional.",
        "Confidence replaces confusion.",
      ],
      image: sellStressfree,
      imageAlt: "Stress-free selling",
      icon: <Heart className="h-6 w-6" />,
      bgClass: "bg-muted/30",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${sellHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-orange-900/80" />
        
        <div className="relative z-10 text-center px-4">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-5xl mx-auto leading-tight animate-fade-in">
            Sell Your Land Directly to Plotray—Fast & Fair
          </h1>
        </div>
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
          style={{ backgroundImage: `url(${sellCta})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-teal-600/80 to-emerald-600/70" />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full">
              <Send className="h-5 w-5 text-amber-400" />
              <span className="text-white font-medium">Submit Your Land</span>
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
              Submit Your Land Details & Get an Offer
            </h2>
            
            <div className="space-y-3 text-white/90 text-lg max-w-2xl mx-auto">
              <p>PLOTRAY is actively acquiring land assets.</p>
              <p>Early submissions receive quicker evaluations.</p>
              <p>If your land is near a growing city, we want it.</p>
              <p>The process takes only a few minutes.</p>
              <p>Turn your land into immediate value today.</p>
            </div>

            <CTAExpandable />

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-amber-400 hover:bg-amber-500 text-primary font-bold text-lg px-10 py-6 rounded-full animate-pulse"
              >
                Submit Land Details
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sell;
