import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Globe,
  ShieldCheck,
  FileCheck,
  Briefcase,
  Building2,
  TrendingUp,
} from "lucide-react";

const services = [
  { name: "SOURCING", icon: Globe, link: "/services/sourcing", desc: "Access high-quality minerals" },
  { name: "DUE DILIGENCE", icon: ShieldCheck, link: "/services/due-diligence", desc: "Verify authenticity" },
  { name: "TRANSACTIONS", icon: FileCheck, link: "/services/transactions", desc: "End-to-end oversight" },
  { name: "ADVISORY", icon: Briefcase, link: "/services/advisory", desc: "Strategic guidance" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-[#091123] overflow-hidden rounded-b-[3rem] border-b border-[#1E293B]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 pt-48 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content Area */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-sm font-medium text-amber-500 tracking-wide uppercase">Premier Mining Logistics</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-display leading-[1.1]">
              Securing Africa's <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Mineral Supply.
              </span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed font-light max-w-lg border-l-2 border-amber-500 pl-6">
              Mitigating Risk, Combating Fraud, Delivering Trust. Expert guidance for international buyers navigating regional wealth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/services/sourcing"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold bg-amber-500 text-[#091123] hover:bg-amber-400 transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)] group"
              >
                <span>Start Sourcing</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold bg-white/5 text-white hover:bg-white/10 border border-white/10 transition-all group"
              >
                <span>Talk to an Expert</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Staggered Masonry Image Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] w-full hidden lg:block"
          >
             {/* Center Large Image */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-96 rounded-3xl overflow-hidden border border-[#1E293B] shadow-2xl z-20">
               <div className="absolute inset-0 bg-gradient-to-t from-[#091123]/80 to-transparent z-10" />
               <img src="/images/min1.png" alt="Mining Operation" className="w-full h-full object-cover" />
             </div>

             {/* Top Left Medium */}
             <div className="absolute top-4 left-10 w-48 h-56 rounded-3xl overflow-hidden border border-[#1E293B] shadow-xl z-10 transform -rotate-6 transition-transform hover:rotate-0 hover:z-30 duration-300">
               <div className="absolute inset-0 bg-amber-500/20 mix-blend-overlay z-10" />
               <img src="/images/min2.png" alt="Minerals" className="w-full h-full object-cover" />
             </div>

             {/* Bottom Right Medium */}
             <div className="absolute bottom-4 right-10 w-56 h-64 rounded-3xl overflow-hidden border border-[#1E293B] shadow-xl z-10 transform rotate-3 transition-transform hover:rotate-0 hover:z-30 duration-300">
               <img src="/images/min3.png" alt="Logistics" className="w-full h-full object-cover" />
             </div>

             {/* Top Right Small Accent */}
             <div className="absolute top-16 right-0 w-32 h-32 rounded-3xl overflow-hidden border border-[#1E293B] shadow-md z-0 opacity-80">
               <img src="/images/min4.png" alt="Trade" className="w-full h-full object-cover" />
             </div>

             {/* Bottom Left Stats Box Card */}
             <div className="absolute bottom-20 left-0 bg-amber-500 p-6 rounded-3xl shadow-xl z-30 transform -translate-x-8 text-[#091123]">
               <h3 className="text-4xl font-black font-display tracking-tighter">100%</h3>
               <p className="text-sm font-bold opacity-80 uppercase tracking-widest mt-1">Verified Supply</p>
             </div>
          </motion.div>
        </div>
      </div>

      {/* Service Mini-bar overlapping bottom */}
      <div className="absolute bottom-0 inset-x-0 bg-[#060D1A]/60 backdrop-blur-lg border-t border-[#1E293B] hidden md:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="grid grid-cols-4 divide-x divide-[#1E293B]">
             {services.map((s, idx) => (
                <Link key={idx} to={s.link} className="p-6 group transition-colors hover:bg-white/5">
                   <div className="flex items-center gap-3 mb-2">
                     <s.icon className="w-5 h-5 text-amber-500" />
                     <h4 className="text-white font-bold text-sm tracking-widest uppercase">{s.name}</h4>
                   </div>
                   <p className="text-slate-400 text-sm font-light">{s.desc}</p>
                </Link>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
}
