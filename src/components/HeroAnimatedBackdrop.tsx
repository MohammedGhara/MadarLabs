/**
 * Hero atmosphere — restrained so the right-side 3D background reads as the focal art.
 * CSS only: soft mesh, gentle aurora, light grid, vignette (no busy center blobs).
 */

const HeroAnimatedBackdrop = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#020617]" aria-hidden>
      {/* Base depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_100%_at_50%_100%,#0f172a_0%,#020617_45%,#000_100%)]" />

      {/* Primary mesh — slower, softer, pushed slightly right (pairs with HeroBackground3D) */}
      <div className="pointer-events-none absolute left-[58%] top-1/2 h-[min(150vw,150vh)] w-[min(150vw,150vh)] -translate-x-1/2 -translate-y-1/2 will-change-transform motion-safe:animate-hero-mesh-a">
        <div
          className="h-full w-full rounded-full opacity-[0.28] blur-[88px] sm:blur-[110px]"
          style={{
            background:
              'conic-gradient(from 200deg at 50% 50%, hsl(221 83% 48% / 0.32), transparent 34%, hsl(187 85% 42% / 0.22), transparent 60%, hsl(250 45% 45% / 0.15), transparent 84%)',
          }}
        />
      </div>

      {/* Secondary mesh — counter-rotation, low contrast */}
      <div className="pointer-events-none absolute left-1/2 top-[42%] h-[min(110vw,110vh)] w-[min(110vw,110vh)] -translate-x-1/2 -translate-y-1/2 will-change-transform motion-safe:animate-hero-mesh-b">
        <div
          className="h-full w-full rounded-[42%] opacity-[0.22] blur-[90px] sm:blur-[120px]"
          style={{
            background:
              'conic-gradient(from 90deg at 50% 50%, transparent 0%, hsl(199 89% 48% / 0.2) 38%, transparent 58%, hsl(221 83% 40% / 0.14) 82%, transparent 100%)',
          }}
        />
      </div>

      {/* Single soft orb — anchors lower corner, not center */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -right-[8%] bottom-[6%] h-[min(48vw,22rem)] w-[min(48vw,22rem)] rounded-full bg-cyan-500/[0.09] blur-[100px] motion-safe:animate-orb"
          style={{ animationDelay: '-6s' }}
        />
      </div>

      {/* Aurora — subtle */}
      <div className="pointer-events-none absolute inset-0 motion-safe:animate-hero-aurora bg-[radial-gradient(ellipse_95%_55%_at_70%_0%,hsl(221_83%_53%/0.14),transparent_58%)] mix-blend-screen" />

      {/* Beam — very soft */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-[35%] top-[8%] h-[130%] w-[48%] motion-safe:animate-hero-beam bg-gradient-to-b from-transparent via-white/[0.035] to-transparent blur-[2px]" />
      </div>

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 motion-safe:animate-hero-grid-breathe mix-blend-overlay"
        style={{
          backgroundImage: `linear-gradient(hsl(217 91% 60% / 0.05) 1px, transparent 1px),
            linear-gradient(90deg, hsl(217 91% 60% / 0.05) 1px, transparent 1px)`,
          backgroundSize: '52px 52px',
        }}
      />

      {/* Micro stars */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: `radial-gradient(1px 1px at 18% 22%, rgba(255,255,255,0.45), transparent),
            radial-gradient(1px 1px at 62% 16%, rgba(255,255,255,0.28), transparent),
            radial-gradient(1.5px 1.5px at 88% 38%, rgba(255,255,255,0.38), transparent),
            radial-gradient(1px 1px at 72% 80%, rgba(255,255,255,0.22), transparent)`,
          backgroundSize: '100% 100%',
        }}
      />

      {/* Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/75 to-slate-950/93" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_35%_10%,hsl(221_83%_53%/0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_42%_at_100%_88%,hsl(187_85%_42%/0.1),transparent)]" />
    </div>
  );
};

export default HeroAnimatedBackdrop;
