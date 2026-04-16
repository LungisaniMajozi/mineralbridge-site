import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Globe } from "lucide-react";

export default function MineralSourcing() {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div
        className="relative h-[40vh] flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(245, 158, 11, 0.9), rgba(217, 119, 6, 0.95)), url('https://images.unsplash.com/photo-1579566346927-c68383817a25?w=1920')`,
        }}
      >
        <div className="text-center px-6">
          <span className="inline-block px-4 py-1 bg-white/20 text-white text-sm font-semibold uppercase tracking-wider rounded-full mb-4">
            Our Services
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            International Mineral Sourcing
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            I need to connect with reputable mineral suppliers in Africa
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 bg-white text-amber-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition"
          >
            MORE INFO
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-amber-100 rounded-xl">
              <Globe className="w-8 h-8 text-amber-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Connecting Buyers & Suppliers
            </h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            We identify and connect buyers with reputable suppliers,
            facilitating access to high-quality minerals. Our network ensures
            you gain direct access to verified sources across East, Central, and
            Southern Africa.
          </p>
        </motion.div>
        <div className="mt-16 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
