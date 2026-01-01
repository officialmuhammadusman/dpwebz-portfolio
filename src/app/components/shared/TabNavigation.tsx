'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Tab {
  key: string;
  label: string;
  icon: LucideIcon;
}

interface TabNavigationProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (key: string) => void;
}

export default function TabNavigation({ tabs, activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop */}
        <div className="hidden sm:flex justify-center gap-0">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <motion.button
                key={tab.key}
                onClick={() => onTabChange(tab.key)}
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
                onClick={() => onTabChange(tab.key)}
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
  );
}


