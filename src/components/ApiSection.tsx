import { motion } from "framer-motion";
import { Globe } from "lucide-react";

interface ApiSectionProps {
  darkMode: boolean;
}

const apis = [
  { method: "POST", path: "/api/admin/production/serial", desc: "생산 시리얼 저장" },
  { method: "GET", path: "/api/admin/production/list", desc: "생산 목록 조회" },
  { method: "POST", path: "/api/admin/inspection/report", desc: "QC 리포트 저장" },
  { method: "GET", path: "/api/admin/inspection/report/:serial", desc: "QC 리포트 조회" },
  { method: "GET", path: "/api/export/excel/:serial", desc: "엑셀 성적서 다운로드" },
  { method: "GET", path: "/api/scan/qr-scan/:serial", desc: "QR 스캔 처리" },
  { method: "GET", path: "/api/product-history/:serial", desc: "제품 이력 조회" },
  { method: "POST", path: "/api/feedback", desc: "피드백 제출" },
  { method: "GET", path: "/api/admin/analysis/keywords", desc: "키워드 분석 결과" },
  { method: "DELETE", path: "/api/admin/production/serial/:serial", desc: "생산 데이터 삭제" },
];

const methodColors: Record<string, string> = {
  GET: "bg-emerald-500",
  POST: "bg-blue-500",
  DELETE: "bg-rose-500",
};

export function ApiSection({ darkMode }: ApiSectionProps) {
  return (
    <section className={`py-20 ${darkMode ? "" : ""}`}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            API 엔드포인트
          </h2>
          <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
            주요 REST API 목록
          </p>
        </motion.div>

        <motion.div
          className={`p-8 rounded-3xl ${
            darkMode
              ? "bg-slate-800/50 border border-slate-700/50"
              : "bg-white border border-slate-200 shadow-xl"
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Globe className={darkMode ? "text-cyan-400" : "text-cyan-600"} />
            <h3
              className={`text-xl font-bold ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              RESTful API
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {apis.map((api, index) => (
              <motion.div
                key={api.path}
                className={`p-4 rounded-xl ${
                  darkMode
                    ? "bg-slate-900/50 hover:bg-slate-900/80"
                    : "bg-slate-50 hover:bg-slate-100"
                } transition-colors`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`px-2.5 py-1 rounded text-xs font-bold text-white ${
                      methodColors[api.method]
                    }`}
                  >
                    {api.method}
                  </span>
                  <span
                    className={`text-xs ${
                      darkMode ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    {api.desc}
                  </span>
                </div>
                <code
                  className={`text-sm font-mono break-all ${
                    darkMode ? "text-cyan-400" : "text-cyan-600"
                  }`}
                >
                  {api.path}
                </code>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
