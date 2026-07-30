import { Clock, MapPin, Music, Utensils, Wine, Heart, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import FloralDivider from "@/components/FloralDivider";
import waterfrontLawnImg from "@/assets/waterfront-lawn-painted.webp";
import lakesidePavilionImg from "@/assets/lakeside-pavilion-painted.webp";

const VENUE_ADDRESS = "2800 Perry Park Rd, Perry, OH 44081";
const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  VENUE_ADDRESS
)}&output=embed`;
const MAPS_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  VENUE_ADDRESS
)}`;

const timeline = [
  { time: "3:30 PM", label: "Guest Arrival", icon: Heart, desc: "Welcome drinks on the lakefront terrace" },
  { time: "4:00 PM", label: "Ceremony", icon: Heart, desc: "Waterfront ceremony with lake views" },
  { time: "5:00 PM", label: "Cocktail Hour", icon: Wine, desc: "Hors d'oeuvres & refreshments by the shore" },
  { time: "6:00 PM", label: "Dinner", icon: Utensils, desc: "Seated dinner under the stars" },
  { time: "7:30 PM", label: "First Dance", icon: Music, desc: "Dancing & celebration continues" },
  { time: "10:00 PM", label: "Sparkler Send-Off", icon: Heart, desc: "A magical farewell" },
];

const Timelines = () => {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="wedding-heading text-foreground mb-3">Timelines</h1>
            <p className="text-muted-foreground">October 2, 2026</p>
            <p className="text-sm text-muted-foreground mt-1">
              Perry Community Center · {VENUE_ADDRESS}
            </p>
          </div>
        </ScrollReveal>

        {/* Ceremony & Reception */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <ScrollReveal delay={0}>
            <div className="wedding-card text-center overflow-hidden p-0">
              <div className="relative overflow-hidden group">
                <img
                  src={waterfrontLawnImg}
                  alt="Painted view of the Lake Erie waterfront lawn at golden hour"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/70 to-transparent" />
              </div>
              <div className="p-6">
                <Heart className="mx-auto mb-4 text-sage" size={24} />
                <h3 className="wedding-subheading text-foreground mb-2">Ceremony</h3>
                <div className="space-y-1 text-muted-foreground text-sm">
                  <p className="flex items-center justify-center gap-2">
                    <Clock size={14} /> 4:00 PM
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <MapPin size={14} /> Lake Erie Waterfront Lawn
                  </p>
                  <p className="mt-3">Outdoor ceremony</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="wedding-card text-center overflow-hidden p-0">
              <div className="relative overflow-hidden group">
                <img
                  src={lakesidePavilionImg}
                  alt="Painted view of the Lakeside Pavilion under a bright sky"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/70 to-transparent" />
              </div>
              <div className="p-6">
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

        {/* Map */}
        <ScrollReveal>
          <div className="mt-12">
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
              <iframe
                title="Map to Perry Community Center, 2800 Perry Park Rd, Perry, OH 44081"
                src={MAPS_EMBED_URL}
                className="w-full h-72 md:h-80"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <MapPin size={14} className="text-dusty-blue" />
                Perry Community Center · {VENUE_ADDRESS}
              </p>
              <a
                href={MAPS_LINK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-2 text-xs tracking-widest uppercase text-sage hover:underline"
              >
                Open in Google Maps <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </ScrollReveal>

        <FloralDivider className="mt-16" />
      </div>
    </main>
  );
};

export default Timelines;
