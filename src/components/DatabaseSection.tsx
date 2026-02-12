import { motion } from "framer-motion";
import { Database } from "lucide-react";
import { useTheme } from "../App";

const tables = [
  { name: "serial_gen_master", desc: "생산 시리얼 마스터 (엑셀 데이터 기반)" },
  { name: "equipment_master", desc: "QC 검사 마스터 정보" },
  { name: "inspection_1st / 2nd / final", desc: "QC 검사 상세 (부품, 성능, 최종)" },
  { name: "installed_products", desc: "제품 설치/납품 이력" },
  { name: "products", desc: "제품 마스터" },
  { name: "product_categories", desc: "제품 카테고리" },
  { name: "customers", desc: "고객사 정보" },
  { name: "scan_logs", desc: "QR 스캔 이력 (IP, 위치, 시간)" },
  { name: "feedback", desc: "고객 피드백" },
  { name: "analysis_keywords", desc: "NLP 분석 결과 (키워드 빈도)" },
  { name: "validations", desc: "VD(검증) 정보" },
];

const dataCategories = [
  { title: "생산 기초 데이터", items: ["시리얼번호", "모델", "제품군", "고객명", "수주번호", "납기일", "규격", "전기사양", "담당자"], color: "from-violet-500 to-purple-600" },
  { title: "QC 검사 데이터", items: ["검사일", "검사자", "구성품 시리얼", "필터 타입", "제조사", "측정값", "표준값", "최종 판정"], color: "from-emerald-500 to-green-600" },
  { title: "고객 스캔 데이터", items: ["스캔 시간", "GPS 위치", "IP", "디바이스 정보"], color: "from-pink-500 to-rose-600" },
  { title: "고객 피드백 데이터", items: ["피드백 내용", "평점", "GPS", "제출 시간"], color: "from-cyan-500 to-blue-600" },
  { title: "분석 결과 데이터", items: ["키워드", "빈도", "분석 일시"], color: "from-orange-500 to-amber-600" },
];

export function DatabaseSection() {
  const { darkMode } = useTheme();

  return (
    <section id="database" className="py-20 px-4">
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
              데이터 관리 구조
            </h2>
          </div>
          <p className={`ml-6 ${darkMode ? "text-gray-400" : "text-slate-500"}`}>
            모든 데이터는 시리얼 번호를 기준으로 연결됩니다
          </p>
        </motion.div>

        {/* Data Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-12">
          {dataCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-5 rounded-xl backdrop-blur-sm border ${
                darkMode
                  ? "bg-white/5 border-white/10"
                  : "bg-white border-slate-200 shadow-md"
              }`}
            >
              <div className={`w-full h-1 rounded mb-4 bg-gradient-to-r ${category.color}`} />
              <h3 className={`font-bold mb-3 text-sm ${
                darkMode ? "text-white" : "text-slate-900"
              }`}>{category.title}</h3>
              <div className="flex flex-wrap gap-1">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className={`text-xs px-2 py-1 rounded ${
                      darkMode
                        ? "bg-white/5 text-gray-400"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Database Tables */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`p-6 sm:p-8 rounded-2xl backdrop-blur-sm border ${
            darkMode
              ? "bg-white/5 border-white/10"
              : "bg-white border-slate-200 shadow-lg"
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <Database className="w-6 h-6 text-pink-400" />
            <h3 className="text-xl font-bold text-pink-400">주요 테이블 구조</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {tables.map((table, index) => (
              <motion.div
                key={table.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className={`p-4 rounded-xl border-l-4 border-cyan-400 ${
                  darkMode ? "bg-slate-900/50" : "bg-slate-50"
                }`}
              >
                <code className={`block font-mono text-sm mb-1 break-all ${
                  darkMode ? "text-cyan-400" : "text-cyan-600"
                }`}>
                  {table.name}
                </code>
                <p className={`text-xs ${darkMode ? "text-gray-500" : "text-slate-500"}`}>
                  {table.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
