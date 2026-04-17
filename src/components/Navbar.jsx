import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Who We Are",
    dropdown: [
      { name: "About Us", href: "/about" },
      { name: "Why Choose Us", href: "/why-us" },
    ],
  },
  {
    name: "What We Do",
    dropdown: [
      { name: "Mineral Sourcing", href: "/services/sourcing" },
      { name: "Due Diligence", href: "/services/due-diligence" },
      { name: "Transaction Management", href: "/services/transactions" },
      { name: "Advisory Services", href: "/services/advisory" },
      { name: "Mining Acquisitions", href: "/services/acquisitions" },
      { name: "Investment Advisory", href: "/services/investment" },
    ],
  },
  { name: "Connect", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setMobileOpenDropdown(null);
    setActiveDropdown(null);
  }, [location]);

  const toggleMobileDropdown = (name) => {
    setMobileOpenDropdown(mobileOpenDropdown === name ? null : name);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-amber-500/20 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flexible height container that adjusts to logo */}
        <div className="flex justify-between items-center py-4 lg:py-6">
          {/* EXTRA LARGE LOGO */}
          <Link to="/" className="flex items-center z-10">
            <motion.img
              whileHover={{ scale: 1.02 }}
              src="/logo1.png"
              alt="MineralBridge Africa"
              // Much bigger: h-20 (80px) on mobile, h-24 (96px) on desktop
              className="h-20 md:h-24 lg:h-28 w-auto object-contain drop-shadow-lg"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() =>
                  link.dropdown && setActiveDropdown(link.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.href}
                  className={`flex items-center gap-1 px-4 py-2 text-base font-semibold transition-all rounded-lg ${
                    activeDropdown === link.name
                      ? "text-amber-400 bg-amber-500/10"
                      : "text-gray-300 hover:text-amber-400 hover:bg-white/5"
                  }`}
                >
                  <span>{link.name}</span>
                  {link.dropdown && (
                    <motion.svg
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === link.name ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  )}
                </Link>

                {/* Desktop Dropdown */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-xl shadow-2xl border border-amber-500/20 py-3 overflow-hidden z-50"
                    >
                      {link.dropdown.map((item, idx) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <Link
                            to={item.href}
                            className="block px-5 py-2.5 text-sm text-gray-300 hover:bg-amber-500/10 hover:text-amber-400 transition-all border-l-2 border-transparent hover:border-amber-500"
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* CTA Button - Bright Orange */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="ml-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3.5 rounded-lg text-sm font-bold shadow-lg hover:shadow-amber-500/30 transition-all border border-amber-400/20"
              >
                How can I help you?
              </Link>
            </motion.div>
          </div>

          {/* Mobile Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-amber-400 hover:bg-amber-500/10 transition z-10"
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-slate-800 border-t border-amber-500/20"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="border-b border-gray-700 last:border-0 pb-2"
                >
                  <div className="flex justify-between items-center">
                    <Link
                      to={link.href}
                      onClick={() => !link.dropdown && setIsOpen(false)}
                      className="text-lg font-semibold text-gray-200 hover:text-amber-400"
                    >
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <button
                        onClick={() => toggleMobileDropdown(link.name)}
                        className="p-2 text-amber-400"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                  <AnimatePresence>
                    {link.dropdown && mobileOpenDropdown === link.name && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden mt-2 pl-4 space-y-3"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-sm text-gray-400 hover:text-amber-400"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-center px-6 py-4 rounded-lg font-bold shadow-lg mt-4"
              >
                How can I help you?
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
