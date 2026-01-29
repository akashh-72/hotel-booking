import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { TERMS_AND_CONDITIONS } from '@/lib/constants';
import { AlertCircle } from 'lucide-react';

export default function Terms() {
  return (
    <main className="min-h-screen pt-24 lg:pt-32">
      {/* Page Header */}
      <section className="bg-hotel-black py-20 lg:py-28">
        <div className="section-padding">
          <RevealOnScroll className="text-center">
            <span className="label-text mb-4 block">Policies</span>
            <h1 className="heading-xl text-white mb-6">
              Terms & <span className="text-gold">Conditions</span>
            </h1>
            <p className="body-lg text-white/70 max-w-2xl mx-auto">
              We request our guests to carefully read and understand the following 
              terms and conditions before making a reservation.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            {/* Important Notice */}
            <RevealOnScroll>
              <div className="bg-gold/10 border-l-4 border-gold p-6 mb-12">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-2">
                      Important Notice
                    </h3>
                    <p className="font-body text-sm text-hotel-gray-text">
                      By making a reservation at Hotel Maratha Regency, you agree 
                      to abide by all the terms and conditions mentioned below. 
                      Failure to comply may result in cancellation of your booking 
                      without refund.
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Terms List */}
            <div className="space-y-6">
              {TERMS_AND_CONDITIONS.map((term, index) => (
                <RevealOnScroll key={index} delay={index * 50}>
                  <div className="flex items-start gap-4 p-6 bg-hotel-gray-light hover:bg-white hover:shadow-luxury transition-all duration-300">
                    <span className="w-8 h-8 bg-gold text-white rounded-full flex items-center justify-center flex-shrink-0 font-display font-semibold text-sm">
                      {index + 1}
                    </span>
                    <p className="font-body text-hotel-black leading-relaxed pt-1">
                      {term}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            {/* Contact for Queries */}
            <RevealOnScroll delay={500}>
              <div className="mt-12 p-8 bg-hotel-black text-white text-center">
                <h3 className="font-display text-2xl font-semibold mb-4">
                  Have Questions?
                </h3>
                <p className="font-body text-white/70 mb-6">
                  If you have any questions about our terms and conditions, 
                  please feel free to contact us.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="tel:+917028118757"
                    className="btn-gold"
                  >
                    Call Us
                  </a>
                  <a
                    href="mailto:hotelmaratharegency@yahoo.co.in"
                    className="btn-outline border-white text-white hover:bg-white hover:text-hotel-black"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </main>
  );
}
