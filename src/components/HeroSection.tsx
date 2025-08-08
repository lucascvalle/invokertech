import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import invokerLogo from '/lovable-uploads/c49f4370-49e4-46ff-8d59-13be0f72224a.png';

export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoTransform = isScrolled 
    ? 'scale(0.4) translate(-800px, -400px)' 
    : 'translate(-50%, -50%) scale(1)';

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-quas rounded-full opacity-20 animate-float blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-wex rounded-full opacity-20 animate-float blur-xl" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-exort rounded-full opacity-20 animate-float blur-xl" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Logo */}
      <div 
        className={`${isScrolled ? 'fixed top-8 left-8' : 'fixed top-1/2 left-1/2'} z-50 transition-all duration-700 ease-out ${
          isScrolled ? 'cursor-pointer' : ''
        }`}
        style={{
          transform: logoTransform,
          transformOrigin: isScrolled ? 'top left' : 'center center'
        }}
        onClick={isScrolled ? () => window.scrollTo({ top: 0, behavior: 'smooth' }) : undefined}
      >
        <div className="relative">
          <img 
            src={invokerLogo} 
            alt="InvokerTech Logo" 
            className="w-64 h-64 rounded-full magic-glow animate-pulse-glow"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-mystical opacity-30 animate-pulse-glow"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className={`text-center space-y-8 transition-all duration-700 ${
        isScrolled ? 'opacity-0 transform translate-y-10' : 'opacity-100'
      }`} style={{ marginTop: '320px' }}>
        
        {/* Company Name */}
        <h1 className="text-6xl md:text-8xl font-bold gradient-text animate-scale-in">
          InvokerTech
        </h1>

        {/* Tagline */}
        <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-2xl md:text-3xl text-quas font-medium">
            Trazendo uma nova era de tecnologia
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Bringing a new age of technology
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-gradient-quas hover:bg-gradient-wex text-background font-bold rounded-full transition-all duration-300 hover:scale-105 magic-glow"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Fale Conosco / Contact Us
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${
        isScrolled ? 'opacity-0' : 'opacity-100'
      }`}>
        <div className="w-6 h-10 border-2 border-quas rounded-full flex justify-center">
          <div className="w-1 h-3 bg-quas rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};