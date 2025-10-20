import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 px-4 sm:px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{ backgroundImage: 'url(/hero-bg.jpg)', backgroundPosition: 'center bottom' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85"></div>
      </div>

      <div className="section-container w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-primary">ALTERNATIVA</span>
                <br />
                <span className="text-foreground">EMBALAGENS</span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl">
                Há mais de 25 anos oferecendo soluções completas em embalagens, produtos descartáveis e de limpeza para o seu negócio
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base h-11 sm:h-12 px-6 sm:px-8 w-full sm:w-auto"
              >
                Solicitar orçamento
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("https://wa.me/5562995480899", "_blank")}
                className="text-sm sm:text-base h-11 sm:h-12 px-6 sm:px-8 border-primary/60 text-foreground hover:bg-primary/10 hover:text-foreground hover:border-primary w-full sm:w-auto"
              >
                WhatsApp
              </Button>
            </div>

            <div className="pt-6 sm:pt-8 border-t border-border">
              <p className="text-base sm:text-lg font-semibold text-primary mb-2">
                Nossa meta é resolver suas necessidades
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                Atendimento personalizado • Produtos de qualidade • Entrega rápida
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:h-[600px] animate-fade-in mt-8 lg:mt-0">
            <div className="absolute inset-0 gradient-primary rounded-2xl sm:rounded-3xl opacity-10 blur-3xl"></div>
            <div className="relative bg-card rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 border border-border">
              <img
                src="/logo.png"
                alt="Alternativa Embalagens - Embalagens e Distribuidora"
                className="w-full h-auto"
              />
              <div className="mt-6 sm:mt-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl sm:text-2xl font-bold text-primary">25+</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Anos de experiência</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Desde 1999 no mercado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
