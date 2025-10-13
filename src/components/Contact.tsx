import { Mail, Phone, MapPin, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Telefone",
      value: "(62) 99548-0899",
      link: "https://wa.me/5562995480899",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "alternativaembalagem@hotmail.com",
      link: "mailto:alternativaembalagem@hotmail.com",
    },
    {
      icon: MapPin,
      label: "Endereço",
      value: "Rua Nicodemos Nery, 71 - Centro\nEdifício Alternativa",
      link: null,
    },
    {
      icon: Clock,
      label: "Horário",
      value: "Seg-Sex: 7h30-18h30\nSáb: 7h30-14h30",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em <span className="text-primary">contato</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos prontos para atender você e encontrar a melhor solução para o seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">
                    {info.label}
                  </p>
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors whitespace-pre-line"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-foreground whitespace-pre-line">
                      {info.value}
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center bg-card rounded-3xl p-8 md:p-12 border border-border">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">
              Faça seu pedido agora
            </h3>
            <p className="text-muted-foreground text-lg">
              Entre em contato conosco pelo WhatsApp ou telefone para fazer seu orçamento. 
              Nossa equipe está pronta para atender você com agilidade e eficiência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => window.open("https://wa.me/5562995480899", "_blank")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 h-12"
              >
                WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("tel:+5562995480899", "_blank")}
                className="h-12 border-primary/60 text-foreground hover:bg-primary/10 hover:text-foreground hover:border-primary"
              >
                Ligar agora
              </Button>
            </div>
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">Siga-nos nas redes sociais:</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open("https://instagram.com/alternativaembalagens", "_blank")}
                className="border-primary/60 hover:bg-primary/10 hover:border-primary"
              >
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 gradient-primary rounded-2xl opacity-10 blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
              <img
                src="/logo.png"
                alt="Alternativa Embalagens"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
