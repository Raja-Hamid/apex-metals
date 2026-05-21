import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { Logo } from "./Logo";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = scrolled;
  const linkColor = dark ? "#FAFAFA" : "#111418";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: dark ? "#1C2025" : "#FAFAFA",
        borderBottom: dark ? "1px solid #2A2F36" : "1px solid #E5E7EB",
        transition: "background 200ms ease, color 200ms ease, border-color 200ms ease",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-3">
        <Logo variant={dark ? "light" : "dark"} />
        <nav className="hidden lg:flex items-center gap-8">
          {["Services", "What We Buy", "Process", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
              style={{
                color: linkColor,
                fontWeight: 500,
                fontSize: 14,
                letterSpacing: "-0.01em",
              }}
              className="hover:text-[#2E7D32] transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-5">
          <a
            href="tel:+61425780997"
            className="hidden md:flex items-center gap-2"
            style={{ color: linkColor, fontWeight: 600, fontSize: 14 }}
          >
            <Phone size={16} />
            +61 425 780 997
          </a>
          <a
            href="#get-a-quote"
            className="px-5 py-2.5 inline-flex items-center"
            style={{
              background: "#2E7D32",
              color: "#FAFAFA",
              fontWeight: 600,
              fontSize: 14,
              borderRadius: 4,
              transition: "background 150ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#66BB6A")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#2E7D32")}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
}
