import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import invokerLogo from '/lovable-uploads/c49f4370-49e4-46ff-8d59-13be0f72224a.png';

export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState('BR');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoTransform = isScrolled ? 'scale(0.6)' : 'translate(-50%, -50%) scale(1)';
  
  return (
    <>
      {/* Top Navigation Bar */}
      <div className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${isScrolled ? 'opacity-100 h-20 bg-background/80 backdrop-blur-lg border-b border-border/50' : 'opacity-0 h-0'}`}>
        <div className="h-full flex items-center px-8">
          {/* Space for logo */}
          <div className="w-16 h-16"></div>
        </div>
      </div>

      {/* Language Buttons */}
      <div className={`fixed top-8 right-8 z-50 transition-all duration-500 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="flex gap-3">
          <Button
            variant={language === 'BR' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setLanguage('BR')}
            className="w-12 h-10 p-0 font-bold"
          >
            BR
          </Button>
          <Button
            variant={language === 'GB' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setLanguage('GB')}
            className="w-12 h-10 p-0 font-bold"
          >
            GB
          </Button>
        </div>
      </div>

      <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-hero overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-quas rounded-full opacity-20 animate-float blur-xl"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-wex rounded-full opacity-20 animate-float blur-xl" style={{
          animationDelay: '1s'
        }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-exort rounded-full opacity-20 animate-float blur-xl" style={{
          animationDelay: '2s'
        }}></div>
        </div>

        {/* Main Logo */}
        <div className={`${isScrolled ? 'fixed top-2 left-2' : 'fixed top-1/2 left-1/2'} z-50 transition-all duration-700 ease-out ${isScrolled ? 'cursor-pointer' : ''}`} style={{
        transform: logoTransform,
        transformOrigin: isScrolled ? 'top left' : 'center center'
      }} onClick={isScrolled ? () => window.scrollTo({
        top: 0,
        behavior: 'smooth'
      }) : undefined}>
          <div className="relative">
            <img 
              src={invokerLogo} 
              alt="InvokerTech Logo" 
              className={`${isScrolled ? 'w-16 h-16' : 'w-64 h-64'} rounded-full magic-glow transition-all duration-700 ${!isScrolled ? 'animate-pulse-glow' : ''}`} 
            />
            <div className="absolute inset-0 rounded-full bg-gradient-mystical opacity-30"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className={`text-center space-y-8 transition-all duration-700 ${isScrolled ? 'opacity-0 transform translate-y-10' : 'opacity-100'}`} style={{
        marginTop: '320px'
      }}>
          
          {/* Company Name */}
          <h1 className="text-6xl md:text-8xl font-bold gradient-text animate-scale-in">
            InvokerTech
          </h1>

          {/* Tagline */}
          <div className="space-y-4 animate-slide-up" style={{
          animationDelay: '0.3s'
        }}>
            <p className="text-2xl md:text-3xl text-quas font-medium">
              Trazendo uma nova era de tecnologia
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Bringing a new age of technology
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-8 animate-slide-up" style={{
          animationDelay: '0.6s'
        }}>
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-quas hover:bg-gradient-wex text-background font-bold rounded-full transition-all duration-300 hover:scale-105 magic-glow" onClick={() => {
            const contactSection = document.getElementById('contact');
            contactSection?.scrollIntoView({
              behavior: 'smooth'
            });
          }}>
              Fale Conosco / Contact Us
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-6 h-10 border-2 border-quas rounded-full flex justify-center">
            <div className="w-1 h-3 bg-quas rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>
    </>
  );
};