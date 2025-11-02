import React from 'react';
import Spline from '@splinetool/react-spline';
import { Search, Upload, ShieldCheck } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays for depth (won't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-16 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-300/10 px-3 py-1 text-xs font-medium text-sky-200 backdrop-blur">
          <ShieldCheck size={16} /> Official University Portal
        </span>

        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Lost & Found, Reimagined for Campus Life
        </h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          Report lost or found items, get smart match suggestions, and reconnect with your belongings quickly and securely.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <button className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-3 font-medium text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400">
            <Search size={18} /> Search Items
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-medium text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20">
            <Upload size={18} /> Report Lost / Found
          </button>
        </div>

        {/* Quick stats */}
        <div className="mt-10 grid w-full max-w-3xl grid-cols-3 gap-4 text-left text-sm">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <p className="text-2xl font-semibold text-white">1,240+</p>
            <p className="mt-1 text-slate-300">Items reunited</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <p className="text-2xl font-semibold text-white">150</p>
            <p className="mt-1 text-slate-300">Active reports</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <p className="text-2xl font-semibold text-white">24/7</p>
            <p className="mt-1 text-slate-300">Smart matching</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
