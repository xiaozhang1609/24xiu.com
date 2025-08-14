"use client"

import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import { Menu, X, ArrowRight, ChevronRight, ChevronUp, ExternalLink } from "lucide-react"

// Custom hooks for performance optimization
const useDebounce = (callback: Function, delay: number) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  return useCallback(
    (...args: any[]) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => callback(...args), delay)
    },
    [callback, delay],
  )
}

const useThrottle = (callback: Function, delay: number) => {
  const lastRun = useRef(Date.now())

  return useCallback(
    (...args: any[]) => {
      if (Date.now() - lastRun.current >= delay) {
        callback(...args)
        lastRun.current = Date.now()
      }
    },
    [callback, delay],
  )
}

// Simple SVG placeholder component
const SVGPlaceholder = ({
  width = 400,
  height = 400,
  className = "",
  text = "图片",
}: {
  width?: number
  height?: number
  className?: string
  text?: string
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={width} height={height} fill="#f3f4f6" stroke="#e5e7eb" strokeWidth="2" rx="8" />
      <circle cx={width / 2} cy={height / 2 - 20} r="30" fill="#d1d5db" />
      <rect x={width / 2 - 40} y={height / 2 + 20} width="80" height="8" fill="#d1d5db" rx="4" />
      <rect x={width / 2 - 30} y={height / 2 + 35} width="60" height="6" fill="#e5e7eb" rx="3" />
      <text x={width / 2} y={height / 2 + 60} textAnchor="middle" fill="#6b7280" fontSize="14" fontFamily="sans-serif">
        {text}
      </text>
    </svg>
  )
}

export default function ITSupportLanding() {
  // Simplified state management - removed loading state dependency
  const [state, setState] = useState({
    isMenuOpen: false,
    activeSection: "home",
    isScrolled: false,
    showBackToTop: false,
  })

  const [expandedFaqs, setExpandedFaqs] = useState<number[]>([])

  // Section refs for intersection observer
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({
    home: null,
    services: null,
    targets: null,
    testimonials: null,
    faq: null,
  })

  // Optimized scroll handler with throttling
  const handleScroll = useThrottle(() => {
    const scrollY = window.scrollY
    setState((prev) => ({
      ...prev,
      isScrolled: scrollY > 10,
      showBackToTop: scrollY > 300,
    }))

    // Optimized reveal animations
    requestAnimationFrame(() => {
      document.querySelectorAll(".reveal:not(.active)").forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add("active")
        }
      })
    })
  }, 16)

  // Debounced scroll to section
  const scrollToSection = useDebounce((sectionId: string) => {
    setState((prev) => ({ ...prev, isMenuOpen: false }))
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = sectionId === "home" ? 0 : element.offsetTop - 64
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      })
    }
  }, 100)

  // FAQ toggle handler
  const toggleFaq = useCallback((id: number) => {
    setExpandedFaqs((prev) => (prev.includes(id) ? prev.filter((faqId) => faqId !== id) : [...prev, id]))
  }, [])

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && state.isMenuOpen) {
        setState((prev) => ({ ...prev, isMenuOpen: false }))
      }
    },
    [state.isMenuOpen],
  )

  // Data objects with useMemo for performance
  const services = useMemo(
    () => [
      {
        id: 1,
        title: "系统维护",
        description: "系统重装、系统加速、垃圾清理",
      },
      {
        id: 2,
        title: "游戏优化",
        description: "游戏帧数提升、游戏驱动安装、游戏运行优化",
      },
      {
        id: 3,
        title: "网络与驱动",
        description: "网络修复、网络优化、驱动程序安装",
      },
      {
        id: 4,
        title: "故障修复",
        description: "蓝屏修复、软件故障修复、系统崩溃恢复",
      },
    ],
    [],
  )

  const serviceTargets = useMemo(
    () => [
      {
        id: 1,
        title: "电脑小白",
        description: "零基础用户的贴心帮手，简单易懂的指导与全程协助",
      },
      {
        id: 2,
        title: "大学生",
        description: "论文写作、专业软件安装、学习环境优化的最佳助手",
      },
      {
        id: 3,
        title: "办公族",
        description: "提升工作效率，解决办公软件问题，保障数据安全",
      },
      {
        id: 4,
        title: "游戏玩家",
        description: "游戏性能优化，解决游戏崩溃、卡顿问题，提升游戏体验",
      },
    ],
    [],
  )

  const testimonials = useMemo(
    () => [
      {
        id: 1,
        name: "王先生",
        avatar: "王",
        content: "游戏帧数从60提升到了120+，电脑运行速度快了很多，服务态度也很好！技术人员很专业，远程操作很流畅。",
        service: "游戏优化",
        rating: 5,
      },
      {
        id: 2,
        name: "李女士",
        avatar: "李",
        content: "电脑中毒了，远程几分钟就帮我解决了，非常专业，感谢！数据也完全保护好了，真的很放心。",
        service: "病毒处理",
        rating: 5,
      },
      {
        id: 3,
        name: "张同学",
        avatar: "张",
        content: "系统崩溃了，以为要重装系统，没想到远程就修好了，太厉害了！省了很多时间和麻烦。",
        service: "系统修复",
        rating: 5,
      },
    ],
    [],
  )

  const faqs = useMemo(
    () => [
      {
        id: 1,
        question: "服务时间是怎样的？",
        answer: "我们提供7×24小时全天候服务，无论何时您遇到问题，都可以联系我们。",
      },
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
      {
        id: 4,
        question: "收费方式是怎样的？",
        answer: "我们采用先服务后付费的模式，服务满意后再付款，让您无后顾之忧。",
      },
    ],
    [],
  )

  const socialMedia = useMemo(
    () => [
      {
        name: "哔哩哔哩",
        url: "https://space.bilibili.com/3546607630944387",
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/@itxiaozhang",
      },
      {
        name: "小红书",
        url: "https://www.xiaohongshu.com/user/profile/65acb5d8000000000d01f14d",
      },
      {
        name: "抖音",
        url: "https://www.douyin.com/user/MS4wLjABAAAAq76DktAYd0XQ6do2ACmc_ssSIlelXf5YJTfzJ-OWOmUUYk3tO3q0ijzqA2Mf1oXx",
      },
    ],
    [],
  )

  // Navigation items
  const navigationItems = useMemo(
    () => [
      { id: "home", label: "首页" },
      { id: "services", label: "服务项目" },
      { id: "targets", label: "服务对象" },
      { id: "testimonials", label: "用户评价" },
      { id: "faq", label: "常见问题" },
    ],
    [],
  )

  // Effects
  useEffect(() => {
    // Event listeners
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("keydown", handleKeyDown)

    // Intersection Observer for sections
    const observerOptions = {
      rootMargin: "-100px 0px -100px 0px",
      threshold: 0.1,
    }

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setState((prev) => ({ ...prev, activeSection: entry.target.id }))
        }
      })
    }, observerOptions)

    // Observe sections
    Object.keys(sectionRefs.current).forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        sectionRefs.current[id] = element
        sectionObserver.observe(element)
      }
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("keydown", handleKeyDown)
      sectionObserver.disconnect()
    }
  }, [handleScroll, handleKeyDown])

  // Trigger initial animations
  useEffect(() => {
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event("scroll"))
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm ${
          state.isScrolled ? "bg-white/95 shadow-sm py-2" : "bg-transparent py-4"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => scrollToSection("home")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                scrollToSection("home")
              }
            }}
            aria-label="返回首页"
          >
            <div className="bg-red-600 text-white font-bold py-2 px-4 text-xl rounded shadow-md transition-transform duration-300 group-hover:shadow-lg group-hover:-translate-y-0.5">
              修
            </div>
            <span className="ml-3 font-bold text-xl text-black tracking-wide group-hover:text-red-600 transition-colors duration-300">
              24小时远程电脑维修
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-red-600 rounded-full transition-colors duration-300"
            onClick={() => setState((prev) => ({ ...prev, isMenuOpen: !prev.isMenuOpen }))}
            aria-label={state.isMenuOpen ? "关闭菜单" : "打开菜单"}
            aria-expanded={state.isMenuOpen}
            aria-controls="mobile-menu"
          >
            {state.isMenuOpen ? (
              <X className="w-6 h-6 text-red-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800 hover:text-red-600" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" role="navigation" aria-label="主导航">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
                className={`font-medium text-base transition-all duration-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 ${
                  state.activeSection === item.id
                    ? "text-red-600 bg-red-50 shadow-sm"
                    : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                }`}
                aria-current={state.activeSection === item.id ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://pay.24xiu.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-6 py-2 bg-red-600 text-white font-medium text-base hover:bg-red-700 transition-all duration-300 rounded shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
            >
              立即咨询
            </a>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        {state.isMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden bg-white/95 backdrop-blur-sm absolute top-full left-0 right-0 z-50 border-t border-gray-100 shadow-lg animate-fadeIn"
            role="navigation"
            aria-label="移动端导航"
          >
            <nav className="flex flex-col p-4">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.id)
                  }}
                  className={`py-3 border-b border-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 ${
                    state.activeSection === item.id ? "text-red-600 font-medium" : "text-gray-800 hover:text-red-600"
                  }`}
                  aria-current={state.activeSection === item.id ? "page" : undefined}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://pay.24xiu.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-red-600 text-white px-4 py-3 font-medium text-center rounded shadow-md hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
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
        className="pt-28 md:pt-36 pb-16 md:pb-24 relative min-h-screen flex items-center bg-gradient-to-b from-white via-white to-gray-50 overflow-hidden"
        role="main"
        aria-labelledby="hero-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left - Content */}
          <div className="text-center md:text-left relative z-10">
            <h1 id="hero-title" className="text-black mb-8">
              <span className="block font-black text-5xl sm:text-6xl md:text-7xl leading-tight mb-2 tracking-tight">
                专业远程
              </span>
              <span className="block font-black text-5xl sm:text-6xl md:text-7xl leading-tight text-red-600 tracking-tight">
                电脑维修服务
              </span>
            </h1>

            <p className="text-gray-600 font-normal text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
              我们提供7×24小时全天候远程技术支持，专业工程师团队帮您快速解决各类电脑问题。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center md:justify-start">
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("services")
                }}
                className="px-8 py-4 bg-red-600 text-white font-medium text-base hover:bg-red-700 transition-all duration-300 flex items-center justify-center group rounded shadow-md hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                aria-describedby="services-description"
              >
                <span>了解服务</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://pay.24xiu.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-gray-300 text-gray-800 font-medium text-base hover:border-red-600 hover:text-red-600 transition-all duration-300 flex items-center justify-center rounded shadow-sm hover:shadow-md transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
              >
                立即咨询
              </a>
            </div>
            <div id="services-description" className="sr-only">
              查看我们提供的专业电脑维修服务项目
            </div>
          </div>

          {/* Right - Image */}
          <div className="reveal flex justify-center md:justify-end">
            <img
              src="/1.svg"
              alt="远程维修服务"
              width={500}
              height={400}
              className="w-full max-w-2xl h-auto drop-shadow-xl animate-float"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-white min-h-screen" aria-labelledby="services-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left - Image */}
            <div className="order-2 md:order-1 reveal">
              <img
                src="/1.svg"
                alt="服务项目"
                width={450}
                height={350}
                className="w-full h-auto max-w-2xl mx-auto drop-shadow-lg animate-float"
              />
            </div>

            {/* Right - Content */}
            <div className="order-1 md:order-2 reveal">
              <h2 id="services-title" className="text-black mb-8">
                <span className="block font-light text-3xl sm:text-4xl leading-tight mb-2">专业解决</span>
                <span className="block font-bold text-3xl sm:text-4xl leading-tight text-red-600">各类电脑问题</span>
              </h2>

              <p className="text-gray-600 font-normal text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
                无论您遇到什么电脑问题，我们都能提供专业的远程支持服务。
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8" role="list">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="border-l-2 border-red-600 pl-4 hover:bg-gray-50 transition-all duration-300 p-4 rounded shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                    role="listitem"
                  >
                    <h3 className="text-black font-medium text-xl mb-2">{service.title}</h3>
                    <p className="text-gray-600 font-normal text-base">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Users Section */}
      <section id="targets" className="py-20 md:py-32 bg-gray-50 min-h-screen" aria-labelledby="targets-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left - Content */}
            <div className="reveal">
              <h2 id="targets-title" className="text-black mb-8">
                <span className="block font-light text-3xl sm:text-4xl leading-tight mb-2">为不同用户</span>
                <span className="block font-bold text-3xl sm:text-4xl leading-tight text-red-600">提供专属服务</span>
              </h2>

              <p className="text-gray-600 font-normal text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
                无论您是电脑小白还是专业用户，我们都能为您提供量身定制的解决方案。
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8" role="list">
                {serviceTargets.map((target) => (
                  <div
                    key={target.id}
                    className="border-l-2 border-red-600 pl-4 hover:bg-white transition-all duration-300 p-4 rounded shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                    role="listitem"
                  >
                    <h3 className="text-black font-medium text-xl mb-2">{target.title}</h3>
                    <p className="text-gray-600 font-normal text-base">{target.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Image */}
            <div className="reveal">
              <img
                src="/1.svg"
                alt="服务对象"
                width={450}
                height={350}
                className="w-full h-auto max-w-2xl mx-auto drop-shadow-lg animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-32 bg-white min-h-screen" aria-labelledby="testimonials-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left - Image */}
            <div className="order-2 md:order-1 reveal">
              <img
                src="/1.svg"
                alt="用户评价"
                width={450}
                height={350}
                className="w-full h-auto max-w-2xl mx-auto drop-shadow-lg animate-float"
              />
            </div>

            {/* Right - Content */}
            <div className="order-1 md:order-2 reveal">
              <h2 id="testimonials-title" className="text-black mb-8">
                <span className="block font-light text-3xl sm:text-4xl leading-tight mb-2">听听我们的</span>
                <span className="block font-bold text-3xl sm:text-4xl leading-tight text-red-600">客户怎么说</span>
              </h2>

              <p className="text-gray-600 font-normal text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
                我们致力于提供最优质的服务，赢得了众多客户的信任和好评。
              </p>

              <div className="space-y-4" role="list" aria-label="客户评价">
                {testimonials.map((testimonial) => (
                  <article
                    key={testimonial.id}
                    className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group"
                    role="listitem"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div
                        className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-full flex items-center justify-center font-semibold text-sm shadow-sm"
                        aria-label={`${testimonial.name}的头像`}
                      >
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="text-gray-900 font-medium text-base">{testimonial.name}</h4>
                        <div
                          className="flex items-center space-x-1"
                          role="img"
                          aria-label={`${testimonial.rating}星评价`}
                        >
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-3 h-3 text-yellow-400 fill-current"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
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
      <section id="faq" className="py-20 md:py-32 bg-gray-50 min-h-screen" aria-labelledby="faq-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left - Content */}
            <div className="reveal">
              <h2 id="faq-title" className="text-black mb-8">
                <span className="block font-light text-3xl sm:text-4xl leading-tight mb-2">解答您的</span>
                <span className="block font-bold text-3xl sm:text-4xl leading-tight text-red-600">常见疑惑</span>
              </h2>

              <p className="text-gray-600 font-normal text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
                以下是我们客户经常咨询的问题，如有其他疑问，欢迎随时联系我们。
              </p>

              <div className="space-y-4" role="list" aria-label="常见问题">
                {faqs.map((faq) => (
                  <div
                    key={faq.id}
                    className="border border-gray-200 hover:border-red-600 transition-all duration-300 bg-white rounded shadow-sm hover:shadow-md"
                    role="listitem"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 rounded"
                      aria-expanded={expandedFaqs.includes(faq.id)}
                      aria-controls={`faq-answer-${faq.id}`}
                      id={`faq-question-${faq.id}`}
                    >
                      <h3 className="text-black font-medium text-lg">{faq.question}</h3>
                      <ChevronRight
                        className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                          expandedFaqs.includes(faq.id) ? "transform rotate-90" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    <div
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-question-${faq.id}`}
                      className={`px-6 transition-all duration-300 overflow-hidden ${
                        expandedFaqs.includes(faq.id) ? "max-h-40 pb-4 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-600 font-normal text-base border-t border-gray-100 pt-4">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Image */}
            <div className="reveal">
              <img
                src="/1.svg"
                alt="常见问题"
                width={450}
                height={350}
                className="w-full h-auto max-w-2xl mx-auto drop-shadow-lg animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-800" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Column 1: Logo and Description */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center mb-6">
                <div className="bg-red-600 text-white font-bold py-2 px-4 text-xl rounded shadow-md">修</div>
                <span className="ml-3 font-bold text-xl text-white tracking-wide">24小时远程电脑维修</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                专业的远程电脑维修服务，为您解决各类电脑问题，提供全天候技术支持。
              </p>
            </div>

            {/* Column 2: Services */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 border-l-2 border-red-600 pl-3">服务项目</h3>
              <ul className="space-y-3" role="list">
                {["系统维护", "游戏优化", "网络与驱动", "故障修复"].map((service, index) => (
                  <li key={index} role="listitem">
                    <a
                      href="#services"
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-black rounded"
                    >
                      <span className="w-1 h-1 bg-red-600 rounded-full mr-2" aria-hidden="true"></span>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 border-l-2 border-red-600 pl-3">快速链接</h3>
              <ul className="space-y-3" role="list">
                {[
                  { href: "#home", label: "首页" },
                  { href: "#targets", label: "服务对象" },
                  { href: "#testimonials", label: "用户评价" },
                  { href: "#faq", label: "常见问题" },
                ].map((link, index) => (
                  <li key={index} role="listitem">
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-black rounded"
                    >
                      <span className="w-1 h-1 bg-red-600 rounded-full mr-2" aria-hidden="true"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Follow Us */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 border-l-2 border-red-600 pl-3">关注我们</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 bg-gray-800 hover:bg-red-600 p-3 rounded shadow-md hover:shadow-lg transform hover:-translate-y-0.5 group focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-black"
                    aria-label={`访问我们的${social.name}页面`}
                  >
                    <span>{social.name}</span>
                    <ExternalLink
                      className="ml-2 w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center">
              <p className="text-gray-500 text-sm mb-2">© 2025 24小时远程电脑维修服务 版权所有</p>
              <a
                href="https://beian.miit.gov.cn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors duration-200 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-black rounded"
              >
                宁ICP备2025009289号
              </a>
            </div>
            <div className="flex space-x-6">
              {["隐私政策", "服务条款", "网站地图"].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-500 hover:text-white transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={() => scrollToSection("home")}
        className={`fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white p-3 transition-all duration-300 z-40 rounded shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 ${
          state.showBackToTop ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-4"
        }`}
        aria-label="返回顶部"
      >
        <ChevronUp className="w-5 h-5" />
      </button>

      {/* Global Styles */}
      <style jsx global>{`
        /* Base styles with improved performance */
        html, body {
          font-family: 'Noto Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background-color: #FFFFFF;
          color: #000000;
          line-height: 1.5;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
          -webkit-tap-highlight-color: transparent;
        }
        
        /* Smooth scrolling with reduced motion support */
        html {
          scroll-behavior: smooth;
        }
        
        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
          
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        /* Better typography with performance optimizations */
        body {
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          font-feature-settings: "kern" 1;
        }
        
        /* Enhanced focus styles for better accessibility */
        a:focus, button:focus, [tabindex]:focus {
          outline: 2px solid rgba(239, 68, 68, 0.8);
          outline-offset: 2px;
          border-radius: 4px;
        }
        
        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .text-gray-600 {
            color: #000000;
          }
          .text-gray-400 {
            color: #333333;
          }
          .border-gray-200 {
            border-color: #000000;
          }
        }
        
        /* Performance optimized reveal animations */
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* GPU accelerated float animation */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateZ(0);
          }
          50% {
            transform: translateY(-10px) translateZ(0);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        /* Optimized fade in animation */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px) translateZ(0);
          }
          to {
            opacity: 1;
            transform: translateY(0) translateZ(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        /* Screen reader only content */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        
        /* Enhanced responsive adjustments */
        @media (max-width: 768px) {
          h1 span {
            font-size: 2.5rem;
            line-height: 1.1;
          }
          h2 span {
            font-size: 2rem;
            line-height: 1.2;
          }
          p.text-lg {
            font-size: 1rem;
            line-height: 1.6;
          }
          .py-16 {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          
          /* Optimize mobile animations */
          .animate-float {
            animation-duration: 8s;
          }
        }
        
        @media (max-width: 480px) {
          h1 span {
            font-size: 2rem;
          }
          h2 span {
            font-size: 1.75rem;
          }
          
          /* Reduce motion on small screens for better performance */
          .reveal {
            transition-duration: 0.5s;
          }
        }
        
        /* Print styles */
        @media print {
          .bg-red-600, .text-red-600 {
            background-color: #FF0000 !important;
            color: #FF0000 !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          
          .fixed, .animate-float, .animate-fadeIn {
            display: none !important;
          }
          
          .text-gray-600 {
            color: #000000 !important;
          }
        }
        
        /* Better button states */
        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        button:disabled:hover {
          transform: none;
        }
        
        /* Improved link states */
        a[aria-current="page"] {
          font-weight: 600;
        }
        
        /* Better form controls */
        input:focus, textarea:focus, select:focus {
          outline: 2px solid rgba(239, 68, 68, 0.8);
          outline-offset: 2px;
          border-color: transparent;
        }
      `}</style>
    </div>
  )
}
