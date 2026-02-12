import { useState, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Architecture } from "./components/Architecture";
import { ProcessFlow } from "./components/ProcessFlow";
import { DatabaseSection } from "./components/DatabaseSection";
import { ApiSection } from "./components/ApiSection";
import { ProgressSection } from "./components/ProgressSection";
import { TechStack } from "./components/TechStack";
import { Goals } from "./components/Goals";
import { Footer } from "./components/Footer";

// Theme Context
interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  darkMode: true,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div
        className={`min-h-screen transition-colors duration-500 ${
          darkMode
            ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
            : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-slate-900"
        }`}
      >
        {/* Theme Toggle */}
        <motion.button
          onClick={toggleTheme}
          className={`fixed top-6 right-6 z-50 p-3 rounded-full backdrop-blur-md border transition-colors ${
            darkMode
              ? "bg-white/10 border-white/20 hover:bg-white/20"
              : "bg-slate-900/10 border-slate-900/20 hover:bg-slate-900/20"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {darkMode ? (
              <motion.div
                key="sun"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <Sun className="w-5 h-5 text-yellow-400" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <Moon className="w-5 h-5 text-slate-700" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        <Header />
        <Hero />
        <TechStack />
        <Architecture />
        <ProcessFlow />
        <DatabaseSection />
        <ApiSection />
        <ProgressSection />
        <Goals />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
