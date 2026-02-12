import { motion } from "framer-motion";
import { Users, Server, Database, Brain, ArrowRight, ArrowLeftRight } from "lucide-react";
import { useTheme } from "../App";

const archItems = [
  {
    icon: Users,
    title: "사용자 (Client)",
    desc: "웹 브라우저\n생산 관리자 / QC 검사자 / 고객",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Server,
    title: "웹 서버",
    desc: "Node.js / Express\nAPI 처리, 비즈니스 로직",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: Database,
    title: "데이터베이스",
    desc: "MySQL\n데이터 영구 저장",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: Brain,
    title: "분석 엔진",
    desc: "Python\nNLP 키워드 분석",
    gradient: "from-cyan-500 to-blue-600",
  },
];

export function Architecture() {
  const { darkMode } = useTheme();

  return (
    <section id="architecture" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 rounded bg-gradient-to-b from-cyan-400 to-purple-600" />
            <h2 className={`text-2xl sm:text-3xl font-bold ${
              darkMode ? "text-white" : "text-slate-900"
            }`}>
              전체 시스템 아키텍처
            </h2>
          </div>
          <p className={`ml-6 ${darkMode ? "text-gray-400" : "text-slate-500"}`}>Overview</p>
        </motion.div>

        <div className={`relative p-6 sm:p-10 rounded-2xl backdrop-blur-sm border ${
          darkMode
            ? "bg-white/5 border-white/10"
            : "bg-white border-slate-200 shadow-lg"
        }`}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {archItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="w-full lg:flex-1 flex flex-col lg:flex-row items-center gap-4"
              >
                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`w-full p-6 rounded-xl bg-gradient-to-br ${item.gradient} text-white text-center`}
                >
                  <item.icon className="w-12 h-12 mx-auto mb-4 opacity-90" />
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90 whitespace-pre-line">{item.desc}</p>
                </motion.div>

                {/* Arrow */}
                {index < archItems.length - 1 && (
                  <div className={`hidden lg:flex items-center justify-center px-2 ${
                    darkMode ? "text-cyan-400" : "text-cyan-600"
                  }`}>
                    {index === archItems.length - 2 ? (
                      <ArrowLeftRight className="w-8 h-8 animate-pulse" />
                    ) : (
                      <ArrowRight className="w-8 h-8 animate-pulse" />
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
