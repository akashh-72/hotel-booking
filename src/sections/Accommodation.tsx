import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Bed, Users, Maximize } from 'lucide-react';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { ROOMS } from '@/lib/constants';

export function Accommodation() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 400;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-hotel-gray-light">
      <div className="section-padding">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <RevealOnScroll>
            <div>
              <span className="label-text mb-4 block">Accommodation</span>
              <h2 className="heading-lg text-hotel-black">
                Our Luxury
                <span className="text-gold"> Rooms</span>
              </h2>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="flex items-center gap-3 mt-6 lg:mt-0">
              <button
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full border-2 border-hotel-black flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-all duration-300"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full border-2 border-hotel-black flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-all duration-300"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </RevealOnScroll>
        </div>

        {/* Horizontal Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ROOMS.map((room, index) => (
            <RevealOnScroll
              key={room.id}
              delay={index * 100}
              className="flex-shrink-0 w-[320px] sm:w-[380px] snap-start"
            >
              <div className="bg-white group cursor-pointer">
                {/* Image */}
                <div className="relative overflow-hidden h-[250px]">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-gold text-white px-4 py-2">
                    <span className="font-display text-lg font-semibold">
                      ₹{room.price.toLocaleString()}
                    </span>
                    <span className="text-xs block">/night</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-gold transition-colors">
                    {room.name}
                  </h3>
                  <p className="body-text text-sm line-clamp-2 mb-4">
                    {room.description}
                  </p>

                  {/* Room Info */}
                  <div className="flex items-center gap-4 mb-4 text-hotel-gray-text">
                    <div className="flex items-center gap-1">
                      <Maximize className="w-4 h-4" />
                      <span className="text-xs font-body">{room.size}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      <span className="text-xs font-body">{room.beds}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span className="text-xs font-body">{room.capacity}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => navigate(`/rooms`)}
                    className="w-full py-3 border border-gold text-gold font-body text-sm font-medium hover:bg-gold hover:text-white transition-all duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* View All Button */}
        <RevealOnScroll delay={500} className="text-center mt-12">
          <button
            onClick={() => navigate('/rooms')}
            className="btn-outline"
          >
            View All Rooms
          </button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
