import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Clock } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const FeaturedPackages: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
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

  const filteredPackages =
    selectedCategory === 'All'
      ? siteContent.packages.items
      : siteContent.packages.items.filter((pkg) => pkg.category === selectedCategory);

  return (
    <section id="packages" ref={sectionRef} className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className={`mb-12 ${isVisible ? 'animate-fadeUp' : 'opacity-0'}`}>
          <p className="text-secondary uppercase tracking-wider text-sm font-semibold mb-3">
            {siteContent.packages.overline}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-text mb-4">
            {siteContent.packages.heading}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl">
            {siteContent.packages.subtext}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap gap-3 mb-10 ${isVisible ? 'animate-fadeUp' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}>
          {siteContent.packages.filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'text-text-muted bg-transparent hover:bg-surface'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg, index) => (
            <article
              key={pkg.id}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer ${
                isVisible ? 'animate-fadeUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
                {/* Price Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold text-primary">
                  From ${pkg.price.toLocaleString()}
                </div>
                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1">
                  <Clock size={14} />
                  {pkg.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-1 text-secondary text-sm font-medium uppercase tracking-wide mb-2">
                  <MapPin size={14} />
                  {pkg.location}
                </div>
                <h3 className="font-serif text-2xl font-semibold text-text mb-3">
                  {pkg.title}
                </h3>
                <p className="text-text-muted text-base leading-relaxed mb-4 line-clamp-2">
                  {pkg.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {pkg.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-surface text-text-muted px-3 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full bg-primary text-white py-3 rounded-full font-medium hover:bg-secondary transition-all duration-300">
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
