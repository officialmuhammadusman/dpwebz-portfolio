'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Users, Award, Mail } from 'lucide-react';
import HeroSlider from '@/app/components/shared/HeroSlider';
import TabNavigation from '@/app/components/shared/TabNavigation';
import AboutContent from './components/AboutContent';
import { aboutData } from './data';

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

  const currentAbout = aboutData[activeTab as keyof typeof aboutData];

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
          <HeroSlider
            slides={currentAbout.heroSlides}
            stats={currentAbout.stats}
            ctaText="Learn More"
          />
        </motion.div>
      </AnimatePresence>

      {/* Tab Navigation */}
      <TabNavigation
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabClick}
      />

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <AboutContent aboutKey={activeTab} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}