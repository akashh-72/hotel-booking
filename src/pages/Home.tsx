import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Accommodation } from '@/sections/Accommodation';
import { Services } from '@/sections/Services';
import { Testimonials } from '@/sections/Testimonials';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Accommodation />
      <Services />
      <Testimonials />
    </main>
  );
}
