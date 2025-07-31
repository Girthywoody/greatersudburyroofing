import { Card } from "@/components/ui/card";
import { Award, Users, MapPin, Clock } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: "Licensed & Insured",
      description: "Fully licensed, bonded, and insured for your peace of mind"
    },
    {
      icon: Users,
      title: "Expert Team", 
      description: "Experienced professionals with decades of combined expertise"
    },
    {
      icon: MapPin,
      title: "Local Service",
      description: "Proudly serving the greater metro area and surrounding communities"
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "Fast response times for estimates, emergencies, and scheduled service"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Greater Sudbury Roofing
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            For over 25 years, Greater Sudbury Roofing has been the trusted choice for professional 
            roofing and snow removal services in our community. We combine traditional craftsmanship 
            with modern techniques to deliver exceptional results that stand the test of time.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our commitment to quality, reliability, and customer satisfaction has earned us thousands 
            of satisfied customers and a reputation as the area's premier roofing and snow removal company. 
            Whether you need emergency repairs, a complete roof replacement, or reliable winter services, 
            our experienced team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <Card key={index} className="p-6 text-center shadow-card hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-card-foreground">{highlight.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{highlight.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="bg-primary/5 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Why Choose Greater Sudbury Roofing?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-muted-foreground">Quality materials from trusted manufacturers</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-muted-foreground">Comprehensive warranties on all work</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-muted-foreground">Free detailed estimates and consultations</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-muted-foreground">24/7 emergency service availability</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-muted-foreground">Family-owned and operated since 1998</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-muted-foreground">Satisfaction guaranteed on every project</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;