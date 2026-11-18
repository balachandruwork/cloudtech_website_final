// Testimonial types

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role?: string;
  avatar: string;
  rating: number;
  content: string;
  date?: string;
  serviceUsed?: string;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}
