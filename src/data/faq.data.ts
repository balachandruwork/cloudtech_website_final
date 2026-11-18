export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'f1',
    question: 'How does laptop rental work at Cloud Tech?',
    answer:
      'It\'s simple! Contact us via phone, WhatsApp, or our website form. Tell us the type of device you need, the duration, and your location. We\'ll provide a customized quote, arrange delivery, set up the device, and collect it when your rental period ends.',
    category: 'rental',
  },
  {
    id: 'f2',
    question: 'What is the minimum rental period?',
    answer:
      'Our minimum rental period is 1 day for short-term events. For regular rentals, we offer daily, weekly, and monthly plans. Monthly plans offer the best pricing for businesses. Corporate clients can negotiate custom long-term contracts.',
    category: 'rental',
  },
  {
    id: 'f3',
    question: 'Do you provide free delivery and pickup?',
    answer:
      'Yes! We provide free delivery and pickup within Coimbatore city limits for monthly rental plans and bulk orders. Same-day delivery is available for most locations. Additional delivery charges may apply for outskirts and other districts.',
    category: 'rental',
  },
  {
    id: 'f4',
    question: 'Is installation and setup included with rental?',
    answer:
      'Absolutely. Our technician will deliver the device, set it up with required software, configure Wi-Fi, and ensure everything is working perfectly before leaving. Corporate setups include network configuration and user account setup.',
    category: 'rental',
  },
  {
    id: 'f5',
    question: 'Is warranty included with rented and purchased devices?',
    answer:
      'All rental devices are thoroughly tested and come with our Cloud Tech service warranty. New products come with manufacturer warranty. Refurbished products come with our 6–12 month Cloud Tech warranty depending on the product.',
    category: 'sales',
  },
  {
    id: 'f6',
    question: 'Do you provide corporate or bulk rental solutions?',
    answer:
      'Yes, corporate rentals are our specialty! We handle bulk orders from 10 to 500+ devices. We provide branded AMC contracts, dedicated support, on-site technical assistance, and customized SLA agreements for enterprise clients.',
    category: 'corporate',
  },
  {
    id: 'f7',
    question: 'Do you offer on-site repair services?',
    answer:
      'Yes! Our certified technicians visit your office or home for repairs. We cover laptop and desktop repair, virus removal, data recovery, hardware upgrades, OS installation, networking setup, and general IT support across Coimbatore.',
    category: 'services',
  },
  {
    id: 'f8',
    question: 'Which payment methods are accepted?',
    answer:
      'We accept UPI (GPay, PhonePe, Paytm), NEFT/RTGS bank transfers, credit/debit cards, net banking, and cash for local transactions. Corporate clients can avail GST invoice with 30-day credit terms upon approval.',
    category: 'payment',
  },
  {
    id: 'f9',
    question: 'What happens if a rented device gets damaged?',
    answer:
      'Minor wear and tear is expected and covered. For accidental damage, our team will assess the issue. Accidental damage charges apply based on the extent of damage. We recommend our optional damage protection add-on for peace of mind.',
    category: 'rental',
  },
  {
    id: 'f10',
    question: 'Can I extend my rental period?',
    answer:
      'Yes, you can extend your rental anytime. Just contact us at least 24 hours before the end date and we\'ll process the extension at the same or better rate. We\'re very flexible for long-term customers.',
    category: 'rental',
  },
];
