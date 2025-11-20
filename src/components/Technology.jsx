import { Cpu, Gauge, Shield, Battery } from "lucide-react";

export default function Technology() {
  const tech = [
    {
      icon: <Gauge className="w-6 h-6 text-red-500" />,
      title: "Tri‑Motor All‑Wheel Drive",
      desc: "Uncompromising traction and control with torque vectoring at all four wheels.",
    },
    {
      icon: <Battery className="w-6 h-6 text-red-500" />,
      title: "Next‑Gen Battery System",
      desc: "High‑density cells engineered for extreme performance and long‑range cruising.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-red-500" />,
      title: "Autopilot Hardware 4",
      desc: "Vision‑first autonomy stack with redundant compute and surround cameras.",
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: "Active Safety",
      desc: "Real‑time monitoring with over‑the‑air updates to continuously improve.",
    },
  ];

  return (
    <section id="technology" className="relative bg-neutral-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_60%_0%,rgba(239,68,68,0.12),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Technology that leads</h2>
          <p className="mt-4 text-white/80">From powertrain to software, every system is optimized for speed, safety, and efficiency.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tech.map((t) => (
            <div key={t.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_-10%,rgba(239,68,68,0.18),transparent_50%)]" />
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-white/5 grid place-items-center mb-4 border border-white/10">
                  {t.icon}
                </div>
                <h3 className="text-white font-medium">{t.title}</h3>
                <p className="mt-2 text-white/70 text-sm leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
