import { Heart, Plane, QrCode, Info } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import FloralDivider from "@/components/FloralDivider";
import venmoQr from "@/assets/venmo-qr.png";
import wechatQr from "@/assets/wechat.jpeg";

const ZELLE_NUMBER = "412-742-6622";
const VENMO_HANDLE = "@Elaine-Jiang-4";

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
              some time already, we have most of what we need. So instead of a
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
              <a
                href={`tel:${ZELLE_NUMBER.replace(/-/g, "")}`}
                className="font-serif text-lg text-foreground tracking-wide"
              >
                {ZELLE_NUMBER}
              </a>
            </div>

            <div className="mt-6 mx-auto max-w-md flex items-start gap-2.5 rounded-xl border border-border bg-secondary/50 px-4 py-3 text-left">
              <Info size={15} className="mt-0.5 shrink-0 text-sage" />
              <p className="text-xs leading-relaxed text-muted-foreground">
                Please leave your name in the comment / message of your Zelle
                transaction so we know who to thank!
              </p>
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
            <div className="w-56 mx-auto rounded-xl overflow-hidden bg-white shadow-sm">
              <img
                src={venmoQr}
                alt={`Venmo QR code for Elaine Jiang, ${VENMO_HANDLE}`}
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
            <p className="text-sm text-foreground mt-4 font-serif">
              Elaine Jiang · {VENMO_HANDLE} · Last 4 digits for verification: 7798
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Scan with your Venmo app
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="wedding-card text-center">
            <QrCode className="mx-auto mb-4 text-sage" size={24} />
            <h3 className="wedding-subheading text-foreground mb-4">
              Scan to Contribute (WeChat微信)
            </h3>
            <div className="w-56 mx-auto rounded-xl overflow-hidden bg-white shadow-sm">
              <img
                src={wechatQr}
                alt={`WeChat QR code for Yilong Chen`}
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
            <p className="text-sm text-foreground mt-4 font-serif">
              Yilong Chen · 陈亦龙
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Scan with your WeChat App
            </p>
          </div>
        </ScrollReveal>

        <FloralDivider className="mt-16" />
      </div>
    </main>
  );
};

export default Gifts;
