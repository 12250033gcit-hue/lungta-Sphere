import React from 'react';
import { 
  TrendingUp, 
  Download, 
  Languages, 
  Variable, 
  History, 
  FlaskConical, 
  Lightbulb, 
  Calendar,
  School,
  GraduationCap
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis,
  Cell
} from 'recharts';

const PROGRESS_DATA = [
  { name: 'Term 1', score: 72 },
  { name: 'Term 2', score: 65 },
  { name: 'Term 3', score: 74 },
  { name: 'Term 4', score: 82 },
  { name: 'Final', score: 85 },
];

const STRENGTH_DATA = [
  { subject: 'MATH', A: 90, fullMark: 100 },
  { subject: 'DZONGKHA', A: 84, fullMark: 100 },
  { subject: 'SCIENCE', A: 76, fullMark: 100 },
  { subject: 'ENGLISH', A: 88, fullMark: 100 },
  { subject: 'ICT', A: 92, fullMark: 100 },
];

const MARKS = [
  { subject: 'English', teacher: 'Mr. Sonam', score: 88, grade: 'A', icon: Languages },
  { subject: 'Mathematics', teacher: 'Ms. Pema', score: 92, grade: 'A+', icon: Variable },
  { subject: 'Dzongkha', teacher: 'Lopen Karma', score: 84, grade: 'A', icon: History },
  { subject: 'Biology', teacher: 'Mr. Dorji', score: 76, grade: 'B+', icon: FlaskConical },
];

export default function MyMarks() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      <div className="space-y-1">
        <h2 className="text-3xl font-bold text-brand-primary tracking-tight">Academic Performance</h2>
        <p className="text-stone-500 text-sm">Latest Term: Academic Year 2024</p>
      </div>

      {/* Bento Grid Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Progress Trend */}
        <div className="md:col-span-2 bg-white border border-brand-outline/30 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-brand-primary flex items-center gap-2">
              <TrendingUp size={18} /> Progress Trend
            </h3>
            <span className="bg-brand-gold/10 text-brand-secondary font-bold text-[10px] px-3 py-1.5 rounded-full uppercase tracking-wider border border-brand-gold/10">
              +4.2% from last term
            </span>
          </div>
          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={PROGRESS_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 600, fill: '#888' }} 
                />
                <YAxis hide />
                <Tooltip 
                  cursor={{ fill: '#fbfbfb' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="score" radius={[8, 8, 0, 0]}>
                  {PROGRESS_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === PROGRESS_DATA.length - 1 ? '#004326' : '#91d2a7'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Class Rank */}
        <div className="bg-white border border-brand-outline/30 rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center text-center">
          <div className="w-28 h-28 rounded-full border-[6px] border-brand-gold flex flex-col items-center justify-center mb-5 shadow-inner">
            <span className="text-4xl font-extrabold text-brand-primary">7<span className="text-sm font-bold align-super ml-0.5">th</span></span>
          </div>
          <h3 className="text-xl font-bold text-brand-primary tracking-tight">Class Rank</h3>
          <p className="text-sm text-stone-500 font-medium mt-1">Out of 42 Students</p>
          <div className="mt-6 px-5 py-2.5 bg-brand-gold/10 rounded-xl w-full border border-brand-gold/10">
            <span className="text-[10px] font-extrabold text-brand-secondary uppercase tracking-widest leading-none">Top 15% of Class</span>
          </div>
        </div>
      </div>

      {/* Radar Strength & Readiness */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Subject Strength Radar */}
        <div className="bg-white border border-brand-outline/30 rounded-2xl p-6 shadow-sm flex flex-col">
          <h3 className="font-bold text-brand-primary text-sm mb-2 uppercase tracking-wider">Subject Strength</h3>
          <div className="h-64 w-full flex items-center justify-center -my-2 scale-110">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={STRENGTH_DATA} margin={{ top: 0, right: 30, bottom: 0, left: 30 }}>
                <PolarGrid stroke="#e5e5e5" />
                <PolarAngleAxis dataKey="subject" tick={{ fontSize: 9, fontWeight: 800, fill: '#004326' }} />
                <Radar
                  name="Score"
                  dataKey="A"
                  stroke="#8e4e00"
                  fill="#D4A017"
                  fillOpacity={0.4}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-center text-stone-400 font-bold text-[10px] uppercase tracking-widest mt-auto bg-stone-50 py-2 rounded-lg border border-brand-outline/10">
            High aptitude in Logic & Languages
          </p>
        </div>

        {/* Career Readiness */}
        <div className="bg-brand-primary-container text-white rounded-2xl p-7 shadow-lg relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
            <GraduationCap size={200} />
          </div>
          
          <div className="relative z-10 space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">Career Readiness</h3>
            <p className="text-sm text-stone-100 opacity-90 leading-relaxed max-w-[90%]">
              You are <span className="font-bold">85% ready</span> for Nursing at KGUMSB. Improve your Biology score by 5% to reach the top tier.
            </p>
          </div>

          <div className="relative z-10 mt-8 space-y-3">
            <div className="w-full h-4 bg-white/20 rounded-full overflow-hidden border border-white/10">
              <div 
                className="h-full bg-brand-gold rounded-full shadow-[0_0_10px_rgba(212,160,23,0.5)]" 
                style={{ width: '85%' }} 
              />
            </div>
            <div className="flex justify-between font-extrabold text-[10px] uppercase tracking-[0.2em]">
              <span className="opacity-70">Current: 85%</span>
              <span className="text-brand-gold">Target: 90%</span>
            </div>
          </div>

          <button className="relative z-10 mt-8 bg-white text-brand-primary px-6 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-all shadow-xl">
             <School size={18} /> View Requirements
          </button>
        </div>
      </div>

      {/* Subject-wise Marks List */}
      <section className="bg-white border border-brand-outline/30 rounded-2xl overflow-hidden shadow-sm">
        <div className="p-5 border-b border-brand-outline/20 bg-brand-surface/30 flex justify-between items-center">
          <h3 className="font-bold text-brand-primary tracking-tight">Subject-wise Marks</h3>
          <button className="text-brand-secondary font-bold text-[10px] uppercase flex items-center gap-1.5 hover:bg-brand-gold/10 px-3 py-1.5 rounded-lg transition-colors">
            <Download size={14} /> Result PDF
          </button>
        </div>
        <div className="divide-y divide-brand-outline/10">
          {MARKS.map((mark) => (
            <div key={mark.subject} className="p-5 flex items-center justify-between hover:bg-brand-bg transition-colors group cursor-default">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/5 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                  <mark.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-primary text-base leading-none mb-1">{mark.subject}</h4>
                  <p className="text-xs text-stone-500 font-medium">Teacher: {mark.teacher}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-brand-primary tracking-tighter leading-none mb-1">
                  {mark.score}<span className="text-xs font-bold text-stone-300 ml-0.5">/100</span>
                </div>
                <p className={cn(
                  "text-[10px] font-extrabold uppercase tracking-widest",
                  mark.score >= 80 ? "text-brand-gold" : "text-brand-secondary"
                )}>Grade: {mark.grade}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Areas */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold text-brand-primary tracking-tight">Recommended Focus Areas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-brand-surface/40 border-2 border-dashed border-brand-outline/30 p-5 rounded-2xl flex gap-5 hover:border-brand-gold transition-colors">
            <div className="w-10 h-10 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold shrink-0">
              <Lightbulb size={24} />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-brand-primary text-sm">Boost Biology</h4>
              <p className="text-xs text-stone-500 leading-relaxed font-medium">
                Focus on Anatomy and Physiology chapters to strengthen your application for Nursing.
              </p>
            </div>
          </div>
          <div className="bg-brand-surface/40 border-2 border-dashed border-brand-outline/30 p-5 rounded-2xl flex gap-5 hover:border-brand-gold transition-colors">
             <div className="w-10 h-10 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold shrink-0">
              <Calendar size={24} />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-brand-primary text-sm">Upcoming Mock Test</h4>
              <p className="text-xs text-stone-500 leading-relaxed font-medium">
                A Career Readiness exam is scheduled for October 15th. Preparation resources are now available.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
