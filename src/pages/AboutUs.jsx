import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Target, Eye, Gem } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#091123] pt-48 pb-24 selection:bg-amber-500/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-sm font-medium text-amber-600 tracking-wide uppercase">About Us</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-display tracking-tight">
              Bridging the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Gap</span>
            </h1>
            <p className="text-xl text-slate-300 font-light leading-relaxed mb-8">
              Based in the heart of Johannesburg, MineralBridge Africa emerged from a critical need: bridging the significant trust deficit between international mineral buyers and African sellers.
            </p>
          </motion.div>
        </div>

        {/* Decorative background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-amber-600/5 rounded-[100%] blur-[120px] pointer-events-none" />

        {/* Bento Grid layout */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto relative z-10">
          
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1E293B] border border-[#1E293B] hover:border-amber-500/30 rounded-3xl p-8 lg:p-10 flex border-t-4 border-t-amber-500 shadow-sm transition-all duration-300 hover:shadow-lg"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-amber-100 rounded-2xl">
                  <Target className="w-8 h-8 text-amber-600" />
                </div>
                <h2 className="text-whitexl font-bold text-white font-display">Our Mission</h2>
              </div>
              <p className="text-slate-300 leading-relaxed font-light text-lg">
                To serve as the trusted intermediary that facilitates secure, transparent, and mutually beneficial mineral transactions between African suppliers and global markets.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1E293B] border border-[#1E293B] hover:border-amber-500/30 rounded-3xl p-8 lg:p-10 flex shadow-sm transition-all duration-300 hover:shadow-lg"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-amber-100 rounded-2xl">
                  <Eye className="w-8 h-8 text-amber-600" />
                </div>
                <h2 className="text-whitexl font-bold text-white font-display">Our Vision</h2>
              </div>
              <p className="text-slate-300 leading-relaxed font-light text-lg">
                To be the premier consultancy and facilitation group for the African mining and mineral trade, recognized globally for integrity and operational excellence.
              </p>
            </div>
          </motion.div>

          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-slate-900 rounded-[2.5rem] p-10 lg:p-16 relative overflow-hidden group shadow-lg"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] transition-all duration-700 group-hover:bg-amber-500/20" />
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
                  <Gem className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Expertise</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-display leading-tight">
                  Expert Guidance in Complex Markets
                </h2>
                <Link
                  to="/services/sourcing"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold bg-amber-500 text-white hover:bg-amber-400 transition-all shadow-md group/btn"
                >
                  Explore Our Services
                </Link>
              </div>
              <p className="text-slate-300 leading-relaxed font-light text-xl border-l border-white/10 pl-8">
                Operating across East, Central, and Southern Africa, we leverage deep regional knowledge and extensive networks to verify suppliers, ensure regulatory compliance, and oversee logistics from mine to port.
              </p>
            </div>
          </motion.div>

        </div>

        <div className="mt-20 text-center relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-slate-400 hover:text-amber-600 font-semibold transition-colors group"
          >
            <div className="p-2 rounded-full bg-slate-200 group-hover:bg-amber-100 transition-colors">
              <ArrowLeft className="w-4 h-4" /> 
            </div>
            <span>Return to Homepage</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
