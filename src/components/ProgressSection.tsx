import { motion } from "framer-motion";
import { CheckCircle, Settings, Clock } from "lucide-react";
import { useTheme } from "../App";

interface ProgressItem {
  text: string;
  subtext?: string;
}

interface ProgressCategory {
  title: string;
  icon: typeof CheckCircle;
  color: string;
  lightBg: string;
  lightBorder: string;
  items: ProgressItem[];
}

const progressData: ProgressCategory[] = [
  {
    title: "완료",
    icon: CheckCircle,
    color: "text-emerald-500",
    lightBg: "bg-emerald-50",
    lightBorder: "border-emerald-200",
    items: [
      { text: "생산 데이터 입력 및 시리얼 생성", subtext: "웹 입력 + 엑셀 자동 업로드" },
      { text: "QC 3단계 검사 데이터 입력·조회", subtext: "1st/2nd/Final 모두 구현" },
      { text: "엑셀 성적서 자동 출력" },
      { text: "QR 코드 생성 및 출력" },
      { text: "QR 스캔 로그 기록" },
      { text: "관리자 대시보드" },
      { text: "방문자 예약 시스템" },
    ],
  },
  {
    title: "설정 필요",
    icon: Settings,
    color: "text-yellow-500",
    lightBg: "bg-yellow-50",
    lightBorder: "border-yellow-200",
    items: [
      { text: "고객 피드백 서비스", subtext: "테스트 후 정식 오픈 예정" },
      { text: "데이터 자동 동기화", subtext: "작업 스케줄러 등록 필요" },
      { text: "카카오톡 알림", subtext: "코드 완료, 비활성 상태" },
      { text: "서버 모니터링", subtext: "실데이터 연동 필요" },
    ],
  },
  {
    title: "미구현",
    icon: Clock,
    color: "text-gray-500",
    lightBg: "bg-gray-50",
    lightBorder: "border-gray-200",
    items: [
      { text: "영업/물류 프로세스" },
      { text: "교체 주기 알림" },
      { text: "AS 유형별 담당자 자동 배정" },
    ],
  },
];

export function ProgressSection() {
  const { darkMode } = useTheme();

  const totalItems = progressData.reduce((acc, cat) => acc + cat.items.length, 0);
  const completedItems = progressData[0].items.length;
  const percentage = Math.round((completedItems / totalItems) * 100);

  return (
    <section
      id="progress"
      className={`py-20 px-4 ${
        darkMode ? "bg-slate-950 text-white" : "bg-white text-slate-800"
      }`}
    >
      <div className="max-w-7xl mx-auto">

        {/* 제목 */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            현재 진행 상태
          </h2>
          <p className={darkMode ? "text-gray-400" : "text-slate-500"}>
            프로젝트 진척도 요약
          </p>
        </div>

        {/* 진행률 */}
        <div
          className={`mb-12 p-6 rounded-2xl border ${
            darkMode
              ? "bg-slate-900 border-slate-700"
              : "bg-slate-50 border-slate-200"
          }`}
        >
          <div className="flex justify-between mb-3">
            <span className="font-semibold">전체 진행률</span>
            <span className="font-bold text-xl">{percentage}%</span>
          </div>

          <div
            className={`h-3 rounded-full overflow-hidden ${
              darkMode ? "bg-slate-700" : "bg-slate-200"
            }`}
          >
            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-700"
              style={{ width: `${percentage}%` }}
            />
          </div>

          <div
            className={`flex justify-between mt-2 text-sm ${
              darkMode ? "text-gray-400" : "text-slate-500"
            }`}
          >
            <span>완료 {completedItems}개</span>
            <span>전체 {totalItems}개</span>
          </div>
        </div>

        {/* 상태 카드 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {progressData.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-2xl border ${
                darkMode
                  ? "bg-slate-900 border-slate-700"
                  : `${category.lightBg} ${category.lightBorder}`
              }`}
            >
              <div className="flex items-center gap-3 mb-5">
                <category.icon className={`w-6 h-6 ${category.color}`} />
                <h3
                  className={`text-lg font-bold ${
                    darkMode ? "text-white" : category.color
                  }`}
                >
                  {category.title}
                </h3>
                <span className="ml-auto text-sm font-semibold opacity-70">
                  {category.items.length}
                </span>
              </div>

              <div className="space-y-3">
                {category.items.map((item, i) => (
                  <div
                    key={i}
                    className={`p-3 rounded-lg ${
                      darkMode ? "bg-slate-800" : "bg-white/70"
                    }`}
                  >
                    <p className="text-sm font-medium">{item.text}</p>
                    {item.subtext && (
                      <p
                        className={`text-xs mt-1 ${
                          darkMode ? "text-gray-400" : "text-slate-500"
                        }`}
                      >
                        {item.subtext}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
