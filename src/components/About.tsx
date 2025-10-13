import { Target, Eye, Heart, Zap, Handshake, Shield, TrendingUp, Package } from "lucide-react";

const About = () => {
  const mvvItems = [
    {
      icon: Target,
      title: "Missão",
      description: "Oferecer soluções completas em embalagens com agilidade, qualidade e preço justo, ajudando nossos clientes a proteger, apresentar e valorizar seus produtos.",
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser reconhecida como a principal referência regional em distribuição de embalagens, destacando-se pela confiança, inovação e excelência no atendimento.",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compromisso com o cliente",
      description: "Cada pedido é tratado com responsabilidade e atenção",
    },
    {
      icon: Zap,
      title: "Agilidade",
      description: "Entregamos rápido porque entendemos a urgência de quem empreende",
    },
    {
      icon: Shield,
      title: "Confiança e transparência",
      description: "Negociações claras e relações duradouras",
    },
    {
      icon: TrendingUp,
      title: "Qualidade acessível",
      description: "Produtos resistentes e econômicos",
    },
    {
      icon: Handshake,
      title: "Parceria",
      description: "Crescemos junto com nossos clientes",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="section-container">
        {/* Nossa História */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nossa <span className="text-primary">história</span>
            </h2>
          </div>
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-lg">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              A Alternativa Embalagens e Distribuidora nasceu com um propósito claro: <strong>facilitar o dia a dia de empresas e empreendedores</strong> oferecendo soluções práticas, eficientes e acessíveis em embalagens. 
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              Tudo começou quando seus fundadores perceberam a dificuldade que muitos negócios tinham para encontrar embalagens de qualidade com bom preço e entrega rápida. Foi então que decidiram criar uma empresa parceira, confiável e comprometida com a agilidade.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              Com uma estrutura enxuta e foco total no atendimento humanizado, a Alternativa cresceu construindo relações de confiança com cada cliente atendido.
            </p>
            <p className="text-lg text-primary font-semibold leading-relaxed">
              Hoje, seguimos com o mesmo propósito: ser mais do que um fornecedor — ser a escolha certa para quem busca praticidade, economia e parceria verdadeira.
            </p>
          </div>
        </div>

        {/* Por que esse nicho */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 border border-primary/20">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Por que escolhemos esse nicho
                </h3>
              </div>
            </div>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              Escolhemos atuar no segmento de embalagens porque entendemos que ele é essencial para o funcionamento de praticamente todo tipo de negócio — desde pequenos produtores e lojas locais até grandes indústrias e e-commerces.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              O mercado carecia de fornecedores que unissem <strong className="text-primary">qualidade + preço justo + atendimento rápido</strong>, e vimos a oportunidade de fazer diferente.
            </p>
            <p className="text-lg text-primary font-semibold leading-relaxed">
              Nosso objetivo não é apenas vender embalagens, mas oferecer soluções inteligentes que fortalecem os negócios dos nossos clientes.
            </p>
          </div>
        </div>

        {/* Missão e Visão */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {mvvItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Valores */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Nossos <span className="text-primary">valores</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Princípios que guiam cada decisão e cada atendimento
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Localização */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 border border-primary/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Localização privilegiada no centro
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Estamos localizados no Edifício Alternativa, na Rua Nicodemos Nery, 71 - Centro. 
                Uma localização estratégica para melhor atender nossos clientes.
              </p>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-lg">Horário de funcionamento:</p>
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
