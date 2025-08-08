import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageCircle, Phone } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen py-20 px-4 md:px-8 bg-gradient-to-b from-background to-card">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Fale Conosco / Contact Us
          </h2>
          <div className="w-24 h-1 bg-gradient-mystical mx-auto rounded-full"></div>
        </div>

        {/* Contact Content */}
        <Card className="overflow-hidden border-0 bg-gradient-mystical p-1 magic-glow animate-scale-in">
          <div className="bg-card rounded-lg p-8">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
                Vamos Conversar / Let's Talk
              </CardTitle>
              <p className="text-lg text-muted-foreground">
                Transforme suas ideias em realidade. Entre em contato para discutirmos seu próximo projeto.
              </p>
              <p className="text-md text-muted-foreground">
                Transform your ideas into reality. Get in touch to discuss your next project.
              </p>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* Contact Methods */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-4 rounded-full bg-gradient-quas quas-glow">
                      <Mail className="w-6 h-6 text-background" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-quas">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    contato@invokertech.dev
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-4 rounded-full bg-gradient-wex wex-glow">
                      <MessageCircle className="w-6 h-6 text-background" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-wex">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground">
                    +55 (11) 99999-9999
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-4 rounded-full bg-gradient-exort exort-glow">
                      <Phone className="w-6 h-6 text-background" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-exort">Telefone</h3>
                  <p className="text-sm text-muted-foreground">
                    +55 (11) 3333-3333
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
                <Button 
                  size="lg"
                  className="bg-gradient-quas hover:bg-gradient-wex text-background font-bold px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 quas-glow"
                  onClick={() => window.open('mailto:contato@invokertech.dev', '_blank')}
                >
                  Enviar Email / Send Email
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-exort text-exort hover:bg-exort hover:text-background font-bold px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 exort-glow"
                  onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                >
                  WhatsApp
                </Button>
              </div>

              {/* Additional Info */}
              <div className="text-center pt-8 space-y-4">
                <p className="text-lg font-medium gradient-text">
                  Horário de Atendimento / Business Hours
                </p>
                <p className="text-muted-foreground">
                  Segunda a Sexta: 9h às 18h (GMT-3) / Monday to Friday: 9am to 6pm (GMT-3)
                </p>
                <p className="text-muted-foreground">
                  Resposta em até 24 horas / Response within 24 hours
                </p>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};