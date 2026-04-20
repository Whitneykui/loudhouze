import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Radio, ArrowRight, Unlock, Zap, LayoutGrid, Ticket, Compass, User } from 'lucide-react';

export default function Pulse() {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary selection:text-black">
      <main className="relative">
        {/* Hero Section */}
        <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center bg-surface-container-lowest">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover opacity-60 grayscale brightness-75" alt="Cinematic high-angle shot of a massive energetic Nairobi concert crowd with flashing green laser lights and heavy stage smoke" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnKJA33hStQxnsre_kqpwxqPiU93BHlkvJ_9vzKALpjDrI343py9y7QtVrNtN_S5X8zd-kUy7rHP97me4e_tGXjNMsuXz6A-EIlqCbSreZ0w9y9ipu2fgzdAnawl3CouzXPFU_b0TpGx4HQyCyAxGqKn9TAiS_aQh_IINUu7Jx-R0N2-qV5InDNvoFRsAG2Vz1s5-9wJOIUTX6wh8Hoe5T4JzO_yg2_LqDhP4loDnXeH9FrBhXgj7LUMlseQoQBuwLNk19rEAyLQw" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50"></div>
          </div>
          <div className="relative z-10 text-center px-4">
            <h2 className="text-6xl md:text-[10rem] font-headline font-light uppercase tracking-[0.1em] leading-[0.9] text-white mix-blend-difference">
              THE<br />HOUZE<br />ALWAYS<br />WINS
            </h2>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full bg-surface-container-low border-t border-[#c3f400]/20 py-4 overflow-hidden">
            <div className="marquee flex gap-12 items-center">
              <span className="text-[#c3f400] font-headline font-light text-xl tracking-[0.1em] uppercase">NEXT DROP: [XENIA MANASSEH] - 22:00 EAT — NEXT DROP: [XENIA MANASSEH] - 22:00 EAT — NEXT DROP: [XENIA MANASSEH] - 22:00 EAT — NEXT DROP: [XENIA MANASSEH] - 22:00 EAT — NEXT DROP: [XENIA MANASSEH] - 22:00 EAT —</span>
              <span className="text-[#c3f400] font-headline font-light text-xl tracking-[0.1em] uppercase">NEXT DROP: [XENIA MANASSEH] - 22:00 EAT — NEXT DROP: [XENIA MANASSEH] - 22:00 EAT — NEXT DROP: [XENIA MANASSEH] - 22:00 EAT — NEXT DROP: [XENIA MANASSEH] - 22:00 EAT — NEXT DROP: [XENIA MANASSEH] - 22:00 EAT —</span>
            </div>
          </div>
        </section>

        {/* Bento Grid Services */}
        <section className="py-24 px-6 max-w-7xl mx-auto bg-background">
          <div className="mb-16">
            <h3 className="text-5xl md:text-6xl font-headline font-light uppercase mt-6 tracking-[0.05em] leading-tight">ARCHITECTING<br />THE NOISE.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 h-auto md:h-[600px]">
            {/* Concert Production */}
            <div className="relative group overflow-hidden bg-surface-container-low p-8 flex flex-col justify-end hover:bg-surface-container-highest transition-colors duration-500">
              <div className="absolute inset-0 z-0 opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700">
                <img className="w-full h-full object-cover" alt="Technical close-up of a high-end sound mixer with neon green status" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6Lj0Gk28c00dLSvE9TbUZPPl02FS7mmO-ooeMywEJuYsYYtaoN5Q8o1XDlFG6h3Y35TvxP22sEWU0Ti0pphyPvV3dPqt5jANXenRSEpskk1f5GVlsy0_RQSrRO51BWX-6fQWV2ZDphvyMzTJY5LajxYZnwDTMeukcqu3llXN0wFMRom3ll5XSRQ-1ozRzoWf0c5CkSJvsdZIadM7LT8P3CimxnDjRGg3znAouApSnCQYvMxWn3vHvlD9KuMSLWhEtBktvP5FDy2s" />
              </div>
              <div className="relative z-10">
                <span className="text-[#c3f400] font-headline font-medium text-[10px] mb-3 block tracking-[0.2em] uppercase">01 / PRODUCTION</span>
                <h4 className="text-3xl font-headline font-light uppercase tracking-[0.05em] text-white">CONCERT<br />PRODUCTION</h4>
                <p className="text-on-surface-variant text-sm mt-4 max-w-xs leading-relaxed font-light">Immersive spatial audio and brutalist visual stage design for the next generation of live arena experiences.</p>
                <Link to="/engine" className="mt-8 flex items-center gap-3 text-[#c3f400] font-headline font-medium uppercase text-xs tracking-[0.2em] group-hover:translate-x-2 transition-transform">
                  INITIALIZE <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Talent Booking */}
            <div className="relative group overflow-hidden bg-surface-container-highest p-8 flex flex-col justify-end">
              <div className="absolute inset-0 z-0 opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700">
                <img className="w-full h-full object-cover" alt="Vibrant silhouette of a performer on stage" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMOyWQ0llO9VXuKC5c4k8uNSmS03eCFDhXHUKveMKc9Zwm7ZBgpDNeDXENquM64JyCki-nX-r4KMiEpd8tzGl-EqKcz2Mv_824a9XtouB28MYII1l0ZcYOkocZLzT-uNUwTrUQSugJWtI13Ac_x90aTjX9GOAU5-zrbPlqE9iJT88Fiy24E8VMxsi8PKLZ3A_Rc6tl2WT0FwSRwZdVPFhCsVIssGXxAuaUlFuxpd7EXBfJtq9QX1hiGO58lqFzYy_PpLSnfwjY_R4" />
              </div>
              <div className="relative z-10">
                <span className="text-[#c3f400] font-headline font-medium text-[10px] mb-3 block tracking-[0.2em] uppercase">02 / TALENT</span>
                <h4 className="text-3xl font-headline font-light uppercase tracking-[0.05em] text-white">TALENT<br />BOOKING</h4>
                <p className="text-on-surface-variant text-sm mt-4 max-w-xs leading-relaxed font-light">Curating the underground. Connecting the streets to the mainstage through a global kinetic network.</p>
                <Link to="/vault" className="mt-8 flex items-center gap-3 text-[#c3f400] font-headline font-medium uppercase text-xs tracking-[0.2em] group-hover:translate-x-2 transition-transform">
                  ACCESS VAULT <Unlock className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Brand Activations */}
            <div className="relative group overflow-hidden bg-surface-container p-8 flex flex-col justify-end hover:bg-surface-container-low transition-colors duration-500">
              <div className="absolute inset-0 z-0 opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700">
                <img className="w-full h-full object-cover" alt="Futuristic glowing branding display" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0GN0yiEgIETyAIbJezSpNe5oNBSZeTAm-5AvmKDsenB7QzbEkTE0RA2E2ugLZd7wSlEY48YUP9xzT5RqcbC8slzM1iofn7FC-EHOFAmMP2iYD1949hdC1dqQmqPtmwDdHq6MmeH70QLF93a69oAZH373laOjSgCIeY8FAwmw1jvqlpfSfNKdTxFmq-lPgcNDRXmUXOk2jDNDKYdkmo9MNGCQW2x-IvwqA41yLU-3Vo_McM4MMNQflaQNIiJyt-89zCx1LGhwEB8Q" />
              </div>
              <div className="relative z-10">
                <span className="text-[#c3f400] font-headline font-medium text-[10px] mb-3 block tracking-[0.2em] uppercase">03 / ACTIVATIONS</span>
                <h4 className="text-3xl font-headline font-light uppercase tracking-[0.05em] text-white">BRAND<br />ACTIVATIONS</h4>
                <p className="text-on-surface-variant text-sm mt-4 max-w-xs leading-relaxed font-light">Strategic cultural penetration. We build high-impact environments that live long after the show ends.</p>
                <Link to="/engine" className="mt-8 flex items-center gap-3 text-[#c3f400] font-headline font-medium uppercase text-xs tracking-[0.2em] group-hover:translate-x-2 transition-transform">
                  DEPLOY <Zap className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter / Pulse section */}
        <section className="py-24 px-6 bg-surface-container-low border-y border-outline-variant/5">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-5xl md:text-7xl font-headline font-light uppercase tracking-[0.05em] leading-tight mb-8">JOIN THE<br /><span className="text-[#c3f400]">MAINFRAME.</span></h3>
            <p className="text-on-surface-variant text-lg mb-12 font-light max-w-2xl mx-auto">Get the latest drops, guestlist access, and vault codes before the general public. No spam, just power.</p>
            <form className="flex flex-col md:flex-row gap-0 max-w-2xl mx-auto" onSubmit={(e) => { e.preventDefault(); window.location.href = '/vault'; }}>
              <input className="flex-grow bg-background border border-outline-variant/20 text-white p-5 font-headline font-light uppercase tracking-[0.15em] text-sm focus:ring-1 focus:ring-[#c3f400] focus:border-[#c3f400] outline-none" placeholder="YOUR IDENTITY@EMAIL.COM" type="email" />
              <button type="submit" className="bg-[#c3f400] text-black font-headline font-medium uppercase tracking-[0.2em] text-sm px-10 py-5 hover:bg-[#d4ff1a] transition-colors active:scale-95 duration-300">AUTHENTICATE</button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-24 pb-40 px-6 bg-background">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
            <div>
              <h2 className="text-2xl font-light tracking-[0.2em] text-[#c3f400] font-['Inter'] uppercase mb-4">LOUD HOUZE</h2>
              <p className="text-on-surface-variant max-w-xs font-light text-sm leading-relaxed">The definitive home for Nairobi's underground kinetic culture. Built to withstand the noise.</p>
            </div>
            <div className="grid grid-cols-2 gap-16">
              <div>
                <h5 className="font-headline font-medium text-[10px] tracking-[0.2em] uppercase mb-6 text-[#c3f400]">NAVIGATION</h5>
                <ul className="space-y-4 font-headline text-xs font-light uppercase tracking-[0.15em]">
                  <li><Link className="hover:text-[#c3f400] transition-colors duration-300" to="/">THE ARENA</Link></li>
                  <li><Link className="hover:text-[#c3f400] transition-colors duration-300" to="/vault">THE VAULT</Link></li>
                  <li><Link className="hover:text-[#c3f400] transition-colors duration-300" to="/engine">DROPS</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="font-headline font-medium text-[10px] tracking-[0.2em] uppercase mb-6 text-[#c3f400]">CONNECT</h5>
                <ul className="space-y-4 font-headline text-xs font-light uppercase tracking-[0.15em]">
                  <li><a className="hover:text-[#c3f400] transition-colors duration-300" href="#">INSTAGRAM</a></li>
                  <li><a className="hover:text-[#c3f400] transition-colors duration-300" href="#">X TWITTER</a></li>
                  <li><a className="hover:text-[#c3f400] transition-colors duration-300" href="#">TIKTOK</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-outline-variant/10 text-[9px] font-headline font-medium tracking-[0.3em] uppercase text-on-surface-variant/40">©2024 LOUD HOUZE ENTERTAINMENT // ALL SYSTEMS OPERATIONAL</div>
        </footer>
      </main>

      {/* Floating Action Button */}
      <Link className="fixed bottom-32 right-6 z-40 bg-[#c3f400] text-black p-4 rounded-full shadow-[0_0_30px_rgba(195,244,0,0.3)] hover:bg-[#d4ff1a] hover:scale-105 active:scale-95 transition-all duration-300" to="/tickets">
        <Ticket className="w-6 h-6" strokeWidth={1.5} />
      </Link>
    </div>
  );
}
