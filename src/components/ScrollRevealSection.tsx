import { useEffect, useRef, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

const OBSERVER_OPTIONS: IntersectionObserverInit = {
  root: null,
  rootMargin: '0px 0px -6% 0px',
  threshold: 0.12,
};

interface ScrollRevealSectionProps {
  children: ReactNode;
  className?: string;
}

/** Reveals an entire block when it enters the viewport */
export default function ScrollRevealSection({ children, className = '' }: ScrollRevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, OBSERVER_OPTIONS);

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn('reveal-section', className)}>
      {children}
    </div>
  );
}

const DELAY_CLASS = [
  '',
  'animate-reveal-delay-1',
  'animate-reveal-delay-2',
  'animate-reveal-delay-3',
  'animate-reveal-delay-4',
  'animate-reveal-delay-5',
  'animate-reveal-delay-6',
  'animate-reveal-delay-7',
  'animate-reveal-delay-8',
] as const;

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger index 0–8 for transition delay */
  delay?: number;
}

/** Reveals a single element when it scrolls into view */
export function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, OBSERVER_OPTIONS);

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = DELAY_CLASS[Math.min(Math.max(delay, 0), 8)];

  return (
    <div ref={ref} className={cn('animate-reveal', delayClass, className)}>
      {children}
    </div>
  );
}
