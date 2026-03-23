import { useState } from "react";
import { X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import FloralDivider from "@/components/FloralDivider";

import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const photos = [
  { src: g1, alt: "Lakeside stroll at sunset", tall: true },
  { src: g2, alt: "A moment together", tall: false },
  { src: g3, alt: "On the dock", tall: true },
  { src: g4, alt: "Lakeside picnic", tall: false },
  { src: g5, alt: "Dancing at golden hour", tall: true },
  { src: g6, alt: "Sunset silhouette", tall: false },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h1 className="wedding-heading text-foreground mb-3">Our Story</h1>
            <p className="text-muted-foreground">Moments we hold dear</p>
          </div>
        </ScrollReveal>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {photos.map((photo, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <button
                onClick={() => setLightbox(i)}
                className="block w-full rounded-xl overflow-hidden group cursor-pointer break-inside-avoid"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </button>
            </ScrollReveal>
          ))}
        </div>

        <FloralDivider className="mt-16" />
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-background/80 hover:text-background transition-colors active:scale-95"
            onClick={() => setLightbox(null)}
          >
            <X size={28} />
          </button>
          <img
            src={photos[lightbox].src}
            alt={photos[lightbox].alt}
            className="max-w-full max-h-[85vh] rounded-xl object-contain animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
};

export default Gallery;
