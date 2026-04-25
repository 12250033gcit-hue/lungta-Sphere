import React from 'react';
import { User, Settings, Shield, HelpCircle, LogOut, ChevronRight, Mail, MapPin, Award } from 'lucide-react';

export default function Profile() {
  const menuItems = [
    { icon: Settings, label: 'Preferences', desc: 'Interface, language & themes' },
    { icon: Shield, label: 'Privacy & Security', desc: 'Secure data management' },
    { icon: HelpCircle, label: 'Help & Support', desc: 'FAQs and support chat' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      <h2 className="text-3xl font-bold text-brand-primary tracking-tight">Student Profile</h2>

      {/* User Info Header */}
      <section className="bg-white border border-brand-outline/30 rounded-3xl p-8 shadow-sm text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-brand-primary" />
        <div className="relative z-10">
          <div className="w-24 h-24 bg-brand-primary/5 rounded-full flex items-center justify-center mx-auto mb-5 border-2 border-brand-primary/10">
            <User size={48} className="text-brand-primary opacity-20" />
          </div>
          <h3 className="text-2xl font-bold text-brand-primary">Tashi Dorji</h3>
          <p className="text-sm font-bold text-brand-secondary uppercase tracking-[0.2em] mt-1">Class XII Science</p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-stone-500 bg-stone-50 px-4 py-2 rounded-xl border border-stone-100">
              <Mail size={16} />
              <span className="text-xs font-semibold">tashi@rub.edu.bt</span>
            </div>
            <div className="flex items-center gap-2 text-stone-500 bg-stone-50 px-4 py-2 rounded-xl border border-stone-100">
              <MapPin size={16} />
              <span className="text-xs font-semibold">Thimphu, Bhutan</span>
            </div>
            <div className="flex items-center gap-2 text-stone-500 bg-stone-50 px-4 py-2 rounded-xl border border-stone-100">
               <Award size={16} />
              <span className="text-xs font-semibold">CID: 1150...</span>
            </div>
          </div>
        </div>
      </section>

      {/* Settings Menu */}
      <section className="space-y-4">
        <h3 className="text-[10px] font-extrabold text-stone-400 uppercase tracking-widest ml-1">Settings & Support</h3>
        <div className="bg-white border border-brand-outline/30 rounded-2xl overflow-hidden shadow-sm divide-y divide-brand-outline/10">
          {menuItems.map((item) => (
            <button key={item.label} className="w-full p-5 flex items-center justify-between hover:bg-brand-bg transition-colors group">
              <div className="flex items-center gap-5">
                <div className="w-10 h-10 bg-brand-primary/5 rounded-xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                  <item.icon size={20} />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-brand-primary text-sm">{item.label}</h4>
                  <p className="text-[10px] text-stone-400 mt-0.5">{item.desc}</p>
                </div>
              </div>
              <ChevronRight size={18} className="text-stone-300 group-hover:text-brand-primary transition-colors" />
            </button>
          ))}
        </div>
      </section>

      <button className="w-full bg-brand-tertiary/10 text-brand-tertiary font-bold py-5 rounded-2xl flex items-center justify-center gap-3 active:scale-95 transition-all border border-brand-tertiary/20">
        <LogOut size={20} /> Sign Out
      </button>

      <div className="text-center py-4">
        <p className="text-[10px] font-bold text-stone-300 uppercase tracking-[0.3em]">Version 2.4.10 Build B-2024</p>
      </div>
    </div>
  );
}
