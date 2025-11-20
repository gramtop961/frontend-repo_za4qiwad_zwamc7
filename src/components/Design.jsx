export default function Design() {
  return (
    <section id="design" className="relative bg-gradient-to-b from-black to-neutral-950">
      <div className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Form meets function</h2>
          <p className="mt-4 text-white/80">
            Roadster is engineered for maximum aerodynamic efficiency and performance. A sleek silhouette, minimal details and an interior focused on the driver.
          </p>
          <ul className="mt-8 space-y-3 text-white/80">
            <li className="flex gap-3"><span className="text-red-500">•</span> All-electric supercar with unparalleled range</li>
            <li className="flex gap-3"><span className="text-red-500">•</span> Glass roof for an immersive open-air experience</li>
            <li className="flex gap-3"><span className="text-red-500">•</span> Minimalist cockpit with advanced driver display</li>
          </ul>
        </div>
        <div className="h-72 sm:h-96 rounded-3xl overflow-hidden border border-white/10 bg-[radial-gradient(circle_at_70%_30%,rgba(255,0,0,0.25),transparent_40%)]">
          <div className="w-full h-full bg-[conic-gradient(at_70%_30%,rgba(255,255,255,0.1),transparent_30%)]" />
        </div>
      </div>
    </section>
  );
}
