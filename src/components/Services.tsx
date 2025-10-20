import { Package, Coffee, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Package,
      title: "Embalagens em geral",
      description: "Ampla variedade de embalagens para atender todas as necessidades do seu negócio. Caixas, sacos, filmes e muito mais.",
      color: "from-primary/20 to-primary/5",
    },
    {
      icon: Coffee,
      title: "Produtos descartáveis",
      description: "Linha completa de descartáveis para food service, eventos e uso diário. Copos, pratos, talheres e embalagens.",
      color: "from-secondary/20 to-secondary/5",
    },
    {
      icon: Sparkles,
      title: "Produtos de limpeza",
      description: "Soluções profissionais em produtos de limpeza e higiene para empresas e estabelecimentos comerciais.",
      color: "from-primary/20 to-secondary/10",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Nossos <span className="text-primary">produtos</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            Oferecemos uma linha completa de produtos para atender todas as necessidades do seu negócio
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50 overflow-hidden"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{service.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 sm:mt-16 bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-border">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
              Qualidade e variedade para o seu negócio
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
              Trabalhamos com as melhores marcas do mercado e mantemos um estoque sempre atualizado 
              para garantir entregas rápidas e produtos de qualidade. Nossa equipe está pronta para 
              ajudar você a encontrar a solução ideal para suas necessidades.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                <span>Preços competitivos</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0"></div>
                <span>Entrega rápida</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                <span>Atendimento especializado</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0"></div>
                <span>Produtos certificados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
