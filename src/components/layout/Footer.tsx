import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Rooms', href: '/rooms' },
    { label: 'Restaurant', href: '/restaurant' },
    { label: 'Banquet Hall', href: '/banquets' },
    { label: 'Fizz Rest-O-Bar', href: '/bar' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <footer className="bg-hotel-black text-white">
      <div className="section-padding py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <h3 className="font-display text-2xl font-semibold text-white mb-1">
                Hotel Maratha Regency
              </h3>
              <span className="text-gold text-sm font-body tracking-widest">
                KOLHAPUR
              </span>
            </Link>
            <p className="body-text text-white/70 mb-6">
              Experience timeless luxury and modern comfort in the heart of
              Kolhapur. Your perfect stay awaits.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-gold">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-white/70 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-gold">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  {CONTACT_INFO.phone.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="block font-body text-white/70 hover:text-gold transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="font-body text-white/70 hover:text-gold transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <span className="font-body text-white/70">
                  {CONTACT_INFO.address}
                </span>
              </li>
            </ul>
          </div>

          {/* Map or Additional Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-gold">
              Our Location
            </h4>
            <div className="bg-white/5 rounded-lg p-4 mb-4">
              <p className="font-body text-sm text-white/70 mb-3">
                Conveniently located in the heart of Kolhapur city, close to
                Mahalaxmi Temple and major transport hubs.
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-body text-sm"
              >
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-padding py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-white/50 text-center md:text-left">
              Copyright © {currentYear} Hotel Maratha Regency. All Rights
              Reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/terms"
                className="font-body text-sm text-white/50 hover:text-gold transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/admin"
                className="font-body text-sm text-white/50 hover:text-gold transition-colors"
              >
                Admin Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
