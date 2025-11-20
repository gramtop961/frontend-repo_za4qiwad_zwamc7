import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Overview", href: "#overview" },
    { label: "Technology", href: "#technology" },
    { label: "Media", href: "#media" },
    { label: "Gallery", href: "#gallery" },
    { label: "Design", href: "#design" },
    { label: "Pricing", href: "#pricing" },
    { label: "Quiz", href: "#quiz" },
    { label: "Order", href: "#order" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Gradient border + glass */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl">
          <div className="h-14 px-4 sm:px-6 flex items-center justify-between">
            <a href="#overview" className="text-white text-sm sm:text-base font-semibold tracking-widest uppercase">
              Roadster
            </a>
            <nav className="hidden md:flex items-center gap-5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <a
                href="#order"
                className="hidden sm:inline-flex rounded-full bg-red-600/90 hover:bg-red-600 text-white px-4 py-2 text-sm font-medium shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
              >
                Reserve
              </a>
              <button
                className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-white/80 bg-white/5"
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
          {open && (
            <div className="md:hidden border-t border-white/10 px-4 pb-4 grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-white/80 hover:text-white hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
