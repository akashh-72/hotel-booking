import { useNavigate } from 'react-router-dom';
import { Utensils, Clock, MapPin, Phone, ChefHat, Star } from 'lucide-react';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';

export default function Restaurant() {
  const navigate = useNavigate();

  const cuisines = [
    'Kolhapuri Special',
    'North Indian',
    'Chinese',
    'Mughlai',
    'Continental',
    'South Indian',
  ];

  const features = [
    'Air Conditioned',
    'Family Friendly',
    'Veg & Non-Veg',
    'Takeaway Available',
    'Home Delivery',
    'Party Orders',
  ];

  return (
    <main className="min-h-screen pt-24 lg:pt-32">
      {/* Page Header */}
      <section className="bg-hotel-black py-20 lg:py-28">
        <div className="section-padding">
          <RevealOnScroll className="text-center">
            <span className="label-text mb-4 block">Dining Experience</span>
            <h1 className="heading-xl text-white mb-6">
              Masala Pot <span className="text-gold">Restaurant</span>
            </h1>
            <p className="body-lg text-white/70 max-w-2xl mx-auto">
              Enjoy flavorful delicacies on your palate under one roof serving 
              Kolhapuri, Chinese, Mughlai, Continental and much more to pamper 
              your taste buds.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image Column */}
              <RevealOnScroll direction="left">
                <div className="relative">
                  <div className="relative overflow-hidden">
                    <img
                      src="/images/restaurant/masala-pot.jpg"
                      alt="Masala Pot Restaurant"
                      className="w-full h-[400px] lg:h-[500px] object-cover"
                    />
                  </div>
                  {/* Decorative Frame */}
                  <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold -z-10" />
                  
                  {/* Rating Badge */}
                  <div className="absolute -top-4 -left-4 bg-gold text-white p-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-white" />
                      <span className="font-display text-2xl font-bold">4.5</span>
                    </div>
                    <span className="text-xs block mt-1">Customer Rating</span>
                  </div>
                </div>
              </RevealOnScroll>

              {/* Content Column */}
              <div>
                <RevealOnScroll>
                  <div className="flex items-center gap-2 mb-4">
                    <ChefHat className="w-6 h-6 text-gold" />
                    <span className="label-text">Multi Cuisine</span>
                  </div>
                </RevealOnScroll>

                <RevealOnScroll delay={100}>
                  <h2 className="heading-md text-hotel-black mb-6">
                    Authentic Flavors, 
                    <span className="text-gold"> Unforgettable Taste</span>
                  </h2>
                </RevealOnScroll>

                <RevealOnScroll delay={200}>
                  <p className="body-lg mb-6">
                    We offer Indoor Restaurant to our visitors. We serve truly 
                    Delicious food as per order. We Serve Veg & Non Veg food with 
                    authentic Kolhapuri taste. AC Restaurant Facility available.
                  </p>
                </RevealOnScroll>

                <RevealOnScroll delay={300}>
                  <p className="body-text mb-8">
                    Our expert chefs use the finest ingredients to create dishes 
                    that will tantalize your taste buds. From traditional Kolhapuri 
                    specialties to international cuisines, we have something for everyone.
                  </p>
                </RevealOnScroll>

                {/* Cuisines */}
                <RevealOnScroll delay={400}>
                  <h4 className="font-display text-lg font-semibold mb-4">
                    Our Cuisines
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {cuisines.map((cuisine, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-hotel-gray-light font-body text-sm"
                      >
                        {cuisine}
                      </span>
                    ))}
                  </div>
                </RevealOnScroll>

                {/* Features */}
                <RevealOnScroll delay={500}>
                  <h4 className="font-display text-lg font-semibold mb-4">
                    Restaurant Features
                  </h4>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gold rounded-full" />
                        <span className="font-body text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </RevealOnScroll>

                {/* Contact Info */}
                <RevealOnScroll delay={600}>
                  <div className="bg-hotel-gray-light p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-gold" />
                        <div>
                          <span className="block font-body text-xs text-hotel-gray-text">
                            Opening Hours
                          </span>
                          <span className="font-body text-sm font-medium">
                            7:00 AM - 11:00 PM
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-gold" />
                        <div>
                          <span className="block font-body text-xs text-hotel-gray-text">
                            Reservations
                          </span>
                          <span className="font-body text-sm font-medium">
                            +91 7028118757
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Gallery */}
      <section className="py-20 lg:py-32 bg-hotel-gray-light">
        <div className="section-padding">
          <RevealOnScroll className="text-center mb-12">
            <span className="label-text mb-4 block">Our Specialties</span>
            <h2 className="heading-lg text-hotel-black">
              Delicious <span className="text-gold">Food</span>
            </h2>
          </RevealOnScroll>

          <div className="max-w-6xl mx-auto">
            <RevealOnScroll delay={200}>
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/images/restaurant/food-1.jpg"
                  alt="Delicious Food"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="font-display text-2xl lg:text-3xl text-white mb-2">
                    Authentic Kolhapuri Cuisine
                  </h3>
                  <p className="text-white/80 font-body">
                    Experience the rich flavors of Maharashtra
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hotel-black">
        <div className="section-padding">
          <RevealOnScroll className="text-center max-w-3xl mx-auto">
            <Utensils className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="heading-md text-white mb-4">
              Ready to <span className="text-gold">Dine With Us?</span>
            </h2>
            <p className="body-lg text-white/70 mb-8">
              Visit us today and experience the best of Kolhapuri hospitality. 
              For reservations, call us or book online.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate('/booking')}
                className="btn-gold"
              >
                Make a Reservation
              </button>
              <a
                href="tel:+917028118757"
                className="btn-outline border-white text-white hover:bg-white hover:text-hotel-black"
              >
                Call for Delivery
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
