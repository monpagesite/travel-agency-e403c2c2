import React, { useEffect, useRef, useState } from 'react';
import { Award, Heart, Globe, Users } from 'lucide-react';

export const AboutSection: React.FC = () => {
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

  const values = [
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Every traveler is unique. We take time to understand your preferences and craft experiences that truly resonate."
    },
    {
      icon: Globe,
      title: "Local Expertise",
      description: "Our network of local guides and partners ensures you experience destinations like an insider, not a tourist."
    },
    {
      icon: Award,
      title: "Quality First",
      description: "We partner only with trusted accommodations, guides, and services that meet our rigorous standards."
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "From planning to your return home, we're available whenever you need assistance or advice."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image Grid */}
          <div className={`relative ${isVisible ? 'animate-fadeUp' : 'opacity-0'}`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"
                  alt="Travel destination"
                  className="rounded-2xl w-full h-64 object-cover shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80"
                  alt="Adventure moment"
                  className="rounded-2xl w-full h-48 object-cover shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-12">
                <img
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80"
                  alt="Beautiful landscape"
                  className="rounded-2xl w-full h-48 object-cover shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=800&q=80"
                  alt="Cultural experience"
                  className="rounded-2xl w-full h-64 object-cover shadow-lg"
                />
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-accent text-white rounded-2xl p-6 shadow-xl">
              <div className="text-3xl font-serif font-semibold">10+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>

          {/* Right: Content */}
          <div className={`${isVisible ? 'animate-fadeUp' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}>
            <p className="text-secondary uppercase tracking-wider text-sm font-semibold mb-3">
              About Wanderwise
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-text mb-6">
              Travel experts who understand wanderlust
            </h2>
            <p className="text-lg text-text-muted leading-relaxed mb-8">
              We're not just travel agents — we're explorers at heart. Every destination we recommend 
              is one we've personally experienced or vetted through our trusted network of local partners.
            </p>
            <p className="text-lg text-text-muted leading-relaxed mb-10">
              Founded by a team of adventure seekers who grew tired of cookie-cutter tours, Wanderwise 
              exists to make authentic, memorable travel accessible to everyone.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className={`${isVisible ? 'animate-fadeUp' : 'opacity-0'}`}
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="text-primary" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text mb-1">
                          {value.title}
                        </h4>
                        <p className="text-sm text-text-muted leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
