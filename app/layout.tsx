import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "24小时远程电脑维修",
  description: "提供7x24小时专业远程电脑维修服务，解决系统维护、游戏优化、网络故障等各类电脑问题，高效便捷。",
  icons: {
    icon: "/favicon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
