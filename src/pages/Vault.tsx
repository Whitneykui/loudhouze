import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Radio, LayoutGrid, Ticket, Compass, User, Lock, Key, Loader2, CheckCircle2 } from 'lucide-react';

export default function Vault() {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSync = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);

      setTimeout(() => {
        navigate('/tickets');
      }, 1500);
    }, 2000);
  };

  return (
    <div className="bg-background text-on-background selection:bg-primary selection:text-black min-h-screen">
      {/* Main Content: Vault */}
      <main className="pt-32 pb-32 px-8 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[80vh]">
        <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-surface-container-low mb-8 relative">
                <div className="absolute inset-0 rounded-full border border-[#c3f400]/30 animate-ping opacity-20"></div>
                <Lock className="w-10 h-10 text-[#c3f400]" strokeWidth={1} />
            </div>
          <h2 className="text-5xl md:text-7xl font-light tracking-[0.15em] font-headline uppercase leading-tight text-white mb-6">RESTRICTED<br/>ACCESS</h2>
          <p className="text-on-surface-variant max-w-md mx-auto text-lg font-light leading-relaxed tracking-wide">
            You have reached the payload threshold. Authenticate to sync your kinetic profile and access exclusive drops.
          </p>
        </div>

        <div className="w-full max-w-md bg-surface-container-low p-10 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c3f400] to-transparent opacity-50"></div>
             
             {!isProcessing && !isSuccess ? (
               <form onSubmit={handleSync}>
                 <div className="space-y-6">
                    <div>
                        <label className="block text-[#c3f400] font-headline text-[10px] font-medium tracking-[0.2em] uppercase mb-3 text-center">IDENTITY CODE // EMAIL</label>
                        <input required type="text" className="w-full bg-background border-b-2 border-outline-variant/30 text-white p-4 font-headline font-light text-center tracking-[0.1em] focus:border-[#c3f400] outline-none transition-colors" placeholder="ENTER ALIAS OR EMAIL" />
                    </div>
                    <div>
                         <label className="block text-[#c3f400] font-headline text-[10px] font-medium tracking-[0.2em] uppercase mb-3 text-center mt-8">DECRYPTION KEY</label>
                        <input required type="password" className="w-full bg-background border-b-2 border-outline-variant/30 text-white p-4 text-center tracking-[0.3em] font-headline font-light focus:border-[#c3f400] outline-none transition-colors" placeholder="••••••••" />
                    </div>
                 </div>

                 <button type="submit" className="w-full mt-12 bg-primary text-black font-headline font-medium uppercase tracking-[0.2em] text-xs py-5 flex items-center justify-center gap-3 hover:bg-[#d4ff1a] active:scale-[0.98] transition-all cursor-pointer">
                     <Key className="w-4 h-4" /> INITIATE SYNC
                 </button>
               </form>
             ) : isProcessing ? (
               <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 rounded-full border border-[#c3f400]/30 animate-ping opacity-20"></div>
                    <Loader2 className="w-12 h-12 text-[#c3f400] animate-spin" strokeWidth={1} />
                  </div>
                  <h4 className="text-sm font-headline tracking-[0.15em] text-[#c3f400] mb-2 uppercase">SYNCING KINETIC PROFILE</h4>
                  <p className="text-on-surface-variant text-xs font-light px-4">Establishing secured connection to The Mainframe...</p>
               </div>
             ) : (
               <div className="py-12 flex flex-col items-center justify-center text-center">
                  <CheckCircle2 className="w-16 h-16 text-[#c3f400] mb-6" strokeWidth={1} />
                  <h4 className="text-sm font-headline tracking-[0.15em] text-white mb-2 uppercase">SYNC COMPLETE</h4>
                  <p className="text-on-surface-variant text-xs font-light px-4">Profile authorized. Redirecting to access protocols...</p>
               </div>
             )}
        </div>
      </main>
    </div>
  );
}
