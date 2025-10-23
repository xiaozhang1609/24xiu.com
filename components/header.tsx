"use client"

import { Menu, X } from "lucide-react"
import { NAV_ITEMS } from "@/lib/constants"

interface HeaderProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
  scrollToSection: (sectionId: string) => void
}

export default function Header({ isMenuOpen, setIsMenuOpen, scrollToSection }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md py-3" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => scrollToSection("home")}
          role="button"
          tabIndex={0}
          aria-label="返回首页"
        >
          <div className="bg-red-600 text-white font-black py-2.5 px-4 text-xl rounded-lg shadow-lg group-hover:bg-red-700 transition-colors">
            修
          </div>
          <span className="font-black text-xl text-black tracking-tight">24小时远程电脑维修</span>
        </div>

        <button
          className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-red-600 rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "关闭菜单" : "打开菜单"}
        >
          {isMenuOpen ? <X className="w-6 h-6 text-red-600" /> : <Menu className="w-6 h-6 text-gray-800" />}
        </button>

        <nav className="hidden md:flex items-center gap-2" role="navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.id)
              }}
              className="font-bold text-base px-4 py-2.5 rounded-lg text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-all"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://pay5.zeabur.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-7 py-2.5 bg-red-600 text-white font-bold rounded-lg shadow-lg hover:bg-red-700 hover:shadow-xl transition-all"
          >
            立即咨询
          </a>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t-2 border-gray-100 shadow-xl">
          <nav className="flex flex-col p-4 gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
                className="py-3.5 px-4 rounded-lg text-gray-800 font-bold hover:text-red-600 hover:bg-gray-50 transition-all"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://pay5.zeabur.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 bg-red-600 text-white px-4 py-3.5 font-bold text-center rounded-lg shadow-lg hover:bg-red-700 hover:shadow-xl transition-all"
            >
              立即咨询
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
