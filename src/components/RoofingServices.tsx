import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Shield, Wrench, Droplets } from "lucide-react";

const RoofingServices = () => {
  const services = [
    {
      icon: Home,
      title: "Roofing",
      description: "Complete roof installation, repair, and replacement services using premium materials and expert craftsmanship.",
      features: ["New Construction", "Roof Replacement", "Emergency Repairs", "Inspections"]
    },
    {
      icon: Shield,
      title: "Soffit & Fascia", 
      description: "Professional soffit and fascia installation and repair to protect your home's roofline and improve ventilation.",
      features: ["Aluminum Soffit", "Vinyl Fascia", "Ventilation Systems", "Color Matching"]
    },
    {
      icon: Wrench,
      title: "Repairs & Maintenance",
      description: "Expert repair services to extend your roof's lifespan and prevent costly damage from weather and wear.",
      features: ["Leak Repairs", "Shingle Replacement", "Flashing Repair", "Preventive Maintenance"]
    },
    {
      icon: Droplets,
      title: "Eavestrough",
      description: "Complete gutter systems installation and maintenance to protect your home's foundation and landscaping.",
      features: ["Seamless Gutters", "Downspout Installation", "Gutter Guards", "Cleaning & Maintenance"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
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
    <section id="roofing-services" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Summer Roofing Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From complete roof installations to detailed repairs, we provide comprehensive roofing solutions 
            to keep your home protected year-round.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-button px-8 py-3"
          >
            Get Your Free Estimate
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RoofingServices;