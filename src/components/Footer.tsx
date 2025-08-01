import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Calculate header height (top bar + main nav + some padding)
      const headerHeight = 120; // Approximate height in pixels
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Greater Sudbury Roofing</h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Professional roofing and snow removal services serving the greater metro area 
              for over 25 years. Quality work, reliable service, satisfied customers.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>(555) 123-ROOF</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@peakroofing.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Serving Greater Metro Area</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2 text-sm">
              <button 
                onClick={() => scrollToSection('home')} 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('roofing-services')} 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Roofing Services
              </button>
              <button 
                onClick={() => scrollToSection('winter-services')} 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Winter Services
              </button>
              <button 
                onClick={() => scrollToSection('gallery')} 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div>Roof Installation</div>
              <div>Roof Repair</div>
              <div>Soffit & Fascia</div>
              <div>Eavestrough</div>
              <div>Snow Plowing</div>
              <div>Snow Removal</div>
              <div>Emergency Service</div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
            <div>
              © {currentYear} Peak Roofing & Snow. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              Licensed, Bonded & Insured | 24/7 Emergency Service
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;