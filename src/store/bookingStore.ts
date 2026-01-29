import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Booking } from '@/types';

interface BookingState {
  bookings: Booking[];
  addBooking: (booking: Omit<Booking, 'id' | 'createdAt' | 'status'>) => void;
  updateBookingStatus: (id: string, status: Booking['status']) => void;
  deleteBooking: (id: string) => void;
  getBookingById: (id: string) => Booking | undefined;
}

export const useBookingStore = create<BookingState>()(
  persist(
    (set, get) => ({
      bookings: [],
      
      addBooking: (bookingData) => {
        const newBooking: Booking = {
          ...bookingData,
          id: Math.random().toString(36).substr(2, 9),
          status: 'pending',
          createdAt: new Date().toISOString(),
        };
        set((state) => ({
          bookings: [newBooking, ...state.bookings],
        }));
      },
      
      updateBookingStatus: (id, status) => {
        set((state) => ({
          bookings: state.bookings.map((booking) =>
            booking.id === id ? { ...booking, status } : booking
          ),
        }));
      },
      
      deleteBooking: (id) => {
        set((state) => ({
          bookings: state.bookings.filter((booking) => booking.id !== id),
        }));
      },
      
      getBookingById: (id) => {
        return get().bookings.find((booking) => booking.id === id);
      },
    }),
    {
      name: 'booking-storage',
    }
  )
);
