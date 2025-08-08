import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import lucasToken from '@/assets/lucas-token.png';
import pedroToken from '@/assets/pedro-token.png';
import { Sparkles, Target, Users } from 'lucide-react';

const aboutCards = [
  {
    id: 'origem',
    title: 'Origem / Origin',
    icon: Sparkles,
    content: {
      pt: 'Nascemos da paixão por tecnologia e inovação, unidos pela visão de transformar ideias em soluções digitais poderosas.',
      en: 'Born from passion for technology and innovation, united by the vision of transforming ideas into powerful digital solutions.'
    },
    gradient: 'bg-gradient-quas'
  },
  {
    id: 'missao',
    title: 'Missão / Mission', 
    icon: Target,
    content: {
      pt: 'Desenvolver soluções tecnológicas sob medida que impulsionem o crescimento dos nossos clientes através de inovação e excelência técnica.',
      en: 'Develop custom technological solutions that drive our clients\' growth through innovation and technical excellence.'
    },
    gradient: 'bg-gradient-wex'
  }
];

const teamMembers = [
  {
    name: 'Lucas Araújo',
    token: lucasToken,
    description: {
      pt: 'Desenvolvedor Full-Stack especializado em soluções web modernas e arquiteturas escaláveis.',
      en: 'Full-Stack Developer specialized in modern web solutions and scalable architectures.'
    },
    stacks: ['React', 'Node.js', 'Python', 'TypeScript', 'AWS'],
    gradient: 'bg-gradient-quas'
  },
  {
    name: 'Pedro Felipe Rolim',
    token: pedroToken,
    description: {
      pt: 'Especialista em Backend e IA, focado em automação e soluções inteligentes para empresas.',
      en: 'Backend and AI Specialist, focused on automation and intelligent solutions for businesses.'
    },
    stacks: ['Django', 'Spring Boot', 'Machine Learning', 'Java', 'Python'],
    gradient: 'bg-gradient-exort'
  }
];

export const AboutSection = () => {
  return (
    <section className="min-h-screen py-20 px-4 md:px-8 bg-gradient-to-b from-background to-card">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Quem Somos / Who We Are
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
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-lg md:text-xl text-center leading-relaxed">
                      {card.content.pt}
                    </p>
                    <p className="text-md md:text-lg text-muted-foreground text-center leading-relaxed">
                      {card.content.en}
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
            Nosso Time / Our Team
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
                    {member.description.pt}
                  </p>
                  <p className="text-muted-foreground text-center text-sm leading-relaxed">
                    {member.description.en}
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