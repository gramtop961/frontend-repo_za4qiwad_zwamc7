import { useEffect, useMemo, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [enable3D, setEnable3D] = useState(false);

  // Allow swapping the model via env without code changes
  const sceneUrl = useMemo(() => {
    const envUrl = import.meta.env.VITE_SPLINE_SCENE?.trim();
    return envUrl && envUrl.startsWith('http')
      ? envUrl
      : '';
  }, []);

  // Respect user preference and only mount when in view
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { root: null, threshold: 0.2 }
    );

    if (containerRef.current) io.observe(containerRef.current);

    // Auto-enable 3D only if conditions are good and a lightweight scene URL is provided
    const connection = navigator.connection || navigator.webkitConnection || navigator.mozConnection;
    const isGoodNetwork = connection ? /^(4g)$/i.test(connection.effectiveType || '') : true;

    if (!prefersReduced && isGoodNetwork && sceneUrl) {
      setEnable3D(true);
    }

    return () => io.disconnect();
  }, [sceneUrl]);

  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden" id="overview" ref={containerRef}>
      {/* 3D canvas (lazy/conditional) */}
      <div className="absolute inset-0">
        {enable3D && inView && sceneUrl ? (
          <Spline scene={sceneUrl} style={{ width: '100%', height: '100%' }} />
        ) : (
          <div className="h-full w-full bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(239,68,68,0.22),transparent),radial-gradient(1000px_500px_at_50%_120%,rgba(0,0,0,0.8),#000)]" />
        )}
      </div>

      {/* Enhanced lighting overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-x-40 -top-40 h-80 blur-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.35),transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-64 w-64 rounded-full bg-red-500/10 blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-widest uppercase text-white/70">
            Next‑gen Electric Supercar
          </span>
          <h1 className="mt-5 text-5xl sm:text-7xl font-semibold tracking-tight text-white drop-shadow-[0_4px_40px_rgba(255,0,0,0.35)]">
            Tesla Roadster
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80">
            The quickest car in the world, with record‑setting acceleration, range and performance. A new era of speed meets a futuristic, minimal design.
          </p>

          {/* Controls */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#order" className="inline-flex items-center justify-center rounded-full bg-red-600 hover:bg-red-500 text-white px-6 py-3 text-sm font-medium transition-colors">
              Reserve Now
            </a>
            <a href="#specs" className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 text-sm font-medium transition-colors">
              View Specs
            </a>

            {/* Toggle for 3D to protect performance when heavy */}
            {!sceneUrl && (
              <span className="text-xs text-white/60">
                3D preview is disabled to keep the site fast. Share a lightweight Spline link to enable it.
              </span>
            )}
            {sceneUrl && (
              <button
                type="button"
                onClick={() => setEnable3D((v) => !v)}
                className="ml-auto inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80 hover:bg-white/10 transition-colors"
              >
                {enable3D ? 'Disable 3D' : 'Enable 3D'}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
