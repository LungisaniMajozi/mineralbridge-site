import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Shield, Heart } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "Regional Expertise",
    text: "In-depth knowledge of the region's mining industry, regulatory frameworks, and market dynamics.",
  },
  {
    icon: Shield,
    title: "Trusted Network",
    text: "Strong relationships with reputable suppliers and partners, ensuring access to high-quality minerals and competitive pricing.",
  },
  {
    icon: Heart,
    title: "Personalized Service",
    text: "Tailored support to meet the unique needs and requirements of each client.",
  },
];

export default function WhyUs() {
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
              <span className="text-sm font-medium text-amber-600 tracking-wide uppercase">Why Choose Us</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-display tracking-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Gold Standard</span> <br/> of Mineral Trade
            </h1>
          </motion.div>
        </div>

        {/* Decorative background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-amber-600/5 rounded-[100%] blur-[120px] pointer-events-none" />

        {/* Bento Grid layout */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto relative z-10">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#1E293B] border border-[#1E293B] hover:border-amber-500/30 rounded-3xl p-8 lg:p-10 flex flex-col gap-6 group transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center group-hover:bg-amber-500 group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-7 h-7 text-amber-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-whitexl font-bold text-white mb-3 font-display">{item.title}</h3>
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
