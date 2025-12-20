import { Layout } from "@/components/layout/Layout";
import { Mail, Phone, Shield, Lock, User, Calendar, Database, Eye, Trash2, Settings, Baby, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const privacySections = [
  {
    id: "1",
    title: "Information We Collect",
    icon: User,
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-foreground mb-2">Personal Data:</h4>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Name, email, phone (contact forms)</li>
            <li>Land details (plots, documents for BUY/SELL)</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-2">Usage Data:</h4>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>IP address, browser type, pages visited</li>
            <li>Location data (for land verification)</li>
          </ul>
        </div>
        <p className="text-muted-foreground font-medium">
          <strong>No Sensitive Data:</strong> No PAN/Aadhaar unless a transaction is required.
        </p>
      </div>
    ),
  },
  {
    id: "2",
    title: "How We Use Your Data",
    icon: Database,
    content: (
      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
        <li>Process BUY/SELL inquiries & offers</li>
        <li>Verify land titles & locations</li>
        <li>Send updates (opt-out anytime)</li>
        <li>Improve platform (analytics)</li>
        <li>Legal compliance (RERA reporting)</li>
      </ul>
    ),
  },
  {
    id: "3",
    title: "Data Sharing & Disclosure",
    icon: Eye,
    content: (
      <div className="space-y-3">
        <p className="text-muted-foreground font-medium">
          <strong>Never sold.</strong> Shared only with:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Payment gateways (Razorpay/UPI)</li>
          <li>Legal verification partners</li>
          <li>Government (tax/RERA audits)</li>
        </ul>
        <p className="text-muted-foreground font-medium">No third-party marketing.</p>
      </div>
    ),
  },
  {
    id: "4",
    title: "Cookies & Tracking",
    icon: Settings,
    content: (
      <div className="space-y-2">
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Essential cookies (session management)</li>
          <li>Analytics (Google Analytics - anonymized)</li>
          <li>Manage preferences via browser settings</li>
        </ul>
        <p className="text-muted-foreground font-medium">No targeted ads on our site.</p>
      </div>
    ),
  },
  {
    id: "5",
    title: "Data Storage & Security",
    icon: Lock,
    content: (
      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
        <li>Stored on secure AWS India servers (Mumbai)</li>
        <li>Encrypted at rest/transit (AES-256)</li>
        <li>Access limited to authorized staff</li>
        <li>Regular security audits</li>
      </ul>
    ),
  },
  {
    id: "6",
    title: "Your Rights (DPDP Act 2023)",
    icon: Shield,
    content: (
      <div className="space-y-3">
        <div className="grid gap-3">
          <div className="flex items-start gap-3">
            <span className="font-semibold text-primary">Access:</span>
            <span className="text-muted-foreground">Request your data copy</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-semibold text-primary">Correction:</span>
            <span className="text-muted-foreground">Update inaccurate info</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-semibold text-primary">Deletion:</span>
            <span className="text-muted-foreground">Right to be forgotten (30 days)</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-semibold text-primary">Opt-Out:</span>
            <span className="text-muted-foreground">Unsubscribe emails anytime</span>
          </div>
        </div>
        <p className="text-muted-foreground mt-4">
          Email <a href="mailto:shekar@plotray.com" className="text-primary hover:underline">shekar@plotray.com</a> to exercise rights.
        </p>
      </div>
    ),
  },
  {
    id: "7",
    title: "Data Retention",
    icon: Calendar,
    content: (
      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
        <li>Inquiries: 2 years</li>
        <li>Transactions: 10 years (legal requirement)</li>
        <li>Inactive accounts: Deleted after 12 months</li>
      </ul>
    ),
  },
  {
    id: "8",
    title: "Children's Privacy",
    icon: Baby,
    content: (
      <p className="text-muted-foreground">
        No services for under 18. Parents can request deletion.
      </p>
    ),
  },
  {
    id: "9",
    title: "Changes to Policy",
    icon: FileText,
    content: (
      <p className="text-muted-foreground">
        Updates posted here. Major changes emailed. Continued use = acceptance.
      </p>
    ),
  },
];

const Privacy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Lock className="w-4 h-4" />
              <span className="text-sm font-medium">DPDP Act 2023 & IT Rules 2021 Compliant</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Last Updated: December 20, 2025
            </p>
            <p className="text-xl text-foreground/80 mb-8">
              Your data security is our priority.
            </p>
            <Button variant="outline" className="gap-2">
              <Mail className="w-4 h-4" />
              Contact Data Team
            </Button>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {privacySections.map((section) => (
                <AccordionItem
                  key={section.id}
                  value={section.id}
                  className="border border-border rounded-xl px-6 bg-card shadow-sm"
                >
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <section.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-lg font-semibold text-foreground">
                        {section.id}. {section.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pt-2 pl-14">
                    {section.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <Shield className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Questions About Your Data?
            </h2>
            <p className="text-muted-foreground mb-8">
              We're here to help you understand and exercise your privacy rights.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:shekar@plotray.com">
                <Button className="gap-2">
                  <Mail className="w-4 h-4" />
                  shekar@plotray.com
                </Button>
              </a>
              <a href="tel:+919444126240">
                <Button variant="outline" className="gap-2">
                  <Phone className="w-4 h-4" />
                  +91 9444126240
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-8 bg-primary text-primary-foreground">
        <div className="container-custom">
          <p className="text-center text-sm">
            © 2025 Plotray. Chennai, India. DPDP Compliant.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
