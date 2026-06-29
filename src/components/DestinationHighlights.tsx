import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const DestinationHighlights: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="destinations" ref={sectionRef} className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className={`mb-12 ${isVisible ? 'animate-fadeUp' : 'opacity-0'}`}>
          <p className="text-secondary uppercase tracking-wider text-sm font-semibold mb-3">
            {siteContent.destinations.overline}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-text mb-4">
            {siteContent.destinations.heading}
          </h2>
        </div>

        {/* Destinations Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Large Featured Destination */}
          <div
            className={`md:row-span-2 relative overflow-hidden rounded-2xl group cursor-pointer ${
              isVisible ? 'animate-fadeUp' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="aspect-[3/4] md:aspect-auto md:h-full relative overflow-hidden">
              <img
                src={siteContent.destinations.items[0].image}
                alt={siteContent.destinations.items[0].name}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="text-sm uppercase tracking-wider mb-2 text-accent">
                  {siteContent.destinations.items[0].country}
                </p>
                <h3 className="font-serif text-4xl md:text-5xl font-semibold mb-3">
                  {siteContent.destinations.items[0].name}
                </h3>
                <p className="text-lg mb-4 opacity-90">
                  {siteContent.destinations.items[0].description}
                </p>
                <button className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all">
                  Explore <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Three Smaller Destinations */}
          {siteContent.destinations.items.slice(1).map((destination, index) => (
            <div
              key={destination.id}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                isVisible ? 'animate-fadeUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-xs uppercase tracking-wider mb-1 text-accent">
                    {destination.country}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-sm opacity-90">
                    {destination.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className={`text-center mt-12 ${isVisible ? 'animate-fadeUp' : 'opacity-0'}`}
          style={{ animationDelay: '0.7s' }}>
          <button className="text-primary font-medium inline-flex items-center gap-2 hover:gap-3 transition-all text-lg">
            View All Destinations <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};
