import { CalendarHeart } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import FloralDivider from "@/components/FloralDivider";

const SaveTheDate = () => {
  return (
    <main className="min-h-screen pt-24 pb-16 flex items-center justify-center">
      <div className="max-w-xl mx-auto px-6 text-center">
        <ScrollReveal>
          <FloralDivider className="mb-10" />
          <CalendarHeart className="mx-auto mb-6 text-sage" size={32} />
          <h1 className="wedding-heading text-foreground mb-4">Save the Date</h1>
          <p className="font-serif text-xl text-muted-foreground mb-8">
            October 2, 2026 · Perry, Ohio
          </p>
          <div className="wedding-card">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Our save-the-date card is on its way — check back soon for a keepsake
              you can download and share.
            </p>
          </div>
          <FloralDivider className="mt-10" />
        </ScrollReveal>
      </div>
    </main>
  );
};

export default SaveTheDate;
