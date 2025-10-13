import { Target, TrendingUp, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Nossa missão",
      description: "Resolver as necessidades dos nossos clientes com soluções em embalagens e produtos de qualidade",
    },
    {
      icon: TrendingUp,
      title: "Crescimento",
      description: "Empreender e ganhar mercado através da excelência no atendimento e na qualidade dos produtos",
    },
    {
      icon: Users,
      title: "Satisfação do cliente",
      description: "Compromisso com a satisfação total dos nossos clientes em cada atendimento",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre a <span className="text-primary">Alternativa</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Fundada no segundo semestre de 1999, a Alternativa Embalagens nasceu com o propósito de oferecer 
            soluções completas em embalagens, produtos descartáveis e de limpeza. Com mais de 25 anos de 
            história, nos consolidamos como referência no mercado, sempre priorizando a qualidade dos produtos 
            e a satisfação dos nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 border border-primary/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Localização privilegiada no centro
              </h3>
              <p className="text-muted-foreground mb-6">
                Estamos localizados no Edifício Alternativa, na Rua Nicodemos Nery, 71 - Centro. 
                Uma localização estratégica para melhor atender nossos clientes.
              </p>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold">Horário de funcionamento:</p>
                  <p className="text-muted-foreground">Segunda a sexta-feira: 7h30 às 18h30</p>
                  <p className="text-muted-foreground">Sábado: 7h30 às 14h30</p>
                  <p className="text-muted-foreground">Domingo: Fechado</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md">
                <img
                  src="/logo.png"
                  alt="Alternativa Embalagens"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
