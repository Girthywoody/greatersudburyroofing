import { Button } from "@/components/ui/button";
import { Phone, FileText } from "lucide-react";
import heroImage from "@/assets/hero-roofing.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    const header = document.querySelector('header');
    if (element && header) {
      // Get the actual header height dynamically
      const headerHeight = header.offsetHeight;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const callNow = () => {
    window.location.href = 'tel:+15551237663';
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Professional Roofing &<br />
            <span className="text-accent">Snow Removal</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Trusted local experts serving your community year-round with quality roofing services and reliable snow removal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={callNow}
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-button px-8 py-6 text-lg font-semibold"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call for Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={scrollToContact}
              className="border-primary-foreground text-blue-600 hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg font-semibold"
            >
              <FileText className="mr-2 h-5 w-5" />
              Request Quote Online
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">25+</div>
                <div className="text-sm opacity-80">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">1000+</div>
                <div className="text-sm opacity-80">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-80">Emergency Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;