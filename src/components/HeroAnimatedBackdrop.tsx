/**
 * Lightweight animated hero background — CSS only (no canvas/WebGL).
 * Layers: mesh gradients, slow rotation, aurora pulse, drifting light beam, subtle grid.
 */

const HeroAnimatedBackdrop = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#020617]" aria-hidden>
      {/* Base depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_100%_at_50%_100%,#0f172a_0%,#020617_45%,#000_100%)]" />

      {/* Primary mesh — slow rotate for depth */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(180vw,180vh)] w-[min(180vw,180vh)] will-change-transform motion-safe:animate-hero-mesh-a">
        <div
          className="h-full w-full rounded-full opacity-[0.55] blur-[72px] sm:blur-[100px]"
          style={{
            background:
              'conic-gradient(from 200deg at 50% 50%, hsl(221 83% 48% / 0.45), transparent 32%, hsl(187 85% 42% / 0.35), transparent 58%, hsl(230 76% 50% / 0.3), transparent 82%)',
          }}
        />
      </div>

      {/* Secondary mesh — counter-rotation, cooler tone */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(140vw,140vh)] w-[min(140vw,140vh)] will-change-transform motion-safe:animate-hero-mesh-b">
        <div
          className="h-full w-full rounded-[40%] opacity-40 blur-[80px] sm:blur-[110px]"
          style={{
            background:
              'conic-gradient(from 90deg at 50% 50%, transparent 0%, hsl(199 89% 48% / 0.35) 35%, transparent 55%, hsl(221 83% 40% / 0.25) 78%, transparent 100%)',
          }}
        />
      </div>

      {/* Soft floating orbs (existing brand motion, tighter to hero) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[20%] top-[15%] h-[min(55vw,28rem)] w-[min(55vw,28rem)] rounded-full bg-primary/20 blur-[100px] motion-safe:animate-orb" />
        <div
          className="absolute -right-[15%] bottom-[10%] h-[min(50vw,26rem)] w-[min(50vw,26rem)] rounded-full bg-cyan-500/15 blur-[90px] motion-safe:animate-orb"
          style={{ animationDelay: '-9s' }}
        />
      </div>

      {/* Aurora veil — gentle opacity pulse */}
      <div className="pointer-events-none absolute inset-0 motion-safe:animate-hero-aurora bg-[radial-gradient(ellipse_90%_60%_at_50%_0%,hsl(221_83%_53%/0.22),transparent_55%)] mix-blend-screen" />

      {/* Diagonal light beam — slow drift */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-[40%] top-[5%] h-[140%] w-[55%] motion-safe:animate-hero-beam bg-gradient-to-b from-transparent via-white/[0.07] to-transparent blur-[1px]" />
      </div>

      {/* Mesh grid — subtle breathe */}
      <div
        className="pointer-events-none absolute inset-0 motion-safe:animate-hero-grid-breathe mix-blend-overlay"
        style={{
          backgroundImage: `linear-gradient(hsl(217 91% 60% / 0.07) 1px, transparent 1px),
            linear-gradient(90deg, hsl(217 91% 60% / 0.07) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Micro stars — static, very light */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage: `radial-gradient(1px 1px at 15% 25%, rgba(255,255,255,0.5), transparent),
            radial-gradient(1px 1px at 55% 18%, rgba(255,255,255,0.35), transparent),
            radial-gradient(1.5px 1.5px at 80% 40%, rgba(255,255,255,0.45), transparent),
            radial-gradient(1px 1px at 70% 78%, rgba(255,255,255,0.3), transparent),
            radial-gradient(1px 1px at 30% 85%, rgba(255,255,255,0.35), transparent)`,
          backgroundSize: '100% 100%',
        }}
      />

      {/* Readability: vignette + top focus for headline */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/88 via-slate-950/72 to-slate-950/92" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_12%,hsl(221_83%_53%/0.18),transparent_52%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_100%_85%,hsl(187_85%_42%/0.12),transparent)]" />
    </div>
  );
};

export default HeroAnimatedBackdrop;
