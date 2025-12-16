import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  BarChart3, 
  TrendingUp, 
  Shield, 
  Briefcase,
  ArrowRight,
  CheckCircle,
  PieChart,
  FileText,
  MapPin
} from "lucide-react";

const assetFeatures = [
  { icon: BarChart3, title: "Performance Insights", desc: "Track how nearby developments impact land value over time." },
  { icon: Shield, title: "Legal Score", desc: "Legal clarity builds buyer confidence with zoning and access details." },
  { icon: MapPin, title: "Location Analysis", desc: "Location scoring simplifies comparison between properties." },
  { icon: Briefcase, title: "Portfolio View", desc: "Manage multiple land assets in one unified dashboard." },
];

const metrics = [
  { label: "Total Value", value: "₹2.5Cr", change: "+18%" },
  { label: "Properties", value: "5", change: "" },
  { label: "Avg. Growth", value: "15%", change: "+3%" },
  { label: "Legal Score", value: "92/100", change: "" },
];

const LandAsset = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden gradient-premium">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-plotray-indigo rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
              Your Land is an
              <br />
              <span className="text-plotray-gold">Asset</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Land is a powerful long-term investment. Plotray helps you view land as a measurable asset. 
              Understand its value, potential, and future growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="hero" size="lg">
                View My Assets
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero-outline" size="lg">
                Add Property
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Asset Dashboard Preview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="glass-card rounded-3xl p-8 md:p-12 -mt-16 relative z-20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-2">Asset Dashboard</h2>
                <p className="text-muted-foreground">Overview of your land portfolio performance</p>
              </div>
              <Button variant="outline">
                <FileText className="w-4 h-4" />
                Download Report
              </Button>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className="p-6 rounded-2xl bg-muted/50">
                  <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-heading font-bold text-foreground">{metric.value}</span>
                    {metric.change && (
                      <span className="text-sm font-medium text-plotray-emerald pb-1">{metric.change}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Asset Performance Insights */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Asset Performance <span className="text-plotray-purple">Insights</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Track how nearby developments impact land value. Understand appreciation trends 
                over time with data-driven analysis.
              </p>
              
              <div className="space-y-4 mb-8">
                {["Infrastructure growth tracking", "Appreciation trend analysis", "Market comparison data", "Future value projections"].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-plotray-purple flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="premium" size="lg">
                View Analytics
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-heading font-semibold text-foreground">Growth Analytics</h3>
                <select className="text-sm bg-muted rounded-lg px-3 py-2 border-none">
                  <option>Last 12 months</option>
                  <option>Last 6 months</option>
                  <option>Last 3 months</option>
                </select>
              </div>
              
              {/* Mock Chart */}
              <div className="h-48 flex items-end gap-2">
                {[40, 55, 45, 60, 70, 65, 80, 75, 85, 90, 88, 95].map((height, index) => (
                  <div 
                    key={index} 
                    className="flex-1 rounded-t-lg gradient-premium"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>Jan</span>
                <span>Jun</span>
                <span>Dec</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Complete Asset <span className="text-plotray-teal">Management</span>
            </h2>
            <p className="text-muted-foreground">
              Everything you need to manage your land portfolio strategically and build long-term wealth.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {assetFeatures.map((feature, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 hover-lift">
                <div className="w-14 h-14 rounded-xl gradient-premium flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden gradient-premium p-8 md:p-12 lg:p-16 text-center">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                Build Long-Term Wealth
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                City-adjacent land grows consistently in value. Plotray identifies future-ready assets 
                for strategic planning and improved returns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Start Managing Assets
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <Link to="/contact">Get Expert Advice</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LandAsset;
