import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MagneticButton } from '@/components/animations/MagneticButton';

const slides = [
  {
    image: '/images/hero/hero-1.jpg',
    title: 'Hotel Maratha Regency',
    subtitle: 'Best Place for Your Lunch & Dinner',
  },
  {
    image: '/images/hero/hero-2.jpg',
    title: 'Experience Luxury',
    subtitle: 'Where Comfort Meets Elegance',
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 1000);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 1000);
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            index === currentSlide
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-110'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <div className="max-w-4xl mx-auto">
          {/* Animated Title */}
          <div className="overflow-hidden mb-4">
            <h1
              key={`title-${currentSlide}`}
              className="heading-xl text-white animate-fade-in-up"
            >
              {slides[currentSlide].title}
            </h1>
          </div>

          {/* Animated Subtitle */}
          <div className="overflow-hidden mb-8">
            <p
              key={`subtitle-${currentSlide}`}
              className="font-accent text-3xl sm:text-4xl lg:text-5xl text-gold animate-fade-in-up animation-delay-200"
            >
              {slides[currentSlide].subtitle}
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            key={`cta-${currentSlide}`}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400"
          >
            <MagneticButton>
              <button
                onClick={() => navigate('/booking')}
                className="btn-gold px-10 py-4 text-base"
              >
                Book Now
              </button>
            </MagneticButton>
            <button
              onClick={() => navigate('/rooms')}
              className="btn-outline border-white text-white hover:bg-white hover:text-hotel-black px-10 py-4 text-base"
            >
              Explore Rooms
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gold transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gold transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentSlide(index);
                setTimeout(() => setIsAnimating(false), 1000);
              }
            }}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 h-2 bg-gold rounded-full'
                : 'w-2 h-2 bg-white/50 rounded-full hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 hidden lg:block">
        <div className="flex flex-col items-center gap-2 text-white/70">
          <span className="text-xs font-body tracking-widest uppercase rotate-90 origin-center translate-y-8">
            Scroll
          </span>
          <div className="w-px h-16 bg-white/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-4 bg-gold animate-[float_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </section>
  );
}
