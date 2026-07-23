import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_transparent_25%),linear-gradient(180deg,_#020617_0%,_#071422_65%,_#050a12_100%)] text-slate-100">
      <main className="mx-auto min-h-screen w-full max-w-6xl px-6 py-12 sm:px-10">
        <section className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-slate-950/80 p-10 shadow-[0_32px_120px_rgba(15,23,42,0.5)] ring-1 ring-white/5 backdrop-blur-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.16),_transparent_20%)]" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-5">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">高压喷雾 · 佛像 · IT</p>
              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">雾化禅意博客：技术、工艺与灵感的交汇</h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">这是一个把高压喷雾系统、佛像修复与现代 IT 实践融合在一起的创作空间。我们将通过项目记录、设计分析与工具案例，打造一份既冷冽又温润的内容系统。</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/spray" className="rounded-full bg-cyan-400/15 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/25">高压喷雾</Link>
                <Link href="/buddha" className="rounded-full bg-emerald-400/15 px-5 py-3 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-400/25">佛像</Link>
                <Link href="/it" className="rounded-full bg-violet-400/15 px-5 py-3 text-sm font-semibold text-violet-200 transition hover:bg-violet-400/25">IT 体系</Link>
              </div>
            </div>
            <div className="grid gap-4 sm:w-96">
              <article className="rounded-[2rem] bg-slate-900/85 p-6 ring-1 ring-white/10 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/75">最新聚焦</p>
                <h2 className="mt-4 text-2xl font-semibold text-white">喷雾系统的稳定设计</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">从喷嘴选型到自动化控制，探索高压喷雾在修复佛像、水幕展示与工业应用中的实践。</p>
              </article>
              <article className="rounded-[2rem] bg-slate-900/85 p-6 ring-1 ring-white/10 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/75">系统结构</p>
                <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-300">
                  <span className="rounded-full bg-cyan-500/15 px-3 py-1">主题导航</span>
                  <span className="rounded-full bg-emerald-500/15 px-3 py-1">项目目录</span>
                  <span className="rounded-full bg-violet-500/15 px-3 py-1">案例分析</span>
                  <span className="rounded-full bg-slate-400/10 px-3 py-1">工具链</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-8 xl:grid-cols-[1.4fr_0.9fr]">
          <article className="space-y-8 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-300">概念与体系</span>
              <h2 className="text-3xl font-semibold text-white">完整博客系统的三大主题</h2>
              <p className="text-slate-400 leading-7">每个主题都包含独立的专题页与文章目录：高压喷雾关注设备与工艺，佛像关注材质与雕塑表达，IT 关注自动化、数据与展示平台。</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              <div className="space-y-3 rounded-[1.75rem] bg-slate-900/80 p-6 ring-1 ring-white/5">
                <h3 className="text-xl font-semibold text-white">高压喷雾</h3>
                <p className="text-slate-400">气动系统、喷嘴调试、雾滴分析与稳定算法。</p>
              </div>
              <div className="space-y-3 rounded-[1.75rem] bg-slate-900/80 p-6 ring-1 ring-white/5">
                <h3 className="text-xl font-semibold text-white">佛像</h3>
                <p className="text-slate-400">佛像修复、光影陈设与禅意场景的创意提案。</p>
              </div>
              <div className="space-y-3 rounded-[1.75rem] bg-slate-900/80 p-6 ring-1 ring-white/5">
                <h3 className="text-xl font-semibold text-white">IT 体系</h3>
                <p className="text-slate-400">物联网、数据可视化、博客发布与系统集成。</p>
              </div>
            </div>
          </article>

          <aside className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.25)]">
            <div className="space-y-4 rounded-[1.75rem] bg-slate-900/80 p-6 ring-1 ring-white/5">
              <h3 className="text-2xl font-semibold text-white">主题导航</h3>
              <p className="text-slate-400 leading-6">在这里你可以快速进入每个主题的专属页面，查看专题文章、项目进展与工具建议。</p>
            </div>
            <div className="grid gap-3">
              <Link href="/spray" className="block rounded-[1.75rem] border border-white/10 bg-cyan-500/10 p-5 text-white transition hover:bg-cyan-500/15">
                高压喷雾专题
              </Link>
              <Link href="/buddha" className="block rounded-[1.75rem] border border-white/10 bg-emerald-500/10 p-5 text-white transition hover:bg-emerald-500/15">
                佛像主题专题
              </Link>
              <Link href="/it" className="block rounded-[1.75rem] border border-white/10 bg-violet-500/10 p-5 text-white transition hover:bg-violet-500/15">
                IT 体系专题
              </Link>
            </div>
          </aside>
        </section>

        <section className="mt-10 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
          <div className="grid gap-6 lg:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">内容架构</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">文章、项目、资源三层次</h3>
              <p className="mt-3 text-slate-400 leading-7">每个专题页面都会提供“主题介绍 + 文章推荐 + 实战项目 + 工具资源”的完整结构，便于快速扩展成一个真正的博客系统。</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">页面布局</p>
              <p className="mt-4 text-slate-400 leading-7">首页导航，专题页面，文章列表，辅助资源，构成一个可迭代的博客框架。</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">扩展方向</p>
              <p className="mt-4 text-slate-400 leading-7">后续可以继续添加文章详情、标签页、笔记归档与图像展示，成为一个完整的个人网站。</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
