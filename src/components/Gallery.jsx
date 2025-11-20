export default function Gallery() {
  const shots = [
    { id: 1, label: "Front Quarter", src: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=1600&q=80&auto=format&fit=crop" },
    { id: 2, label: "Rear Aero", src: "https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM2MjQzMTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" },
    { id: 3, label: "Interior", src: "https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM2MjQzMTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" },
    { id: 4, label: "Wheels", src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80&auto=format&fit=crop" },
    { id: 5, label: "Spoiler", src: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1600&q=80&auto=format&fit=crop" },
    { id: 6, label: "Roof", src: "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?w=1600&q=80&auto=format&fit=crop" },
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
          {shots.map((s) => (
            <div
              key={s.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02]"
            >
              <img
                src={s.src}
                alt={s.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.16),transparent_60%)]" />
              <div className="absolute inset-x-0 bottom-0 p-3 text-xs tracking-widest uppercase text-white/80 bg-gradient-to-t from-black/60 to-transparent">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
