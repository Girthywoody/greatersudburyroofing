const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Services", id: "roofing-services" },
    { label: "Winter", id: "winter-services" },
    { label: "Gallery", id: "gallery" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-foreground text-background/60 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Company info */}
          <div>
            <span className="font-serif text-xl text-background">Greater Sudbury Roofing</span>
            <span className="block text-[10px] tracking-[0.25em] uppercase text-background/30 mt-1 font-sans font-bold">Est. 1998</span>
            <p className="mt-4 text-sm leading-relaxed max-w-sm text-background/50">
              Professional roofing and snow removal serving Greater Sudbury and surrounding communities for over 25 years.
            </p>
            <div className="mt-4 space-y-1 text-sm text-background/50">
              <p>(705) 555-1234</p>
              <p>info@greatersudburyroofing.com</p>
            </div>
          </div>

          {/* Nav links */}
          <div className="md:text-right">
            <nav className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-xs uppercase tracking-wide font-semibold text-background/40 hover:text-background transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 text-xs text-background/30">
          <span>&copy; {currentYear} Greater Sudbury Roofing. All rights reserved.</span>
          <span>Licensed, Bonded & Insured</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
