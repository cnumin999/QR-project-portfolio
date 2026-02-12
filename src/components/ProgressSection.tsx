import { motion } from "framer-motion";
import { CheckCircle, Clock, AlertCircle, Server } from "lucide-react";

interface ProgressSectionProps {
  darkMode: boolean;
}

const completed = [
  "생산 데이터 입력 및 시리얼 생성 (웹 입력 + 엑셀 자동 업로드)",
  "QC 3단계 검사 데이터 입력/조회 (1st/2nd/Final)",
  "엑셀 성적서 자동 출력 (DB → 엑셀 템플릿 자동 매핑)",
  "QR 코드 생성 및 출력",
  "QR 스캔 로그 기록 (GPS, IP, 디바이스 자동 수집)",
  "관리자 대시보드 (피드백 목록, 키워드 분석 차트)",
  "방문자 예약 시스템 (이메일 알림 발송)",
];

const needsSetup = [
  "고객 피드백 서비스: 기능 구현 완료, 테스트 후 정식 오픈",
  "데이터 자동 동기화: 스크립트 완성, 작업 스케줄러 등록 필요",
  "카카오톡 알림: 코드 작성 완료, 현재 비활성 상태",
  "서버 모니터링: 화면 구현 완료, 실제 데이터 연동 필요",
];

const notImplemented = [
  "영업/물류 프로세스 (출하/납품 관리 기능)",
  "교체 주기 알림 (고객 대상 사전 알림 발송)",
  "AS 유형별 담당자 자동 배정",
];

const infrastructure = [
  { label: "서버 OS", value: "Windows Server" },
  { label: "데이터베이스", value: "MySQL" },
  { label: "웹 서버", value: "Node.js (Express)" },
  { label: "분석 엔진", value: "Python (soynlp)" },
];

export function ProgressSection({ darkMode }: ProgressSectionProps) {
  const totalTasks = completed.length + needsSetup.length + notImplemented.length;
  const completedPercent = Math.round((completed.length / totalTasks) * 100);
  const setupPercent = Math.round((needsSetup.length / totalTasks) * 100);

  return (
    <section className={`py-20 ${darkMode ? "" : "bg-slate-50/50"}`}>
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
            현재 진행 상태
          </h2>
          <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
            프로젝트 완료 현황 및 인프라 정보
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className={`p-6 rounded-2xl mb-8 ${
            darkMode
              ? "bg-slate-800/50 border border-slate-700/50"
              : "bg-white border border-slate-200 shadow-lg"
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-4">
            <span
              className={`font-medium ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              전체 진행률
            </span>
            <span
              className={`text-sm ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              {completed.length + needsSetup.length} / {totalTasks} 완료
            </span>
          </div>
          <div
            className={`h-4 rounded-full overflow-hidden ${
              darkMode ? "bg-slate-700" : "bg-slate-200"
            }`}
          >
            <motion.div
              className="h-full flex"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-green-500"
                style={{ width: `${completedPercent}%` }}
              />
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-yellow-500"
                style={{ width: `${setupPercent}%` }}
              />
            </motion.div>
          </div>
          <div className="flex gap-6 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className={darkMode ? "text-slate-400" : "text-slate-600"}>
                완료 ({completedPercent}%)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <span className={darkMode ? "text-slate-400" : "text-slate-600"}>
                설정 필요 ({setupPercent}%)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-500" />
              <span className={darkMode ? "text-slate-400" : "text-slate-600"}>
                미구현
              </span>
            </div>
          </div>
        </motion.div>

        {/* Status Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Completed */}
          <motion.div
            className={`p-6 rounded-2xl ${
              darkMode
                ? "bg-slate-800/50 border border-slate-700/50"
                : "bg-white border border-slate-200 shadow-lg"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-emerald-500/20">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
              </div>
              <h3
                className={`font-bold ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                완료 항목
              </h3>
              <span className="ml-auto px-2 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-500">
                {completed.length}
              </span>
            </div>
            <ul className="space-y-3">
              {completed.map((item, i) => (
                <motion.li
                  key={i}
                  className={`flex items-start gap-2 text-sm ${
                    darkMode ? "text-slate-300" : "text-slate-600"
                  }`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Needs Setup */}
          <motion.div
            className={`p-6 rounded-2xl ${
              darkMode
                ? "bg-slate-800/50 border border-slate-700/50"
                : "bg-white border border-slate-200 shadow-lg"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-amber-500/20">
                <Clock className="w-5 h-5 text-amber-500" />
              </div>
              <h3
                className={`font-bold ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                설정 필요
              </h3>
              <span className="ml-auto px-2 py-1 rounded-full text-xs font-medium bg-amber-500/20 text-amber-500">
                {needsSetup.length}
              </span>
            </div>
            <ul className="space-y-3">
              {needsSetup.map((item, i) => (
                <motion.li
                  key={i}
                  className={`flex items-start gap-2 text-sm ${
                    darkMode ? "text-slate-300" : "text-slate-600"
                  }`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                >
                  <Clock className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Not Implemented */}
          <motion.div
            className={`p-6 rounded-2xl ${
              darkMode
                ? "bg-slate-800/50 border border-slate-700/50"
                : "bg-white border border-slate-200 shadow-lg"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-slate-500/20">
                <AlertCircle className="w-5 h-5 text-slate-500" />
              </div>
              <h3
                className={`font-bold ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                미구현
              </h3>
              <span className="ml-auto px-2 py-1 rounded-full text-xs font-medium bg-slate-500/20 text-slate-500">
                {notImplemented.length}
              </span>
            </div>
            <ul className="space-y-3">
              {notImplemented.map((item, i) => (
                <motion.li
                  key={i}
                  className={`flex items-start gap-2 text-sm ${
                    darkMode ? "text-slate-300" : "text-slate-600"
                  }`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                >
                  <AlertCircle className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Infrastructure */}
        <motion.div
          className={`p-6 rounded-2xl ${
            darkMode
              ? "bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20"
              : "bg-gradient-to-r from-cyan-50 to-purple-50 border border-cyan-200"
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Server className={darkMode ? "text-cyan-400" : "text-cyan-600"} />
            <h3
              className={`font-bold ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              인프라 현황
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {infrastructure.map((item) => (
              <div
                key={item.label}
                className={`p-4 rounded-xl ${
                  darkMode ? "bg-slate-900/50" : "bg-white/80"
                }`}
              >
                <p
                  className={`text-xs mb-1 ${
                    darkMode ? "text-slate-500" : "text-slate-500"
                  }`}
                >
                  {item.label}
                </p>
                <p
                  className={`font-medium ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
