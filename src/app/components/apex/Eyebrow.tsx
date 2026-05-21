type Props = { children: React.ReactNode; tone?: "default" | "light" };

export function Eyebrow({ children, tone = "default" }: Props) {
  return (
    <div
      style={{
        color: tone === "light" ? "#9CA3AF" : "#607D8B",
        fontWeight: 700,
        fontSize: 11,
        letterSpacing: "0.18em",
      }}
      className="uppercase"
    >
      {children}
    </div>
  );
}
