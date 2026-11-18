export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
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
    slug: 'why-laptop-rental-is-better-for-startups',
    title: 'Why Laptop Rental is Smarter Than Buying for Startups',
    excerpt:
      'Discover why hundreds of Coimbatore startups choose laptop rental over purchase — saving capital, gaining flexibility, and accessing enterprise-grade equipment without upfront investment.',
    category: 'Business Tips',
    tags: ['startup', 'laptop rental', 'cost saving'],
    author: { name: 'Vikram S.', avatar: '/images/blog/author-1.webp', role: 'IT Consultant' },
    publishedAt: '2024-06-15',
    readTime: '5 min read',
    thumbnail: '/images/blog/blog-1.webp',
    isFeatured: true,
  },
  {
    id: 'b2',
    slug: 'top-laptops-for-corporate-rental-2024',
    title: 'Top 5 Laptops for Corporate Rental in 2024',
    excerpt:
      'From Dell Latitude to HP EliteBook and ThinkPad — we break down the best enterprise laptops available for corporate rental, their specs, and ideal use cases.',
    category: 'Product Guide',
    tags: ['corporate', 'Dell', 'HP', 'ThinkPad'],
    author: { name: 'Priya K.', avatar: '/images/blog/author-2.webp', role: 'Product Specialist' },
    publishedAt: '2024-05-28',
    readTime: '7 min read',
    thumbnail: '/images/blog/blog-2.webp',
    isFeatured: false,
  },
  {
    id: 'b3',
    slug: 'annual-maintenance-contract-guide',
    title: 'Annual Maintenance Contract (AMC): Complete Guide for Businesses',
    excerpt:
      'What is an AMC, why does your business need one, and what should you look for in an IT maintenance agreement? Everything you need to know in one guide.',
    category: 'IT Services',
    tags: ['AMC', 'maintenance', 'IT support'],
    author: { name: 'Anand R.', avatar: '/images/blog/author-3.webp', role: 'Senior Engineer' },
    publishedAt: '2024-05-10',
    readTime: '6 min read',
    thumbnail: '/images/blog/blog-3.webp',
    isFeatured: false,
  },
  {
    id: 'b4',
    slug: 'how-to-choose-refurbished-laptop',
    title: 'How to Choose the Right Refurbished Laptop for Your Business',
    excerpt:
      'Refurbished laptops offer up to 60% savings over new models. Here\'s what to check, which brands to trust, and how Cloud Tech ensures quality on every refurbished device.',
    category: 'Buying Guide',
    tags: ['refurbished', 'buying guide', 'budget'],
    author: { name: 'Vikram S.', avatar: '/images/blog/author-1.webp', role: 'IT Consultant' },
    publishedAt: '2024-04-22',
    readTime: '4 min read',
    thumbnail: '/images/blog/blog-4.webp',
    isFeatured: false,
  },
  {
    id: 'b5',
    slug: 'office-networking-setup-guide-Coimbatore',
    title: 'Setting Up a Professional Office Network in Coimbatore — A Step-by-Step Guide',
    excerpt:
      'Learn how to set up a reliable office network from scratch. Covers routers, switches, Wi-Fi, VPN, and network security basics for SMBs.',
    category: 'Networking',
    tags: ['networking', 'office setup', 'Wi-Fi'],
    author: { name: 'Anand R.', avatar: '/images/blog/author-3.webp', role: 'Senior Engineer' },
    publishedAt: '2024-04-05',
    readTime: '8 min read',
    thumbnail: '/images/blog/blog-5.webp',
    isFeatured: false,
  },
  {
    id: 'b6',
    slug: 'data-recovery-tips-after-hard-disk-failure',
    title: 'Hard Disk Failed? Here\'s What to Do Immediately',
    excerpt:
      'A failed hard drive doesn\'t mean lost data. Follow these immediate steps to maximize your data recovery chances and when to call a professional.',
    category: 'IT Tips',
    tags: ['data recovery', 'hard disk', 'repair'],
    author: { name: 'Priya K.', avatar: '/images/blog/author-2.webp', role: 'Product Specialist' },
    publishedAt: '2024-03-18',
    readTime: '5 min read',
    thumbnail: '/images/blog/blog-6.webp',
    isFeatured: false,
  },
];
