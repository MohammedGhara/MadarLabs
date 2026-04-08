import { useEffect, useRef, type ReactNode } from 'react';

const observerOptions: IntersectionObserverInit = {
  root: null,
  rootMargin: '0px 0px -48px 0px',
  threshold: 0.06,
};

interface ScrollRevealSectionProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollRevealSection({ children, className = '' }: ScrollRevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal-section ${className}`}>
      {children}
    </div>
  );
}
