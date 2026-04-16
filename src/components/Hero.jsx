import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Globe,
  ShieldCheck,
  FileCheck,
  Briefcase,
  Building2,
  TrendingUp,
  MessageCircle,
} from "lucide-react";

const slides = [
  {
    title: "MINERAL SOURCING",
    problem: "I need to connect with reputable suppliers in Africa",
    tagline:
      "We identify and connect buyers with reputable suppliers, facilitating access to high-quality minerals.",
    icon: Globe,
    image: "/images/min1.png",
    link: "/services/sourcing",
  },
  {
    title: "DUE DILIGENCE",
    problem: "I need to verify authenticity and quality",
    tagline:
      "Comprehensive due diligence on behalf of buyers, verifying authenticity and quality to ensure smooth transactions.",
    icon: ShieldCheck,
    image: "/images/min2.png",
    link: "/services/due-diligence",
  },
  {
    title: "TRANSACTION MANAGEMENT",
    problem: "I need end-to-end transaction oversight",
    tagline:
      "Overseeing transactions from inception to completion, ensuring contractual compliance, logistics, and payment settlement.",
    icon: FileCheck,
    image: "/images/min3.png",
    link: "/services/transactions",
  },
  {
    title: "ADVISORY SERVICES",
    problem: "I need strategic mining investment guidance",
    tagline:
      "Strategic advice on acquiring mining assets, licenses, and companies in Africa. Guiding investors on opportunities and structuring deals.",
    icon: Briefcase,
    image: "/images/min4.png",
    link: "/services/advisory",
  },
];

const services = [
  { name: "SOURCING", icon: Globe, link: "/services/sourcing" },
  { name: "DUE DILIGENCE", icon: ShieldCheck, link: "/services/due-diligence" },
  { name: "TRANSACTIONS", icon: FileCheck, link: "/services/transactions" },
  { name: "ADVISORY", icon: Briefcase, link: "/services/advisory" },
  { name: "ACQUISITIONS", icon: Building2, link: "/services/acquisitions" },
  { name: "INVESTMENT", icon: TrendingUp, link: "/services/investment" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];
  const Icon = slide.icon;
  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-amber-900/70" />
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="relative z-20 min-h-screen flex flex-col justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-8 text-left">
              {/* Icon + Title */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4"
              >
                <div className="p-3 bg-amber-500/20 backdrop-blur-sm rounded-xl border border-amber-500/30">
                  <Icon className="w-8 h-8 text-amber-400" />
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
                  {slide.title}
                </h1>
              </motion.div>

              {/* Quote Marks & Problem Statement */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-4"
              >
                <div className="flex gap-2">
                  <svg
                    className="w-10 h-10 md:w-14 md:h-14 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <svg
                    className="w-10 h-10 md:w-14 md:h-14 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
                  </svg>
                </div>

                <p className="text-2xl md:text-4xl font-bold text-white leading-tight">
                  {slide.problem}
                </p>

                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                  {slide.tagline}
                </p>
              </motion.div>

              {/* MORE INFO Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Link
                  to={slide.link}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:from-amber-400 hover:to-orange-400 transition-all active:scale-95"
                >
                  <span>MORE INFO</span>
                  <ChevronRight className="w-6 h-6" />
                </Link>
              </motion.div>
            </div>

            {/* Right Side - Image (Desktop Only) */}
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                  {!loadedImages[current] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
                      <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className={`w-full h-[500px] object-cover transition-opacity duration-500 ${
                      loadedImages[current] ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => handleImageLoad(current)}
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/600x500?text=Image+Not+Found";
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="absolute bottom-8 left-0 right-0 flex items-center justify-between px-6">
          {/* Slide Indicators */}
          <div className="flex gap-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === current
                    ? "w-12 bg-amber-500"
                    : "w-3 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/20"
            >
              <ChevronRight className="w-6 h-6 rotate-180" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Services Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-amber-900 py-12 relative z-30 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 md:grid-cols-6 gap-6">
          {services.map((s, i) => (
            <Link key={s.name} to={s.link}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex flex-col items-center cursor-pointer"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-2 border border-amber-500/30 shadow-lg backdrop-blur-sm">
                  <s.icon className="w-7 h-7 text-amber-400" />
                </div>
                <p className="text-white font-bold text-[10px] text-center uppercase tracking-wider">
                  {s.name}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
