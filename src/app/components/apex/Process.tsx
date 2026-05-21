import { ArrowRight } from "lucide-react";
import { Eyebrow } from "./Eyebrow";

const STEPS = [
  ["01", "Tell Us", "Send a photo or rough description. We confirm a price within 2 hours."],
  ["02", "Pick a Time", "Choose a window that suits you: morning, afternoon, or weekend."],
  ["03", "We Arrive", "Our crew turns up with the truck, scales and gear. You don't lift a thing."],
  ["04", "Get Paid", "Weighed in front of you, paid in cash or instant EFT before we drive off."],
];

export function Process() {
  return (
    <section
      id="process"
      style={{
        background: "#1C2025",
        position: "relative",
        backgroundImage:
          "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0)), radial-gradient(circle at 20% 0%, rgba(102,187,106,0.06), transparent 50%)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-6 flex flex-col gap-4">
            <Eyebrow tone="light">03 / How It Works</Eyebrow>
            <h2
              style={{
                fontSize: "clamp(26px, 4.2vw, 48px)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                lineHeight: 1.08,
                color: "#FAFAFA",
              }}
            >
              Four steps. We do all of them.
            </h2>
          </div>
          <div className="lg:col-span-6 flex items-end">
            <p style={{ fontSize: 18, color: "#9CA3AF", lineHeight: 1.6, maxWidth: 520 }}>
              No yard visits. No hauling your own scrap. No surprise weight cuts. Just one phone
              call from your driveway to a paid invoice.
            </p>
          </div>
        </div>

        <div className="relative">
          <div
            className="hidden md:block absolute"
            style={{
              top: 48,
              left: "12%",
              right: "12%",
              height: 1,
              background: "#2E7D32",
              opacity: 0.6,
            }}
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 relative">
            {STEPS.map(([n, t, d]) => (
              <div key={n} className="flex flex-col gap-5">
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: 96,
                    height: 96,
                    border: "2px solid #66BB6A",
                    borderRadius: "50%",
                    background: "#1C2025",
                    color: "#66BB6A",
                    fontSize: 36,
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {n}
                </div>
                <h3
                  style={{
                    color: "#FAFAFA",
                    fontSize: 22,
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {t}
                </h3>
                <p style={{ color: "#9CA3AF", fontSize: 15, lineHeight: 1.6 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-20 pt-10 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ borderTop: "1px solid #2A2F36" }}
        >
          <p style={{ color: "#FAFAFA", fontSize: 18 }}>
            Book a doorstep pickup in under 2 minutes.
          </p>
          <a
            href="#get-a-quote"
            className="inline-flex items-center gap-2 px-7 py-4"
            style={{
              background: "#2E7D32",
              color: "#FAFAFA",
              fontWeight: 600,
              fontSize: 15,
              borderRadius: 4,
            }}
          >
            Book a Pickup <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
