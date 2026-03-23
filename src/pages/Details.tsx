import { Clock, MapPin, Music, Utensils, Wine, Heart } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import FloralDivider from "@/components/FloralDivider";

const timeline = [
  { time: "3:30 PM", label: "Guest Arrival", icon: Heart, desc: "Welcome drinks on the lakefront terrace" },
  { time: "4:00 PM", label: "Ceremony", icon: Heart, desc: "Waterfront ceremony with lake views" },
  { time: "5:00 PM", label: "Cocktail Hour", icon: Wine, desc: "Hors d'oeuvres & refreshments by the shore" },
  { time: "6:00 PM", label: "Dinner", icon: Utensils, desc: "Seated dinner under the stars" },
  { time: "7:30 PM", label: "First Dance", icon: Music, desc: "Dancing & celebration continues" },
  { time: "10:00 PM", label: "Sparkler Send-Off", icon: Heart, desc: "A magical farewell" },
];

const Details = () => {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="wedding-heading text-foreground mb-3">Wedding Day</h1>
            <p className="text-muted-foreground">September 20, 2026</p>
          </div>
        </ScrollReveal>

        {/* Ceremony & Reception */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <ScrollReveal delay={0}>
            <div className="wedding-card text-center">
              <Heart className="mx-auto mb-4 text-sage" size={24} />
              <h3 className="wedding-subheading text-foreground mb-2">Ceremony</h3>
              <div className="space-y-1 text-muted-foreground text-sm">
                <p className="flex items-center justify-center gap-2">
                  <Clock size={14} /> 4:00 PM
                </p>
                <p className="flex items-center justify-center gap-2">
                  <MapPin size={14} /> Lake Erie Waterfront
                </p>
                <p className="mt-3">Outdoor ceremony on the shore</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="wedding-card text-center">
              <Utensils className="mx-auto mb-4 text-dusty-blue" size={24} />
              <h3 className="wedding-subheading text-foreground mb-2">Reception</h3>
              <div className="space-y-1 text-muted-foreground text-sm">
                <p className="flex items-center justify-center gap-2">
                  <Clock size={14} /> 5:00 PM — 10:00 PM
                </p>
                <p className="flex items-center justify-center gap-2">
                  <MapPin size={14} /> Lakeside Pavilion
                </p>
                <p className="mt-3">Dinner, dancing & celebration</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Timeline */}
        <ScrollReveal>
          <FloralDivider className="mb-12" />
          <h2 className="wedding-subheading text-foreground text-center mb-12">
            Timeline
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {timeline.map((item, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div
                className={`relative flex items-start mb-10 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-sage rounded-full -translate-x-1/2 mt-1.5 z-10 ring-4 ring-background" />

                {/* Content */}
                <div
                  className={`ml-14 md:ml-0 md:w-1/2 ${
                    i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <p className="text-xs tracking-widest uppercase text-sage font-medium">
                    {item.time}
                  </p>
                  <h4 className="font-serif text-xl text-foreground mt-1">{item.label}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Dress Code */}
        <ScrollReveal>
          <div className="wedding-card text-center mt-16">
            <h3 className="wedding-subheading text-foreground mb-3">Dress Code</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto">
              Garden formal. Think flowing fabrics and soft tones that complement
              the lakeside setting. Comfortable shoes recommended for the outdoor ceremony.
            </p>
          </div>
        </ScrollReveal>

        {/* Map placeholder */}
        <ScrollReveal>
          <div className="mt-12 rounded-2xl overflow-hidden bg-dusty-blue-light h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="mx-auto mb-2 text-dusty-blue" size={28} />
              <p className="text-sm text-muted-foreground">Lake Erie Waterfront Venue</p>
              <p className="text-xs text-muted-foreground mt-1">Map coming soon</p>
            </div>
          </div>
        </ScrollReveal>

        <FloralDivider className="mt-16" />
      </div>
    </main>
  );
};

export default Details;
