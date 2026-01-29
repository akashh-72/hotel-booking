import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { TESTIMONIALS } from '@/lib/constants';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  const prevTestimonial = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  return (
    <section className="py-20 lg:py-32 bg-hotel-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="section-padding relative z-10">
        {/* Section Header */}
        <RevealOnScroll className="text-center mb-16">
          <span className="label-text mb-4 block">Testimonials</span>
          <h2 className="heading-lg text-white">
            What Our
            <span className="text-gold"> Guests Say</span>
          </h2>
        </RevealOnScroll>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <RevealOnScroll delay={200}>
            <div className="relative">
              {/* Quote Icon */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-white" />
              </div>

              {/* Testimonial Content */}
              <div className="bg-white/5 backdrop-blur-sm pt-16 pb-12 px-8 lg:px-16 text-center">
                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-gold text-gold"
                    />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative overflow-hidden min-h-[120px] flex items-center justify-center">
                  <p
                    key={currentIndex}
                    className="font-display text-xl lg:text-2xl text-white italic leading-relaxed animate-fade-in"
                  >
                    "{TESTIMONIALS[currentIndex].text}"
                  </p>
                </div>

                {/* Author */}
                <div className="mt-8">
                  <h4 className="font-display text-lg font-semibold text-gold">
                    {TESTIMONIALS[currentIndex].name}
                  </h4>
                  <p className="font-body text-sm text-white/60">
                    {TESTIMONIALS[currentIndex].location}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-gold hover:border-gold transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Indicators */}
                <div className="flex items-center gap-2">
                  {TESTIMONIALS.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (!isAnimating) {
                          setIsAnimating(true);
                          setCurrentIndex(index);
                          setTimeout(() => setIsAnimating(false), 600);
                        }
                      }}
                      className={`transition-all duration-300 ${
                        index === currentIndex
                          ? 'w-8 h-2 bg-gold rounded-full'
                          : 'w-2 h-2 bg-white/30 rounded-full hover:bg-white/50'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-gold hover:border-gold transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
