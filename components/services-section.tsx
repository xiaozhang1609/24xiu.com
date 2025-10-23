import StaticImage from "@/components/static-image"
import ServiceCard from "@/components/service-card"
import { SERVICES } from "@/lib/constants"

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 md:order-1">
            <StaticImage alt="电脑维修服务项目展示" className="w-full h-auto max-w-2xl mx-auto drop-shadow-2xl" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-black mb-6">
              <span className="block font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-3 tracking-tight">
                专业解决
              </span>
              <span className="block font-black text-4xl sm:text-5xl md:text-6xl leading-tight text-red-600 tracking-tight">
                各类电脑问题
              </span>
            </h2>
            <p className="text-gray-700 text-xl sm:text-2xl leading-relaxed mb-12 max-w-xl font-medium">
              无论您遇到什么电脑问题，我们都能提供专业的远程支持服务。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {SERVICES.map((service) => (
                <ServiceCard key={service.id} title={service.title} description={service.description} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
