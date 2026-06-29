import React, { useEffect, useRef, useState } from 'react';
import { Send, MessageCircle, Mail, Phone } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const Contact: React.FC = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Header & Info */}
          <div className={`${isVisible ? 'animate-fadeUp' : 'opacity-0'}`}>
            <p className="text-secondary uppercase tracking-wider text-sm font-semibold mb-3">
              {siteContent.contact.overline}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-text mb-6">
              {siteContent.contact.heading}
            </h2>
            <p className="text-lg text-text-muted leading-relaxed mb-8 max-w-xl">
              {siteContent.contact.subtext}
            </p>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-text-muted mb-1">Email us</p>
                  <a
                    href={`mailto:${siteContent.contact.email}`}
                    className="text-primary font-medium hover:text-secondary transition-colors"
                  >
                    {siteContent.contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-text-muted mb-1">Call us</p>
                  <a
                    href={`tel:${siteContent.contact.phone}`}
                    className="text-primary font-medium hover:text-secondary transition-colors"
                  >
                    {siteContent.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-surface rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-2">
                    {siteContent.contact.whatsapp.text}
                  </h3>
                  <a
                    href={`https://wa.me/${siteContent.contact.whatsapp.number.replace(/\D/g, '')}`}
                    className="text-primary font-medium hover:text-secondary transition-colors inline-flex items-center gap-2"
                  >
                    {siteContent.contact.whatsapp.link}
                    <span className="text-xl">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <p className="text-text-muted">Response within 24 hours</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <p className="text-text-muted">Free consultation & quote</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <p className="text-text-muted">Expert travel advisors</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div
            className={`${isVisible ? 'animate-fadeUp' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder={siteContent.contact.form.namePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder={siteContent.contact.form.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder={siteContent.contact.form.phonePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder={siteContent.contact.form.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-accent text-white py-4 rounded-full font-semibold hover:bg-secondary hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  {siteContent.contact.form.submitButton}
                  <Send size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
