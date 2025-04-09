import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '24小时远程电脑维修',
  description: '专业的24小时远程电脑维修服务，快速解决您的电脑问题，提供专业的技术支持和维修服务',
  keywords: '远程电脑维修,24小时维修,电脑故障维修,在线技术支持,远程桌面维修',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#ffffff',
  openGraph: {
    title: '24小时远程电脑维修',
    description: '专业的24小时远程电脑维修服务，快速解决您的电脑问题，提供专业的技术支持和维修服务',
    type: 'website',
    locale: 'zh_CN',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
}
