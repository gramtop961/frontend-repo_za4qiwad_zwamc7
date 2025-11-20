import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Overview", href: "#overview" },
    { label: "Performance", href: "#specs" },
    { label: "Design", href: "#design" },
    { label: "Order", href: "#order" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="text-white text-xl font-semibold tracking-wider">
            Roadster
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="#order"
              className="hidden sm:inline-flex rounded-full bg-red-600/90 hover:bg-red-600 text-white px-4 py-2 text-sm font-medium transition-colors"
            >
              Reserve
            </a>
            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-white/80"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-6 space-y-2">
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
    </header>
  );
}
