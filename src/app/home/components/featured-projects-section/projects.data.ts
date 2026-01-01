export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  techStack: string[];
  livePreview?: string;
  year: number;
  client: string;
  role: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Luxe Brand Identity",
    category: "Graphic Design",
    description:
      "Complete brand identity design including logo, business cards, and social media templates for luxury fashion brand",
    image:
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&q=80",
    link: "https://www.behance.net/gallery/12345678/luxe-brand-identity",
    tags: ["Logo Design", "Brand Identity", "UI/UX"],
    techStack: ["Figma", "Illustrator", "Photoshop"],
    livePreview: "https://luxe-brand-demo.netlify.app",
    year: 2023,
    client: "Luxe Fashion",
    role: "Lead Designer",
  },
  {
    id: 2,
    title: "TechFlow SaaS Platform",
    category: "Web Development",
    description:
      "Modern SaaS dashboard built with MERN stack featuring real-time analytics and seamless user experience",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    link: "https://github.com/techflow/saas-dashboard",
    tags: ["MERN Stack", "Dashboard", "Responsive"],
    techStack: ["React", "Node.js", "MongoDB", "Tailwind"],
    livePreview: "https://techflow-saas.vercel.app",
    year: 2024,
    client: "TechFlow Inc",
    role: "Full Stack Developer",
  },
  {
    id: 3,
    title: "FitTrack Mobile App",
    category: "App Development",
    description:
      "Cross-platform fitness tracking app with workout plans, nutrition tracking, and social features",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80",
    link: "https://dribbble.com/shots/12345678-FitTrack-Mobile-App",
    tags: ["React Native", "iOS", "Android"],
    techStack: ["React Native", "Firebase", "Redux"],
    livePreview: "https://fittrack-app-expo.io",
    year: 2023,
    client: "FitTrack Health",
    role: "Mobile Developer",
  },
  {
    id: 4,
    title: "Smart CRM Automation",
    category: "Automation & AI",
    description:
      "AI-powered CRM automation system with chatbot integration and workflow optimization for enterprise client",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80",
    link: "https://github.com/smartcrm/ai-automation",
    tags: ["AI Chatbot", "CRM", "Automation"],
    techStack: ["Python", "TensorFlow", "FastAPI", "PostgreSQL"],
    livePreview: "https://smart-crm-demo.herokuapp.com",
    year: 2024,
    client: "Enterprise Client",
    role: "AI Engineer",
  },
  {
    id: 5,
    title: "GrowthHub Digital",
    category: "Digital Marketing & SEO",
    description:
      "Comprehensive SEO and digital marketing campaign that increased organic traffic by 300% in 6 months",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    link: "https://growthhub.com/case-study",
    tags: ["SEO", "Google Ads", "Social Media"],
    techStack: ["Google Analytics", "SEMrush", "HubSpot"],
    livePreview: "https://growthhub-dashboard.vercel.app",
    year: 2024,
    client: "GrowthHub",
    role: "Digital Marketer",
  },
  {
    id: 6,
    title: "Fashion Hub Store",
    category: "eCommerce Solutions",
    description:
      "Full-featured Shopify store with custom theme, payment integration, and inventory management system",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80",
    link: "https://fashionhub-store.com",
    tags: ["Shopify", "WooCommerce", "Payment Gateway"],
    techStack: ["Shopify API", "Liquid", "JavaScript", "CSS3"],
    livePreview: "https://fashionhub-demo.myshopify.com",
    year: 2023,
    client: "Fashion Hub",
    role: "eCommerce Developer",
  },
];


