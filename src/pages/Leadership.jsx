import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Globe } from "lucide-react";

// Placeholder team members
const team = [
  {
    name: "Name Surname",
    title: "Chief Executive Officer",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=750&fit=crop",
    bio: "Bio coming soon. Please update this with the CEO's actual information.",
  },
  {
    name: "Name Surname",
    title: "Managing Director",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=750&fit=crop",
    bio: "Bio coming soon. Please update this with the MD's actual information.",
  },
];

export default function Leadership() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.9)), url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-amber-500/20 text-amber-400 text-sm font-semibold uppercase tracking-wider rounded-full mb-4 border border-amber-500/30">
              Our Team
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Leadership
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the experts behind MineralBridge Africa
            </p>
          </motion.div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl group"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  {member.name}
                </h3>
                <p className="text-amber-600 font-semibold text-sm mb-4">
                  {member.title}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
                <div className="flex gap-4 pt-4 border-t border-gray-100">
                  <a href="#" className="text-gray-400 hover:text-amber-600">
                    <Mail className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-amber-600">
                    <Globe className="w-5 h-5" />
                  </a>
                </div>
              </div>
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
