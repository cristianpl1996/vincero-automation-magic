
import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const FinalCTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (contentRef.current) {
            contentRef.current.classList.add('animate-fade-in');
          }
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <div id="contact" ref={sectionRef} className="py-24 bg-cta-gradient relative overflow-hidden">
      <div className="absolute w-full h-full top-0 left-0">
        <div className="absolute w-96 h-96 bg-vincero-orange/10 rounded-full blur-3xl top-1/2 -right-20 transform -translate-y-1/2"></div>
        <div className="absolute w-80 h-80 bg-vincero-blue/10 rounded-full blur-3xl top-1/3 -left-20"></div>
      </div>
      
      <div 
        ref={contentRef}
        className="container mx-auto px-6 py-8 relative z-10 opacity-0"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            ¿Listo para llevar tu marketing en iGaming al
            <span className="text-gradient"> siguiente nivel</span>?
          </h2>
          
          <p className="text-xl text-white/80 mb-10">
            Segmenta, automatiza y personaliza en segundos.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="#" 
              className="bg-vincero-orange hover:bg-vincero-orange/90 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center cta-button"
            >
              Solicita una demostración
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            
            <a 
              href="#" 
              className="bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center"
            >
              Conoce más
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="blue-glass-card rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-vincero-lightBlue mb-1">24/7</div>
              <p className="text-sm text-white/70">Soporte técnico</p>
            </div>
            
            <div className="blue-glass-card rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-vincero-orange mb-1">15 días</div>
              <p className="text-sm text-white/70">Prueba gratuita</p>
            </div>
            
            <div className="blue-glass-card rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white mb-1">100%</div>
              <p className="text-sm text-white/70">Personalizable</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;
