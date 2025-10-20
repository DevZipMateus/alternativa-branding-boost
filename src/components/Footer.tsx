import { Mail, Phone, MapPin, Clock, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="section-container py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-3 sm:space-y-4">
            <img 
              src="/logo.png" 
              alt="Alternativa Embalagens Logo" 
              className="h-12 sm:h-16 w-auto"
            />
            <p className="text-xs sm:text-sm text-background/80 max-w-xs">
              Há mais de 25 anos oferecendo soluções completas em embalagens, descartáveis e produtos de limpeza.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-background">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-sm text-background/80 hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-sm text-background/80 hover:text-primary transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-sm text-background/80 hover:text-primary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="text-sm text-background/80 hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-background">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <a 
                  href="https://wa.me/5562995480899" 
                  className="text-sm text-background/80 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (62) 99548-0899
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <a 
                  href="mailto:alternativaembalagem@hotmail.com" 
                  className="text-sm text-background/80 hover:text-primary transition-colors break-all"
                >
                  alternativaembalagem@hotmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <span className="text-sm text-background/80">
                  Rua Nicodemos Nery, 71<br />
                  Centro - Edifício Alternativa
                </span>
              </li>
            </ul>
          </div>

          {/* Horário e Redes */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-background">Horário de Funcionamento</h3>
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <div className="text-xs sm:text-sm text-background/80">
                  <p>Segunda a Sexta: 7:30 às 18:30</p>
                  <p>Sábado: 7:30 às 14:30</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-background">Redes Sociais</h3>
            <a 
              href="https://instagram.com/alternativaembalagens" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-background/80 hover:text-primary transition-colors"
              aria-label="Instagram da Alternativa Embalagens"
            >
              <Instagram className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="text-xs sm:text-sm break-all">@alternativaembalagens</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-background/60">
            © {currentYear} Alternativa Embalagens. Todos os direitos reservados.
          </p>
          <p className="text-xs text-background/50 mt-2">
            CNPJ: 03.273.797/0001-99
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
