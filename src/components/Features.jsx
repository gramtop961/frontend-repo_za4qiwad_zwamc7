import Reveal from './Reveal';

export default function Features() {
  const items = [
    { label: '0-60 mph', value: '1.9s' },
    { label: 'Top Speed', value: 'Over 250 mph' },
    { label: 'Range', value: '620 miles' },
    { label: 'Torque', value: '10,000 Nm' },
  ];

  return (
    <section id="specs" className="relative bg-black">
      {/* Ambient grid + soft vignette */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:40px_40px] opacity-[0.05]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_-10%,rgba(239,68,68,0.12),transparent),radial-gradient(1000px_500px_at_50%_120%,rgba(255,255,255,0.04),transparent)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {items.map((it, i) => (
              <Reveal key={it.label} delay={60 * i}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center text-white">
                  <div className="text-3xl font-semibold drop-shadow-[0_0_24px_rgba(239,68,68,0.25)]">{it.value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-widest text-white/60">{it.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
