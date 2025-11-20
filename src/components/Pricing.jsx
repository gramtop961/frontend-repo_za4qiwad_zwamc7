import Reveal from './Reveal';

export default function Pricing() {
  const tiers = [
    {
      name: "Base",
      price: "$199,000",
      features: ["Tri-Motor AWD", "0-60 in 1.9s", "620-mile range"],
      highlight: false,
    },
    {
      name: "Founders",
      price: "$250,000",
      features: ["Limited Edition", "Priority Delivery", "Exclusive Badging"],
      highlight: true,
    },
  ];

  return (
    <section id="pricing" className="relative bg-neutral-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:40px_40px] opacity-[0.04]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_-10%,rgba(239,68,68,0.12),transparent_60%)]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Reserve your build</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-3 text-white/80">Two configurations. Same obsession with speed. Choose your path to the future.</p>
          </Reveal>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <div
                className={`relative rounded-3xl border p-8 backdrop-blur bg-white/[0.03] ${t.highlight ? 'border-red-500/40 shadow-[0_0_40px_rgba(239,68,68,0.2)]' : 'border-white/10'}`}
              >
                {t.highlight && (
                  <div className="absolute -top-3 left-6 rounded-full bg-red-600 text-white text-xs px-3 py-1">Popular</div>
                )}
                <div className="flex items-baseline justify-between">
                  <h3 className="text-2xl text-white font-semibold">{t.name}</h3>
                  <div className="text-white/90 text-xl">{t.price}</div>
                </div>
                <ul className="mt-6 space-y-2 text-white/70 text-sm">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500" /> {f}
                    </li>
                  ))}
                </ul>
                <a href="#order" className="mt-8 inline-flex rounded-full bg-red-600 hover:bg-red-500 text-white text-sm px-5 py-2.5">Reserve</a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
