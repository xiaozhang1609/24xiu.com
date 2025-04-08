import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '24小时远程电脑维修',
  description: '专业提供24小时远程电脑维修服务，快速解决各类电脑故障问题，技术专业，服务可靠',
  keywords: '远程电脑维修,24小时维修,电脑故障维修,在线电脑维修,远程技术支持',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: '24小时远程电脑维修',
    description: '专业提供24小时远程电脑维修服务，快速解决各类电脑故障问题，技术专业，服务可靠',
    images: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
