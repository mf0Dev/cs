import { useState } from "react";
import { Images, X, ChevronLeft, ChevronRight } from "lucide-react";

// Import service images from assets
import sari from "@assets/sari.jpg";
import img20210529 from "@assets/IMG_20210529_153118.jpg";
import img20210629 from "@assets/IMG_20210629_124107.jpg";
import img20210823 from "@assets/IMG_20210823_170156.jpg";
import img20240202 from "@assets/IMG_20240202_121111.jpg";
import img20240302 from "@assets/IMG_20240302_140850.jpg";
import img20240522 from "@assets/IMG_20240522_141800.jpg";
import img20240615 from "@assets/IMG_20240615_155727.jpg";
import img20240724 from "@assets/IMG_20240724_154547.jpg";
import img20240725 from "@assets/IMG_20240725_173648.jpg";
import img20240802 from "@assets/IMG_20240802_132721.jpg";

// Gallery images
const galleryImages = [
  { src: sari, alt: "Uzmanlar Motorlu Araçlar Servis Alanı", title: "Mercedes-Benz Servis Merkezimiz" },
  { src: img20210529, alt: "Mercedes-Benz ML Bakım", title: "Mercedes-Benz Bakım" },
  { src: img20210629, alt: "Mercedes-Benz AMG Sarı", title: "Mercedes-Benz AMG Servis" },
  { src: img20210823, alt: "Range Rover Bakım", title: "Range Rover Servis" },
  { src: img20240202, alt: "Servis Genel Görünüm", title: "Servis Alanımız" },
  { src: img20240302, alt: "BMW Servis", title: "BMW Servis" },
  { src: img20240522, alt: "Uzmanlar Motorlu Araçlar Dış Görünüm", title: "Servis Binamız" },
  { src: img20240615, alt: "Mercedes S Class Servis", title: "Mercedes-Benz S Class Servis" },
  { src: img20240724, alt: "Mercedes E Class Lift", title: "Mercedes-Benz E Class Bakım" },
  { src: img20240725, alt: "Mercedes GLE Coupe Servis", title: "Mercedes-Benz GLE Coupe Servis" },
  { src: img20240802, alt: "Mercedes C Class Servis", title: "Mercedes-Benz C Class Bakım" },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    if (direction === "prev") {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateImage("prev");
    if (e.key === "ArrowRight") navigateImage("next");
  };

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
            Servis Galerimiz
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Mercedes-Benz özel servisimiz ve bakımını yaptığımız araçların fotoğraf galerisi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-105 h-64"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <Images className="mx-auto h-8 w-8 mb-2" />
                  <h3 className="font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-secondary transition-colors"
              onClick={closeLightbox}
              aria-label="Kapat"
            >
              <X className="h-8 w-8" />
            </button>

            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-secondary transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("prev");
              }}
              aria-label="Önceki"
            >
              <ChevronLeft className="h-10 w-10" />
            </button>

            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-h-[80vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-secondary transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("next");
              }}
              aria-label="Sonraki"
            >
              <ChevronRight className="h-10 w-10" />
            </button>

            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <h3 className="font-semibold text-xl">{galleryImages[selectedImage].title}</h3>
              <p className="text-sm">{selectedImage + 1} / {galleryImages.length}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;