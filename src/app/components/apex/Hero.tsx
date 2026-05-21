import {ArrowRight, Truck, Clock, BadgeCheck, MapPin, type LucideIcon} from "lucide-react";
import {ImageWithFallback} from "../common/ImageWithFallback";

type Stat = { icon: LucideIcon; value: string; label: string };
type DoorToDoorRow = { icon: LucideIcon; text: string };

const HERO_STATS: Stat[] = [
    {icon: Truck, value: "Home & B2B", label: "Door to door"},
    {icon: BadgeCheck, value: "Best $", label: "Top NSW rates"},
    {icon: Clock, value: "Same Day", label: "Paid on collection"},
];

const DOOR_TO_DOOR: DoorToDoorRow[] = [
    {icon: Truck, text: "We come to you"},
    {icon: BadgeCheck, text: "Weighed on the spot"},
    {icon: Clock, text: "Paid before we leave"},
];

export function Hero() {
    return (
        <section
            className="relative pt-[72px] overflow-hidden"
            style={{background: "#FAFAFA", borderBottom: "1px solid #E5E7EB"}}
        >
            {/* Faint engineering grid on the left */}
            <div
                aria-hidden
                className="absolute inset-y-0 left-0 w-1/2 pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(96,125,139,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(96,125,139,0.06) 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                    maskImage:
                        "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                    WebkitMaskImage:
                        "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                }}
            />

            <div
                className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center lg:min-h-[92vh] py-12 lg:py-16">
                <div className="lg:col-span-6 flex flex-col gap-8 relative">
                    <h1
                        style={{
                            fontSize: "clamp(36px, 7.5vw, 104px)",
                            fontWeight: 800,
                            letterSpacing: "-0.025em",
                            lineHeight: 0.98,
                            color: "#111418",
                        }}
                    >
                        We Come.
                        <span style={{color: "#37474F"}}> We Weigh. </span>
                        <span
                            style={{
                                color: "#2E7D32",
                                fontStyle: "italic",
                                fontWeight: 800,
                            }}
                        >
    We Pay.
  </span>
                    </h1>

                    <p
                        style={{
                            fontSize: 20,
                            color: "#37474F",
                            lineHeight: 1.55,
                            maxWidth: 560,
                            fontWeight: 400,
                        }}
                    >
                        From household clear-outs to factory floors, fabrication shops and demolition sites,
                        Apex Metals collects scrap right from your door, weighs it in front of you, and pays
                        before we leave. <strong style={{color: "#111418", fontWeight: 700}}>The best price in
                        NSW</strong>, without you lifting a finger.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <a
                            href="#get-a-quote"
                            className="inline-flex items-center gap-2 px-7 py-4"
                            style={{
                                background: "#2E7D32",
                                color: "#FAFAFA",
                                fontWeight: 600,
                                fontSize: 16,
                                borderRadius: 4,
                                boxShadow: "0 1px 2px rgba(46,125,50,0.2), 0 8px 24px rgba(46,125,50,0.15)",
                                transition: "background 150ms ease",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = "#66BB6A")}
                            onMouseLeave={(e) => (e.currentTarget.style.background = "#2E7D32")}
                        >
                            Book a Pickup <ArrowRight size={18}/>
                        </a>
                        <a
                            href="tel:+61425780997"
                            className="inline-flex items-center gap-2 px-7 py-4"
                            style={{
                                color: "#111418",
                                fontWeight: 600,
                                fontSize: 16,
                                border: "1.5px solid #111418",
                                borderRadius: 4,
                                background: "#FAFAFA",
                            }}
                        >
                            Call +61 425 780 997
                        </a>
                    </div>

                    <div
                        className="grid grid-cols-3 mt-2"
                        style={{borderTop: "1px solid #E5E7EB"}}
                    >
                        {HERO_STATS.map(({icon: Icon, value, label}, i) => (
                            <div
                                key={label}
                                className="py-5 px-4"
                                style={{
                                    borderRight: i < HERO_STATS.length - 1 ? "1px solid #E5E7EB" : "none",
                                }}
                            >
                                <Icon size={18} color="#2E7D32"/>
                                <div
                                    style={{
                                        fontWeight: 800,
                                        fontSize: 18,
                                        color: "#111418",
                                        letterSpacing: "-0.01em",
                                        marginTop: 10,
                                    }}
                                >
                                    {value}
                                </div>
                                <div
                                    style={{
                                        fontWeight: 700,
                                        fontSize: 10,
                                        color: "#607D8B",
                                        letterSpacing: "0.18em",
                                        marginTop: 4,
                                    }}
                                    className="uppercase"
                                >
                                    {label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right column — cinematic image stack */}
                <div className="lg:col-span-6 relative">
                    <div className="relative grid grid-cols-6 grid-rows-6 gap-3" style={{aspectRatio: "5/6"}}>
                        {/* Big primary image */}
                        <div
                            className="relative overflow-hidden col-span-6 row-span-5"
                            style={{
                                background: "#1C2025",
                                borderRadius: 4,
                            }}
                        >
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1764116858740-832d0f86b86b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400"
                                alt="Apex Metals crew loading scrap onto a truck at a customer's doorstep"
                                className="w-full h-full object-cover"
                                style={{filter: "saturate(0.55) contrast(1.08) brightness(0.92)"}}
                            />
                            {/* Bottom vignette for legibility */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    background:
                                        "linear-gradient(180deg, rgba(28,32,37,0) 50%, rgba(28,32,37,0.85) 100%)",
                                }}
                            />
                            {/* Top-left scene tag */}
                            <div
                                className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5"
                                style={{
                                    background: "rgba(28,32,37,0.7)",
                                    backdropFilter: "blur(8px)",
                                    WebkitBackdropFilter: "blur(8px)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    color: "#FAFAFA",
                                    fontWeight: 700,
                                    fontSize: 10,
                                    letterSpacing: "0.22em",
                                    borderRadius: 999,
                                }}
                            >
                                <MapPin size={12} color="#66BB6A"/>
                                <span className="uppercase">Doorstep · Parramatta</span>
                            </div>

                            {/* Bottom caption */}
                            <div className="absolute bottom-5 left-5 right-5">
                                <div
                                    className="uppercase"
                                    style={{
                                        color: "#9CA3AF",
                                        fontWeight: 700,
                                        fontSize: 10,
                                        letterSpacing: "0.22em",
                                        marginBottom: 6,
                                    }}
                                >
                                    Job · 09:42 · Driveway pickup
                                </div>
                                <div
                                    style={{
                                        color: "#FAFAFA",
                                        fontSize: 18,
                                        fontWeight: 600,
                                        letterSpacing: "-0.01em",
                                        lineHeight: 1.3,
                                        maxWidth: 360,
                                    }}
                                >
                                    Crew on-site, mobile scales out, ticket printed in under 20 minutes.
                                </div>
                            </div>

                            {/* Floating "How it works" mini-card */}
                            <div
                                className="hidden sm:block absolute top-5 right-5 p-4 w-[230px] max-w-[45%]"
                                style={{
                                    background: "rgba(28,32,37,0.78)",
                                    backdropFilter: "blur(10px)",
                                    WebkitBackdropFilter: "blur(10px)",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    color: "#FAFAFA",
                                    borderRadius: 4,
                                }}
                            >
                                <div
                                    className="uppercase mb-3"
                                    style={{
                                        color: "#9CA3AF",
                                        fontWeight: 700,
                                        fontSize: 10,
                                        letterSpacing: "0.22em",
                                    }}
                                >
                                    Door to Door
                                </div>
                                {DOOR_TO_DOOR.map(({icon: Icon, text}, i) => (
                                    <div
                                        key={text}
                                        className="flex items-center gap-3 py-2"
                                        style={{
                                            borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.08)",
                                        }}
                                    >
                                        <Icon size={14} color="#66BB6A"/>
                                        <span style={{fontSize: 12, fontWeight: 600}}>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom detail tile */}
                        <div
                            className="relative overflow-hidden col-span-6 row-span-1"
                            style={{background: "#1C2025", borderRadius: 4}}
                        >
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1714352069805-e0bf94d1381f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                                alt="Copper scrap close-up"
                                className="w-full h-full object-cover"
                                style={{filter: "saturate(0.7) contrast(1.05)"}}
                            />
                            <div
                                className="absolute inset-0 flex items-end p-3"
                                style={{
                                    background:
                                        "linear-gradient(180deg, rgba(28,32,37,0) 30%, rgba(28,32,37,0.85) 100%)",
                                }}
                            >
                <span
                    className="uppercase"
                    style={{
                        color: "#FAFAFA",
                        fontWeight: 700,
                        fontSize: 10,
                        letterSpacing: "0.22em",
                    }}
                >
                  Copper · Premium
                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
