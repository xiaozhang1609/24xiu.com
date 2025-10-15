"use client"

import { useState } from "react"
import StaticImage from "@/components/static-image"
import FAQItem from "@/components/faq-item"
import { FAQS } from "@/lib/constants"

export default function FAQSection() {
  const [expandedFaqs, setExpandedFaqs] = useState<number[]>([])

  const toggleFaq = (id: number) => {
    setExpandedFaqs((prev) => (prev.includes(id) ? prev.filter((faqId) => faqId !== id) : [...prev, id]))
  }

  return (
    <section id="faq" className="py-24 md:py-36 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <h2 className="text-black mb-6">
              <span className="block font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-3 tracking-tight">
                解答您的
              </span>
              <span className="block font-black text-4xl sm:text-5xl md:text-6xl leading-tight text-red-600 tracking-tight">
                常见疑惑
              </span>
            </h2>
            <p className="text-gray-700 text-xl sm:text-2xl leading-relaxed mb-12 max-w-xl font-medium">
              以下是我们客户经常咨询的问题，如有其他疑问，欢迎随时联系我们。
            </p>
            <div className="space-y-5">
              {FAQS.map((faq) => (
                <FAQItem
                  key={faq.id}
                  faq={faq}
                  isExpanded={expandedFaqs.includes(faq.id)}
                  onToggle={() => toggleFaq(faq.id)}
                />
              ))}
            </div>
          </div>
          <div>
            <StaticImage alt="常见问题解答" className="w-full h-auto max-w-2xl mx-auto drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
