import { ArrowRight, Phone } from "lucide-react";
import { Eyebrow } from "./Eyebrow";

export function FinalCTA() {
  return (
    <section style={{ background: "#1C2025" }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center flex flex-col items-center gap-7">
        <Eyebrow tone="light">07 / Get Started</Eyebrow>
        <h2
          style={{
            fontSize: "clamp(32px, 7vw, 88px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            color: "#FAFAFA",
          }}
        >
          Got scrap? Let's move it.
        </h2>
        <p style={{ fontSize: 20, color: "#9CA3AF", maxWidth: 640, lineHeight: 1.6 }}>
          Same-day quotes. Same-week pickup. Honest weights, every load.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-2">
          <a
            href="#get-a-quote"
            className="inline-flex items-center gap-2 px-7 py-4"
            style={{
              background: "#2E7D32",
              color: "#FAFAFA",
              fontWeight: 600,
              fontSize: 16,
              borderRadius: 4,
            }}
          >
            Get a Quote <ArrowRight size={18} />
          </a>
          <a
            href="tel:+61425780997"
            className="inline-flex items-center gap-2 px-7 py-4"
            style={{
              border: "1.5px solid #FAFAFA",
              color: "#FAFAFA",
              fontWeight: 600,
              fontSize: 16,
              borderRadius: 4,
            }}
          >
            <Phone size={16} /> Call +61 425 780 997
          </a>
        </div>
      </div>
    </section>
  );
}
