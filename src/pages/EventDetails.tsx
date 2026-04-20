import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Share2, Clock, MapPin, ArrowLeft, Loader2, CheckCircle2 } from 'lucide-react';

export default function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ticketType, setTicketType] = useState<'GA' | 'VIP'>('GA');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const price = ticketType === 'GA' ? 2000 : 5000;

  const handleMpesaPay = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) return;
    
    setIsProcessing(true);
    // Simulate M-Pesa push and processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      
      // Auto-redirect to tickets after success
      setTimeout(() => {
        navigate('/tickets');
      }, 2000);
    }, 3000);
  };

  return (
    <div className="bg-background text-on-background selection:bg-primary selection:text-black min-h-screen pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-headline text-[10px] tracking-[0.2em] mb-8 uppercase">
          <ArrowLeft className="w-4 h-4" /> BACK TO FREQ
        </button>

        {/* Hero Image */}
        <div className="w-full h-[40vh] md:h-[50vh] relative mb-12">
            <img className="w-full h-full object-cover grayscale" alt="vibrant neon lit electronic dance music concert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0XZJmEa36PE8vyLkYTAiIG8PR86gbL0fLUK0HuKtVHDojEopoJAKNZW_ZyFL9yxAfCXhhx5U6NywkIEUFDEN_LTVHI21WAeNUvKj9PiBCwV9EDhLQ-p_1ugrF6l6jhpja690-uVfy1LLMjj6cMmD0zzZT1Q-zPY4Qbj30Ex6zfkpSubAE9O2_cM5z6yt8LaAmkYYJKaQNnw0Jd-OitA-3bkihNhxN9VzgozkXWzCx3lVEIjDvd5i7Y_bFIaMwTNAhZ7cnxYEx0WA" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
            <div className="absolute top-4 right-4 flex gap-3">
               <button className="bg-background/80 backdrop-blur-md p-3 text-white hover:text-primary transition-colors">
                  <Share2 className="w-5 h-5" strokeWidth={1.5} />
               </button>
            </div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <span className="bg-tertiary text-black text-[9px] font-medium font-headline px-3 py-1 tracking-[0.15em] mb-4 inline-block">LIVE NOW</span>
              <h2 className="text-5xl md:text-7xl font-light font-headline tracking-[0.1em] leading-none mb-4 text-white">KINETIC FLUX</h2>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Info Col */}
            <div className="col-span-1 md:col-span-2 space-y-12">
                <div className="flex flex-col md:flex-row gap-8 py-6 border-y border-outline-variant/10">
                    <div className="flex items-center gap-4">
                        <Clock className="w-6 h-6 text-primary" strokeWidth={1} />
                        <div>
                            <p className="text-on-surface-variant font-headline text-[10px] tracking-[0.2em] mb-1">TIME / DATE</p>
                            <p className="font-light tracking-widest text-white uppercase text-sm">SAT 24 JUN, 22:00 EAT</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <MapPin className="w-6 h-6 text-primary" strokeWidth={1} />
                        <div>
                            <p className="text-on-surface-variant font-headline text-[10px] tracking-[0.2em] mb-1">LOCATION</p>
                            <p className="font-light tracking-widest text-white uppercase text-sm">STAGE 01, THE ALCHEMIST</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="text-xl font-light font-headline tracking-[0.1em] text-primary mb-4 uppercase">TRANSMISSION DATA</h4>
                    <p className="text-on-surface-variant font-light leading-relaxed text-sm">
                        Total sensory overload. Kinetic Flux brings together Nairobi's hardest hitting industrial techno and spatial ambient experiences. Expect brutalist stage architecture, 360-degree laser mapping, and a carefully curated lineup of uncompromising sound architects. 
                        Dress code is strictly black, ready for sweat.
                    </p>
                </div>

                <div>
                    <h4 className="text-xl font-light font-headline tracking-[0.1em] text-primary mb-4 uppercase">SOUND ARCHITECTS</h4>
                    <div className="flex flex-wrap gap-3">
                        <span className="border border-outline-variant/20 px-4 py-2 font-headline text-[10px] tracking-[0.2em] text-white">SURGE</span>
                        <span className="border border-outline-variant/20 px-4 py-2 font-headline text-[10px] tracking-[0.2em] text-white">X N R Q</span>
                        <span className="border border-outline-variant/20 px-4 py-2 font-headline text-[10px] tracking-[0.2em] text-white">NULL VECTOR</span>
                    </div>
                </div>
            </div>

            {/* Checkout Col */}
            <div className="col-span-1 border border-outline-variant/10 bg-surface-container-low p-6 md:p-8 h-fit">
                <h4 className="text-lg font-light font-headline tracking-[0.15em] text-white mb-6 uppercase border-b border-outline-variant/10 pb-4">SECURE ACCESS</h4>
                
                {(!isProcessing && !isSuccess) ? (
                  <form onSubmit={handleMpesaPay}>
                    <div className="space-y-4 mb-8">
                        <label className={`block border p-4 cursor-pointer transition-colors ${ticketType === 'GA' ? 'border-primary bg-primary/5' : 'border-outline-variant/20 hover:border-primary/50'}`}>
                            <input type="radio" name="ticket" value="GA" checked={ticketType === 'GA'} onChange={() => setTicketType('GA')} className="hidden" />
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-headline tracking-[0.15em] text-xs text-white">GENERAL ADMIT</span>
                                <span className="font-headline tracking-[0.1em] text-primary text-xs">KES 2,000</span>
                            </div>
                            <p className="text-on-surface-variant text-[10px] font-light">Access to main arena and standard bars.</p>
                        </label>
                        
                        <label className={`block border p-4 cursor-pointer transition-colors ${ticketType === 'VIP' ? 'border-primary bg-primary/5' : 'border-outline-variant/20 hover:border-primary/50'}`}>
                            <input type="radio" name="ticket" value="VIP" checked={ticketType === 'VIP'} onChange={() => setTicketType('VIP')} className="hidden" />
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-headline tracking-[0.15em] text-xs text-white">V.I.P CORE</span>
                                <span className="font-headline tracking-[0.1em] text-primary text-xs">KES 5,000</span>
                            </div>
                            <p className="text-on-surface-variant text-[10px] font-light">Backstage access, exclusive lounge & kinetic merch.</p>
                        </label>
                    </div>

                    <div className="mb-8">
                        <label className="block text-on-surface-variant font-headline text-[10px] font-medium tracking-[0.2em] uppercase mb-3">M-PESA NUMBER</label>
                        <input 
                          type="tel" 
                          required
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="w-full bg-background border border-outline-variant/30 text-white p-4 font-headline font-light tracking-[0.1em] focus:border-primary outline-none transition-colors" 
                          placeholder="e.g. 0712 345 678" 
                        />
                    </div>

                    <div className="flex justify-between items-center mb-6 pt-6 border-t border-outline-variant/10">
                        <span className="font-headline text-[10px] tracking-[0.2em] text-on-surface-variant uppercase">TOTAL PAYLOAD</span>
                        <span className="font-headline tracking-[0.1em] text-white text-lg">KES {price.toLocaleString()}</span>
                    </div>

                    <button type="submit" className="w-full bg-primary text-black font-headline font-medium uppercase tracking-[0.2em] text-xs py-5 hover:bg-[#d4ff1a] active:scale-[0.98] transition-all">
                        PAY WITH M-PESA
                    </button>
                  </form>
                ) : isProcessing ? (
                  <div className="py-12 flex flex-col items-center justify-center text-center">
                      <div className="relative mb-6">
                        <div className="absolute inset-0 rounded-full border border-primary/30 animate-ping opacity-20"></div>
                        <Loader2 className="w-12 h-12 text-primary animate-spin" strokeWidth={1} />
                      </div>
                      <h4 className="text-sm font-headline tracking-[0.15em] text-primary mb-2 uppercase">AWAITING M-PESA</h4>
                      <p className="text-on-surface-variant text-xs font-light px-4">
                        Please check your phone and enter your M-Pesa PIN to authorize the transaction.
                      </p>
                  </div>
                ) : (
                  <div className="py-12 flex flex-col items-center justify-center text-center">
                      <CheckCircle2 className="w-16 h-16 text-primary mb-6" strokeWidth={1} />
                      <h4 className="text-sm font-headline tracking-[0.15em] text-white mb-2 uppercase">PAYLOAD SECURED</h4>
                      <p className="text-on-surface-variant text-xs font-light px-4">
                        Routing to your secure ticket vault...
                      </p>
                  </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
}
