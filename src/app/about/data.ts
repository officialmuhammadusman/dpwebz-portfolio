import { Heart, Target, Zap, Users, Trophy, Star, Award, Shield } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface HeroSlide {
  image: string;
  title: string[];
  subtitle: string[];
}

export interface Stat {
  number: string;
  label: string;
}

export interface AboutSection {
  title: string;
  tagline: string;
  description: string;
  color: string;
  heroSlides: HeroSlide[];
  stats: Stat[];
}

export interface CoreValue {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Leader {
  name: string;
  position: string;
  bio: string;
  expertise: string;
  image: string;
}

export interface Achievement {
  icon: LucideIcon;
  title: string;
  organization: string;
  year: string;
}

export const aboutData = {
  'company': {
    title: 'Our Company',
    tagline: 'Building Digital Excellence Since 2015',
    description: 'A passionate team of innovators creating transformative digital experiences',
    color: 'from-teal-600 to-cyan-600',
    heroSlides: [
      {
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80',
        title: ['Building the Future', 'One Project at a Time'],
        subtitle: ['Transforming businesses through innovative', 'digital solutions and creative excellence']
      },
      {
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&q=80',
        title: ['Your Success is', 'Our Mission'],
        subtitle: ['Partnering with ambitious businesses to', 'achieve extraordinary results']
      },
      {
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80',
        title: ['Innovation Meets', 'Excellence'],
        subtitle: ['55+ talented professionals delivering', '600+ successful projects worldwide']
      }
    ],
    stats: [
      { number: '10+', label: 'Years of Excellence' },
      { number: '600+', label: 'Projects Delivered' },
      { number: '55+', label: 'Team Members' }
    ]
  },
  'leadership': {
    title: 'Leadership Team',
    tagline: 'Visionaries Driving Innovation',
    description: 'Meet the experts leading our mission to transform businesses',
    color: 'from-purple-600 to-pink-600',
    heroSlides: [
      {
        image: 'https://images.unsplash.com/photo-1519389083046-e3df9c2b3325?w=1920&q=80',
        title: ['Led by Industry', 'Experts'],
        subtitle: ['Decades of combined experience in', 'technology, design, and business']
      },
      {
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80',
        title: ['Innovation Through', 'Leadership'],
        subtitle: ['Strategic vision backed by', 'proven expertise and results']
      },
      {
        image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1920&q=80',
        title: ['Building Tomorrow', 'Together'],
        subtitle: ['A leadership team committed to', 'your success and growth']
      }
    ],
    stats: [
      { number: '160+', label: 'Years Combined Experience' },
      { number: '6', label: 'Executive Leaders' },
      { number: '18+', label: 'Industry Awards' }
    ]
  },
  'recognition': {
    title: 'Awards & Recognition',
    tagline: 'Excellence Recognized Worldwide',
    description: 'Our commitment to quality has earned industry recognition',
    color: 'from-amber-600 to-orange-600',
    heroSlides: [
      {
        image: 'https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?w=1920&q=80',
        title: ['Award-Winning', 'Excellence'],
        subtitle: ['Recognized by industry leaders for', 'innovation and outstanding results']
      },
      {
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80',
        title: ['Trusted by', 'Industry Leaders'],
        subtitle: ['Certified partners with the worlds', 'leading technology platforms']
      },
      {
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80',
        title: ['Setting Industry', 'Standards'],
        subtitle: ['ISO certified and featured in', 'top technology publications']
      }
    ],
    stats: [
      { number: '18+', label: 'Industry Awards' },
      { number: '9+', label: 'Certifications' },
      { number: '4.9★', label: 'Client Rating' }
    ]
  },
  'connect': {
    title: 'Get In Touch',
    tagline: 'Let\'s Start Your Journey',
    description: 'Ready to transform your business? We\'re here to help',
    color: 'from-blue-600 to-cyan-600',
    heroSlides: [
      {
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80',
        title: ['Ready to Build', 'Something Amazing?'],
        subtitle: ['Get in touch and let\'s discuss', 'your next big project']
      },
      {
        image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80',
        title: ['We\'re Here', 'To Help'],
        subtitle: ['Multiple ways to connect with', 'our team of experts']
      },
      {
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
        title: ['Your Success', 'Starts Here'],
        subtitle: ['Schedule a free consultation', 'and explore possibilities']
      }
    ],
    stats: [
      { number: '2', label: 'Global Offices' },
      { number: '24/7', label: 'Support Available' },
      { number: '<24h', label: 'Response Time' }
    ]
  }
} satisfies Record<string, AboutSection>;

export const coreValues: CoreValue[] = [
  {
    icon: Heart,
    title: 'Client-First Approach',
    description: 'Your success is our success. We prioritize your needs and goals in everything we do.'
  },
  {
    icon: Target,
    title: 'Excellence & Quality',
    description: 'We maintain the highest standards in every project, never compromising on quality.'
  },
  {
    icon: Zap,
    title: 'Innovation & Agility',
    description: 'We embrace new technologies and adapt quickly to changing market demands.'
  },
  {
    icon: Users,
    title: 'Collaboration & Transparency',
    description: 'Open communication and teamwork drive our success with clients and partners.'
  }
];

export const leaders: Leader[] = [
  {
    name: 'John Anderson',
    position: 'Chief Executive Officer',
    bio: 'With over 16 years in digital transformation, John leads DPWebz with a vision for innovation and client success.',
    expertise: 'Strategic Planning, Digital Transformation, Business Growth',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
  },
  {
    name: 'Sarah Martinez',
    position: 'Chief Technology Officer',
    bio: 'Sarah brings 13+ years of software engineering expertise, specializing in scalable architectures.',
    expertise: 'Software Architecture, Cloud Infrastructure, Team Leadership',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80'
  },
  {
    name: 'Michael Chen',
    position: 'Creative Director',
    bio: 'Award-winning designer with 11 years creating compelling brand experiences for global brands.',
    expertise: 'Brand Identity, UI/UX Design, Creative Strategy',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80'
  },
  {
    name: 'Emily Thompson',
    position: 'VP of Marketing',
    bio: 'Emily drives growth strategies with data-driven marketing campaigns and 9+ years experience.',
    expertise: 'Growth Marketing, SEO/SEM, Content Strategy',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80'
  },
  {
    name: 'David Rodriguez',
    position: 'Head of Operations',
    bio: 'David ensures seamless project delivery with 11 years managing complex projects.',
    expertise: 'Project Management, Process Optimization, Client Relations',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80'
  },
  {
    name: 'Lisa Wang',
    position: 'VP of Business Development',
    bio: 'Lisa expands partnerships and drives business growth with proven enterprise sales success.',
    expertise: 'Partnership Development, Sales Strategy, Market Expansion',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80'
  }
];

export const achievements: Achievement[] = [
  {
    icon: Trophy,
    title: 'Top Web Design Agency 2025',
    organization: 'Clutch & Design Rush',
    year: '2025'
  },
  {
    icon: Star,
    title: 'Best Digital Transformation Partner',
    organization: 'Tech Excellence Awards',
    year: '2024'
  },
  {
    icon: Award,
    title: 'Innovation in AI Solutions',
    organization: 'AI Summit Awards',
    year: '2023'
  },
  {
    icon: Shield,
    title: 'ISO 27001 Certified',
    organization: 'International Organization for Standardization',
    year: '2022'
  }
];


