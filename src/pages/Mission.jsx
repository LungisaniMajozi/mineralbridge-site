import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Eye, Target, Award, Heart } from "lucide-react";

export default function Mission() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <div
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.9)), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-amber-500/20 text-amber-400 text-sm font-semibold uppercase tracking-wider rounded-full mb-4 border border-amber-500/30">
              Our Purpose
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Mission & Vision
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Driving sustainable growth through ethical mineral trade
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision Cards */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 rounded-2xl shadow-xl border-t-4 border-amber-500"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-amber-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                To empower international businesses with secure, transparent,
                and efficient access to Africa's mineral wealth through expert
                guidance, comprehensive due diligence, and unwavering commitment
                to ethical trade practices.
              </p>
              <ul className="space-y-3">
                {[
                  "Provide expert mineral sourcing across Africa",
                  "Ensure 100% verification and authenticity",
                  "Deliver end-to-end transaction support",
                  "Build lasting partnerships based on trust",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-gray-600"
                  >
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-10 rounded-2xl shadow-xl border-t-4 border-gray-600"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-gray-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                To be the most trusted bridge connecting global investors with
                ethical and profitable mineral opportunities across Africa,
                setting the standard for integrity and excellence in the
                industry.
              </p>
              <ul className="space-y-3">
                {[
                  "Lead Africa's mineral trade transformation",
                  "Set global standards for ethical sourcing",
                  "Empower local communities through trade",
                  "Create sustainable value for all stakeholders",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-gray-600"
                  >
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 rounded-2xl shadow-xl"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Our Core Values
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "Integrity",
                  desc: "Unwavering commitment to ethical practices and transparency in every transaction",
                },
                {
                  icon: Target,
                  title: "Excellence",
                  desc: "Delivering superior quality services that exceed client expectations consistently",
                },
                {
                  icon: Heart,
                  title: "Impact",
                  desc: "Creating positive social and economic value for African communities",
                },
              ].map((value, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Back Link */}
          <div className="mt-16 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
