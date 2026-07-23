import Link from "next/link";

export default function SprayPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.12),_transparent_28%),linear-gradient(180deg,_#020617_0%,_#081827_55%,_#050a12_100%)] text-slate-100">
      <main className="mx-auto max-w-6xl px-6 py-12 sm:px-10">
        <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">高压喷雾专题</p>
            <h1 className="text-4xl font-semibold text-white">高压喷雾：从设备到工艺的完整指南</h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-300">在本专题中，我们将系统化介绍高压喷雾系统的构建流程、雾滴控制、工艺实验与案例分析。适合希望将喷雾技术应用到雕塑修复、园林造景和智能场景中的创作者。</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[1.75rem] bg-slate-900/80 p-7 ring-1 ring-white/5">
              <h2 className="text-2xl font-semibold text-white">章节规划</h2>
              <ul className="mt-5 space-y-3 text-slate-300">
                <li>• 喷雾系统核心组件</li>
                <li>• 喷嘴与雾滴特性</li>
                <li>• 压力和流量调试</li>
                <li>• 稳定性测试与安全方案</li>
              </ul>
            </article>
            <article className="rounded-[1.75rem] bg-slate-900/80 p-7 ring-1 ring-white/5">
              <h2 className="text-2xl font-semibold text-white">典型项目</h2>
              <ul className="mt-5 space-y-3 text-slate-300">
                <li>• 雾化修复佛像表面</li>
                <li>• 雾幕与光影交互装置</li>
                <li>• 工业冷却与加湿系统</li>
                <li>• 物联网远程监控</li>
              </ul>
            </article>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-[1.75rem] bg-slate-900/80 p-7 ring-1 ring-white/5">
              <h3 className="text-xl font-semibold text-white">入门资源</h3>
              <p className="mt-3 text-slate-300 leading-7">选择合适的泵、喷嘴和管路，并理解高压系统的安全要点，是最重要的第一步。</p>
            </div>
            <div className="rounded-[1.75rem] bg-slate-900/80 p-7 ring-1 ring-white/5">
              <h3 className="text-xl font-semibold text-white">实践提示</h3>
              <p className="mt-3 text-slate-300 leading-7">记录每次调试参数、测试结果和环境条件，可帮助你快速迭代稳定方案。</p>
            </div>
          </div>

          <div className="mt-10 rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-7 ring-1 ring-white/5">
            <h2 className="text-2xl font-semibold text-white">专题文章</h2>
            <ul className="mt-5 space-y-4 text-slate-300">
              <li>• <strong>喷雾机改造指南：</strong>将商用喷雾器改装为可调压力系统。</li>
              <li>• <strong>精细雾滴控制：</strong>如何控制喷头角度和喷雾分布。</li>
              <li>• <strong>环境适应性：</strong>不同温度湿度下的稳定运行策略。</li>
            </ul>
          </div>

          <div className="mt-12 flex items-center justify-between gap-4 text-sm text-slate-400">
            <Link href="/" className="rounded-full border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10">返回首页</Link>
            <Link href="/it" className="rounded-full border border-white/10 bg-cyan-500/10 px-4 py-3 text-cyan-200 transition hover:bg-cyan-500/15">查看 IT 体系</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
