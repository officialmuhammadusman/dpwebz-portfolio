'use client';

import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  Building2, TrendingUp, Lightbulb, ChevronRight,
  Check, ArrowRight, ChevronLeft, Award, CheckCircle2
} from 'lucide-react';
import ClientTestimonialsSection from '@/app/home/components/testimonials/ClientTestimonialsSection';
import { useState, useEffect } from 'react';

// Define Lucide icon type
type LucideIcon = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, 'ref'> & 
  React.RefAttributes<SVGSVGElement>
>;

interface HeroSlide {
  image: string;
  title: string[];
  subtitle: string[];
}

interface Stat {
  number: string;
  label: string;
}

interface CaseStudy {
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  testimonial: string;
  author: string;
}

interface CategoryStats {
  [key: string]: string;
}

interface Category {
  name: string;
  description: string;
  image: string;
  solutions: string[];
  stats: CategoryStats;
}

interface FAQ {
  question: string;
  answer: string;
}

// Animation variants
const titleVariants: Variants = {
  hidden: { opacity: 0, x: -50, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  exit: {
    opacity: 0,
    x: 50,
    filter: "blur(8px)",
    transition: { duration: 0.4, ease: [0.55, 0.085, 0.68, 0.53] }
  }
};

const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } }
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.5 } }
};

const clientData = {
  'industries': {
    title: 'Industries We Serve',
    tagline: 'Deep Expertise Across Sectors',
    description: 'Delivering industry-specific solutions that drive real results for businesses across diverse sectors.',
    icon: Building2,
    color: 'from-purple-600 to-pink-600',
    heroSlides: [
      {
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&q=80',
        title: ['Transform Your Industry', 'With Expert Solutions'],
        subtitle: ['Specialized expertise tailored to your', "sector's unique challenges and opportunities"]
      },
      {
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80',
        title: ['Leading Innovation', 'Across All Sectors'],
        subtitle: ['Proven track record in healthcare, retail,', 'real estate, and emerging industries']
      },
      {
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80',
        title: ['Industry Excellence', 'Delivered Every Time'],
        subtitle: ['From startups to enterprises, we understand', 'your industry inside and out']
      }
    ],
    featuredCaseStudy: {
      title: 'E-commerce Platform Transformation',
      client: 'RetailPro Inc.',
      industry: 'Retail & E-commerce',
      challenge: 'Outdated platform struggling to handle 50K+ daily transactions',
      solution: 'Complete platform rebuild with modern tech stack, multi-channel integration, and conversion optimization',
      results: [
        '$200M+ annual revenue processed',
        '340% increase in conversion rate',
        '99.9% uptime maintained',
        '3.2s average page load time'
      ],
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
      testimonial: '"They understood our industry challenges and delivered a platform that exceeded all expectations."',
      author: 'Sarah Johnson, CTO of RetailPro'
    },
    categories: [
      {
        name: 'E-commerce & Retail',
        description: 'Scale your online retail business with powerful solutions',
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&q=80',
        solutions: ['Store development', 'Multi-channel integration', 'Inventory management', 'Payment processing'],
        stats: { clients: '120+', revenue: '$200M+', growth: '340%' }
      },
      {
        name: 'Healthcare & Medical',
        description: 'HIPAA-compliant solutions for healthcare providers',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
        solutions: ['Patient portals', 'Telemedicine platforms', 'EMR systems', 'Appointment scheduling'],
        stats: { clients: '45+', patients: '500K+', uptime: '99.9%' }
      },
      {
        name: 'Real Estate',
        description: 'Property platforms and CRM systems',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
        solutions: ['Property listings', 'Virtual tours', 'Lead management', 'MLS integration'],
        stats: { clients: '60+', listings: '10K+', leads: '250%' }
      },
      {
        name: 'Startups & Tech',
        description: 'MVP development and scalable infrastructure',
        image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80',
        solutions: ['MVP development', 'Product scaling', 'Tech consulting', 'Investor platforms'],
        stats: { clients: '85+', funded: '$50M+', success: '92%' }
      }
    ],
    stats: [
      { number: '500+', label: 'Clients Served' },
      { number: '15+', label: 'Industries' },
      { number: '$500M', label: 'Revenue Generated' }
    ],
    benefits: [
      'Industry-specific expertise',
      'Proven track record',
      'Regulatory compliance',
      'Best practices implementation',
      'Domain knowledge',
      'Sector-specific solutions'
    ],
    faqs: [
      {
        question: 'Do you have experience in my industry?',
        answer: "We've worked with clients across 15+ industries. During discovery, we assess your specific needs and match you with team members who have relevant industry experience."
      },
      {
        question: 'How do you handle industry-specific regulations?',
        answer: 'We stay current with industry regulations and compliance requirements. Our solutions are built with security, privacy, and regulatory compliance as core priorities.'
      },
      {
        question: 'Can you provide industry references?',
        answer: 'Yes! We can connect you with clients in your industry who have agreed to serve as references. We also have detailed case studies available.'
      }
    ]
  },
  'business-size': {
    title: 'Solutions by Business Size',
    tagline: 'Right-Sized Solutions for Your Growth Stage',
    description: 'From solo entrepreneurs to large enterprises, we deliver solutions scaled to your needs and budget.',
    icon: TrendingUp,
    color: 'from-blue-600 to-cyan-600',
    heroSlides: [
      {
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80',
        title: ['Solutions That Scale', 'With Your Business'],
        subtitle: ['Perfect fit for every stage from startup', 'to enterprise-level operations']
      },
      {
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&q=80',
        title: ['Your Partner at', 'Every Growth Stage'],
        subtitle: ['Flexible packages designed for your', 'current needs and future ambitions']
      },
      {
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80',
        title: ['From Startup to', 'Enterprise Success'],
        subtitle: ['Proven solutions for businesses', 'of every size and budget']
      }
    ],
    featuredCaseStudy: {
      title: 'Small Business to Enterprise Growth',
      client: 'TechStart Solutions',
      industry: 'SaaS Technology',
      challenge: 'Started as 5-person startup, needed to scale to enterprise with 100+ employees',
      solution: 'Phased approach starting with MVP, then scaling infrastructure as company grew',
      results: [
        'Grew from $0 to $10M ARR',
        'Scaled from 5 to 100+ employees',
        'Raised $25M Series B funding',
        'Expanded to 3 international markets'
      ],
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&q=80',
      testimonial: '"They grew with us every step of the way, from our first MVP to enterprise infrastructure."',
      author: 'Mike Chen, Founder of TechStart'
    },
    categories: [
      {
        name: 'Solo Entrepreneurs',
        description: 'Perfect for freelancers and solopreneurs',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80',
        solutions: ['Personal branding', 'Portfolio websites', 'Landing pages', 'Social media setup'],
        stats: { budget: '$2K-$10K', timeline: '2-4 weeks', projects: '200+' }
      },
      {
        name: 'Small Businesses',
        description: 'Ideal for local businesses establishing presence',
        image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80',
        solutions: ['Business websites', 'E-commerce stores', 'Local SEO', 'CRM integration'],
        stats: { budget: '$10K-$50K', timeline: '1-3 months', projects: '150+' }
      },
      {
        name: 'Growing Enterprises',
        description: 'For businesses ready to scale operations',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
        solutions: ['Custom platforms', 'Mobile apps', 'Marketing automation', 'Advanced analytics'],
        stats: { budget: '$50K-$200K', timeline: '3-6 months', projects: '80+' }
      },
      {
        name: 'Large Corporations',
        description: 'Enterprise solutions for complex needs',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80',
        solutions: ['Enterprise systems', 'Multi-region support', 'Custom integrations', 'Dedicated teams'],
        stats: { budget: '$200K+', timeline: '6-12 months', projects: '40+' }
      }
    ],
    stats: [
      { number: '470+', label: 'Total Clients' },
      { number: '92%', label: 'Client Retention' },
      { number: '$2M', label: 'Avg Project Value' }
    ],
    benefits: [
      'Flexible pricing models',
      'Scalable solutions',
      'Budget-conscious approach',
      'Phased delivery options',
      'Growth roadmap planning',
      'Long-term partnership'
    ],
    faqs: [
      {
        question: 'What if I outgrow my current package?',
        answer: 'Our solutions are designed to scale with you. We can upgrade your infrastructure and add features as your business grows without starting from scratch.'
      },
      {
        question: 'Do you offer payment plans?',
        answer: 'Yes! We offer flexible payment terms including milestone-based payments, monthly retainers, and phased project delivery to match your cash flow.'
      },
      {
        question: "How do I know which package is right for me?",
        answer: "Schedule a free consultation where we'll assess your needs, budget, and goals to recommend the perfect solution for your business size and stage."
      }
    ]
  },
  'solutions': {
    title: 'Transformative Solutions',
    tagline: 'Strategic Approaches for Your Goals',
    description: "Whether you're launching, scaling, transforming, or expanding - we have the right solution for your journey.",
    icon: Lightbulb,
    color: 'from-green-600 to-emerald-600',
    heroSlides: [
      {
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80',
        title: ['Launch, Scale, or', 'Transform Your Business'],
        subtitle: ['Strategic solutions tailored to your', 'specific business objectives']
      },
      {
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80',
        title: ['From Idea to', 'Market Leader'],
        subtitle: ['Comprehensive approaches that deliver', 'measurable results every time']
      },
      {
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80',
        title: ['Your Success is', 'Our Mission'],
        subtitle: ['Proven methodologies backed by', '500+ successful implementations']
      }
    ],
    featuredCaseStudy: {
      title: 'MVP to Market Leader Journey',
      client: 'InnovateTech',
      industry: 'B2B SaaS',
      challenge: 'Needed to validate concept quickly and scale to 10,000+ users',
      solution: 'Launched MVP in 8 weeks, then scaled infrastructure over 12 months',
      results: [
        'MVP to market in 8 weeks',
        '10,000+ users in first year',
        '$5M seed funding raised',
        '250% YoY growth rate'
      ],
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80',
      testimonial: '"From MVP to market leader - they helped us execute at every stage of growth."',
      author: 'James Wilson, CEO of InnovateTech'
    },
    categories: [
      {
        name: 'Launch Your MVP',
        description: 'Rapid MVP development and market validation',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80',
        solutions: ['Idea validation', 'Prototype design', 'Core features', 'Beta launch'],
        stats: { timeline: '4-8 weeks', success: '89%', funded: '$25M+' }
      },
      {
        name: 'Scale Operations',
        description: 'Automated workflows and scalable infrastructure',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
        solutions: ['Process automation', 'System integration', 'Performance optimization', 'Load handling'],
        stats: { timeline: '8-12 weeks', efficiency: '70%', savings: '$8M' }
      },
      {
        name: 'Digital Transformation',
        description: 'Modernize with cloud and cutting-edge tech',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
        solutions: ['Tech assessment', 'Cloud migration', 'System modernization', 'Team training'],
        stats: { timeline: '3-6 months', upgraded: '200+', roi: '340%' }
      },
      {
        name: 'Market Expansion',
        description: 'Enter new markets with localized solutions',
        image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&q=80',
        solutions: ['Market research', 'Localization', 'Infrastructure setup', 'Launch strategy'],
        stats: { timeline: '2-4 months', markets: '50+', revenue: '$100M+' }
      }
    ],
    stats: [
      { number: '500+', label: 'Projects Delivered' },
      { number: '98%', label: 'Success Rate' },
      { number: '4.9★', label: 'Client Rating' }
    ],
    benefits: [
      'Proven methodologies',
      'Risk mitigation strategies',
      'Agile delivery approach',
      'Regular progress updates',
      'Quality assurance',
      'Post-launch support'
    ],
    faqs: [
      {
        question: 'How do you determine which solution I need?',
        answer: 'We start with a comprehensive discovery session to understand your goals, challenges, timeline, and budget. Then we recommend the approach that best aligns with your objectives.'
      },
      {
        question: 'Can solutions be combined?',
        answer: 'Absolutely! Many clients benefit from combined approaches. For example, launching an MVP while planning for future scaling and eventual digital transformation.'
      },
      {
        question: 'What happens after project completion?',
        answer: 'We offer ongoing support packages including maintenance, updates, optimization, and strategic consulting to ensure continued success.'
      }
    ]
  }
} as const;

type ClientDataKey = keyof typeof clientData;

function FullWidthHeroSlider({ client }: { client: typeof clientData[ClientDataKey] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % client.heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [client.heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % client.heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + client.heroSlides.length) % client.heroSlides.length);

  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute inset-0"
        >
          <Image
            src={client.heroSlides[currentSlide].image}
            alt="Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-6"
            >
              <div className="space-y-2">
                {client.heroSlides[currentSlide].title.map((line: string, i: number) => (
                  <motion.h1
                    key={i}
                    variants={titleVariants}
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                  >
                    {i === client.heroSlides[currentSlide].title.length - 1 ? (
                      <span className="text-[#fec107]">{line}</span>
                    ) : (
                      <span className="text-white">{line}</span>
                    )}
                  </motion.h1>
                ))}
              </div>

              <motion.div variants={subtitleVariants} className="space-y-2">
                {client.heroSlides[currentSlide].subtitle.map((line: string, i: number) => (
                  <p key={i} className="text-base md:text-lg lg:text-xl text-gray-200">
                    {line}
                  </p>
                ))}
              </motion.div>

              <motion.div
                variants={subtitleVariants}
                className="flex gap-8 pt-6"
              >
                {client.stats.map((stat, i: number) => (
                  <div key={i}>
                    <div className="text-3xl md:text-4xl font-black text-white mb-1">
                      {stat.number}
                    </div>
                    <p className="text-sm text-gray-200">{stat.label}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={subtitleVariants} className="pt-4">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-[#fec107] text-gray-900 px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all"
                >
                  Get Started Today
                  <ArrowRight size={20} />
                </motion.a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/20 transition z-10"
      >
        <ChevronLeft className="text-white" size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/20 transition z-10"
      >
        <ChevronRight className="text-white" size={28} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {client.heroSlides.map((_, i: number) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-1 rounded-full transition-all ${
              i === currentSlide ? 'bg-white w-12' : 'bg-white/50 w-8'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function ClientSpecificContent({ clientKey }: { clientKey: string }) {
  const client = clientData[clientKey as ClientDataKey];

  if (!client) return null;

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Featured Case Study */}
      <div className="my-20 bg-linear-to-br from-gray-50 to-white p-8 md:p-12 rounded-2xl border border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`inline-block px-4 py-2 bg-linear-to-r ${client.color} text-white rounded-full text-sm font-bold mb-4`}
            >
              Featured Success Story
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-black text-gray-900 mb-2"
            >
              {client.featuredCaseStudy.title}
            </motion.h2>
            <p className="text-gray-600">{client.featuredCaseStudy.client} • {client.featuredCaseStudy.industry}</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Image
                src={client.featuredCaseStudy.image}
                alt={client.featuredCaseStudy.title}
                width={1200}
                height={768}
                className="w-full h-96 object-cover rounded-xl shadow-lg"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="mb-6">
                <h3 className="text-sm font-bold text-gray-500 uppercase mb-2">Challenge</h3>
                <p className="text-gray-700">{client.featuredCaseStudy.challenge}</p>
              </div>
              <div className="mb-6">
                <h3 className="text-sm font-bold text-gray-500 uppercase mb-2">Solution</h3>
                <p className="text-gray-700">{client.featuredCaseStudy.solution}</p>
              </div>
              <div className="mb-6">
                <h3 className="text-sm font-bold text-gray-500 uppercase mb-2">Results</h3>
                <div className="grid grid-cols-2 gap-3">
                  {client.featuredCaseStudy.results.map((result: string, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.05 }}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                      <span className="text-gray-700 font-medium text-sm">{result}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-white p-6 rounded-xl border-l-4 border-[#fec107]"
              >
                <p className="text-gray-700 italic mb-3">{client.featuredCaseStudy.testimonial}</p>
                <p className="text-sm font-bold text-gray-900">— {client.featuredCaseStudy.author}</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Categories/Solutions Breakdown */}
      <div className="my-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            {clientKey === 'industries' ? 'Industry Solutions' :
             clientKey === 'business-size' ? 'Packages by Size' :
             'Our Approach'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your specific needs
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {client.categories.map((category, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#fec107] hover:shadow-xl transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                  {Object.entries(category.stats).map(([key, value]) => (
                    <div key={key} className="bg-white/90 backdrop-blur px-3 py-1 rounded-lg flex-1 text-center">
                      <div className="text-lg font-black text-gray-900">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="space-y-2">
                  {category.solutions.map((solution: string, j: number) => (
                    <div key={j} className="flex items-center gap-2 text-sm">
                      <Check className="text-green-500 shrink-0" size={16} />
                      <span className="text-gray-700">{solution}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="my-20 bg-linear-to-br from-gray-50 to-white p-12 rounded-2xl border border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {client.benefits.map((benefit: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200"
              >
                <Award size={18} className="text-[#fec107] shrink-0" />
                <span className="font-medium text-gray-900 text-sm">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Testimonials Section */}
      <ClientTestimonialsSection />

      {/* FAQ Section */}
      <div className="my-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Everything you need to know</p>
        </motion.div>
        <div className="max-w-3xl mx-auto space-y-4">
          {client.faqs.map((faq, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#fec107] transition-colors"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`bg-linear-to-r ${client.color} text-white rounded-2xl p-12 text-center my-20`}
      >
        <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Get Started?</h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Let&apos;s discuss your needs and create a solution that drives real results.
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 bg-white text-gray-900 px-10 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all"
        >
          Schedule Free Consultation
          <ArrowRight size={20} />
        </motion.a>
      </motion.div>
    </div>
  );
}

export default function WhoWeHelpPage() {
  const [activeTab, setActiveTab] = useState<ClientDataKey>('industries');

  const tabs = [
    { key: 'industries' as const, label: 'Industries', icon: Building2 },
    { key: 'business-size' as const, label: 'Business Size', icon: TrendingUp },
    { key: 'solutions' as const, label: 'Solutions', icon: Lightbulb },
  ];

  // Sync with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && clientData.hasOwnProperty(hash)) {
        setActiveTab(hash as ClientDataKey);
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabClick = (key: ClientDataKey) => {
    setActiveTab(key);
    window.history.replaceState(null, '', `#${key}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`hero-${activeTab}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FullWidthHeroSlider client={clientData[activeTab]} />
        </motion.div>
      </AnimatePresence>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          {/* Desktop */}
          <div className="hidden sm:flex justify-center gap-0">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.key}
                  onClick={() => handleTabClick(tab.key)}
                  whileHover={{ backgroundColor: activeTab === tab.key ? '' : 'rgba(249, 250, 251, 1)' }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex flex-col items-center gap-2 px-8 py-4 font-bold transition-all border-b-2 ${
                    activeTab === tab.key
                      ? 'border-[#fec107] text-gray-900'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Icon size={24} />
                  <span className="text-sm">{tab.label}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Mobile */}
          <div className="sm:hidden flex justify-center gap-0">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.key}
                  onClick={() => handleTabClick(tab.key)}
                  whileTap={{ scale: 0.95 }}
                  className={`flex flex-col items-center gap-1 px-4 py-3 font-bold transition-all border-b-2 flex-1 ${
                    activeTab === tab.key
                      ? 'border-[#fec107] text-gray-900'
                      : 'border-transparent text-gray-600'
                  }`}
                >
                  <Icon size={20} />
                  <span className="text-xs">{tab.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ClientSpecificContent clientKey={activeTab} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}