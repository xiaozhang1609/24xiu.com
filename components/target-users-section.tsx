import StaticImage from "@/components/static-image"
import ServiceCard from "@/components/service-card"
import { SERVICE_TARGETS } from "@/lib/constants"

export default function TargetUsersSection() {
  return (
    <section id="targets" className="py-24 md:py-36 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <h2 className="text-black mb-6">
              <span className="block font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-3 tracking-tight">
                为不同用户
              </span>
              <span className="block font-black text-4xl sm:text-5xl md:text-6xl leading-tight text-red-600 tracking-tight">
                提供专属服务
              </span>
            </h2>
            <p className="text-gray-700 text-xl sm:text-2xl leading-relaxed mb-12 max-w-xl font-medium">
              无论您是电脑小白还是专业用户，我们都能为您提供量身定制的解决方案。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {SERVICE_TARGETS.map((target) => (
                <ServiceCard key={target.id} title={target.title} description={target.description} variant="white" />
              ))}
            </div>
          </div>
          <div>
            <StaticImage alt="服务对象展示" className="w-full h-auto max-w-2xl mx-auto drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
