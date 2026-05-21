import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer
      id="contact"
      style={{ background: "#1C2025", color: "#9CA3AF", borderTop: "1px solid #2A2F36" }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div className="flex flex-col gap-5">
          <Logo variant="light" />
          <p style={{ fontSize: 14, lineHeight: 1.6 }}>
            Premium metal recycling for NSW. Honest weights, every load.
          </p>
          <p style={{ fontSize: 13, lineHeight: 1.6, color: "#6B7280" }}>
            Doorstep pickups across
            <br />
            Greater Sydney & NSW
          </p>
        </div>

        <FooterCol
          title="Services"
          links={[
            { label: "Household Pickup", href: "#services" },
            { label: "Commercial Collection", href: "#services" },
            { label: "Demolition", href: "#services" },
            { label: "Vehicle Removal", href: "#services" },
          ]}
        />
        <FooterCol
          title="Company"
          links={[
            { label: "About", href: "#about" },
            { label: "Process", href: "#process" },
            { label: "What We Buy", href: "#what-we-buy" },
            { label: "Get a Quote", href: "#get-a-quote" },
          ]}
        />

        <div className="flex flex-col gap-3">
          <ColTitle>Contact</ColTitle>
          <a href="tel:+61425780997" style={{ fontSize: 14, color: "#FAFAFA", fontWeight: 600 }}>
            +61 425 780 997
          </a>
          <a href="mailto:apexmetalpickup@gmail.com" style={{ fontSize: 14 }}>
            apexmetalpickup@gmail.com
          </a>
          <div className="mt-4">
            <ColTitle>Pickup Hours</ColTitle>
            <table style={{ fontSize: 13, marginTop: 8 }}>
              <tbody>
                {[
                  ["Mon–Fri", "7am – 5pm"],
                  ["Saturday", "8am – 1pm"],
                  ["Sunday", "Closed"],
                ].map(([d, h]) => (
                  <tr key={d}>
                    <td style={{ padding: "3px 16px 3px 0", color: "#6B7280" }}>{d}</td>
                    <td style={{ color: "#FAFAFA" }}>{h}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div
        className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ borderTop: "1px solid #2A2F36", fontSize: 12 }}
      >
        <div style={{ color: "#6B7280" }}>
          © {new Date().getFullYear()} Apex Metals
        </div>
      </div>
    </footer>
  );
}

function ColTitle({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="uppercase"
      style={{
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.18em",
        color: "#FAFAFA",
      }}
    >
      {children}
    </span>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <ColTitle>{title}</ColTitle>
      {links.map((l) => (
        <a key={l.label} href={l.href} style={{ fontSize: 14 }} className="hover:text-white">
          {l.label}
        </a>
      ))}
    </div>
  );
}
