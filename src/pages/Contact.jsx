import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=Unit+47+Sandton+View+Office+Park+30+Hilltop+Street+Lyme+Park+Ext+4+Sandton+2191";

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Hero Section */}
      <div
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.9)), url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-amber-500/20 text-amber-400 text-sm font-semibold uppercase tracking-wider rounded-full mb-4 border border-amber-500/30">
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let us guide you through Africa's mineral landscape
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-600">
                  Thank you for contacting MineralBridge Africa. Our team will
                  respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none font-medium"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none font-medium"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none font-medium"
                      placeholder="+27 72 680 0416"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none font-medium cursor-pointer"
                    >
                      <option value="" disabled className="text-gray-500">
                        Select a topic
                      </option>
                      <option
                        value="sourcing"
                        className="text-gray-900 font-medium"
                      >
                        Mineral Sourcing
                      </option>
                      <option
                        value="due-diligence"
                        className="text-gray-900 font-medium"
                      >
                        Due Diligence
                      </option>
                      <option
                        value="transactions"
                        className="text-gray-900 font-medium"
                      >
                        Transaction Management
                      </option>
                      <option
                        value="advisory"
                        className="text-gray-900 font-medium"
                      >
                        Advisory Services
                      </option>
                      <option
                        value="other"
                        className="text-gray-900 font-medium"
                      >
                        Other
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none resize-none font-medium"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold py-4 rounded-lg text-lg hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5" /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Side: Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Details Card */}
            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-amber-400">
                Contact Details
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-white">Head Office</h3>
                    <p className="text-gray-300 text-sm leading-relaxed font-medium">
                      Unit 47 Sandton View Office Park
                      <br />
                      30 Hilltop Street, Lyme Park Ext 4<br />
                      Sandton, 2191
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-white">Phone</h3>
                    <a
                      href="tel:+27726800416"
                      className="text-gray-300 text-sm hover:text-amber-400 transition-colors font-medium"
                    >
                      +27 72 680 0416
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-white">Email</h3>
                    <a
                      href="mailto:info@mineralbridge.africa"
                      className="text-gray-300 text-sm hover:text-amber-400 transition-colors font-medium"
                    >
                      info@mineralbridge.africa
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 🗺️ NEW: Get Directions Map Component */}
            <motion.a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative block rounded-2xl overflow-hidden shadow-xl group h-64 cursor-pointer"
            >
              {/* Map Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop')`,
                }}
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/40 transition-colors" />

              {/* Center Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold mb-1">Get Directions</h3>
                <p className="text-sm text-gray-200">
                  Click to open in Google Maps
                </p>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
