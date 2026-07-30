import { Heart, Plane, QrCode } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import FloralDivider from "@/components/FloralDivider";

const Gifts = () => {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h1 className="wedding-heading text-foreground mb-3">Gifts</h1>
            <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
              Your presence at our celebration is the greatest gift we could ask for.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="wedding-card text-center mb-8">
            <Heart className="mx-auto mb-4 text-sage" size={24} />
            <h3 className="wedding-subheading text-foreground mb-4">
              A Note from Us
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto">
              We feel so blessed to have you in our lives. Having shared a home for
              some time already, we have most of what we need — so instead of a
              traditional registry, we've created a honeymoon fund. If you wish to
              honor us with a gift, a contribution toward our first adventure as a
              married couple would mean the world. But truly, your love and
              presence are everything.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="wedding-card text-center mb-8">
            <Plane className="mx-auto mb-4 text-dusty-blue" size={24} />
            <h3 className="wedding-subheading text-foreground mb-4">
              Honeymoon Fund
            </h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
              Help send us off on our honeymoon! Contributions of any size can be
              sent via Zelle to:
            </p>
            <div className="inline-block bg-secondary rounded-xl px-8 py-4">
              <p className="font-serif text-lg text-foreground">byron.elaine@email.com</p>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Every contribution becomes a sunset, a dinner, or a memory we'll
              treasure forever.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="wedding-card text-center">
            <QrCode className="mx-auto mb-4 text-sage" size={24} />
            <h3 className="wedding-subheading text-foreground mb-4">
              Scan to Contribute
            </h3>
            <div className="w-48 h-48 mx-auto bg-secondary rounded-xl flex items-center justify-center">
              <p className="text-xs text-muted-foreground">QR Code Placeholder</p>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Scan with your banking app to chip in to our honeymoon fund
            </p>
          </div>
        </ScrollReveal>

        <FloralDivider className="mt-16" />
      </div>
    </main>
  );
};

export default Gifts;
