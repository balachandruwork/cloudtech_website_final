import type { RentalProduct } from '@/types/product.types';
import dellLatitudeImg from '@/assets/images/dell_latitude_laptop_1794999745585.jpg';
import hpElitebookImg from '@/assets/images/hp_elitebook_laptop_1794999746500.jpg';
import lenovoThinkpadImg from '@/assets/images/lenovo_thinkpad_laptop_1794999746552.jpg';
import macbookAirImg from '@/assets/images/macbook_air_laptop_1794999747306.jpg';
import macbookProImg from '@/assets/images/macbook_pro_laptop_1794999747254.jpg';
import asusGamingImg from '@/assets/images/asus_gaming_laptop_1794999748669.jpg';
import hpElitedeskImg from '@/assets/images/hp_elitedesk_desktop_1794999748062.jpg';
import dellOptiplexImg from '@/assets/images/dell_optiplex_desktop_1794999748827.jpg';

export const RENTAL_PRODUCTS: RentalProduct[] = [
  // Laptops
  {
    id: 'r1',
    name: 'Dell Latitude 5540',
    brand: 'Dell',
    category: 'laptop',
    shortDescription: 'Business-grade laptop ideal for office teams and field operations.',
    description:
      'The Dell Latitude 5540 is a dependable business laptop powered by a 13th Gen Intel Core i5 processor, well-suited for startups, remote staff, training sessions, and project-based deployments.',
    specs: {
      processor: 'Intel Core i5-13th Gen',
      ram: '16 GB DDR4',
      storage: '512 GB SSD',
      display: '15.6" FHD IPS',
      os: 'Windows 11 Pro',
      weight: '1.78 kg',
    },
    images: [dellLatitudeImg],
    thumbnail: dellLatitudeImg,
    pricing: { daily: 400, weekly: 1800, monthly: 3000, minimumPeriod: '1 day' },
    isAvailable: true,
    isFeatured: true,
    tags: ['business', 'office', 'corporate'],
    slug: 'dell-latitude-5540',
    deliveryTime: 'Same Day',
  },
  {
    id: 'r2',
    name: 'HP EliteBook 840',
    brand: 'HP',
    category: 'laptop',
    shortDescription: 'Premium business ultrabook with enterprise security features.',
    description:
      'HP EliteBook 840 G10 combines lightweight portability with strong build quality and Core i7 performance for consulting, management, and software teams.',
    specs: {
      processor: 'Intel Core i7-13th Gen',
      ram: '16 GB DDR5',
      storage: '512 GB NVMe SSD',
      display: '14" FHD IPS',
      os: 'Windows 11 Pro',
      weight: '1.42 kg',
    },
    images: [hpElitebookImg],
    thumbnail: hpElitebookImg,
    pricing: { daily: 500, weekly: 2200, monthly: 3500, minimumPeriod: '1 day' },
    isAvailable: true,
    isFeatured: true,
    tags: ['premium', 'business', 'security'],
    slug: 'hp-elitebook-840',
    deliveryTime: 'Same Day',
  },
  {
    id: 'r3',
    name: 'Lenovo ThinkPad E15',
    brand: 'Lenovo',
    category: 'laptop',
    shortDescription: 'Dependable ThinkPad laptop built for daily business productivity.',
    description:
      'Lenovo ThinkPad E15 with AMD Ryzen 5 offers an ergonomic keyboard, reliable thermals, and smooth compatibility with office and accounting suites.',
    specs: {
      processor: 'AMD Ryzen 5 5625U',
      ram: '16 GB DDR4',
      storage: '512 GB SSD',
      display: '15.6" FHD IPS',
      os: 'Windows 11 Pro',
      weight: '1.87 kg',
    },
    images: [lenovoThinkpadImg],
    thumbnail: lenovoThinkpadImg,
    pricing: { daily: 450, weekly: 2000, monthly: 3200, minimumPeriod: '1 day' },
    isAvailable: true,
    isFeatured: false,
    tags: ['thinkpad', 'reliable', 'office'],
    slug: 'lenovo-thinkpad-e15',
    deliveryTime: 'Same Day',
  },
  // MacBooks
  {
    id: 'r4',
    name: 'Apple MacBook Air M2',
    brand: 'Apple',
    category: 'macbook',
    shortDescription: 'Lightweight MacBook Air with Apple M2 chip and all-day battery.',
    description:
      'MacBook Air M2 is thin, silent, and fast — suited for designers, developers, startup founders, and short-term creative projects.',
    specs: {
      processor: 'Apple M2 (8-core CPU)',
      ram: '8 GB Unified Memory',
      storage: '256 GB SSD',
      display: '13.6" Liquid Retina',
      os: 'macOS Ventura',
      weight: '1.24 kg',
    },
    images: [macbookAirImg],
    thumbnail: macbookAirImg,
    pricing: { daily: 600, weekly: 2800, monthly: 3500, minimumPeriod: '1 day' },
    isAvailable: true,
    isFeatured: true,
    tags: ['apple', 'creative', 'lightweight'],
    slug: 'macbook-air-m2',
    deliveryTime: 'Same Day',
  },
  {
    id: 'r5',
    name: 'Apple MacBook Pro M3',
    brand: 'Apple',
    category: 'macbook',
    shortDescription: 'Pro-grade MacBook for software engineering and media editing.',
    description:
      'MacBook Pro with M3 chip delivers sustained compute and display fidelity for video editing, mobile app builds, and demanding creative workflows.',
    specs: {
      processor: 'Apple M3 (8-core CPU, 10-core GPU)',
      ram: '16 GB Unified Memory',
      storage: '512 GB SSD',
      display: '14" Liquid Retina XDR',
      os: 'macOS Sonoma',
      weight: '1.61 kg',
    },
    images: [macbookProImg],
    thumbnail: macbookProImg,
    pricing: { daily: 850, weekly: 4000, monthly: 5000, minimumPeriod: '1 day' },
    isAvailable: true,
    isFeatured: true,
    tags: ['apple', 'pro', 'creative', 'developer'],
    slug: 'macbook-pro-m3',
    deliveryTime: 'Same Day',
  },
  // Gaming Laptops
  {
    id: 'r6',
    name: 'ASUS ROG Strix G15',
    brand: 'Asus',
    category: 'gaming-laptop',
    shortDescription: 'High-performance GPU laptop for events, rendering, and gaming.',
    description:
      'ASUS ROG Strix G15 with NVIDIA RTX 4060 GPU is ideal for gaming tournaments, 3D product demos, CAD workloads, and event showcases.',
    specs: {
      processor: 'AMD Ryzen 7 7745HX',
      ram: '16 GB DDR5',
      storage: '1 TB NVMe SSD',
      display: '15.6" FHD 144Hz',
      graphics: 'NVIDIA RTX 4060 8GB',
      os: 'Windows 11 Home',
    },
    images: [asusGamingImg],
    thumbnail: asusGamingImg,
    pricing: { daily: 1500, weekly: 6500, monthly: 14999, minimumPeriod: '1 day' },
    isAvailable: true,
    isFeatured: true,
    tags: ['gaming', 'event', 'high-performance', 'gpu'],
    slug: 'asus-rog-strix-g15',
    deliveryTime: 'Same Day',
  },
  // Desktops
  {
    id: 'r7',
    name: 'HP EliteDesk 800 G9',
    brand: 'HP',
    category: 'desktop',
    shortDescription: 'Compact business desktop for offices and training labs.',
    description:
      'HP EliteDesk 800 G9 Mini Desktop delivers reliable business computing in a compact footprint for offices, exam centers, and training rooms.',
    specs: {
      processor: 'Intel Core i5-12500',
      ram: '16 GB DDR4',
      storage: '512 GB SSD',
      os: 'Windows 11 Pro',
    },
    images: [hpElitedeskImg],
    thumbnail: hpElitedeskImg,
    pricing: { daily: 300, weekly: 1200, monthly: 2000, minimumPeriod: '1 day' },
    isAvailable: true,
    isFeatured: false,
    tags: ['desktop', 'office', 'training'],
    slug: 'hp-elitedesk-800-g9',
    deliveryTime: '1-2 Days',
  },
  {
    id: 'r8',
    name: 'Dell OptiPlex 7010',
    brand: 'Dell',
    category: 'desktop',
    shortDescription: 'Reliable OptiPlex desktop for steady office deployments.',
    description:
      'Dell OptiPlex 7010 SFF offers proven stability and straightforward maintenance for administrative teams, support desks, and data operations.',
    specs: {
      processor: 'Intel Core i5-13500',
      ram: '16 GB DDR4',
      storage: '512 GB SSD',
      os: 'Windows 11 Pro',
    },
    images: [dellOptiplexImg],
    thumbnail: dellOptiplexImg,
    pricing: { daily: 350, weekly: 1400, monthly: 2200, minimumPeriod: '1 day' },
    isAvailable: true,
    isFeatured: false,
    tags: ['desktop', 'office', 'bulk'],
    slug: 'dell-optiplex-7010',
    deliveryTime: '1-2 Days',
  },
];

export const RENTAL_CATEGORIES = [
  { value: 'all', label: 'All Devices' },
  { value: 'laptop', label: 'Laptops' },
  { value: 'macbook', label: 'MacBooks' },
  { value: 'gaming-laptop', label: 'Gaming Laptops' },
  { value: 'desktop', label: 'Desktops' },
] as const;

export const MIN_MONTHLY_RENTAL = Math.min(...RENTAL_PRODUCTS.map((p) => p.pricing.monthly));
