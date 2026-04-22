import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

/**
 * Hero background: phone-forward 3D ecosystem (glass panels, connectors, crystals, web frame).
 * Inspired by premium app-dev art direction — toned for MadarLabs navy / cyan / violet.
 */
const HeroBackground3D = () => {
  const { dir } = useLanguage();
  const rtl = dir === 'rtl';

  const sceneTransform = rtl
    ? 'rotateX(12deg) rotateY(24deg) scale(1.02)'
    : 'rotateX(12deg) rotateY(-24deg) scale(1.02)';

  const blendScrim = rtl
    ? 'linear-gradient(180deg, #020617 0%, transparent 30%), linear-gradient(270deg, #020617 0%, rgba(2,6,23,0.58) 12%, rgba(2,6,23,0.1) 44%, transparent 70%)'
    : 'linear-gradient(180deg, #020617 0%, transparent 30%), linear-gradient(90deg, #020617 0%, rgba(2,6,23,0.58) 12%, rgba(2,6,23,0.1) 44%, transparent 70%)';

  return (
    <div
      className={cn(
        'pointer-events-none absolute z-[5] select-none',
        'bottom-0 top-24 sm:top-20 lg:top-0',
        rtl ? 'left-0 lg:left-[-2%]' : 'right-0 lg:right-[-2%]',
        'h-[min(42vh,340px)] w-full max-lg:max-h-[300px]',
        'lg:h-full lg:min-h-[min(100svh,900px)] lg:w-[min(94vw,880px)]'
      )}
      aria-hidden
    >
      <div
        className={cn(
          'relative mx-auto h-full w-full max-w-[540px] lg:mx-0',
          rtl ? 'lg:ml-0' : 'lg:mr-0',
          'max-lg:translate-y-2 max-lg:scale-[0.9] lg:max-w-none lg:translate-y-0 lg:scale-100'
        )}
      >
        <div
          className={cn(
            'absolute inset-0 opacity-[0.4] sm:opacity-[0.52] lg:opacity-[0.9]',
            'max-lg:mix-blend-screen lg:mix-blend-normal'
          )}
        >
          <div className="absolute inset-0 [perspective:1180px]" style={{ perspective: '1180px' }}>
            <div
              className="absolute inset-0 origin-center [transform-style:preserve-3d] max-lg:scale-[0.76] lg:scale-100"
              style={{ transform: sceneTransform, transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 [transform-style:preserve-3d] motion-safe:animate-hero-showcase-drift-y">
                {/* Ambient glow — cyan / blue focal */}
                <div
                  className="absolute left-[52%] top-[48%] h-[125%] w-[125%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,hsl(221_83%_55%/0.38)_0%,hsl(187_85%_48%/0.14)_38%,transparent_65%)] blur-[58px] sm:blur-[76px]"
                  style={{ transform: 'translate(-50%, -50%) translateZ(-130px)' }}
                />

                {/* Faceted crystals — subtle, reference-style depth */}
                <div
                  className="absolute left-[6%] top-[18%] h-16 w-10 opacity-50 sm:h-20 sm:w-12 sm:opacity-[0.55]"
                  style={{
                    transform: 'translateZ(-35px) rotate(-12deg)',
                    clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
                    background:
                      'linear-gradient(168deg, rgba(56,189,248,0.45), rgba(99,102,241,0.15), rgba(15,23,42,0.5))',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12), 0 12px 32px rgba(56,189,248,0.08)',
                  }}
                />
                <div
                  className="absolute right-[8%] top-[42%] h-12 w-9 opacity-35 sm:opacity-40"
                  style={{
                    transform: 'translateZ(-22px) rotate(22deg)',
                    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                    background: 'linear-gradient(200deg, rgba(129,140,248,0.35), rgba(34,211,238,0.12))',
                  }}
                />
                <div
                  className="absolute right-[18%] bottom-[12%] h-10 w-7 opacity-30 sm:opacity-35"
                  style={{
                    transform: 'translateZ(-48px) rotate(-8deg)',
                    clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
                    background: 'linear-gradient(190deg, rgba(56,189,248,0.25), rgba(30,58,138,0.35))',
                  }}
                />

                {/* Ground orbit — slow spin under composition */}
                <div
                  className="absolute w-[min(78%,22rem)] [transform-style:preserve-3d]"
                  style={{
                    left: '44%',
                    top: '72%',
                    transform: 'translate(-50%, -50%) translateZ(-60px) rotateX(78deg)',
                  }}
                >
                  <div className="aspect-[2.4/1] w-full rounded-[50%] border border-dashed border-cyan-400/[0.14] bg-gradient-to-t from-cyan-500/[0.04] to-transparent shadow-[0_0_48px_rgba(56,189,248,0.06)] motion-safe:animate-hero-orbit-spin" />
                </div>

                {/* Soft glass slab — back layer */}
                <div
                  className="absolute left-[4%] top-[24%] h-[46%] w-[36%] rounded-2xl border border-white/[0.06] bg-gradient-to-br from-slate-500/[0.07] to-slate-950/[0.02] shadow-[0_28px_56px_-24px_rgba(0,0,0,0.55)] backdrop-blur-[3px]"
                  style={{
                    transform: rtl
                      ? 'translateZ(-36px) rotateY(10deg) rotateX(5deg)'
                      : 'translateZ(-36px) rotateY(-10deg) rotateX(5deg)',
                  }}
                />

                {/* Browser — secondary “web” layer */}
                <div
                  className={cn(
                    'absolute top-[3%] w-[76%] overflow-hidden rounded-2xl border border-white/[0.12] bg-slate-950/[0.68] shadow-[0_28px_56px_-22px_rgba(0,0,0,0.6)] backdrop-blur-md',
                    rtl ? 'right-[3%] left-auto' : 'left-[3%]'
                  )}
                  style={{
                    height: '38%',
                    transform: rtl
                      ? 'translateZ(-4px) rotateY(6deg)'
                      : 'translateZ(-4px) rotateY(-6deg)',
                  }}
                >
                  <div className="flex h-8 items-center gap-1.5 border-b border-white/[0.07] bg-black/45 px-2.5 sm:h-9 sm:px-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400/70 sm:h-2 sm:w-2" />
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400/70 sm:h-2 sm:w-2" />
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/65 sm:h-2 sm:w-2" />
                    <div className="ml-1.5 flex-1 truncate rounded bg-white/[0.05] px-2 py-0.5 text-[7px] font-medium text-white/30 sm:text-[8px]">
                      madarlabs.com
                    </div>
                  </div>
                  <div className="flex h-[calc(100%-2rem)] gap-2 p-2.5 sm:p-3">
                    <div className="flex flex-[1.1] flex-col gap-1.5 rounded-lg border border-primary/18 bg-gradient-to-br from-primary/[0.14] to-transparent p-2">
                      <div className="h-1 w-[45%] rounded bg-white/[0.1]" />
                      <div className="mt-auto h-8 rounded-md bg-white/[0.06] sm:h-9" />
                    </div>
                    <div className="flex flex-1 flex-col gap-1 rounded-lg border border-cyan-400/12 bg-cyan-500/[0.06] p-1.5">
                      <div className="h-5 rounded bg-cyan-400/12 sm:h-6" />
                      <div className="h-4 rounded bg-white/[0.05]" />
                    </div>
                  </div>
                </div>

                {/* Glowing connector paths */}
                <svg
                  className="absolute inset-0 h-full w-full overflow-visible"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  style={{ transform: 'translateZ(4px)' }}
                >
                  <defs>
                    <linearGradient id="heroWireA" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(56,189,248,0)" />
                      <stop offset="45%" stopColor="rgba(56,189,248,0.35)" />
                      <stop offset="100%" stopColor="rgba(129,140,248,0.2)" />
                    </linearGradient>
                    <linearGradient id="heroWireB" x1="100%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="rgba(34,211,238,0)" />
                      <stop offset="50%" stopColor="rgba(34,211,238,0.28)" />
                      <stop offset="100%" stopColor="rgba(99,102,241,0.15)" />
                    </linearGradient>
                  </defs>
                  {rtl ? (
                    <>
                      <path
                        d="M 72 58 Q 55 48 32 32"
                        fill="none"
                        stroke="url(#heroWireA)"
                        strokeWidth="0.35"
                        vectorEffect="non-scaling-stroke"
                        className="opacity-70"
                      />
                      <path
                        d="M 68 72 Q 52 62 38 55"
                        fill="none"
                        stroke="url(#heroWireB)"
                        strokeWidth="0.22"
                        vectorEffect="non-scaling-stroke"
                        className="opacity-50"
                      />
                    </>
                  ) : (
                    <>
                      <path
                        d="M 28 58 Q 45 48 68 32"
                        fill="none"
                        stroke="url(#heroWireA)"
                        strokeWidth="0.35"
                        vectorEffect="non-scaling-stroke"
                        className="opacity-70"
                      />
                      <path
                        d="M 32 72 Q 48 62 62 55"
                        fill="none"
                        stroke="url(#heroWireB)"
                        strokeWidth="0.22"
                        vectorEffect="non-scaling-stroke"
                        className="opacity-50"
                      />
                    </>
                  )}
                </svg>

                {/* Glass “build shipped” card — check + glow */}
                <div
                  className={cn(
                    'absolute top-[5%] w-[40%] overflow-hidden rounded-2xl border border-white/[0.14] p-2.5 shadow-[0_0_48px_rgba(56,189,248,0.1),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md sm:p-3',
                    rtl ? 'left-[4%] right-auto' : 'right-[4%] left-auto'
                  )}
                  style={{
                    transform: rtl
                      ? 'translateZ(58px) rotateY(-8deg) rotateX(4deg)'
                      : 'translateZ(58px) rotateY(8deg) rotateX(4deg)',
                    background:
                      'linear-gradient(145deg, rgba(59,130,246,0.12), rgba(99,102,241,0.08), rgba(15,23,42,0.65))',
                  }}
                >
                  <div className="flex items-start gap-2 sm:gap-2.5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/35 shadow-[0_0_20px_rgba(52,211,153,0.2)] sm:h-9 sm:w-9">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-emerald-300/95 sm:h-[1.05rem] sm:w-[1.05rem]" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1 space-y-1.5 pt-0.5">
                      <div className="h-1.5 w-[72%] rounded bg-white/[0.14]" />
                      <div className="h-1 w-full rounded bg-white/[0.06]" />
                      <div className="h-1 w-[55%] rounded bg-cyan-300/[0.08]" />
                    </div>
                  </div>
                </div>

                {/* Floating play pill — product / preview hint */}
                <div
                  className={cn(
                    'absolute bottom-[32%] flex h-8 w-[4.5rem] items-center justify-center gap-1.5 rounded-full border border-white/[0.12] bg-white/[0.08] shadow-[0_12px_32px_-8px_rgba(0,0,0,0.45)] backdrop-blur-md sm:h-9 sm:w-[5rem]',
                    rtl ? 'right-[36%] left-auto' : 'left-[36%] right-auto'
                  )}
                  style={{
                    transform: rtl
                      ? 'translateZ(72px) rotateY(-4deg)'
                      : 'translateZ(72px) rotateY(4deg)',
                  }}
                >
                  <span className="ml-0.5 inline-block h-0 w-0 border-y-[5px] border-y-transparent border-l-[7px] border-l-cyan-100/85 sm:border-y-[6px] sm:border-l-[8px]" />
                  <div className="h-1 w-6 rounded-full bg-white/[0.12] sm:w-7" />
                </div>

                {/* Hero handset — thick bezel, tilted 3D */}
                <div
                  className={cn(
                    'absolute bottom-[2%] w-[min(46%,13.5rem)] sm:w-[min(48%,15rem)]',
                    rtl ? 'right-[6%] left-auto' : 'left-[6%] right-auto'
                  )}
                  style={{
                    aspectRatio: '10 / 20.5',
                    transform: rtl
                      ? 'translateZ(96px) rotateX(10deg) rotateY(14deg)'
                      : 'translateZ(96px) rotateX(10deg) rotateY(-14deg)',
                    filter: 'drop-shadow(0 32px 48px rgba(14,116,188,0.22)) drop-shadow(0 0 40px rgba(56,189,248,0.08))',
                  }}
                >
                  <div className="h-full w-full rounded-[1.65rem] bg-gradient-to-br from-cyan-200/25 via-slate-400/20 to-slate-900/95 p-[5px] shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] sm:rounded-[1.85rem] sm:p-[6px]">
                    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[1.35rem] bg-slate-950 sm:rounded-[1.5rem]">
                      <div className="mx-auto mt-2 h-1 w-9 rounded-full bg-black/55 sm:mt-2.5 sm:w-10" />
                      <div className="flex flex-1 flex-col gap-2 p-2.5 sm:gap-2.5 sm:p-3">
                        <div className="flex gap-2">
                          <div className="flex h-9 w-9 flex-col items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] sm:h-10 sm:w-10">
                            <div className="h-3 w-3.5 rounded-sm bg-cyan-300/35" />
                          </div>
                          <div className="flex h-9 w-9 flex-col items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] sm:h-10 sm:w-10">
                            <div className="h-3.5 w-3.5 rounded-full bg-primary/35" />
                          </div>
                          <div className="flex h-9 w-9 flex-col items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] sm:h-10 sm:w-10">
                            <div className="h-3 w-3 rotate-45 border border-violet-300/40 bg-violet-400/15" />
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          <div className="h-1.5 w-[88%] rounded bg-white/[0.1]" />
                          <div className="h-1.5 w-full rounded bg-white/[0.06]" />
                          <div className="h-1.5 w-[64%] rounded bg-white/[0.05]" />
                        </div>
                        <div className="min-h-0 flex-1 rounded-xl border border-white/[0.07] bg-gradient-to-b from-slate-800/40 to-slate-950/80 p-2">
                          <div className="mb-2 flex gap-1">
                            <div className="h-6 flex-1 rounded-lg bg-primary/15 sm:h-7" />
                            <div className="h-6 flex-1 rounded-lg bg-cyan-400/10 sm:h-7" />
                          </div>
                          <div className="h-2 w-3/5 rounded bg-white/[0.06]" />
                          <div className="mt-2 h-16 rounded-lg bg-white/[0.03] sm:h-[4.25rem]" />
                        </div>
                      </div>
                      <div className="mx-auto mb-1.5 h-0.5 w-7 rounded-full bg-white/15 sm:mb-2 sm:w-8" />
                    </div>
                  </div>
                </div>

                {/* Mini metrics strip — dashboard hint */}
                <div
                  className={cn(
                    'absolute bottom-[40%] w-[36%] overflow-hidden rounded-xl border border-white/[0.1] bg-slate-900/[0.75] p-2 shadow-lg backdrop-blur-sm sm:p-2.5',
                    rtl ? 'left-[4%] right-auto' : 'right-[4%] left-auto'
                  )}
                  style={{
                    transform: rtl
                      ? 'translateZ(48px) rotateY(-6deg)'
                      : 'translateZ(48px) rotateY(6deg)',
                  }}
                >
                  <div className="mb-1.5 flex items-center justify-between">
                    <div className="h-1.5 w-10 rounded bg-white/[0.12]" />
                    <div className="h-1.5 w-6 rounded-full bg-cyan-400/20" />
                  </div>
                  <div className="flex h-10 items-end gap-0.5 sm:h-11 sm:gap-1">
                    {[32, 55, 40, 70, 48, 82, 36].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/40 to-cyan-400/25"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Cyan rim light on outer edge */}
                <div
                  className={cn(
                    'absolute bottom-[8%] h-[55%] w-[35%] rounded-3xl blur-2xl',
                    rtl
                      ? '-left-[2%] bg-gradient-to-r from-cyan-400/[0.06] to-transparent'
                      : '-right-[2%] bg-gradient-to-l from-cyan-400/[0.06] to-transparent'
                  )}
                  style={{ transform: 'translateZ(-24px)' }}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{ background: blendScrim }}
        />
      </div>
    </div>
  );
};

export default HeroBackground3D;
