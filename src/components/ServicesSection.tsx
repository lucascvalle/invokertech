import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Server, Smartphone, Brain, Globe } from 'lucide-react';

const services = [
  {
    icon: Server,
    title: {
      pt: 'Soluções Backend sob medida',
      en: 'Custom Backend Solutions'
    },
    description: {
      pt: 'Desenvolvemos APIs robustas e escaláveis utilizando as melhores práticas de desenvolvimento.',
      en: 'We develop robust and scalable APIs using the best development practices.'
    },
    technologies: ['Django', 'Flask', 'Spring Boot', 'APIs REST'],
    gradient: 'bg-gradient-quas',
    glowClass: 'quas-glow'
  },
  {
    icon: Smartphone,
    title: {
      pt: 'Desenvolvimento Mobile Android',
      en: 'Android Mobile Development'
    },
    description: {
      pt: 'Criamos aplicativos nativos Android com integração perfeita a microserviços.',
      en: 'We create native Android applications with seamless microservices integration.'
    },
    technologies: ['Java', 'Kotlin', 'Android SDK', 'Microserviços'],
    gradient: 'bg-gradient-wex',
    glowClass: 'wex-glow'
  },
  {
    icon: Brain,
    title: {
      pt: 'Automação e Inteligência Artificial',
      en: 'Automation and Artificial Intelligence'
    },
    description: {
      pt: 'Implementamos soluções de IA para automatizar processos e extrair insights dos dados.',
      en: 'We implement AI solutions to automate processes and extract insights from data.'
    },
    technologies: ['OCR', 'Visão Computacional', 'Machine Learning', 'TensorFlow'],
    gradient: 'bg-gradient-exort',
    glowClass: 'exort-glow'
  },
  {
    icon: Globe,
    title: {
      pt: 'Integrações e Sistemas Web',
      en: 'Integrations and Web Systems'
    },
    description: {
      pt: 'Desenvolvemos portais, dashboards e sistemas de gestão de dados personalizados.',
      en: 'We develop custom portals, dashboards and data management systems.'
    },
    technologies: ['React', 'Vue.js', 'TypeScript', 'Next.js'],
    gradient: 'bg-gradient-mystical',
    glowClass: 'magic-glow'
  }
];

export const ServicesSection = () => {
  return (
    <section className="min-h-screen py-20 px-4 md:px-8 bg-gradient-to-b from-card to-background">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Nossos Serviços / Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-mystical mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className={`group overflow-hidden border-0 ${service.gradient} p-1 animate-slide-up hover:scale-[1.02] transition-all duration-500 ${service.glowClass}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-card h-full rounded-lg p-6">
                  <CardHeader className="text-center pb-6">
                    <div className="flex justify-center mb-4">
                      <div className={`p-4 rounded-full ${service.gradient} ${service.glowClass}`}>
                        <Icon className="w-8 h-8 text-background" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-bold text-center">
                      <div>{service.title.pt}</div>
                      <div className="text-lg text-muted-foreground font-medium mt-2">
                        {service.title.en}
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <p className="text-center leading-relaxed">
                        {service.description.pt}
                      </p>
                      <p className="text-muted-foreground text-center text-sm leading-relaxed">
                        {service.description.en}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 justify-center">
                      {service.technologies.map((tech) => (
                        <Badge 
                          key={tech}
                          variant="secondary"
                          className="text-xs px-3 py-1 bg-muted hover:bg-accent transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Differentials Section */}
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Nosso Diferencial / Our Advantage
          </h3>
          <div className="w-20 h-1 bg-gradient-mystical mx-auto rounded-full"></div>
        </div>

        <Card className="overflow-hidden border-0 bg-gradient-mystical p-1 magic-glow animate-scale-in">
          <div className="bg-card rounded-lg p-8">
            <CardContent className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-quas">
                    Português
                  </h4>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-quas rounded-full mt-3 animate-pulse-glow"></div>
                      <span>Entregas ágeis e personalizadas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-wex rounded-full mt-3 animate-pulse-glow"></div>
                      <span>Comunicação direta com os desenvolvedores</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-exort rounded-full mt-3 animate-pulse-glow"></div>
                      <span>Uso de tecnologias modernas e escaláveis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-quas rounded-full mt-3 animate-pulse-glow"></div>
                      <span>Experiência combinada em múltiplas áreas (web, mobile, automação)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-exort">
                    English
                  </h4>
                  <ul className="space-y-4 text-lg text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-quas rounded-full mt-3 animate-pulse-glow"></div>
                      <span>Agile and personalized deliveries</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-wex rounded-full mt-3 animate-pulse-glow"></div>
                      <span>Direct communication with developers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-exort rounded-full mt-3 animate-pulse-glow"></div>
                      <span>Use of modern and scalable technologies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-quas rounded-full mt-3 animate-pulse-glow"></div>
                      <span>Combined experience in multiple areas (web, mobile, automation)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};