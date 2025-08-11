import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import lucasToken from '@/assets/lucas-token.png';
import pedroToken from '@/assets/pedro-token.png';
import { Sparkles, Target } from 'lucide-react';

export const AboutSection = () => {
  const { t } = useTranslation();

  const aboutCards = [
    {
      id: 'origem',
      titleKey: 'about.originTitle',
      contentKey: 'about.originContent',
      icon: Sparkles,
      gradient: 'bg-gradient-quas'
    },
    {
      id: 'missao',
      titleKey: 'about.missionTitle',
      contentKey: 'about.missionContent',
      icon: Target,
      gradient: 'bg-gradient-wex'
    }
  ];

  const teamMembers = [
    {
      name: 'Lucas Araújo',
      token: lucasToken,
      descriptionKey: 'about.lucasDescription',
      stacks: ['Python', 'Django', 'TypeScript', 'Machine Learning'],
      gradient: 'bg-gradient-wex'
    },
    {
      name: 'Pedro Felipe Rolim',
      token: pedroToken,
      descriptionKey: 'about.pedroDescription',
      stacks: ['Java SE/EE/ME', 'Spring Boot', 'JavaScript', 'Android'],
      gradient: 'bg-gradient-quas'
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 md:px-8 bg-gradient-to-b from-background to-card">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-mystical mx-auto rounded-full"></div>
        </div>

        {/* Origin and Mission Cards */}
        <div className="space-y-8 mb-20">
          {aboutCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Card 
                key={card.id}
                className={`group overflow-hidden border-0 ${card.gradient} p-1 animate-slide-up hover:scale-[1.02] transition-all duration-500`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="bg-card h-full rounded-lg p-8">
                  <CardHeader className="text-center pb-6">
                    <div className="flex justify-center mb-4">
                      <div className={`p-4 rounded-full ${card.gradient} magic-glow`}>
                        <Icon className="w-8 h-8 text-background" />
                      </div>
                    </div>
                    <CardTitle className="text-3xl md:text-4xl font-bold text-center">
                      {t(card.titleKey)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg md:text-xl text-center leading-relaxed">
                      {t(card.contentKey)}
                    </p>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            {t('about.teamTitle')}
          </h3>
          <div className="w-20 h-1 bg-gradient-mystical mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.name}
              className={`group overflow-hidden border-0 ${member.gradient} p-1 animate-slide-up hover:scale-[1.02] transition-all duration-500`}
              style={{ animationDelay: `${(index + 2) * 0.3}s` }}
            >
              <div className="bg-card h-full rounded-lg p-6">
                <CardHeader className="text-center pb-6">
                  <div className="flex justify-center mb-4">
                    <div className={`p-2 rounded-full ${member.gradient}`}>
                      <img 
                        src={member.token} 
                        alt={`${member.name} avatar`}
                        className="w-24 h-24 rounded-full object-cover magic-glow"
                      />
                    </div>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-bold">
                    {member.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-center leading-relaxed">
                    {t(member.descriptionKey)}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.stacks.map((tech) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};