import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Globe, TrendingUp, Users } from "lucide-react";

const regions = [
  {
    name: "East Africa",
    countries: "Kenya, Tanzania, Uganda, Rwanda",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&h=600&fit=crop",
    description:
      "Rich in gemstones, gold, and rare earth minerals with emerging mining sectors.",
  },
  {
    name: "Central Africa",
    countries: "DRC, Zambia, Angola",
    image:
      "https://images.unsplash.com/photo-1579566346927-c68383817a25?w=800&h=600&fit=crop",
    description:
      "World's largest cobalt producer and significant copper deposits.",
  },
  {
    name: "Southern Africa",
    countries: "South Africa, Botswana, Zimbabwe, Mozambique",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    description:
      "Platinum, diamonds, gold, and coal with established mining infrastructure.",
  },
];

export default function RegionalExpertise() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <div
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.9)), url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1920')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-amber-500/20 text-amber-400 text-sm font-semibold uppercase tracking-wider rounded-full mb-4 border border-amber-500/30">
              Our Coverage
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Regional Expertise
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Deep knowledge across East, Central & Southern Africa
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Comprehensive African Mining Knowledge
            </h2>
            <p className="text-gray-600 leading-relaxed">
              With years of experience and a deep understanding of local
              markets, we navigate complex regulatory frameworks, mitigate
              risks, and facilitate successful deals across the continent. Our
              network spans 12+ African countries with on-the-ground expertise.
            </p>
          </motion.div>

          {/* Regions Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {regions.map((region, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-xl"
              >
                <div className="aspect-[4/3]">
                  <img
                    src={region.image}
                    alt={region.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <MapPin className="w-6 h-6 text-amber-400 mb-2" />
                  <h3 className="text-xl font-bold mb-1">{region.name}</h3>
                  <p className="text-sm text-gray-300 mb-2">
                    {region.countries}
                  </p>
                  <p className="text-sm text-gray-200">{region.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-2xl p-10"
          >
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { icon: Globe, value: "12+", label: "Countries Covered" },
                { icon: Users, value: "50+", label: "Local Partners" },
                { icon: TrendingUp, value: "15+", label: "Years Experience" },
                { icon: MapPin, value: "500+", label: "Successful Deals" },
              ].map((stat, idx) => (
                <div key={idx}>
                  <stat.icon className="w-10 h-10 text-amber-400 mx-auto mb-3" />
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
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
