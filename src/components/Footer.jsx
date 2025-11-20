export default function Footer(){
  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/60 text-sm">
        <div>© {new Date().getFullYear()} Roadster — Inspired by Tesla.</div>
        <div className="flex gap-6">
          <a href="#overview" className="hover:text-white">Overview</a>
          <a href="#specs" className="hover:text-white">Performance</a>
          <a href="#design" className="hover:text-white">Design</a>
          <a href="#order" className="hover:text-white">Order</a>
        </div>
      </div>
    </footer>
  )
}
