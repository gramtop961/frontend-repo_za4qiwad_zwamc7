import { useEffect, useRef, useState } from 'react';

// In-view reveal wrapper: fades in and slides up by `y` px (default 12) with optional delay (ms)
export default function Reveal({ children, delay = 0, y = 12, className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0px)' : `translateY(${y}px)`,
      }}
      className={`transform-gpu transition-all duration-700 ease-out will-change-[opacity,transform] ${className}`}
    >
      {children}
    </div>
  );
}
