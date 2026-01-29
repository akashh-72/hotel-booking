import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bed, Users, Maximize, Wind, Check, X } from 'lucide-react';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ROOMS } from '@/lib/constants';
import type { Room } from '@/types';

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const navigate = useNavigate();

  return (
    <main className="min-h-screen pt-24 lg:pt-32">
      {/* Page Header */}
      <section className="bg-hotel-black py-20 lg:py-28">
        <div className="section-padding">
          <RevealOnScroll className="text-center">
            <span className="label-text mb-4 block">Accommodation</span>
            <h1 className="heading-xl text-white mb-6">
              Our <span className="text-gold">Rooms</span>
            </h1>
            <p className="body-lg text-white/70 max-w-2xl mx-auto">
              Choose from our selection of comfortable and luxurious rooms, 
              each designed to provide you with a memorable stay experience.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ROOMS.map((room, index) => (
                <RevealOnScroll key={room.id} delay={index * 100}>
                  <div className="bg-white shadow-luxury group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    {/* Image */}
                    <div className="relative overflow-hidden h-[280px]">
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      
                      {/* Price Badge */}
                      <div className="absolute top-4 right-4 bg-gold text-white px-4 py-2">
                        <span className="font-display text-xl font-semibold">
                          ₹{room.price.toLocaleString()}
                        </span>
                        <span className="text-xs block">/night</span>
                      </div>

                      {/* AC Badge */}
                      {room.ac && (
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 flex items-center gap-1">
                          <Wind className="w-4 h-4 text-gold" />
                          <span className="text-xs font-body font-medium">AC</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-display text-2xl font-semibold mb-2 group-hover:text-gold transition-colors">
                        {room.name}
                      </h3>
                      <p className="body-text text-sm line-clamp-2 mb-4">
                        {room.description}
                      </p>

                      {/* Room Info */}
                      <div className="flex items-center gap-4 mb-4 text-hotel-gray-text border-y border-hotel-gray-medium py-3">
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

                      {/* Buttons */}
                      <div className="flex gap-3">
                        <button
                          onClick={() => setSelectedRoom(room)}
                          className="flex-1 py-3 border border-hotel-black text-hotel-black font-body text-sm font-medium hover:bg-hotel-black hover:text-white transition-all duration-300"
                        >
                          Details
                        </button>
                        <button
                          onClick={() => navigate('/booking')}
                          className="flex-1 py-3 bg-gold text-white font-body text-sm font-medium hover:bg-gold-hover transition-all duration-300"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Room Details Dialog */}
      <Dialog open={!!selectedRoom} onOpenChange={() => setSelectedRoom(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
          {selectedRoom && (
            <>
              <div className="relative h-[300px]">
                <img
                  src={selectedRoom.image}
                  alt={selectedRoom.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <DialogHeader>
                    <DialogTitle className="font-display text-3xl text-white">
                      {selectedRoom.name}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="flex items-center gap-4 mt-2 text-white/80">
                    <span className="flex items-center gap-1">
                      <Maximize className="w-4 h-4" />
                      {selectedRoom.size}
                    </span>
                    <span className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      {selectedRoom.beds}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {selectedRoom.capacity}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="body-lg mb-6">{selectedRoom.description}</p>

                {/* Amenities */}
                <h4 className="font-display text-lg font-semibold mb-4">
                  Room Amenities
                </h4>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {selectedRoom.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-gold" />
                      <span className="font-body text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between border-t border-hotel-gray-medium pt-6">
                  <div>
                    <span className="font-display text-3xl font-semibold text-gold">
                      ₹{selectedRoom.price.toLocaleString()}
                    </span>
                    <span className="text-hotel-gray-text text-sm block">per night</span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedRoom(null);
                      navigate('/booking');
                    }}
                    className="btn-gold px-8"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}
