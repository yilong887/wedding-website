import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-lake.jpg";
import CountdownTimer from "@/components/CountdownTimer";
import FloralDivider from "@/components/FloralDivider";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Watercolor lake scene"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/40" />

        <div className="relative z-10 text-center px-6 max-w-2xl">
          <p
            className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            You're Invited
          </p>

          <h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-2 opacity-0 animate-fade-up"
            style={{ animationDelay: "400ms", lineHeight: "1.05" }}
          >
            Byron <span className="text-sage italic font-light">&</span> Elaine
          </h1>

          <p
            className="font-serif text-lg md:text-xl text-muted-foreground mt-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "600ms" }}
          >
            September 20, 2026 · Lake Erie
          </p>

          <Link
            to="/details"
            className="inline-block mt-10 px-8 py-3 border border-sage text-sage text-sm tracking-widest uppercase rounded-full hover:bg-sage hover:text-primary-foreground transition-all duration-300 active:scale-[0.97] opacity-0 animate-fade-up"
            style={{ animationDelay: "800ms" }}
          >
            View Details
          </Link>
        </div>
      </section>

      {/* Countdown */}
      <section className="wedding-section bg-secondary/50">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="wedding-subheading text-foreground mb-2">Counting Down</h2>
            <p className="text-muted-foreground text-sm mb-10">to the day we say "I do"</p>
            <CountdownTimer />
          </div>
        </ScrollReveal>
      </section>

      {/* Quote */}
      <section className="wedding-section">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <FloralDivider className="mb-10" />
            <blockquote className="font-serif text-2xl md:text-3xl font-light italic text-foreground leading-relaxed text-balance">
              "We can't wait to celebrate this special day with you by the lake."
            </blockquote>
            <p className="mt-6 text-sm tracking-widest uppercase text-muted-foreground">
              Byron & Elaine
            </p>
            <FloralDivider className="mt-10" />
          </div>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-border">
        <p className="font-serif text-lg text-muted-foreground">
          Byron & Elaine · September 20, 2026
        </p>
      </footer>
    </main>
  );
};

export default Index;
