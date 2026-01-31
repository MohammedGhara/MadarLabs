import { MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/972501234567?text=Hi!%20I%20found%20you%20on%20Instagram%20and%20I'm%20interested%20in%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative">
          {/* Pulse animation */}
          <div className="absolute inset-0 bg-whatsapp rounded-full animate-ping opacity-25" />
          
          {/* Button */}
          <div className="relative w-14 h-14 md:w-16 md:h-16 bg-whatsapp rounded-full shadow-elevated flex items-center justify-center hover:brightness-110 hover:scale-110 transition-all duration-300">
            <MessageCircle size={28} className="text-whatsapp-foreground" />
          </div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-foreground text-background text-sm font-medium px-4 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
            Chat with us on WhatsApp
          </div>
        </div>
      </a>
    </>
  );
};

export default FloatingButtons;
