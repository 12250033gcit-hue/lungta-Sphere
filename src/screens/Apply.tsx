import React from 'react';
import { CheckSquare, ArrowLeftRight, BadgeCheck, MapPin, Info, HelpCircle, Lock } from 'lucide-react';
import { cn } from '../lib/utils';

const COLLEGES = [
  {
    id: 1,
    name: 'Sherubtse College',
    location: 'Kanglung, Trashigang',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=400',
    tag: 'Premier Institute',
    verified: true,
    courses: ['B.A. Economics', 'B.Sc. Computer Science', 'B.A. Dzongkha'],
    extraCourses: 12,
  },
  {
    id: 2,
    name: 'CST',
    location: 'Phuentsholing, Chukha',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=400',
    tag: 'Engineering Hub',
    verified: true,
    courses: ['Civil Engineering', 'IT Engineering', 'Architecture'],
  },
  {
    id: 3,
    name: 'GCIT',
    location: 'Gyalpozhing, Mongar',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=400',
    tag: 'Tech Specialist',
    verified: true,
    courses: ['Software Engineering', 'Blockchain Dev', 'Data Science'],
  },
  {
    id: 4,
    name: 'Gedu College',
    location: 'Gedu, Chukha',
    image: 'https://images.unsplash.com/photo-1498243639359-f7c895171f5f?auto=format&fit=crop&q=80&w=400',
    tag: '',
    verified: false,
    insufficient: true,
    courses: ['B.Com', 'B.B.A'],
  }
];

export default function Apply() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      {/* Header Info */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-brand-primary tracking-tight">Royal University of Bhutan</h2>
        <p className="text-stone-500 text-sm leading-relaxed max-w-xl">
          Discover higher education opportunities across the kingdom. Filter by eligibility and compare campuses to find your ideal path.
        </p>
      </div>

      {/* Filter Section */}
      <section className="bg-white border border-brand-outline/30 rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-5 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary">
            <CheckSquare size={24} />
          </div>
          <div className="space-y-0.5">
            <h3 className="font-bold text-stone-900">Eligibility Check</h3>
            <p className="text-xs text-stone-500">View courses matching your Class XII marks</p>
          </div>
        </div>
        <div className="flex items-center">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-14 h-8 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-brand-primary"></div>
            <span className="ml-3 text-sm font-bold text-brand-primary">Show qualified only</span>
          </label>
        </div>
      </section>

      {/* College List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {COLLEGES.map((college) => (
          <article 
            key={college.id} 
            className={cn(
              "bg-white border rounded-2xl overflow-hidden shadow-sm flex flex-col group transition-all",
              college.insufficient ? "opacity-75 grayscale hover:grayscale-0 hover:opacity-100 border-brand-outline/20" : "hover:border-brand-primary border-brand-outline/30"
            )}
          >
            {/* Image & Overlay */}
            <div className="relative h-44 overflow-hidden">
              <img src={college.image} alt={college.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 right-4">
                <button className="bg-white/95 backdrop-blur-sm p-2.5 rounded-xl shadow-md border border-brand-outline/20 flex items-center gap-2 group/btn hover:bg-brand-primary hover:text-white transition-all active:scale-95">
                  <ArrowLeftRight size={18} />
                  <span className="text-xs font-bold px-0.5">Compare</span>
                </button>
              </div>
              {college.tag && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 pb-3">
                  <span className="inline-block px-3 py-1 bg-brand-gold text-white font-bold text-[10px] uppercase rounded-full tracking-wider shadow-sm">
                    {college.tag}
                  </span>
                </div>
              )}
              {college.insufficient && (
                <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] flex items-center justify-center p-4">
                  <div className="bg-brand-tertiary text-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg scale-105 border border-white/20">
                    <Lock size={16} />
                    Marks Insufficient
                  </div>
                </div>
              )}
            </div>

            {/* Details */}
            <div className="p-5 flex-grow space-y-4">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-brand-primary tracking-tight">{college.name}</h3>
                  {college.verified && <BadgeCheck size={20} className="text-brand-primary fill-brand-primary/10" />}
                </div>
                <div className="flex items-center gap-1.5 text-stone-500 mt-1">
                  <MapPin size={14} />
                  <span className="text-xs font-medium">{college.location}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {college.courses.map(course => (
                  <span key={course} className="px-3 py-1.5 bg-brand-surface rounded-lg border border-brand-outline/20 text-[11px] font-semibold text-stone-700">
                    {course}
                  </span>
                ))}
                {college.extraCourses && (
                  <span className="px-3 py-1.5 bg-brand-primary/5 rounded-lg border border-brand-primary/10 text-[11px] font-bold text-brand-primary uppercase">
                    +{college.extraCourses} more
                  </span>
                )}
              </div>
            </div>

            {/* Action Footer */}
            <div className="p-4 bg-stone-50/50 border-t border-brand-outline/10 mt-auto">
              {college.insufficient ? (
                <button className="w-full border-2 border-brand-primary text-brand-primary font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-brand-primary hover:text-white transition-all active:scale-95 shadow-sm">
                  <HelpCircle size={20} />
                  Eligibility Criteria
                </button>
              ) : (
                <button className="w-full bg-brand-primary text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-[#002f1a] transition-all active:scale-95 shadow-md">
                  <Info size={20} />
                  View Details
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
