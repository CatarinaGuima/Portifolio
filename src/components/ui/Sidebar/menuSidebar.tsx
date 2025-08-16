"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";

interface MenuSidebarProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
  activeSection: string;
}

export default function MenuSidebar({
  open,
  onClose,
  links,
  activeSection,
}: MenuSidebarProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle focus and keyboard navigation
  useEffect(() => {
    if (open && menuRef.current) {
      menuRef.current.focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay with click outside to close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Sidebar */}
          <motion.div
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            tabIndex={-1}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              bounce: 0.1
            }}
            className="fixed top-0 right-0 w-72 h-full bg-white dark:bg-gray-900 z-50 shadow-2xl md:hidden focus:outline-none"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold">Menu</h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Fechar menu"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            <nav className="p-4">
              <ul className="space-y-3">
                {links.map((link) => (
                  <motion.li 
                    key={link.href}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <a
                      href={link.href}
                      onClick={onClose}
                      className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                        activeSection === link.href
                          ? "bg-[#8f00ff]/10 text-[#8f00ff] dark:text-[#a6d3ff] font-semibold"
                          : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200"
                      }`}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}