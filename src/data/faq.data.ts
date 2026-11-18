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
      'Contact us via WhatsApp, phone, or our website enquiry/quote form with the device type, quantity, duration, and your Coimbatore location. We will share a clear quotation, prepare and test the systems, and arrange delivery and setup.',
    category: 'rental',
  },
  {
    id: 'f2',
    question: 'What is the minimum rental period?',
    answer:
      'Our minimum rental period is 1 day for short-term events or urgent needs. We also offer flexible weekly and monthly plans, with monthly plans providing the best per-day value for businesses and individuals.',
    category: 'rental',
  },
  {
    id: 'f3',
    question: 'Do you provide delivery and setup in Coimbatore?',
    answer:
      'Yes. We provide delivery and setup across Coimbatore, Tamil Nadu. Delivery timelines and applicable charges are confirmed clearly in your quotation based on order size, rental duration, and location.',
    category: 'rental',
  },
  {
    id: 'f4',
    question: 'Is software installation and initial setup included with rental?',
    answer:
      'Yes. We prepare each device with an updated OS and essential business utilities, and assist with Wi-Fi and basic workstation setup upon delivery.',
    category: 'rental',
  },
  {
    id: 'f5',
    question: 'Is warranty included with rented and purchased devices?',
    answer:
      'Rental devices are tested before dispatch and covered by Cloud Tech service support during the rental term. New laptops and desktops carry manufacturer warranty, while Grade A refurbished systems include a 6-month Cloud Tech warranty.',
    category: 'sales',
  },
  {
    id: 'f6',
    question: 'Do you support team, event, or bulk rental requirements?',
    answer:
      'Yes. Whether you need a single laptop or multiple systems for a startup team, training batch, or office setup, we prepare tailored quotes with optional networking, accessories, and ongoing support.',
    category: 'corporate',
  },
  {
    id: 'f7',
    question: 'What repair and IT support services do you offer?',
    answer:
      'We handle laptop and desktop diagnostics and repairs, OS and software installation, virus and malware removal, data recovery support, office Wi-Fi/networking setup, and Annual Maintenance Contracts (AMC).',
    category: 'services',
  },
  {
    id: 'f8',
    question: 'Which payment methods are accepted?',
    answer:
      'We accept UPI, NEFT/RTGS bank transfers, cards, and agreed invoicing terms for approved business accounts. All pricing and billing terms are shared transparently upfront.',
    category: 'payment',
  },
  {
    id: 'f9',
    question: 'Can I extend my rental period?',
    answer:
      'Yes. Simply contact us at least 24 hours before your scheduled return date and we will extend your rental plan cleanly.',
    category: 'rental',
  },
];
