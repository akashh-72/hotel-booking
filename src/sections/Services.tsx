import { useNavigate } from 'react-router-dom';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { SERVICES } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';

export function Services() {
  const navigate = useNavigate();

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="section-padding">
        {/* Section Header */}
        <RevealOnScroll className="text-center mb-16">
          <span className="label-text mb-4 block">Our Services</span>
          <h2 className="heading-lg text-hotel-black">
            Experience the
            <span className="text-gold"> Best</span>
          </h2>
        </RevealOnScroll>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <RevealOnScroll
                key={service.id}
                delay={index * 150}
                className="group"
              >
                <div
                  className={`relative overflow-hidden cursor-pointer ${
                    index === 0 ? 'lg:row-span-2 lg:h-full' : 'h-[300px] lg:h-[350px]'
                  }`}
                  onClick={() => navigate(service.link)}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-6 lg:p-8">
                    <span className="label-text text-gold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                      Explore
                    </span>
                    <h3 className="font-display text-2xl lg:text-3xl font-semibold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="font-body text-white/80 text-sm leading-relaxed mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-gold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <span className="font-body text-sm font-medium">
                        Learn More
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
