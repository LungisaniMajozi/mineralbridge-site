import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Briefcase,
  Building2,
  TrendingUp,
  Handshake,
} from "lucide-react";

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
    <div className="min-h-screen bg-slate-50 pt-20">
      <div
        className="relative h-[40vh] flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(245, 158, 11, 0.9), rgba(217, 119, 6, 0.95)), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920')`,
        }}
      >
        <div className="text-center px-6">
          <span className="inline-block px-4 py-1 bg-white/20 text-white text-sm font-semibold uppercase tracking-wider rounded-full mb-4">
            Our Services
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Advisory Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            I need expert guidance on mining investments in Africa
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
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-amber-100 rounded-xl">
              <Briefcase className="w-8 h-8 text-amber-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Strategic Mining Guidance
            </h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            We provide strategic advice on acquiring mining assets, licenses,
            and companies in Africa. Our advisory team guides investors through
            complex market dynamics, deal structuring, and regulatory
            navigation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advisoryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
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
