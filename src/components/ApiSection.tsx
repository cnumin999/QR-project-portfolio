import { motion } from "framer-motion";
import { Zap } from "lucide-react";

type HttpMethod = "GET" | "POST" | "DELETE";

interface ApiEndpoint {
  method: HttpMethod;
  path: string;
  desc: string;
}

const endpoints: ApiEndpoint[] = [
  { method: "POST", path: "/api/admin/production/serial", desc: "생산 시리얼 저장" },
  { method: "GET", path: "/api/admin/production/list", desc: "생산 목록 조회" },
  { method: "POST", path: "/api/admin/inspection/report", desc: "QC 리포트 저장" },
  { method: "GET", path: "/api/admin/inspection/report/:serial", desc: "QC 리포트 조회" },
  { method: "GET", path: "/api/export/excel/:serial", desc: "엑셀 성적서 다운로드" },
  { method: "GET", path: "/api/scan/qr-scan/:serial", desc: "QR 스캔 (로그 기록 + 리다이렉트)" },
  { method: "GET", path: "/api/product-history/:serial", desc: "제품 통합 이력 조회" },
  { method: "POST", path: "/api/feedback", desc: "피드백 제출" },
  { method: "GET", path: "/api/admin/analysis/keywords", desc: "키워드 분석 결과 조회" },
  { method: "DELETE", path: "/api/admin/production/serial/:serial", desc: "생산 데이터 삭제" },
];

const methodColors: Record<HttpMethod, string> = {
  GET: "bg-emerald-500",
  POST: "bg-violet-500",
  DELETE: "bg-rose-500",
};

export function ApiSection() {
  return (
    <section id="api" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 rounded bg-gradient-to-b from-cyan-400 to-purple-600" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              주요 API 엔드포인트
            </h2>
          </div>
          <p className="text-gray-400 ml-6">RESTful API 설계</p>
        </motion.div>

        <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-6 h-6 text-yellow-400" />
            <h3 className="text-lg font-bold text-white">Express.js Routes</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {endpoints.map((endpoint, index) => (
              <motion.div
                key={endpoint.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="p-4 rounded-xl bg-slate-900/50 border border-white/5 hover:border-cyan-400/30 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${methodColors[endpoint.method]} text-white shrink-0`}>
                    {endpoint.method}
                  </span>
                  <div className="min-w-0">
                    <code className="block text-cyan-400 font-mono text-sm break-all mb-1">
                      {endpoint.path}
                    </code>
                    <p className="text-gray-500 text-xs">{endpoint.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
