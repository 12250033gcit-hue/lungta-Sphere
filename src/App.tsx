import React, { useState } from 'react';
import { Home, Briefcase, GraduationCap, BarChart2, User, Menu, RotateCw, CloudOff, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';
import HomeScreen from './screens/Home';
import CareersScreen from './screens/Careers';
import ApplyScreen from './screens/Apply';
import MyMarksScreen from './screens/MyMarks';
import ProfileScreen from './screens/Profile';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'careers' | 'apply' | 'marks' | 'profile'>('home');

  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'careers', label: 'Careers', icon: Briefcase },
    { id: 'apply', label: 'Apply', icon: GraduationCap },
    { id: 'marks', label: 'My Marks', icon: BarChart2 },
    { id: 'profile', label: 'Profile', icon: User },
  ] as const;

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg pb-24">
      {/* Offline Banner */}
      <div className="bg-brand-gold text-white px-5 py-2 flex items-center justify-between z-50">
        <div className="flex items-center gap-2">
          <CloudOff size={16} />
          <span className="text-xs font-medium">Offline Mode Active</span>
        </div>
        <span className="text-xs opacity-80">Viewing Cached Content</span>
      </div>

      {/* Header */}
      <header className="bg-[#FDF6EC] border-b-2 border-brand-outline/20 sticky top-0 z-40 shadow-sm">
        <div className="flex items-center justify-between px-5 h-16 max-w-screen-xl mx-auto w-full">
          <div className="flex items-center gap-3">
            <button className="text-brand-primary p-2 hover:bg-black/5 rounded-full transition-colors">
              <Menu size={24} />
            </button>
            <h1 className="font-bold text-xl text-brand-primary tracking-tight">Bhutan Career Guide</h1>
          </div>
          <button className="text-brand-primary p-2 hover:bg-black/5 rounded-full transition-colors active:rotate-180 duration-500">
            <RotateCw size={24} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-screen-xl mx-auto w-full px-5 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'home' && <HomeScreen />}
            {activeTab === 'careers' && <CareersScreen />}
            {activeTab === 'apply' && <ApplyScreen />}
            {activeTab === 'marks' && <MyMarksScreen />}
            {activeTab === 'profile' && <ProfileScreen />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Chat FAB (Contextual) */}
      <button className="fixed bottom-28 right-6 w-14 h-14 bg-brand-primary text-white rounded-full shadow-lg flex items-center justify-center active:scale-90 transition-transform z-40">
        <MessageCircle size={24} />
      </button>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 w-full bg-white border-t-2 border-brand-outline/20 rounded-t-xl shadow-[0px_-2px_8px_rgba(0,0,0,0.05)] z-50">
        <div className="flex justify-around items-center h-20 px-2 pb-safe max-w-screen-xl mx-auto">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex flex-col items-center justify-center px-4 py-2 rounded-xl transition-all duration-200",
                  isActive 
                    ? "bg-[#FDF6EC] text-brand-primary font-bold scale-105" 
                    : "text-brand-primary/60 hover:bg-black/5"
                )}
              >
                <Icon size={24} className={isActive ? "fill-brand-primary/10" : ""} />
                <span className="text-[10px] font-medium mt-1">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
