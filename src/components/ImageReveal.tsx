import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ImageReveal = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const images = [
    '/product1.png',
    '/product2.jpeg',
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      const progress = Math.max(
        0,
        Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight * 0.01))
      );

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate distance - responsive based on screen size
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate distance - starts at max (apart) and decreases to 0 (together)
  const maxDistance = isMobile ? 180 : 180;
  const distance = isMobile 
    ? (1.3 - scrollProgress) * maxDistance 
    : (1 - scrollProgress) * maxDistance;

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] py-16 md:py-24"
      style={{
        background: '#ffffff',
      }}
    >
      <div className="container-main px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Images Section - Left Side */}
          <div className="order-2 md:order-1">
            <div className="relative flex items-center justify-center md:justify-start gap-4">
              {/* First Image */}
              <div 
                className="relative flex-shrink-0"
                style={{
                  width: isMobile ? '240px' : '300px',
                  transform: isMobile 
                    ? 'translateX(0)' 
                    : `translateX(-${distance}px)`,
                  transition: 'transform 0.1s ease-out',
                }}
              >
                <div className="relative overflow-hidden rounded-lg md:rounded-xl">
                  <img
                    src={images[0]}
                    alt="Product 1"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Second Image */}
              <div 
                className="relative flex-shrink-0"
                style={{
                  width: isMobile ? '190px' : '240px',
                  transform: `translateX(${distance}px)`,
                  transition: 'transform 0.1s ease-out',
                }}
              >
                <div className="relative overflow-hidden rounded-lg md:rounded-xl">
                  <img
                    src={images[1]}
                    alt="Product 2"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Section - Right Side */}
          <div className="order-1 md:order-2">
            <div className="text-right md:text-right">
              {/* Features List */}
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span>עדכונים מלאים על כל הפעולות שהלקוחות מבצעים באפליקציה</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span>צפייה ושליטה בזמן אמת בכל הזמנות התורים של הלקוחות</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span>שליטה מלאה בניראות האפליקציה מתוך תפריט הניהול</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span>שליחת התראות ללקוחות בכל רגע נתון</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageReveal;
