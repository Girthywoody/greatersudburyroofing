const About = () => {
  const facts = [
    { label: "Licensed & Insured", detail: "Fully bonded for residential and commercial work" },
    { label: "Greater Sudbury & Area", detail: "Val Caron, Lively, Garson, Chelmsford, Copper Cliff" },
    { label: "24/7 Emergency Service", detail: "Storm damage, leaks, ice dams — any time of year" },
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Pull quote */}
        <blockquote className="font-serif italic text-2xl md:text-3xl text-foreground max-w-2xl mb-16 leading-snug border-l-4 border-accent pl-6">
          "Family-owned since 1998. Still answering the phone ourselves."
        </blockquote>

        {/* Two-column editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* Left: Story (60%) */}
          <div className="lg:col-span-7">
            <h2 className="accent-line font-serif text-3xl md:text-4xl text-foreground pt-2 mb-6">
              About Us
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-lg">
              <p>
                Greater Sudbury Roofing started as a two-person crew working out of a garage in
                Copper Cliff. Twenty-five years later, we're still locally owned, still hands-on,
                and still believe a handshake means something.
              </p>
              <p>
                We specialize in roofing systems that hold up to what northern Ontario throws at
                them — the freeze-thaw cycles, the ice damming, the snow loads that southern
                contractors never think about. Every material we use and every technique we apply
                is chosen for this climate, not a textbook.
              </p>
              <p>
                Our crew lives here. We drive the same roads, shovel the same driveways, and see
                our work every day. That's the kind of accountability you don't get from an
                out-of-town outfit.
              </p>
            </div>
          </div>

          {/* Right: Fact list (40%) */}
          <div className="lg:col-span-5 flex items-start">
            <div className="w-full lg:mt-12">
              {facts.map((fact, index) => (
                <div key={index} className={`py-5 ${index < facts.length - 1 ? 'border-b-2 border-border' : ''}`}>
                  <h4 className="font-serif text-lg text-foreground mb-1">{fact.label}</h4>
                  <p className="text-sm text-muted-foreground">{fact.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust band */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t-2 border-border pt-10">
          <div>
            <span className="font-serif text-4xl text-primary">25+</span>
            <p className="text-sm text-muted-foreground mt-1 font-semibold uppercase tracking-wide">Years in Sudbury</p>
          </div>
          <div>
            <span className="font-serif text-4xl text-primary">Sudbury & Area</span>
            <p className="text-sm text-muted-foreground mt-1 font-semibold uppercase tracking-wide">Full regional coverage</p>
          </div>
          <div>
            <span className="font-serif text-4xl text-primary">24/7</span>
            <p className="text-sm text-muted-foreground mt-1 font-semibold uppercase tracking-wide">Emergency response</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
