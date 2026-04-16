import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img
              src="/logo.png"
              alt="MineralBridge Africa"
              className="h-10 w-auto mb-4 brightness-200"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Mitigating Risk, Combating Fraud, Delivering Trust. Expert
              guidance for international buyers navigating Africa's mineral
              wealth.
            </p>
          </div>
          <div>
            <h4 className="text-amber-400 font-bold mb-4 text-sm uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/why-us" className="hover:text-white transition">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-amber-400 font-bold mb-4 text-sm uppercase">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  to="/services/sourcing"
                  className="hover:text-white transition"
                >
                  Mineral Sourcing
                </Link>
              </li>
              <li>
                <Link
                  to="/services/due-diligence"
                  className="hover:text-white transition"
                >
                  Due Diligence
                </Link>
              </li>
              <li>
                <Link
                  to="/services/transactions"
                  className="hover:text-white transition"
                >
                  Transaction Management
                </Link>
              </li>
              <li>
                <Link
                  to="/services/advisory"
                  className="hover:text-white transition"
                >
                  Advisory Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-amber-400 font-bold mb-4 text-sm uppercase">
              Contact
            </h4>
            <address className="not-italic space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-0.5" />
                <p>
                  Unit 47 Sandton View Office Park
                  <br />
                  30 Hilltop Street, Lyme Park Ext 4<br />
                  Sandton, 2191
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <a href="tel:+27726800416" className="hover:text-white">
                  +27 72 680 0416
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <a
                  href="mailto:info@mineralbridge.africa"
                  className="hover:text-white"
                >
                  info@mineralbridge.africa
                </a>
              </div>
            </address>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} MineralBridge Africa LTD. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/terms" className="hover:text-white transition">
              Terms & Conditions
            </Link>
            <Link to="/popia" className="hover:text-white transition">
              POPIA Policies
            </Link>
            <Link to="/bee" className="hover:text-white transition">
              BEE Affidavit
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
