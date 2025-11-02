import React from 'react';
import { Mail, ShieldCheck } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="w-full bg-slate-950 pb-24 pt-6 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="col-span-2 rounded-2xl border border-slate-800 bg-gradient-to-br from-sky-500/10 via-transparent to-purple-500/10 p-8">
            <h3 className="text-2xl font-semibold">Ready to reconnect with your belongings?</h3>
            <p className="mt-2 max-w-2xl text-slate-300">
              Create a report in minutes. Upload photos, add location and details, and get notified when we find a match.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-5 py-3 font-medium text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400">
                Report an Item
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-medium text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20">
                <Mail size={18} /> Get Updates
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-white/[0.03] p-8">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
              <ShieldCheck size={16} /> Admin Access
            </div>
            <h4 className="text-lg font-semibold">Staff & Security Dashboard</h4>
            <p className="mt-1 text-sm text-slate-300">
              Verify claims, manage cases, and see analytics across departments.
            </p>
            <button className="mt-4 inline-flex items-center justify-center rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20 transition hover:bg-white/20">
              Go to Admin Panel
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
