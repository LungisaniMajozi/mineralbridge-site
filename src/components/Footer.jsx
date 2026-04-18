import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#091123] text-white border-t border-[#1E293B] relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-1 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 pr-4">
            <Link to="/" className="inline-block mb-6 relative">
              <img
                src="/logo1.png"
                alt="MineralBridge Africa"
                className="h-24 w-auto drop-shadow-md"
              />
            </Link>
            <p className="text-slate-400 text-[15px] leading-relaxed pr-4 max-w-sm">
              Mitigating Risk, Combating Fraud, Delivering Trust. Expert
              guidance for international buyers navigating Africa's mineral
              wealth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider font-display">
              Company
            </h4>
            <ul className="space-y-4 text-[15px] text-slate-400">
              <li>
                <Link to="/about" className="hover:text-amber-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-amber-500/0 group-hover:bg-amber-500 transition-all" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/why-us" className="hover:text-amber-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-amber-500/0 group-hover:bg-amber-500 transition-all" />
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-amber-500/0 group-hover:bg-amber-500 transition-all" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider font-display">
              Expertise
            </h4>
            <ul className="space-y-4 text-[15px] text-slate-400">
              <li>
                <Link to="/services/sourcing" className="hover:text-amber-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-amber-500/0 group-hover:bg-amber-500 transition-all" />
                  Mineral Sourcing
                </Link>
              </li>
              <li>
                <Link to="/services/due-diligence" className="hover:text-amber-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-amber-500/0 group-hover:bg-amber-500 transition-all" />
                  Due Diligence
                </Link>
              </li>
              <li>
                <Link to="/services/transactions" className="hover:text-amber-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-amber-500/0 group-hover:bg-amber-500 transition-all" />
                  Transaction Management
                </Link>
              </li>
              <li>
                <Link to="/services/advisory" className="hover:text-amber-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-amber-500/0 group-hover:bg-amber-500 transition-all" />
                  Advisory Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider font-display">
              Connect
            </h4>
            <address className="not-italic space-y-5 text-[15px] text-slate-400">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Unit 47 Sandton View Office<br />
                  30 Hilltop Street, Lyme Park<br />
                  Sandton, 2191
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <a href="tel:+27726800416" className="hover:text-amber-500 transition-colors">
                  +27 72 680 0416
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <a href="mailto:info@mineralbridge.africa" className="hover:text-amber-500 transition-colors">
                  info@mineralbridge.africa
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#1E293B] flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] text-slate-500">
          <p>
            © {new Date().getFullYear()} MineralBridge Africa LTD. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            <Link to="/terms" className="hover:text-amber-500 transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/popia" className="hover:text-amber-500 transition-colors">
              POPIA Policies
            </Link>
            <Link to="/bee" className="hover:text-amber-500 transition-colors">
              BEE Affidavit
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
