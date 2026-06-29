import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const Testimonials: React.FC = () => {
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
    <section id="testimonials" ref={sectionRef} className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeUp' : 'opacity-0'}`}>
          <p className="text-secondary uppercase tracking-wider text-sm font-semibold mb-3">
            {siteContent.testimonials.overline}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-text mb-4">
            {siteContent.testimonials.heading}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteContent.testimonials.items.map((testimonial, index) => (
            <article
              key={testimonial.id}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                isVisible ? 'animate-fadeUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Quote className="text-accent" size={24} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-accent fill-accent" size={18} />
                ))}
              </div>

              {/* Content */}
              <p className="text-text-muted text-base leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-text">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-text-muted">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border ${
          isVisible ? 'animate-fadeUp' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.65s' }}>
          <div className="text-center">
            <div className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-2">
              500+
            </div>
            <p className="text-text-muted text-sm">Trips Planned</p>
          </div>
          <div className="text-center">
            <div className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-2">
              50+
            </div>
            <p className="text-text-muted text-sm">Countries</p>
          </div>
          <div className="text-center">
            <div className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-2">
              4.9
            </div>
            <p className="text-text-muted text-sm">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-2">
              98%
            </div>
            <p className="text-text-muted text-sm">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};
