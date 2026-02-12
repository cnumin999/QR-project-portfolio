import { motion } from "framer-motion";
import { CheckCircle, Settings, Clock, AlertCircle } from "lucide-react";
import { useTheme } from "../App";

interface ProgressItem {
  text: string;
  subtext?: string;
}

interface ProgressCategory {
  title: string;
  icon: typeof CheckCircle;
  color: string;
  bgColor: string;
  items: ProgressItem[];
}

const progressData: ProgressCategory[] = [
  {
    title: "완료",
    icon: CheckCircle,
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10 border-emerald-400/30",
    items: [
      { text: "생산 데이터 입력 및 시리얼 생성", subtext: "웹 입력 + 엑셀 자동 업로드" },
      { text: "QC 3단계 검사 데이터 입력·조회", subtext: "1st/2nd/Final 모두 구현" },
      { text: "엑셀 성적서 자동 출력", subtext: "DB 데이터를 엑셀 템플릿에 자동 매핑" },
      { text: "QR 코드 생성 및 출력" },
      { text: "QR 스캔 로그 기록", subtext: "GPS, IP, 디바이스 자동 수집" },
      { text: "관리자 대시보드", subtext: "피드백 목록, 키워드 분석 차트" },
      { text: "방문자 예약 시스템", subtext: "이메일 알림 발송" },
    ],
  },
  {
    title: "설정 필요",
    icon: Settings,
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10 border-yellow-400/30",
    items: [
      { text: "고객 피드백 서비스", subtext: "테스트 후 정식 오픈 예정" },
      { text: "데이터 자동 동기화", subtext: "윈도우 작업 스케줄러 등록 필요" },
      { text: "카카오톡 알림", subtext: "코드 완료, 현재 비활성" },
      { text: "서버 모니터링", subtext: "실제 데이터 연동 필요" },
    ],
  },
  {
    title: "미구현",
    icon: Clock,
    color: "text-gray-400",
    bgColor: "bg-gray-400/10 border-gray-400/30",
    items: [
      { text: "영업/물류 프로세스", subtext: "출하·납품 관리 기능" },
      { text: "교체 주기 알림", subtext: "고객 대상 사전 알림 발송" },
      { text: "AS 유형별 담당자 자동 배정" },
    ],
  },
];

const infraData = [
  { label: "서비스 URL", value: "http://127.0.0.1:3000" },
  { label: "서버 OS", value: "Windows Server" },
  { label: "데이터베이스", value: "MySQL" },
  { label: "웹 서버", value: "Node.js (Express)" },
];

export function ProgressSection() {
  const { darkMode } = useTheme();

  const totalItems = progressData.reduce((acc, cat) => acc + cat.items.length, 0);
  const completedItems = progressData[0].items.length;
  const percentage = Math.round((completedItems / totalItems) * 100);

  return (
    <section id="progress" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* 제목 - 통일 구조 */}
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
              현재 진행 상태
            </h2>
          </div>
          <p className={`ml-6 ${darkMode ? "text-gray-400" : "text-slate-500"}`}>
            프로젝트 진척도
          </p>
        </motion.div>

        {/* 진행률 박스 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mb-12 p-6 rounded-2xl border ${
            darkMode
              ? "bg-white/5 border-white/10"
              : "bg-white border-slate-200 shadow-lg"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <span className={`text-lg font-bold ${
              darkMode ? "text-white" : "text-slate-900"
            }`}>
              전체 진행률
            </span>
            <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {percentage}%
            </span>
          </div>

          <div className={`h-4 rounded-full overflow-hidden ${
            darkMode ? "bg-slate-700" : "bg-slate-200"
          }`}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${percentage}%` }}
              transition={{ duration: 1.5 }}
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
            />
          </div>

          <div className={`flex justify-between mt-2 text-sm ${
            darkMode ? "text-gray-400" : "text-slate-500"
          }`}>
            <span>완료: {completedItems}개</span>
            <span>전체: {totalItems}개</span>
          </div>
        </motion.div>

        {/* 카테고리 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {progressData.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1 }}
              className={`p-6 rounded-2xl border ${
                darkMode
                  ? category.bgColor
                  : "bg-slate-50 border-slate-200"
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className={`w-6 h-6 ${category.color}`} />
                <h3 className={`text-lg font-bold ${
                  darkMode ? category.color : "text-slate-900"
                }`}>
                  {category.title}
                </h3>
                <span className={`ml-auto text-sm font-bold ${category.color}`}>
                  {category.items.length}
                </span>
              </div>

              <div className="space-y-3">
                {category.items.map((item, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg ${
                      darkMode
                        ? "bg-slate-900/30"
                        : "bg-white border border-slate-200"
                    }`}
                  >
                    <p className={`text-sm ${
                      darkMode ? "text-white" : "text-slate-800"
                    }`}>
                      {item.text}
                    </p>
                    {item.subtext && (
                      <p className={`text-xs mt-1 ${
                        darkMode ? "text-gray-400" : "text-slate-500"
                      }`}>
                        {item.subtext}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 인프라 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-2xl border ${
            darkMode
              ? "bg-white/5 border-white/10"
              : "bg-white border-slate-200 shadow-lg"
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className={`w-6 h-6 ${
              darkMode ? "text-blue-400" : "text-blue-500"
            }`} />
            <h3 className={`text-lg font-bold ${
              darkMode ? "text-white" : "text-slate-900"
            }`}>
              인프라 현황
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {infraData.map((item, index) => (
              <div
                key={item.label}
                className={`p-4 rounded-xl text-center ${
                  darkMode
                    ? "bg-slate-900/50"
                    : "bg-slate-50 border border-slate-200"
                }`}
              >
                <p className={`text-xs mb-1 ${
                  darkMode ? "text-gray-400" : "text-slate-500"
                }`}>
                  {item.label}
                </p>
                <p className={`font-mono text-sm break-all ${
                  darkMode ? "text-cyan-400" : "text-cyan-600"
                }`}>
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
