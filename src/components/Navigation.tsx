import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Radio, LayoutGrid, Ticket, Compass, User, X } from 'lucide-react';

export default function Navigation({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* TopAppBar */}
      <header className={`fixed top-0 left-0 w-full flex items-center px-8 py-6 justify-between z-50 ${location.pathname === '/' ? 'bg-[#131313]/90 backdrop-blur-[20px]' : 'bg-[#131313]/90 backdrop-blur-[20px] border-b border-[#1c1b1b]/10'}`}>
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="text-[#c3f400] hover:bg-[#c3f400]/5 transition-colors duration-300 active:opacity-70 transition-opacity"
          >
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          </button>
          <h1 className="text-xl font-regular tracking-[0.2em] text-[#c3f400] font-headline uppercase">LOUD HOUZE</h1>
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8 font-['Inter'] font-light uppercase tracking-[0.15em] text-[11px]">
            <Link to="/" className={`${location.pathname === '/' ? 'text-[#c3f400] opacity-100' : 'text-[#e5e2e1]/60 opacity-80'} hover:text-[#c3f400] hover:bg-[#c3f400]/5 transition-colors duration-300 px-2 py-1`}>ARENA</Link>
            <Link to="/engine" className={`${location.pathname === '/engine' ? 'text-[#c3f400] opacity-100' : 'text-[#e5e2e1]/60 opacity-80'} hover:text-[#c3f400] hover:bg-[#c3f400]/5 transition-colors duration-300 px-2 py-1`}>VIRTUAL ACCESS</Link>
            <Link to="/vault" className={`${location.pathname === '/vault' ? 'text-[#c3f400] opacity-100' : 'text-[#e5e2e1]/60 opacity-80'} hover:text-[#c3f400] hover:bg-[#c3f400]/5 transition-colors duration-300 px-2 py-1`}>THE VAULT</Link>
          </div>
          <button className="text-[#c3f400] hover:bg-[#c3f400]/5 transition-colors duration-300 active:opacity-70 transition-opacity">
            <Radio className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>
        {location.pathname === '/' && <div className="absolute bottom-0 left-0 bg-[#1c1b1b] h-[1px] w-full opacity-10 block"></div>}
      </header>

      {/* Full Screen Menu Overlay (Larger screens mostly or anywhere) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#131313]/95 backdrop-blur-3xl z-[100] flex flex-col pt-24 px-8 md:px-32">
           <button 
             onClick={() => setIsMenuOpen(false)} 
             className="absolute top-6 left-8 text-[#c3f400] hover:rotate-90 transition-transform duration-300"
           >
              <X className="w-8 h-8" strokeWidth={1.5} />
           </button>
           <nav className="flex flex-col gap-10 mt-16 font-headline">
             <div className="overflow-hidden">
                <Link onClick={() => setIsMenuOpen(false)} to="/" className="inline-block text-4xl md:text-7xl font-light text-white uppercase tracking-[0.1em] hover:text-[#c3f400] hover:translate-x-4 transition-all duration-300">01. Arena</Link>
             </div>
             <div className="overflow-hidden">
                <Link onClick={() => setIsMenuOpen(false)} to="/engine" className="inline-block text-4xl md:text-7xl font-light text-white uppercase tracking-[0.1em] hover:text-[#c3f400] hover:translate-x-4 transition-all duration-300">02. Events Engine</Link>
             </div>
             <div className="overflow-hidden">
                <Link onClick={() => setIsMenuOpen(false)} to="/tickets" className="inline-block text-4xl md:text-7xl font-light text-white uppercase tracking-[0.1em] hover:text-[#c3f400] hover:translate-x-4 transition-all duration-300">03. My Tickets</Link>
             </div>
             <div className="overflow-hidden">
                <Link onClick={() => setIsMenuOpen(false)} to="/vault" className="inline-block text-4xl md:text-7xl font-light text-white uppercase tracking-[0.1em] hover:text-[#c3f400] hover:translate-x-4 transition-all duration-300">04. The Vault</Link>
             </div>
           </nav>
           <div className="mt-auto pb-12 font-headline text-[10px] tracking-[0.3em] font-medium text-on-surface-variant/40">
              LOUD HOUZE ENTERTAINMENT // ACTIVE SYSTEM
           </div>
        </div>
      )}

      {/* Main Content Render */}
      {children}

      {/* BottomNavBar (Hidden on MD and up) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-6 pt-3 pb-8 bg-[#131313]/95 backdrop-blur-[24px] border-t border-[#c3f400]/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <Link to="/" className={`flex flex-col items-center justify-center transition-all duration-400 active:scale-105 ease-out pb-3 pt-2 px-4 ${location.pathname === '/' ? 'text-[#c3f400] shadow-[inset_0_-2px_0_0_#c3f400]' : 'text-[#c4c9ac] opacity-50 hover:text-[#c3f400] hover:opacity-100'}`}>
          <LayoutGrid className="w-6 h-6 mb-1" strokeWidth={1.5} />
          <span className="font-['Inter'] text-[9px] font-medium tracking-[0.12em] uppercase">ARENA</span>
        </Link>
        <Link to="/tickets" className={`flex flex-col items-center justify-center transition-all duration-400 active:scale-105 ease-out pb-3 pt-2 px-4 ${location.pathname.startsWith('/tickets') ? 'text-[#c3f400] shadow-[inset_0_-2px_0_0_#c3f400]' : 'text-[#c4c9ac] opacity-50 hover:text-[#c3f400] hover:opacity-100'}`}>
          <Ticket className="w-6 h-6 mb-1" strokeWidth={1.5} />
          <span className="font-['Inter'] text-[9px] font-medium tracking-[0.12em] uppercase">TICKETS</span>
        </Link>
        <Link to="/engine" className={`flex flex-col items-center justify-center transition-all duration-400 active:scale-105 ease-out pb-3 pt-2 px-4 ${location.pathname.startsWith('/engine') || location.pathname.startsWith('/event') ? 'text-[#c3f400] shadow-[inset_0_-2px_0_0_#c3f400]' : 'text-[#c4c9ac] opacity-50 hover:text-[#c3f400] hover:opacity-100'}`}>
          <Compass className="w-6 h-6 mb-1" strokeWidth={1.5} />
          <span className="font-['Inter'] text-[9px] font-medium tracking-[0.12em] uppercase">DISCOVER</span>
        </Link>
        <Link to="/vault" className={`flex flex-col items-center justify-center transition-all duration-400 active:scale-105 ease-out pb-3 pt-2 px-4 ${location.pathname.startsWith('/vault') ? 'text-[#c3f400] shadow-[inset_0_-2px_0_0_#c3f400]' : 'text-[#c4c9ac] opacity-50 hover:text-[#c3f400] hover:opacity-100'}`}>
          <User className="w-6 h-6 mb-1" strokeWidth={1.5} />
          <span className="font-['Inter'] text-[9px] font-medium tracking-[0.12em] uppercase">VAULT</span>
        </Link>
      </nav>
    </>
  );
}
