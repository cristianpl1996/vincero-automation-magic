import React, { useState, useEffect, useRef } from 'react';
import AnimatedStep from './AnimatedStep';
import { Database, PieChart, Bot, Zap, Users, FileText, Server, Grid, Globe } from 'lucide-react';

const stepData = [
  {
    id: 1,
    title: 'Conecta tu fuente de datos',
    description: 'Vincero analiza y segmenta automáticamente tus datos de jugadores.',
    icon: <Database className="w-6 h-6" />,
    animationContent: (
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 gap-3 mb-8 w-full max-w-xs">
          <div className="data-source-card flex items-center justify-center p-2 bg-vincero-darkBlue/60 border border-vincero-lightBlue/30 rounded-md">
            <FileText className="w-5 h-5 text-vincero-lightBlue mr-2" />
            <span className="text-xs text-white/90">CSV</span>
          </div>
          <div className="data-source-card flex items-center justify-center p-2 bg-vincero-darkBlue/60 border border-vincero-lightBlue/30 rounded-md">
            <Server className="w-5 h-5 text-vincero-orange mr-2" />
            <span className="text-xs text-white/90">API</span>
          </div>
          <div className="data-source-card flex items-center justify-center p-2 bg-vincero-darkBlue/60 border border-vincero-lightBlue/30 rounded-md">
            <Grid className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-xs text-white/90">CRM</span>
          </div>
          <div className="data-source-card flex items-center justify-center p-2 bg-vincero-darkBlue/60 border border-vincero-lightBlue/30 rounded-md">
            <Globe className="w-5 h-5 text-green-400 mr-2" />
            <span className="text-xs text-white/90">Base Datos</span>
          </div>
        </div>
        
        <div className="relative w-full flex justify-center mb-4">
          <div className="absolute left-1/4 top-0 w-0.5 h-10 bg-gradient-to-b from-vincero-lightBlue to-transparent data-flow-line"></div>
          <div className="absolute right-1/4 top-0 w-0.5 h-12 bg-gradient-to-b from-vincero-orange to-transparent data-flow-line delay-1"></div>
          <div className="absolute left-1/3 top-0 w-0.5 h-14 bg-gradient-to-b from-purple-400 to-transparent data-flow-line delay-2"></div>
          <div className="absolute right-1/3 top-0 w-0.5 h-8 bg-gradient-to-b from-green-400 to-transparent data-flow-line delay-3"></div>
          
          <div className="absolute left-1/4 top-3 w-1.5 h-1.5 rounded-full bg-vincero-lightBlue data-point"></div>
          <div className="absolute right-1/4 top-5 w-1.5 h-1.5 rounded-full bg-vincero-orange data-point delay-1"></div>
          <div className="absolute left-1/3 top-7 w-1.5 h-1.5 rounded-full bg-purple-400 data-point delay-2"></div>
          <div className="absolute right-1/3 top-2 w-1.5 h-1.5 rounded-full bg-green-400 data-point delay-3"></div>
        </div>
        
        <div className="w-24 h-24 bg-vincero-blue/40 rounded-full flex items-center justify-center pulse-animation relative mb-3">
          <div className="absolute w-full h-full rounded-full bg-vincero-blue/20 pulse-ring"></div>
          <Database className="w-10 h-10 text-vincero-lightBlue" />
        </div>
        
        <div className="w-1 h-8 bg-gradient-to-b from-vincero-lightBlue to-transparent"></div>
        
        <div className="w-64 bg-vincero-darkBlue/50 border border-vincero-lightBlue/20 rounded-md p-3">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-vincero-lightBlue">Datos Procesados</span>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-vincero-lightBlue rounded-full pulse-small"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-2 w-full bg-white/10 rounded-full">
              <div className="h-full w-2/3 bg-vincero-lightBlue/70 rounded-full data-progress"></div>
            </div>
            <div className="h-2 w-full bg-white/10 rounded-full">
              <div className="h-full w-3/5 bg-vincero-orange/70 rounded-full data-progress delay-1"></div>
            </div>
            <div className="h-2 w-full bg-white/10 rounded-full">
              <div className="h-full w-4/5 bg-purple-400/70 rounded-full data-progress delay-2"></div>
            </div>
            <div className="h-2 w-full bg-white/10 rounded-full">
              <div className="h-full w-1/2 bg-green-400/70 rounded-full data-progress delay-3"></div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: 'Segmentación Inteligente',
    description: 'Basada en frecuencia, última compra y ticket promedio.',
    icon: <PieChart className="w-6 h-6" />,
    animationContent: (
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 gap-2">
          <div className="w-24 h-24 bg-vincero-darkBlue/50 border border-vincero-lightBlue/20 rounded-md flex flex-col items-center justify-center p-2">
            <div className="w-full h-1.5 bg-white/10 rounded-full mb-1">
              <div className="h-full w-3/4 bg-vincero-orange rounded-full"></div>
            </div>
            <span className="text-xs text-white/80">Alto valor</span>
          </div>
          <div className="w-24 h-24 bg-vincero-darkBlue/50 border border-vincero-lightBlue/20 rounded-md flex flex-col items-center justify-center p-2">
            <div className="w-full h-1.5 bg-white/10 rounded-full mb-1">
              <div className="h-full w-1/2 bg-vincero-lightBlue rounded-full"></div>
            </div>
            <span className="text-xs text-white/80">Frecuentes</span>
          </div>
          <div className="w-24 h-24 bg-vincero-darkBlue/50 border border-vincero-lightBlue/20 rounded-md flex flex-col items-center justify-center p-2">
            <div className="w-full h-1.5 bg-white/10 rounded-full mb-1">
              <div className="h-full w-1/4 bg-white/60 rounded-full"></div>
            </div>
            <span className="text-xs text-white/80">Nuevos</span>
          </div>
          <div className="w-24 h-24 bg-vincero-darkBlue/50 border border-vincero-lightBlue/20 rounded-md flex flex-col items-center justify-center p-2">
            <div className="w-full h-1.5 bg-white/10 rounded-full mb-1">
              <div className="h-full w-2/3 bg-purple-400 rounded-full"></div>
            </div>
            <span className="text-xs text-white/80">Inactivos</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: 'Creación de agentes de marketing',
    description: 'Define objetivos y tonos comunicacionales con agentes impulsados por IA.',
    icon: <Bot className="w-6 h-6" />,
    animationContent: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="w-64 h-40 bg-vincero-darkBlue/50 border border-vincero-lightBlue/20 rounded-md p-3">
          <div className="flex justify-between mb-3">
            <span className="text-xs text-vincero-lightBlue">Agente de Reactivación</span>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-vincero-orange rounded-full"></div>
              <div className="w-2 h-2 bg-vincero-lightBlue rounded-full"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-2 w-full bg-white/10 rounded-full"></div>
            <div className="h-2 w-5/6 bg-white/10 rounded-full"></div>
            <div className="h-2 w-4/6 bg-white/10 rounded-full"></div>
            <div className="h-6 w-full bg-vincero-blue/40 rounded-md mt-3"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: 'Lanza campañas en segundos',
    description: 'Multiplica campañas con solo un par de clics.',
    icon: <Zap className="w-6 h-6" />,
    animationContent: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-40 h-12 bg-vincero-darkBlue/50 border border-vincero-lightBlue/20 rounded-md flex items-center justify-center mb-4">
            <span className="text-xs text-white">Campaña creada</span>
          </div>
          <div className="relative flex">
            <div className="absolute w-32 h-0.5 bg-vincero-orange top-6 -left-16 z-0"></div>
            <div className="absolute w-32 h-0.5 bg-vincero-orange top-6 -right-16 z-0"></div>
            <div className="w-12 h-12 bg-vincero-orange/20 rounded-full flex items-center justify-center z-10">
              <Zap className="w-6 h-6 text-vincero-orange" />
            </div>
          </div>
          <div className="flex mt-4 space-x-6">
            <div className="w-20 h-20 bg-vincero-darkBlue/50 border border-vincero-lightBlue/20 rounded-md flex items-center justify-center">
              <span className="text-xs text-white">SMS</span>
            </div>
            <div className="w-20 h-20 bg-vincero-darkBlue/50 border border-vincero-lightBlue/20 rounded-md flex items-center justify-center">
              <span className="text-xs text-white">Email</span>
            </div>
            <div className="w-20 h-20 bg-vincero-darkBlue/50 border border-vincero-lightBlue/20 rounded-md flex items-center justify-center">
              <span className="text-xs text-white">WhatsApp</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: 'Impacta a tu audiencia',
    description: 'WhatsApp, SMS y correo para maximizar resultados.',
    icon: <Users className="w-6 h-6" />,
    animationContent: (
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <div className="mb-4 text-center">
          <span className="text-xs text-vincero-lightBlue">Audiencia impactada</span>
        </div>
        <div className="flex space-x-3">
          <div className="flex flex-col items-center">
            <div className="w-4 h-16 bg-gradient-to-t from-vincero-orange to-transparent rounded-t-sm"></div>
            <div className="text-xs mt-1 text-white/70">+30%</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-4 h-24 bg-gradient-to-t from-vincero-lightBlue to-transparent rounded-t-sm"></div>
            <div className="text-xs mt-1 text-white/70">+45%</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-4 h-12 bg-gradient-to-t from-white/60 to-transparent rounded-t-sm"></div>
            <div className="text-xs mt-1 text-white/70">+25%</div>
          </div>
        </div>
        <div className="flex justify-between w-full max-w-xs mt-4">
          <div className="text-xs text-white/70">Antes</div>
          <div className="text-xs text-white/70">Después</div>
        </div>
      </div>
    )
  }
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === 5 ? 1 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="how-it-works" ref={sectionRef} className="min-h-screen bg-vincero-black py-24 relative overflow-hidden">
      <div className="absolute w-full h-full top-0 left-0">
        <div className="absolute w-80 h-80 bg-vincero-blue/5 rounded-full blur-3xl top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-vincero-orange/5 rounded-full blur-3xl bottom-10 -right-20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1 text-sm font-medium text-vincero-lightBlue mb-4">
            Proceso Simple
          </div>
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-extrabold mb-4 opacity-0"
          >
            Automatiza tu marketing en <span className="text-gradient">5 simples pasos</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Vincero transforma el complejo proceso de marketing en iGaming en un flujo simple y automatizado, permitiéndote concentrarte en resultados, no en procesos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            {stepData.map((step) => (
              <AnimatedStep 
                key={step.id}
                step={step.id}
                title={step.title}
                description={step.description}
                isActive={step.id === activeStep}
                onClick={() => setActiveStep(step.id)}
                icon={step.icon}
              />
            ))}
          </div>
          
          <div className="flex items-center justify-center">
            <div className="w-full h-80 blue-glass-card rounded-xl overflow-hidden p-6 transition-all duration-500">
              {stepData.find(step => step.id === activeStep)?.animationContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
