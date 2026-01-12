'use client';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';
import {
  Search, Palette, TestTube, Rocket, FileText, Code, Star, BookOpen, Database, Cpu, Zap, Shield, Check,
  ChevronLeft, ChevronRight, ArrowRight
} from 'lucide-react';
import OurProcessSection from '@/app/home/components/process-steps/OurProcessSection';
import ClientTestimonialsSection from '@/app/home/components/testimonials/ClientTestimonialsSection';
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
const processData = {
  'our-process': {
    title: 'Our Process',
    tagline: 'Proven Methodology for Success',
    description: 'A structured approach that ensures excellence at every stage',
    color: 'from-indigo-600 to-blue-600',
    heroSlides: [
      {
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80',
        title: ['From Discovery to', 'Delivered Excellence'],
        subtitle: ['A proven 4-phase process that transforms', 'your vision into reality']
      },
      {
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&q=80',
        title: ['Transparent Process', 'Exceptional Results'],
        subtitle: ['Collaborative approach with clear milestones', 'and continuous communication']
      },
      {
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80',
        title: ['Quality Assured', 'Every Step'],
        subtitle: ['Rigorous testing and optimization for', 'flawless performance']
      }
    ],
    stats: [
      { number: '4', label: 'Process Phases' },
      { number: '99%', label: 'On-Time Delivery' },
      { number: '700+', label: 'Projects Completed' }
    ]
  },
  'resources': {
    title: 'Knowledge & Resources',
    tagline: 'Insights to Empower Your Decisions',
    description: 'Comprehensive guides, case studies, and expert insights',
    color: 'from-purple-600 to-pink-600',
    heroSlides: [
      {
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
        title: ['Learn from Our', 'Success Stories'],
        subtitle: ['Real case studies and insights from', '700+ successful projects']
      },
      {
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&q=80',
        title: ['Expert Knowledge', 'At Your Fingertips'],
        subtitle: ['In-depth guides, whitepapers, and', 'industry best practices']
      },
      {
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80',
        title: ['Stay Ahead of', 'The Curve'],
        subtitle: ['Latest trends and innovations in', 'digital transformation']
      }
    ],
    stats: [
      { number: '60+', label: 'Case Studies' },
      { number: '120+', label: 'Blog Articles' },
      { number: '18+', label: 'Whitepapers' }
    ]
  },
  'technology': {
    title: 'Technology Stack',
    tagline: 'Cutting-Edge Tools & Platforms',
    description: 'Enterprise-grade technology for scalable solutions',
    color: 'from-green-600 to-emerald-600',
    heroSlides: [
      {
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80',
        title: ['Built with Modern', 'Technology'],
        subtitle: ['Leveraging the latest frameworks and', 'industry-leading tools']
      },
      {
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&q=80',
        title: ['Scalable & Secure', 'Infrastructure'],
        subtitle: ['Enterprise-grade solutions with', 'bank-level security']
      },
      {
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
        title: ['Future-Proof', 'Solutions'],
        subtitle: ['Technology that grows and adapts', 'with your business']
      }
    ],
    stats: [
      { number: '25+', label: 'Technologies' },
      { number: '99.99%', label: 'Uptime' },
      { number: '6', label: 'Tech Categories' }
    ]
  }
};
const processSteps = [
  {
    icon: Search,
    phase: 'Phase 1',
    title: 'Discovery & Planning',
    duration: '1-2 weeks',
    description: 'We dive deep into understanding your business, goals, and challenges to create a strategic roadmap.',
    activities: [
      'Stakeholder interviews & workshops',
      'Market & competitor analysis',
      'Requirements gathering & documentation',
      'Project scope & timeline definition',
      'Resource allocation & budget planning'
    ],
    deliverables: ['Project brief', 'Technical specifications', 'Timeline & milestones', 'Risk assessment']
  },
  {
    icon: Palette,
    phase: 'Phase 2',
    title: 'Design & Development',
    duration: '4-8 weeks',
    description: 'Our team brings your vision to life with stunning designs and robust development.',
    activities: [
      'Wireframing & prototyping',
      'UI/UX design & iterations',
      'Frontend & backend development',
      'API integrations & database setup',
      'Regular progress reviews & feedback'
    ],
    deliverables: ['Design mockups', 'Interactive prototypes', 'Functional application', 'Technical documentation']
  },
  {
    icon: TestTube,
    phase: 'Phase 3',
    title: 'Testing & Launch',
    duration: '1-2 weeks',
    description: 'Rigorous quality assurance ensures a flawless launch and optimal performance.',
    activities: [
      'Comprehensive QA testing',
      'Performance optimization',
      'Security audits & penetration testing',
      'User acceptance testing (UAT)',
      'Deployment & go-live support'
    ],
    deliverables: ['Test reports', 'Launch checklist', 'Training materials', 'Live application']
  },
  {
    icon: Rocket,
    phase: 'Ongoing',
    title: 'Support & Optimization',
    duration: 'Continuous',
    description: 'Post-launch support and continuous improvements keep your solution performing at its best.',
    activities: [
      '24/7 monitoring & maintenance',
      'Bug fixes & updates',
      'Performance analytics',
      'Feature enhancements',
      'Strategic consulting'
    ],
    deliverables: ['Monthly reports', 'Update releases', 'Performance insights', 'Growth recommendations']
  }
];
const resources = [
  {
    icon: FileText,
    title: 'Case Studies',
    count: '60+',
    description: 'Real success stories from clients across industries',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80',
    items: ['eCommerce transformation', 'SaaS platform launch', 'Healthcare portal', 'Real estate marketplace']
  },
  {
    icon: Star,
    title: 'Client Testimonials',
    count: '250+',
    description: 'Honest feedback from satisfied clients',
    image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&q=80',
    items: ['5-star ratings', 'Video testimonials', 'Written reviews', 'LinkedIn recommendations']
  },
  {
    icon: BookOpen,
    title: 'Blog & Insights',
    count: '120+',
    description: 'Expert articles on design, development, and digital strategy',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80',
    items: ['Technical tutorials', 'Industry trends', 'Best practices', 'Product updates']
  },
  {
    icon: Database,
    title: 'Whitepapers',
    count: '18+',
    description: 'In-depth research and guides for business growth',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80',
    items: ['Digital transformation', 'Scaling strategies', 'Tech stack selection', 'ROI optimization']
  }
];
const technologies = [
  {
    category: 'Frontend',
    icon: Code,
    tools: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'TypeScript'],
    color: 'from-blue-500 to-blue-600'
  },
  {
    category: 'Backend',
    icon: Database,
    tools: ['Node.js', 'Laravel', 'Python', 'MongoDB', 'PostgreSQL'],
    color: 'from-green-500 to-green-600'
  },
  {
    category: 'Mobile',
    icon: Cpu,
    tools: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo'],
    color: 'from-purple-500 to-purple-600'
  },
  {
    category: 'Cloud & DevOps',
    icon: Zap,
    tools: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD'],
    color: 'from-orange-500 to-orange-600'
  },
  {
    category: 'Security',
    icon: Shield,
    tools: ['SSL/TLS', 'OAuth 2.0', 'Encryption', 'Penetration Testing', 'GDPR Compliance'],
    color: 'from-red-500 to-red-600'
  }
];
interface ProcessData {
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

function FullWidthHeroSlider({ process }: { process: ProcessData }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % process.heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [process.heroSlides.length]);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % process.heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + process.heroSlides.length) % process.heroSlides.length);
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
            src={process.heroSlides[currentSlide].image}
            alt="Hero"
            fill
            className="object-cover"
            priority
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
                {process.heroSlides[currentSlide].title.map((line: string, i: number) => (
                  <motion.h1
                    key={i}
                    variants={titleVariants}
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                  >
                    {i === process.heroSlides[currentSlide].title.length - 1 ? (
                      <span className="text-[#fec107]">{line}</span>
                    ) : (
                      <span className="text-white">{line}</span>
                    )}
                  </motion.h1>
                ))}
              </div>
              <motion.div variants={subtitleVariants} className="space-y-2">
                {process.heroSlides[currentSlide].subtitle.map((line: string, i: number) => (
                  <p key={i} className="text-base md:text-lg lg:text-xl text-gray-200">
                    {line}
                  </p>
                ))}
              </motion.div>
              <motion.div
                variants={subtitleVariants}
                className="flex gap-8 pt-6"
              >
                {process.stats.map((stat, i: number) => (
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
        {process.heroSlides.map((_, i: number) => (
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
interface ProcessContent {
  color: string;
  heroSlides: Array<{
    image: string;
    title: string[];
    subtitle: string[];
  }>;
  stats: Array<{
    number: string;
    label: string;
  }>;
}

function ProcessSpecificContent({ processKey, process }: { processKey: string; process: ProcessContent | null }) {
  if (!process) return null;
  return (
    <div className="max-w-7xl mx-auto px-4">
      {processKey === 'our-process' && (
        <>
          <div className="my-20">
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-black mb-4">Our Proven 4-Phase Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From initial discovery to ongoing optimization, we follow a structured approach that ensures success at every stage.
              </p>
            </motion.div> */}

            <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="text-center mb-12"
>
  {/* Top Label */}
  <motion.span
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="px-4 py-2 font-bold text-xl uppercase tracking-widest inline-block mb-4"
    style={{ color: "#fec107" }}
  >
    Our Proven Process
  </motion.span>

  {/* Heading with extra line */}
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.1 }}
    className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight"
    style={{ color: "#000000" }}
  >
    4-Phase Approach{" "}
    <span style={{ color: "#fec107" }}>
      That Ensures Success
    </span>
  </motion.h2>

  {/* Subtitle */}
  <motion.p
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
  >
    From initial discovery to ongoing optimization, we follow a structured approach that ensures success at every stage.
  </motion.p>
</motion.div>

            <div className="space-y-8">
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-indigo-400 hover:shadow-xl transition-all"
                  >
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="flex-shrink-0 lg:w-64">
                        <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                          <Icon size={40} className="text-white" />
                        </div>
                        <div className="text-sm font-bold text-indigo-600 mb-2">{step.phase}</div>
                        <h3 className="text-2xl font-bold mb-2 text-gray-900">{step.title}</h3>
                        <div className="text-sm text-gray-500 font-medium">{step.duration}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">{step.description}</p>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-bold mb-3 text-gray-900">Key Activities:</h4>
                            <ul className="space-y-2">
                              {step.activities.map((activity, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                  <Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                                  {activity}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold mb-3 text-gray-900">Deliverables:</h4>
                            <div className="space-y-2">
                              {step.deliverables.map((deliverable, idx) => (
                                <div key={idx} className="bg-indigo-50 px-4 py-2 rounded-lg text-sm text-gray-700 border border-indigo-200 font-medium">
                                  {deliverable}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <OurProcessSection />
          <ClientTestimonialsSection />
         <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="my-20 bg-gradient-to-r from-[#fec107] via-[#FFD54F] to-[#FFD700] p-12 md:p-16 rounded-3xl text-center relative overflow-hidden"
>
  <div className="relative z-10">
    {/* Heading */}
    <h3 className="text-3xl md:text-4xl font-black text-black mb-4">
      Ready to start your project?
    </h3>

    {/* Paragraph */}
    <p className="mb-8 text-black text-lg max-w-2xl mx-auto">
      Let&apos;s discuss how our process can bring your vision to life.
    </p>

    {/* Button */}
    <motion.button
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center justify-center gap-3 bg-black text-yellow-500 px-10 py-4 rounded-xl font-bold shadow-xl hover:text-white transition-colors duration-300"
    >
      Schedule Discovery Call
      <motion.div
        animate={{ x: [0, 4, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ArrowRight size={20} />
      </motion.div>
    </motion.button>
  </div>
</motion.div>

        </>
      )}
      {processKey === 'resources' && (
        <>
          <div className="my-20 text-center">
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black mb-4">Knowledge & Resources</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our collection of case studies, testimonials, insights, and in-depth guides.
              </p>
            </motion.div> */}
            <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="text-center mb-12"
>
  {/* Top Label */}
  <motion.span
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="px-4 py-2 font-bold text-xl uppercase tracking-widest inline-block mb-4"
    style={{ color: "#fec107" }}
  >
    Knowledge & Resources
  </motion.span>

  {/* Heading with extra line */}
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.1 }}
    className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight"
    style={{ color: "#000000" }}
  >
    Explore Our{" "}
    <span style={{ color: "#fec107" }}>
      Insights & Guides
    </span>
  </motion.h2>

  {/* Subtitle */}
  <motion.p
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
  >
    Explore our collection of case studies, testimonials, insights, and in-depth guides.
  </motion.p>
</motion.div>

          </div>
          <div className="my-20 grid md:grid-cols-2 gap-8">
            {resources.map((resource, i) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-purple-400 hover:shadow-2xl transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full">
                        <span className="text-2xl font-black text-purple-600">{resource.count}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                        <Icon size={28} className="text-purple-600" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{resource.title}</h3>
                    <p className="text-gray-600 mb-6">{resource.description}</p>
                    <ul className="space-y-2 mb-6">
                      {resource.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="text-purple-600 font-bold hover:underline flex items-center gap-2"
                    >
                      View All
                      <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="my-20 bg-gradient-to-r from-[#fec107] via-[#FFD54F] to-[#FFD700] p-12 md:p-16 rounded-3xl text-center relative overflow-hidden"
>
  <div className="max-w-2xl mx-auto relative z-10">
    {/* Heading */}
    <h3 className="text-3xl md:text-4xl font-black text-black mb-3">
      Stay Updated
    </h3>

    {/* Paragraph */}
    <p className="mb-8 text-black text-lg">
      Get the latest insights and updates delivered to your inbox.
    </p>

    {/* Input + Button */}
    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-yellow-500 outline-none"
      />
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center justify-center gap-3 bg-black text-yellow-500 px-6 py-3 rounded-xl font-bold shadow-xl hover:text-white transition-colors duration-300"
      >
        Subscribe
        <motion.div
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowRight size={20} />
        </motion.div>
      </motion.button>
    </div>
  </div>
</motion.div>

        </>
      )}
      {processKey === 'technology' && (
        <>
          <div className="my-20 text-center">
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black mb-4">Our Technology Stack</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We leverage the latest technologies to build scalable, secure, and high-performance solutions.
              </p>
            </motion.div> */}

            <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="text-center mb-12"
>
  {/* Top Label */}
  <motion.span
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="px-4 py-2 font-bold text-xl uppercase tracking-widest inline-block mb-4"
    style={{ color: "#fec107" }}
  >
    Our Technology Stack
  </motion.span>

  {/* Heading with extra line */}
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.1 }}
    className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight"
    style={{ color: "#000000" }}
  >
    Leveraging Modern{" "}
    <span style={{ color: "#fec107" }}>
      Technologies
    </span>
  </motion.h2>

  {/* Subtitle */}
  <motion.p
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
  >
    We leverage the latest technologies to build scalable, secure, and high-performance solutions.
  </motion.p>
</motion.div>

          </div>
          <div className="my-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-green-400 hover:shadow-2xl transition-all"
                >
                  <div className={`w-16 h-16 ${tech.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{tech.category}</h3>
                  <ul className="space-y-2">
                    {tech.tools.map((tool, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <Check size={16} className="text-green-500 flex-shrink-0" />
                        {tool}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
          <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="my-20 bg-gradient-to-r from-[#fec107] via-[#FFD54F] to-[#FFD700] p-12 md:p-16 rounded-3xl text-center relative overflow-hidden"
>
  <div className="relative z-10">
    {/* Heading */}
    <h3 className="text-3xl md:text-4xl font-black text-black mb-4">
      Ready to Build with Cutting-Edge Tech?
    </h3>

    {/* Paragraph */}
    <p className="mb-8 text-black text-lg max-w-2xl mx-auto">
      Let&apos;s discuss the best technology stack for your project.
    </p>

    {/* Button */}
    <motion.button
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center justify-center gap-3 bg-black text-yellow-500 px-10 py-4 rounded-xl font-bold shadow-xl hover:text-white transition-colors duration-300"
    >
      Explore Tech Consultation
      <motion.div
        animate={{ x: [0, 4, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ArrowRight size={20} />
      </motion.div>
    </motion.button>
  </div>
</motion.div>

        </>
      )}
      {/* Global Footer CTA */}
      {/* <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="my-20 pt-12 border-t border-gray-200"
      >
        <div className="text-center">
          <h3 className="text-3xl font-black mb-4 text-gray-900">Ready to Transform Your Business?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how DPWebz can help you achieve your digital goals with innovative solutions.
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
      </motion.div> */}

      <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="my-20 pt-12 border-t border-gray-200"
>
  <div className="text-center">
    {/* Top Label */}
    <motion.span
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-4 py-2 font-bold text-xl uppercase tracking-widest inline-block mb-4"
      style={{ color: "#fec107" }}
    >
      Get Started Today
    </motion.span>

    {/* Heading with extra line */}
    <motion.h3
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
      style={{ color: "#000000" }}
    >
      Ready to Transform Your{" "}
      <span style={{ color: "#fec107" }}>
        Business?
      </span>
    </motion.h3>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="text-gray-600 text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
    >
      Let&apos;s discuss how DPWebz can help you achieve your digital goals with innovative solutions.
    </motion.p>

    {/* CTA Button */}
   <motion.a
  href="#connect"
  whileHover={{ scale: 1.05, y: -4 }}
  whileTap={{ scale: 0.95 }}
  className="inline-flex items-center justify-center gap-3 bg-black text-yellow-500 px-10 py-4 rounded-xl font-bold shadow-xl hover:text-white transition-colors duration-300"
>
  Start Your Project
  <motion.div
    animate={{ x: [0, 4, 0] }}
    transition={{ duration: 1.5, repeat: Infinity }}
  >
    <ArrowRight size={20} />
  </motion.div>
</motion.a>

  </div>
</motion.div>

    </div>
  );
}
export default function ProcessPageMain() {
  const [activeTab, setActiveTab] = useState('our-process');
  const tabs = [
    { key: 'our-process', label: 'Process', icon: Rocket },
    { key: 'resources', label: 'Resources', icon: FileText },
    { key: 'technology', label: 'Technology', icon: Code },
  ];
  // Sync with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && processData.hasOwnProperty(hash)) {
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
  const currentProcess = processData[activeTab as keyof typeof processData];
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
          <FullWidthHeroSlider process={currentProcess} />
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
          <ProcessSpecificContent processKey={activeTab} process={currentProcess} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}