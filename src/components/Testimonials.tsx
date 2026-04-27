import { useCallback, useEffect, useMemo, useState, type CSSProperties } from 'react';
import { Star, Quote, Loader2, MessageSquarePlus } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollRevealSection from './ScrollRevealSection';
import {
  fetchVisitorReviews,
  submitVisitorReview,
  REVIEWS_UNAVAILABLE,
  type VisitorReview,
} from '@/api/reviews';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { useIsMobile } from '@/hooks/use-mobile';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type VisitorReviewFieldsProps = {
  rf: Record<string, string>;
  rtl: boolean;
  labelClass: string;
  inputBase: string;
  name: string;
  setName: (v: string) => void;
  email: string;
  setEmail: (v: string) => void;
  role: string;
  setRole: (v: string) => void;
  quote: string;
  setQuote: (v: string) => void;
  rating: number;
  setRating: (v: number) => void;
};

function VisitorReviewFields({
  rf,
  rtl,
  labelClass,
  inputBase,
  name,
  setName,
  email,
  setEmail,
  role,
  setRole,
  quote,
  setQuote,
  rating,
  setRating,
}: VisitorReviewFieldsProps) {
  return (
    <>
      <div className="space-y-3.5 rounded-2xl border border-border/50 bg-card/40 p-4 sm:space-y-4 sm:p-5 dark:border-border/40 dark:bg-card/25">
        <div>
          <label htmlFor="review-name" className={labelClass}>
            {String(rf.nameLabel)} <span className="text-destructive">*</span>
          </label>
          <input
            id="review-name"
            type="text"
            autoComplete="name"
            maxLength={80}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={String(rf.namePlaceholder)}
            className={inputBase}
            dir="auto"
          />
        </div>
        <div>
          <label htmlFor="review-email" className={labelClass}>
            {String(rf.emailLabel)} <span className="text-destructive">*</span>
          </label>
          <input
            id="review-email"
            type="email"
            autoComplete="email"
            inputMode="email"
            maxLength={120}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={String(rf.emailPlaceholder)}
            className={cn(inputBase, 'font-mono text-base tracking-tight sm:text-[0.85rem]')}
            dir="ltr"
            spellCheck={false}
          />
          <p className={cn('mt-1.5 text-[12px] leading-relaxed text-muted-foreground/90', rtl && 'text-right')}>
            {String(rf.emailHint)}
          </p>
        </div>
        <div>
          <label htmlFor="review-role" className={labelClass}>
            {String(rf.roleLabel)} <span className="font-normal text-muted-foreground">({String(rf.optional)})</span>
          </label>
          <input
            id="review-role"
            type="text"
            maxLength={100}
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder={String(rf.rolePlaceholder)}
            className={inputBase}
            dir="auto"
          />
        </div>
      </div>

      <div className="space-y-0 rounded-2xl border border-border/50 bg-card/40 p-4 sm:p-5 dark:border-border/40 dark:bg-card/25">
        <div className="pb-4 sm:pb-5">
          <span className={labelClass}>{String(rf.ratingLabel)}</span>
          <div
            className={cn('mt-2 flex max-w-full flex-wrap justify-center gap-1.5 sm:mt-1.5 sm:justify-start', rtl && 'sm:flex-row-reverse sm:justify-end')}
            role="group"
            aria-label={String(rf.ratingLabel)}
          >
            {[1, 2, 3, 4, 5].map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setRating(s)}
                className="min-h-[48px] min-w-[48px] rounded-xl p-1.5 touch-manipulation transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25 focus-visible:ring-offset-2 focus-visible:ring-offset-card active:scale-95 sm:min-h-0 sm:min-w-0 sm:rounded-lg sm:p-0.5 sm:hover:scale-105"
                aria-label={`${s} / 5`}
              >
                <Star
                  className={cn(
                    'h-7 w-7 sm:h-6 sm:w-6',
                    s <= rating ? 'fill-star text-star' : 'fill-transparent text-muted-foreground/30'
                  )}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-border/45 pt-5 sm:pt-6">
          <label htmlFor="review-text" className={labelClass}>
            {String(rf.reviewLabel)} <span className="text-destructive">*</span>
          </label>
          <textarea
            id="review-text"
            rows={4}
            maxLength={500}
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            placeholder={String(rf.reviewPlaceholder)}
            className={cn(
              inputBase,
              'min-h-[5.75rem] resize-y py-3 text-base leading-relaxed sm:min-h-[5.5rem] sm:resize-y sm:text-sm'
            )}
            dir="auto"
          />
          <p className={cn('mt-1.5 text-end text-[11px] text-muted-foreground/90 tabular-nums', rtl && 'text-start')}>
            {quote.length}/500
          </p>
        </div>
      </div>
    </>
  );
}

type TestimonialItem = { name: string; role: string; quote: string };

type DisplayCard = TestimonialItem & {
  id?: string;
  rating: number;
  fromVisitor: boolean;
  emailMasked?: string;
};

const Testimonials = () => {
  const { t, dir } = useLanguage();
  const rtl = dir === 'rtl';
  const isMobile = useIsMobile();

  /* Unify look: no thick default focus ring; autofill border in index.css. focus-visible = keyboard. */
  const inputBase = cn(
    'w-full appearance-none rounded-xl border border-border/90 bg-card/90 text-foreground',
    'px-3.5 py-2.5 text-base shadow-sm sm:text-sm',
    'placeholder:text-muted-foreground/50',
    'transition-[color,border-color,box-shadow] duration-200',
    'hover:border-border',
    'focus:outline-none focus:ring-0 focus:border-border/90',
    'focus-visible:border-primary/45 focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2 focus-visible:ring-offset-card',
    rtl ? 'text-right' : 'text-left'
  );
  const labelClass = cn(
    'mb-1.5 block text-[13px] font-medium tracking-tight text-foreground/90 sm:mb-2 sm:text-sm',
    rtl ? 'text-right' : 'text-left'
  );

  const testimonials = t('testimonials.items') as unknown as TestimonialItem[];
  const rf = t('testimonials.reviewForm') as Record<string, string>;

  const [visitorReviews, setVisitorReviews] = useState<VisitorReview[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [quote, setQuote] = useState('');
  const [rating, setRating] = useState(5);
  const [submitting, setSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState<{ type: 'ok' | 'err'; text: string } | null>(null);
  const [reviewOpen, setReviewOpen] = useState(false);

  const resetReviewForm = () => {
    setFormMessage(null);
    setName('');
    setEmail('');
    setRole('');
    setQuote('');
    setRating(5);
  };

  const loadVisitors = useCallback(async () => {
    try {
      setVisitorReviews(await fetchVisitorReviews());
    } catch {
      setVisitorReviews([]);
    }
  }, []);

  useEffect(() => {
    void loadVisitors();
  }, [loadVisitors]);

  const cards: DisplayCard[] = useMemo(() => {
    const defaults: DisplayCard[] = (Array.isArray(testimonials) ? testimonials : []).map((item) => ({
      ...item,
      rating: 5,
      fromVisitor: false,
    }));
    const visitors: DisplayCard[] = visitorReviews.map((r) => ({
      name: r.name,
      role: r.role || '',
      quote: r.quote,
      rating: r.rating,
      fromVisitor: true,
      id: r.id,
      emailMasked: r.emailMasked,
    }));
    return [...defaults, ...visitors];
  }, [testimonials, visitorReviews]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormMessage(null);
    const n = name.trim();
    const em = email.trim();
    const q = quote.trim();
    if (n.length < 2) {
      setFormMessage({ type: 'err', text: String(rf.error) });
      return;
    }
    if (!EMAIL_RE.test(em)) {
      setFormMessage({ type: 'err', text: String(rf.emailInvalid) });
      return;
    }
    if (q.length < 15) {
      setFormMessage({ type: 'err', text: String(rf.error) });
      return;
    }
    setSubmitting(true);
    try {
      await submitVisitorReview({
        name: n,
        email: em,
        role: role.trim() || undefined,
        quote: q,
        rating,
      });
      setName('');
      setEmail('');
      setRole('');
      setQuote('');
      setRating(5);
      setFormMessage({ type: 'ok', text: String(rf.success) });
      await loadVisitors();
      window.setTimeout(() => setReviewOpen(false), 2000);
    } catch (err) {
      const msg = err instanceof Error ? err.message : '';
      const friendly =
        msg === REVIEWS_UNAVAILABLE
          ? String(rf.errorApi ?? rf.error)
          : msg || String(rf.error);
      setFormMessage({ type: 'err', text: friendly });
    } finally {
      setSubmitting(false);
    }
  };

  const initial = (fullName: string) => {
    const c = fullName.trim().charAt(0);
    return c || '?';
  };

  const fieldProps: VisitorReviewFieldsProps = {
    rf,
    rtl,
    labelClass,
    inputBase,
    name,
    setName,
    email,
    setEmail,
    role,
    setRole,
    quote,
    setQuote,
    rating,
    setRating,
  };

  const onReviewOpenChange = (open: boolean) => {
    setReviewOpen(open);
    if (!open) resetReviewForm();
  };

  const formStatus = formMessage ? (
    <p
      className={cn(
        'rounded-xl border px-3 py-2.5 text-sm leading-snug',
        formMessage.type === 'ok'
          ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-200'
          : 'border-destructive/35 bg-destructive/[0.07] text-destructive',
        rtl && 'text-right'
      )}
      role="status"
    >
      {formMessage.text}
    </p>
  ) : null;

  const submitButtonClass =
    'btn-primary h-12 w-full touch-manipulation rounded-xl px-4 text-base font-semibold shadow-md transition-all hover:glow-soft active:scale-[0.99] disabled:opacity-60 sm:h-11 sm:py-0 sm:text-sm';

  return (
    <section id="testimonials" className="section-padding relative bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,hsl(221_83%_53%/0.05),transparent)]" />
      <div className="container-main relative">
        <ScrollRevealSection>
          <div className="mb-10 text-center sm:mb-14">
            <span className="animate-reveal section-badge mb-4 inline-flex sm:mb-6">{t('testimonials.badge')}</span>
            <h2 className="animate-reveal animate-reveal-delay-1 mb-3 text-balance text-2xl font-bold tracking-tight text-foreground sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
              {t('testimonials.title')} <span className="text-gradient">{t('testimonials.titleHighlight')}</span>
            </h2>
            <p className="animate-reveal animate-reveal-delay-2 mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
              {t('testimonials.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3">
            {cards.map((item, index) => (
              <div
                key={item.fromVisitor && item.id ? item.id : `default-${index}`}
                className={cn(
                  'card-premium card-hover-lift animate-reveal relative p-4 sm:p-5 md:p-6',
                  index < 2 ? 'animate-reveal-delay-2' : index < 4 ? 'animate-reveal-delay-3' : 'animate-reveal-delay-4'
                )}
              >
                <div className="absolute end-2 top-2 text-primary/10 sm:end-4 sm:top-4 md:end-6 md:top-6">
                  <Quote className="h-5 w-5 sm:h-8 sm:w-8 md:h-10 md:w-10" />
                </div>

                {item.fromVisitor ? (
                  <span className="mb-1.5 inline-block rounded-full border border-primary/20 bg-primary/10 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-primary sm:mb-2 sm:px-2 sm:text-[10px]">
                    {String(rf.visitorBadge)}
                  </span>
                ) : null}

                <div className="mb-2 flex gap-0.5 sm:mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className={cn(
                        'h-3 w-3 sm:h-[15px] sm:w-[15px] md:h-[18px] md:w-[18px]',
                        s <= item.rating ? 'fill-star text-star' : 'fill-transparent text-muted-foreground/35'
                      )}
                    />
                  ))}
                </div>

                <p
                  className="relative z-10 mb-3 line-clamp-4 text-xs text-foreground sm:mb-4 sm:line-clamp-none sm:text-sm md:text-base"
                  dir="auto"
                >
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-primary sm:h-10 sm:w-10 md:h-12 md:w-12">
                    <span className="text-xs font-bold text-white sm:text-sm md:text-base">{initial(item.name)}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold text-foreground sm:text-sm md:text-base" dir="auto">
                      {item.name}
                    </p>
                    {item.role ? (
                      <p className="truncate text-[10px] text-muted-foreground sm:text-xs" dir="auto">
                        {item.role}
                      </p>
                    ) : null}
                    {item.fromVisitor && item.emailMasked ? (
                      <p className="mt-0.5 truncate text-[9px] text-muted-foreground/90 sm:text-[10px]" dir="ltr" title={item.emailMasked}>
                        {item.emailMasked}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="animate-reveal animate-reveal-delay-4 mt-10 flex flex-col items-center sm:mt-14">
            <button
              type="button"
              onClick={() => setReviewOpen(true)}
              className="btn-primary group inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-semibold shadow-md transition-transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.99] sm:px-8"
              aria-haspopup="dialog"
            >
              <MessageSquarePlus className="h-4 w-4 transition-transform group-hover:scale-110" aria-hidden />
              {String(rf.dialogCta ?? rf.title)}
            </button>
          </div>

          {isMobile ? (
            <Drawer
              open={reviewOpen}
              onOpenChange={onReviewOpenChange}
              dismissible={!submitting}
              shouldScaleBackground
            >
              <DrawerContent
                dir={dir}
                onPointerDownOutside={(e) => {
                  if (submitting) e.preventDefault();
                }}
                className="!mt-2 flex max-h-[min(92dvh,100dvh-0.5rem)] flex-col gap-0 rounded-t-2xl border border-border/60 border-b-0 bg-card p-0 shadow-2xl focus:outline-none"
              >
                <DrawerHeader
                  className={cn('space-y-1.5 px-4 pb-1 pt-1 text-start sm:px-5', rtl && 'text-end')}
                >
                  <DrawerTitle className="pe-7 text-balance text-lg font-bold leading-snug text-foreground">
                    {String(rf.title)}
                  </DrawerTitle>
                  <DrawerDescription className={cn('text-sm leading-relaxed', rtl && 'text-end')}>
                    {String(rf.subtitle)}
                  </DrawerDescription>
                </DrawerHeader>
                <form
                  onSubmit={onSubmit}
                  className="flex min-h-0 flex-1 flex-col"
                  noValidate
                >
                  <div
                    className="review-form-scroll min-h-0 flex-1 space-y-4 overflow-y-auto overflow-x-hidden overscroll-contain px-4 pb-1 pt-0.5 sm:px-5"
                    style={{ WebkitOverflowScrolling: 'touch' } as CSSProperties}
                  >
                    <VisitorReviewFields {...fieldProps} />
                    {formStatus}
                  </div>
                  <DrawerFooter className="mb-[max(0.25rem,env(safe-area-inset-bottom))] mt-0 border-t border-border/50 bg-card px-4 py-3 sm:px-5">
                    <button type="submit" disabled={submitting} className={submitButtonClass}>
                      {submitting ? (
                        <span className="inline-flex items-center justify-center gap-2">
                          <Loader2 className="h-4 w-4 shrink-0 animate-spin" aria-hidden />
                          {String(rf.submitting)}
                        </span>
                      ) : (
                        String(rf.submit)
                      )}
                    </button>
                  </DrawerFooter>
                </form>
              </DrawerContent>
            </Drawer>
          ) : (
            <Dialog open={reviewOpen} onOpenChange={onReviewOpenChange}>
              <DialogContent
                dir={dir}
                onPointerDownOutside={(e) => {
                  if (submitting) e.preventDefault();
                }}
                onEscapeKeyDown={(e) => {
                  if (submitting) e.preventDefault();
                }}
                className={cn(
                  'max-h-[min(94dvh,44rem)] w-full gap-0 overflow-hidden rounded-2xl border border-border/50 bg-card p-0 shadow-2xl',
                  'data-[state=open]:duration-300 data-[state=closed]:duration-200',
                  'data-[state=open]:zoom-in-95 data-[state=open]:[animation-timing-function:cubic-bezier(0.16,1,0.3,1)]',
                  'sm:max-w-[min(100vw-1.5rem,32rem)]'
                )}
              >
                <div className="review-form-scroll max-h-[min(92dvh,44rem)] overflow-y-auto overscroll-contain [scrollbar-gutter:stable] px-4 pb-5 pt-5 sm:px-6 sm:pb-6 sm:pt-6">
                  <DialogHeader className={cn('text-start', rtl && 'text-end', 'pe-1')}>
                    <DialogTitle className="pe-4 text-balance text-start text-xl font-bold tracking-tight text-foreground sm:pe-2 sm:text-2xl">
                      {String(rf.title)}
                    </DialogTitle>
                    <DialogDescription
                      className={cn('pt-2 text-sm leading-relaxed text-muted-foreground sm:pt-2.5', rtl && 'text-end')}
                    >
                      {String(rf.subtitle)}
                    </DialogDescription>
                  </DialogHeader>

                  <form onSubmit={onSubmit} className="mt-6 space-y-5 sm:mt-7" noValidate>
                    <VisitorReviewFields {...fieldProps} />
                    {formStatus}
                    <button type="submit" disabled={submitting} className={submitButtonClass}>
                      {submitting ? (
                        <span className="inline-flex items-center justify-center gap-2">
                          <Loader2 className="h-4 w-4 shrink-0 animate-spin" aria-hidden />
                          {String(rf.submitting)}
                        </span>
                      ) : (
                        String(rf.submit)
                      )}
                    </button>
                  </form>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </ScrollRevealSection>
      </div>
    </section>
  );
};

export default Testimonials;
