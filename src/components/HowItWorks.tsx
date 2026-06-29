import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, Compass, Plane } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap = {
  MessageCircle,
  Compass,
  Plane
};

export const HowItWorks: React.FC = () => {
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
    <section id="how-it-works" ref={sectionRef} className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeUp' : 'opacity-0'}`}>
          <p className="text-secondary uppercase tracking-wider text-sm font-semibold mb-3">
            {siteContent.howItWorks.overline}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-text mb-4">
            {siteContent.howItWorks.heading}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {siteContent.howItWorks.subtext}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {siteContent.howItWorks.steps.map((step, index) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            
            return (
              <div
                key={step.number}
                className={`relative ${isVisible ? 'animate-fadeUp' : 'opacity-0'}`}
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                {/* Connector Line (desktop only) */}
                {index < siteContent.howItWorks.steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-border" />
                )}

                {/* Step Card */}
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="text-primary" size={32} />
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-text mb-4">
                    {step.title}
                  </h3>
                  <p className="text-text-muted text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fadeUp' : 'opacity-0'}`}
          style={{ animationDelay: '0.65s' }}>
          <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};
