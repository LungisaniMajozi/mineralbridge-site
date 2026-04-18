import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Briefcase, ChevronRight, Building2, TrendingUp, Handshake } from "lucide-react";

const advisoryItems = [
  {
    icon: Building2,
    title: "Mining Acquisitions",
    text: "Strategic advice on acquiring mining assets, licenses, and companies in Africa.",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    text: "Guiding investors on opportunities, structuring deals, and navigating regulatory frameworks.",
  },
  {
    icon: Handshake,
    title: "Partnership Development",
    text: "Facilitating partnerships between local and international companies, governments, and stakeholders.",
  },
];

export default function AdvisoryServices() {
  return (
    <div className="min-h-screen bg-[#091123] pt-48 pb-24 selection:bg-amber-500/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-sm font-medium text-amber-600 tracking-wide uppercase">Our Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-display tracking-tight">
              Advisory <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Services</span>
            </h1>
            <p className="text-xl text-slate-300 font-light italic mb-8 max-w-xl mx-auto bg-[#1E293B]/50 py-2">
              "I need expert guidance on mining investments in Africa"
            </p>
          </motion.div>
        </div>

        {/* Decorative background glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-600/5 rounded-[100%] blur-[150px] pointer-events-none" />

        {/* Main Advisory Box */}
        <div className="grid md:grid-cols-12 gap-8 mb-12 relative z-10">
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-12 lg:col-span-8 bg-[#1E293B] border border-[#1E293B] shadow-sm rounded-3xl p-8 lg:p-12 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[80px] transition-all duration-700 group-hover:bg-amber-500/10" />
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="p-4 bg-amber-100 text-amber-600 rounded-2xl">
                <Briefcase className="w-8 h-8" />
              </div>
              <h2 className="text-whitexl font-bold text-white font-display">Strategic Mining Guidance</h2>
            </div>
            <p className="text-slate-300 leading-relaxed font-light text-lg mb-8 relative z-10 max-w-2xl">
              We provide strategic advice on acquiring mining assets, licenses,
              and companies in Africa. Our advisory team guides investors through
              complex market dynamics, deal structuring, and regulatory
              navigation.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold bg-slate-900 text-white hover:bg-amber-500 hover:text-white transition-all shadow-md group/btn relative z-10"
            >
              Get Expert Advice <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Aesthetic Image box */}
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="md:col-span-12 lg:col-span-4 rounded-3xl border border-[#1E293B] overflow-hidden min-h-[300px] relative group shadow-lg"
          >
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-amber-500/20 z-10 pointer-events-none" />
             <img 
               src="/images/min4.png" 
               alt="Advisory Services" 
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
             />
          </motion.div>
        </div>


        {/* Below Service Modules */}
        <div className="grid md:grid-cols-3 gap-6 relative z-10">
          {advisoryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#1E293B] border border-[#1E293B] hover:border-amber-500/30 shadow-sm hover:shadow-xl rounded-3xl p-8 flex flex-col gap-6 group transition-all duration-300"
            >
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center group-hover:bg-amber-500 group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-7 h-7 text-amber-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">{item.title}</h3>
                <p className="text-slate-300 leading-relaxed font-light">{item.text}</p>
              </div>
            </motion.div>
          ))}
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
