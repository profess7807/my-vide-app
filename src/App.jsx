import React, { useEffect, useState } from "react";

const projects = [
  {
    title: "인터랙티브 비디오 플레이어",
    period: "2024",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    description:
      "사용자 행동에 따라 분기되는 인터랙티브 비디오 플레이어를 구현했습니다. HLS 스트리밍, 커스텀 자막, 챕터 북마크 기능을 제공합니다.",
    link: "#"
  },
  {
    title: "크리에이터 포트폴리오 빌더",
    period: "2023",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    description:
      "크리에이터가 자신의 영상, 썸네일, 작업 노트를 한 번에 관리하고 공유할 수 있는 포트폴리오 빌더 서비스입니다.",
    link: "#"
  },
  {
    title: "라이브 방송 대시보드",
    period: "2022",
    stack: ["React", "WebSocket", "Recharts"],
    description:
      "실시간 시청자 수, 채팅, 후원 내역을 한 화면에서 모니터링할 수 있는 스트리머용 라이브 대시보드를 개발했습니다.",
    link: "#"
  }
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

export default function App() {
  const [dark, setDark] = useDarkMode();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-10 md:flex-row md:py-16 lg:gap-14">
        {/* Sidebar / Intro */}
        <aside className="md:w-1/3">
          <div className="glass-panel relative overflow-hidden rounded-3xl p-6 md:p-8">
            <div className="pointer-events-none absolute inset-x-10 -top-24 h-40 rounded-full bg-brand-500/30 blur-3xl" />

            <header className="relative flex items-start justify-between gap-4">
              <div className="inline-flex items-center gap-3 rounded-full bg-slate-900/80 px-3 py-1 text-xs text-slate-300 ring-1 ring-slate-700/80">
                <span className="size-2 rounded-full bg-emerald-400" />
                포트폴리오
              </div>

              <button
                type="button"
                onClick={() => setDark((prev) => !prev)}
                className="btn-ghost rounded-full p-2 text-slate-300"
                aria-label="다크 모드 전환"
              >
                {dark ? (
                  <span className="text-lg">🌙</span>
                ) : (
                  <span className="text-lg">☀️</span>
                )}
              </button>
            </header>

            <div className="relative mt-6 flex items-center gap-4">
              <div className="flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-2xl font-semibold text-white shadow-lg shadow-brand-900/60">
                P
              </div>

              <div>
                <h1 className="text-xl font-semibold tracking-tight text-slate-50 md:text-2xl">
                  당신의 이름
                </h1>
                <p className="mt-1 text-sm font-medium text-slate-300">
                  프론트엔드 개발자 · 영상 경험에 강점
                </p>
              </div>
            </div>

            <p className="relative mt-6 text-sm leading-relaxed text-slate-300">
              인터랙티브한 영상 경험과 매끄러운 사용자 흐름에 관심이 많은
              프론트엔드 개발자입니다. 의미 있는 UI 디테일과 일관된 디자인
              시스템을 통해 제품의 스토리를 더 잘 전달하는 것을 목표로
              합니다.
            </p>

            <div className="relative mt-6 flex flex-wrap gap-2">
              <span className="pill">React &amp; TypeScript</span>
              <span className="pill">Tailwind CSS</span>
              <span className="pill">웹 성능 최적화</span>
            </div>

            <div className="relative mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary">
                프로젝트 문의하기
              </a>
              <a href="#projects" className="btn-ghost">
                프로젝트 보기
              </a>
            </div>

            <div className="relative mt-8 border-t border-slate-800/80 pt-5 text-xs text-slate-400">
              <p className="font-medium">현재 관심사</p>
              <p className="mt-1">
                비디오 기반 서비스, 실시간 인터랙션, 디자인 시스템 구축
              </p>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="md:w-2/3 md:pt-2">
          <section id="projects" className="glass-panel rounded-3xl p-6 md:p-8">
            <div className="flex items-baseline justify-between gap-4">
              <div>
                <p className="section-title">PROJECTS</p>
                <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-50 md:text-2xl">
                  최근 작업한 프로젝트
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                  실제 서비스에서 사용되었거나 프로덕션 수준을 목표로 한
                  프로젝트들입니다.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 transition hover:border-brand-500/70 hover:bg-slate-900/90"
                >
                  <header className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex size-8 items-center justify-center rounded-xl bg-slate-800 text-xs font-semibold text-slate-200">
                        {project.period}
                      </div>
                      <h3 className="text-sm font-semibold text-slate-50 md:text-base">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2 text-[11px] text-slate-300">
                      {project.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full bg-slate-800/80 px-2 py-1"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </header>

                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {project.description}
                  </p>

                  <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1 text-brand-400 transition group-hover:text-brand-300"
                    >
                      <span>상세 보기</span>
                      <span className="text-[11px]">↗</span>
                    </button>
                    <span>개인 프로젝트</span>
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
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-50 md:text-2xl">
              함께 이야기해요
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              새로운 프로젝트, 협업, 혹은 커피챗까지 편하게 연락 주세요.
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="space-y-2 text-sm text-slate-300">
                <div>
                  <p className="text-xs font-semibold text-slate-400">
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
                  <p className="text-xs font-semibold text-slate-400">
                    LINKEDIN
                  </p>
                  <a
                    href="https://linkedin.com/in/your-id"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-slate-200 hover:text-brand-200"
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
                      이름
                    </span>
                    <input
                      type="text"
                      placeholder="이름을 입력해주세요"
                      className="w-full rounded-xl border border-slate-700/80 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-brand-500 focus:bg-slate-900"
                    />
                  </label>
                  <label className="space-y-1">
                    <span className="text-xs font-medium text-slate-300">
                      이메일
                    </span>
                    <input
                      type="email"
                      placeholder="연락 가능한 이메일"
                      className="w-full rounded-xl border border-slate-700/80 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-brand-500 focus:bg-slate-900"
                    />
                  </label>
                </div>
                <label className="space-y-1">
                  <span className="text-xs font-medium text-slate-300">
                    메시지
                  </span>
                  <textarea
                    rows={4}
                    placeholder="어떤 이야기를 나누고 싶으신가요?"
                    className="w-full resize-none rounded-xl border border-slate-700/80 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-brand-500 focus:bg-slate-900"
                  />
                </label>
                <button type="submit" className="btn-primary">
                  메시지 보내기
                </button>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

