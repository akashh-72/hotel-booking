import { useNavigate } from 'react-router-dom';
import { Wine, Clock, Music, Utensils, Users, Sparkles } from 'lucide-react';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';

export default function Bar() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Wine,
      title: 'Premium Spirits',
      description: 'Wide selection of imported and domestic liquors',
    },
    {
      icon: Utensils,
      title: 'Bar Bites',
      description: 'Delicious snacks and appetizers',
    },
    {
      icon: Music,
      title: 'Live Music',
      description: 'Weekend performances by local artists',
    },
    {
      icon: Users,
      title: 'Private Events',
      description: 'Host your parties and celebrations',
    },
  ];

  const drinks = [
    'Cocktails',
    'Mocktails',
    'Premium Spirits',
    'Wines',
    'Beers',
    'Whisky',
  ];

  return (
    <main className="min-h-screen pt-24 lg:pt-32">
      {/* Page Header */}
      <section className="bg-hotel-black py-20 lg:py-28">
        <div className="section-padding">
          <RevealOnScroll className="text-center">
            <span className="label-text mb-4 block">Unwind & Relax</span>
            <h1 className="heading-xl text-white mb-6">
              Fizz <span className="text-gold">Rest-O-Bar</span>
            </h1>
            <p className="body-lg text-white/70 max-w-2xl mx-auto">
              Unwind with a twist and enjoy a wide array of cocktails, mocktails, 
              and spirits at our Fizz Resto Bar. The perfect place to relax and 
              release stress.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content Column */}
              <div>
                <RevealOnScroll direction="right">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-6 h-6 text-gold" />
                    <span className="label-text">Bar + Restaurant</span>
                  </div>
                </RevealOnScroll>

                <RevealOnScroll delay={100} direction="right">
                  <h2 className="heading-md text-hotel-black mb-6">
                    Sip, Savor, 
                    <span className="text-gold"> & Celebrate</span>
                  </h2>
                </RevealOnScroll>

                <RevealOnScroll delay={200} direction="right">
                  <p className="body-lg mb-6">
                    Our Hotel also consists of Fizz Rest-O-Bar, a unique combination 
                    of Bar and Restaurant. Where you can get delicious food with 
                    alcoholic beverages. So you can relax a bit and release stress.
                  </p>
                </RevealOnScroll>

                <RevealOnScroll delay={300} direction="right">
                  <p className="body-text mb-8">
                    Whether you are looking for a place to unwind after a long day 
                    or celebrate a special occasion, Fizz Rest-O-Bar offers the 
                    perfect ambiance with great music, delicious food, and an 
                    extensive selection of beverages.
                  </p>
                </RevealOnScroll>

                {/* Drink Menu */}
                <RevealOnScroll delay={400} direction="right">
                  <h4 className="font-display text-lg font-semibold mb-4">
                    Our Beverages
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {drinks.map((drink, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-hotel-gray-light font-body text-sm"
                      >
                        {drink}
                      </span>
                    ))}
                  </div>
                </RevealOnScroll>

                {/* Timings */}
                <RevealOnScroll delay={500} direction="right">
                  <div className="bg-hotel-gray-light p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="w-5 h-5 text-gold" />
                      <span className="font-body text-sm font-medium">
                        Opening Hours
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="block font-body text-xs text-hotel-gray-text">
                          Monday - Thursday
                        </span>
                        <span className="font-body text-sm font-medium">
                          4:00 PM - 11:00 PM
                        </span>
                      </div>
                      <div>
                        <span className="block font-body text-xs text-hotel-gray-text">
                          Friday - Sunday
                        </span>
                        <span className="font-body text-sm font-medium">
                          4:00 PM - 12:00 AM
                        </span>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>

              {/* Image Column */}
              <RevealOnScroll direction="left">
                <div className="relative">
                  <div className="relative overflow-hidden">
                    <img
                      src="/images/bar/fizz-bar.jpg"
                      alt="Fizz Rest-O-Bar"
                      className="w-full h-[400px] lg:h-[500px] object-cover"
                    />
                  </div>
                  {/* Decorative Frame */}
                  <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-gold -z-10" />
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-32 bg-hotel-gray-light">
        <div className="section-padding">
          <RevealOnScroll className="text-center mb-12">
            <span className="label-text mb-4 block">Why Choose Us</span>
            <h2 className="heading-lg text-hotel-black">
              The Fizz <span className="text-gold">Experience</span>
            </h2>
          </RevealOnScroll>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <RevealOnScroll key={index} delay={index * 100}>
                  <div className="bg-white p-6 text-center group hover:shadow-luxury transition-all duration-300 hover:-translate-y-2">
                    <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold transition-colors duration-300">
                      <feature.icon className="w-7 h-7 text-gold group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h4 className="font-display text-lg font-semibold mb-2">
                      {feature.title}
                    </h4>
                    <p className="font-body text-sm text-hotel-gray-text">
                      {feature.description}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Drinks Gallery */}
      <section className="py-20 lg:py-32 bg-hotel-black">
        <div className="section-padding">
          <RevealOnScroll className="text-center mb-12">
            <span className="label-text mb-4 block">Our Collection</span>
            <h2 className="heading-lg text-white">
              Signature <span className="text-gold">Drinks</span>
            </h2>
          </RevealOnScroll>

          <div className="max-w-5xl mx-auto">
            <RevealOnScroll delay={200}>
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/images/bar/drinks.jpg"
                  alt="Signature Drinks"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="font-display text-2xl lg:text-3xl text-white mb-2">
                    Crafted with Passion
                  </h3>
                  <p className="text-white/80 font-body">
                    Our expert bartenders create the perfect blend of flavors
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <RevealOnScroll className="text-center max-w-3xl mx-auto">
            <Wine className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="heading-md text-hotel-black mb-4">
              Ready to <span className="text-gold">Unwind?</span>
            </h2>
            <p className="body-lg mb-8">
              Visit Fizz Rest-O-Bar today and experience the perfect blend of 
              great food, amazing drinks, and lively atmosphere.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate('/booking')}
                className="btn-gold"
              >
                Reserve a Table
              </button>
              <a
                href="tel:+917028118757"
                className="btn-outline"
              >
                Call Now
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
