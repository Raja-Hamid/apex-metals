import { useState } from "react";
import { ArrowRight, Check, Phone, Mail } from "lucide-react";
import { Eyebrow } from "./Eyebrow";

export function QuoteForm() {
  const [role, setRole] = useState("Business");
  const [unit, setUnit] = useState<"kg" | "tonnes">("kg");

  return (
    <section
      id="get-a-quote"
      style={{ background: "#FAFAFA", borderBottom: "1px solid #E5E7EB" }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-10 gap-8 lg:gap-12">
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Eyebrow>04 / Get a Quote</Eyebrow>
              <h2
                style={{
                  fontSize: "clamp(26px, 4vw, 44px)",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.1,
                  color: "#111418",
                }}
              >
                Tell us what you've got. We'll tell you what it's worth.
              </h2>
              <p style={{ fontSize: 17, color: "#607D8B", lineHeight: 1.6 }}>
                Send photos, tonnage or a rough description. A trader will get back to you with a
                firm price within two business hours.
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {["No obligation", "Reply within 2 business hours", "Your details stay with us"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span
                      className="flex items-center justify-center"
                      style={{
                        width: 22,
                        height: 22,
                        background: "#2E7D32",
                        borderRadius: "50%",
                      }}
                    >
                      <Check size={14} color="#FAFAFA" strokeWidth={3} />
                    </span>
                    <span style={{ fontSize: 15, color: "#111418", fontWeight: 500 }}>{item}</span>
                  </li>
                ),
              )}
            </ul>

            <div
              className="pt-8 flex flex-col gap-3"
              style={{ borderTop: "1px solid #E5E7EB" }}
            >
              <Eyebrow>Direct Line</Eyebrow>
              <a
                href="tel:+61425780997"
                className="flex items-center gap-3"
                style={{
                  fontSize: 32,
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "#111418",
                }}
              >
                <Phone size={26} />
                +61 425 780 997
              </a>
              <a
                href="mailto:traders@apexmetals.com.au"
                className="inline-flex items-center gap-2"
                style={{ color: "#607D8B", fontSize: 15 }}
              >
                <Mail size={15} />
                traders@apexmetals.com.au
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <form
              className="p-6 sm:p-10 flex flex-col gap-6"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: 4,
                boxShadow: "0 1px 2px rgba(17,20,24,0.04), 0 8px 24px rgba(17,20,24,0.04)",
              }}
              onSubmit={(e) => {
                e.preventDefault();
                alert("Quote request submitted. A trader will be in touch shortly.");
              }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full Name" required name="name" />
                <Field label="Phone" required name="phone" />
              </div>
              <Field label="Email" name="email" type="email" />

              <div>
                <Label>I am a</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Business", "Individual"].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setRole(opt)}
                      className="px-4 py-2.5"
                      style={{
                        border: role === opt ? "1.5px solid #2E7D32" : "1px solid #E5E7EB",
                        background: role === opt ? "rgba(46,125,50,0.06)" : "#FFFFFF",
                        color: role === opt ? "#2E7D32" : "#111418",
                        fontWeight: 600,
                        fontSize: 13,
                        borderRadius: 999,
                        transition: "all 150ms ease",
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label>Estimated quantity</Label>
                <div
                  className="mt-2 flex items-center"
                  style={{ border: "1px solid #E5E7EB", borderRadius: 4 }}
                >
                  <input
                    type="text"
                    placeholder="e.g. 250"
                    className="flex-1 px-4 py-3.5 outline-none"
                    style={{ fontSize: 15, background: "transparent" }}
                  />
                  <div className="flex" style={{ borderLeft: "1px solid #E5E7EB" }}>
                    {(["kg", "tonnes"] as const).map((u) => (
                      <button
                        key={u}
                        type="button"
                        onClick={() => setUnit(u)}
                        className="px-3 py-3.5"
                        style={{
                          background: unit === u ? "#37474F" : "transparent",
                          color: unit === u ? "#FAFAFA" : "#607D8B",
                          fontWeight: 600,
                          fontSize: 13,
                        }}
                      >
                        {u}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <Label>Brief description of materials</Label>
                <textarea
                  rows={3}
                  className="w-full mt-2 px-4 py-3.5 outline-none"
                  style={{
                    border: "1px solid #E5E7EB",
                    borderRadius: 4,
                    fontSize: 15,
                    resize: "vertical",
                    background: "#FFFFFF",
                  }}
                  placeholder="e.g. Mixed copper bus bar offcuts and aluminium extrusions from a fitout strip-out."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 inline-flex items-center justify-center gap-2"
                style={{
                  background: "#2E7D32",
                  color: "#FAFAFA",
                  fontWeight: 700,
                  fontSize: 16,
                  borderRadius: 4,
                  transition: "background 150ms ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#66BB6A")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#2E7D32")}
              >
                Get My Quote <ArrowRight size={18} />
              </button>

              <p
                style={{ fontSize: 12, color: "#607D8B", textAlign: "center" }}
              >
                Protected. We never share your details.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="uppercase"
      style={{
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.18em",
        color: "#607D8B",
      }}
    >
      {children}
    </span>
  );
}

function Field({
  label,
  required,
  name,
  type = "text",
}: {
  label: string;
  required?: boolean;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <Label>
        {label} {required && <span style={{ color: "#2E7D32" }}>*</span>}
      </Label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full mt-2 px-4 py-3.5 outline-none"
        style={{
          border: "1px solid #E5E7EB",
          borderRadius: 4,
          fontSize: 15,
          color: "#111418",
          background: "#FFFFFF",
        }}
        onFocus={(e) => (e.currentTarget.style.outline = "2px solid #2E7D32")}
        onBlur={(e) => (e.currentTarget.style.outline = "none")}
      />
    </div>
  );
}
