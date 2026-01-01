

'use client';

import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';
import {
  Palette, Globe, Smartphone, Lightbulb, TrendingUp, ShoppingCart,
  ArrowRight, CheckCircle2, ChevronLeft, ChevronRight
} from 'lucide-react';
import { useState, useEffect } from 'react';
import ClientTestimonialsSection from '@/app/home/components/testimonials/ClientTestimonialsSection';
import OurProcessSection from '@/app/home/components/process-steps/OurProcessSection';
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

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.5,
    }
  }
};

// Placeholder components



const serviceData = {
  'graphic-design': {
    title: 'Graphic Design & Branding',
    tagline: 'Visual Identity That Tells Your Story',
    description: 'Create a lasting impression with stunning visual designs that capture your brand essence and engage your audience.',
    icon: Palette,
    color: 'from-pink-600 to-rose-500',
    heroSlides: [
      {
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&q=80',
        title: ['Transform Your Brand', 'Into Visual Excellence'],
        subtitle: ['Award-winning design that captures attention', 'and drives meaningful engagement']
      },
      {
        image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1920&q=80',
        title: ['Stand Out From', 'The Competition'],
        subtitle: ['Memorable brand identities that resonate', 'with your target audience']
      },
      {
        image: 'https://images.unsplash.com/photo-1600439614353-174ad0ee3b25?w=1920&q=80',
        title: ['Design That Tells', 'Your Story'],
        subtitle: ['Every element crafted to perfection', 'for maximum brand impact']
      },
    ],
    featuredCaseStudy: {
      title: 'LuxeStyle Co. Complete Rebrand',
      client: 'LuxeStyle Co.',
      industry: 'Fashion & Retail',
      challenge: 'Outdated brand identity failing to resonate with modern luxury consumers',
      solution: 'Complete visual identity overhaul including logo, brand guidelines, packaging, and digital presence',
      results: [
        '250% increase in brand recognition',
        '180% boost in social media engagement',
        'Successfully entered 3 new markets',
        '$2M increase in annual revenue'
      ],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
      testimonial: '"The rebrand transformed our business. We went from being invisible to being the talk of the industry."',
      author: 'Sarah Chen, CEO of LuxeStyle Co.'
    },
    subServices: [
      {
        name: 'Logo & Brand Identity',
        description: 'Complete visual language system for your brand',
        image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80',
        deliverables: ['Logo suite', 'Brand guidelines', 'Color palette', 'Typography system'],
        timeline: '2-3 weeks'
      },
      {
        name: 'UI/UX Design',
        description: 'Beautiful interfaces that users love',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
        deliverables: ['Wireframes', 'High-fidelity mockups', 'Interactive prototypes', 'Design system'],
        timeline: '3-4 weeks'
      },
      {
        name: 'Print & Packaging',
        description: 'Physical touchpoints that leave lasting impressions',
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&q=80',
        deliverables: ['Business cards', 'Brochures', 'Product packaging', 'Marketing materials'],
        timeline: '2-3 weeks'
      },
      {
        name: 'Social Media Graphics',
        description: 'Engaging visual content for all platforms',
        image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&q=80',
        deliverables: ['Post templates', 'Story templates', 'Ad creatives', 'Brand assets'],
        timeline: '1-2 weeks'
      }
    ],
    stats: [
      { number: '150+', label: 'Brands Designed' },
      { number: '92%', label: 'Client Return Rate' },
      { number: '45%', label: 'Avg Revenue Growth' },
    ],
    projects: [
      {
        id: 1,
        title: 'TechFlow Dashboard',
        category: 'UI/UX Design',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
        results: ['40% Error Reduction', '85% User Satisfaction']
      },
      {
        id: 2,
        title: 'Organic Foods Packaging',
        category: 'Packaging Design',
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&q=80',
        results: ['3x Shelf Appeal', '60% Sales Increase']
      },
      {
        id: 3,
        title: 'FinTech App UI',
        category: 'Mobile UI',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
        results: ['4.8★ App Rating', '200k Downloads']
      }
    ],
    faqs: [
      {
        question: 'How long does a complete brand identity take?',
        answer: 'A comprehensive brand identity typically takes 3-4 weeks, including discovery, concepts, revisions, and final delivery of all assets.'
      },
      {
        question: 'What files will I receive?',
        answer: 'You\'ll receive all source files (AI, PSD), high-res exports (PNG, JPG, SVG), and a comprehensive brand guidelines document.'
      },
      {
        question: 'Do you offer unlimited revisions?',
        answer: 'We include 3 rounds of revisions in our standard package. Additional revisions can be added as needed.'
      }
    ]
  },
  'web-development': {
    title: 'Web Development & Design',
    tagline: 'Digital Experiences That Convert',
    description: 'Build powerful, scalable websites with cutting-edge technology that drives business growth.',
    icon: Globe,
    color: 'from-blue-600 to-cyan-500',
    heroSlides: [
      {
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80',
        title: ['Build Websites That', 'Convert & Scale'],
        subtitle: ['Modern web solutions powered by', 'cutting-edge technology and design']
      },
      {
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1920&q=80',
        title: ['Lightning Fast', 'Performance'],
        subtitle: ['Speed-optimized sites that rank higher', 'and convert better']
      },
      {
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80',
        title: ['Your Digital', 'Presence Perfected'],
        subtitle: ['Professional websites that grow', 'your business online']
      },
    ],
    featuredCaseStudy: {
      title: 'TechVenture SaaS Platform Launch',
      client: 'TechVenture Inc.',
      industry: 'Software & Technology',
      challenge: 'Needed a robust, scalable platform to compete with industry giants',
      solution: 'Custom-built SaaS platform with real-time collaboration, advanced analytics, and seamless integrations',
      results: [
        '10,000+ active users in first 6 months',
        '$2M ARR within first year',
        '99.9% uptime maintained',
        'Featured in TechCrunch'
      ],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
      testimonial: '"They didn\'t just build our platform—they became our technical partners and helped us scale."',
      author: 'Michael Roberts, CTO of TechVenture'
    },
    subServices: [
      {
        name: 'Custom Web Applications',
        description: 'Tailored solutions built with modern tech stacks',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80',
        deliverables: ['Full-stack development', 'API integrations', 'Admin dashboards', 'Documentation'],
        timeline: '8-12 weeks'
      },
      {
        name: 'WordPress Development',
        description: 'Fast, secure, and easy-to-manage websites',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80',
        deliverables: ['Custom theme', 'Plugin setup', 'SEO optimization', 'Training'],
        timeline: '3-4 weeks'
      },
      {
        name: 'E-commerce Platforms',
        description: 'Sales-optimized online stores',
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&q=80',
        deliverables: ['Product catalogs', 'Payment integration', 'Shipping setup', 'Analytics'],
        timeline: '6-8 weeks'
      },
      {
        name: 'SaaS Development',
        description: 'Scalable multi-tenant applications',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
        deliverables: ['User authentication', 'Subscription billing', 'API development', 'Cloud deployment'],
        timeline: '12-16 weeks'
      }
    ],
    stats: [
      { number: '250+', label: 'Sites Launched' },
      { number: '98%', label: 'Uptime Record' },
      { number: '3.2s', label: 'Avg Load Time' },
    ],
    projects: [
      {
        id: 1,
        title: 'Corporate Website',
        category: 'Web Design',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
        results: ['65% Bounce Reduction', '4x Lead Generation']
      },
      {
        id: 2,
        title: 'E-commerce Store',
        category: 'Online Store',
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&q=80',
        results: ['$500k First Year', '45% AOV Increase']
      },
      {
        id: 3,
        title: 'Real Estate Platform',
        category: 'Web Application',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
        results: ['5,000+ Listings', '98% User Satisfaction']
      }
    ],
    faqs: [
      {
        question: 'What technology stack do you use?',
        answer: 'We specialize in modern stacks including React, Next.js, Node.js, Laravel, and WordPress. We choose the best tech based on your specific needs.'
      },
      {
        question: 'Will my website be mobile-friendly?',
        answer: 'Absolutely! All our websites are fully responsive and optimized for mobile, tablet, and desktop experiences.'
      },
      {
        question: 'Do you provide hosting and maintenance?',
        answer: 'Yes, we offer managed hosting, security updates, backups, and ongoing maintenance packages to keep your site running smoothly.'
      }
    ]
  },
  'app-development': {
    title: 'Mobile App Development',
    tagline: 'Apps That Users Love & Download',
    description: 'Create engaging mobile experiences with beautiful design and seamless functionality.',
    icon: Smartphone,
    color: 'from-purple-600 to-indigo-500',
    heroSlides: [
      {
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&q=80',
        title: ['Mobile Apps That', 'Users Adore'],
        subtitle: ['Beautiful design meets flawless', 'functionality on iOS and Android']
      },
      {
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920&q=80',
        title: ['From Concept To', 'App Store Success'],
        subtitle: ['End-to-end development for apps', 'that stand out and scale']
      },
      {
        image: 'https://images.unsplash.com/photo-1563986768609-2f93b6005cec?w=1920&q=80',
        title: ['Native Performance', 'Cross-Platform Reach'],
        subtitle: ['High-quality apps that work', 'everywhere your users are']
      },
    ],
    featuredCaseStudy: {
      title: 'FitTrack: Fitness App Success Story',
      client: 'FitTrack Health',
      industry: 'Health & Fitness',
      challenge: 'Enter competitive fitness app market with unique value proposition',
      solution: 'Cross-platform app with AI-powered workout plans, social features, and gamification',
      results: [
        '500,000+ downloads in 8 months',
        '4.9★ average rating',
        '$2M ARR from subscriptions',
        'Featured by Apple & Google'
      ],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80',
      testimonial: '"They turned our vision into a product that users genuinely love. The app exceeded all our expectations."',
      author: 'Lisa Thompson, Founder of FitTrack'
    },
    subServices: [
      {
        name: 'iOS Development',
        description: 'Native Swift apps for Apple ecosystem',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
        deliverables: ['iPhone app', 'iPad optimization', 'Apple Watch', 'App Store submission'],
        timeline: '10-14 weeks'
      },
      {
        name: 'Android Development',
        description: 'Native Kotlin apps for Google Play',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80',
        deliverables: ['Android app', 'Tablet support', 'Wear OS', 'Play Store launch'],
        timeline: '10-14 weeks'
      },
      {
        name: 'Cross-Platform Apps',
        description: 'React Native & Flutter solutions',
        image: 'https://images.unsplash.com/photo-1563986768609-2f93b6005cec?w=600&q=80',
        deliverables: ['iOS & Android app', 'Shared codebase', 'Native features', 'Both stores'],
        timeline: '8-12 weeks'
      },
      {
        name: 'App Backend & APIs',
        description: 'Scalable server infrastructure',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
        deliverables: ['REST API', 'Database design', 'Cloud hosting', 'Admin panel'],
        timeline: '6-8 weeks'
      }
    ],
    stats: [
      { number: '85+', label: 'Apps Delivered' },
      { number: '4.8★', label: 'Avg App Rating' },
      { number: '15M+', label: 'Total Downloads' },
    ],
    projects: [
      {
        id: 1,
        title: 'Food Delivery App',
        category: 'Food Tech',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80',
        results: ['1.2M Users', '$15M Revenue']
      },
      {
        id: 2,
        title: 'Banking App',
        category: 'FinTech',
        image: 'https://images.unsplash.com/photo-1563986768609-2f93b6005cec?w=1200&q=80',
        results: ['100k Users', 'Bank-Grade Security']
      },
      {
        id: 3,
        title: 'Social Network',
        category: 'Social',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80',
        results: ['2M Downloads', '4.7★ Rating']
      }
    ],
    faqs: [
      {
        question: 'iOS or Android first?',
        answer: 'It depends on your target audience. We can help you analyze your market and choose the right platform, or build cross-platform to launch on both simultaneously.'
      },
      {
        question: 'How much does app development cost?',
        answer: 'Costs vary based on complexity, features, and platforms. Simple apps start at $25k, while complex apps can range $75k-$200k+. We provide detailed estimates after discovery.'
      },
      {
        question: 'Will you help with App Store submission?',
        answer: 'Yes! We handle the entire submission process for both Apple App Store and Google Play Store, including compliance and optimization.'
      }
    ]
  },
  'automation-ai': {
    title: 'Automation & AI Solutions',
    tagline: 'Smart Systems That Work for You',
    description: 'Streamline operations with intelligent automation and AI-powered tools that scale your business.',
    icon: Lightbulb,
    color: 'from-amber-600 to-orange-500',
    heroSlides: [
      {
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80',
        title: ['Automate Everything', 'Scale Effortlessly'],
        subtitle: ['AI-powered solutions that eliminate', 'repetitive tasks and boost productivity']
      },
      {
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80',
        title: ['Work Smarter', 'Not Harder'],
        subtitle: ['Intelligent automation that saves time', 'and reduces operational costs']
      },
      {
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80',
        title: ['AI That Delivers', 'Real Results'],
        subtitle: ['Custom solutions powered by machine', 'learning and advanced automation']
      },
    ],
    featuredCaseStudy: {
      title: 'Enterprise CRM Automation Transformation',
      client: 'GlobalTech Solutions',
      industry: 'B2B SaaS',
      challenge: 'Sales team spending 60% of time on manual data entry and follow-ups',
      solution: 'Custom automation system integrating CRM, email, calendar, and AI-powered lead scoring',
      results: [
        '70% reduction in manual tasks',
        '$400k annual cost savings',
        '3x increase in productivity',
        '95% employee satisfaction'
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
      testimonial: '"The automation system paid for itself in 3 months. Our team can now focus on closing deals instead of data entry."',
      author: 'David Park, VP of Sales at GlobalTech'
    },
    subServices: [
      {
        name: 'Workflow Automation',
        description: 'Eliminate repetitive tasks across your business',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
        deliverables: ['Process mapping', 'Custom workflows', 'Integration setup', 'Training & docs'],
        timeline: '4-6 weeks'
      },
      {
        name: 'AI Chatbots',
        description: 'Intelligent 24/7 customer support',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
        deliverables: ['Custom chatbot', 'Knowledge base', 'Multi-channel', 'Analytics dashboard'],
        timeline: '3-4 weeks'
      },
      {
        name: 'Data Integration',
        description: 'Connect all your tools and systems',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
        deliverables: ['API connections', 'Data sync', 'Real-time updates', 'Error handling'],
        timeline: '3-5 weeks'
      },
      {
        name: 'Custom AI Models',
        description: 'Tailored machine learning solutions',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80',
        deliverables: ['Model training', 'API deployment', 'Performance monitoring', 'Continuous improvement'],
        timeline: '8-12 weeks'
      }
    ],
    stats: [
      { number: '200+', label: 'Automations Built' },
      { number: '70%', label: 'Time Savings Avg' },
      { number: '$8M', label: 'Savings Generated' },
    ],
    projects: [
      {
        id: 1,
        title: 'AI Support Bot',
        category: 'Chatbot',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
        results: ['85% Self-Service', '$200k Savings']
      },
      {
        id: 2,
        title: 'Data Pipeline',
        category: 'Integration',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
        results: ['Real-time Sync', 'Zero Data Loss']
      },
      {
        id: 3,
        title: 'Marketing Automation',
        category: 'Workflow',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
        results: ['60% Time Saved', '3x Lead Generation']
      }
    ],
    faqs: [
      {
        question: 'Which processes can be automated?',
        answer: 'Almost any repetitive task: data entry, email responses, scheduling, reporting, lead nurturing, invoice processing, and much more. We\'ll audit your workflows to identify opportunities.'
      },
      {
        question: 'Will AI replace my team?',
        answer: 'No! AI augments your team by handling repetitive tasks, allowing them to focus on high-value work that requires human creativity and decision-making.'
      },
      {
        question: 'How quickly will I see ROI?',
        answer: 'Most clients see positive ROI within 3-6 months through time savings and error reduction. The exact timeline depends on the scope of automation.'
      }
    ]
  },
  'digital-marketing': {
    title: 'Digital Marketing & SEO',
    tagline: 'Growth That Compounds Over Time',
    description: 'Amplify your online presence with data-driven strategies that deliver measurable results.',
    icon: TrendingUp,
    color: 'from-green-600 to-emerald-500',
    heroSlides: [
      {
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80',
        title: ['Digital Marketing', 'That Drives Growth'],
        subtitle: ['Data-driven strategies that deliver', 'measurable ROI and lasting results']
      },
      {
        image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=1920&q=80',
        title: ['Rank Higher', 'Convert Better'],
        subtitle: ['SEO and marketing excellence that', 'puts you ahead of competitors']
      },
      {
        image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1920&q=80',
        title: ['Amplify Your', 'Online Presence'],
        subtitle: ['Multi-channel strategies that reach', 'and engage your ideal customers']
      },
    ],
    featuredCaseStudy: {
      title: 'E-commerce SEO Growth Campaign',
      client: 'Urban Outfitters Online',
      industry: 'Fashion E-commerce',
      challenge: 'Low organic traffic and high customer acquisition costs',
      solution: 'Comprehensive SEO strategy: technical optimization, content marketing, and link building',
      results: [
        '450% increase in organic traffic',
        '#1 rankings for 50+ keywords',
        '$500k revenue from organic',
        '65% reduction in CAC'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      testimonial: '"Our organic traffic exploded. We went from page 3 to dominating page 1 for our most valuable keywords."',
      author: 'Jennifer Martinez, CMO of Urban Outfitters Online'
    },
    subServices: [
      {
        name: 'SEO Optimization',
        description: 'Rank higher and drive organic traffic',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
        deliverables: ['Technical SEO', 'Keyword research', 'Content strategy', 'Link building'],
        timeline: 'Ongoing (3-6 months to see results)'
      },
      {
        name: 'Google Ads Management',
        description: 'High-converting PPC campaigns',
        image: 'https://images.unsplash.com/photo-1434494869433-9b3f1c5c6e6f?w=600&q=80',
        deliverables: ['Campaign setup', 'Ad creation', 'A/B testing', 'Monthly optimization'],
        timeline: 'Ongoing'
      },
      {
        name: 'Social Media Marketing',
        description: 'Build engaged communities',
        image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&q=80',
        deliverables: ['Content calendar', 'Post creation', 'Community management', 'Growth strategy'],
        timeline: 'Ongoing'
      },
      {
        name: 'Content Marketing',
        description: 'Stories that resonate and convert',
        image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=600&q=80',
        deliverables: ['Content strategy', 'Blog posts', 'Video scripts', 'Email campaigns'],
        timeline: 'Ongoing'
      }
    ],
    stats: [
      { number: '500+', label: 'Campaigns Managed' },
      { number: '340%', label: 'Avg ROI' },
      { number: '$50M+', label: 'Revenue Generated' },
    ],
    projects: [
      {
        id: 1,
        title: 'B2B Google Ads',
        category: 'PPC',
        image: 'https://images.unsplash.com/photo-1434494869433-9b3f1c5c6e6f?w=600&q=80',
        results: ['280% ROI', '500+ Qualified Leads']
      },
      {
        id: 2,
        title: 'Social Growth',
        category: 'Social Media',
        image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&q=80',
        results: ['600k Followers', '45% Engagement']
      },
      {
        id: 3,
        title: 'Content Strategy',
        category: 'Content',
        image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=1200&q=80',
        results: ['2M Monthly Views', '5x Lead Gen']
      }
    ],
    faqs: [
      {
        question: 'How long until I see SEO results?',
        answer: 'SEO is a long-term strategy. Most clients see meaningful improvements in 3-6 months, with compounding results over 12+ months.'
      },
      {
        question: 'What\'s your approach to Google Ads?',
        answer: 'We focus on high-intent keywords, continuous A/B testing, and conversion optimization. Our goal is maximum ROI, not just clicks.'
      },
      {
        question: 'Do you guarantee rankings?',
        answer: 'No legitimate SEO agency can guarantee specific rankings. We guarantee our best effort, transparent reporting, and continuous optimization based on data.'
      }
    ]
  },
  'ecommerce': {
    title: 'eCommerce Solutions',
    tagline: 'Turn Browsers Into Buyers',
    description: 'Launch and scale your online store with end-to-end eCommerce expertise.',
    icon: ShoppingCart,
    color: 'from-violet-600 to-purple-500',
    heroSlides: [
      {
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1920&q=80',
        title: ['eCommerce Solutions', 'That Sell More'],
        subtitle: ['High-converting online stores that', 'turn browsers into loyal customers']
      },
      {
        image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1920&q=80',
        title: ['Launch Your Store', 'Scale Your Sales'],
        subtitle: ['End-to-end eCommerce expertise from', 'setup to optimization']
      },
      {
        image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1920&q=80',
        title: ['Multi-Channel Selling', 'Made Simple'],
        subtitle: ['Sell everywhere your customers are', 'with seamless integration']
      },
    ],
    featuredCaseStudy: {
      title: 'Fashion Brand Shopify Success',
      client: 'Bella Boutique',
      industry: 'Fashion & Apparel',
      challenge: 'Struggling with low conversion rates and abandoned carts on old platform',
      solution: 'Complete Shopify migration with optimized checkout, email automation, and personalization',
      results: [
        '$1.5M in first-year sales',
        '3.8% conversion rate (2x industry avg)',
        '2.5x return on ad spend',
        '40% repeat customer rate'
      ],
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
      testimonial: '"Our sales tripled after the new store launch. The checkout flow is so smooth, we cut cart abandonment in half."',
      author: 'Isabella Rodriguez, Owner of Bella Boutique'
    },
    subServices: [
      {
        name: 'Shopify Development',
        description: 'Fast, conversion-optimized stores',
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&q=80',
        deliverables: ['Custom theme', 'Product setup', 'Payment gateway', 'App integration'],
        timeline: '4-6 weeks'
      },
      {
        name: 'WooCommerce Stores',
        description: 'Flexible WordPress e-commerce',
        image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80',
        deliverables: ['Store setup', 'Payment & shipping', 'Inventory system', 'Marketing tools'],
        timeline: '4-6 weeks'
      },
      {
        name: 'Marketplace Integration',
        description: 'Sell on Amazon, eBay, Etsy',
        image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&q=80',
        deliverables: ['Multi-channel sync', 'Inventory management', 'Order automation', 'Analytics'],
        timeline: '2-3 weeks'
      },
      {
        name: 'Store Optimization',
        description: 'Maximize conversions and AOV',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80',
        deliverables: ['A/B testing', 'UX improvements', 'Speed optimization', 'Email flows'],
        timeline: 'Ongoing'
      }
    ],
    stats: [
      { number: '120+', label: 'Stores Launched' },
      { number: '$200M+', label: 'Total Sales' },
      { number: '4.2%', label: 'Avg Conv. Rate' },
    ],
    projects: [
      {
        id: 1,
        title: 'Multi-Channel Store',
        category: 'Marketplace',
        image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80',
        results: ['$3M Revenue', 'Zero Errors']
      },
      {
        id: 2,
        title: 'Electronics Store',
        category: 'Conversion',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80',
        results: ['2.1% to 4.5% Conv.', 'AOV +45%']
      },
      {
        id: 3,
        title: 'Subscription Box',
        category: 'Shopify',
        image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80',
        results: ['5k Subscribers', '92% Retention']
      }
    ],
    faqs: [
      {
        question: 'Shopify vs WooCommerce - which is better?',
        answer: 'Shopify is easier to manage and scales well. WooCommerce offers more customization with WordPress. We help you choose based on your needs, budget, and technical comfort.'
      },
      {
        question: 'How do you improve conversion rates?',
        answer: 'Through strategic UX improvements, A/B testing, faster load times, trust signals, better product photography, and optimized checkout flows. Small tweaks compound into significant revenue increases.'
      },
      {
        question: 'Can you help with inventory management?',
        answer: 'Yes! We set up inventory systems that sync across all your sales channels, prevent overselling, automate reordering, and provide real-time stock insights.'
      }
    ]
  }
};

interface ServiceData {
  heroSlides: Array<{
    image: string;
    title: string[];
    subtitle: string[];
  }>;
  stats: Array<{
    number: string;
    label: string;
  }>;
  color: string;
}

function FullWidthHeroSlider({ service }: { service: ServiceData }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % service.heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [service.heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % service.heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + service.heroSlides.length) % service.heroSlides.length);

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
            src={service.heroSlides[currentSlide].image}
            alt="Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
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
        {/* Title */}
        <div className="space-y-2">
          {service.heroSlides[currentSlide].title.map((line: string, i: number) => (
            <motion.h1
              key={i}
              variants={titleVariants}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight
                text-white
                drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]
                dark:drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)]"
            >
              {i === service.heroSlides[currentSlide].title.length - 1 ? (
                <span className="text-[#fec107] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  {line}
                </span>
              ) : (
                <span>{line}</span>
              )}
            </motion.h1>
          ))}
        </div>

        {/* Subtitle */}
        <motion.div variants={subtitleVariants} className="space-y-2">
          {service.heroSlides[currentSlide].subtitle.map((line: string, i: number) => (
            <p
              key={i}
              className="
                text-base md:text-lg lg:text-xl
                text-white/90
                drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]
                dark:drop-shadow-[0_1px_5px_rgba(255,255,255,0.8)]
              "
            >
              {line}
            </p>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div variants={subtitleVariants} className="flex gap-8 pt-6">
          {service.stats.map((stat, i: number) => (
            <div key={i}>
              <div className="text-3xl md:text-4xl font-black text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] mb-1">
                {stat.number}
              </div>
              <p className="text-sm text-white/80 drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={subtitleVariants} className="pt-4">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="
              inline-flex items-center gap-3
              bg-[#fec107] text-gray-900
              px-8 py-4 rounded-xl font-extrabold
              shadow-[0_20px_40px_rgba(254,193,7,0.35)]
              hover:shadow-[0_30px_60px_rgba(254,193,7,0.55)]
              transition-all
            "
          >
            Get Started Today
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  </div>
</div>


      {/* Navigation Buttons */}
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

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {service.heroSlides.map((_, i: number) => (
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

function ServicePage({ serviceKey, onTabChange }: { serviceKey: string, onTabChange: (key: string) => void }) {
  const service = serviceData[serviceKey as keyof typeof serviceData];
  if (!service) return null;

  const tabs = [
    { key: 'graphic-design', label: 'Design', icon: Palette },
    { key: 'web-development', label: 'Web', icon: Globe },
    { key: 'app-development', label: 'Apps', icon: Smartphone },
    { key: 'automation-ai', label: 'AI', icon: Lightbulb },
    { key: 'digital-marketing', label: 'Marketing', icon: TrendingUp },
    { key: 'ecommerce', label: 'eCommerce', icon: ShoppingCart },
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={serviceKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        {/* Full-Width Hero Slider */}
        <FullWidthHeroSlider service={service} />

        {/* Tab Navigation */}
        <div className="bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4">
            {/* Desktop */}
            <div className="hidden sm:grid grid-cols-3 md:grid-cols-6 gap-0">
              {tabs.map(tab => {
                const Icon = tab.icon;
                return (
                  <motion.button
                    key={tab.key}
                    onClick={() => onTabChange(tab.key)}
                    whileHover={{ backgroundColor: serviceKey === tab.key ? '' : 'rgba(249, 250, 251, 1)' }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center gap-2 px-4 py-4 font-bold transition-all border-b-2 ${
                      serviceKey === tab.key
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
            <div className="sm:hidden grid grid-cols-3 gap-0">
              {tabs.map(tab => {
                const Icon = tab.icon;
                return (
                  <motion.button
                    key={tab.key}
                    onClick={() => onTabChange(tab.key)}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center gap-1 px-2 py-3 font-bold transition-all border-b-2 ${
                      serviceKey === tab.key
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

        {/* Container for rest of content */}
        <div className="max-w-7xl mx-auto px-4">
          {/* Featured Case Study */}
          <div className="my-20 bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-2xl border border-gray-200">
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
                  className={`inline-block px-4 py-2 bg-gradient-to-r ${service.color} text-white rounded-full text-sm font-bold mb-4`}
                >
                  Featured Case Study
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl md:text-4xl font-black text-gray-900 mb-2"
                >
                  {service.featuredCaseStudy.title}
                </motion.h2>
                <p className="text-gray-600">{service.featuredCaseStudy.client} • {service.featuredCaseStudy.industry}</p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <Image
                    src={service.featuredCaseStudy.image}
                    alt={service.featuredCaseStudy.title}
                    width={1200}
                    height={768}
                    className="w-full h-96 object-cover rounded-xl shadow-lg"
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
                    <p className="text-gray-700">{service.featuredCaseStudy.challenge}</p>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-sm font-bold text-gray-500 uppercase mb-2">Solution</h3>
                    <p className="text-gray-700">{service.featuredCaseStudy.solution}</p>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-sm font-bold text-gray-500 uppercase mb-2">Results</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {service.featuredCaseStudy.results.map((result, i: number) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + i * 0.05 }}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={18} />
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
                    <p className="text-gray-700 italic mb-3">&ldquo;{service.featuredCaseStudy.testimonial}&rdquo;</p>
                    <p className="text-sm font-bold text-gray-900">— {service.featuredCaseStudy.author}</p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Process Section */}
          <OurProcessSection />

          {/* Sub-Services Breakdown */}
          <div className="my-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Our Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive solutions tailored to your specific needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {service.subServices.map((subService, i: number) => (
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
                      className="absolute inset-0"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Image
                        src={subService.image}
                        alt={subService.name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent`} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{subService.name}</h3>
                    <p className="text-gray-600 mb-4">{subService.description}</p>
                    <div className="mb-4">
                      <p className="text-sm font-bold text-gray-500 uppercase mb-2">Deliverables</p>
                      <div className="flex flex-wrap gap-2">
                        {subService.deliverables.map((item, j: number) => (
                          <span key={j} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm">
                      <span className="font-bold text-gray-700">Timeline:</span>{' '}
                      <span className="text-gray-600">{subService.timeline}</span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Portfolio Projects */}
          <div className="my-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Recent Projects</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Real results from real clients
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {service.projects.map((project, i: number) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#fec107] hover:shadow-xl transition-all"
                >
                  <div className="relative h-56 overflow-hidden">
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 text-gray-900 text-xs font-bold rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{project.title}</h3>
                    <div className="space-y-2">
                      {project.results.map((result, j: number) => (
                        <div key={j} className="flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                          <span className="text-gray-700 font-medium text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
              {service.faqs.map((faq, i: number) => (
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
            className={`bg-gradient-to-r ${service.color} text-white rounded-2xl p-12 text-center my-20`}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project and create something amazing together.
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
      </motion.div>
    </AnimatePresence>
  );
}

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('graphic-design');

  useEffect(() => {
    const syncTabWithHash = () => {
      const hash = window.location.hash.slice(1);
      if (hash && serviceData.hasOwnProperty(hash)) {
        setActiveTab(hash);
      } else if (!hash) {
        setActiveTab('graphic-design');
      }
    };

    syncTabWithHash();
    window.addEventListener('hashchange', syncTabWithHash);
    return () => window.removeEventListener('hashchange', syncTabWithHash);
  }, []);

  const handleTabClick = (key: string) => {
    setActiveTab(key);
    window.history.replaceState(null, '', `#${key}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Service Content */}
      <ServicePage serviceKey={activeTab} onTabChange={handleTabClick} />
    </div>
  );
}