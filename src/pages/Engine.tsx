import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Radio, LayoutGrid, Ticket, Compass, User, Plus } from 'lucide-react';

export default function Engine() {
  return (
    <div className="bg-background text-on-background selection:bg-primary selection:text-black min-h-screen">
      {/* Main Content: The Engine */}
      <main className="pt-32 pb-32 px-8 max-w-7xl mx-auto">
        {/* Hero Branding */}
        <section className="mb-16 border-l-[1px] border-primary pl-8 py-2">
          <h2 className="text-5xl md:text-7xl font-light tracking-[0.15em] font-headline uppercase leading-tight text-white/90">THE ENGINE</h2>
          <div className="flex flex-col md:flex-row md:items-center gap-6 mt-6">
            <p className="text-on-surface-variant max-w-xl text-lg font-light leading-relaxed tracking-wide">
              Nairobi's high-frequency event infrastructure. Raw energy, precision bookings, and zero-latency access to the underground.
            </p>
            <div className="flex items-center gap-3 px-4 py-2 bg-[#1c1b1b] border border-tertiary/10 w-fit">
              <span className="w-1.5 h-1.5 bg-tertiary animate-pulse rounded-full"></span>
              <span className="text-tertiary font-headline font-medium text-[10px] tracking-[0.2em] uppercase">LIVE PULSE ACTIVE</span>
            </div>
          </div>
        </section>

        {/* Filters Segment */}
        <div className="flex overflow-x-auto no-scrollbar gap-6 mb-12 pb-4 border-b border-outline-variant/20">
          <button className="px-6 py-2 bg-primary text-black font-headline font-medium text-[10px] tracking-[0.15em] whitespace-nowrap">ALL FREQ</button>
          <button className="px-6 py-2 bg-transparent text-on-surface-variant hover:text-primary transition-colors font-headline font-medium text-[10px] tracking-[0.15em] whitespace-nowrap">CONCERT</button>
          <button className="px-6 py-2 bg-transparent text-on-surface-variant hover:text-primary transition-colors font-headline font-medium text-[10px] tracking-[0.15em] whitespace-nowrap">RAVE TECH</button>
          <button className="px-6 py-2 bg-transparent text-on-surface-variant hover:text-primary transition-colors font-headline font-medium text-[10px] tracking-[0.15em] whitespace-nowrap">GALLERY</button>
          <button className="px-6 py-2 bg-transparent text-on-surface-variant hover:text-primary transition-colors font-headline font-medium text-[10px] tracking-[0.15em] whitespace-nowrap">THE LAB</button>
        </div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {/* Item 1 */}
          <div className="masonry-item-tall group relative overflow-hidden bg-[#131313] cursor-pointer">
            <img className="w-full h-full object-cover grayscale group-hover:grayscale-[50%] transition-all duration-700 ease-out" alt="vibrant neon lit electronic dance music concert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0XZJmEa36PE8vyLkYTAiIG8PR86gbL0fLUK0HuKtVHDojEopoJAKNZW_ZyFL9yxAfCXhhx5U6NywkIEUFDEN_LTVHI21WAeNUvKj9PiBCwV9EDhLQ-p_1ugrF6l6jhpja690-uVfy1LLMjj6cMmD0zzZT1Q-zPY4Qbj30Ex6zfkpSubAE9O2_cM5z6yt8LaAmkYYJKaQNnw0Jd-OitA-3bkihNhxN9VzgozkXWzCx3lVEIjDvd5i7Y_bFIaMwTNAhZ7cnxYEx0WA" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full transition-transform duration-500 group-hover:-translate-y-2">
              <span className="bg-tertiary text-black text-[9px] font-medium font-headline px-3 py-1 tracking-[0.15em] mb-4 inline-block">LIVE NOW</span>
              <h3 className="text-2xl font-light font-headline tracking-[0.1em] leading-snug mb-2 text-white/90">KINETIC FLUX</h3>
              <p className="text-primary font-headline text-[10px] font-medium tracking-[0.2em] uppercase">STAGE 01 // 22:00</p>
            </div>
            <Link to="/event/kineticflux" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-primary text-black font-headline font-medium text-xs px-8 py-4 tracking-[0.15em] transition-all duration-500 active:scale-95 z-10 shadow-xl">QUICK BOOK</Link>
          </div>

          {/* Item 2 */}
          <div className="masonry-item-short group relative overflow-hidden bg-[#131313] cursor-pointer">
            <img className="w-full h-full object-cover grayscale group-hover:grayscale-[50%] transition-all duration-700 ease-out" alt="close-up of a high-tech DJ controller" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTQOffahUy4sM5LGPtuLXF05nE8jvL-msnns4NjlY1RYfe55j6172y2h749oKZnVpVJkaAdthfyHfuj4PtXtrbjasxEot0q7THpeNDmwTppuzwVRfYMLt1YJjhz4m4hdCIiYwJHN5l14YavIZ6OkGm1_w6FgUIFfp-D4HkAvS79g1xViOF0EpS10STlV3YP5Zu_DT2Bcs7aXUrxSTC3ldrN8tNaKuHLAOidvXvaOZUZXo7bdfvN4jqSBr-vWEDIe8BkovyzRGVrl4" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="text-2xl font-light font-headline tracking-[0.1em] leading-snug mb-2 text-white/90">DEEP HOUZE</h3>
              <p className="text-primary font-headline text-[10px] font-medium tracking-[0.2em] uppercase">THE VAULT // 18:00</p>
            </div>
            <Link to="/event/deephouze" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-primary text-black font-headline font-medium text-xs px-8 py-4 tracking-[0.15em] transition-all duration-500 active:scale-95 z-10 shadow-xl">QUICK BOOK</Link>
          </div>

          {/* Item 3 */}
          <div className="masonry-item group relative overflow-hidden bg-[#131313] cursor-pointer">
            <img className="w-full h-full object-cover grayscale group-hover:grayscale-[50%] transition-all duration-700 ease-out" alt="dramatic stage lighting with vertical beams" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH9LHCgj9a86JmmSp6-75oBUaW9U3JHhSjSsRyNkBLdUCZ3Dx_SL1c6pjpopRXzyNbhEomr_L8YEOODYubb6yFZBMcIHLhgziHZ7zVlyyY3s5LeB7Lsm068yvHd7DL-fO4Ge0rUkcwM0wKEqYtxn3j0BIb39SF5GlPEYty4C1eW6WQAcQdzVYq47YGRzMPHH1LnHEQbuzNzqLJkI7QAfuoTyp35MqAzVgzzhV6BLEr-gs36WrsMcO72UNuTLedCC5Ubb2IQz6fkQs" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="text-2xl font-light font-headline tracking-[0.1em] leading-snug mb-2 text-white/90">SIGNAL VOID</h3>
              <p className="text-primary font-headline text-[10px] font-medium tracking-[0.2em] uppercase">OUTDOOR ARENA // SAT</p>
            </div>
            <Link to="/event/signalvoid" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-primary text-black font-headline font-medium text-xs px-8 py-4 tracking-[0.15em] transition-all duration-500 active:scale-95 z-10 shadow-xl">QUICK BOOK</Link>
          </div>

          {/* Item 4 */}
          <div className="masonry-item-tall group relative overflow-hidden bg-[#131313] cursor-pointer">
            <img className="w-full h-full object-cover grayscale group-hover:grayscale-[50%] transition-all duration-700 ease-out" alt="energetic crowd with hands up at a rock concert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCArGcna86deCVoqk3YLAORm6LRBr9EsiSlWQlSxsJcqPGvpw8dN3hR83FC0yF6AMuCa3edr-Wpyh-oGjJpG13RCDP4R1QK7sAV_whgI1OZexIWn1xoJUOt6yUv2hSKDQYSCTnFsYeOk7YF14-ovuWi5xrugJBfVvl9w0uaI1JaNyHm9oWzCsh6oNNpiDiucWis0K_kHnBdkefRgyzgv9Nn5vNItd0KUpuYqmxiPVViEqE_j5nPgxWyj6fy-ntEatXYf3t2_Gonbxk" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="text-2xl font-light font-headline tracking-[0.1em] leading-snug mb-2 text-white/90">AMPLIFY 25</h3>
              <p className="text-primary font-headline text-[10px] font-medium tracking-[0.2em] uppercase">MAIN HUB // NEXT FRI</p>
            </div>
            <Link to="/event/amplify25" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-primary text-black font-headline font-medium text-xs px-8 py-4 tracking-[0.15em] transition-all duration-500 active:scale-95 z-10 shadow-xl">QUICK BOOK</Link>
          </div>

          {/* Item 5 */}
          <div className="masonry-item group relative overflow-hidden bg-[#131313] cursor-pointer">
            <img className="w-full h-full object-cover grayscale group-hover:grayscale-[50%] transition-all duration-700 ease-out" alt="abstract motion blur of vibrant stage lights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCigQ8fFkehnxT8zSRqRHubmHUg0-0nPDP36uApeWZiCqv9QereHHmMQMaifyuImY29XVcISXyjIAj9Qh24jw7io8gzIV_Sh52DvcCR6Mx1hO_2qBtwMewjBaoUKr58Z02WOBeVwEsjfjvqKuZ5U7QCnqxdXOAZcEId1VWP0c0N996kPsKHVLVuVb4W01d5QAUBtz8owQVhu-I7cJO58rkf5o3eOVZQaYB2TYFjClPU4LIyyyEuqC_lcXyxqkT7HdD0SqzJ5XBf1Eg" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="text-2xl font-light font-headline tracking-[0.1em] leading-snug mb-2 text-white/90">RAW CORE</h3>
              <p className="text-primary font-headline text-[10px] font-medium tracking-[0.2em] uppercase">UNDERGROUND // SUN</p>
            </div>
            <Link to="/event/rawcore" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-primary text-black font-headline font-medium text-xs px-8 py-4 tracking-[0.15em] transition-all duration-500 active:scale-95 z-10 shadow-xl">QUICK BOOK</Link>
          </div>
        </div>
      </main>

      {/* FAB for Quick Action (Booking Context) */}
      <Link to="/tickets" className="fixed bottom-28 right-8 w-14 h-14 bg-primary text-black flex items-center justify-center shadow-[0_0_40px_rgba(195,244,0,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 z-40 rounded-sm">
        <Plus className="w-6 h-6" strokeWidth={1.5} />
      </Link>

      {/* Background Decoration */}
      <div className="fixed inset-0 pointer-events-none -z-10 opacity-[0.03]">
        <div className="absolute top-[10%] left-[-10%] text-[30vw] font-light font-headline tracking-[0.2em] leading-none select-none text-white whitespace-nowrap">FREQ</div>
      </div>
    </div>
  );
}
