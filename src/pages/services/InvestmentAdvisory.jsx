import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, TrendingUp, ChevronRight } from "lucide-react";

export default function InvestmentAdvisory() {
  return (
    <div className="min-h-screen bg-[#091123] pt-48 pb-24 selection:bg-amber-500/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-sm font-medium text-amber-600 tracking-wide uppercase">Our Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-display tracking-tight">
              Investment <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                Advisory
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-xl font-light italic mb-8 border-l-2 border-amber-500 pl-4 bg-[#1E293B]/50 py-2">
              "I need guidance on structuring deals and navigating regulatory frameworks"
            </p>

            <div className="bg-[#1E293B] border border-[#1E293B] rounded-3xl p-8 mb-10 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-amber-100 text-amber-600 rounded-xl">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h2 className="text-whitexl font-bold text-white font-display">
                  Investment & Deal Structuring
                </h2>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed font-light">
                Guiding investors on opportunities, structuring deals, and
                navigating regulatory frameworks. We provide expert market
                intelligence and strategic planning to maximize returns and minimize
                risks.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold bg-slate-900 text-white hover:bg-amber-500 hover:text-white transition-all shadow-md group"
            >
              Get Expert Advice <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[70vh] rounded-[2rem] overflow-hidden border border-[#1E293B] shadow-xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-amber-500/20 z-10 pointer-events-none" />
            <img 
              src="/images/min2.png" 
              alt="Investment Advisory" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </motion.div>

        </div>

        <div className="mt-16 relative z-10 border-t border-[#1E293B] pt-8">
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
