import { motion } from "framer-motion";
import { QrCode, Menu, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../App";

const navItems = [
  { label: "아키텍처", href: "#architecture" },
  { label: "프로세스", href: "#process" },
  { label: "데이터베이스", href: "#database" },
  { label: "API", href: "#api" },
  { label: "진행현황", href: "#progress" },
  { label: "목표", href: "#goals" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode } = useTheme();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b transition-colors ${
        darkMode
          ? "bg-slate-900/80 border-white/10"
          : "bg-white/80 border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600">
              <QrCode className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              QR Project
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 ${darkMode ? "text-gray-300" : "text-slate-600"}`}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className={`md:hidden overflow-hidden ${
          darkMode ? "bg-slate-900/95" : "bg-white/95"
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`block py-2 ${
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}
