export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon?: string;
  category?: string;
  image?: string;
  gridSize?: {
    desktop: { cols: number; rows: number };
    tablet: { cols: number; rows: number };
    mobile: { cols: number; rows: number };
  };
}

export interface TeamMember {
  name: string;
  position: string;
  credentials: string;
  experience: string;
  description: string;
  image?: string;
}

export interface Testimonial {
  name: string;
  position: string;
  company: string;
  content: string;
  image?: string;
}

export interface Location {
  zone: string;
  cities: string[];
}

export interface Client {
  name: string;
  category: string;
}

export interface Statistic {
  value: string;
  label: string;
  description?: string;
}

export interface ContactForm {
  name: string;
  company: string;
  phone: string;
  email: string;
  requirements: string;
}

export interface GroupCompany {
  name: string;
  description: string;
  services: string[];
  established?: string;
}

export interface Portfolio {
  title: string;
  description: string;
  category: string;
  achievements?: string[];
  image?: string;
}
