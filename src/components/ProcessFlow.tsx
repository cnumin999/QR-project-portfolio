import { motion } from "framer-motion";
import { Package, CheckCircle, QrCode, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../App";

type StepType = "input" | "request" | "process" | "save" | "result" | "trigger";

interface Step {
  type: StepType;
  text: string;
  detail?: string;
}

interface Process {
  id: string;
  icon: typeof Package;
  title: string;
  subtitle: string;
  purpose: string;
  gradient: string;
  steps: Step[];
}

const processes: Process[] = [
  {
    id: "production",
    icon: Package,
    title: "A. 생산 시리얼 생성 및 관리",
    subtitle: "Production",
    purpose: "생산 계획을 입력하고 시리얼 번호를 생성하여 DB에 저장",
    gradient: "from-violet-500 to-purple-600",
    steps: [
      { type: "input", text: "관리자가 웹 페이지에서 제품군, 모델명, 수량, 담당자 입력" },
      { type: "request", text: "API 호출", detail: "POST /api/admin/production/serial" },
      { type: "process", text: "서버에서 중복 확인 후 데이터 가공 (날짜, 시리얼 번호 생성)" },
      { type: "save", text: "DB에 생산 정보 저장", detail: "INSERT/UPDATE → serial_gen_master" },
      { type: "result", text: "저장 완료 메시지 반환 및 목록 갱신" },
    ],
  },
  {
    id: "qc",
    icon: CheckCircle,
    title: "B. QC 성적서 등록",
    subtitle: "Quality Control",
    purpose: "제품 검사 결과를 저장하고, 엑셀 성적서를 생성할 준비를 함",
    gradient: "from-emerald-500 to-green-600",
    steps: [
      { type: "input", text: "검사자가 웹 페이지에서 1차/2차/최종 검사 결과 입력" },
      { type: "request", text: "API 호출", detail: "POST /api/admin/inspection/report" },
      { type: "save", text: "검사 마스터 정보 저장", detail: "INSERT/UPDATE → equipment_master" },
      { type: "save", text: "상세 검사 수치 저장", detail: "DELETE + INSERT → inspection_1st, inspection_2nd, inspection_final" },
      { type: "process", text: "QR 연동을 위해 제품 정보 자동 등록", detail: "INSERT/UPDATE → installed_products" },
      { type: "result", text: "QC 상태를 '완료'로 변경", detail: "UPDATE serial_gen_master SET qc_inspection = '완료'" },
    ],
  },
  {
    id: "qrscan",
    icon: QrCode,
    title: "C. QR 스캔 및 추적",
    subtitle: "QR Scan & Tracking",
    purpose: "고객이 QR을 찍었을 때 로그를 남기고 상세 정보를 보여줌",
    gradient: "from-pink-500 to-rose-600",
    steps: [
      { type: "input", text: "사용자가 스마트폰으로 QR 코드 스캔", detail: "http://서버주소/api/scan/qr-scan/:serial_no" },
      { type: "process", text: "서버에서 접속자 IP, 위치(GeoIP), 디바이스 정보 파싱" },
      { type: "save", text: "스캔 이력 저장", detail: "INSERT → scan_logs" },
      { type: "process", text: "사용자를 제품 상세 페이지로 리다이렉트", detail: "Redirect → serial_detail.html" },
      { type: "result", text: "상세 페이지 로딩 시 제품 정보 조회 후 화면 표시", detail: "GET /api/product-history/:serial" },
    ],
  },
  {
    id: "feedback",
    icon: MessageCircle,
    title: "D. 고객 피드백 및 분석",
    subtitle: "Feedback Loop",
    purpose: "고객의 불만/의견을 접수하고 Python으로 분석",
    gradient: "from-cyan-500 to-blue-600",
    steps: [
      { type: "input", text: "고객이 상세 페이지에서 피드백(내용, 별점) 작성 후 전송" },
      { type: "request", text: "API 호출", detail: "POST /api/feedback" },
      { type: "save", text: "피드백 데이터 저장", detail: "INSERT → feedback, service_history" },
      { type: "trigger", text: "서버가 백그라운드에서 Python 스크립트 실행", detail: "spawn('python', ['run_analysis.py'])" },
      { type: "process", text: "Python이 DB에서 최근 피드백을 읽어 형태소 분석(soynlp) 수행" },
      { type: "result", text: "분석된 키워드 빈도수를 DB에 저장 (대시보드용)", detail: "INSERT/UPDATE → analysis_keywords" },
    ],
  },
];

const stepTypeConfig: Record<StepType, { label: string; color: string }> = {
  input: { label: "입력", color: "bg-violet-500" },
  request: { label: "요청", color: "bg-rose-500" },
  process: { label: "처리", color: "bg-emerald-500" },
  save: { label: "저장", color: "bg-pink-500" },
  result: { label: "결과", color: "bg-cyan-400 text-slate-900" },
  trigger: { label: "트리거", color: "bg-orange-500" },
};

export function ProcessFlow() {
  const [activeProcess, setActiveProcess] = useState<string>("production");
  const { darkMode } = useTheme();

  const currentProcess = processes.find((p) => p.id === activeProcess)!;

  return (
    <section id="process" className="py-20 px-4">
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
              상세 데이터 흐름
            </h2>
          </div>
          <p className={`ml-6 ${darkMode ? "text-gray-400" : "text-slate-500"}`}>Process Flow</p>
        </motion.div>

        {/* Process Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {processes.map((process) => (
            <motion.button
              key={process.id}
              onClick={() => setActiveProcess(process.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all ${
                activeProcess === process.id
                  ? `bg-gradient-to-r ${process.gradient} text-white shadow-lg`
                  : darkMode
                    ? "bg-white/5 text-gray-400 hover:bg-white/10"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <process.icon className="w-5 h-5" />
              <span className="font-medium hidden sm:inline">{process.subtitle}</span>
            </motion.button>
          ))}
        </div>

        {/* Process Content */}
        <motion.div
          key={activeProcess}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`p-6 sm:p-8 rounded-2xl backdrop-blur-sm border ${
            darkMode
              ? "bg-white/5 border-white/10"
              : "bg-white border-slate-200 shadow-lg"
          }`}
        >
          <div className="flex items-start gap-4 mb-8">
            <div className={`p-4 rounded-xl bg-gradient-to-br ${currentProcess.gradient}`}>
              <currentProcess.icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className={`text-xl font-bold mb-1 ${
                darkMode ? "text-white" : "text-slate-900"
              }`}>{currentProcess.title}</h3>
              <p className={`text-sm ${darkMode ? "text-gray-400" : "text-slate-500"}`}>
                목적: {currentProcess.purpose}
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-0">
            {currentProcess.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8"
              >
                {/* Line */}
                {index < currentProcess.steps.length - 1 && (
                  <div className={`absolute left-[11px] top-8 bottom-0 w-0.5 bg-gradient-to-b to-transparent ${
                    darkMode ? "from-cyan-400/50" : "from-cyan-500/50"
                  }`} />
                )}

                {/* Number */}
                <div className="absolute left-0 top-4 w-6 h-6 rounded-full bg-cyan-400 flex items-center justify-center text-xs font-bold text-slate-900">
                  {index + 1}
                </div>

                {/* Content */}
                <div className="ml-4 pb-6">
                  <div className={`p-4 rounded-xl transition-colors ${
                    darkMode
                      ? "bg-white/5 hover:bg-white/10"
                      : "bg-slate-50 hover:bg-slate-100"
                  }`}>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${stepTypeConfig[step.type].color}`}>
                      {stepTypeConfig[step.type].label}
                    </span>
                    <p className={darkMode ? "text-gray-200" : "text-slate-700"}>{step.text}</p>
                    {step.detail && (
                      <code className={`block mt-2 text-sm font-mono px-3 py-2 rounded-lg ${
                        darkMode
                          ? "text-cyan-400 bg-slate-900/50"
                          : "text-cyan-600 bg-slate-100"
                      }`}>
                        {step.detail}
                      </code>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
