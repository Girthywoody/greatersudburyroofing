import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Snowflake, Truck, Clock, Shield } from "lucide-react";
import snowRemovalImage from "@/assets/snow-removal.jpg";

const WinterServices = () => {
  const services = [
    {
      icon: Truck,
      title: "Snow Plowing",
      description: "Professional snow plowing services for driveways, parking lots, and commercial properties.",
      features: ["Residential Driveways", "Commercial Lots", "24/7 Availability", "Contract Options"]
    },
    {
      icon: Snowflake,
      title: "Snow Removal",
      description: "Complete snow removal and hauling services for heavy snowfall and ice management.",
      features: ["Heavy Snow Removal", "Ice Breaking", "Salt Application", "Walkway Clearing"]
    },
    {
      icon: Clock,
      title: "Emergency Service",
      description: "Around-the-clock emergency snow removal when you need it most during severe weather.",
      features: ["24/7 Response", "Priority Service", "Emergency Rates", "Weather Monitoring"]
    },
    {
      icon: Shield,
      title: "Seasonal Contracts",
      description: "Reliable seasonal snow removal contracts with guaranteed response times and priority service.",
      features: ["Fixed Pricing", "Priority Response", "Equipment Guarantee", "Weather Updates"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="winter-services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Winter Snow Services
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              When winter weather strikes, count on our professional snow removal team to keep your 
              property safe and accessible. We provide reliable, efficient snow and ice management 
              services throughout the winter season.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-button"
              >
                Get Winter Quote
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.location.href = 'tel:+15551237663'}
              >
                Emergency Call
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src={snowRemovalImage} 
              alt="Professional snow removal service"
              className="rounded-lg shadow-card w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WinterServices;