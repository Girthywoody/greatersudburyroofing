import heroImage from "@/assets/hero-roofing.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    const header = document.querySelector('header');
    if (element && header) {
      const headerHeight = header.offsetHeight;
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Image - shown first on mobile */}
          <div className="md:hidden relative">
            <img
              src={heroImage}
              alt="Professional roofing work in Sudbury"
              className="w-full h-72 object-cover"
            />
          </div>

          {/* Text - Left 55% */}
          <div className="md:col-span-7">
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4 font-sans font-bold">
              Sudbury, Ontario &mdash; Since 1998
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
              Built to take<br />what the North<br />throws at it.
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed font-sans">
              Ice storms, heavy snow loads, freeze-thaw cycles &mdash; we've been protecting Sudbury homes from all of it for over 25 years. No shortcuts, no excuses.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <button
                onClick={scrollToContact}
                className="bg-accent text-accent-foreground px-8 py-3.5 font-sans font-bold text-sm uppercase tracking-wide hover:bg-accent/90 transition-colors"
              >
                Get a Free Quote
              </button>
              <a
                href="tel:+17055551234"
                className="text-foreground/60 hover:text-foreground font-sans text-sm font-semibold transition-colors"
              >
                or call (705) 555-1234
              </a>
            </div>
          </div>

          {/* Image - Right 45% (desktop only) */}
          <div className="hidden md:block md:col-span-5 relative">
            <div className="relative">
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-accent/40" />
              <img
                src={heroImage}
                alt="Professional roofing work in Sudbury"
                className="relative w-full h-[420px] lg:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
