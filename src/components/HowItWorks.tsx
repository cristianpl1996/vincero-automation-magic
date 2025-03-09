import React, { useState, useEffect, useRef } from 'react';
import AnimatedStep from './AnimatedStep';
import { Database, PieChart, Bot, Zap, Users, FileText, Server, Grid, Globe, Mail, MessageSquare, Smartphone, Settings, Target, CheckCircle } from 'lucide-react';

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
              <div className="h-full w-2/3 bg-vincero-orange/70 rounded-full data-progress"></div>
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
        <div className="grid grid-cols-2 gap-6 w-full max-w-md mx-auto">
          <div className="segment-card w-full h-28 bg-vincero-darkBlue/50 border border-vincero-lightBlue/20 rounded-md flex flex-col items-center justify-center p-3 transform transition-all duration-500">
            <div className="w-full h-3 bg-white/10 rounded-full mb-3 overflow-hidden">
              <div className="h-full w-3/4 bg-vincero-orange rounded-full segment-progress"></div>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-vincero-orange/70 rounded-full mr-2 pulse-small"></div>
              <span className="text-sm font-medium text-white/90">Alto valor</span>
            </div>
            <span className="text-xs text-white/70 mt-1">25% de jugadores</span>
          </div>
          
          <div className="segment-card w-full h-28 bg-vincero-darkBlue/50 border border-vincero-lightBlue/20 rounded-md flex flex-col items-center justify-center p-3 transform transition-all duration-500 delay-150">
            <div className="w-full h-3 bg-white/10 rounded-full mb-3 overflow-hidden">
              <div className="h-full w-1/2 bg-vincero-lightBlue rounded-full segment-progress delay-1"></div>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-vincero-lightBlue/70 rounded-full mr-2 pulse-small"></div>
              <span className="text-sm font-medium text-white/90">Frecuentes</span>
            </div>
            <span className="text-xs text-white/70 mt-1">30% de jugadores</span>
          </div>
          
          <div className="segment-card w-full h-28 bg-vincero-darkBlue/50 border border-vincero-lightBlue/20 rounded-md flex flex-col items-center justify-center p-3 transform transition-all duration-500 delay-300">
            <div className="w-full h-3 bg-white/10 rounded-full mb-3 overflow-hidden">
              <div className="h-full w-1/4 bg-white/60 rounded-full segment-progress delay-2"></div>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-white/60 rounded-full mr-2 pulse-small"></div>
              <span className="text-sm font-medium text-white/90">Nuevos</span>
            </div>
            <span className="text-xs text-white/70 mt-1">15% de jugadores</span>
          </div>
          
          <div className="segment-card w-full h-28 bg-vincero-darkBlue/50 border border-vincero-lightBlue/20 rounded-md flex flex-col items-center justify-center p-3 transform transition-all duration-500 delay-450">
            <div className="w-full h-3 bg-white/10 rounded-full mb-3 overflow-hidden">
              <div className="h-full w-2/3 bg-purple-400 rounded-full segment-progress delay-3"></div>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-400/70 rounded-full mr-2 pulse-small"></div>
              <span className="text-sm font-medium text-white/90">Inactivos</span>
            </div>
            <span className="text-xs text-white/70 mt-1">30% de jugadores</span>
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
        <div className="w-full h-full bg-vincero-darkBlue/50 border border-vincero-lightBlue/20 rounded-md p-4 flex flex-col overflow-hidden">
          <div className="flex justify-between mb-2">
            <span className="text-xs text-vincero-lightBlue font-semibold">Agente de Reactivación</span>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-vincero-orange rounded-full pulse-small"></div>
              <div className="w-2 h-2 bg-vincero-lightBlue rounded-full pulse-small"></div>
            </div>
          </div>
          
          <div className="space-y-2 flex-1 overflow-y-auto">
            <div className="bg-vincero-blue/20 rounded-md p-2 transform transition-all duration-500 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center mb-1">
                <Target className="w-3 h-3 text-vincero-orange mr-1" />
                <span className="text-xs font-medium text-white">Definir objetivo</span>
              </div>
              <div className="h-5 w-full bg-white/10 rounded-md flex items-center px-2">
                <span className="text-xs text-white/70">Reactivar clientes inactivos</span>
              </div>
            </div>
            
            <div className="bg-vincero-blue/20 rounded-md p-2 transform transition-all duration-500 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-center mb-1">
                <Settings className="w-3 h-3 text-vincero-lightBlue mr-1" />
                <span className="text-xs font-medium text-white">Canales de comunicación</span>
              </div>
              <div className="flex space-x-2">
                <div className="flex items-center bg-vincero-blue/30 px-1.5 py-0.5 rounded text-[10px]">
                  <MessageSquare className="w-2.5 h-2.5 text-green-400 mr-1" />
                  <span className="text-white">WhatsApp</span>
                </div>
                <div className="flex items-center bg-vincero-blue/30 px-1.5 py-0.5 rounded text-[10px]">
                  <Smartphone className="w-2.5 h-2.5 text-vincero-orange mr-1" />
                  <span className="text-white">SMS</span>
                </div>
                <div className="flex items-center bg-vincero-blue/30 px-1.5 py-0.5 rounded opacity-50 text-[10px]">
                  <Mail className="w-2.5 h-2.5 text-vincero-lightBlue mr-1" />
                  <span className="text-white">Email</span>
                </div>
              </div>
            </div>
            
            <div className="bg-vincero-blue/20 rounded-md p-2 transform transition-all duration-500 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
              <div className="flex items-center mb-1">
                <MessageSquare className="w-3 h-3 text-vincero-lightBlue mr-1" />
                <span className="text-xs font-medium text-white">Mensaje personalizado</span>
              </div>
              <div className="h-12 w-full bg-white/10 rounded-md p-2 overflow-hidden relative">
                <div className="text-[10px] text-white/70">¡Hola [nombre]! Te extrañamos en...</div>
                <div className="absolute bottom-0 left-0 h-0.5 bg-vincero-orange data-progress delay-2 w-0"></div>
              </div>
            </div>
            
            <div className="bg-vincero-blue/20 rounded-md p-2 transform transition-all duration-500 opacity-0 animate-fade-in" style={{ animationDelay: "1.4s" }}>
              <div className="flex items-center mb-1">
                <Bot className="w-3 h-3 text-vincero-orange mr-1" />
                <span className="text-xs font-medium text-white">Automatización</span>
              </div>
              <div className="flex space-x-2">
                <div className="flex items-center">
                  <CheckCircle className="w-2.5 h-2.5 text-green-400 mr-0.5" />
                  <span className="text-[10px] text-white/70">Envío automático</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-2.5 h-2.5 text-green-400 mr-0.5" />
                  <span className="text-[10px] text-white/70">Monitoreo</span>
                </div>
              </div>
            </div>
            
            <div className="bg-vincero-orange/30 text-white text-xs font-medium text-center py-1.5 rounded-md cursor-pointer transform transition-all duration-500 opacity-0 animate-fade-in mt-1" style={{ animationDelay: "1.8s" }}>
              Activar Agente
            </div>
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
        <div className="flex flex-col items-center w-full max-w-xl">
          <div className="relative mb-12">
            <div className="animate-pulse-ring absolute -inset-2 bg-vincero-orange/20 rounded-lg blur"></div>
            <div className="w-48 h-14 bg-vincero-darkBlue/50 border border-vincero-orange/40 rounded-lg flex items-center justify-center transform transition-all duration-500 hover:scale-105">
              <Zap className="w-5 h-5 text-vincero-orange mr-2" />
              <span className="text-sm text-white font-medium">Campaña creada</span>
            </div>
          </div>

          <div className="relative w-full">
            <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-vincero-orange via-vincero-lightBlue to-vincero-orange campaign-flow-line"></div>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="channel-card relative">
                <div className="animate-pulse-ring absolute -inset-1 bg-vincero-orange/20 rounded-lg blur opacity-0 channel-pulse"></div>
                <div className="w-full h-28 bg-vincero-darkBlue/50 border border-vincero-lightBlue/20 rounded-lg flex flex-col items-center justify-center p-4 transform hover:scale-105 transition-all duration-300">
                  <Smartphone className="w-8 h-8 text-vincero-orange mb-2" />
                  <span className="text-sm text-white/90">SMS</span>
                  <div className="w-full h-1 bg-white/10 rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-vincero-orange/70 rounded-full channel-progress"></div>
                  </div>
                </div>
              </div>

              <div className="channel-card relative">
                <div className="animate-pulse-ring absolute -inset-1 bg-vincero-lightBlue/20 rounded-lg blur opacity-0 channel-pulse"></div>
                <div className="w-full h-28 bg-vincero-darkBlue/50 border border-vincero-lightBlue/20 rounded-lg flex flex-col items-center justify-center p-4 transform hover:scale-105 transition-all duration-300">
                  <Mail className="w-8 h-8 text-vincero-lightBlue mb-2" />
                  <span className="text-sm text-white/90">Email</span>
                  <div className="w-full h-1 bg-white/10 rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-vincero-lightBlue/70 rounded-full channel-progress delay-1"></div>
                  </div>
                </div>
              </div>

              <div className="channel-card relative">
                <div className="animate-pulse-ring absolute -inset-1 bg-green-400/20 rounded-lg blur opacity-0 channel-pulse"></div>
                <div className="w-full h-28 bg-vincero-darkBlue/50 border border-vincero-lightBlue/20 rounded-lg flex flex-col items-center justify-center p-4 transform hover:scale-105 transition-all duration-300">
                  <MessageSquare className="w-8 h-8 text-green-400 mb-2" />
                  <span className="text-sm text-white/90">WhatsApp</span>
                  <div className="w-full h-1 bg-white/10 rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-green-400/70 rounded-full channel-progress delay-2"></div>
                  </div>
                </div>
              </div>
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
          <span className="text-sm text-vincero-lightBlue font-medium">Transformación de Métricas</span>
        </div>
        
        <div className="w-full max-w-md px-4">
          <div className="flex justify-between mb-2">
            <div className="text-sm font-medium text-white/80">Resultados antes de Vincero</div>
            <div className="text-sm font-medium text-vincero-orange">Resultados después de Vincero</div>
          </div>
          
          <div className="relative w-full h-44 mb-2 border-b border-l border-white/20 bg-vincero-darkBlue/20 rounded-md overflow-hidden">
            <div className="absolute left-0 right-0 top-0 h-px bg-white/10"></div>
            <div className="absolute left-0 right-0 top-1/4 h-px bg-white/10"></div>
            <div className="absolute left-0 right-0 top-1/2 h-px bg-white/10"></div>
            <div className="absolute left-0 right-0 top-3/4 h-px bg-white/10"></div>
            
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-white/10 z-10"></div>
            
            <div className="absolute left-[15%] bottom-0 flex flex-col items-center">
              <div className="relative w-16 mx-4">
                <div className="absolute bottom-0 left-1 w-6 h-16 bg-white/20 rounded-t">
                  <div className="absolute bottom-0 w-full h-16 bg-white/30 rounded-t"></div>
                </div>
                <div className="absolute bottom-0 right-1 w-6 h-40 bg-vincero-orange/10 rounded-t">
                  <div className="absolute bottom-0 w-full h-0 bg-vincero-orange rounded-t metric-bar-grow delay-100"></div>
                </div>
              </div>
              <span className="text-xs mt-2 text-white/70">Conversión</span>
            </div>
            
            <div className="absolute left-[50%] -translate-x-1/2 bottom-0 flex flex-col items-center">
              <div className="relative w-16 mx-4">
                <div className="absolute bottom-0 left-1 w-6 h-24 bg-white/20 rounded-t">
                  <div className="absolute bottom-0 w-full h-24 bg-white/30 rounded-t"></div>
                </div>
                <div className="absolute bottom-0 right-1 w-6 h-40 bg-vincero-lightBlue/10 rounded-t">
                  <div className="absolute bottom-0 w-full h-0 bg-vincero-lightBlue rounded-t metric-bar-grow delay-300"></div>
                </div>
              </div>
              <span className="text-xs mt-2 text-white/70">Engagement</span>
            </div>
            
            <div className="absolute right-[15%] bottom-0 flex flex-col items-center">
              <div className="relative w-16 mx-4">
                <div className="absolute bottom-0 left-1 w-6 h-12 bg-white/20 rounded-t">
                  <div className="absolute bottom-0 w-full h-12 bg-white/30 rounded-t"></div>
                </div>
                <div className="absolute bottom-0 right-1 w-6 h-40 bg-white/20 rounded-t">
                  <div className="absolute bottom-0 w-full h-0 bg-white/80 rounded-t metric-bar-grow delay-500"></div>
                </div>
              </div>
              <span className="text-xs mt-2 text-white/70">Retención</span>
            </div>
            
            <div className="absolute left-[10%] top-2 text-xs text-white/50">Antes</div>
            <div className="absolute right-[10%] top-2 text-xs text-vincero-orange">Después</div>
          </div>
          
          <div className="flex justify-between w-full text-xs text-white/60">
            <div>0%</div>
            <div>25%</div>
            <div>50%</div>
            <div>75%</div>
            <div>100%</div>
          </div>
          
          <div className="mt-4 text-center">
            <span className="text-sm text-white/80">Incrementa tus métricas clave hasta un <span className="font-bold text-vincero-orange">95%</span> con estrategias optimizadas</span>
          </div>
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
