"use client"

import { ChevronRight } from "lucide-react"

interface FAQ {
  id: number
  question: string
  answer: string
}

interface FAQItemProps {
  faq: FAQ
  isExpanded: boolean
  onToggle: () => void
}

export default function FAQItem({ faq, isExpanded, onToggle }: FAQItemProps) {
  return (
    <div
      className={`border-2 transition-all bg-white rounded-lg shadow-md overflow-hidden ${isExpanded ? "border-red-600 shadow-lg" : "border-gray-200 hover:border-red-600"}`}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 rounded-lg"
        aria-expanded={isExpanded}
      >
        <h3 className="text-black font-bold text-lg pr-4">{faq.question}</h3>
        <ChevronRight
          className={`w-6 h-6 text-red-600 transition-transform flex-shrink-0 ${isExpanded ? "rotate-90" : ""}`}
        />
      </button>
      <div className={`px-6 transition-all ${isExpanded ? "max-h-48 pb-5 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="text-gray-700 text-base leading-relaxed border-t-2 border-gray-100 pt-5">{faq.answer}</p>
      </div>
    </div>
  )
}
