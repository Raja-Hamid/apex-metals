type Props = { variant?: "dark" | "light"; showWordmark?: boolean };

export function Logo({ variant = "dark", showWordmark = true }: Props) {
  const charcoal = variant === "dark" ? "#37474F" : "#FAFAFA";
  const green = variant === "dark" ? "#2E7D32" : "#66BB6A";
  const ink = variant === "dark" ? "#37474F" : "#FAFAFA";
  const soft = variant === "dark" ? "#2E7D32" : "#B0BEC5";

  return (
    <div className="flex items-center gap-3">
      <svg width="40" height="40" viewBox="0 0 240 220" fill="none" aria-hidden>
        <path
          d="M 132.25 32.86 A 88 88 0 0 1 204.59 144.26 L 218.05 148.12 L 182.35 156.00 L 160.37 131.58 L 173.83 135.44 A 56 56 0 0 0 127.79 64.54 Z"
          fill={charcoal}
        />
        <path
          d="M 189.34 174.18 A 88 88 0 0 1 56.70 181.13 L 46.63 190.86 L 57.65 156.00 L 89.79 149.18 L 79.72 158.90 A 56 56 0 0 0 164.13 154.48 Z"
          fill={charcoal}
        />
        <path
          d="M 38.41 152.97 A 88 88 0 0 1 98.71 34.61 L 95.32 21.03 L 120.00 48.00 L 109.84 79.25 L 106.45 65.66 A 56 56 0 0 0 68.08 140.98 Z"
          fill={green}
        />
        <path d="M 96 148 L 120 90 L 144 148 Z" fill={charcoal} />
      </svg>
      {showWordmark && (
        <div className="leading-none">
          <div
            style={{
              color: ink,
              fontWeight: 800,
              fontSize: 16,
              letterSpacing: "0.02em",
            }}
          >
            APEX METALS
          </div>
          <div
            style={{
              color: soft,
              fontWeight: 700,
              fontSize: 9,
              letterSpacing: "0.22em",
              marginTop: 4,
            }}
          >
            METAL&nbsp;&nbsp;RECYCLING
          </div>
        </div>
      )}
    </div>
  );
}
