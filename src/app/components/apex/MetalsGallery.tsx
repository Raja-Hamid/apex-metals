import { ImageWithFallback } from "../common/ImageWithFallback";
import { Eyebrow } from "./Eyebrow";
import acImg from "@/assets/air-conditioner.png";
import batteryImg from "@/assets/car-battery.png";
import stainlessImg from "@/assets/stainless-steel.png";

const METALS = [
  {
    name: "Copper",
    grade: "Non-Ferrous · Premium",
    desc: "Bare bright wire, bus bar, tube and stripped cable. Cleanest grade earns the top rate.",
    img: "https://images.unsplash.com/photo-1714352069805-e0bf94d1381f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    name: "Aluminium",
    grade: "Non-Ferrous · Light",
    desc: "Extrusions, sheet, crushed cans, window frames, wheels and castings.",
    img: "https://images.unsplash.com/photo-1767341372202-89cbaa6b5c87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    name: "Catalytic Converters",
    grade: "Non-Ferrous · Premium",
    desc: "Whole cats, de-canned units and aftermarket pieces assayed for platinum, palladium and rhodium content.",
    img: "https://images.unsplash.com/photo-1759419281419-b04552b2691a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    name: "Wire & Electrical Cables",
    grade: "Non-Ferrous",
    desc: "Insulated power cable, data runs, armoured cable and strip-out reels.",
    img: "https://images.unsplash.com/photo-1717667745852-a5bd6876c1de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    name: "Air Conditioners",
    grade: "Mixed · Whitegoods",
    desc: "Old split systems, ducted units, window rattlers. We disconnect, load and pay.",
    img: acImg,
  },
  {
    name: "Stainless Steel",
    grade: "Non-Ferrous · Premium",
    desc: "304 and 316 grade sheet, tube, sinks, benches, kitchen fitouts and food-grade vessels.",
    img: stainlessImg,
  },
  {
    name: "Car Batteries",
    grade: "Non-Ferrous · Hazardous",
    desc: "Lead-acid car and truck batteries, UPS cells, forklift batteries handled safely.",
    img: batteryImg,
  },
  {
    name: "Mechanical Scrap",
    grade: "Mixed · Industrial",
    desc: "Gears, bearings, hydraulic rams, pumps, valves and end-of-life machinery parts.",
    img: "https://images.unsplash.com/photo-1567093322503-341d262ad8f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];

export function MetalsGallery() {
  return (
    <section
      id="what-we-buy"
      style={{ background: "#FAFAFA", borderBottom: "1px solid #E5E7EB" }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-6 flex flex-col gap-4">
            <Eyebrow>02 / What We Deal In</Eyebrow>
            <h2
              style={{
                fontSize: "clamp(26px, 4.2vw, 48px)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                lineHeight: 1.08,
                color: "#111418",
              }}
            >
              Every grade we collect, straight from your door.
            </h2>
          </div>
          <div className="lg:col-span-6 flex items-end">
            <p style={{ fontSize: 18, color: "#607D8B", lineHeight: 1.6, maxWidth: 540 }}>
              Ferrous, non-ferrous, mixed loads or single-grade clean. If it's metal, we'll come and grade it on-site. No sorting required, no trips to a yard.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {METALS.map((m) => (
            <article
              key={m.name}
              className="group flex flex-col"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: 4,
                overflow: "hidden",
                transition: "border-color 200ms ease, transform 200ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#2E7D32";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#E5E7EB";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ aspectRatio: "4/3", overflow: "hidden", background: "#1C2025" }}>
                <ImageWithFallback
                  src={m.img}
                  alt={m.name}
                  className="w-full h-full object-cover"
                  style={{ filter: "saturate(0.7) contrast(1.05)" }}
                />
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div
                  className="uppercase"
                  style={{
                    fontWeight: 700,
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    color: "#607D8B",
                  }}
                >
                  {m.grade}
                </div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    color: "#111418",
                  }}
                >
                  {m.name}
                </h3>
                <p style={{ fontSize: 14, color: "#607D8B", lineHeight: 1.55 }}>{m.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div
          className="mt-14 p-6 sm:p-10 flex flex-col md:flex-row items-center text-center md:text-left justify-between gap-6"
          style={{ background: "#1C2025", borderRadius: 4 }}
        >
          <div>
            <h3
              style={{
                color: "#FAFAFA",
                fontSize: 24,
                fontWeight: 700,
                letterSpacing: "-0.01em",
              }}
            >
              Got something not on this list? We probably take it.
            </h3>
            <p style={{ color: "#9CA3AF", fontSize: 15, marginTop: 8 }}>
              Mixed loads, awkward sizes, hard-to-move pieces. Send a photo, we'll come look.
            </p>
          </div>
          <a
            href="#get-a-quote"
            className="inline-flex items-center gap-2 px-7 py-4 whitespace-nowrap"
            style={{
              background: "#2E7D32",
              color: "#FAFAFA",
              fontWeight: 600,
              fontSize: 15,
              borderRadius: 4,
            }}
          >
            Book a Pickup
          </a>
        </div>
      </div>
    </section>
  );
}
