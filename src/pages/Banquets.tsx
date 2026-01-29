import { useNavigate } from 'react-router-dom';
import { Users, Check, Calendar, Utensils, Car, Wind } from 'lucide-react';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { BANQUET_HALLS } from '@/lib/constants';

export default function Banquets() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen pt-24 lg:pt-32">
      {/* Page Header */}
      <section className="bg-hotel-black py-20 lg:py-28">
        <div className="section-padding">
          <RevealOnScroll className="text-center">
            <span className="label-text mb-4 block">Events & Celebrations</span>
            <h1 className="heading-xl text-white mb-6">
              Banquet <span className="text-gold">Halls</span>
            </h1>
            <p className="body-lg text-white/70 max-w-2xl mx-auto">
              Host your special events in our elegant banquet halls. From weddings 
              to corporate meetings, we have the perfect space for every occasion.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Banquet Halls */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="section-padding">
          <div className="max-w-7xl mx-auto space-y-20">
            {BANQUET_HALLS.map((hall, index) => (
              <RevealOnScroll
                key={hall.id}
                delay={index * 150}
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative overflow-hidden group">
                      <img
                        src={hall.image}
                        alt={hall.name}
                        className="w-full h-[350px] lg:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      
                      {/* Capacity Badge */}
                      <div className="absolute bottom-6 left-6 bg-gold text-white px-6 py-3 flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        <div>
                          <span className="font-display text-xl font-semibold">
                            {hall.capacity}
                          </span>
                          <span className="text-xs block">Capacity</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <span className="label-text mb-4 block">Banquet Hall</span>
                    <h2 className="heading-md text-hotel-black mb-4">
                      {hall.name}
                    </h2>
                    <p className="body-lg mb-6">{hall.description}</p>

                    {/* Features */}
                    <h4 className="font-display text-lg font-semibold mb-4">
                      Hall Features
                    </h4>
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {hall.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-gold flex-shrink-0" />
                          <span className="font-body text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Quick Info */}
                    <div className="flex flex-wrap gap-4 mb-8">
                      <div className="flex items-center gap-2 text-hotel-gray-text">
                        <Calendar className="w-4 h-4 text-gold" />
                        <span className="text-sm font-body">Event Planning</span>
                      </div>
                      <div className="flex items-center gap-2 text-hotel-gray-text">
                        <Utensils className="w-4 h-4 text-gold" />
                        <span className="text-sm font-body">Catering</span>
                      </div>
                      <div className="flex items-center gap-2 text-hotel-gray-text">
                        <Car className="w-4 h-4 text-gold" />
                        <span className="text-sm font-body">Valet Parking</span>
                      </div>
                      <div className="flex items-center gap-2 text-hotel-gray-text">
                        <Wind className="w-4 h-4 text-gold" />
                        <span className="text-sm font-body">AC</span>
                      </div>
                    </div>

                    <button
                      onClick={() => navigate('/booking')}
                      className="btn-gold"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hotel-gray-light">
        <div className="section-padding">
          <RevealOnScroll className="text-center max-w-3xl mx-auto">
            <h2 className="heading-md text-hotel-black mb-4">
              Plan Your <span className="text-gold">Perfect Event</span>
            </h2>
            <p className="body-lg mb-8">
              Let our experienced event planning team help you create unforgettable 
              memories. Contact us today to discuss your requirements and get a 
              customized quote.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate('/booking')}
                className="btn-gold"
              >
                Enquire Now
              </button>
              <a
                href="tel:+917028118757"
                className="btn-outline"
              >
                Call Us
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
