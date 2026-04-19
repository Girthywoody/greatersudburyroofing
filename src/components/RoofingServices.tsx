import { ArrowRight } from "lucide-react";

const RoofingServices = () => {
  const services = [
    {
      num: "01",
      title: "Roofing",
      description: "Full tear-offs, new builds, and emergency patches. Premium materials rated for northern Ontario's worst.",
      features: "New construction, tear-offs, re-roofing, storm damage, inspections"
    },
    {
      num: "02",
      title: "Soffit & Fascia",
      description: "Protects your roofline from moisture, pests, and ice buildup. Proper ventilation that actually works in this climate.",
      features: "Aluminum soffit, vinyl fascia, ventilation systems, color matching"
    },
    {
      num: "03",
      title: "Repairs & Maintenance",
      description: "Catch it early or pay for it later. We find the problem and fix it right the first time.",
      features: "Leak repair, shingle replacement, flashing, preventive maintenance"
    },
    {
      num: "04",
      title: "Eavestrough",
      description: "Seamless gutter systems that handle spring melt and summer downpours without backing up into your fascia.",
      features: "Seamless gutters, downspouts, gutter guards, cleaning"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    const header = document.querySelector('header');
    if (element && header) {
      const headerHeight = header.offsetHeight;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="roofing-services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="mb-14">
          <h2 className="accent-line font-serif text-3xl md:text-4xl text-foreground pt-2">
            What We Do
          </h2>
        </div>

        <div className="max-w-5xl">
          {services.map((service, index) => (
            <div
              key={service.num}
              className={`py-10 border-b-2 border-border grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 items-baseline ${
                index % 2 === 1 ? "md:ml-auto md:max-w-4xl" : ""
              }`}
            >
              <div className="md:col-span-2">
                <span className="font-serif text-5xl text-accent/40 font-normal">{service.num}</span>
              </div>
              <div className="md:col-span-10">
                <h3 className="font-serif text-2xl text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-2 max-w-xl">{service.description}</p>
                <p className="text-sm text-muted-foreground/60">{service.features}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button
            onClick={scrollToContact}
            className="flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-wide hover:gap-3 transition-all"
          >
            Get your free estimate <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RoofingServices;
