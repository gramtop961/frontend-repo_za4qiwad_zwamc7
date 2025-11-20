export default function Testimonials() {
  const quotes = [
    {
      quote: "A gravity‑defying display of electric performance.",
      author: "Auto Weekly",
    },
    {
      quote: "The future of supercars is here—and it’s silent.",
      author: "Drive Magazine",
    },
    {
      quote: "Design that slices the air and stuns the senses.",
      author: "Motor Focus",
    },
  ];

  return (
    <section className="relative bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_120%,rgba(239,68,68,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <figure key={q.author} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <blockquote className="text-white/90">“{q.quote}”</blockquote>
              <figcaption className="mt-4 text-white/60 text-sm">{q.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
