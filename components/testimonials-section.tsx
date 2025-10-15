import StaticImage from "@/components/static-image"
import TestimonialCard from "@/components/testimonial-card"
import { TESTIMONIALS } from "@/lib/constants"

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 md:order-1">
            <StaticImage alt="用户评价展示" className="w-full h-auto max-w-2xl mx-auto drop-shadow-2xl" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-black mb-6">
              <span className="block font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-3 tracking-tight">
                听听我们的
              </span>
              <span className="block font-black text-4xl sm:text-5xl md:text-6xl leading-tight text-red-600 tracking-tight">
                客户怎么说
              </span>
            </h2>
            <p className="text-gray-700 text-xl sm:text-2xl leading-relaxed mb-12 max-w-xl font-medium">
              我们致力于提供最优质的服务，赢得了众多客户的信任和好评。
            </p>
            <div className="space-y-5">
              {TESTIMONIALS.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
