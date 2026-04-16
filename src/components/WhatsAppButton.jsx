import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "+27123456789"; // Replace with actual number
  const message = "Hello MineralBridge Africa, I'm interested in your services";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-2xl hover:bg-green-600 transition-colors"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-semibold hidden sm:block">How can I help you?</span>
    </motion.a>
  );
}
