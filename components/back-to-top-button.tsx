"use client"

import { ChevronUp } from "lucide-react"

interface BackToTopButtonProps {
  scrollToSection: (sectionId: string) => void
}

export default function BackToTopButton({ scrollToSection }: BackToTopButtonProps) {
  return (
    <button
      onClick={() => scrollToSection("home")}
      className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white p-3 rounded shadow-lg z-40"
      aria-label="返回顶部"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  )
}
