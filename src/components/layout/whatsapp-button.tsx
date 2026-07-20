"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

// Pour désactiver ce bouton : commente le <WhatsappButton /> dans src/app/page.tsx
export function WhatsappButton() {
  if (!siteConfig.whatsapp) return null;

  return (
    <motion.a
      href={siteConfig.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-signal text-void shadow-glow-cyan"
    >
      <MessageCircle size={24} fill="currentColor" strokeWidth={0} />
    </motion.a>
  );
}
