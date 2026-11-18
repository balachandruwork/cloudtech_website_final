import dellLatitudeImg from '@/assets/images/dell_latitude_laptop_1794999745585.jpg';
import hpElitebookImg from '@/assets/images/hp_elitebook_laptop_1794999746500.jpg';
import macbookAirImg from '@/assets/images/macbook_air_laptop_1794999747306.jpg';
import dellInspironImg from '@/assets/images/dell_inspiron_laptop_1794999747262.jpg';
import accRouterSwitchImg from '@/assets/images/acc_router_switch_1794999750408.jpg';
import accStorageDriveImg from '@/assets/images/acc_storage_drive_1794999751102.jpg';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  tags: string[];
  author: {
    name: string;
    role: string;
  };
  publishedAt: string;
  readTime: string;
  thumbnail: string;
  isFeatured: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    slug: 'introducing-cloud-tech-coimbatore-journey-since-2023',
    title: 'Inside Cloud Tech: Supporting Coimbatore Businesses Since 2023',
    excerpt:
      'Established in 2023, Cloud Tech brings around 3–4 years of hands-on hardware and IT support experience to startups, local offices, and individual users in Coimbatore.',
    content: [
      'Cloud Tech was established in 2023 in Coimbatore, Tamil Nadu with a practical focus: helping growing teams and individual professionals access reliable laptops, desktops, and IT support without unnecessary overhead.',
      'Over approximately 3–4 years of hands-on experience in device provisioning, repairs, and local office networking, we have built a focused operation currently serving 3–4 active customers directly. Keeping our client base intentional allows us to inspect every system personally before delivery and respond promptly whenever technical assistance is needed.',
      'Whether a team needs a few laptops on a monthly plan, a certified refurbished system for daily administrative work, or reliable office Wi-Fi and AMC coverage, our goal remains straightforward: transparent pricing, tested hardware, and direct accountability.',
    ],
    category: 'Company Updates',
    tags: ['Cloud Tech', 'Coimbatore', 'since 2023', 'IT support'],
    author: { name: 'Cloud Tech Editorial', role: 'Coimbatore Team' },
    publishedAt: '2026-09-12',
    readTime: '4 min read',
    thumbnail: macbookAirImg,
    isFeatured: true,
  },
  {
    id: 'b2',
    slug: 'why-laptop-rental-works-for-startups-and-short-projects',
    title: 'When Laptop Rental Makes More Sense Than Buying Outright',
    excerpt:
      'From short training programs to project-based hiring, renting laptops helps Coimbatore startups preserve capital and adapt hardware configurations as needs change.',
    content: [
      'For early-stage startups, consulting teams, and event organizers, purchasing laptops upfront ties up working capital in depreciating hardware—especially when team sizes or project durations are still evolving.',
      'With flexible daily, weekly, and monthly rental plans—such as business desktops starting from ₹2,000/month and Dell Latitude laptops from ₹3,000/month—teams can deploy ready-to-use systems quickly without long-term lock-in.',
      'Before any rental device leaves our desk, we verify battery health, SSD performance, operating system updates, and charger reliability. If an issue arises during the rental period, our local Coimbatore support team handles troubleshooting or replacement directly.',
    ],
    category: 'Rental Guides',
    tags: ['startup', 'laptop rental', 'cost saving'],
    author: { name: 'Cloud Tech Editorial', role: 'Rental Advisory' },
    publishedAt: '2026-08-18',
    readTime: '5 min read',
    thumbnail: dellLatitudeImg,
    isFeatured: true,
  },
  {
    id: 'b3',
    slug: 'comparing-business-laptops-dell-latitude-hp-elitebook-thinkpad',
    title: 'Comparing Business Laptops for Rent: Dell Latitude, HP EliteBook & ThinkPad',
    excerpt:
      'A practical breakdown of processor specs, build quality, and monthly rental pricing across our core business laptop lineup.',
    content: [
      'Choosing the right business laptop depends on your team’s workload. For general office productivity, spreadsheets, and browser-heavy operations, the Dell Latitude 5540 (Intel Core i5 13th Gen, 16 GB RAM, 512 GB SSD at ₹3,000/month) offers a comfortable 15.6-inch screen and dependable performance.',
      'For users who travel frequently or handle heavier multitasking, the HP EliteBook 840 (Intel Core i7 13th Gen, 16 GB DDR5, 14-inch display at ₹3,500/month) delivers lighter portability and higher single-core speed.',
      'Teams that prefer classic keyboard ergonomics for coding or documentation often choose the Lenovo ThinkPad E15 (AMD Ryzen 5, 16 GB RAM, 512 GB SSD at ₹3,200/month). All three models are available on daily, weekly, and monthly terms.',
    ],
    category: 'Product Guides',
    tags: ['Dell Latitude', 'HP EliteBook', 'ThinkPad', 'specs'],
    author: { name: 'Cloud Tech Editorial', role: 'Hardware Desk' },
    publishedAt: '2026-07-24',
    readTime: '5 min read',
    thumbnail: hpElitebookImg,
    isFeatured: false,
  },
  {
    id: 'b4',
    slug: 'what-to-check-before-buying-a-refurbished-laptop',
    title: 'What to Check Before Buying a Refurbished Business Laptop',
    excerpt:
      'Certified refurbished business laptops can cut hardware costs significantly. Here is how we test battery wear, SSD health, hinges, and warranty coverage.',
    content: [
      'Business-class laptops such as the Dell Latitude 5420 are engineered with sturdier chassis and serviceable components than entry-level consumer models, making them strong candidates when refurbished properly.',
      'Before purchasing any refurbished machine, verify four essentials: SSD health and capacity, RAM upgradability, screen uniformity without dead pixels or pressure spots, and battery cycle condition.',
      'At Cloud Tech, our Grade A refurbished Dell Latitude 5420 (₹28,999) undergoes multi-point hardware diagnostics, a clean Windows 11 Pro installation, and includes a 6-month Cloud Tech service warranty for peace of mind.',
    ],
    category: 'Buying Guides',
    tags: ['refurbished', 'buying guide', 'warranty'],
    author: { name: 'Cloud Tech Editorial', role: 'Technical Desk' },
    publishedAt: '2026-06-15',
    readTime: '4 min read',
    thumbnail: dellInspironImg,
    isFeatured: false,
  },
  {
    id: 'b5',
    slug: 'office-wifi-and-networking-basics-for-small-offices',
    title: 'Planning Reliable Wi-Fi and LAN Networking for Small Offices',
    excerpt:
      'Simple structural choices—router placement, managed switches, and guest network isolation—prevent most everyday office connectivity drops.',
    content: [
      'Unstable office Wi-Fi rarely comes down to internet bandwidth alone. More often, consumer routers placed in a corner are expected to handle too many concurrent laptops, phones, and video calls through concrete walls.',
      'For small and growing offices in Coimbatore, separating wired workstation drops via reliable switches, positioning access points centrally, and isolating guest Wi-Fi from internal file sharing improves both stability and security.',
      'Cloud Tech assists local offices with router/switch supply, structured cabling checks, Wi-Fi coverage planning, and ongoing AMC support so your team stays connected.',
    ],
    category: 'Networking',
    tags: ['networking', 'office setup', 'Wi-Fi'],
    author: { name: 'Cloud Tech Editorial', role: 'Networking Team' },
    publishedAt: '2026-05-09',
    readTime: '5 min read',
    thumbnail: accRouterSwitchImg,
    isFeatured: false,
  },
  {
    id: 'b6',
    slug: 'data-recovery-steps-after-hard-disk-or-ssd-failure',
    title: 'Drive Not Detecting? Immediate Steps to Protect Your Data',
    excerpt:
      'If a hard drive starts clicking or an SSD stops booting, what you do in the first few minutes makes a critical difference for data recovery.',
    content: [
      'When a laptop fails to boot or an external hard disk stops mounting, repeated restarts or running automated repair utilities on a physically failing drive can overwrite sectors or worsen mechanical wear.',
      'Stop writing new files to the affected drive immediately, note any unusual clicking sounds or OS error messages, and disconnect external drives safely rather than repeatedly re-plugging them.',
      'Bring the system or storage media to Cloud Tech for careful diagnostic evaluation. We also help teams set up practical backup drives and preventive AMC routines so critical work stays protected.',
    ],
    category: 'IT Support',
    tags: ['data recovery', 'storage', 'repair'],
    author: { name: 'Cloud Tech Editorial', role: 'Repair & Recovery' },
    publishedAt: '2026-04-02',
    readTime: '4 min read',
    thumbnail: accStorageDriveImg,
    isFeatured: false,
  },
];
