import { motion } from "framer-motion";
import { Database, Route, Bell, TrendingUp, Puzzle } from "lucide-react";

const goals = [
  {
    icon: Database,
    title: "데이터 축적",
    desc: "생산/QC/피드백 데이터 DB화",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Route,
    title: "추적성 확보",
    desc: "제품 전 과정 이력 관리",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: Bell,
    title: "사전 알림",
    desc: "교체주기 도래 시 알림",
    color: "from-orange-500 to-amber-600",
  },
  {
    icon: TrendingUp,
    title: "패턴 분석",
    desc: "불량 원인 추적 및 예측",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Puzzle,
    title: "플랫폼 사업화",
    desc: "데이터/기술 수수료 비즈니스",
    color: "from-pink-500 to-rose-600",
  },
];

const expectedEffects = [
  "제품 시리얼 단위 전 과정 추적으로 불량 원인 역추적 가능",
  "특정 지역, 특정 생산자의 결함 패턴 파악",
  "고객에게 교체 주기 사전 알림 → 선제적 서비스 제공",
  "AS 유형별 담당자 자동 배정 (AS 데이터 → AS 담당자, VD 데이터 → VD 담당자)",
  "축적된 데이터의 외부 제공을 통한 수익 모델 확보 가능성",
];

export function Goals() {
  return (
    <section
      id="goals"
      className="py-20 px-4 text-black dark:text-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 rounded bg-gradient-to-b from-cyan-400 to-purple-600" />
            <h2 className="text-2xl sm:text-3xl font-bold">
              프로젝트 최종 목표
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 ml-6">
            Project Goals & Expected Effects
          </p>
        </motion.div>

        {/* Goals Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-8 sm:p-12 rounded-3xl 
                     bg-gray-100 dark:bg-gradient-to-br 
                     dark:from-purple-500/20 dark:to-cyan-500/20
                     border border-gray-200 dark:border-white/10 
                     mb-12 overflow-hidden"
        >
          {/* Background Glow (다크모드에서만 표시) */}
          <div className="hidden dark:block absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="hidden dark:block absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />

          <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {goals.map((goal, index) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl 
                              bg-gradient-to-br ${goal.color} 
                              flex items-center justify-center 
                              transform group-hover:rotate-6 transition-transform`}
                >
                  <goal.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold mb-1">
                  {goal.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {goal.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Expected Effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 sm:p-8 rounded-2xl 
                     bg-gray-100 dark:bg-white/5 
                     border border-gray-200 dark:border-white/10"
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
            기대 효과
          </h3>

          <div className="space-y-4">
            {expectedEffects.map((effect, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-xl 
                           bg-white dark:bg-slate-900/50 
                           hover:bg-gray-200 dark:hover:bg-slate-900/70 
                           transition-colors"
              >
                <span className="w-6 h-6 rounded-full 
                                 bg-gradient-to-r from-cyan-400 to-purple-500 
                                 flex items-center justify-center 
                                 text-xs font-bold text-slate-900 shrink-0">
                  {index + 1}
                </span>
                <p className="text-gray-700 dark:text-gray-300">
                  {effect}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
