import React, { useEffect, useState } from "react";

const translations = {
  ko: {
    portfolio: "포트폴리오",
    darkModeToggle: "다크 모드 전환",
    profileAlt: "프로필",
    yourName: "쥬디 민",
    role: "애플리케이션 품질관리자 · 대형 프로젝트 QA 경험",
    bio:
      "대형 애플리케이션의 품질 보증과 출시 품질 관리에 강점이 있는 품질관리자입니다. 테스트 전략 수립, 결함 관리, 릴리스 품질 게이트 운영을 통해 안정적인 서비스 출시를 목표로 합니다.",
    pill1: "테스트 전략 · 품질 메트릭스",
    pill2: "결함 관리 · 품질 게이트",
    pillWebPerf: "품질 프로세스 개선",
    contactProject: "품질관리·QA 문의",
    viewProjects: "수행 업무 보기",
    currentInterests: "현재 관심사",
    interestsDesc: "테스트 자동화, 품질 메트릭스, 대형 프로젝트 릴리스 관리",
    projectsSection: "최근 수행한 품질관리 업무",
    projectsDesc:
      "대형 프로젝트에서 품질관리자로서 수행한 테스트 전략, QA 프로세스, 릴리스 품질 관리 업무입니다.",
    viewDetails: "상세 보기",
    personalProject: "대형 프로젝트",
    contactTitle: "함께 이야기해요",
    contactDesc: "품질관리·QA 협업, 컨설팅, 채용 문의까지 편하게 연락 주세요.",
    name: "이름",
    namePlaceholder: "이름을 입력해주세요",
    email: "이메일",
    emailPlaceholder: "연락 가능한 이메일",
    message: "메시지",
    messagePlaceholder: "어떤 이야기를 나누고 싶으신가요?",
    sendMessage: "메시지 보내기",
    language: "언어",
    korean: "한국어",
    english: "English",
  },
  en: {
    portfolio: "Portfolio",
    darkModeToggle: "Toggle dark mode",
    profileAlt: "Profile",
    yourName: "Judy Min",
    role: "Application Quality Manager · Enterprise QA experience",
    bio:
      "I'm an application quality manager with a focus on quality assurance and release quality for large-scale applications. I aim for stable releases through test strategy, defect management, and release quality gates.",
    pill1: "Test strategy · Quality metrics",
    pill2: "Defect management · Quality gates",
    pillWebPerf: "Quality process improvement",
    contactProject: "QA & quality inquiries",
    viewProjects: "View experience",
    currentInterests: "Current interests",
    interestsDesc:
      "Test automation, quality metrics, enterprise release management",
    projectsSection: "Recent quality management experience",
    projectsDesc:
      "Test strategy, QA process, and release quality management performed as a quality manager on large-scale projects.",
    viewDetails: "View details",
    personalProject: "Enterprise project",
    contactTitle: "Let's talk",
    contactDesc:
      "Feel free to reach out for QA collaboration, consulting, or career inquiries.",
    name: "Name",
    namePlaceholder: "Enter your name",
    email: "Email",
    emailPlaceholder: "Your email address",
    message: "Message",
    messagePlaceholder: "What would you like to talk about?",
    sendMessage: "Send message",
    language: "Language",
    korean: "한국어",
    english: "English",
  },
};

const projectsData = [
  {
    title: {
      ko: "대형 금융 플랫폼 품질관리",
      en: "Enterprise financial platform QA",
    },
    period: "2024",
    stack: {
      ko: ["테스트 전략", "결함 관리", "릴리스 품질 게이트"],
      en: ["Test strategy", "Defect management", "Release quality gates"],
    },
    description: {
      ko: "다수 모듈·외부 연동이 있는 대형 금융 플랫폼에서 품질관리자를 담당했습니다. 테스트 계획 수립, 품질 메트릭스 정의, 출시 전 품질 게이트 운영 및 결함 트렌드 분석을 수행했습니다.",
      en: "Led quality management for a large financial platform with multiple modules and integrations. Defined test strategy, quality metrics, release quality gates, and defect trend analysis.",
    },
    link: "#",
  },
  {
    title: {
      ko: "QA 프로세스 및 테스트 자동화 도입",
      en: "QA process & test automation rollout",
    },
    period: "2023",
    stack: {
      ko: ["QA 프로세스", "테스트 자동화", "CI/CD 연동"],
      en: ["QA process", "Test automation", "CI/CD integration"],
    },
    description: {
      ko: "대형 프로젝트에 QA 프로세스를 정립하고 테스트 자동화를 도입했습니다. 요구사항·테스트 케이스 추적, 회귀 테스트 자동화, CI/CD 파이프라인과의 연동을 통해 출시 품질과 효율을 개선했습니다.",
      en: "Established QA process and introduced test automation for an enterprise project. Improved release quality and efficiency through requirements traceability, regression automation, and CI/CD integration.",
    },
    link: "#",
  },
  {
    title: {
      ko: "릴리스 품질 관리 및 결함 분석",
      en: "Release quality & defect analysis",
    },
    period: "2022",
    stack: {
      ko: ["릴리스 관리", "결함 분석", "품질 리포팅"],
      en: ["Release management", "Defect analysis", "Quality reporting"],
    },
    description: {
      ko: "정기 릴리스 단위로 품질 기준을 설정하고, 결함 유입·해결 추이를 분석해 품질 리포팅을 수행했습니다. 개발·운영팀과 협업하여 출시 일정과 품질 기준의 균형을 관리했습니다.",
      en: "Defined quality criteria per release cycle and performed quality reporting based on defect inflow and resolution trends. Coordinated with dev and ops to balance release schedule and quality standards.",
    },
    link: "#",
  },
];

function useDarkMode() {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (enabled) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [enabled]);

  return [enabled, setEnabled];
}

function GlobeIcon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      <path d="M2 12h20" />
    </svg>
  );
}

function MoonIcon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function SunIcon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

export default function App() {
  const [dark, setDark] = useDarkMode();
  const [lang, setLang] = useState("ko");
  const [langOpen, setLangOpen] = useState(false);
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-slate-50 to-slate-200 text-slate-900 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-10 md:flex-row md:py-16 lg:gap-14">
        {/* Sidebar / Intro */}
        <aside className="md:w-1/3">
          <div className="glass-panel relative overflow-hidden rounded-3xl p-6 md:p-8">
            <div className="pointer-events-none absolute inset-x-10 -top-24 h-40 rounded-full bg-brand-500/30 blur-3xl" />

            <header className="relative flex items-start justify-between gap-4">
              <div className="inline-flex items-center gap-3 rounded-full bg-slate-200/80 px-3 py-1 text-xs text-slate-600 ring-1 ring-slate-300/80 dark:bg-slate-900/80 dark:text-slate-300 dark:ring-slate-700/80">
                <span className="size-2 rounded-full bg-emerald-400" />
                {t.portfolio}
              </div>

              <div className="flex items-center gap-1">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setLangOpen((prev) => !prev)}
                    className="btn-ghost rounded-full p-2 text-slate-600 dark:text-slate-300"
                    aria-label={t.language}
                    aria-expanded={langOpen}
                  >
                    <GlobeIcon className="size-5" />
                  </button>
                  {langOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        aria-hidden
                        onClick={() => setLangOpen(false)}
                      />
                      <div className="absolute right-0 top-full z-20 mt-1 min-w-[8rem] rounded-xl border border-slate-200 bg-white py-1 shadow-xl backdrop-blur dark:border-slate-700/80 dark:bg-slate-900/95">
                        <button
                          type="button"
                          onClick={() => {
                            setLang("ko");
                            setLangOpen(false);
                          }}
                          className={`w-full px-4 py-2 text-left text-sm transition ${
                            lang === "ko"
                              ? "bg-brand-600/20 text-brand-600 dark:text-brand-300"
                              : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/80"
                          }`}
                        >
                          {t.korean}
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setLang("en");
                            setLangOpen(false);
                          }}
                          className={`w-full px-4 py-2 text-left text-sm transition ${
                            lang === "en"
                              ? "bg-brand-600/20 text-brand-600 dark:text-brand-300"
                              : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/80"
                          }`}
                        >
                          {t.english}
                        </button>
                      </div>
                    </>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setDark((prev) => !prev)}
                  className="btn-ghost rounded-full p-2 text-slate-600 dark:text-slate-300"
                  aria-label={t.darkModeToggle}
                >
                  {dark ? (
                    <MoonIcon className="size-5" />
                  ) : (
                    <SunIcon className="size-5" />
                  )}
                </button>
              </div>
            </header>

            <div className="relative mt-6 flex flex-col items-center text-center">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt={t.profileAlt}
                className="size-24 rounded-full object-cover ring-2 ring-slate-300/80 shadow-lg dark:ring-slate-700/80 md:size-28"
                onError={(e) => {
                  e.target.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=portfolio&backgroundColor=6366f1";
                }}
              />
              <h1 className="mt-4 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 md:text-2xl">
                {t.yourName}
              </h1>
              <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
                {t.role}
              </p>
            </div>

            <p className="relative mt-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {t.bio}
            </p>

            <div className="relative mt-6 flex flex-wrap gap-2">
              <span className="pill">{t.pill1}</span>
              <span className="pill">{t.pill2}</span>
              <span className="pill">{t.pillWebPerf}</span>
            </div>

            <div className="relative mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary">
                {t.contactProject}
              </a>
              <a href="#projects" className="btn-ghost">
                {t.viewProjects}
              </a>
            </div>

            <div className="relative mt-8 border-t border-slate-200 pt-5 text-xs text-slate-500 dark:border-slate-800/80 dark:text-slate-400">
              <p className="font-medium">{t.currentInterests}</p>
              <p className="mt-1">{t.interestsDesc}</p>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="md:w-2/3 md:pt-2">
          <section id="projects" className="glass-panel rounded-3xl p-6 md:p-8">
            <div className="flex items-baseline justify-between gap-4">
              <div>
                <p className="section-title">PROJECTS</p>
                <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 md:text-2xl">
                  {t.projectsSection}
                </h2>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  {t.projectsDesc}
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {projectsData.map((project) => (
                <article
                  key={project.title[lang]}
                  className="group rounded-2xl border border-slate-200 bg-slate-50/80 p-4 transition hover:border-brand-500/70 hover:bg-slate-100 dark:border-slate-800/80 dark:bg-slate-900/60 dark:hover:bg-slate-900/90"
                >
                  <header className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex size-8 items-center justify-center rounded-xl bg-slate-200 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                        {project.period}
                      </div>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50 md:text-base">
                        {project.title[lang]}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2 text-[11px] text-slate-600 dark:text-slate-300">
                      {project.stack[lang].map((s) => (
                        <span
                          key={s}
                          className="rounded-full bg-slate-200 px-2 py-1 dark:bg-slate-800/80"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </header>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {project.description[lang]}
                  </p>

                  <div className="mt-3 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1 text-brand-600 transition group-hover:text-brand-500 dark:text-brand-400 dark:group-hover:text-brand-300"
                    >
                      <span>{t.viewDetails}</span>
                      <span className="text-[11px]">↗</span>
                    </button>
                    <span>{t.personalProject}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="contact"
            className="mt-6 glass-panel rounded-3xl p-6 md:p-8"
          >
            <p className="section-title">CONTACT</p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 md:text-2xl">
              {t.contactTitle}
            </h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              {t.contactDesc}
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    EMAIL
                  </p>
                  <a
                    href="mailto:you@example.com"
                    className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-brand-300 hover:text-brand-200"
                  >
                    you@example.com
                  </a>
                </div>
                <div className="mt-3">
                  <p className="text-xs font-semibold text-slate-400">
                    GITHUB
                  </p>
                  <a
                    href="https://github.com/your-id"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-slate-200 hover:text-brand-200"
                  >
                    github.com/your-id <span className="text-[11px]">↗</span>
                  </a>
                </div>
                <div className="mt-3">
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    LINKEDIN
                  </p>
                  <a
                    href="https://linkedin.com/in/your-id"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-brand-500 dark:text-slate-200 dark:hover:text-brand-200"
                  >
                    linkedin.com/in/your-id{" "}
                    <span className="text-[11px]">↗</span>
                  </a>
                </div>
              </div>

              <form
                className="space-y-3 text-sm"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid gap-3 md:grid-cols-2">
                  <label className="space-y-1">
                    <span className="text-xs font-medium text-slate-300">
                      {t.name}
                    </span>
                    <input
                      type="text"
                      placeholder={t.namePlaceholder}
                      className="w-full rounded-xl border border-slate-700/80 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-brand-500 focus:bg-slate-900"
                    />
                  </label>
                  <label className="space-y-1">
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                      {t.email}
                    </span>
                    <input
                      type="email"
                      placeholder={t.emailPlaceholder}
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-brand-500 focus:bg-white dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-100 dark:focus:bg-slate-900"
                    />
                  </label>
                </div>
                <label className="space-y-1">
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                    {t.message}
                  </span>
                  <textarea
                    rows={4}
                    placeholder={t.messagePlaceholder}
                    className="w-full resize-none rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-brand-500 focus:bg-white dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-100 dark:focus:bg-slate-900"
                  />
                </label>
                <button type="submit" className="btn-primary">
                  {t.sendMessage}
                </button>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

