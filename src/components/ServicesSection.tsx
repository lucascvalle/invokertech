import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Server, Smartphone, Brain, Globe } from 'lucide-react';

export const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Server,
      titleKey: 'services.backendTitle',
      descriptionKey: 'services.backendDescription',
      technologies: ['Django', 'Flask', 'Spring Boot', 'APIs REST'],
      gradient: 'bg-gradient-quas',
      glowClass: 'quas-glow'
    },
    {
      icon: Smartphone,
      titleKey: 'services.mobileTitle',
      descriptionKey: 'services.mobileDescription',
      technologies: ['Java', 'Kotlin', 'Android SDK', 'Microservices'],
      gradient: 'bg-gradient-wex',
      glowClass: 'wex-glow'
    },
    {
      icon: Brain,
      titleKey: 'services.aiTitle',
      descriptionKey: 'services.aiDescription',
      technologies: ['OCR', 'Computer Vision', 'Machine Learning', 'TensorFlow'],
      gradient: 'bg-gradient-exort',
      glowClass: 'exort-glow'
    },
    {
      icon: Globe,
      titleKey: 'services.webTitle',
      descriptionKey: 'services.webDescription',
      technologies: ['React', 'Vue.js', 'TypeScript', 'Next.js', 'Bootstrap'],
      gradient: 'bg-gradient-mystical',
      glowClass: 'magic-glow'
    }
  ];

  const advantages = [
    'services.advantage1',
    'services.advantage2',
    'services.advantage3',
    'services.advantage4'
  ];

  return (
    <section id="services" className="min-h-screen py-20 px-4 md:px-8 bg-gradient-to-b from-card to-background">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            {t('services.title')}
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
                      {t(service.titleKey)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-center leading-relaxed">
                      {t(service.descriptionKey)}
                    </p>
                    
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
            {t('services.advantageTitle')}
          </h3>
          <div className="w-20 h-1 bg-gradient-mystical mx-auto rounded-full"></div>
        </div>

        <Card className="overflow-hidden border-0 bg-gradient-mystical p-1 magic-glow animate-scale-in">
          <div className="bg-card rounded-lg p-8">
            <CardContent>
              <ul className="space-y-4 text-lg">
                {advantages.map((advantageKey, index) => (
                  <li key={advantageKey} className="flex items-start gap-3">
                    <div 
                      className={`w-2 h-2 rounded-full mt-3 animate-pulse-glow ${['bg-quas', 'bg-wex', 'bg-exort', 'bg-white'][index % 4]}`}>
                    </div>
                    <span>{t(advantageKey)}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};