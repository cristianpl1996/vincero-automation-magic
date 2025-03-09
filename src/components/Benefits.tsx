
import React, { useEffect, useRef } from 'react';
import { ChartBarIcon, Clock, DollarSign } from 'lucide-react';
import { cn } from "@/lib/utils";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  index: number;
}

const BenefitCard = ({ icon, title, value, description, index }: BenefitCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            cardRef.current?.classList.add('animate-scale-in');
          }, index * 150);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "bg-card-gradient rounded-xl p-6 border border-vincero-blue/30 opacity-0 h-full",
        "transition-all duration-500 hover:border-vincero-lightBlue/30 hover:translate-y-[-4px]"
      )}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-vincero-orange/20 flex items-center justify-center text-vincero-orange">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      
      <div className="mb-4">
        <div className="text-3xl font-extrabold text-vincero-lightBlue">{value}</div>
        <p className="text-white/70 mt-2">{description}</p>
      </div>
      
      <div className="mt-4 w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div className={cn(
          "h-full bg-vincero-orange rounded-full transition-all duration-1000",
          "w-0 animate-[grow_1.5s_ease-out_forwards]"
        )} style={{ animationDelay: `${index * 200 + 500}ms` }}></div>
      </div>
    </div>
  );
};

const Benefits = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (titleRef.current) {
            titleRef.current.classList.add('animate-fade-in');
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
    <div id="benefits" ref={sectionRef} className="py-24 bg-vincero-black relative overflow-hidden">
      <div className="absolute w-full h-full top-0 left-0">
        <div className="absolute w-80 h-80 bg-vincero-orange/5 rounded-full blur-3xl top-20 -right-20"></div>
        <div className="absolute w-96 h-96 bg-vincero-blue/5 rounded-full blur-3xl bottom-10 -left-20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1 text-sm font-medium text-vincero-orange mb-4">
            Resultados Garantizados
          </div>
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-extrabold mb-4 opacity-0"
          >
            ¿Por qué Vincero <span className="text-gradient">transforma</span> tu marketing en iGaming?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Nuestra plataforma ha sido diseñada específicamente para la industria del iGaming, optimizando cada aspecto del marketing para maximizar resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BenefitCard 
            icon={<ChartBarIcon className="w-6 h-6" />}
            title="Eficiencia"
            value="10X"
            description="Automatiza la segmentación y creación de campañas para ser 10 veces más rápido que los métodos tradicionales."
            index={0}
          />
          
          <BenefitCard 
            icon={<DollarSign className="w-6 h-6" />}
            title="Conversión"
            value="+30%"
            description="Incrementa la conversión de jugadores recurrentes gracias a la personalización efectiva y comunicaciones precisas."
            index={1}
          />
          
          <BenefitCard 
            icon={<Clock className="w-6 h-6" />}
            title="Tiempo"
            value="80%"
            description="Reduce el tiempo dedicado a analítica manual, con datos listos en segundos para tomar decisiones estratégicas."
            index={2}
          />
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="blue-glass-card rounded-xl p-8 max-w-3xl">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">Resultados comprobados en la industria</h3>
              <p className="text-white/70">Operadores de iGaming que utilizan Vincero reportan:</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-vincero-orange">42%</div>
                <p className="text-sm text-white/70 mt-1">Reducción en costo de adquisición</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-extrabold text-vincero-lightBlue">3.5X</div>
                <p className="text-sm text-white/70 mt-1">Aumento en retención de usuarios</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-extrabold text-white">68%</div>
                <p className="text-sm text-white/70 mt-1">Más reactivaciones exitosas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
