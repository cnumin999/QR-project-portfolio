import { motion } from "framer-motion";
import { Database, Route, Bell, TrendingUp, Puzzle } from "lucide-react";

interface GoalsProps {
  darkMode: boolean;
}

const goals = [
  {
    icon: Database,
    title: "데이터 축적",
    description: "생산/QC/피드백 데이터 DB화",
  },
  {
    icon: Route,
    title: "추적성 확보",
    description: "제품 전 과정 이력 관리",
  },
  {
    icon: Bell,
    title: "사전 알림",
    description: "교체주기 도래 시 알림",
  },
  {
    icon: TrendingUp,
    title: "패턴 분석",
    description: "불량 원인 추적 및 예측",
  },
  {
    icon: Puzzle,
    title: "플랫폼 사업화",
    description: "데이터/기술 수수료 비즈니스",
  },
];

export function Goals({ darkMode }: GoalsProps) {
  return (
    <section className={`py-20 ${darkMode ? "" : ""}`}>
      <div className="container mx-auto px-6">
        <motion.div
          className={`p-10 rounded-3xl ${
            darkMode
              ? "bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-pink-500/10 border border-white/10"
              : "bg-gradient-to-r from-purple-50 via-cyan-50 to-pink-50 border border-slate-200"
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className={`text-3xl md:text-4xl font-bold text-center mb-10 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              프로젝트 최종 목표
            </span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {goals.map((goal, index) => (
              <motion.div
                key={goal.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                    darkMode
                      ? "bg-slate-800/80 border border-slate-700"
                      : "bg-white border border-slate-200 shadow-md"
                  }`}
                  whileHover={{ scale: 1.1, y: -3 }}
                >
                  <goal.icon
                    className={`w-8 h-8 ${
                      darkMode ? "text-cyan-400" : "text-cyan-600"
                    }`}
                  />
                </motion.div>
                <h3
                  className={`font-bold mb-1 ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  {goal.title}
                </h3>
                <p
                  className={`text-sm ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {goal.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
