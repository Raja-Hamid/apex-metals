import { useState } from "react";
import { ArrowRight, Truck, Hammer, Car, Home, type LucideIcon } from "lucide-react";
import { Eyebrow } from "./Eyebrow";

const SERVICES = [
  {
    icon: Home,
    title: "Household Pickup",
    desc: "Old appliances, fencing, tools, garage clear-outs. We knock, we load, we pay. Usually under 20 minutes.",
  },
  {
    icon: Truck,
    title: "Commercial Collection",
    desc: "Scheduled bin and skip swaps for fabricators, builders and manufacturers. We handle the lifting and the paperwork.",
  },
  {
    icon: Hammer,
    title: "Demolition & Site Clearance",
    desc: "End-to-end metal recovery from demolition sites. Crane, shear and torch-cutting on-site. Nothing leaves your site without a ticket.",
  },
  {
    icon: Car,
    title: "End-of-Life Vehicles",
    desc: "Car, Truck and Machinery removal from your driveway. Full deregistration paperwork included.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      style={{ background: "#FAFAFA", borderBottom: "1px solid #E5E7EB" }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-6 flex flex-col gap-4">
            <Eyebrow>01 / Services</Eyebrow>
            <h2
              style={{
                fontSize: "clamp(26px, 4.2vw, 48px)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                lineHeight: 1.08,
                color: "#111418",
              }}
            >
              You stay put. We do the heavy lifting.
            </h2>
          </div>
          <div className="lg:col-span-6 flex items-end">
            <p style={{ fontSize: 18, color: "#607D8B", lineHeight: 1.6, maxWidth: 520 }}>
                From a single AC unit on the kerb to a 40-tonne demolition strip, every job starts at your address, not ours. Homes, factories, fabrication shops and sites.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
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
            Book a Pickup <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="p-6 sm:p-8 flex flex-col gap-5"
      style={{
        background: "#FFFFFF",
        border: hover ? "1px solid #2E7D32" : "1px solid #E5E7EB",
        borderRadius: 4,
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        transition: "all 200ms ease",
      }}
    >
      <Icon size={32} strokeWidth={1.5} color="#37474F" />
      <h3
        style={{
          fontSize: 24,
          fontWeight: 700,
          letterSpacing: "-0.01em",
          color: "#111418",
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: 15, color: "#607D8B", lineHeight: 1.6 }}>{desc}</p>
    </div>
  );
}
