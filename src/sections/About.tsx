import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { DISTANCES } from '@/lib/constants';
import { MapPin } from 'lucide-react';

export function About() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -rotate-90 text-[15vw] font-display font-bold text-hotel-gray-light/30 whitespace-nowrap pointer-events-none select-none origin-left translate-x-[20%]">
        MARATHA REGENCY
      </div>

      <div className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Column */}
            <RevealOnScroll direction="left">
              <div className="relative">
                <div className="relative overflow-hidden">
                  <img
                    src="/images/about/about-room.jpg"
                    alt="Hotel Room"
                    className="w-full h-[400px] lg:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                {/* Decorative Frame */}
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold -z-10" />
                
                {/* Experience Badge */}
                <div className="absolute -bottom-8 -left-8 bg-gold text-white p-6 lg:p-8">
                  <span className="block font-display text-4xl lg:text-5xl font-bold">48</span>
                  <span className="font-body text-sm uppercase tracking-wider">Luxury Rooms</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Content Column */}
            <div className="lg:pl-8">
              <RevealOnScroll>
                <span className="label-text mb-4 block">Welcome to</span>
              </RevealOnScroll>
              
              <RevealOnScroll delay={100}>
                <h2 className="heading-lg text-hotel-black mb-6">
                  Hotel Maratha Regency
                  <span className="block text-gold">Kolhapur</span>
                </h2>
              </RevealOnScroll>

              <RevealOnScroll delay={200}>
                <p className="body-lg mb-6">
                  Hotel Maratha Regency is a modern age budget hotel with 48 rooms, 
                  conveniently located in the heart of Kolhapur city. The hotel is 
                  equipped with all essential amenities along with easy access and 
                  close proximity to public transport and famous tourist places, 
                  especially Mahalaxmi Temple, making it ideal for business, pilgrim, 
                  and leisure travelers.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={300}>
                <p className="body-text mb-8">
                  Our hotel offers spacious accommodation, delicious food, and an array 
                  of beverages to please the taste buds, along with two contemporary 
                  spaces to suit corporate and social occasions. Our aim is to provide 
                  the best experience and offer every guest a comfortable and memorable stay.
                </p>
              </RevealOnScroll>

              {/* Distances */}
              <RevealOnScroll delay={400}>
                <div className="bg-hotel-gray-light p-6">
                  <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-gold" />
                    Distances From Important Locations
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {DISTANCES.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between border-b border-hotel-gray-medium pb-2"
                      >
                        <span className="font-body text-sm text-hotel-gray-text">
                          {item.location}
                        </span>
                        <span className="font-body text-sm font-medium text-gold">
                          {item.distance}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
