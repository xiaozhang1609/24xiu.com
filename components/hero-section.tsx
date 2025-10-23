"use client"

import { ArrowRight } from "lucide-react"
import StaticImage from "@/components/static-image"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="pt-28 md:pt-36 pb-16 md:pb-24 min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-black mb-6">
            <span className="block font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-3 tracking-tight">
              专业远程
            </span>
            <span className="block font-black text-6xl sm:text-7xl md:text-8xl leading-tight text-red-600 tracking-tight">
              电脑维修服务
            </span>
          </h1>
          <p className="text-gray-700 text-xl sm:text-2xl leading-relaxed mb-12 max-w-xl font-medium">
            我们提供7×24小时全天候远程技术支持，专业工程师团队帮您快速解决各类电脑问题。
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("services")
              }}
              className="px-10 py-5 bg-red-600 text-white text-lg font-bold rounded-lg shadow-lg hover:bg-red-700 hover:shadow-xl transition-all flex items-center justify-center group"
            >
              <span>了解服务</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://pay5.zeabur.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 border-2 border-gray-800 text-gray-900 text-lg font-bold rounded-lg shadow-md hover:border-red-600 hover:text-red-600 hover:shadow-lg transition-all flex items-center justify-center"
            >
              立即咨询
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <StaticImage alt="远程电脑维修服务示意图" className="w-full max-w-2xl h-auto drop-shadow-2xl" />
        </div>
      </div>
    </section>
  )
}
