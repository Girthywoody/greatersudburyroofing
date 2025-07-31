import { Card } from "@/components/ui/card";
import beforeAfterImage from "@/assets/before-after.jpg";
import heroImage from "@/assets/hero-roofing.jpg";
import snowRemovalImage from "@/assets/snow-removal.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      image: heroImage,
      title: "Residential Roof Installation",
      description: "Complete roof replacement with premium shingles"
    },
    {
      image: beforeAfterImage,
      title: "Before & After Renovation",
      description: "Full exterior renovation including roof and gutters"
    },
    {
      image: snowRemovalImage,
      title: "Commercial Snow Removal",
      description: "Professional snow plowing for large properties"
    },
    {
      image: heroImage,
      title: "Emergency Roof Repair",
      description: "Quick response storm damage repair"
    },
    {
      image: beforeAfterImage,
      title: "Soffit & Fascia Work",
      description: "Complete soffit and fascia replacement"
    },
    {
      image: snowRemovalImage,
      title: "Residential Snow Service",
      description: "Reliable driveway and walkway clearing"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Work Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the quality craftsmanship and attention to detail that has made us 
            the trusted choice for roofing and snow removal services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card key={index} className="overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative group">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see your project in our gallery?
          </p>
          <div className="inline-flex items-center text-primary font-semibold">
            <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
            Call us today to get started: (555) 123-ROOF
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;