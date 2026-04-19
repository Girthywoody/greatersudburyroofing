import beforeAfterImage from "@/assets/before-after.jpg";
import heroImage from "@/assets/hero-roofing.jpg";
import snowRemovalImage from "@/assets/snow-removal.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      image: heroImage,
      caption: "Full residential roof replacement, Sudbury"
    },
    {
      image: beforeAfterImage,
      caption: "Before & after exterior renovation"
    },
    {
      image: snowRemovalImage,
      caption: "Commercial lot snow clearing"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-14">
          <h2 className="accent-line font-serif text-3xl md:text-4xl text-foreground pt-2">
            Our Work
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-3">
          {/* Large image */}
          <div className="md:col-span-2 md:row-span-2">
            <img
              src={galleryItems[0].image}
              alt={galleryItems[0].caption}
              className="w-full h-72 md:h-full object-cover"
            />
            <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wide font-semibold">{galleryItems[0].caption}</p>
          </div>

          {/* Top right */}
          <div>
            <img
              src={galleryItems[1].image}
              alt={galleryItems[1].caption}
              className="w-full h-52 md:h-full object-cover"
            />
            <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wide font-semibold">{galleryItems[1].caption}</p>
          </div>

          {/* Bottom right */}
          <div>
            <img
              src={galleryItems[2].image}
              alt={galleryItems[2].caption}
              className="w-full h-52 md:h-full object-cover"
            />
            <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wide font-semibold">{galleryItems[2].caption}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
