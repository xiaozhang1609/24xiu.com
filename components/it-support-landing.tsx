"use client"
import { useState } from "react"
import { Menu, X, ArrowRight, ChevronRight, ChevronUp } from "lucide-react"

const StaticImage = ({ alt, className, ...props }: { alt: string; className?: string; [key: string]: any }) => (
  <img src="/1.svg" alt={alt} className={className} {...props} />
)

const SERVICES = [
  { id: 1, title: "系统维护", description: "系统重装、系统加速、垃圾清理" },
  { id: 2, title: "游戏优化", description: "游戏帧数提升、游戏驱动安装、游戏运行优化" },
  { id: 3, title: "网络与驱动", description: "网络修复、网络优化、驱动程序安装" },
  { id: 4, title: "故障修复", description: "蓝屏修复、软件故障修复、系统崩溃恢复" },
]

const SERVICE_TARGETS = [
  { id: 1, title: "电脑小白", description: "零基础用户的贴心帮手，简单易懂的指导与全程协助" },
  { id: 2, title: "大学生", description: "论文写作、专业软件安装、学习环境优化的最佳助手" },
  { id: 3, title: "办公族", description: "提升工作效率，解决办公软件问题，保障数据安全" },
  { id: 4, title: "游戏玩家", description: "游戏性能优化，解决游戏崩溃、卡顿问题，提升游戏体验" },
]

const TESTIMONIALS = [
  {
    id: 1,
    name: "王先生",
    avatar: "王",
    service: "游戏优化",
    rating: 5,
    content: "游戏帧数从60提升到了120+，电脑运行速度快了很多，服务态度也很好！技术人员很专业，远程操作很流畅。",
  },
  {
    id: 2,
    name: "李女士",
    avatar: "李",
    service: "病毒处理",
    rating: 5,
    content: "电脑中毒了，远程几分钟就帮我解决了，非常专业，感谢！数据也完全保护好了，真的很放心。",
  },
  {
    id: 3,
    name: "张同学",
    avatar: "张",
    service: "系统修复",
    rating: 5,
    content: "系统崩溃了，以为要重装系统，没想到远程就修好了，太厉害了！省了很多时间和麻烦。",
  },
]

const FAQS = [
  { id: 1, question: "服务时间是怎样的？", answer: "我们提供7×24小时全天候服务，无论何时您遇到问题，都可以联系我们。" },
  {
    id: 2,
    question: "如何保障我的数据安全？",
    answer: "所有远程操作全程可视，不会触碰您的隐私文件，且所有数据传输均采用加密技术。",
  },
  {
    id: 3,
    question: "维修成功率有多高？",
    answer: "我们的维修成功率超过98%，对于极少数无法远程解决的问题，我们会提供替代解决方案。",
  },
  { id: 4, question: "收费方式是怎样的？", answer: "我们采用先服务后付费的模式，服务满意后再付款，让您无后顾之忧。" },
]

const NAV_ITEMS = [
  { id: "home", label: "首页" },
  { id: "services", label: "服务项目" },
  { id: "targets", label: "服务对象" },
  { id: "testimonials", label: "用户评价" },
  { id: "faq", label: "常见问题" },
]

export default function ITSupportLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [expandedFaqs, setExpandedFaqs] = useState<number[]>([])

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = sectionId === "home" ? 0 : element.offsetTop - 64
      window.scrollTo({ top: offset, behavior: "smooth" })
    }
  }

  const toggleFaq = (id: number) => {
    setExpandedFaqs((prev) => (prev.includes(id) ? prev.filter((faqId) => faqId !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm py-2" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => scrollToSection("home")}
            role="button"
            tabIndex={0}
            aria-label="返回首页"
          >
            <div className="bg-red-600 text-white font-bold py-2 px-4 text-xl rounded shadow-md">修</div>
            <span className="ml-3 font-bold text-xl text-black tracking-wide">24小时远程电脑维修</span>
          </div>

          <button
            className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-red-600 rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "关闭菜单" : "打开菜单"}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-red-600" /> : <Menu className="w-6 h-6 text-gray-800" />}
          </button>

          <nav className="hidden md:flex items-center space-x-2" role="navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
                className="font-medium text-base px-3 py-2 rounded text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://pay.24xiu.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-6 py-2 bg-red-600 text-white font-medium rounded shadow-md hover:bg-red-700 transition-colors"
            >
              立即咨询
            </a>
          </nav>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100 shadow-lg">
            <nav className="flex flex-col p-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.id)
                  }}
                  className="py-3 border-b border-gray-100 text-gray-800 hover:text-red-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://pay.24xiu.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-red-600 text-white px-4 py-3 font-medium text-center rounded shadow-md hover:bg-red-700 transition-colors"
              >
                立即咨询
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-28 md:pt-36 pb-16 md:pb-24 min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-black mb-8">
              <span className="block font-black text-5xl sm:text-6xl md:text-7xl leading-tight mb-2">专业远程</span>
              <span className="block font-black text-5xl sm:text-6xl md:text-7xl leading-tight text-red-600">
                电脑维修服务
              </span>
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
              我们提供7×24小时全天候远程技术支持，专业工程师团队帮您快速解决各类电脑问题。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center md:justify-start">
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("services")
                }}
                className="px-8 py-4 bg-red-600 text-white font-medium rounded shadow-md hover:bg-red-700 transition-colors flex items-center justify-center group"
              >
                <span>了解服务</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="https://pay.24xiu.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-gray-300 text-gray-800 font-medium rounded shadow-sm hover:border-red-600 hover:text-red-600 transition-colors flex items-center justify-center"
              >
                立即咨询
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <StaticImage alt="远程电脑维修服务示意图" className="w-full max-w-2xl h-auto drop-shadow-xl" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <StaticImage alt="电脑维修服务项目展示" className="w-full h-auto max-w-2xl mx-auto drop-shadow-lg" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-black mb-8">
                <span className="block font-light text-3xl sm:text-4xl leading-tight mb-2">专业解决</span>
                <span className="block font-bold text-3xl sm:text-4xl leading-tight text-red-600">各类电脑问题</span>
              </h2>
              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
                无论您遇到什么电脑问题，我们都能提供专业的远程支持服务。
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {SERVICES.map((service) => (
                  <div
                    key={service.id}
                    className="border-l-2 border-red-600 pl-4 hover:bg-gray-50 transition-colors p-4 rounded shadow-sm"
                  >
                    <h3 className="text-black font-medium text-xl mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-base">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Users Section */}
      <section id="targets" className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className="text-black mb-8">
                <span className="block font-light text-3xl sm:text-4xl leading-tight mb-2">为不同用户</span>
                <span className="block font-bold text-3xl sm:text-4xl leading-tight text-red-600">提供专属服务</span>
              </h2>
              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
                无论您是电脑小白还是专业用户，我们都能为您提供量身定制的解决方案。
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {SERVICE_TARGETS.map((target) => (
                  <div
                    key={target.id}
                    className="border-l-2 border-red-600 pl-4 hover:bg-white transition-colors p-4 rounded shadow-sm"
                  >
                    <h3 className="text-black font-medium text-xl mb-2">{target.title}</h3>
                    <p className="text-gray-600 text-base">{target.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <StaticImage alt="服务对象展示" className="w-full h-auto max-w-2xl mx-auto drop-shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <StaticImage alt="用户评价展示" className="w-full h-auto max-w-2xl mx-auto drop-shadow-lg" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-black mb-8">
                <span className="block font-light text-3xl sm:text-4xl leading-tight mb-2">听听我们的</span>
                <span className="block font-bold text-3xl sm:text-4xl leading-tight text-red-600">客户怎么说</span>
              </h2>
              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
                我们致力于提供最优质的服务，赢得了众多客户的信任和好评。
              </p>
              <div className="space-y-4">
                {TESTIMONIALS.map((testimonial) => (
                  <article
                    key={testimonial.id}
                    className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-full flex items-center justify-center font-semibold text-sm shadow-sm">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="text-gray-900 font-medium text-base">{testimonial.name}</h4>
                        <div className="flex items-center space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <div className="ml-auto">
                        <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
                          {testimonial.service}
                        </span>
                      </div>
                    </div>
                    <blockquote className="text-gray-600 text-sm leading-relaxed">"{testimonial.content}"</blockquote>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className="text-black mb-8">
                <span className="block font-light text-3xl sm:text-4xl leading-tight mb-2">解答您的</span>
                <span className="block font-bold text-3xl sm:text-4xl leading-tight text-red-600">常见疑惑</span>
              </h2>
              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
                以下是我们客户经常咨询的问题，如有其他疑问，欢迎随时联系我们。
              </p>
              <div className="space-y-4">
                {FAQS.map((faq) => (
                  <div
                    key={faq.id}
                    className="border border-gray-200 hover:border-red-600 transition-colors bg-white rounded shadow-sm"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-red-600 rounded"
                      aria-expanded={expandedFaqs.includes(faq.id)}
                    >
                      <h3 className="text-black font-medium text-lg">{faq.question}</h3>
                      <ChevronRight
                        className={`w-5 h-5 text-gray-600 transition-transform ${expandedFaqs.includes(faq.id) ? "rotate-90" : ""}`}
                      />
                    </button>
                    <div
                      className={`px-6 transition-all overflow-hidden ${expandedFaqs.includes(faq.id) ? "max-h-40 pb-4 opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      <p className="text-gray-600 text-base border-t border-gray-100 pt-4">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <StaticImage alt="常见问题解答" className="w-full h-auto max-w-2xl mx-auto drop-shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer - 精简页脚内容，减少冗余 */}
      <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-red-600 text-white font-bold py-2 px-4 text-xl rounded shadow-md">修</div>
                <span className="ml-3 font-bold text-xl text-white tracking-wide">24小时远程电脑维修</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                专业的远程电脑维修服务，为您解决各类电脑问题，提供全天候技术支持。
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-6 border-l-2 border-red-600 pl-3">服务项目</h3>
              <ul className="space-y-3">
                {["系统维护", "游戏优化", "网络与驱动", "故障修复"].map((service, index) => (
                  <li key={index}>
                    <a href="#services" className="text-gray-400 hover:text-white transition-colors flex items-center">
                      <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-6 border-l-2 border-red-600 pl-3">快速链接</h3>
              <ul className="space-y-3">
                {[
                  { href: "#home", label: "首页" },
                  { href: "#targets", label: "服务对象" },
                  { href: "#testimonials", label: "用户评价" },
                  { href: "#faq", label: "常见问题" },
                ].map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors flex items-center">
                      <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-6 border-l-2 border-red-600 pl-3">关注我们</h3>
              <div className="space-y-3">
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
                  微信公众号
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
                  新浪微博
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
                  抖音号
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
                  QQ群
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm mb-4">© 2025 24小时远程电脑维修服务 版权所有</p>
            <a
              href="https://beian.miit.gov.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              宁ICP备2025009289号
            </a>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={() => scrollToSection("home")}
        className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white p-3 rounded shadow-lg z-40"
        aria-label="返回顶部"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </div>
  )
}
