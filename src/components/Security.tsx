
import React, { useEffect, useRef } from 'react';
import { Shield, Cloud, BarChart, FileCheck, Headphones } from 'lucide-react';
import { cn } from "@/lib/utils";

interface SecurityItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const SecurityItem = ({ icon, title, description, index }: SecurityItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            itemRef.current?.classList.add('animate-slide-up');
          }, index * 150);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [index]);

  return (
    <div 
      ref={itemRef}
      className="flex gap-4 opacity-0"
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-vincero-blue/30 flex items-center justify-center text-vincero-lightBlue">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-white/70 text-sm">{description}</p>
      </div>
    </div>
  );
};

const Security = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (titleRef.current) {
            titleRef.current.classList.add('animate-fade-in');
          }
          if (imageRef.current) {
            setTimeout(() => {
              imageRef.current?.classList.add('animate-scale-in');
            }, 300);
          }
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <div id="security" ref={sectionRef} className="py-24 bg-vincero-black relative overflow-hidden">
      <div className="absolute w-full h-full top-0 left-0">
        <div className="absolute w-80 h-80 bg-vincero-blue/5 rounded-full blur-3xl top-1/3 -right-20"></div>
        <div className="absolute w-96 h-96 bg-vincero-orange/5 rounded-full blur-3xl bottom-10 -left-20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1 text-sm font-medium text-vincero-lightBlue mb-4">
            Confianza Total
          </div>
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-extrabold mb-4 opacity-0"
          >
            Fiabilidad y <span className="text-gradient">seguridad</span> para la industria iGaming
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            En un sector altamente regulado como el iGaming, la seguridad y el cumplimiento normativo son prioridades absolutas para Vincero.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={imageRef}
            className="opacity-0 order-2 lg:order-1"
          >
            <div className="blue-glass-card rounded-xl p-8 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-vincero-orange/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-vincero-lightBlue/10 rounded-full blur-xl"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-vincero-blue/30 border border-vincero-lightBlue/30 flex items-center justify-center mb-6">
                  <Shield className="w-12 h-12 text-vincero-lightBlue" />
                </div>
                
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold mb-2">Certificaciones de seguridad</h3>
                  <p className="text-white/70 text-sm">Cumplimos con los más altos estándares de seguridad en la industria</p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2">
                    <div className="text-xs font-medium text-vincero-lightBlue">ISO 27001</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2">
                    <div className="text-xs font-medium text-vincero-lightBlue">GDPR Compliant</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2">
                    <div className="text-xs font-medium text-vincero-lightBlue">PCI DSS</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2">
                    <div className="text-xs font-medium text-vincero-orange">SSL Encryption</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 lg:order-2">
            <SecurityItem 
              icon={<Shield className="w-5 h-5" />}
              title="Seguridad de nivel bancario"
              description="Implementamos protección avanzada de datos con encriptación de extremo a extremo y múltiples capas de seguridad."
              index={0}
            />
            
            <SecurityItem 
              icon={<Cloud className="w-5 h-5" />}
              title="Despliegue flexible"
              description="Disponible en la nube o en servidores privados según tus necesidades específicas de seguridad y regulación."
              index={1}
            />
            
            <SecurityItem 
              icon={<BarChart className="w-5 h-5" />}
              title="Monitoreo y auditoría"
              description="Seguimiento en tiempo real de todas las operaciones, con logs detallados para cumplimiento y transparencia."
              index={2}
            />
            
            <SecurityItem 
              icon={<FileCheck className="w-5 h-5" />}
              title="Cumplimiento normativo"
              description="Adaptado a las regulaciones específicas de iGaming en diferentes jurisdicciones, manteniendo actualizaciones constantes."
              index={3}
            />
            
            <SecurityItem 
              icon={<Headphones className="w-5 h-5" />}
              title="Soporte experto"
              description="Acompañamiento en integración y configuración por especialistas familiarizados con los requisitos del sector."
              index={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
