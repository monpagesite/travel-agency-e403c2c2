import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="#" className="font-serif text-[28px] font-semibold text-primary">
              {siteContent.brandName}
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {siteContent.nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-text hover:text-primary font-medium text-base transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <button className="hidden md:block bg-accent text-white px-6 py-2.5 rounded-full hover:bg-secondary transition-all duration-300 font-medium">
              Start Planning
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-text hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-primary" />
          <nav className="relative h-full flex flex-col items-center justify-center gap-8">
            {siteContent.nav.links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white text-3xl font-serif font-semibold hover:text-accent transition-colors"
                style={{
                  animation: `fadeIn 0.5s ease ${index * 0.1}s both`
                }}
              >
                {link.label}
              </a>
            ))}
            <button className="mt-8 bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary transition-all duration-300">
              Start Planning
            </button>
          </nav>
        </div>
      )}
    </>
  );
};
