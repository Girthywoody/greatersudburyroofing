import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const header = document.querySelector('header');
    if (element && header) {
      const headerHeight = header.offsetHeight;
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Services", id: "roofing-services" },
    { label: "Winter", id: "winter-services" },
    { label: "Gallery", id: "gallery" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div>
            <button onClick={() => scrollToSection('home')} className="text-left">
              <span className="font-serif text-2xl text-foreground tracking-tight">Greater Sudbury Roofing</span>
              <span className="block text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-sans font-semibold">Est. 1998</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-sm font-semibold uppercase tracking-wide text-foreground/70 hover:text-foreground transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-accent after:transition-all"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-accent hover:text-accent/80 transition-colors"
            >
              Free Quote <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile slide-out panel */}
      <div
        className={`fixed inset-0 top-0 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-foreground/40" onClick={() => setIsMenuOpen(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-background border-l-2 border-border transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6 text-foreground" />
            </button>
          </div>
          <nav className="flex flex-col px-6 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left py-3 text-foreground/70 hover:text-foreground border-b border-border text-sm font-semibold uppercase tracking-wide transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-1.5 mt-4 text-accent font-bold uppercase tracking-wide text-sm"
            >
              Free Quote <ArrowRight className="h-4 w-4" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
