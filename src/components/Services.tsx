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
    <section id="services" className="py-24 bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos <span className="text-primary">produtos</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos uma linha completa de produtos para atender todas as necessidades do seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50 overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-card rounded-3xl p-8 md:p-12 border border-border">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Qualidade e variedade para o seu negócio
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Trabalhamos com as melhores marcas do mercado e mantemos um estoque sempre atualizado 
              para garantir entregas rápidas e produtos de qualidade. Nossa equipe está pronta para 
              ajudar você a encontrar a solução ideal para suas necessidades.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Preços competitivos</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <span>Entrega rápida</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Atendimento especializado</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
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
