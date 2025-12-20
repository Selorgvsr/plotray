import { Layout } from "@/components/layout/Layout";
import { Mail, Phone, Shield, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const privacyData = [
  {
    id: "1",
    title: "1. Information We Collect",
    content: [
      "Personal Data: Name, email, phone (contact forms)",
      "Land details (plots, documents for BUY/SELL)",
      "Usage Data: IP address, browser type, pages visited",
      "Location data (for land verification)",
      "No Sensitive Data: No PAN/Aadhaar unless a transaction is required.",
    ],
  },
  {
    id: "2",
    title: "2. How We Use Your Data",
    content: [
      "Process BUY/SELL inquiries & offers",
      "Verify land titles & locations",
      "Send updates (opt-out anytime)",
      "Improve platform (analytics)",
      "Legal compliance (RERA reporting)",
    ],
  },
  {
    id: "3",
    title: "3. Data Sharing & Disclosure",
    content: [
      "Never sold. Shared only with:",
      "Payment gateways (Razorpay/UPI)",
      "Legal verification partners",
      "Government (tax/RERA audits)",
      "No third-party marketing.",
    ],
  },
  {
    id: "4",
    title: "4. Cookies & Tracking",
    content: [
      "Essential cookies (session management)",
      "Analytics (Google Analytics - anonymized)",
      "Manage preferences via browser settings",
      "No targeted ads on our site.",
    ],
  },
  {
    id: "5",
    title: "5. Data Storage & Security",
    content: [
      "Stored on secure AWS India servers (Mumbai)",
      "Encrypted at rest/transit (AES-256)",
      "Access limited to authorized staff",
      "Regular security audits.",
    ],
  },
  {
    id: "6",
    title: "6. Your Rights (DPDP Act 2023)",
    content: [
      "Access: Request your data copy",
      "Correction: Update inaccurate info",
      "Deletion: Right to be forgotten (30 days)",
      "Opt-Out: Unsubscribe emails anytime",
      "Email shekar@plotray.com to exercise rights.",
    ],
  },
  {
    id: "7",
    title: "7. Data Retention",
    content: [
      "Inquiries: 2 years",
      "Transactions: 10 years (legal requirement)",
      "Inactive accounts: Deleted after 12 months",
    ],
  },
  {
    id: "8",
    title: "8. Children's Privacy",
    content: [
      "No services for under 18.",
      "Parents can request deletion.",
    ],
  },
  {
    id: "9",
    title: "9. Changes to Policy",
    content: [
      "Updates posted here.",
      "Major changes emailed.",
      "Continued use = acceptance.",
    ],
  },
];

const Privacy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-accent" />
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                  DPDP Act 2023 & IT Rules 2021 Compliant
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
                Privacy Policy
              </h1>
              <p className="text-primary-foreground/70 text-lg">
                Last Updated: December 20, 2025
              </p>
            </div>
            <Button
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-fit"
              onClick={() => window.print()}
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <div className="bg-card rounded-2xl border border-border p-6 md:p-10 mb-8">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Your data security is our priority. Compliant with the DPDP Act 2023 & IT Rules 2021.
            </p>

            {/* Accordion Sections */}
            <Accordion
              type="multiple"
              className="space-y-4"
              defaultValue={["1", "2", "3", "4", "5", "6", "7", "8", "9"]}
            >
              {privacyData.map((section) => (
                <AccordionItem
                  key={section.id}
                  value={section.id}
                  className="border border-border rounded-xl px-6 data-[state=open]:bg-muted/30"
                >
                  <AccordionTrigger className="text-lg font-heading font-semibold text-primary hover:no-underline py-5">
                    {section.title}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <ul className="space-y-3">
                      {section.content.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact CTA */}
          <div className="bg-primary rounded-2xl p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
              Questions About Your Data?
            </h2>
            <p className="text-primary-foreground/70 mb-6">
              We're here to help you understand and exercise your privacy rights.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:shekar@plotray.com"
                className="flex items-center gap-2 text-primary-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
                shekar@plotray.com
              </a>
              <span className="hidden sm:block text-primary-foreground/30">|</span>
              <a
                href="tel:+919444126240"
                className="flex items-center gap-2 text-primary-foreground hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5" />
                +91 9444126240
              </a>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-8 text-sm text-muted-foreground">
            © 2025 Plotray. Chennai, India. DPDP Compliant.
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
