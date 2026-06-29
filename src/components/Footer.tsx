import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap = {
  Instagram,
  Facebook,
  Twitter
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-3xl font-semibold mb-4">
              {siteContent.brandName}
            </h3>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              {siteContent.footer.tagline}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {siteContent.footer.social.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-all duration-300"
                    aria-label={social.platform}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          {siteContent.footer.sections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            {siteContent.footer.copyright}
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
