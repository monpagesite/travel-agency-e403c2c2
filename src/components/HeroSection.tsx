import React, { useEffect, useRef } from 'react';
import { Award, ArrowRight } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const HeroSection: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollY = window.scrollY;
        imageRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const words = siteContent.hero.headline.split(' ');

  return (
    <section className="min-h-screen flex items-center bg-background">
      <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-0">
        {/* Left Content */}
        <div className="md:col-span-3 py-20 md:py-0 px-6 md:pl-12 flex items-center">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-surface text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fadeIn">
              <Award size={16} />
              {siteContent.hero.badge}
            </div>

            {/* Headline */}
            <h1 className="font-serif text-6xl md:text-8xl leading-none tracking-tight text-text mb-6">
              {words.map((word, index) => (
                <span
                  key={index}
                  className={`inline-block ${
                    word.toLowerCase().includes(siteContent.hero.highlightWord.toLowerCase())
                      ? 'text-primary'
                      : ''
                  }`}
                  style={{
                    animation: `fadeUp 0.6s cubic-bezier(0.4,0,0.2,1) ${0.3 + index * 0.05}s both`
                  }}
                >
                  {word}{' '}
                </span>
              ))}
            </h1>

            {/* Subtext */}
            <p
              className="text-lg md:text-xl text-text-muted leading-relaxed max-w-xl"
              style={{
                animation: 'fadeUp 0.6s cubic-bezier(0.4,0,0.2,1) 0.8s both'
              }}
            >
              {siteContent.hero.subtext}
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8"
              style={{
                animation: 'fadeUpScale 0.6s cubic-bezier(0.4,0,0.2,1) 1s both'
              }}
            >
              <button className="bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                {siteContent.hero.ctaPrimary}
                <ArrowRight size={20} />
              </button>
              <a
                href="#contact"
                className="text-primary underline underline-offset-4 text-base inline-flex items-center gap-2 hover:text-secondary transition-colors"
              >
                {siteContent.hero.ctaSecondary}
              </a>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:col-span-2 relative h-[50vh] md:h-screen overflow-hidden md:rounded-l-3xl">
          <div
            ref={imageRef}
            className="absolute inset-0 w-full h-full transition-transform"
            style={{
              animation: 'fadeInRight 0.8s cubic-bezier(0.4,0,0.2,1) 0.5s both'
            }}
          >
            <img
              src={siteContent.hero.image}
              alt="Beautiful travel destination"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};
