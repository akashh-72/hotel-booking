import type { Room, BanquetHall, Testimonial, Service, ContactInfo, BankDetails, NavLink } from '@/types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Rooms', href: '/rooms' },
  { label: 'Banquets', href: '/banquets' },
  { label: 'Restaurant', href: '/restaurant' },
  { label: 'Fizz Rest-O-Bar', href: '/bar' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Contact Us', href: '/contact' },
];

export const ROOMS: Room[] = [
  {
    id: 'royal-suite',
    name: 'Royal Suite',
    description: 'Our Royal Suite is the epitome of luxury, offering a multi-room haven with a private terrace garden where guests can relax and unwind. Experience unparalleled comfort with premium amenities and personalized service.',
    size: '1200 sq.ft',
    price: 15000,
    image: '/images/rooms/royal-suite.jpg',
    amenities: ['King Size Bed', 'Private Terrace', 'Jacuzzi', 'Mini Bar', 'Smart TV', 'Free WiFi', 'Room Service', 'Air Conditioning'],
    beds: '1 King Size',
    capacity: '2 Adults + 2 Children',
    ac: true,
  },
  {
    id: 'superior-room',
    name: 'Superior Room',
    description: 'Our Superior Rooms are spacious retreats with beautifully curated interiors designed for guests who appreciate comfort and elegance. Perfect for both business and leisure travelers.',
    size: '300 sq.ft',
    price: 5000,
    image: '/images/rooms/superior-room.jpg',
    amenities: ['Queen Size Bed', 'Work Desk', 'Mini Fridge', 'LED TV', 'Free WiFi', 'Room Service', 'Air Conditioning'],
    beds: '1 Queen Size',
    capacity: '2 Adults + 1 Child',
    ac: true,
  },
  {
    id: 'deluxe-studio',
    name: 'Deluxe Studio',
    description: 'Our Deluxe Studio is a perfect blend of modern design and elegance, suiting both business and social travelers. Enjoy a comfortable stay with all essential amenities.',
    size: '250 sq.ft',
    price: 3500,
    image: '/images/rooms/deluxe-studio.jpg',
    amenities: ['Double Bed', 'Work Desk', 'Mini Fridge', 'LED TV', 'Free WiFi', 'Room Service', 'Air Conditioning'],
    beds: '1 Double Bed',
    capacity: '2 Adults',
    ac: true,
  },
  {
    id: 'deluxe-twin',
    name: 'Deluxe Studio Twin Bed',
    description: 'Our Deluxe Twin Room is a high-quality service package designed for guests traveling in groups or with family. Two comfortable single beds with premium facilities.',
    size: '250 sq.ft',
    price: 3500,
    image: '/images/rooms/deluxe-twin.jpg',
    amenities: ['Two Single Beds', 'Work Desk', 'Mini Fridge', 'LED TV', 'Free WiFi', 'Room Service', 'Air Conditioning'],
    beds: '2 Single Beds',
    capacity: '2 Adults',
    ac: true,
  },
  {
    id: 'deluxe-twin-nonac',
    name: 'Deluxe Studio Twin Bed Non-AC',
    description: 'A budget-friendly yet high-quality service package for cost-conscious travelers. Enjoy a comfortable stay with natural ventilation and all basic amenities.',
    size: '250 sq.ft',
    price: 2500,
    image: '/images/rooms/deluxe-twin-nonac.jpg',
    amenities: ['Two Single Beds', 'Work Desk', 'LED TV', 'Free WiFi', 'Ceiling Fan', 'Room Service'],
    beds: '2 Single Beds',
    capacity: '2 Adults',
    ac: false,
  },
];

export const BANQUET_HALLS: BanquetHall[] = [
  {
    id: 'emerald-hall',
    name: 'Emerald Hall',
    capacity: '150 Pax',
    description: 'Our grand Emerald Hall is perfect for large weddings, corporate events, and grand celebrations. With elegant decor and state-of-the-art facilities, it creates memorable experiences.',
    image: '/images/banquets/emerald-hall.jpg',
    features: ['150 Guest Capacity', 'Stage Setup', 'Audio-Visual System', 'Catering Service', 'Valet Parking', 'Air Conditioning'],
  },
  {
    id: 'pearl-hall',
    name: 'Pearl Hall',
    capacity: '50 Pax',
    description: 'Pearl Hall is ideal for medium-sized gatherings, corporate meetings, and private parties. Modern amenities with an intimate setting for your special events.',
    image: '/images/banquets/pearl-hall.jpg',
    features: ['50 Guest Capacity', 'Projector Screen', 'Conference Setup', 'Catering Service', 'Air Conditioning'],
  },
  {
    id: 'ruby-hall',
    name: 'Ruby Hall',
    capacity: '20 Pax',
    description: 'Ruby Hall offers an intimate setting for small family gatherings, private dinners, and business meetings. Cozy ambiance with personalized service.',
    image: '/images/banquets/ruby-hall.jpg',
    features: ['20 Guest Capacity', 'Private Dining Setup', 'Audio System', 'Catering Service', 'Air Conditioning'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rutuja & Rajesh Patil',
    location: 'Nashik, Maharashtra',
    text: 'Spacious Premises, Luxurious & Well Designed Rooms, Great Hospitality, Tasty Food. We will visit again!',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sanjay Sharma',
    location: 'Mumbai, Maharashtra',
    text: 'Decent Rooms, Restaurant with Delicious Food, Guest Friendly Environment & Center of the city location. Highly recommended!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Priya Deshmukh',
    location: 'Pune, Maharashtra',
    text: 'Food - check. Accommodation - check. Scenery - check. Yes I think this could be the most perfect place to be!',
    rating: 5,
  },
];

export const SERVICES: Service[] = [
  {
    id: 'banquet',
    title: 'Banquet Hall',
    description: 'We Offer 4 Halls for various events and functions - family events and corporate events. One Banquet Hall & Three Medium size halls mainly Pearl, Emerald and Ruby.',
    image: '/images/banquets/emerald-hall.jpg',
    link: '/banquets',
  },
  {
    id: 'restaurant',
    title: 'Masala Pot Restaurant',
    description: 'We offer Indoor Restaurant to our visitors. We serve truly Delicious food as per order. We Serve Veg & Non Veg food with authentic Kolhapuri taste. AC Restaurant Facility available.',
    image: '/images/restaurant/masala-pot.jpg',
    link: '/restaurant',
  },
  {
    id: 'bar',
    title: 'Fizz Rest-o-Bar',
    description: 'Our Hotel also consists of Fizz Rest-O-Bar, It is Bar + Restaurant. Where you can get delicious food with alcoholic beverages. So you can relax a bit & release stress.',
    image: '/images/bar/fizz-bar.jpg',
    link: '/bar',
  },
];

export const CONTACT_INFO: ContactInfo = {
  phone: ['+91 9175117877', '+91 7028118757'],
  email: 'hotelmaratharegency@yahoo.co.in',
  address: 'No.205, A/E, Tarabai Rd, Near Sasne Ground, New Shahupuri, Kolhapur, Maharashtra 416001',
  website: 'https://www.hotelmaratharegency.com',
};

export const BANK_DETAILS: BankDetails = {
  accountName: 'HOTEL MARATHA REGENCY',
  accountNumber: '0665102000011167',
  bankName: 'IDBI Bank',
  ifsc: 'IBKL0000665',
  branch: 'Tarabai Park',
};

export const DISTANCES = [
  { location: 'Mahalaxmi Temple', distance: '3 Km' },
  { location: 'Railway Station', distance: '900 Mtrs' },
  { location: 'Airport', distance: '9.2 Kms' },
  { location: 'Central Bus Stand', distance: '600 Mtrs' },
];

export const TERMS_AND_CONDITIONS = [
  'Subject to Kolhapur jurisdiction.',
  'Check in - Check out time is 12 noon.',
  'Kindly confirm your room plan before Check-in.',
  'Bills to be settled upon presentation or before check in as requested at front office.',
  'Identification proof is mandatory, unmarried couples shall not be allocated rooms, failure of producing valid ID card will lead to cancellation of room booking without Refund.',
  'Child above 5 years shall be considered as extra Person and shall be charged.',
  'Pets are not allowed.',
  'Smoking cigarettes & chewing of tobacco in hotel premises is prohibited.',
  'Guest will be held responsible for any loss or damage to hotel property and same will be charged as applicable.',
  'Carrying / consuming/ordering of outside food/ beverages in hotel premises is prohibited, Any goods of hazardous nature shall not be permitted in hotel premises.',
  'Hotel management holds full authority to vacate guest room along with his/her luggage if the guest is found not obliging to hotel policy.',
  'Hotel Management does not hold itself responsible in case of any accident/damage occurring to guest anywhere in hotel premises.',
  'Visitors are not permitted in guest room.',
  'Hotel management does not hold itself responsible for any disparity / variation in room images/information/schemes offers/payments/refunds or any form of commitment etc. For bookings created through any travel agent/company/portal online/offline.',
  'Due to any unforeseen condition if hotel management is unable to allocate rooms to guest, then management\'s responsibility shall limit to refund of advance amount only if any, Hotel management shall not be liable for any alternate arrangements.',
  'Parking facility is subject to availability & management shall not be responsible for any loss or damage to vehicles parked in hotel premises.',
];
