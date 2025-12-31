'use client';

import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  Building2, Users, Award, Mail, Phone, MapPin, Calendar, Heart,
  Target, Zap, Trophy, Shield, Star, ChevronLeft, ChevronRight,
  ArrowRight, CheckCircle2, Sparkles
} from 'lucide-react';
import { useState, useEffect } from 'react';

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

const aboutData = {
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
};

const coreValues = [
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

const leaders = [
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

const achievements = [
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

function FullWidthHeroSlider({ about }: { about: any }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % about.heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [about.heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % about.heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + about.heroSlides.length) % about.heroSlides.length);

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
          <img
            src={about.heroSlides[currentSlide].image}
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
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
                {about.heroSlides[currentSlide].title.map((line: string, i: number) => (
                  <motion.h1
                    key={i}
                    variants={titleVariants}
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                  >
                    {i === about.heroSlides[currentSlide].title.length - 1 ? (
                      <span className="text-[#fec107]">{line}</span>
                    ) : (
                      <span className="text-white">{line}</span>
                    )}
                  </motion.h1>
                ))}
              </div>

              <motion.div variants={subtitleVariants} className="space-y-2">
                {about.heroSlides[currentSlide].subtitle.map((line: string, i: number) => (
                  <p key={i} className="text-base md:text-lg lg:text-xl text-gray-200">
                    {line}
                  </p>
                ))}
              </motion.div>

              <motion.div
                variants={subtitleVariants}
                className="flex gap-8 pt-6"
              >
                {about.stats.map((stat: any, i: number) => (
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
                  Learn More
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
        {about.heroSlides.map((_: any, i: number) => (
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

function AboutSpecificContent({ aboutKey }: { aboutKey: string }) {
  const about = aboutData[aboutKey as keyof typeof aboutData];
  const [leadershipIndex, setLeadershipIndex] = useState(0);

  if (!about) return null;

  const visibleLeaders = leaders.slice(leadershipIndex, leadershipIndex + 3);

  const nextSlide = () => {
    if (leadershipIndex + 3 < leaders.length) {
      setLeadershipIndex(leadershipIndex + 3);
    }
  };

  const prevSlide = () => {
    if (leadershipIndex > 0) {
      setLeadershipIndex(leadershipIndex - 3);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      {aboutKey === 'company' && (
        <>
          {/* About Section */}
          <div className="my-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black mb-6 text-gray-900">About DPWebz</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="text-xl leading-relaxed mb-6">
                  Founded in 2015, DPWebz has grown from a small startup to a leading digital agency serving clients worldwide.
                  We specialize in creating transformative digital experiences that drive business growth and innovation.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  With a team of 55+ talented professionals across design, development, marketing, and strategy, we've delivered
                  over 600 successful projects for startups, SMBs, and enterprise clients in diverse industries.
                </p>
                <p className="text-lg leading-relaxed">
                  Our approach combines creative excellence with technical expertise, ensuring every solution we build is not
                  just beautiful, but functional, scalable, and aligned with your business objectives.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Our Story Timeline */}
          <div className="my-20 bg-gradient-to-br from-teal-50 to-cyan-50 p-12 rounded-2xl border border-teal-100">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-black mb-8 text-gray-900">Our Journey</h3>
              <div className="space-y-6">
                {[
                  { year: '2015', text: 'DPWebz was founded with a vision to make high-quality digital solutions accessible to businesses of all sizes.' },
                  { year: '2017', text: 'Expanded services to include mobile app development and digital marketing, growing team to 15 members.' },
                  { year: '2019', text: 'Launched automation and AI services division, helping businesses streamline operations and reduce costs.' },
                  { year: '2021', text: 'Reached 500+ completed projects milestone and opened second office for international clients.' },
                  { year: '2023', text: 'Recognized as top digital agency by Clutch, expanded team to 50+ professionals.' },
                  { year: '2024', text: 'Continue to innovate with cutting-edge AI solutions and expand global presence.' },
                  { year: '2025', text: 'Achieved 600+ projects milestone and earned additional industry awards for excellence.' }
                ].map((milestone, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg">
                      {milestone.year}
                    </div>
                    <p className="text-gray-700 pt-3 flex-1">{milestone.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Core Values */}
          <div className="my-20">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-black mb-12 text-center text-gray-900"
            >
              Our Core Values
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-8">
              {coreValues.map((value, i) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:border-teal-400 hover:shadow-xl transition-all"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                      <Icon size={28} className="text-white" />
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="my-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white p-12 rounded-2xl text-center"
          >
            <Sparkles size={48} className="mx-auto mb-6 text-[#fec107]" />
            <h3 className="text-3xl font-black mb-4">Our Mission</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              To empower businesses with innovative digital solutions that drive growth, enhance user experiences,
              and create lasting value in an ever-evolving digital landscape.
            </p>
          </motion.div>
        </>
      )}

      {aboutKey === 'leadership' && (
        <>
          {/* Leadership Intro */}
          <div className="my-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black mb-4">Meet Our Leadership Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Visionary leaders with decades of combined experience driving innovation and excellence.
              </p>
            </motion.div>
          </div>

          {/* Leadership Cards Slider */}
          <div className="my-20">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {visibleLeaders.map((leader, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-purple-400 hover:shadow-2xl transition-all"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{leader.name}</h3>
                    <div className="text-purple-600 font-semibold mb-4">{leader.position}</div>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{leader.bio}</p>
                    <div className="pt-4 border-t">
                      <div className="text-xs text-gray-500 mb-2">Expertise:</div>
                      <div className="text-sm text-gray-700 font-medium">{leader.expertise}</div>
                    </div>
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="mt-4 text-purple-600 hover:text-purple-700 font-semibold text-sm inline-flex items-center gap-2"
                    >
                      Connect on LinkedIn
                      <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={prevSlide}
                disabled={leadershipIndex === 0}
                className={`p-3 rounded-full transition-all ${
                  leadershipIndex === 0
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex gap-2">
                {Array.from({ length: Math.ceil(leaders.length / 3) }).map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1 rounded-full transition-all ${
                      Math.floor(leadershipIndex / 3) === idx ? 'bg-purple-600 w-12' : 'bg-gray-300 w-8'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                disabled={leadershipIndex + 3 >= leaders.length}
                className={`p-3 rounded-full transition-all ${
                  leadershipIndex + 3 >= leaders.length
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="my-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-12 rounded-2xl text-center"
          >
            <h3 className="text-3xl font-black mb-4">Join Our Growing Team</h3>
            <p className="mb-8 text-purple-100 text-lg">
              We're always looking for talented individuals to join our mission.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold shadow-xl transition-all"
            >
              View Open Positions
            </motion.button>
          </motion.div>
        </>
      )}

      {aboutKey === 'recognition' && (
        <>
          {/* Recognition Intro */}
          <div className="my-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black mb-4">Awards & Recognition</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our commitment to excellence has been recognized by industry leaders and organizations worldwide.
              </p>
            </motion.div>
          </div>

          {/* Awards Grid */}
          <div className="my-20 grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, i) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white border-2 border-gray-200 p-8 rounded-2xl hover:border-amber-400 hover:shadow-2xl transition-all"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icon size={32} className="text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-amber-600 mb-2">{achievement.year}</div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{achievement.title}</h3>
                      <p className="text-gray-600">{achievement.organization}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Certifications */}
          <div className="my-20">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-black mb-8 text-gray-900"
            >
              Certifications & Partners
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Google Partner', 'AWS Certified', 'Meta Business Partner', 'Shopify Partner',
                'HubSpot Certified', 'Microsoft Partner', 'Stripe Partner', 'Salesforce Partner'].map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-all"
                >
                  <div className="font-bold text-gray-700">{cert}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Press Coverage */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="my-20 bg-gradient-to-br from-amber-50 to-orange-50 p-12 rounded-2xl border border-amber-100"
          >
            <h3 className="text-3xl font-black mb-8 text-gray-900 text-center">Featured In</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {['TechCrunch', 'Forbes', 'Entrepreneur', 'Inc. Magazine',
                'Business Insider', 'Fast Company', 'Wired', 'The Verge'].map((outlet, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="text-center text-gray-700 font-bold text-lg"
                >
                  {outlet}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      )}

      {aboutKey === 'connect' && (
        <>
          {/* Connect Intro */}
          <div className="my-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to start your project? We'd love to hear from you. Reach out through any of these channels.
              </p>
            </motion.div>
          </div>

          {/* Contact Form & Info */}
          <div className="my-20 grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-gray-200 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-all"
                >
                  Send Message
                </motion.button>
              </div>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 p-6 rounded-2xl"
              >
                <MapPin size={32} className="text-blue-600 mb-4" />
                <h4 className="font-bold text-lg mb-2 text-gray-900">Office Locations</h4>
                <div className="space-y-3 text-gray-600">
                  <div>
                    <div className="font-semibold">Headquarters</div>
                    <div className="text-sm">123 Tech Street, San Francisco, CA 94102</div>
                  </div>
                  <div>
                    <div className="font-semibold">Regional Office</div>
                    <div className="text-sm">456 Innovation Ave, New York, NY 10001</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 p-6 rounded-2xl"
              >
                <Phone size={32} className="text-blue-600 mb-4" />
                <h4 className="font-bold text-lg mb-2 text-gray-900">Phone</h4>
                <p className="text-gray-600">+1 (555) 123-4567</p>
                <p className="text-sm text-gray-500 mt-2">Mon-Fri, 9AM-6PM PST</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 p-6 rounded-2xl"
              >
                <Mail size={32} className="text-blue-600 mb-4" />
                <h4 className="font-bold text-lg mb-2 text-gray-900">Email</h4>
                <p className="text-gray-600">hello@dpwebz.com</p>
                <p className="text-sm text-gray-500 mt-2">We respond within 24 hours</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 p-6 rounded-2xl"
              >
                <Calendar size={32} className="text-blue-600 mb-4" />
                <h4 className="font-bold text-lg mb-2 text-gray-900">Book a Consultation</h4>
                <p className="text-gray-600 mb-4">Schedule a free 30-minute discovery call</p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-all"
                >
                  Schedule Now
                </motion.button>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="my-20 bg-white border-2 border-gray-200 p-12 rounded-2xl text-center"
          >
            <h3 className="text-3xl font-black mb-4 text-gray-900">Need Support?</h3>
            <p className="text-gray-600 mb-8 text-lg">
              Our support team is here to help with any questions or issues.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold shadow-xl transition-all inline-flex items-center gap-3"
            >
              Visit Support Center
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </>
      )}

      {/* Global Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="my-20 pt-12 border-t border-gray-200"
      >
        <div className="text-center">
          <h3 className="text-3xl font-black mb-4 text-gray-900">Ready to Transform Your Business?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how DPWebz can help you achieve your digital goals with innovative solutions.
          </p>
          <motion.a
            href="#connect"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-[#fec107] text-gray-900 px-10 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all"
          >
            Start Your Project
            <ArrowRight size={20} />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}

export default function AboutUsPage() {
  const [activeTab, setActiveTab] = useState('company');

  const tabs = [
    { key: 'company', label: 'Company', icon: Building2 },
    { key: 'leadership', label: 'Leadership', icon: Users },
    { key: 'recognition', label: 'Recognition', icon: Award },
    { key: 'connect', label: 'Connect', icon: Mail },
  ];

  // Sync tab with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && aboutData.hasOwnProperty(hash)) {
        setActiveTab(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabClick = (key: string) => {
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
          <FullWidthHeroSlider about={aboutData[activeTab]} />
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
                  className={`flex flex-col items-center gap-1 px-3 py-3 font-bold transition-all border-b-2 flex-1 ${
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
          <AboutSpecificContent aboutKey={activeTab} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}