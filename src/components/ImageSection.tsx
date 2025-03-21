
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const images = [
  {
    src: "/lovable-uploads/6c547294-9122-4a9b-89c5-40fb7a8ada7d.png",
    alt: "Farmer plowing field with oxen",
    caption: "Traditional Farming Practices",
    description: "Traditional farming methods have been passed down through generations. While these practices maintain cultural heritage, they often lack the efficiency and sustainability of modern approaches. AgriHub helps farmers blend traditional wisdom with modern techniques for optimal results.",
    details: [
      "Used for centuries across rural India",
      "Low environmental impact but also low yield",
      "Key part of cultural heritage and farming traditions",
      "Can be enhanced with modern sustainable approaches"
    ]
  },
  {
    src: "/lovable-uploads/accb098e-8db4-4d77-98c6-b66c903cad1c.png",
    alt: "Young crop plants growing in rows",
    caption: "Sustainable Crop Management",
    description: "Sustainable crop management involves using environmentally friendly practices to maximize yield while preserving soil health and biodiversity. AgriHub provides farmers with tailored recommendations for crop rotation, organic fertilizers, and natural pest control methods.",
    details: [
      "Increases crop yield by up to 30% compared to traditional methods",
      "Preserves soil health for future generations",
      "Reduces dependence on chemical fertilizers and pesticides",
      "Promotes biodiversity and ecosystem balance"
    ]
  },
  {
    src: "/lovable-uploads/dd467665-1668-47af-a83c-75bb594005ad.png",
    alt: "Farmer watching field burning - practice to avoid",
    caption: "Stubble Burning Prevention",
    description: "Stubble burning is a major contributor to air pollution in northern India. AgriHub offers alternatives like microbial decomposition solutions, stubble collection for biofuel, and equipment for incorporating residue into the soil. Our incentive system rewards farmers who avoid burning.",
    details: [
      "Reduces air pollution and respiratory health issues",
      "Preserves soil nutrients that would be lost through burning",
      "Creates additional income opportunities through stubble utilization",
      "Helps farmers comply with environmental regulations"
    ]
  }
];

interface ImageProps {
  src: string;
  alt: string;
  caption: string;
  description: string;
  details: string[];
  index: number;
}

const LazyImage = ({ src, alt, caption, description, details, index }: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const imageRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div 
        ref={imageRef}
        className="relative overflow-hidden rounded-2xl animate-fade-up image-shine cursor-pointer"
        style={{ 
          animationDelay: `${0.2 + index * 0.1}s`,
          aspectRatio: '4/3' 
        }}
        onClick={() => setDialogOpen(true)}
      >
        {isInView && (
          <>
            <div 
              className={`absolute inset-0 bg-gray-200 ${isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
              style={{ backdropFilter: 'blur(10px)' }}
            />
            <img
              src={src}
              alt={alt}
              className={`w-full h-full object-cover transition-all duration-1000 ease-out ${isLoaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`}
              onLoad={() => setIsLoaded(true)}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white font-medium">{caption}</p>
              <div className="mt-2 flex items-center">
                <p className="text-white/80 text-sm">Click for more information</p>
              </div>
            </div>
          </>
        )}
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>{caption}</DialogTitle>
            <DialogDescription>
              Transform agriculture with sustainable practices
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            <div className="aspect-video overflow-hidden rounded-lg">
              <img 
                src={src} 
                alt={alt} 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-gray-700">{description}</p>
            <div className="mt-4">
              <h4 className="font-medium text-agrihub-darkGreen mb-2">Key Points:</h4>
              <ul className="list-disc pl-5 space-y-1">
                {details.map((detail, i) => (
                  <li key={i} className="text-gray-700">{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const ImageSection = () => {
  return (
    <section className="py-20 px-6 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wide text-agrihub-darkGreen uppercase bg-agrihub-green/10 rounded-full animate-fade-up">Our Impact</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Transforming Agriculture Sustainably
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {images.map((image, index) => (
            <LazyImage
              key={index}
              src={image.src}
              alt={image.alt}
              caption={image.caption}
              description={image.description}
              details={image.details}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
