import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Radio, LayoutGrid, Ticket, Compass, User, QrCode, X } from 'lucide-react';

export default function Tickets() {
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="bg-background text-on-background selection:bg-primary selection:text-black min-h-screen">
      {/* Main Content: Tickets */}
      <main className="pt-32 pb-32 px-8 max-w-7xl mx-auto">
        <section className="mb-16 border-l-[1px] border-primary pl-8 py-2">
          <h2 className="text-5xl md:text-7xl font-light tracking-[0.15em] font-headline uppercase leading-tight text-white/90">MY TICKETS</h2>
          <div className="flex flex-col md:flex-row md:items-center gap-6 mt-6">
            <p className="text-on-surface-variant max-w-xl text-lg font-light leading-relaxed tracking-wide">
              Your secured access parameters. Present QR payload at the gate for kinetic entry.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Active Ticket */}
          <div className="bg-surface-container-low p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <QrCode className="w-32 h-32" strokeWidth={1} />
            </div>
            <div className="relative z-10">
              <span className="bg-primary text-black text-[9px] font-medium font-headline px-3 py-1 tracking-[0.15em] mb-4 inline-block">ACTIVE RUN</span>
              <h3 className="text-3xl font-light font-headline tracking-[0.1em] leading-snug text-white mb-2">KINETIC FLUX</h3>
              <p className="text-on-surface-variant text-sm font-light tracking-[0.1em] mb-8">STAGE 01 // 22:00 EAT</p>
              
              <div className="border-t border-outline-variant/20 pt-6 mt-6 flex justify-between items-end">
                <div>
                  <p className="text-[#c3f400] font-headline text-[10px] font-medium tracking-[0.2em] uppercase mb-1">ACCESS LEVEL</p>
                  <p className="text-xl font-light tracking-widest text-white uppercase">V.I.P CORE</p>
                </div>
                <button onClick={() => setShowQR(true)} className="flex items-center gap-2 text-primary font-headline text-xs font-medium tracking-[0.15em] hover:text-[#d4ff1a] transition-colors">
                  VIEW QR <QrCode className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>

          {/* Upcoming Ticket */}
          <div className="bg-[#131313] border border-outline-variant/10 p-8 relative overflow-hidden group hover:bg-surface-container-low transition-colors duration-300">
            <div className="relative z-10">
              <span className="bg-transparent border border-outline-variant/30 text-on-surface-variant text-[9px] font-medium font-headline px-3 py-1 tracking-[0.15em] mb-4 inline-block">UPCOMING</span>
              <h3 className="text-3xl font-light font-headline tracking-[0.1em] leading-snug text-white/70 mb-2">AMPLIFY 25</h3>
              <p className="text-on-surface-variant text-sm font-light tracking-[0.1em] mb-8">MAIN HUB // NEXT FRI</p>
              
              <div className="border-t border-outline-variant/10 pt-6 mt-6 flex justify-between items-end">
                <div>
                  <p className="text-on-surface-variant font-headline text-[10px] font-medium tracking-[0.2em] uppercase mb-1">ACCESS LEVEL</p>
                  <p className="text-lg font-light tracking-widest text-white/70 uppercase">GEN ADMIT</p>
                </div>
                <Link to="/event/amplify25" className="flex items-center gap-2 text-on-surface-variant hover:text-white font-headline text-xs font-medium tracking-[0.15em] transition-colors">
                  DETAILS <LayoutGrid className="w-4 h-4" strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* QR Code Modal Overlay */}
        {showQR && (
          <div className="fixed inset-0 bg-[#131313]/95 backdrop-blur-xl z-[100] flex flex-col items-center justify-center p-8">
             <button 
               onClick={() => setShowQR(false)} 
               className="absolute top-6 right-8 text-[#c3f400] hover:rotate-90 transition-transform duration-300"
             >
                <X className="w-8 h-8" strokeWidth={1.5} />
             </button>
             <div className="bg-surface-container-low p-8 border border-primary/20 max-w-sm w-full flex flex-col items-center">
                <h3 className="text-2xl font-light font-headline tracking-[0.1em] text-white mb-2 uppercase text-center">KINETIC FLUX</h3>
                <p className="text-primary font-headline text-[10px] font-medium tracking-[0.2em] uppercase mb-8">V.I.P CORE ACCESS</p>
                
                <div className="w-48 h-48 bg-white p-4 rounded-sm flex items-center justify-center mb-8 relative">
                   {/* Scanning animation lines */}
                   <div className="absolute top-0 left-0 w-full h-[2px] bg-primary animate-[scan_2s_ease-in-out_infinite] shadow-[0_0_8px_#c3f400]"></div>
                   
                   <QrCode className="w-full h-full text-black" strokeWidth={1} />
                </div>
                
                <div className="text-center">
                   <p className="text-on-surface-variant font-headline text-[9px] tracking-[0.2em] mb-1">PAYLOAD ID</p>
                   <p className="font-mono text-sm tracking-widest text-white/80">KX-7790-21V</p>
                </div>
             </div>
          </div>
        )}
      </main>
    </div>
  );
}
