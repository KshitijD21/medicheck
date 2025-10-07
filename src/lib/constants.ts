import { Client, GroupCompany, Location, NavItem, Portfolio, Service, Statistic, TeamMember, Testimonial } from "@/types";

// Navigation items
export const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Our Presence", href: "/presence" },
  { title: "Group Companies", href: "/group-companies" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Contact", href: "/contact" },
];

// Company statistics
export const statistics: Statistic[] = [
  { value: "27+", label: "Years of Experience", description: "Serving since 1997" },
  { value: "30+", label: "OHC Centers", description: "Across India" },
  { value: "30+", label: "Ambulances", description: "24/7 Emergency Services" },
  { value: "5", label: "Countries", description: "Global Presence" },
];

// Services data
export const services: Service[] = [
  {
    id: "ohc",
    title: "Occupational Health Centre (OHC)",
    description: "30+ centers nationally providing comprehensive occupational health services",
    category: "Primary Care",
    image: "/service/1st service.png",
    features: [
      "Pre-employment medical examinations",
      "Periodic health check-ups",
      "Fitness certifications",
      "Occupational disease prevention",
      "Health surveillance programs"
    ],
    gridSize: {
      desktop: { cols: 2, rows: 2 },
      tablet: { cols: 2, rows: 2 },
      mobile: { cols: 1, rows: 1 }
    }
  },
  {
    id: "maritime",
    title: "Maritime Health Services (Siddhant Marine)",
    description: "DG Shipping approved maritime medical services",
    category: "Maritime",
    image: "/service/2nd service.png",
    features: [
      "Seafarer medical examinations",
      "DG Shipping certifications",
      "Maritime health consultancy",
      "Ship medical surveys",
      "Offshore medical services"
    ],
    gridSize: {
      desktop: { cols: 1, rows: 2 },
      tablet: { cols: 1, rows: 1 },
      mobile: { cols: 1, rows: 1 }
    }
  },
  {
    id: "wellness",
    title: "Corporate Wellness",
    description: "DISH & NABL approved wellness programs",
    category: "Wellness",
    image: "/service/3rd service.png",
    features: [
      "Executive health check-ups",
      "Wellness programs design",
      "Health risk assessments",
      "Lifestyle modification programs",
      "Nutrition counseling"
    ],
    gridSize: {
      desktop: { cols: 1, rows: 1 },
      tablet: { cols: 1, rows: 1 },
      mobile: { cols: 1, rows: 1 }
    }
  },
  {
    id: "ambulance",
    title: "Ambulance Services & On-Site Medical Staff",
    description: "30+ ambulances with trained medical professionals",
    category: "Emergency",
    image: "/service/4th service.png",
    features: [
      "24/7 emergency response",
      "Advanced life support",
      "Patient transportation",
      "On-site medical support",
      "Industrial accident management"
    ],
    gridSize: {
      desktop: { cols: 2, rows: 1 },
      tablet: { cols: 2, rows: 1 },
      mobile: { cols: 1, rows: 1 }
    }
  },
  {
    id: "training",
    title: "First Aid Training Programs & Health Campaigns",
    description: "DISH approved training and awareness programs",
    category: "Training",
    image: "/service/5th service.png",
    features: [
      "First aid certification courses",
      "CPR training",
      "Safety awareness programs",
      "Health education campaigns",
      "Emergency response training"
    ],
    gridSize: {
      desktop: { cols: 1, rows: 1 },
      tablet: { cols: 1, rows: 1 },
      mobile: { cols: 1, rows: 1 }
    }
  },
  {
    id: "mobile",
    title: "Health on Wheels",
    description: "Mobile healthcare units for remote locations",
    category: "Mobile Health",
    image: "/service/6th service.png",
    features: [
      "Mobile medical units",
      "Remote area coverage",
      "Preventive health screenings",
      "On-site diagnostic services",
      "Health education drives"
    ],
    gridSize: {
      desktop: { cols: 1, rows: 1 },
      tablet: { cols: 1, rows: 1 },
      mobile: { cols: 1, rows: 1 }
    }
  },
  {
    id: "institutional",
    title: "Institutional Services",
    description: "Nursing courses and professional training programs",
    category: "Education",
    image: "/service/7th service.png",
    features: [
      "Nursing education programs",
      "Medical training courses",
      "Skill development programs",
      "Professional certifications",
      "Healthcare education"
    ],
    gridSize: {
      desktop: { cols: 1, rows: 1 },
      tablet: { cols: 1, rows: 1 },
      mobile: { cols: 1, rows: 1 }
    }
  }
];

// Team members
export const teamMembers: TeamMember[] = [
  {
    name: "Dr. Pradeep Mahajan",
    position: "Founder & Chief Medical Officer",
    credentials: "Certifying Surgeon, ACS31-PM/1998",
    experience: "27+ years in occupational health",
    description: "Pioneered occupational health services in India since 1997. Expert in maritime medicine and industrial health."
  },
  {
    name: "Dr. Sushrut Limaye",
    position: "Chief Executive Officer",
    credentials: "Dental Surgeon",
    experience: "25+ years in healthcare management",
    description: "Strategic leader driving company expansion and operational excellence across multiple healthcare verticals."
  },
  {
    name: "Mrs. Anita Tripathi",
    position: "Chief Operating Officer",
    credentials: "Healthcare Administration Expert",
    experience: "22+ years with Medi-Check",
    description: "Operational excellence champion ensuring quality service delivery across all centers and services."
  }
];

// Global presence
export const globalLocations: Location[] = [
  {
    zone: "International",
    cities: ["Mauritius", "Sudan", "Zambia", "Kenya", "Uganda"]
  },
  {
    zone: "West India",
    cities: ["Mumbai", "Pune", "Nashik", "Aurangabad", "Nagpur", "Goa"]
  },
  {
    zone: "North India",
    cities: ["Delhi", "Gurgaon", "Noida", "Chandigarh", "Jaipur", "Lucknow"]
  },
  {
    zone: "South India",
    cities: ["Chennai", "Bangalore", "Hyderabad", "Kochi", "Coimbatore", "Vizag"]
  },
  {
    zone: "East India",
    cities: ["Kolkata", "Bhubaneswar", "Guwahati", "Ranchi", "Siliguri"]
  }
];

// Major clients
export const majorClients: Client[] = [
  { name: "Pepsi", category: "FMCG" },
  { name: "Nokia", category: "Technology" },
  { name: "Vodafone", category: "Telecommunications" },
  { name: "L&T", category: "Engineering & Construction" },
  { name: "Godrej", category: "Consumer Goods" },
  { name: "Mahanagar Gas Ltd", category: "Energy" },
  { name: "Maharashtra Police", category: "Government" },
  { name: "Airports Authority of India", category: "Aviation" },
  { name: "ESIC", category: "Healthcare" }
];

// Testimonials
export const testimonials: Testimonial[] = [
  {
    name: "K Selva Pandian",
    position: "General Manager",
    company: "Mahanagar Gas Ltd",
    content: "Medi-Check has been our trusted healthcare partner for years. Their professionalism and quality of service is exemplary."
  }
];

// Group companies
export const groupCompanies: GroupCompany[] = [
  {
    name: "Dr. Mahajan Hospitals ITC",
    description: "Multi-specialty hospital providing comprehensive healthcare services",
    services: ["General Medicine", "Surgery", "Critical Care", "Emergency Services"],
    established: "2005"
  },
  {
    name: "Siddhant Marine Health Services",
    description: "Specialized maritime health services approved by DG Shipping",
    services: ["Seafarer Medical Examinations", "Maritime Consultancy", "Ship Medical Surveys"],
    established: "2008"
  },
  {
    name: "StemRx",
    description: "Advanced regenerative medicine and stem cell therapy center",
    services: ["Stem Cell Therapy", "Regenerative Medicine", "Advanced Treatments"]
  },
  {
    name: "Maya Diagnostics",
    description: "State-of-the-art diagnostic center with advanced imaging and laboratory services",
    services: ["Digital X-Ray", "Ultrasound", "Laboratory Services", "Health Screenings"]
  },
  {
    name: "Family Welfare Health Service Charitable Trust",
    description: "Non-profit organization focused on community health and social welfare",
    services: ["Community Health Programs", "Health Education", "Social Welfare"]
  }
];

// Portfolio items
export const portfolioItems: Portfolio[] = [
  {
    title: "50+ Blood Donation Camps",
    description: "Successfully organized and conducted over 50 blood donation camps nationwide",
    category: "Social Initiative",
    achievements: ["10,000+ donors", "Partnership with blood banks", "Corporate participation"]
  },
  {
    title: "Government Empanelments",
    description: "Empaneled with major government organizations for healthcare services",
    category: "Government Partnership",
    achievements: ["Maharashtra Police", "AAI", "ESIC", "Various PSUs"]
  },
  {
    title: "Industrial Safety Programs",
    description: "Comprehensive safety and health programs for industrial clients",
    category: "Corporate Wellness",
    achievements: ["500+ companies served", "Zero accident initiatives", "Safety training programs"]
  },
  {
    title: "International Expansion",
    description: "Successfully established presence in 5 countries across Africa and Mauritius",
    category: "Global Operations",
    achievements: ["5 countries", "Local partnerships", "Cultural adaptation"]
  }
];

// Contact information
export const contactInfo = {
  phone: "+91 9321021566",
  salesEmail: "sales@medicheckworld.com",
  businessEmail: "info@medicheckworld.com",
  address: "R-831, Rabale, Navi Mumbai, Maharashtra 400708",
  mapUrl: "https://maps.google.com/?q=R-831,+Rabale,+Navi+Mumbai,+Maharashtra+400708"
};
