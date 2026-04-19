import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-background mb-12">
          Let's talk about your project.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Contact info */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="mb-10">
              <p className="text-xs uppercase tracking-[0.25em] font-bold text-background/40 mb-3">Call anytime</p>
              <a
                href="tel:+17055551234"
                className="font-serif text-3xl md:text-4xl text-background hover:text-accent transition-colors"
              >
                (705) 555-1234
              </a>
            </div>

            <div className="space-y-6 text-background/60">
              <div>
                <p className="text-background/40 text-xs uppercase tracking-wide font-bold mb-1">Email</p>
                <p>info@greatersudburyroofing.com</p>
              </div>
              <div>
                <p className="text-background/40 text-xs uppercase tracking-wide font-bold mb-1">Location</p>
                <p>Greater Sudbury, Ontario</p>
              </div>
              <div>
                <p className="text-background/40 text-xs uppercase tracking-wide font-bold mb-1">Hours</p>
                <p>Mon&ndash;Fri: 7 AM &ndash; 6 PM</p>
                <p className="text-sm">Emergency service 24/7</p>
              </div>
              <div>
                <p className="text-background/40 text-xs uppercase tracking-wide font-bold mb-1">Service Areas</p>
                <p className="text-sm">Sudbury, Val Caron, Lively, Garson, Copper Cliff, Chelmsford</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-background/60 text-xs uppercase tracking-wide font-bold">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1.5 bg-transparent border-background/20 text-background placeholder:text-background/30 focus:border-accent rounded-none"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-background/60 text-xs uppercase tracking-wide font-bold">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-1.5 bg-transparent border-background/20 text-background placeholder:text-background/30 focus:border-accent rounded-none"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-background/60 text-xs uppercase tracking-wide font-bold">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1.5 bg-transparent border-background/20 text-background placeholder:text-background/30 focus:border-accent rounded-none"
                />
              </div>

              <div>
                <Label htmlFor="service" className="text-background/60 text-xs uppercase tracking-wide font-bold">Service Needed</Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger className="mt-1.5 bg-transparent border-background/20 text-background [&>span]:text-background/50 rounded-none">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="roofing">Roofing Installation/Repair</SelectItem>
                    <SelectItem value="soffit-fascia">Soffit & Fascia</SelectItem>
                    <SelectItem value="eavestrough">Eavestrough/Gutters</SelectItem>
                    <SelectItem value="snow-removal">Snow Removal</SelectItem>
                    <SelectItem value="emergency">Emergency Service</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message" className="text-background/60 text-xs uppercase tracking-wide font-bold">Project Details</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1.5 bg-transparent border-background/20 text-background placeholder:text-background/30 focus:border-accent rounded-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="bg-accent text-accent-foreground px-8 py-3.5 font-bold text-sm uppercase tracking-wide hover:bg-accent/90 transition-colors"
              >
                Submit Quote Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
