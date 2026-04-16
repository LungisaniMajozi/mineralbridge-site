import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/27726800416"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white px-6 py-4 rounded-full shadow-2xl hover:bg-green-600 transition-all flex items-center gap-3 font-bold text-base sm:text-lg"
      style={{ minWidth: "220px" }}
    >
      {/* WhatsApp Icon */}
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />

      {/* Text - Always Visible, Never Shrinks */}
      <span className="whitespace-nowrap">How can I help you?</span>
    </motion.a>
  );
}
