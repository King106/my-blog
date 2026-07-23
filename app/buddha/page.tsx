import Link from "next/link";

export default function BuddhaPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.12),_transparent_28%),linear-gradient(180deg,_#020617_0%,_#081827_55%,_#050a12_100%)] text-slate-100">
      <main className="mx-auto max-w-6xl px-6 py-12 sm:px-10">
        <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-300/80">佛像专题</p>
            <h1 className="text-4xl font-semibold text-white">佛像与静谧：雕塑、材质与场景</h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-300">本专题探讨佛像修复与陈设中“静”与“动”的平衡。通过材质选择、光影设计与空间布局，使雕像不仅是一件工艺品，更是一段可感知的仪式体验。</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[1.75rem] bg-slate-900/80 p-7 ring-1 ring-white/5">
              <h2 className="text-2xl font-semibold text-white">内容结构</h2>
              <ul className="mt-5 space-y-3 text-slate-300">
                <li>• 佛像选材与表面处理</li>
                <li>• 光影与空间营造</li>
                <li>• 修复工艺与美学分析</li>
                <li>• 禅意场景的设计实践</li>
              </ul>
            </article>
            <article className="rounded-[1.75rem] bg-slate-900/80 p-7 ring-1 ring-white/5">
              <h2 className="text-2xl font-semibold text-white">灵感案例</h2>
              <ul className="mt-5 space-y-3 text-slate-300">
                <li>• 青铜佛像与氧化纹理处理</li>
                <li>• 石雕与水幕空间的结合</li>
                <li>• 光影下的“隐喻雕塑”</li>
                <li>• 数字化修复记录与呈现</li>
              </ul>
            </article>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-[1.75rem] bg-slate-900/80 p-7 ring-1 ring-white/5">
              <h3 className="text-xl font-semibold text-white">修复工具</h3>
              <p className="mt-3 text-slate-300 leading-7">从材料检测到表面处理，记录佛像修复中常用的工具与工艺步骤。</p>
            </div>
            <div className="rounded-[1.75rem] bg-slate-900/80 p-7 ring-1 ring-white/5">
              <h3 className="text-xl font-semibold text-white">设计思考</h3>
              <p className="mt-3 text-slate-300 leading-7">探讨如何将工艺与禅意结合，使每件作品更具情绪与氛围感。</p>
            </div>
          </div>

          <div className="mt-10 rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-7 ring-1 ring-white/5">
            <h2 className="text-2xl font-semibold text-white">专题文章</h2>
            <ul className="mt-5 space-y-4 text-slate-300">
              <li>• <strong>佛像材质解析：</strong>金属、石材、木料与新型复合材料的对比。</li>
              <li>• <strong>光影布局：</strong>如何用灯光与烟雾增强佛像氛围感。</li>
              <li>• <strong>空间陈设：</strong>打造适合冥想与观看的静谧场域。</li>
            </ul>
          </div>

          <div className="mt-12 flex items-center justify-between gap-4 text-sm text-slate-400">
            <Link href="/" className="rounded-full border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10">返回首页</Link>
            <Link href="/buddha" className="rounded-full border border-white/10 bg-emerald-500/10 px-4 py-3 text-emerald-200 transition hover:bg-emerald-500/15">深入佛像设计</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
