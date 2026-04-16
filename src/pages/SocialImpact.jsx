import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Users, Globe } from "lucide-react";

export default function SocialImpact() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.9)), url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-amber-500/20 text-amber-400 text-sm font-semibold uppercase tracking-wider rounded-full mb-4 border border-amber-500/30">
              Our Community
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Social Impact
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Creating a positive mark in the communities we serve
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Beyond Mineral Sourcing
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At MineralBridge Africa, we understand that there is more to the
              industry than just trading minerals. We try our hardest to create
              a positive social impact in the mining communities through real
              and genuine participation.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              All of our staff are socially-conscious about how we make our
              mark, aiming to better the world through community development and
              ethical business practices.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">
                    Community Support
                  </h3>
                  <p className="text-sm text-gray-600">
                    We make regular donations to, and raise funds for multiple
                    charities in need that are bettering our community.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">
                    Education & Development
                  </h3>
                  <p className="text-sm text-gray-600">
                    We fund education for students who are unable to afford
                    quality education themselves, ensuring they have a brighter
                    future.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=800&fit=crop"
                alt="Community support"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>
          </motion.div>
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
