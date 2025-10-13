"use client"
import { useState } from "react"
import { Menu, X, ArrowRight, ChevronRight, ChevronUp, Star, Shield, Clock, Users, Zap } from "lucide-react"

const StaticImage = ({ alt, className, ...props }: { alt: string; className?: string; [key: string]: any }) => (
  <img src="/1.svg" alt={alt} className={className} {...props} />
)

const SERVICES = [
  { 
    id: 1, 
    title: "系统维护", 
    description: "系统重装、系统加速、垃圾清理",
    icon: Shield
  },
  { 
    id: 2, 
    title: "游戏优化", 
    description: "游戏帧数提升、游戏驱动安装、游戏运行优化",
    icon: Zap
  },
  { 
    id: 3, 
    title: "网络与驱动", 
    description: "网络修复、网络优化、驱动程序安装",
    icon: Clock
  },
  { 
    id: 4, 
    title: "故障修复", 
    description: "蓝屏修复、软件问题修复、系统崩溃恢复",
    icon: Users
  },
]

const SERVICE_TARGETS = [
  { 
    id: 1, 
    title: "电脑小白", 
    description: "零基础用户的贴心帮手，简单易懂的指导与全程协助",
    highlight: "零基础"
  },
  { 
    id: 2, 
    title: "大学生", 
    description: "论文写作、专业软件安装、学习环境优化的最佳助手",
    highlight: "学习优化"
  },
  { 
    id: 3, 
    title: "办公族", 
    description: "提升工作效率，解决办公软件问题，保障数据安全",
    highlight: "效率提升"
  },
  { 
    id: 4, 
    title: "游戏玩家", 
    description: "游戏性能优化，解决游戏崩溃、卡顿问题，提升游戏体验",
    highlight: "性能优化"
  },
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

// 统一的设计系统常量
const DESIGN_SYSTEM = {
  colors: {
    primary: "red-600",
    primaryHover: "red-700",
    primaryLight: "red-50",
    accent: "amber-500",
    text: {
      primary: "gray-900",
      secondary: "gray-600",
      muted: "gray-500",
    },
    background: {
      primary: "white",
      secondary: "gray-50",
      accent: "gray-100",
    }
  },
  spacing: {
    xs: "2",
    sm: "4", 
    md: "6",
    lg: "8",
    xl: "12",
    xxl: "16",
    section: "20 md:py-32"
  },
  typography: {
    hero: "text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
    h1: "text-4xl sm:text-5xl md:text-6xl",
    h2: "text-3xl sm:text-4xl md:text-5xl",
    h3: "text-xl sm:text-2xl",
    body: "text-lg sm:text-xl",
    small: "text-sm"
  },
  shadows: {
    card: "shadow-lg hover:shadow-xl",
    button: "shadow-md hover:shadow-lg",
    image: "drop-shadow-2xl"
  },
  radius: {
    sm: "rounded-lg",
    md: "rounded-xl", 
    lg: "rounded-2xl"
  }
}

export default function ITSupportLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [expandedFaqs, setExpandedFaqs] = useState<number[]>([])

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = sectionId === "home" ? 0 : element.offsetTop - 80
      window.scrollTo({ top: offset, behavior: "smooth" })
    }
  }

  const toggleFaq = (id: number) => {
    setExpandedFaqs((prev) => (prev.includes(id) ? prev.filter((faqId) => faqId !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased">
      {/* Header - 增强对比和对齐 */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100" role="banner">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => scrollToSection("home")}
            role="button"
            tabIndex={0}
            aria-label="返回首页"
          >
            <div className="bg-red-600 text-white font-black py-3 px-4 text-2xl rounded-xl shadow-md hover:shadow-lg transform group-hover:scale-105 transition-all duration-200">
              修
            </div>
            <div className="ml-4">
              <span className="font-black text-2xl text-gray-900 tracking-tight">24小时远程</span>
              <span className="block font-black text-xl text-red-600 tracking-tight -mt-1">电脑维修</span>
            </div>
          </div>

          <button
            className="md:hidden p-3 focus:outline-none focus:ring-2 focus:ring-red-600 rounded-xl transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "关闭菜单" : "打开菜单"}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-red-600" /> : <Menu className="w-6 h-6 text-gray-800" />}
          </button>

          <nav className="hidden md:flex items-center space-x-1" role="navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
                className="font-semibold text-base px-4 py-3 rounded-xl text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://pay.24xiu.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-8 py-3 bg-red-600 text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-200"
            >
              立即咨询
            </a>
          </nav>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-gray-100 shadow-xl">
            <nav className="flex flex-col p-6 space-y-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.id)
                  }}
                  className="py-4 px-4 rounded-xl text-gray-800 hover:text-red-600 hover:bg-red-50 transition-all duration-200 font-medium border-b border-gray-100 last:border-b-0"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://pay.24xiu.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-red-600 text-white px-6 py-4 font-bold text-center rounded-xl shadow-md hover:shadow-lg hover:bg-red-700 transition-all duration-200"
              >
                立即咨询
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section - 强化对比和层次 */}
      <section
        id="home"
        className="pt-32 md:pt-40 pb-24 md:pb-32 min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-red-50"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-gray-900">
                <span className="block font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none mb-2">专业远程</span>
                <span className="block font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none text-red-600">
                  电脑维修
                </span>
              </h1>
              <div className="w-24 h-2 bg-red-600 rounded-lg mx-auto lg:mx-0"></div>
            </div>
            
            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-2xl font-medium">
              我们提供<span className="text-red-600 font-bold">7×24小时</span>全天候远程技术支持，
              <span className="text-red-600 font-bold">专业工程师团队</span>帮您快速解决各类电脑问题。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("services")
                }}
                className="group px-10 py-5 bg-red-600 text-white font-bold text-lg rounded-2xl shadow-md hover:shadow-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <span>了解服务</span>
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="https://pay.24xiu.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 border-3 border-red-600 text-red-600 font-bold text-lg rounded-2xl shadow-md hover:bg-red-600 hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                立即咨询
              </a>
            </div>

            {/* 信任指标 - 增强亲密性 */}
            <div className="pt-8 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-black text-red-600">98%</div>
                  <div className="text-sm text-gray-600 font-medium">成功率</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-black text-red-600">24/7</div>
                  <div className="text-sm text-gray-600 font-medium">全天候</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-black text-red-600">5000+</div>
                  <div className="text-sm text-gray-600 font-medium">用户</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <StaticImage alt="远程电脑维修服务示意图" className="w-full max-w-2xl h-auto drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Services Section - 优化重复和对齐 */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <StaticImage alt="电脑维修服务项目展示" className="w-full h-auto max-w-2xl mx-auto drop-shadow-2xl" />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-gray-900">
                  <span className="block font-light text-3xl sm:text-4xl md:text-5xl leading-tight mb-2">专业解决</span>
                  <span className="block font-black text-3xl sm:text-4xl md:text-5xl leading-tight text-red-600">各类电脑问题</span>
                </h2>
                <div className="w-20 h-1 bg-red-600 rounded-lg"></div>
              </div>
              
              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-xl font-medium">
                无论您遇到什么电脑问题，我们都能提供专业的远程支持服务。
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {SERVICES.map((service) => {
                  const IconComponent = service.icon
                  return (
                    <div
                      key={service.id}
                      className="group p-6 bg-white border-l-4 border-red-600 rounded-2xl shadow-lg hover:shadow-xl hover:bg-red-50 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-red-600 text-white rounded-xl group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <h3 className="text-gray-900 font-bold text-xl sm:text-2xl">{service.title}</h3>
                          <p className="text-gray-600 text-base leading-relaxed">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Users Section - 强化对比和亲密性 */}
      <section id="targets" className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-gray-900">
                  <span className="block font-light text-3xl sm:text-4xl md:text-5xl leading-tight mb-2">为不同用户</span>
                  <span className="block font-black text-3xl sm:text-4xl md:text-5xl leading-tight text-red-600">提供专属服务</span>
                </h2>
                <div className="w-20 h-1 bg-red-600 rounded-lg"></div>
              </div>
              
              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-xl font-medium">
                无论您是电脑小白还是专业用户，我们都能为您提供量身定制的解决方案。
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {SERVICE_TARGETS.map((target) => (
                  <div
                    key={target.id}
                    className="group p-6 bg-white border-l-4 border-red-600 rounded-2xl shadow-lg hover:shadow-xl hover:bg-red-50 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-gray-900 font-bold text-xl sm:text-2xl">{target.title}</h3>
                        <span className="px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-lg">
                          {target.highlight}
                        </span>
                      </div>
                      <p className="text-gray-600 text-base leading-relaxed">{target.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <StaticImage alt="服务对象展示" className="w-full h-auto max-w-2xl mx-auto drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - 优化重复和对齐 */}
      <section id="testimonials" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <StaticImage alt="用户评价展示" className="w-full h-auto max-w-2xl mx-auto drop-shadow-2xl" />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-gray-900">
                  <span className="block font-light text-3xl sm:text-4xl md:text-5xl leading-tight mb-2">听听我们的</span>
                  <span className="block font-black text-3xl sm:text-4xl md:text-5xl leading-tight text-red-600">客户怎么说</span>
                </h2>
                <div className="w-20 h-1 bg-red-600 rounded-lg"></div>
              </div>
              
              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-xl font-medium">
                我们致力于提供最优质的服务，赢得了众多客户的信任和好评。
              </p>
              
              <div className="space-y-6">
                {TESTIMONIALS.map((testimonial) => (
                  <article
                    key={testimonial.id}
                    className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 border border-gray-100 hover:border-red-600/20"
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                        {testimonial.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-gray-900 font-bold text-lg">{testimonial.name}</h4>
                          <span className="px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-lg">
                            {testimonial.service}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-gray-600 text-base leading-relaxed italic">
                      "{testimonial.content}"
                    </blockquote>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - 增强对比和亲密性 */}
      <section id="faq" className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-gray-900">
                  <span className="block font-light text-3xl sm:text-4xl md:text-5xl leading-tight mb-2">解答您的</span>
                  <span className="block font-black text-3xl sm:text-4xl md:text-5xl leading-tight text-red-600">常见疑惑</span>
                </h2>
                <div className="w-20 h-1 bg-red-600 rounded-lg"></div>
              </div>
              
              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-xl font-medium">
                以下是我们客户经常咨询的问题，如有其他疑问，欢迎随时联系我们。
              </p>
              
              <div className="space-y-4">
                {FAQS.map((faq) => (
                  <div
                    key={faq.id}
                    className="group border border-gray-200 hover:border-red-600 transition-all duration-300 bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-red-600 transition-colors"
                      aria-expanded={expandedFaqs.includes(faq.id)}
                    >
                      <h3 className="text-gray-900 font-bold text-xl sm:text-2xl pr-4">{faq.question}</h3>
                      <ChevronRight
                        className={`w-6 h-6 text-gray-600 transition-transform duration-300 flex-shrink-0 ${
                          expandedFaqs.includes(faq.id) ? "rotate-90 text-red-600" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`px-6 transition-all duration-300 overflow-hidden ${
                        expandedFaqs.includes(faq.id) ? "max-h-48 pb-5 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-600 text-base leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:sticky lg:top-32">
              <StaticImage alt="常见问题解答" className="w-full h-auto max-w-2xl mx-auto drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer - 统一设计系统 */}
      <footer className="bg-gray-900 text-white pt-20 pb-8 border-t-4 border-red-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-red-600 text-white font-black py-3 px-4 text-2xl rounded-xl shadow-lg">修</div>
                <div className="ml-4">
                  <span className="font-black text-xl text-white tracking-tight">24小时远程</span>
                  <span className="block font-black text-lg text-red-400 tracking-tight -mt-1">电脑维修</span>
                </div>
              </div>
              <p className="text-gray-400 text-base leading-relaxed">
                专业的远程电脑维修服务，为您解决各类电脑问题，提供全天候技术支持。
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-white font-bold text-xl border-l-4 border-red-600 pl-4">服务项目</h3>
              <ul className="space-y-3">
                {["系统维护", "游戏优化", "网络与驱动", "故障修复"].map((service, index) => (
                  <li key={index}>
                    <a href="#services" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-white font-bold text-xl border-l-4 border-red-600 pl-4">快速链接</h3>
              <ul className="space-y-3">
                {[
                  { href: "#home", label: "首页" },
                  { href: "#targets", label: "服务对象" },
                  { href: "#testimonials", label: "用户评价" },
                  { href: "#faq", label: "常见问题" },
                ].map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors flex items-center group">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-white font-bold text-xl border-l-4 border-red-600 pl-4">关注我们</h3>
              <div className="space-y-3">
                {["微信公众号", "新浪微博", "抖音号", "QQ群"].map((social, index) => (
                  <a key={index} href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center space-y-4">
            <p className="text-gray-500 text-sm">© 2025 24小时远程电脑维修服务 版权所有</p>
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

      {/* Back to Top Button - 统一设计 */}
      <button
        onClick={() => scrollToSection("home")}
        className="fixed bottom-8 right-8 bg-red-600 hover:bg-red-700 text-white p-4 rounded-2xl shadow-md hover:shadow-lg z-40 transform hover:scale-110 transition-all duration-300"
        aria-label="返回顶部"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </div>
  )
}