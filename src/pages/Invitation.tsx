import { Mail } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import FloralDivider from "@/components/FloralDivider";

const Invitation = () => {
  return (
    <main className="min-h-screen pt-24 pb-16 flex items-center justify-center">
      <div className="max-w-xl mx-auto px-6 text-center">
        <ScrollReveal>
          <FloralDivider className="mb-10" />
          <Mail className="mx-auto mb-6 text-dusty-blue" size={32} />
          <h1 className="wedding-heading text-foreground mb-4">Invitation</h1>
          <p className="font-serif text-xl text-muted-foreground mb-8">
            With love, Elaine & Byron
          </p>
          <div className="wedding-card">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Our formal invitation is being lovingly prepared and will appear here
              soon. In the meantime, feel free to RSVP or browse the timelines.
            </p>
          </div>
          <FloralDivider className="mt-10" />
        </ScrollReveal>
      </div>
    </main>
  );
};

export default Invitation;
