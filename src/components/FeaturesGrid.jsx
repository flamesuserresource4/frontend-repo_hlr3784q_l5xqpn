import React from 'react';
import { Search, Image, Bell, ShieldCheck, BarChart, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Search className="h-6 w-6 text-sky-400" />,
    title: 'Smart Search & Filters',
    desc: 'Find items by name, category, date, location, or tags with instant filtering.',
  },
  {
    icon: <Image className="h-6 w-6 text-sky-400" />,
    title: 'Photo Uploads',
    desc: 'Attach clear photos to help others identify and claim items accurately.',
  },
  {
    icon: <Bell className="h-6 w-6 text-sky-400" />,
    title: 'Real-Time Alerts',
    desc: 'Get notified when something matches your report — no need to keep checking.',
  },
  {
    icon: <Sparkles className="h-6 w-6 text-sky-400" />,
    title: 'AI-Based Matching',
    desc: 'Keyword and pattern recognition suggests likely matches automatically.',
  },
  {
    icon: <BarChart className="h-6 w-6 text-sky-400" />,
    title: 'Insights Dashboard',
    desc: 'Admins can track recovered vs. pending items and campus hotspots.',
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-sky-400" />,
    title: 'Secure Verification',
    desc: 'Claimers verify ownership with details only the real owner would know.',
  },
];

const FeaturesGrid = () => {
  return (
    <section className="relative w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Everything you need to reunite faster</h2>
          <p className="mt-3 text-slate-300">A focused toolkit designed for students, staff, and campus security.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl border border-slate-800 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-5 shadow-lg shadow-black/20 transition hover:border-sky-800/60">
              <div className="mb-3 inline-flex rounded-xl bg-sky-400/10 p-2 ring-1 ring-sky-400/20">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
