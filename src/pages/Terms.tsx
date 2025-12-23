import { Layout } from "@/components/layout/Layout";
import { Mail, Phone, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const termsData = [{
  id: "1",
  title: "1. Acceptance of Terms",
  content: ["PLOTRAY operates under Indian laws (IT Act 2000, RERA 2016).", "Using our platform means you accept these terms fully.", "We may update terms—check regularly."]
}, {
  id: "2",
  title: "2. Services Provided",
  content: ["Buy/Sell Land: Verified listings, direct transactions", "Land Asset Tracking: Portfolio monitoring tools", "Site Visits: Free for serious inquiries", "No guarantees on investment returns—market risks apply."]
}, {
  id: "3",
  title: "3. User Responsibilities",
  content: ["Provide accurate land details/documents", "Comply with local property laws (Tamil Nadu rules)", "No fraudulent listings or spam", "Violations lead to account suspension."]
}, {
  id: "4",
  title: "4. Payments & Transactions",
  content: ["Fair market pricing based on location data", "Secure payments via bank transfer/UPI", "7-day cooling period for offers", "All transactions are GST-compliant (18% on services)."]
}, {
  id: "5",
  title: "5. Privacy & Data",
  content: ["Your data is protected under the DPDP Act 2023.", "We collect name, phone, and land details for verification.", "No sharing without consent—see Privacy Policy."]
}, {
  id: "6",
  title: "6. Limitation of Liability",
  content: ["PLOTRAY is not liable for market losses or title disputes.", "Max liability: transaction value.", "Force majeure (delays, disputes) exempt."]
}, {
  id: "7",
  title: "7. Governing Law",
  content: ["Tamil Nadu courts have exclusive jurisdiction.", "Disputes resolved via arbitration (Chennai).", "RERA-registered for transparency."]
}, {
  id: "8",
  title: "8. Termination",
  content: ["We can suspend access for violations.", "You can stop using services anytime.", "Inactive accounts are deleted after 12 months."]
}];
const Terms = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-8 h-8 text-accent" />
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                  Legal Document
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
                Terms & Conditions
              </h1>
              <p className="text-primary-foreground/70 text-lg">
                Last Updated: December 20, 2025
              </p>
            </div>
            <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-fit" onClick={() => window.print()}>
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <div className="bg-card rounded-2xl border border-border p-6 md:p-10 mb-8">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">By using PLOTRAY services, you agree to these terms. Read carefully.</p>
            
            {/* Accordion Sections */}
            <Accordion type="multiple" className="space-y-4" defaultValue={["1", "2", "3", "4", "5", "6", "7", "8"]}>
              {termsData.map(section => <AccordionItem key={section.id} value={section.id} className="border border-border rounded-xl px-6 data-[state=open]:bg-muted/30">
                  <AccordionTrigger className="text-lg font-heading font-semibold text-primary hover:no-underline py-5">
                    {section.title}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <ul className="space-y-3">
                      {section.content.map((item, index) => <li key={index} className="flex items-start gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          {item}
                        </li>)}
                    </ul>
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>

          {/* Contact CTA */}
          <div className="bg-primary rounded-2xl p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
              Questions?
            </h2>
            <p className="text-primary-foreground/70 mb-6">
              Reach out to our support team for any clarifications.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:shekar@plotray.com" className="flex items-center gap-2 text-primary-foreground hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
                shekar@plotray.com
              </a>
              <span className="hidden sm:block text-primary-foreground/30">|</span>
              <a href="tel:+919444126240" className="flex items-center gap-2 text-primary-foreground hover:text-accent transition-colors">
                <Phone className="w-5 h-5" />
                +91 9444126240
              </a>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-8 text-sm text-muted-foreground">
            © 2025 <span className="text-[#166534] font-bold">PLOT</span><span className="text-[#C2410C] font-bold">RAY</span>. Chennai, India. RERA Registered.
          </div>
        </div>
      </section>
    </Layout>;
};
export default Terms;