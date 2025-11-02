import React from 'react';
import { Upload, MapPin, CheckCircle2, Shield } from 'lucide-react';

const steps = [
  {
    icon: <Upload className="h-6 w-6 text-sky-500" />,
    title: 'Report Lost or Found',
    desc: 'Post details like category, description, date, and where it was lost/found.',
  },
  {
    icon: <MapPin className="h-6 w-6 text-sky-500" />,
    title: 'Smart Matching',
    desc: 'We compare keywords, categories, and locations to suggest likely matches.',
  },
  {
    icon: <CheckCircle2 className="h-6 w-6 text-sky-500" />,
    title: 'Connect & Verify',
    desc: 'Confirm ownership via prompts and coordinate pickup with campus staff.',
  },
  {
    icon: <Shield className="h-6 w-6 text-sky-500" />,
    title: 'Close the Case',
    desc: 'Admins mark items as recovered and keep records for campus insights.',
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">How it works</h2>
          <p className="mt-3 text-slate-300">From report to recovery in four simple steps.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-slate-800 bg-white/[0.03] p-5">
              <div className="mb-3 inline-flex rounded-xl bg-sky-500/10 p-2 ring-1 ring-sky-500/20">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
