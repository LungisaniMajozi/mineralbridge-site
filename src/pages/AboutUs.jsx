import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div
        className="relative h-[40vh] flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(245, 158, 11, 0.9), rgba(217, 119, 6, 0.95)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920')`,
        }}
      >
        <div className="text-center">
          <span className="inline-block px-4 py-1 bg-white/20 text-white text-sm font-semibold uppercase tracking-wider rounded-full mb-4">
            Who We Are
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            About Us
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            At MineralBridge Africa LTD, we specialize in providing expert
            consulting services to international buyers seeking to acquire
            minerals in East, Central, and Southern Africa. Our team of seasoned
            professionals possesses extensive knowledge of the region's mining
            industry, ensuring seamless transactions and tailored support.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            With years of experience and a deep understanding of the local
            market, we navigate complex regulatory frameworks, mitigate risks,
            and facilitate successful deals. We understand the importance of
            getting the right resources in the right place at the right time.
          </p>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Our Core Services
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "International Mineral Sourcing",
                "Due Diligence",
                "Transaction Management",
                "Advisory Services",
                "Mining Acquisitions",
                "Investment Advisory",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <span className="font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
