import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={cn(
              'flex flex-col transition-all duration-300',
              isScrolled ? 'scale-90' : 'scale-100'
            )}
          >
            <span
              className={cn(
                'font-display text-xl sm:text-2xl font-semibold tracking-wide',
                isScrolled ? 'text-hotel-black' : 'text-white'
              )}
            >
              Hotel Maratha Regency
            </span>
            <span
              className={cn(
                'text-xs font-body tracking-widest',
                isScrolled ? 'text-gold' : 'text-white/80'
              )}
            >
              KOLHAPUR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'relative font-body text-sm font-medium transition-colors duration-300 gold-underline py-1',
                  isScrolled
                    ? isActive(link.href)
                      ? 'text-gold'
                      : 'text-hotel-black hover:text-gold'
                    : isActive(link.href)
                    ? 'text-gold'
                    : 'text-white hover:text-gold'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+917028118757"
              className={cn(
                'flex items-center gap-2 font-body text-sm font-medium transition-colors duration-300',
                isScrolled ? 'text-hotel-black' : 'text-white'
              )}
            >
              <Phone className="w-4 h-4" />
              <span>+91 7028118757</span>
            </a>
            <MagneticButton>
              <button
                onClick={() => navigate('/booking')}
                className="btn-gold text-sm"
              >
                Book Now
              </button>
            </MagneticButton>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <button
                className={cn(
                  'p-2 transition-colors',
                  isScrolled ? 'text-hotel-black' : 'text-white'
                )}
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b">
                  <span className="font-display text-xl font-semibold">
                    Menu
                  </span>
                  <button onClick={() => setIsOpen(false)}>
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <nav className="flex flex-col p-6 gap-4">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'font-body text-lg font-medium py-2 border-b border-gray-100 transition-colors',
                        isActive(link.href)
                          ? 'text-gold'
                          : 'text-hotel-black hover:text-gold'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto p-6 border-t">
                  <a
                    href="tel:+917028118757"
                    className="flex items-center gap-2 text-hotel-black mb-4"
                  >
                    <Phone className="w-5 h-5 text-gold" />
                    <span className="font-body">+91 7028118757</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      navigate('/booking');
                    }}
                    className="w-full btn-gold"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
