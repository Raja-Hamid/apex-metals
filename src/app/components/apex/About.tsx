import { ImageWithFallback } from "../common/ImageWithFallback";
import { Eyebrow } from "./Eyebrow";

const STATS = [
  ["20+", "Years"],
  ["DOOR", "to Door"],
  ["48HR", "Pickup"],
  ["TOP $", "in NSW"],
];

export function About() {
  return (
    <section
      id="about"
      style={{ background: "#FAFAFA", borderBottom: "1px solid #E5E7EB" }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5">
            <div
              style={{ aspectRatio: "4/5", overflow: "hidden", background: "#1C2025" }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1588111814605-e36ef22dcfa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Apex Metals pickup truck"
                className="w-full h-full object-cover"
                style={{ filter: "saturate(0.55) contrast(1.05) brightness(0.9)" }}
              />
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Eyebrow>05 / Who We Are</Eyebrow>
            <h2
              style={{
                fontSize: "clamp(26px, 4.2vw, 48px)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                lineHeight: 1.08,
                color: "#111418",
              }}
            >
              Family-run. We come to you. Built for the long haul.
            </h2>
            <p style={{ fontSize: 17, color: "#607D8B", lineHeight: 1.7 }}>
              Apex Metals has been moving steel and copper across NSW for more than two decades. We
              don't run a yard, we run a fleet. Our trucks come to you, weigh on certified mobile
              scales, and pay you before they leave.
            </p>
            <p style={{ fontSize: 17, color: "#607D8B", lineHeight: 1.7 }}>
              That's how we keep prices the highest in NSW: no overheads dragging your rate down,
              no time wasted hauling your own scrap, no haggling at a weighbridge. Just one phone
              call, one crew, one fair price.
            </p>

            <div
              className="grid grid-cols-2 md:grid-cols-4 mt-6"
              style={{ borderTop: "1px solid #E5E7EB" }}
            >
              {STATS.map(([num, label], i) => (
                <div
                  key={label}
                  className="py-6 px-4"
                  style={{
                    borderRight:
                      i < STATS.length - 1 ? "1px solid #E5E7EB" : "none",
                    borderBottom:
                      i < 2 ? "1px solid #E5E7EB" : "none",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: 36,
                      color: "#2E7D32",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {num}
                  </div>
                  <div
                    className="uppercase"
                    style={{
                      fontWeight: 700,
                      fontSize: 11,
                      color: "#607D8B",
                      letterSpacing: "0.18em",
                      marginTop: 8,
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
