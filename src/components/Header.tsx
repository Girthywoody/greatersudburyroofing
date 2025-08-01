import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const header = document.querySelector('header');
    if (element && header) {
      // Get the actual header height dynamically
      const headerHeight = header.offsetHeight;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-row justify-between items-center text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(705) 555-ROOF</span>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-accent text-accent-foreground border-accent-foreground/20 hover:bg-accent-foreground hover:text-accent"
              onClick={() => scrollToSection('contact')}
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Greater Sudbury Roofing</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('roofing-services')} className="text-foreground hover:text-primary transition-colors">
              Roofing Services
            </button>
            <button onClick={() => scrollToSection('winter-services')} className="text-foreground hover:text-primary transition-colors">
              Winter Services
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-foreground hover:text-primary transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-foreground hover:text-primary transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('roofing-services')} className="text-left text-foreground hover:text-primary transition-colors">
                Roofing Services
              </button>
              <button onClick={() => scrollToSection('winter-services')} className="text-left text-foreground hover:text-primary transition-colors">
                Winter Services
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-left text-foreground hover:text-primary transition-colors">
                Gallery
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-foreground hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-foreground hover:text-primary transition-colors">
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;