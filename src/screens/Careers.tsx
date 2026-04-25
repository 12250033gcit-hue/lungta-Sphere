import React from 'react';
import { Search, Stethoscope, Code, GraduationCap, Mountain, HardHat, Sprout, CloudDownload, Brain, Search as SearchIcon } from 'lucide-react';
import { cn } from '../lib/utils';

const CAREERS = [
  {
    id: 1,
    title: 'Nurse',
    sector: 'Health & Medical',
    stream: 'Science Stream',
    tags: ['Government', 'High Demand'],
    icon: Stethoscope,
  },
  {
    id: 2,
    title: 'Web Developer',
    sector: 'Information Tech',
    stream: 'Any Stream',
    tags: ['Private Sector', 'Remote Possible'],
    icon: Code,
  },
  {
    id: 3,
    title: 'Primary Teacher',
    sector: 'Education',
    stream: 'Arts / Science / Commerce',
    tags: ['Government'],
    icon: GraduationCap,
  },
  {
    id: 4,
    title: 'Tour Guide',
    sector: 'Tourism',
    stream: 'Language Proficiency',
    tags: ['Private Sector', 'Freelance'],
    icon: Mountain,
  },
  {
    id: 5,
    title: 'Civil Engineer',
    sector: 'Gov / Infrastructure',
    stream: 'Science (Math)',
    tags: ['Government'],
    icon: HardHat,
  },
  {
    id: 6,
    title: 'Agronomist',
    sector: 'Agriculture',
    stream: 'Science',
    tags: ['RNR Sector'],
    icon: Sprout,
  }
];

export default function Careers() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Search & Filters */}
      <section className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="search" className="text-sm font-bold text-stone-900 ml-1">Search Career Paths</label>
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-brand-primary transition-colors" size={18} />
            <input 
              id="search"
              type="text" 
              placeholder="e.g. Nurse, Web Developer, Teacher"
              className="w-full h-12 pl-12 pr-4 bg-white border-2 border-brand-outline/20 rounded-xl focus:border-brand-primary focus:ring-0 outline-none transition-all shadow-sm text-sm"
            />
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <h3 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2 px-1">Sector</h3>
            <div className="flex flex-wrap gap-2">
              <button className="h-8 px-4 rounded-full bg-brand-gold/10 text-brand-secondary font-bold text-xs border border-brand-gold/20">All</button>
              {['Health', 'IT', 'Gov', 'Tourism'].map(s => (
                <button key={s} className="h-8 px-4 rounded-full bg-white border-2 border-brand-outline/20 text-stone-500 font-bold text-xs hover:bg-brand-outline/10 transition-colors">{s}</button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2 px-1">Level</h3>
            <div className="flex gap-2">
              <button className="h-8 px-5 rounded-full bg-white border-2 border-brand-outline/20 text-stone-500 font-bold text-xs">Class 10</button>
              <button className="h-8 px-5 rounded-full bg-white border-2 border-brand-outline/20 text-stone-500 font-bold text-xs">Class 12</button>
            </div>
          </div>
        </div>
      </section>

      {/* Career Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CAREERS.map((career) => {
          const Icon = career.icon;
          return (
            <div key={career.id} className="bg-white border border-brand-outline/30 rounded-2xl p-5 shadow-sm space-y-4 hover:border-brand-primary transition-all cursor-pointer group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/5 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
                  <Icon size={28} />
                </div>
                <div className="space-y-0.5">
                  <h2 className="text-xl font-bold text-brand-primary tracking-tight">{career.title}</h2>
                  <p className="text-xs text-stone-500 font-medium">{career.sector}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-stone-600">
                  <Brain size={16} className="text-stone-400" />
                  <span className="text-sm font-medium">{career.stream}</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-3 border-t border-brand-outline/10">
                  {career.tags.map(tag => (
                    <span key={tag} className={cn(
                      "h-7 px-3 rounded-full text-[10px] font-bold uppercase flex items-center",
                      tag === 'Government' ? "bg-brand-gold/10 text-brand-secondary" : "bg-brand-primary/10 text-brand-primary"
                    )}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Featured Section */}
      <section className="space-y-4 mt-4">
        <h2 className="text-xl font-bold text-brand-primary">Featured Scholarships</h2>
        <div className="flex flex-col gap-4">
          <div className="relative overflow-hidden rounded-2xl h-64 group bg-stone-900 shadow-xl border border-brand-outline/20">
            <img 
              src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600" 
              alt="Royal Excellence Award" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-stone-900/95 via-stone-900/40 to-transparent">
              <span className="bg-brand-gold text-white font-bold text-[10px] uppercase px-3 py-1.5 rounded-full w-fit mb-3 tracking-wider shadow-lg">
                Closes in 5 Days
              </span>
              <h3 className="text-2xl font-bold text-white mb-1 shadow-black/20">Royal Excellence Award</h3>
              <p className="text-white/80 text-sm font-medium">Fully funded international degree for top Class 12 graduates.</p>
            </div>
          </div>

          <div className="bg-brand-primary rounded-2xl p-6 flex flex-col justify-center text-white shadow-xl relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 opacity-5 rotate-12">
              <CloudDownload size={140} />
            </div>
            <CloudDownload size={40} className="mb-4 text-brand-gold" />
            <h3 className="text-xl font-bold mb-1">Offline Resources</h3>
            <p className="text-sm opacity-80 mb-5 leading-relaxed">Download full career guides for viewing in remote areas without data.</p>
            <button className="bg-white text-brand-primary h-tap-target-min rounded-xl font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-md">
              <CloudDownload size={18} /> Get Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
