export default function Features() {
  const items = [
    { label: '0-60 mph', value: '1.9s' },
    { label: 'Top Speed', value: 'Over 250 mph' },
    { label: 'Range', value: '620 miles' },
    { label: 'Torque', value: '10,000 Nm' },
  ];

  return (
    <section id="specs" className="relative bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(255,0,0,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-white/90">
              <div className="text-3xl font-semibold">{it.value}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-white/60">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
