export default function Gallery() {
  const shots = [
    { id: 1, label: "Front Quarter" },
    { id: 2, label: "Rear Aero" },
    { id: 3, label: "Interior" },
    { id: 4, label: "Wheels" },
    { id: 5, label: "Spoiler" },
    { id: 6, label: "Roof" },
  ];

  return (
    <section id="gallery" className="relative bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_0%,rgba(255,255,255,0.04),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Gallery</h2>
            <p className="mt-3 text-white/80 max-w-xl">A visual study in aerodynamic purity and performance‑first proportions.</p>
          </div>
          <a href="#order" className="hidden sm:inline-block text-sm text-white/70 hover:text-white">Reserve →</a>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {shots.map((s, i) => (
            <div
              key={s.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02]"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.16),transparent_60%)]" />
              <div className="absolute inset-0 grid place-items-center text-white/70 text-xs tracking-widest uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
