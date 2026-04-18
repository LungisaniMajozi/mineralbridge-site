import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
} from "lucide-react";

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
    <div className="min-h-screen bg-[#091123] pt-48 pb-24 selection:bg-amber-500/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/5 to-transparent pointer-events-none" />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start relative z-10">
          
          {/* Left Column: Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-12"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
                <span className="text-sm font-medium text-amber-600 tracking-wide uppercase">Contact Us</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-display tracking-tight">
                Let's start a <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">conversation</span>
              </h1>
              <p className="text-xl text-slate-300 font-light leading-relaxed">
                Whether you’re looking to source minerals, require due diligence, or need strategic advisory, our team of experts is ready to assist.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4 items-start group">
                <div className="p-3 bg-amber-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 font-display">Head Office</h4>
                  <p className="text-slate-300 font-light leading-relaxed">
                    Unit 47 Sandton View Office Park<br />
                    30 Hilltop Street, Lyme Park Ext 4<br />
                    Sandton, 2191
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-center group">
                <div className="p-3 bg-amber-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 font-display">Phone</h4>
                  <a href="tel:+27726800416" className="text-slate-300 hover:text-amber-500 transition-colors font-light">
                    +27 72 680 0416
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center group">
                <div className="p-3 bg-amber-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 font-display">Email</h4>
                  <a href="mailto:info@mineralbridge.africa" className="text-slate-300 hover:text-amber-500 transition-colors font-light">
                    info@mineralbridge.africa
                  </a>
                </div>
              </div>
            </div>

            {/* 🗺️ Map Component */}
            <motion.a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative block rounded-3xl overflow-hidden shadow-xl group h-64 cursor-pointer border border-[#1E293B]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop')`,
                }}
              />
              <div className="absolute inset-0 bg-[#091123]/50 group-hover:bg-[#091123]/40 transition-colors" />

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

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#1E293B] border border-[#1E293B] rounded-[2.5rem] p-8 md:p-12 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-8 font-display">Send us a message</h3>
              
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2 font-display">Message Sent Successfully!</h4>
                  <p className="text-slate-300 font-light max-w-md">
                    Thank you for contacting MineralBridge Africa. Our team will respond within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-300 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#091123] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all font-light"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-300 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#091123] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all font-light"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-300 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-[#091123] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all font-light"
                        placeholder="+27 72 680 0416"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-300 mb-2">Subject *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#091123] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all appearance-none cursor-pointer font-light"
                      >
                        <option value="" disabled className="text-slate-500">Select a topic</option>
                        <option value="sourcing" className="text-white">Mineral Sourcing</option>
                        <option value="due-diligence" className="text-white">Due Diligence</option>
                        <option value="transactions" className="text-white">Transaction Management</option>
                        <option value="advisory" className="text-white">Advisory Services</option>
                        <option value="other" className="text-white">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-300 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-[#091123] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all resize-none font-light"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 text-[#091123] hover:from-amber-400 hover:to-amber-500 font-bold tracking-wide rounded-xl px-8 py-5 transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-6 h-6 animate-spin text-[#091123]" />
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        <div className="mt-20 text-center relative z-10 border-t border-[#1E293B] pt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-slate-400 hover:text-amber-500 font-semibold transition-colors group"
          >
            <div className="p-2 rounded-full bg-[#1E293B] group-hover:bg-amber-500/20 transition-colors">
              <ArrowLeft className="w-4 h-4" /> 
            </div>
            <span>Return to Homepage</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
