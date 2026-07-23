import Link from "next/link";

export default function ItPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.12),_transparent_28%),linear-gradient(180deg,_#020617_0%,_#081827_55%,_#050a12_100%)] text-slate-100">
      <main className="mx-auto max-w-6xl px-6 py-12 sm:px-10">
        <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-violet-300/80">IT 专题</p>
            <h1 className="text-4xl font-semibold text-white">IT 体系：从自动化到展示的完整路径</h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-300">本专题展示如何用 IT 思维将高压喷雾与佛像项目串联成一个可管理的创作体系。包含传感器数据、控制仪表板、网站发布与内容组织方案。</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[1.75rem] bg-slate-900/80 p-7 ring-1 ring-white/5">
              <h2 className="text-2xl font-semibold text-white">系统构成</h2>
              <ul className="mt-5 space-y-3 text-slate-300">
                <li>• 传感器与采集节点</li>
                <li>• 控制逻辑与自动化流程</li>
                <li>• 数据可视化与监控面板</li>
                <li>• 博客内容与项目展示</li>
              </ul>
            </article>
            <article className="rounded-[1.75rem] bg-slate-900/80 p-7 ring-1 ring-white/5">
              <h2 className="text-2xl font-semibold text-white">实践工具</h2>
              <ul className="mt-5 space-y-3 text-slate-300">
                <li>• Node.js / Python 自动化脚本</li>
                <li>• MQTT / WebSocket 实时通信</li>
                <li>• 数据库与日志存储</li>
                <li>• 前端展示与内容管理</li>
              </ul>
            </article>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-[1.75rem] bg-slate-900/80 p-7 ring-1 ring-white/5">
              <h3 className="text-xl font-semibold text-white">自动化实践</h3>
              <p className="mt-3 text-slate-300 leading-7">将喷雾与佛像场景转化为可测量、可控、可回放的工程过程，是本专题的核心目标。</p>
            </div>
            <div className="rounded-[1.75rem] bg-slate-900/80 p-7 ring-1 ring-white/5">
              <h3 className="text-xl font-semibold text-white">展示机制</h3>
              <p className="mt-3 text-slate-300 leading-7">通过博客页面和专题结构，把实践过程与成果展示给读者，形成完整闭环。</p>
            </div>
          </div>

          <div className="mt-10 rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-7 ring-1 ring-white/5">
            <h2 className="text-2xl font-semibold text-white">专题文章</h2>
            <ul className="mt-5 space-y-4 text-slate-300">
              <li>• <strong>传感器数据可视化：</strong>从采集到展示的一体化流程。</li>
              <li>• <strong>自动化控制逻辑：</strong>如何使项目运行稳定且易于调整。</li>
              <li>• <strong>博客系统设计：</strong>内容组织、导航和专题页面结构。</li>
            </ul>
          </div>

          <div className="mt-12 flex items-center justify-between gap-4 text-sm text-slate-400">
            <Link href="/" className="rounded-full border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10">返回首页</Link>
            <Link href="/spray" className="rounded-full border border-white/10 bg-violet-500/10 px-4 py-3 text-violet-200 transition hover:bg-violet-500/15">查看喷雾专题</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
