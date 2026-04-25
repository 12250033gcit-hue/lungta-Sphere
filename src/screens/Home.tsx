import React from 'react';
import { ClipboardCheck, ChevronRight, FileQuestion, Bell, Compass } from 'lucide-react';

const SCHOLARSHIPS = [
  {
    id: 1,
    title: 'DAHE Undergraduate 2024',
    focus: 'Engineering & IT Focus',
    deadline: 'Ends in 3d',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 2,
    title: 'Bhutan-India Friendship',
    focus: 'General Excellence',
    deadline: 'Ends in 5d',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 3,
    title: 'TVET Skill Mastery',
    focus: 'Vocational Training',
    deadline: 'Ends in 12d',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400',
  }
];

export default function Home() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Welcome */}
      <section className="flex justify-between items-start">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold text-brand-primary tracking-tight">Kuzu zangpo la, Tashi</h2>
          <p className="text-stone-500 text-sm">Your career journey continues today.</p>
        </div>
        <div className="bg-brand-primary/5 border border-brand-primary/10 rounded-full px-3 py-1 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
          <span className="text-[10px] font-bold text-brand-primary uppercase">Updated 2 days ago</span>
        </div>
      </section>

      {/* Application Status Card */}
      <section className="bg-white border-2 border-brand-primary/10 rounded-2xl p-5 shadow-sm relative overflow-hidden group hover:border-brand-primary/30 transition-colors cursor-pointer">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-primary"></div>
        <div className="flex items-center gap-4">
          <div className="bg-brand-primary/5 p-3 rounded-xl text-brand-primary">
            <ClipboardCheck size={32} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-stone-900 leading-tight">Your RUB Registration</h3>
            <p className="text-brand-secondary font-semibold text-sm">Status: Under Review</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-brand-outline/20 flex justify-between items-center">
          <span className="text-xs text-stone-500">Check details for required documents</span>
          <button className="text-brand-primary font-bold text-sm flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
            View Info <ChevronRight size={16} />
          </button>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="grid grid-cols-2 gap-4">
        <div className="bg-white border border-brand-outline/30 rounded-2xl p-5 flex flex-col justify-between aspect-square shadow-sm hover:bg-brand-surface transition-colors cursor-pointer group">
          <div className="bg-brand-secondary/10 w-fit p-3 rounded-xl text-brand-secondary">
            <FileQuestion size={24} />
          </div>
          <div>
            <h4 className="text-lg font-bold leading-tight">Career Quiz</h4>
            <p className="text-xs text-stone-500 mt-1">Find your path</p>
          </div>
        </div>
        <div className="bg-white border border-brand-outline/30 rounded-2xl p-5 flex flex-col justify-between aspect-square shadow-sm hover:bg-brand-surface transition-colors cursor-pointer group">
          <div className="bg-brand-primary/10 w-fit p-3 rounded-xl text-brand-primary">
            <Bell size={24} />
          </div>
          <div>
            <h4 className="text-lg font-bold leading-tight">Notifications</h4>
            <p className="text-xs text-stone-500 mt-1">3 New Updates</p>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-stone-900">Scholarships</h3>
          <button className="text-brand-tertiary font-bold text-sm">See All</button>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar -mx-5 px-5 pb-2 snap-x">
          {SCHOLARSHIPS.map((item) => (
            <div key={item.id} className="min-w-[280px] snap-start bg-white border border-brand-outline/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-32 relative">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute top-3 right-3 bg-red-100 text-red-700 px-2 py-1 rounded-lg font-bold text-[10px] uppercase border border-red-200">
                  {item.deadline}
                </div>
              </div>
              <div className="p-4 space-y-1">
                <h5 className="font-bold text-brand-primary line-clamp-1">{item.title}</h5>
                <p className="text-xs text-stone-500">{item.focus}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Career Explorer CTA */}
      <section className="bg-brand-primary p-6 rounded-2xl text-white flex items-center justify-between shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="space-y-1 relative z-10">
          <h3 className="text-xl font-bold">Explore Careers</h3>
          <p className="text-xs text-brand-primary-container opacity-80">Find industries hiring in Bhutan</p>
        </div>
        <button className="bg-white text-brand-primary px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 active:scale-95 transition-all shadow-sm relative z-10">
          <Compass size={18} /> Browse
        </button>
      </section>
    </div>
  );
}
