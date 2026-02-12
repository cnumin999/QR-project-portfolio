import { motion } from "framer-motion";
import { QrCode, ArrowDown, Calendar, Building2 } from "lucide-react";
import { useTheme } from "../App";

export function Hero() {
  const { darkMode } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl ${
          darkMode ? "bg-cyan-500/20" : "bg-cyan-500/10"
        }`} />
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl ${
          darkMode ? "bg-purple-500/20" : "bg-purple-500/10"
        }`} />
      </div>

      {/* Grid Pattern */}
      <div className={`absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px] ${
        darkMode ? "opacity-50" : "opacity-100"
      }`} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 ${
            darkMode
              ? "bg-white/5 border-white/10"
              : "bg-slate-100 border-slate-200"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className={`text-sm ${darkMode ? "text-gray-300" : "text-slate-600"}`}>
            인턴십 프로젝트
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            QR 기반 제품 이력
          </span>
          <br />
          <span className={darkMode ? "text-white" : "text-slate-900"}>추적 시스템</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={`text-lg sm:text-xl max-w-3xl mx-auto mb-8 ${
            darkMode ? "text-gray-400" : "text-slate-600"
          }`}
        >
          제품 생산부터 고객 사용까지 전 과정 데이터를 축적하고,
          <br className="hidden sm:block" />
          실시간 분석으로 품질 개선 및 고객 서비스에 활용하는 통합 플랫폼
        </motion.p>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
            darkMode
              ? "bg-white/5 border-white/10"
              : "bg-white border-slate-200 shadow-sm"
          }`}>
            <Calendar className="w-4 h-4 text-cyan-500" />
            <span className={`text-sm ${darkMode ? "text-gray-300" : "text-slate-600"}`}>
              2025.12 - 2026.01
            </span>
          </div>
          <div className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
            darkMode
              ? "bg-white/5 border-white/10"
              : "bg-white border-slate-200 shadow-sm"
          }`}>
            <Building2 className="w-4 h-4 text-purple-500" />
            <span className={`text-sm ${darkMode ? "text-gray-300" : "text-slate-600"}`}>
              기업 인턴십
            </span>
          </div>
        </motion.div>

        {/* Floating QR Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "spring" }}
          className="relative inline-block mb-12"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-3xl blur-xl opacity-50 animate-pulse" />
          <div className={`relative p-8 rounded-3xl border animate-float ${
            darkMode
              ? "bg-gradient-to-br from-slate-800 to-slate-900 border-white/10"
              : "bg-white border-slate-200 shadow-xl"
          }`}>
            <QrCode className={`w-20 h-20 ${darkMode ? "text-white" : "text-slate-700"}`} />
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className={`w-6 h-6 ${darkMode ? "text-gray-400" : "text-slate-400"}`} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
