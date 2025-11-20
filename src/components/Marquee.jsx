export default function Marquee() {
  const items = [
    "1.9s 0–60 mph",
    "Over 250 mph",
    "620-mile range",
    "Tri‑Motor AWD",
    "Active Aero",
    "Glass Roof",
  ];

  return (
    <div className="relative overflow-hidden bg-black/90 border-y border-white/10">
      <div className="animate-[marquee_20s_linear_infinite] whitespace-nowrap py-4 text-white/60">
        {items.map((t, i) => (
          <span key={i} className="mx-8 tracking-widest uppercase text-xs">{t}</span>
        ))}
      </div>
      <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </div>
  );
}
