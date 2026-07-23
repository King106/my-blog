import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "雾化禅意博客",
  description: "高压喷雾、佛像与 IT 主题融合的个人博客系统。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-950 text-slate-100">
        <div className="min-h-screen">
          <header className="border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-10">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">雾化禅意</p>
                <h1 className="text-2xl font-semibold">高压喷雾 · 佛像 · IT 博客</h1>
              </div>
              <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-200">
                <a href="/" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-300/30 hover:bg-white/10">首页</a>
                <a href="/spray" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-300/30 hover:bg-white/10">喷雾</a>
                <a href="/buddha" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-300/30 hover:bg-white/10">佛像</a>
                <a href="/it" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-300/30 hover:bg-white/10">IT</a>
              </nav>
            </div>
          </header>

          <main>{children}</main>

          <footer className="border-t border-white/10 bg-slate-950/95 text-slate-500">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10">
              <p>© 2026 雾化禅意博客。技术与美学的交集。</p>
              <p className="text-sm text-slate-400">导航：喷雾 · 佛像 · IT · 系统设计</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
