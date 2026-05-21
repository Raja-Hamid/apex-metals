import { Eyebrow } from "./Eyebrow";

const QUOTES = [
  {
    body: "Apex have been our metals partner across four demolition jobs. They show up when they say they will, the weighbridge tickets are always clean, and we know what we're getting paid before the truck leaves.",
    name: "Marco D.",
    role: "Site Manager",
    company: "Westline Demolition",
  },
  {
    body: "Switched our fabrication offcuts to Apex 18 months ago. Pricing is sharper, the bins are swapped on time, and we have one invoice a month instead of chasing five.",
    name: "Hannah P.",
    role: "Operations Lead",
    company: "Strata Steel Co.",
  },
  {
    body: "Drove in with a ute full of copper from a strip-out. Weighed in five minutes, EFT hit my account before I left the yard. Exactly how it should work.",
    name: "Jules R.",
    role: "Electrical Contractor",
    company: "Southside Sparks",
  },
];

export function Testimonials() {
  return (
    <section style={{ background: "#FAFAFA", borderBottom: "1px solid #E5E7EB" }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col gap-4 mb-14 max-w-2xl">
          <Eyebrow>06 / What Clients Say</Eyebrow>
          <h2
            style={{
              fontSize: "clamp(26px, 4.2vw, 48px)",
              fontWeight: 700,
              letterSpacing: "-0.01em",
              lineHeight: 1.08,
              color: "#111418",
            }}
          >
            Operator-grade trust, on every load.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {QUOTES.map((q) => (
            <div
              key={q.name}
              className="p-6 sm:p-8 flex flex-col gap-6"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: 4,
              }}
            >
              <div
                style={{
                  color: "#66BB6A",
                  fontSize: 64,
                  fontWeight: 800,
                  lineHeight: 0.6,
                  letterSpacing: "-0.04em",
                }}
              >
                “
              </div>
              <p style={{ fontSize: 18, color: "#111418", lineHeight: 1.55 }}>{q.body}</p>
              <div
                className="pt-5 mt-auto"
                style={{ borderTop: "1px solid #E5E7EB" }}
              >
                <div style={{ fontSize: 15, fontWeight: 700, color: "#111418" }}>{q.name}</div>
                <div
                  className="uppercase"
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    color: "#607D8B",
                    marginTop: 6,
                  }}
                >
                  {q.role} · {q.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
