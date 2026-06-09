import { lazy, Suspense, type ComponentType, type LazyExoticComponent, type ReactNode } from 'react';

type AnyProps = Record<string, unknown>;

/** Lazy-load a section chunk when it is first rendered (below-fold code splitting). */
export function lazySection<P extends AnyProps>(
  factory: () => Promise<{ default: ComponentType<P> }>
): LazyExoticComponent<ComponentType<P>> {
  return lazy(factory);
}

export function SectionSuspense({ children }: { children: ReactNode }) {
  return <Suspense fallback={null}>{children}</Suspense>;
}
