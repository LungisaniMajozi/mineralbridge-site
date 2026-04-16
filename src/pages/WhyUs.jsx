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
    <div className="min-h-screen bg-slate-50 pt-20">
      <div
        className="relative h-[40vh] flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(245, 158, 11, 0.9), rgba(217, 119, 6, 0.95)), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920')`,
        }}
      >
        <div className="text-center">
          <span className="inline-block px-4 py-1 bg-white/20 text-white text-sm font-semibold uppercase tracking-wider rounded-full mb-4">
            Why Choose Us
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Why Choose Us?
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col gap-4"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <item.icon className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
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
