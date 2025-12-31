'use client'
import React, { useState, useMemo, useEffect } from 'react';
import {
  ChevronDown,
  X,
  Filter,
  Star,
  ArrowRight,
  Sparkles,
  Code,
  Smartphone,
  Zap,
  TrendingUp,
  ShoppingCart,
  Palette,
  Search,
  Check,
  Award,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// Animation variants
const titleVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    }
  },
  exit: {
    opacity: 0,
    x: 50,
    filter: "blur(8px)",
    transition: {
      duration: 0.4,
      ease: [0.55, 0.085, 0.68, 0.53],
    }
  }
};

const subtitleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.3,
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.3,
    }
  }
};

interface SubService {
  id: string;
  name: string;
}

interface Service {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  subServices: SubService[];
}

interface Project {
  id: number;
  mainService: string;
  subService: string;
  title: string;
  client: string;
  image: string;
  description: string;
  results: string[];
  year: number;
  rating: number;
}

interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const PortfolioShowcase: React.FC = () => {
  const [expandedFilters, setExpandedFilters] = useState<Record<string, boolean>>({});
  const [selectedFilters, setSelectedFilters] = useState<Record<string, boolean>>({});
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slider data
  const heroSlides: HeroSlide[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&h=800&fit=crop',
      title: 'Crafting Digital Excellence',
      subtitle: 'Where Innovation Meets Design',
      description: 'Transforming ideas into award-winning digital experiences that drive results and inspire users worldwide.'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1920&h=800&fit=crop',
      title: 'Building Tomorrow\'s Solutions',
      subtitle: 'Technology That Powers Growth',
      description: 'From cutting-edge apps to intelligent automation, we deliver solutions that scale your business to new heights.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=800&fit=crop',
      title: '54+ Success Stories',
      subtitle: 'Trusted by Industry Leaders',
      description: 'Join hundreds of satisfied clients who have transformed their digital presence with our expert solutions.'
    }
  ];

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const services: Service[] = [
    {
      id: 'graphic-design',
      name: 'Graphic Design',
      icon: <Palette size={24} className="text-yellow-600" />,
      color: 'from-yellow-500 to-yellow-600',
      subServices: [
        { id: 'logo', name: 'Logo & Brand Identity' },
        { id: 'ui-ux', name: 'UI/UX Mockups' },
        { id: 'social', name: 'Social Media Graphics' }
      ]
    },
    {
      id: 'web-design',
      name: 'Web Design & Development',
      icon: <Code size={24} className="text-yellow-600" />,
      color: 'from-yellow-500 to-yellow-600',
      subServices: [
        { id: 'custom-web', name: 'Custom Websites' },
        { id: 'wordpress', name: 'WordPress Dev' },
        { id: 'saas', name: 'SaaS Websites' }
      ]
    },
    {
      id: 'app-dev',
      name: 'App Development',
      icon: <Smartphone size={24} className="text-yellow-600" />,
      color: 'from-yellow-500 to-yellow-600',
      subServices: [
        { id: 'native', name: 'iOS & Android Apps' },
        { id: 'cross-platform', name: 'Cross-Platform' },
        { id: 'api', name: 'API & Backend' }
      ]
    },
    {
      id: 'ai-automation',
      name: 'Automation & AI',
      icon: <Zap size={24} className="text-yellow-600" />,
      color: 'from-yellow-500 to-yellow-600',
      subServices: [
        { id: 'crm', name: 'Workflow & CRM' },
        { id: 'chatbot', name: 'AI Chatbots' },
        { id: 'integration', name: 'API Integration' }
      ]
    },
    {
      id: 'marketing',
      name: 'Digital Marketing & SEO',
      icon: <TrendingUp size={24} className="text-yellow-600" />,
      color: 'from-yellow-500 to-yellow-600',
      subServices: [
        { id: 'seo', name: 'SEO Services' },
        { id: 'ppc', name: 'Google Ads & PPC' },
        { id: 'social-marketing', name: 'Social Media' }
      ]
    },
    {
      id: 'ecommerce',
      name: 'eCommerce & Marketplace',
      icon: <ShoppingCart size={24} className="text-yellow-600" />,
      color: 'from-yellow-500 to-yellow-600',
      subServices: [
        { id: 'shopify', name: 'Shopify Solutions' },
        { id: 'listings', name: 'Product Listings' },
        { id: 'marketplace', name: 'Marketplace Setup' }
      ]
    }
  ];

  const allProjects: Project[] = [
    { id: 1, mainService: 'graphic-design', subService: 'logo', title: 'Tech Startup Brand Identity', client: 'AI Solutions Inc.', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=400&fit=crop', description: 'Complete brand identity with logo, guidelines and color palette', results: ['Award-winning design', 'Brand consistency', '95% satisfaction'], year: 2024, rating: 5 },
    { id: 2, mainService: 'graphic-design', subService: 'logo', title: 'Luxury Retail Rebranding', client: 'Premium Fashion House', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop', description: 'Premium brand transformation for high-end retail', results: ['60% brand recognition', 'Premium positioning', 'Global rollout'], year: 2024, rating: 5 },
    { id: 3, mainService: 'graphic-design', subService: 'logo', title: 'Non-Profit Organization Logo', client: 'Global Education NGO', image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&h=400&fit=crop', description: 'Meaningful visual identity for educational impact', results: ['50% donation increase', 'Community reach', '12 countries'], year: 2023, rating: 5 },
    { id: 4, mainService: 'graphic-design', subService: 'ui-ux', title: 'Mobile Banking App UI/UX', client: 'FinTech Startup', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop', description: 'Complete user interface design with interactive prototypes', results: ['130 design screens', '4.8★ rating', 'Accessible design'], year: 2024, rating: 5 },
    { id: 5, mainService: 'graphic-design', subService: 'ui-ux', title: 'SaaS Dashboard Design System', client: 'Analytics Platform', image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=400&fit=crop', description: 'Enterprise design system with 200+ components', results: ['Design to dev', '40% faster builds', 'Component library'], year: 2024, rating: 5 },
    { id: 6, mainService: 'graphic-design', subService: 'ui-ux', title: 'E-Learning Platform UX', client: 'Online Education Provider', image: 'https://images.unsplash.com/photo-1580828343555-20166e46e81c?w=500&h=400&fit=crop', description: 'UX overhaul with user research and testing', results: ['45% engagement ↑', '60% bounce ↓', 'WCAG compliant'], year: 2023, rating: 5 },
    { id: 7, mainService: 'graphic-design', subService: 'social', title: 'Social Media Campaign Suite', client: 'Fashion E-Commerce', image: 'https://images.unsplash.com/photo-1460925895917-aec73dc44925?w=500&h=400&fit=crop', description: '500+ branded graphics for multi-platform campaign', results: ['2M+ impressions', '18% engagement', '500+ assets'], year: 2024, rating: 5 },
    { id: 8, mainService: 'graphic-design', subService: 'social', title: 'Content Creator Branding', client: 'Lifestyle Influencer', image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&h=400&fit=crop', description: 'Complete visual identity package with templates', results: ['Brand aesthetics', '250+ templates', '500K followers'], year: 2024, rating: 5 },
    { id: 9, mainService: 'graphic-design', subService: 'social', title: 'Environmental Awareness Campaign', client: 'Environmental NGO', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop', description: 'Viral social graphics for awareness campaign', results: ['3M+ reach', '250K shares', '40% goal exceed'], year: 2023, rating: 5 },
    { id: 10, mainService: 'web-design', subService: 'custom-web', title: 'Enterprise SaaS Platform', client: 'B2B Software Company', image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=400&fit=crop', description: 'Full-stack MERN with real-time collaboration', results: ['10K+ users', 'Real-time sync', 'Enterprise scale'], year: 2024, rating: 5 },
    { id: 11, mainService: 'web-design', subService: 'custom-web', title: 'Laravel E-Commerce Marketplace', client: 'Multi-Vendor Platform', image: 'https://images.unsplash.com/photo-1460925895917-aec73dc44925?w=500&h=400&fit=crop', description: 'Multi-vendor marketplace with payment integration', results: ['500+ vendors', '1M+ transactions', '99.9% uptime'], year: 2024, rating: 5 },
    { id: 12, mainService: 'web-design', subService: 'custom-web', title: 'Healthcare Management Portal', client: 'Multi-Specialty Hospital', image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=500&h=400&fit=crop', description: 'HIPAA-compliant patient management system', results: ['50K+ patients', 'HIPAA certified', 'Telemedicine'], year: 2023, rating: 5 },
    { id: 13, mainService: 'web-design', subService: 'wordpress', title: 'Corporate Website with CMS', client: 'Fortune 500 Company', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop', description: 'Custom WordPress with multi-language support', results: ['Custom theme', 'Multi-language', '90+ speed'], year: 2024, rating: 5 },
    { id: 14, mainService: 'web-design', subService: 'wordpress', title: 'Agency Portfolio Website', client: 'Creative Design Agency', image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&h=400&fit=crop', description: 'Beautiful portfolio with custom post types', results: ['Portfolio design', 'Inquiries +300%', 'Advanced filter'], year: 2023, rating: 5 },
    { id: 15, mainService: 'web-design', subService: 'wordpress', title: 'Digital News Portal', client: 'Digital Media Company', image: 'https://images.unsplash.com/photo-1460925895917-aec73dc44925?w=500&h=400&fit=crop', description: 'High-traffic news portal with advanced search', results: ['5M+ visitors', 'Subscription system', 'Advanced search'], year: 2024, rating: 5 },
    { id: 16, mainService: 'web-design', subService: 'saas', title: 'AI Tool SaaS Landing', client: 'AI Startup', image: 'https://images.unsplash.com/photo-1620712014215-7b16038111c0?w=500&h=400&fit=crop', description: 'High-converting landing with interactive demo', results: ['35% conversion', '15K sign-ups', 'International'], year: 2024, rating: 5 },
    { id: 17, mainService: 'web-design', subService: 'saas', title: 'Project Management SaaS', client: 'Productivity Software', image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=400&fit=crop', description: 'Team collaboration platform with real-time updates', results: ['50K+ teams', 'Real-time collab', '99.99% uptime'], year: 2024, rating: 5 },
    { id: 18, mainService: 'web-design', subService: 'saas', title: 'Marketing Automation Platform', client: 'B2B Marketing Tool', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop', description: 'Workflow builder with analytics dashboard', results: ['Enterprise clients', '100+ integrations', 'Automation'], year: 2023, rating: 5 },
    { id: 19, mainService: 'app-dev', subService: 'native', title: 'Mobile Banking Application', client: 'FinTech Startup', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop', description: 'Native iOS & Android with biometric security', results: ['100K+ downloads', 'PCI-DSS compliant', '4.8★ rating'], year: 2024, rating: 5 },
    { id: 20, mainService: 'app-dev', subService: 'native', title: 'Fitness Tracking Application', client: 'Wellness Company', image: 'https://images.unsplash.com/photo-1580828343555-20166e46e81c?w=500&h=400&fit=crop', description: 'Health app with wearable integration', results: ['500K+ downloads', 'Apple Health', 'Wearables'], year: 2023, rating: 5 },
    { id: 21, mainService: 'app-dev', subService: 'native', title: 'Real Estate Marketplace App', client: 'Property Management', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=400&fit=crop', description: 'Property search with virtual tours', results: ['250K+ listings', 'Virtual tours', 'Video calls'], year: 2024, rating: 5 },
    { id: 22, mainService: 'app-dev', subService: 'cross-platform', title: 'Ride-Sharing Application', client: 'Transportation Startup', image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&h=400&fit=crop', description: 'Cross-platform with GPS tracking', results: ['1M+ downloads', 'Real-time GPS', 'Payment integration'], year: 2024, rating: 5 },
    { id: 23, mainService: 'app-dev', subService: 'cross-platform', title: 'E-Learning Mobile App', client: 'Online Education', image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=400&fit=crop', description: 'Flutter app with offline learning mode', results: ['2M+ students', 'Offline mode', '200+ courses'], year: 2023, rating: 5 },
    { id: 24, mainService: 'app-dev', subService: 'cross-platform', title: 'Food Delivery App', client: 'Food Tech Company', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=400&fit=crop', description: 'Multi-language food delivery platform', results: ['500K+ restaurants', 'Real-time tracking', 'Multi-language'], year: 2024, rating: 5 },
    { id: 25, mainService: 'app-dev', subService: 'api', title: 'Multi-Payment Gateway', client: 'E-Commerce Platform', image: 'https://images.unsplash.com/photo-1460925895917-aec73dc44925?w=500&h=400&fit=crop', description: 'Stripe, PayPal and local payment methods', results: ['50+ payments', '99.99% success', '$10M+ processed'], year: 2024, rating: 5 },
    { id: 26, mainService: 'app-dev', subService: 'api', title: 'Third-Party API Ecosystem', client: 'SaaS Platform', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop', description: 'Salesforce, HubSpot, Shopify integration', results: ['100+ integrations', 'Real-time sync', 'Webhook management'], year: 2024, rating: 5 },
    { id: 27, mainService: 'app-dev', subService: 'api', title: 'Microservices Architecture', client: 'Enterprise Tech', image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&h=400&fit=crop', description: 'Docker, Kubernetes scalable backend', results: ['12 microservices', 'Auto-scaling', 'API security'], year: 2023, rating: 5 },
    { id: 28, mainService: 'ai-automation', subService: 'crm', title: 'Sales Pipeline Automation', client: 'B2B Software', image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=400&fit=crop', description: 'Salesforce CRM with custom workflows', results: ['70% faster sales', 'Conversions +40%', '50 workflows'], year: 2024, rating: 5 },
    { id: 29, mainService: 'ai-automation', subService: 'crm', title: 'HubSpot CRM Implementation', client: 'Marketing Agency', image: 'https://images.unsplash.com/photo-1460925895917-aec73dc44925?w=500&h=400&fit=crop', description: 'Marketing automation with lead nurturing', results: ['90% automation', 'Leads 3x', 'Custom dashboards'], year: 2024, rating: 5 },
    { id: 30, mainService: 'ai-automation', subService: 'crm', title: 'Supply Chain Automation', client: 'Logistics Company', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop', description: 'End-to-end automation with real-time tracking', results: ['Cost -60%', 'Real-time visibility', '100+ integrations'], year: 2023, rating: 5 },
    { id: 31, mainService: 'ai-automation', subService: 'chatbot', title: 'Customer Service Chatbot', client: 'E-Commerce Giant', image: 'https://images.unsplash.com/photo-1620712014215-7b16038111c0?w=500&h=400&fit=crop', description: 'NLP-powered handling 70% of inquiries', results: ['Tickets -70%', '24/7 availability', 'Satisfaction 95%'], year: 2024, rating: 5 },
    { id: 32, mainService: 'ai-automation', subService: 'chatbot', title: 'Lead Qualification Chatbot', client: 'SaaS Company', image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&h=400&fit=crop', description: 'AI chatbot with CRM integration', results: ['500+ leads/month', 'Conversion +35%', 'Response <1s'], year: 2024, rating: 5 },
    { id: 33, mainService: 'ai-automation', subService: 'chatbot', title: 'Multi-Language Support Bot', client: 'Global Tech', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=400&fit=crop', description: '15+ language support with sentiment analysis', results: ['15 languages', 'Accuracy 98%', '1M+ conversations'], year: 2023, rating: 5 },
    { id: 34, mainService: 'ai-automation', subService: 'integration', title: 'Complex ERP Integration', client: 'Manufacturing', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop', description: 'SAP integration with real-time inventory', results: ['Real-time sync', 'Accuracy 95%', 'Zero errors'], year: 2024, rating: 5 },
    { id: 35, mainService: 'ai-automation', subService: 'integration', title: 'Banking Integration Platform', client: 'FinTech Company', image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=400&fit=crop', description: 'Secure bank API with PCI compliance', results: ['10+ banks', 'PCI-DSS', '$100M+ transactions'], year: 2024, rating: 5 },
    { id: 36, mainService: 'ai-automation', subService: 'integration', title: 'Healthcare Data Exchange', client: 'Hospital Network', image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=500&h=400&fit=crop', description: 'HIPAA-compliant patient data exchange', results: ['HIPAA certified', '50K+ records', 'Real-time data'], year: 2023, rating: 5 },
    { id: 37, mainService: 'marketing', subService: 'seo', title: 'E-Commerce SEO Optimization', client: 'Online Retail', image: 'https://images.unsplash.com/photo-1460925895917-aec73dc44925?w=500&h=400&fit=crop', description: 'Full SEO transformation with content strategy', results: ['#1 for 50+ keywords', 'Traffic +400%', 'Revenue +$5M'], year: 2024, rating: 5 },
    { id: 38, mainService: 'marketing', subService: 'seo', title: 'Local SEO for Service Business', client: 'Multi-Location', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop', description: '50+ locations with GMB optimization', results: ['Top 3 ranking', 'Leads +200%', '1000+ reviews'], year: 2024, rating: 5 },
    { id: 39, mainService: 'marketing', subService: 'seo', title: 'SaaS Website SEO', client: 'B2B SaaS', image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=400&fit=crop', description: 'Content pillars with technical optimization', results: ['#1 for 40+ keywords', 'Leads +250%', '10K+ MQL'], year: 2023, rating: 5 },
    { id: 40, mainService: 'marketing', subService: 'ppc', title: 'Google Ads Campaign Management', client: 'Lead Generation Agency', image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&h=400&fit=crop', description: '$500K+ monthly ad spend management', results: ['2.5x ROAS', '50K+ leads', 'AI optimization'], year: 2024, rating: 5 },
    { id: 41, mainService: 'marketing', subService: 'ppc', title: 'B2B Lead Generation Ads', client: 'Enterprise Software', image: 'https://images.unsplash.com/photo-1620712014215-7b16038111c0?w=500&h=400&fit=crop', description: 'Strategic B2B campaigns for qualified leads', results: ['3.8x ROI', '500+ MQL', 'Conversion 20%'], year: 2024, rating: 5 },
    { id: 42, mainService: 'marketing', subService: 'ppc', title: 'E-Commerce Shopping Campaigns', client: 'Fashion E-Commerce', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop', description: 'Google Shopping & Performance Max', results: ['Revenue $10M+', '4x ROAS', 'Dynamic remarketing'], year: 2024, rating: 5 },
    { id: 43, mainService: 'marketing', subService: 'social-marketing', title: 'Influencer Marketing Campaign', client: 'Beauty & Wellness', image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&h=400&fit=crop', description: 'Multi-influencer Instagram & TikTok campaign', results: ['500M+ impressions', '50M+ engagements', '25% goal exceed'], year: 2024, rating: 5 },
    { id: 44, mainService: 'marketing', subService: 'social-marketing', title: 'Viral Social Media Strategy', client: 'Consumer Tech', image: 'https://images.unsplash.com/photo-1460925895917-aec73dc44925?w=500&h=400&fit=crop', description: 'Community-driven strategy with 2M+ followers', results: ['2M+ followers', '100M+ reach', '8% engagement'], year: 2024, rating: 5 },
    { id: 45, mainService: 'marketing', subService: 'social-marketing', title: 'LinkedIn B2B Campaign', client: 'B2B SaaS', image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=400&fit=crop', description: 'Professional networking for partnerships', results: ['100K+ followers', 'Leads +50%', 'Engagement 5x'], year: 2023, rating: 5 },
    { id: 46, mainService: 'ecommerce', subService: 'shopify', title: 'Shopify Store Setup & Optimization', client: 'Fashion Retail', image: 'https://images.unsplash.com/photo-1460925895917-aec73dc44925?w=500&h=400&fit=crop', description: 'Custom Shopify store with advanced features', results: ['Revenue $2M+', 'Conversion +45%', 'Mobile optimized'], year: 2024, rating: 5 },
    { id: 47, mainService: 'ecommerce', subService: 'shopify', title: 'WooCommerce Store Migration', client: 'Electronics Seller', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop', description: 'Migration with customizations', results: ['Zero data loss', 'Revenue +30%', '5000+ products'], year: 2024, rating: 5 },
    { id: 48, mainService: 'ecommerce', subService: 'shopify', title: 'Wix Store Development', client: 'Boutique Shop', image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&h=400&fit=crop', description: 'Beautiful store with custom branding', results: ['Custom design', 'Easy management', 'Leads +60%'], year: 2024, rating: 5 },
    { id: 49, mainService: 'ecommerce', subService: 'listings', title: 'Amazon Product Launch Strategy', client: 'Consumer Products', image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=400&fit=crop', description: 'Complete Amazon listing optimization', results: ['Best seller', 'Revenue $5M+', 'A9 optimization'], year: 2024, rating: 5 },
    { id: 50, mainService: 'ecommerce', subService: 'listings', title: 'Multi-Channel Product Listings', client: 'Multi-Vendor', image: 'https://images.unsplash.com/photo-1460925895917-aec73dc44925?w=500&h=400&fit=crop', description: 'Amazon, eBay, Etsy, Walmart optimization', results: ['Consistency', 'Visibility +200%', '10K+ products'], year: 2024, rating: 5 },
    { id: 51, mainService: 'ecommerce', subService: 'listings', title: 'Inventory Management System', client: 'Retail Chain', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop', description: 'Real-time inventory across channels', results: ['Zero overselling', 'Real-time sync', '50K+ SKUs'], year: 2023, rating: 5 },
    { id: 52, mainService: 'ecommerce', subService: 'marketplace', title: 'Amazon & eBay Store Setup', client: 'Wholesale Distributor', image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&h=400&fit=crop', description: 'Professional seller account setup', results: ['Professional store', 'Instant credibility', '$1M+ first year'], year: 2024, rating: 5 },
    { id: 53, mainService: 'ecommerce', subService: 'marketplace', title: 'Etsy Shop Branding & Launch', client: 'Handmade Products', image: 'https://images.unsplash.com/photo-1620712014215-7b16038111c0?w=500&h=400&fit=crop', description: 'Branded Etsy shop with storytelling', results: ['Unique brand', 'Sales $500K+', 'Loyal customers'], year: 2024, rating: 5 },
    { id: 54, mainService: 'ecommerce', subService: 'marketplace', title: 'Walmart Marketplace Integration', client: 'Third-Party Seller', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop', description: 'Walmart seller setup with fulfillment integration', results: ['Account approved', 'Sales +$2M', 'Fulfillment ready'], year: 2024, rating: 5 },
  ];

  const toggleFilter = (serviceId: string, subServiceId: string): void => {
    setSelectedFilters((prev) => {
      const key = `${serviceId}-${subServiceId}`;
      const newFilters = { ...prev };
      if (newFilters[key]) {
        delete newFilters[key];
      } else {
        newFilters[key] = true;
      }
      return newFilters;
    });
  };

  const toggleServiceFilter = (serviceId: string): void => {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev };
      const service = services.find(s => s.id === serviceId);
      if (!service) return prev;
     
      const allSubSelected = service.subServices.every(
        sub => newFilters[`${serviceId}-${sub.id}`]
      );
      if (allSubSelected) {
        service.subServices.forEach(sub => {
          delete newFilters[`${serviceId}-${sub.id}`];
        });
      } else {
        service.subServices.forEach(sub => {
          newFilters[`${serviceId}-${sub.id}`] = true;
        });
      }
      return newFilters;
    });
  };

  const filteredProjects: Project[] = useMemo(() => {
    const selectedKeys = Object.keys(selectedFilters);
    let filtered = selectedKeys.length === 0 ? allProjects : allProjects.filter(project => {
      const key = `${project.mainService}-${project.subService}`;
      return selectedKeys.includes(key);
    });
    if (searchQuery.trim()) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filtered;
  }, [selectedFilters, searchQuery]);

  const clearAllFilters = (): void => {
    setSelectedFilters({});
    setSearchQuery('');
  };

  const activeFilterCount = Object.keys(selectedFilters).length;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Slider */}
      <div className="relative h-[600px] md:h-[700px] overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={heroSlides[currentSlide].image}
                alt={heroSlides[currentSlide].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
            </div>

            {/* Content */}
            <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
              <div className="max-w-3xl">
                <motion.div
                  variants={subtitleVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="inline-block mb-4"
                >
                  <span className="px-4 py-2 bg-yellow-500 text-black text-sm font-bold rounded-full uppercase tracking-wider">
                    DiWebz Technology
                  </span>
                </motion.div>
                
                <motion.h1
                  variants={titleVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight"
                >
                  {heroSlides[currentSlide].title}
                </motion.h1>
                
                <motion.p
                  variants={subtitleVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6"
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.p>
                
                <motion.p
                  variants={subtitleVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-lg text-gray-300 mb-8 max-w-2xl"
                >
                  {heroSlides[currentSlide].description}
                </motion.p>
                
                <motion.div
                  variants={subtitleVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex gap-4"
                >
                  <button className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105">
                    Explore Projects
                  </button>
                  <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold rounded-lg transition-all border border-white/30">
                    Get In Touch
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full transition-all border border-white/30 hover:scale-110"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full transition-all border border-white/30 hover:scale-110"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'w-12 bg-yellow-500' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

     

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[330px_1fr] gap-8">
          {/* Sidebar Filters */}
          {/* <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className={`${mobileFilterOpen ? 'block' : 'hidden'} md:block`}
          >
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 sticky top-32 shadow-lg space-y-6 max-h-[calc(100vh-12rem)] overflow-hidden">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Filter size={20} className="text-yellow-600" />
                  Filter Services
                </h3>
                {activeFilterCount > 0 && (
                  <span className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    {activeFilterCount}
                  </span>
                )}
              </div>
              {activeFilterCount > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="w-full px-4 py-2 bg-red-50 hover:bg-red-100 border border-red-300 text-red-600 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <X size={16} />
                  Clear All
                </button>
              )}
              <div className="max-h-[calc(100vh-20rem)] overflow-y-auto space-y-3 pr-4">
                {services.map((service) => {
                  const isExpanded = expandedFilters[service.id];
                  const allSelected = service.subServices.every(
                    sub => selectedFilters[`${service.id}-${sub.id}`]
                  );
                  const someSelected = service.subServices.some(
                    sub => selectedFilters[`${service.id}-${sub.id}`]
                  );
                  return (
                    <div
                      key={service.id}
                      className="border-2 border-gray-200 rounded-xl overflow-hidden bg-gray-50 hover:bg-gray-100 transition-all"
                    >
                      <button
                        onClick={() => setExpandedFilters(prev => ({
                          ...prev,
                          [service.id]: !prev[service.id]
                        }))}
                        className="w-full p-4 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <input
                            type="checkbox"
                            checked={allSelected}
                            onChange={() => toggleServiceFilter(service.id)}
                            onClick={(e) => e.stopPropagation()}
                            className="w-5 h-5 rounded accent-yellow-600 cursor-pointer"
                          />
                          <div className="flex items-center gap-2">
                            {service.icon}
                            <div className="text-left">
                              <p className="text-sm font-semibold text-gray-900">{service.name}</p>
                              <p className="text-xs text-gray-600">{service.subServices.length} services</p>
                            </div>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown
                            size={18}
                            className={someSelected ? 'text-yellow-600' : 'text-gray-600'}
                          />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border-t-2 border-gray-200 bg-white p-4 space-y-3"
                          >
                            {service.subServices.map((subService) => {
                              const isChecked = selectedFilters[`${service.id}-${subService.id}`];
                              const projectCount = allProjects.filter(
                                p => p.mainService === service.id && p.subService === subService.id
                              ).length;
                              return (
                                <label key={subService.id} className="flex items-center gap-3 cursor-pointer group">
                                  <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={() => toggleFilter(service.id, subService.id)}
                                    className="w-4 h-4 rounded accent-yellow-600"
                                  />
                                  <span className={`text-sm flex-1 group-hover:text-yellow-600 transition-colors ${
                                    isChecked ? 'text-yellow-600 font-semibold' : 'text-gray-700'
                                  }`}>
                                    {subService.name}
                                  </span>
                                  <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded font-semibold">
                                    {projectCount}
                                  </span>
                                </label>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.aside> */}
          {/* Sidebar Filters */}
<motion.aside
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.1 }}
  className={`${mobileFilterOpen ? 'block' : 'hidden'} md:block`}
>
  <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 sticky top-32 shadow-lg space-y-6 max-h-[calc(100vh-12rem)] overflow-hidden">
    
    {/* Inline scrollbar styles */}
    <style jsx>{`
      .sidebar-scroll::-webkit-scrollbar {
        width: 6px;
      }
      .sidebar-scroll::-webkit-scrollbar-track {
        background: transparent;
      }
      .sidebar-scroll::-webkit-scrollbar-thumb {
        background-color: #9ca3af;
        border-radius: 9999px;
      }
      .sidebar-scroll::-webkit-scrollbar-thumb:hover {
        background-color: #6b7280;
      }
    `}</style>

    <div className="flex items-center justify-between">
      <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
        <Filter size={20} className="text-yellow-600" />
        Filter Services
      </h3>
      {activeFilterCount > 0 && (
        <span className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
          {activeFilterCount}
        </span>
      )}
    </div>

    {activeFilterCount > 0 && (
      <button
        onClick={clearAllFilters}
        className="w-full px-4 py-2 bg-red-50 hover:bg-red-100 border border-red-300 text-red-600 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
      >
        <X size={16} />
        Clear All
      </button>
    )}

    {/* Scrollable area */}
    <div
      className="max-h-[calc(100vh-20rem)] overflow-y-auto space-y-3 pr-4 sidebar-scroll"
      style={{
        scrollbarWidth: 'thin',                 // Firefox
        scrollbarColor: '#9ca3af transparent'   // Firefox
      }}
    >
      {services.map((service) => {
        const isExpanded = expandedFilters[service.id];
        const allSelected = service.subServices.every(
          sub => selectedFilters[`${service.id}-${sub.id}`]
        );
        const someSelected = service.subServices.some(
          sub => selectedFilters[`${service.id}-${sub.id}`]
        );

        return (
          <div
            key={service.id}
            className="border-2 border-gray-200 rounded-xl overflow-hidden bg-gray-50 hover:bg-gray-100 transition-all"
          >
            <button
              onClick={() =>
                setExpandedFilters(prev => ({
                  ...prev,
                  [service.id]: !prev[service.id],
                }))
              }
              className="w-full p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3 flex-1">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={() => toggleServiceFilter(service.id)}
                  onClick={(e) => e.stopPropagation()}
                  className="w-5 h-5 rounded accent-yellow-600 cursor-pointer"
                />
                <div className="flex items-center gap-2">
                  {service.icon}
                  <div className="text-left">
                    <p className="text-sm font-semibold text-gray-900">
                      {service.name}
                    </p>
                    <p className="text-xs text-gray-600">
                      {service.subServices.length} services
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown
                  size={18}
                  className={someSelected ? 'text-yellow-600' : 'text-gray-600'}
                />
              </motion.div>
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t-2 border-gray-200 bg-white p-4 space-y-3"
                >
                  {service.subServices.map((subService) => {
                    const isChecked =
                      selectedFilters[`${service.id}-${subService.id}`];
                    const projectCount = allProjects.filter(
                      p =>
                        p.mainService === service.id &&
                        p.subService === subService.id
                    ).length;

                    return (
                      <label
                        key={subService.id}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() =>
                            toggleFilter(service.id, subService.id)
                          }
                          className="w-4 h-4 rounded accent-yellow-600"
                        />
                        <span
                          className={`text-sm flex-1 group-hover:text-yellow-600 transition-colors ${
                            isChecked
                              ? 'text-yellow-600 font-semibold'
                              : 'text-gray-700'
                          }`}
                        >
                          {subService.name}
                        </span>
                        <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded font-semibold">
                          {projectCount}
                        </span>
                      </label>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  </div>
</motion.aside>


          {/* Projects Section */}
          <div className="">
            <div className="mb-8">
              <h2 className="text-4xl font-black text-gray-900 mb-2">
               
              </h2>
              {activeFilterCount > 0 && (
                <p className="text-gray-600 text-sm">Filtering by {activeFilterCount} service{activeFilterCount !== 1 ? 's' : ''}</p>
              )}
            </div>
            <AnimatePresence mode="wait">
              {filteredProjects.length > 0 ? (
                <motion.div
                  key="projects-list"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8"
                >
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ y: -8 }}
                      className="group cursor-pointer h-full"
                    >
                      <div className="relative bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-yellow-500 transition-all duration-300 h-full flex flex-col shadow-lg hover:shadow-2xl">
                        {/* Image */}
                        <div className="relative h-56 overflow-hidden bg-gray-100">
                          <motion.img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.4 }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                         
                          {/* Badge */}
                          <div className="absolute top-4 right-4 bg-yellow-500 text-black px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                            <Award size={14} />
                            {project.year}
                          </div>
                        </div>
                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col bg-white">
                          <p className="text-xs font-bold text-yellow-600 uppercase tracking-widest mb-3">
                            {project.client}
                          </p>
                          <h3 className="text-xl font-black text-gray-900 group-hover:text-yellow-600 transition-all mb-3 line-clamp-2">
                            {project.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                            {project.description}
                          </p>
                         
                          {/* Results */}
                          <div className="space-y-2 mb-5 flex-1">
                            {project.results.map((result, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2"
                              >
                                <Check size={16} className="text-green-600 flex-shrink-0" />
                                <p className="text-xs text-gray-700 font-medium">{result}</p>
                              </div>
                            ))}
                          </div>
                          {/* CTA */}
                          <button className="w-full py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg group-hover:scale-105">
                            View Project
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="no-projects"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center justify-center py-24 text-center"
                >
                  <div className="text-7xl mb-6 text-gray-300">
                    <Search size={80} />
                  </div>
                  <p className="text-2xl font-bold text-gray-900 mb-2">No projects found</p>
                  <p className="text-gray-600 mb-8 max-w-sm">Adjust your filters to discover more amazing work</p>
                  <button
                    onClick={clearAllFilters}
                    className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold rounded-xl transition-all shadow-lg"
                  >
                    Clear All Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg">
                  <Sparkles className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold">DiWebz Technology</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Transforming ideas into award-winning digital experiences since 2020.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-yellow-400">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-yellow-400">Contact Info</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Email: info@diwebz.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Location: Global</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} DiWebz Technology. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioShowcase;