import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Início", id: "hero" },
    { label: "Sobre", id: "about" },
    { label: "Produtos", id: "services" },
    { label: "Contato", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-background"
      }`}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img
              src="/logo.png"
              alt="Alternativa Embalagens"
              className="h-10 sm:h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary hover:bg-primary/10"
              >
                {item.label}
              </Button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="ml-4 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Fale conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="w-full justify-start text-foreground hover:text-primary hover:bg-primary/10"
              >
                {item.label}
              </Button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full mt-2 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Fale conosco
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
