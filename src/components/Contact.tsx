import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted!",
      description: "We'll contact you within 24 hours to schedule your free estimate.",
    });
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

  return (
    <section id="contact" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to get started? Contact us today for a free, no-obligation estimate. 
            We're here to answer your questions and provide expert solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 shadow-card">
            <h3 className="text-2xl font-bold mb-6 text-card-foreground">Request Quote Online</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="service">Service Needed</Label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="mt-1 w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select a service</option>
                  <option value="roofing">Roofing Installation/Repair</option>
                  <option value="soffit-fascia">Soffit & Fascia</option>
                  <option value="eavestrough">Eavestrough/Gutters</option>
                  <option value="snow-removal">Snow Removal</option>
                  <option value="emergency">Emergency Service</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <Label htmlFor="message">Project Details</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1"
                  placeholder="Please describe your project or service needs..."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-button py-3"
                size="lg"
              >
                Submit Quote Request
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 shadow-card">
              <h3 className="text-xl font-bold mb-4 text-card-foreground">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <div className="font-semibold">(555) 123-ROOF</div>
                    <div className="text-sm text-muted-foreground">24/7 Emergency Line</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <div className="font-semibold">info@peakroofing.com</div>
                    <div className="text-sm text-muted-foreground">Email for estimates</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <div className="font-semibold">Greater Metro Area</div>
                    <div className="text-sm text-muted-foreground">Full service coverage</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <div className="font-semibold">Mon-Fri: 7AM-6PM</div>
                    <div className="text-sm text-muted-foreground">Emergency service 24/7</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <h3 className="text-xl font-bold mb-4 text-card-foreground">Service Areas</h3>
              <div className="text-muted-foreground space-y-2">
                <p>We proudly serve the greater metropolitan area including:</p>
                <div className="grid grid-cols-2 gap-2 text-sm mt-3">
                  <div>• Downtown Core</div>
                  <div>• North District</div>
                  <div>• South Valley</div>
                  <div>• East Hills</div>
                  <div>• West End</div>
                  <div>• Suburbs</div>
                </div>
                <p className="text-sm mt-3">
                  Not sure if we serve your area? Give us a call - we may be able to help!
                </p>
              </div>
            </Card>

            <div className="bg-accent/10 rounded-lg p-6 border border-accent/20">
              <h4 className="font-bold text-accent mb-2">Emergency Service Available</h4>
              <p className="text-sm text-muted-foreground">
                Storm damage? Roof leak? Snow emergency? We provide 24/7 emergency response 
                for urgent roofing and snow removal needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;