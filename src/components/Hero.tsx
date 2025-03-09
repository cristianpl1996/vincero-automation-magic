
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.classList.add('animate-fade-in');
    }
    if (imageRef.current) {
      setTimeout(() => {
        imageRef.current?.classList.add('animate-slide-in');
      }, 300);
    }
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('how-it-works');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={heroRef}
      className="min-h-screen bg-hero-gradient relative flex items-center overflow-hidden pt-20 section-padding"
    >
      <div className="absolute w-full h-full top-0 left-0">
        <div className="absolute w-80 h-80 bg-vincero-orange/10 rounded-full blur-3xl top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-vincero-blue/10 rounded-full blur-3xl bottom-10 -right-20"></div>
      </div>

      <div className="w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className="opacity-0 space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1 text-sm font-medium text-vincero-lightBlue animate-pulse-slow">
                IA + Automatización para iGaming
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                El sistema de marketing automatizado para 
                <span className="text-gradient"> iGaming </span>
                impulsado por IA
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-xl">
                Analiza datos en segundos, segmenta clientes y lanza campañas hiperpersonalizadas con un par de clics.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="cta-button bg-vincero-orange hover:bg-vincero-orange/90 text-white px-8 py-3 rounded-lg text-base font-semibold flex items-center justify-center"
              >
                Solicita una demostración
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="#how-it-works" 
                className="cta-button bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-lg text-base font-semibold flex items-center justify-center"
              >
                Descubre cómo funciona
              </a>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-white/70">
                <div className="w-2 h-2 bg-vincero-lightBlue rounded-full"></div>
                <span className="text-sm">+ 30% conversión</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <div className="w-2 h-2 bg-vincero-orange rounded-full"></div>
                <span className="text-sm">10X más rápido</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm">80% menos tiempo</span>
              </div>
            </div>
          </div>

          <div ref={imageRef} className="opacity-0 flex justify-center lg:justify-end relative">
            <div className="relative hero-clip w-full max-w-md aspect-[4/3] overflow-hidden blue-glass-card p-1">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80')] bg-cover bg-center opacity-30"></div>
              <div className="relative h-full w-full rounded-sm overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-8 bg-vincero-darkBlue/90 flex items-center px-3">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-white/70 mx-auto">Dashboard Vincero</div>
                </div>
                <div className="pt-8 p-4 h-full">
                  <div className="flex flex-col h-full">
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div className="bg-vincero-blue/40 rounded-md p-3">
                        <div className="text-xs text-vincero-lightBlue">Usuarios activos</div>
                        <div className="text-xl font-bold">23,487</div>
                        <div className="text-xs text-green-400">+12.4%</div>
                      </div>
                      <div className="bg-vincero-blue/40 rounded-md p-3">
                        <div className="text-xs text-vincero-lightBlue">Conversión</div>
                        <div className="text-xl font-bold">32.8%</div>
                        <div className="text-xs text-green-400">+7.2%</div>
                      </div>
                    </div>
                    <div className="bg-vincero-darkBlue/60 rounded-md p-3 mb-3">
                      <div className="flex justify-between mb-2">
                        <div className="text-xs text-vincero-lightBlue">Segmentación automática</div>
                        <div className="text-xs text-white/70">Últimas 24h</div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="text-xs">Jugadores frecuentes</div>
                          <div className="text-xs font-medium">8,342</div>
                          <div className="h-1.5 w-24 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-vincero-orange w-4/5 rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-xs">Nuevos registros</div>
                          <div className="text-xs font-medium">4,127</div>
                          <div className="h-1.5 w-24 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-vincero-lightBlue w-2/5 rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-xs">Inactivos</div>
                          <div className="text-xs font-medium">11,018</div>
                          <div className="h-1.5 w-24 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-white w-3/5 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-vincero-blue/30 rounded-md p-3 mt-auto">
                      <div className="flex justify-between mb-1">
                        <div className="text-xs text-vincero-lightBlue">Campañas activas</div>
                        <div className="text-xs text-white/70">Progreso</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-xs">Auto-reactivación</div>
                        <div className="h-1.5 w-24 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 w-2/3 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-float">
          <button 
            onClick={scrollToNextSection}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors duration-300"
          >
            <ChevronDown size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
