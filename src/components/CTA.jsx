import Reveal from './Reveal';

export default function CTA() {
  return (
    <section id="order" className="relative bg-black py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:40px_40px] opacity-[0.04]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.15),transparent_60%)]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-10 backdrop-blur">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white">Reserve your Roadster</h3>
                <p className="mt-2 text-white/70">Be among the first to experience the next generation of performance.</p>
              </div>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-red-600 hover:bg-red-500 text-white px-6 py-3 text-sm font-medium transition-colors"
              >
                Place Deposit
              </a>
            </div>
            <p className="mt-6 text-xs text-white/50">Fully refundable. Delivery timelines subject to regional availability.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
