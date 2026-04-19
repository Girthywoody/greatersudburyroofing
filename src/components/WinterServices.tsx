import snowPlowImage from "@/assets/snow-plow-new.jpg";

const WinterServices = () => {
  const winterServices = [
    {
      term: "Snow Plowing",
      desc: "Driveways, commercial lots, and parking areas. 24/7 availability with seasonal contract options."
    },
    {
      term: "Snow Removal & Hauling",
      desc: "Heavy accumulation removal, ice breaking, salt and sand, walkway clearing. We haul it out when there's nowhere left to push it."
    },
    {
      term: "Emergency Response",
      desc: "Severe weather doesn't wait and neither do we. Priority dispatch with guaranteed response times."
    },
    {
      term: "Seasonal Contracts",
      desc: "Fixed-price winter plans. Priority service, equipment guarantee, no surprises on your bill."
    }
  ];

  return (
    <section id="winter-services" className="bg-secondary text-secondary-foreground">
      {/* Full-width banner image */}
      <img
        src={snowPlowImage}
        alt="Snow removal in Sudbury"
        className="w-full h-64 md:h-96 object-cover"
      />

      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column */}
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl md:text-4xl text-secondary-foreground mb-6">
              Winter Snow Services
            </h2>
            <p className="text-secondary-foreground/60 leading-relaxed mb-10 max-w-lg">
              Sudbury averages over 260 cm of snow a year. When it dumps, you need a crew that
              knows the city, owns the iron, and shows up before you're stuck. We've kept
              this city moving for over two decades.
            </p>

            <dl className="space-y-0">
              {winterServices.map((service, index) => (
                <div key={index} className={`py-5 ${index < winterServices.length - 1 ? 'border-b border-secondary-foreground/10' : ''}`}>
                  <dt className="font-serif text-xl text-secondary-foreground mb-2">{service.term}</dt>
                  <dd className="text-secondary-foreground/50 text-sm leading-relaxed max-w-lg">{service.desc}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right column - Emergency callout */}
          <div className="lg:col-span-5 flex items-start">
            <div className="bg-accent text-accent-foreground p-8 w-full lg:mt-12">
              <p className="text-xs uppercase tracking-[0.25em] font-bold mb-3 text-accent-foreground/80">24/7 Emergency</p>
              <p className="font-serif text-2xl mb-4">Storm damage?<br />We're on call.</p>
              <a
                href="tel:+17055551234"
                className="block text-3xl md:text-4xl font-serif hover:opacity-80 transition-opacity mb-4"
              >
                (705) 555-1234
              </a>
              <p className="text-accent-foreground/80 text-sm leading-relaxed">
                Roof leaks, ice dams, heavy snow loads, fallen branches &mdash; call anytime and we'll be there.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinterServices;
