import { useEffect, useMemo, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import Reveal from './Reveal';

export default function Hero() {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [enable3D, setEnable3D] = useState(false);

  // Allow swapping the model via env without code changes
  const sceneUrl = useMemo(() => {
    const envUrl = import.meta.env.VITE_SPLINE_SCENE?.trim();
    return envUrl && envUrl.startsWith('http') ? envUrl : '';
  }, []);

  // Respect user preference and only mount when in view
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setInView(true);
        });
      },
      { root: null, threshold: 0.15 }
    );

    if (containerRef.current) io.observe(containerRef.current);

    // Auto-enable 3D only if conditions are good and a lightweight scene URL is provided
    const connection = navigator.connection || navigator.webkitConnection || navigator.mozConnection;
    const isGoodNetwork = connection ? /^(4g)$/i.test(connection.effectiveType || '') : true;

    if (!prefersReduced && isGoodNetwork && sceneUrl) setEnable3D(true);

    return () => io.disconnect();
  }, [sceneUrl]);

  return (
    <section id="overview" ref={containerRef} className="relative min-h-[100vh] w-full overflow-hidden bg-black">
      {/* Ambient grid + gradients reminiscent of the reference */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(239,68,68,0.16),transparent),radial-gradient(1000px_500px_at_50%_120%,rgba(255,255,255,0.04),transparent)]" />
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:40px_40px] opacity-[0.07]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      {/* 3D canvas (lazy/conditional) as a subtle backdrop on the right for large screens */}
      <div className="absolute inset-0">
        {enable3D && inView && sceneUrl ? (
          <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2">
            <Spline scene={sceneUrl} style={{ width: '100%', height: '100%' }} />
          </div>
        ) : (
          <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(500px_500px_at_60%_40%,rgba(239,68,68,0.15),transparent)]" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[70vh]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-widest uppercase text-white/70">
                Next‑gen Electric Supercar
              </span>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="mt-5 text-5xl sm:text-7xl font-semibold tracking-tight text-white drop-shadow-[0_4px_40px_rgba(255,0,0,0.35)]">
                Tesla Roadster
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-xl">
                The quickest car in the world with record‑setting acceleration, range and performance. A new era of speed meets futuristic minimal design.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#order" className="inline-flex items-center justify-center rounded-full bg-red-600 hover:bg-red-500 text-white px-6 py-3 text-sm font-medium transition-colors shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
                  Place Deposit
                </a>
                <a href="#specs" className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 text-sm font-medium transition-colors">
                  Explore Specs
                </a>
                {sceneUrl && (
                  <button
                    type="button"
                    onClick={() => setEnable3D((v) => !v)}
                    className="ml-auto inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80 hover:bg-white/10 transition-colors"
                  >
                    {enable3D ? 'Disable 3D' : 'Enable 3D'}
                  </button>
                )}
                {!sceneUrl && (
                  <span className="text-xs text-white/60">
                    3D preview disabled for speed. Provide a Spline link to enable.
                  </span>
                )}
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-10 flex flex-wrap gap-2 text-xs">
                {['Overview', 'Technology', 'Media', 'Design', 'Pricing'].map((t) => (
                  <a
                    key={t}
                    href={`#${t.toLowerCase()}`}
                    className="rounded-full border border-white/10 bg-white/0 hover:bg-white/5 px-3 py-1.5 text-white/70 hover:text-white transition"
                  >
                    {t}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Visual card stack to echo reference site composition */}
          <div className="hidden lg:block">
            <div className="relative ml-8">
              <div className="absolute -inset-10 -z-10 rounded-[28px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(239,68,68,0.18),transparent_30%)] blur-2xl" />
              <div className="grid gap-4">
                <Reveal delay={60}>
                  <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                    <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop" alt="Roadster front angle" className="h-full w-full object-cover" />
                  </div>
                </Reveal>
                <div className="grid grid-cols-2 gap-4">
                  <Reveal delay={120}>
                    <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                      <img src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop" alt="Wheel detail" className="h-full w-full object-cover" />
                    </div>
                  </Reveal>
                  <Reveal delay={160}>
                    <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                      <img src="https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?q=80&w=1600&auto=format&fit=crop" alt="Interior" className="h-full w-full object-cover" />
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
