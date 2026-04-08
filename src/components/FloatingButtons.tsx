import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/config';

const FloatingButtons = () => {
  return (
    <>
      {/* WhatsApp Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-pulse-slow opacity-25 scale-110" />
          <div className="relative w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-[0_8px_32px_-4px_rgba(37,211,102,0.55)] ring-4 ring-[#25D366]/20 flex items-center justify-center hover:brightness-105 hover:scale-[1.06] active:scale-100 transition-all duration-300 ease-out hover:shadow-[0_12px_40px_-4px_rgba(37,211,102,0.65)]">
            <MessageCircle size={28} className="text-white drop-shadow-sm" />
          </div>
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-foreground/95 text-background text-sm font-medium px-4 py-2.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none hidden md:block shadow-lg border border-white/10 translate-x-1 group-hover:translate-x-0">
            Chat with us on WhatsApp
          </div>
        </div>
      </a>
    </>
  );
};

export default FloatingButtons;
