export interface Room {
  id: string;
  name: string;
  description: string;
  size: string;
  price: number;
  image: string;
  amenities: string[];
  beds: string;
  capacity: string;
  ac: boolean;
}

export interface BanquetHall {
  id: string;
  name: string;
  capacity: string;
  description: string;
  image: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  message?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'manager';
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface ContactInfo {
  phone: string[];
  email: string;
  address: string;
  website: string;
}

export interface BankDetails {
  accountName: string;
  accountNumber: string;
  bankName: string;
  ifsc: string;
  branch: string;
}
