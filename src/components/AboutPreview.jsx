import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Globe, TrendingUp } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    text: "Risk Mitigation & Fraud Prevention",
    theme: "gold",
  },
  { icon: Globe, text: "Deep Regional Market Knowledge", theme: "silver" },
  { icon: TrendingUp, text: "End-to-End Transaction Support", theme: "gold" },
];

export default function AboutPreview() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-wider rounded-full">
              About MineralBridge Africa
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Unlocking Africa's Mineral Wealth with{" "}
              <span className="text-amber-400">Trust & Expertise</span>
            </h2>
            <p className="text-gray-300 leading-relaxed">
              At MineralBridge Africa LTD, we specialize in providing expert
              consulting services to international buyers seeking to acquire
              minerals in East, Central, and Southern Africa. Our team of
              seasoned professionals possesses extensive knowledge of the
              region's mining industry, ensuring seamless transactions and
              tailored support.
            </p>

            <div className="space-y-4 pt-2">
              {features.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        item.theme === "gold"
                          ? "bg-amber-500/20 text-amber-400"
                          : "bg-gray-600/20 text-gray-300"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-gray-300 font-medium">
                      {item.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold transition-colors group mt-4"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right Visual - Hexagon Frame */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Outer Hexagon Border */}
              <div className="absolute inset-0 clip-hexagon border-2 border-amber-400/20 bg-amber-500/5 backdrop-blur-sm" />

              {/* Inner Image Frame */}
              <div className="absolute inset-4 bg-white/5 rounded-sm overflow-hidden shadow-2xl clip-hexagon">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=800&fit=crop"
                  alt="Mining operations in Africa"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none" />
              </div>

              {/* Subtle Animated Ring */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -inset-8 border border-amber-400/10 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
