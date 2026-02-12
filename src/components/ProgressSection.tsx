import { motion } from "framer-motion";
import { CheckCircle, Settings, Clock, AlertCircle } from "lucide-react";

interface ProgressItem {
  text: string;
  subtext?: string;
}

interface ProgressCategory {
  title: string;
  icon: typeof CheckCircle;
  color: string;
  bgColor: string;
  lightText: string;
  lightSubText: string;
  lightItemBg: string;
  items: ProgressItem[];
}

const progressData: ProgressCategory[] = [
  {
    title: "완료",
    icon: CheckCircle,
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10 border-emerald-400/30",
    lightText: "text-emerald-600",
    lightSubText: "text-emerald-500",
    lightItemBg: "bg-emerald-50",
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
    lightText: "text-yellow-600",
    lightSubText: "text-yellow-500",
    lightItemBg: "bg-yellow-50",
    items: [
      { text: "고객 피드백 서비스", subtext: "기능 완료, 테스트 후 정식 오픈 예정" },
      { text: "데이터 자동 동기화", subtext: "스크립트 완성, 윈도우 작업 스케줄러 등록 필요" },
      { text: "카카오톡 알림", subtext: "코드 작성 완료, 현재 비활성 상태" },
      { text: "서버 모니터링", subtext: "화면 완료, 실제 데이터 연동 필요" },
    ],
  },
  {
    title: "미구현",
    icon: Clock,
    color: "text-gray-400",
    bgColor: "bg-gray-400/10 border-gray-400/30",
    lightText: "text-gray-600",
    lightSubText: "text-gray-500",
    lightItemBg: "bg-gray-100",
    items: [
      { text: "영업/물류 프로세스", subtext: "출하·납품 관리 기능" },
      { text: "교체 주기 알림", subtext: "고객 대상 사전 알림 발송" },
      { text: "AS 유형별 담당자 자동 배정" },
    ],
  },
];

const infraData = [
  { label: "서비스 URL", value: "http://0.0.0.0:xxxx" },
  { label: "서버 OS", value: "Windows Server" },
  { label: "데이터베이스", value: "MySQL" },
  { label: "웹 서버", value: "Node.js (Express)" },
];

export function ProgressSection() {
  const totalItems = progressData.reduce((acc, cat) => acc + cat.items.length, 0);
  const completedItems = progressData[0].items.length;
  const percentage = Math.round((completedItems / totalItems) * 100);

  return (
    <section id="progress" className="py-20 px-4 bg-white dark:bg-transparent">
      <div className="max-w-7xl mx-auto">

        {/* 제목 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 rounded bg-gradient-to-b from-cyan-400 to-purple-600" />
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white">
              현재 진행 상태
            </h2>
          </div>
          <p className="text-slate-500 dark:text-gray-400 ml-6">프로젝트 진척도</p>
        </div>

        {/* 진행률 */}
        <div className="mb-12 p-6 rounded-2xl border bg-slate-50 border-slate-200 dark:bg-white/5 dark:border-white/10">
          <div className="flex justify-between mb-4">
            <span className="text-lg font-bold text-slate-800 dark:text-white">
              전체 진행률
            </span>
            <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {percentage}%
            </span>
          </div>
          <div className="h-4 rounded-full bg-slate-300 dark:bg-slate-700 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        {/* 상태 카드 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {progressData.map((category) => (
            <div
              key={category.title}
              className={`p-6 rounded-2xl border 
              ${category.bgColor} 
              dark:${category.bgColor}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className={`w-6 h-6 ${category.color}`} />
                <h3 className={`text-lg font-bold ${category.lightText} dark:${category.color}`}>
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.items.map((item, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg 
                    ${category.lightItemBg} 
                    dark:bg-slate-900/30`}
                  >
                    <p className={`text-sm font-medium ${category.lightText} dark:text-white`}>
                      {item.text}
                    </p>
                    {item.subtext && (
                      <p className={`text-xs mt-1 ${category.lightSubText} dark:text-gray-500`}>
                        {item.subtext}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 인프라 */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 dark:bg-white/5 dark:border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-6 h-6 text-blue-500 dark:text-blue-400" />
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
              인프라 현황
            </h3>
          </div>
        </div>

      </div>
    </section>
  );
}
