
import React, { useState, useEffect } from 'react';

const images = [
  {
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1200&q=80",
    alt: "Beautiful orange flowers in a field",
    caption: "Sustainable Farming Practices"
  },
  {
    src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80",
    alt: "Sunlight passing through green leafed trees",
    caption: "Natural Resource Management"
  },
  {
    src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80",
    alt: "Low angle photography of trees at daytime",
    caption: "Ecological Balance"
  }
];

interface ImageProps {
  src: string;
  alt: string;
  caption: string;
  index: number;
}

const LazyImage = ({ src, alt, caption, index }: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
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
    <div 
      ref={imageRef}
      className="relative overflow-hidden rounded-2xl animate-fade-up image-shine"
      style={{ 
        animationDelay: `${0.2 + index * 0.1}s`,
        aspectRatio: '4/3' 
      }}
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
          </div>
        </>
      )}
    </div>
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
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
