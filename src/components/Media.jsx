import Reveal from './Reveal';

export default function Media() {
  const videos = [
    {
      id: 'track-tease',
      title: 'On‑track teaser',
      src: 'https://cdn.coverr.co/videos/coverr-red-sportscar-on-the-track-0951/1080p.mp4',
      poster: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
    },
    {
      id: 'studio-reveal',
      title: 'Studio reveal',
      src: 'https://cdn.coverr.co/videos/coverr-epic-car-ride-1977/1080p.mp4',
      poster: 'https://images.unsplash.com/photo-1518552718880-67d5bc130d13?q=80&w=1600&auto=format&fit=crop',
    },
  ];

  const images = [
    'https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
  ];

  return (
    <section id="media" className="relative bg-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:40px_40px] opacity-[0.04]" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_-10%,rgba(239,68,68,0.12),transparent),radial-gradient(900px_500px_at_50%_120%,rgba(255,255,255,0.04),transparent)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Media</h2>
            <p className="mt-2 text-white/80 max-w-2xl">High‑impact visuals and motion—optimized sources with lazy load for speed.</p>
          </div>
          <a href="#gallery" className="hidden sm:inline-block text-sm text-white/70 hover:text-white">Open gallery →</a>
        </div>

        {/* Videos */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {videos.map((v, i) => (
            <Reveal key={v.id} delay={i * 80}>
              <figure className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                <video
                  className="h-full w-full object-cover"
                  controls
                  preload="metadata"
                  poster={v.poster}
                >
                  <source src={`${v.src}#t=0.1`} type="video/mp4" />
                </video>
                <figcaption className="p-4 text-sm text-white/70">{v.title}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Images */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, idx) => (
            <Reveal key={idx} delay={idx * 60}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
                <img
                  src={`${src}&q=80&auto=format&fit=crop`}
                  alt="Roadster visual"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.2),transparent_60%)]" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
