import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: '24小时远程电脑维修 - 专业游戏优化、系统重装、故障修复服务',
  description: '专业的7×24小时远程电脑维修服务，提供游戏安装配置、游戏优化加速、FPS提升、系统重装、驱动安装、闪退修复、黑屏问题解决等全方位技术支持，快速解决您的电脑问题',
  keywords: '远程电脑维修,游戏安装教程,游戏卡顿,FPS提升,闪退修复,系统重装,驱动安装,Steam问题,Epic问题,显卡驱动更新,游戏优化,系统优化,DirectX修复,VC++修复',
  generator: 'Next.js, React, TypeScript',
  authors: [{ name: '24小时远程电脑维修服务' }],
  creator: '24小时远程电脑维修服务',
  publisher: '24小时远程电脑维修服务',
  robots: 'index, follow',
  openGraph: {
    title: '24小时远程电脑维修 - 专业游戏优化、系统重装服务',
    description: '专业的7×24小时远程电脑维修服务，游戏优化、系统重装、故障修复专家',
    type: 'website',
    locale: 'zh_CN',
    siteName: '24小时远程电脑维修',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
