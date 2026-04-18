import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Services",
    href: "#",
    dropdown: [
      { name: "Mineral Sourcing", href: "/services/sourcing" },
      { name: "Due Diligence", href: "/services/due-diligence" },
      { name: "Transaction Management", href: "/services/transactions" },
      { name: "Advisory Services", href: "/services/advisory" },
      { name: "Mining Acquisitions", href: "/services/acquisitions" },
      { name: "Investment Advisory", href: "/services/investment" },
    ],
  },
  { name: "Why Us", href: "/why-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
    setMobileOpenDropdown("");
  }, [location]);

  const toggleMobileDropdown = (name) => {
    setMobileOpenDropdown(mobileOpenDropdown === name ? "" : name);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "pt-4 pb-2" : "pt-8 pb-4"
      } px-6 lg:px-12`}
    >
      <div 
        className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 rounded-full border ${
          scrolled 
            ? "bg-[#091123]/95 backdrop-blur-xl border-[#1E293B]/50 shadow-[0_8px_30px_rgb(0,0,0,0.4)] px-6 py-3" 
            : "bg-[#091123]/80 backdrop-blur-md border-white/10 px-8 py-5"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group relative z-50">
          <img 
            src="/logo1.png" 
            alt="MineralBridge Africa" 
            className={`transition-all duration-500 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] ${scrolled ? 'h-16' : 'h-20'}`} 
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-[14px] font-semibold text-slate-300 hover:text-amber-500 transition-colors tracking-wide">
            HOME
          </Link>
          <Link to="/about" className="text-[14px] font-semibold text-slate-300 hover:text-amber-500 transition-colors tracking-wide">
            ABOUT US
          </Link>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-[14px] font-semibold text-slate-300 hover:text-amber-500 transition-colors tracking-wide py-2">
              SERVICES <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-[#0F172A] border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
                >
                  <div className="p-2 flex flex-col gap-1">
                    {navLinks[2].dropdown.map(item => (
                      <Link 
                        key={item.name}
                        to={item.href} 
                        className="block px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-amber-500 hover:bg-slate-800 transition-all font-display"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/why-us" className="text-[14px] font-semibold text-slate-300 hover:text-amber-500 transition-colors tracking-wide">
            WHY US
          </Link>
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link 
            to="/contact" 
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-bold bg-amber-500 text-[#091123] hover:bg-amber-400 transition-all duration-300 shadow-md"
          >
            GET IN TOUCH
          </Link>
          
          <button 
            className="md:hidden relative z-50 p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Legacy Mobile Accordion Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-[120%] left-6 right-6 overflow-hidden bg-[#0F172A] border border-white/10 rounded-2xl shadow-xl"
          >
            <div className="px-6 py-6 space-y-4 relative z-10">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="border-b border-[#1E293B] last:border-0 pb-2"
                >
                  <div className="flex justify-between items-center">
                    <Link
                      to={link.href}
                      onClick={() => !link.dropdown && setIsOpen(false)}
                      className={`text-lg font-medium text-white`}
                    >
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => toggleMobileDropdown(link.name)}
                        className="p-2 text-slate-400"
                      >
                        <ChevronDown 
                           className={`w-5 h-5 transition-transform ${mobileOpenDropdown === link.name ? 'rotate-180' : ''}`} 
                        />
                      </motion.button>
                    )}
                  </div>

                  <AnimatePresence>
                    {link.dropdown && mobileOpenDropdown === link.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden mt-2"
                      >
                        <div className="pl-4 space-y-3 pb-2">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              onClick={() => setIsOpen(false)}
                              className="block text-sm text-slate-400 hover:text-amber-500"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-amber-500 text-[#091123] text-center px-6 py-4 rounded-lg font-bold shadow-lg mt-4"
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
