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

// Diamond clip-path
const diamondClip = "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)";

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

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-900">
      {/*  LAYER 1: Background Image (Blended) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {/* Color Overlay: Mixes the image with your Gold/Orange brand colors */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/80 via-orange-500/85 to-amber-700/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* 🔵 LAYER 2: Dot Pattern Texture */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* 🟢 LAYER 3: Content */}
      <div className="relative z-20 flex flex-col justify-between min-h-screen px-6 pt-20 pb-12 lg:py-0">
        {/* Top Section: Text */}
        <div className="flex flex-col items-start justify-center space-y-6 lg:h-screen lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="w-full lg:col-span-1 space-y-6 max-w-2xl">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-lg leading-tight"
            >
              {slide.title}
            </motion.h1>

            {/* Quotes & Problem */}
            <div className="relative space-y-4">
              <div className="flex gap-2 -ml-1">
                <svg
                  className="w-10 h-10 md:w-16 md:h-16 text-blue-700 drop-shadow-md"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <svg
                  className="w-10 h-10 md:w-16 md:h-16 text-blue-700 drop-shadow-md"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
                </svg>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-3xl font-bold text-white leading-tight drop-shadow-sm"
              >
                {slide.problem}
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-base md:text-lg text-white/90 font-medium leading-relaxed"
              >
                {slide.tagline}
              </motion.p>
            </div>

            {/* MORE INFO Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to={slide.link}
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-xl hover:bg-gray-50 transition-all active:scale-95"
              >
                <span>MORE INFO</span>
                <ChevronRight className="w-6 h-6" />
              </Link>
            </motion.div>
          </div>

          {/* Desktop Diamond Image */}
          <div className="hidden lg:flex justify-center items-center h-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-[450px] h-[450px]"
            >
              {/* Outer Diamond Frame */}
              <div
                className="absolute inset-0 bg-white/20 backdrop-blur-sm border-4 border-white/30"
                style={{ clipPath: diamondClip }}
              />
              {/* Inner Diamond Image */}
              <div
                className="absolute inset-6 bg-white shadow-2xl"
                style={{ clipPath: diamondClip }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          <div className="absolute right-4 top-1/3 flex flex-col items-center gap-4 lg:hidden z-30">
            <button
              onClick={next}
              className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="flex flex-col gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-2 rounded-full transition-all ${idx === current ? "h-10 bg-white" : "h-2 bg-white/40"}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Diamond Image (Bottom) */}
        <div className="lg:hidden relative flex justify-center mt-8 mb-4 z-20">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="relative w-56 h-56"
          >
            <div
              className="absolute inset-0 bg-white/30 backdrop-blur-sm border-4 border-white/40"
              style={{ clipPath: diamondClip }}
            />
            <div
              className="absolute inset-3 bg-white shadow-xl"
              style={{ clipPath: diamondClip }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Bar */}
      <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 py-12 relative z-30 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 md:grid-cols-6 gap-6">
          {services.map((s, i) => (
            <Link key={s.name} to={s.link}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center cursor-pointer"
              >
                <div className="w-14 h-14 bg-white/15 rounded-xl flex items-center justify-center mb-2 border border-white/20 shadow-lg backdrop-blur-sm">
                  <s.icon className="w-7 h-7 text-white drop-shadow-md" />
                </div>
                <p className="text-white font-bold text-[10px] text-center uppercase tracking-wider drop-shadow-sm">
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
