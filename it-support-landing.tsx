"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import {
  Wifi,
  Gamepad,
  Monitor,
  PenToolIcon as Tool,
  Download,
  Laptop,
  Database,
  Globe,
  Briefcase,
  GraduationCap,
  Users,
  ChevronRight,
  Star,
  Menu,
  X,
  ExternalLink,
  CheckCircle,
  Clock,
  Shield,
  Award,
  ChevronUp,
} from "lucide-react"
import Head from "next/head"

const ITSupportLanding = () => {
  // QR Code States
  const [activeTab, setActiveTab] = useState<"friend" | "wechat" | "alipay">("friend")
  const [qrCodeLoading, setQrCodeLoading] = useState<boolean>(false)
  const [qrCodeError, setQrCodeError] = useState<boolean>(false)
  const [currentQRIndex, setCurrentQRIndex] = useState<number>(0)

  // Touch handling for QR swipe
  const touchStartX = useRef<number>(0)
  const touchEndX = useRef<number>(0)

  // Timers
  const qrRotationTimer = useRef<NodeJS.Timeout | null>(null)
  const debounceTimer = useRef<NodeJS.Timeout | null>(null)

  // UI States
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [activeSection, setActiveSection] = useState<string>("home")
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [expandedFaqs, setExpandedFaqs] = useState<number[]>([])
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false)

  // QR Code data
  const qrCodes = {
    friend: ["/weixinhaoyou1.webp", "/weixinhaoyou2.webp"],
    wechat: ["/weixinzhifu1.webp", "/weixinzhifu2.webp"],
    alipay: ["/zhifubaozhifu1.webp", "/zhifubaozhifu2.webp"],
  }

  // Touch handlers for QR swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX
    const swipeDistance = touchEndX.current - touchStartX.current

    if (Math.abs(swipeDistance) > 50) {
      const tabs = ["friend", "wechat", "alipay"]
      const currentIndex = tabs.indexOf(activeTab)
      if (swipeDistance > 0 && currentIndex > 0) {
        setActiveTab(tabs[currentIndex - 1] as "friend" | "wechat" | "alipay")
      } else if (swipeDistance < 0 && currentIndex < tabs.length - 1) {
        setActiveTab(tabs[currentIndex + 1] as "friend" | "wechat" | "alipay")
      }
    }
  }

  // QR code rotation
  const rotateQRCode = useCallback(() => {
    if (activeTab === "wechat" || activeTab === "alipay") {
      setCurrentQRIndex((prev) => (prev === 0 ? 1 : 0))
    }
  }, [activeTab])

  // Debounced tab change
  const debouncedSetActiveTab = (tab: "friend" | "wechat" | "alipay") => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current)
    debounceTimer.current = setTimeout(() => {
      setActiveTab(tab)
      setCurrentQRIndex(0)
    }, 200)
  }

  // Preload QR code images
  useEffect(() => {
    Object.values(qrCodes)
      .flat()
      .forEach((src) => {
        const img = new Image()
        img.src = src
      })
  }, [])

  // QR code rotation timer
  useEffect(() => {
    if (qrRotationTimer.current) clearInterval(qrRotationTimer.current)
    if (activeTab === "wechat" || activeTab === "alipay") {
      qrRotationTimer.current = setInterval(rotateQRCode, 10000)
    }
    return () => {
      if (qrRotationTimer.current) clearInterval(qrRotationTimer.current)
    }
  }, [activeTab, rotateQRCode])

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      setShowBackToTop(window.scrollY > 300)

      // Update active section
      const sections = ["home", "services", "targets", "testimonials", "faq"]
      const currentSection = sections.find((section) => {
        if (section === "home") return window.scrollY < 300
        const element = document.getElementById(section)
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) setActiveSection(currentSection)

      // Reveal animations
      document.querySelectorAll(".reveal").forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add("active")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Initial animation trigger
  useEffect(() => {
    setTimeout(() => window.dispatchEvent(new Event("scroll")), 100)
  }, [])

  // QR code retry handler
  const handleRetryQrCode = () => {
    setQrCodeLoading(true)
    setQrCodeError(false)
    setTimeout(() => {
      setQrCodeLoading(false)
      setQrCodeError(Math.random() > 0.9)
    }, 1500)
  }

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: sectionId === "home" ? 0 : element.offsetTop - 64,
        behavior: "smooth",
      })
    }
  }

  // Toggle FAQ
  const toggleFaq = (id: number) => {
    setExpandedFaqs((prev) => (prev.includes(id) ? prev.filter((faqId) => faqId !== id) : [...prev, id]))
  }

  // Data
  const testimonials = [
    {
      id: 1,
      name: "王先生",
      content: "游戏帧数从60提升到了120+，电脑运行速度快了很多，服务态度也很好！",
      rating: 5,
      service: "游戏优化",
      date: "2025-03-15",
    },
    {
      id: 2,
      name: "李女士",
      content: "电脑中毒了，远程几分钟就帮我解决了，非常专业，感谢！",
      rating: 5,
      service: "病毒处理",
      date: "2025-03-10",
    },
    {
      id: 3,
      name: "张同学",
      content: "系统崩溃了，以为要重装系统，没想到远程就修好了，太厉害了！",
      rating: 5,
      service: "系统修复",
      date: "2025-03-05",
    },
    {
      id: 4,
      name: "刘先生",
      content: "电脑开机特别慢，远程优化后速度提升了好几倍，非常满意！",
      rating: 5,
      service: "系统优化",
      date: "2025-02-28",
    },
    {
      id: 5,
      name: "赵女士",
      content: "软件安装一直报错，工程师很耐心地帮我解决了，服务很贴心！",
      rating: 5,
      service: "软件安装",
      date: "2025-02-20",
    },
    {
      id: 6,
      name: "陈同学",
      content: "网络连接不稳定，远程诊断后问题迎刃而解，技术真的很专业！",
      rating: 5,
      service: "网络修复",
      date: "2025-02-15",
    },
  ]

  const services = [
    {
      id: 1,
      title: "系统维护",
      icon: <Monitor className="w-6 h-6" />,
      description: "系统重装、系统加速、垃圾清理",
    },
    {
      id: 2,
      title: "游戏优化",
      icon: <Gamepad className="w-6 h-6" />,
      description: "游戏帧数提升、游戏驱动安装、游戏运行优化",
    },
    {
      id: 3,
      title: "网络与驱动",
      icon: <Wifi className="w-6 h-6" />,
      description: "网络修复、网络优化、驱动程序安装",
    },
    {
      id: 4,
      title: "故障修复",
      icon: <Tool className="w-6 h-6" />,
      description: "蓝屏修复、软件故障修复、系统崩溃恢复",
    },
    {
      id: 5,
      title: "软件安装",
      icon: <Download className="w-6 h-6" />,
      description: "软件安装、软件更新、软件激活",
    },
    {
      id: 6,
      title: "数据恢复",
      icon: <Database className="w-6 h-6" />,
      description: "误删文件恢复、硬盘数据修复、备份还原",
    },
  ]

  const serviceTargets = [
    {
      id: 1,
      title: "电脑小白",
      icon: <Users className="w-6 h-6" />,
      description: "零基础用户的贴心帮手，简单易懂的指导与全程协助",
    },
    {
      id: 2,
      title: "大学生",
      icon: <GraduationCap className="w-6 h-6" />,
      description: "论文写作、专业软件安装、学习环境优化的最佳助手",
    },
    {
      id: 3,
      title: "办公族",
      icon: <Briefcase className="w-6 h-6" />,
      description: "提升工作效率，解决办公软件问题，保障数据安全",
    },
    {
      id: 4,
      title: "游戏玩家",
      icon: <Gamepad className="w-6 h-6" />,
      description: "游戏性能优化，解决游戏崩溃、卡顿问题，提升游戏体验",
    },
    {
      id: 5,
      title: "自由工作者",
      icon: <Laptop className="w-6 h-6" />,
      description: "专业软件支持，创意工作环境优化，设备性能提升",
    },
    {
      id: 6,
      title: "留学生",
      icon: <Globe className="w-6 h-6" />,
      description: "跨国网络问题解决，语言环境配置，海外软件使用支持",
    },
  ]

  const faqs = [
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
    {
      id: 5,
      question: "维修需要多长时间？",
      answer: "大多数问题可在30分钟内解决，复杂问题最长不超过2小时，我们会提前告知预计时间。",
    },
    {
      id: 6,
      question: "如何保障服务质量？",
      answer: "所有工程师均有5年以上经验，且提供7天内免费复查服务，确保问题彻底解决。",
    },
  ]

  const advantages = [
    {
      id: 1,
      title: "快速响应",
      description: "平均5分钟内响应",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "专业团队",
      description: "5年以上经验工程师",
      icon: <Award className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "安全保障",
      description: "全程可视化操作",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      id: 4,
      title: "满意付费",
      description: "先服务后付款",
      icon: <CheckCircle className="w-6 h-6" />,
    },
  ]

  // Update the socialMedia array to include all four social platforms
  const socialMedia = [
    {
      name: "哔哩哔哩",
      url: "https://space.bilibili.com/3546607630944387",
      icon: (
        <svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor" className="text-[#5C4B63]">
          <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906L17.813 4.653zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773H5.333zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933.373zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933.373z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@itxiaozhang",
      icon: (
        <svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor" className="text-[#FF7E5F]">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "小红书",
      url: "https://www.xiaohongshu.com/user/profile/65acb5d8000000000d01f14d",
      icon: (
        <svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor" className="text-[#FF7E5F]">
          <path d="M19.2 6.4H4.8C4.36 6.4 4 6.76 4 7.2v9.6c0 .44.36.8.8.8h14.4c.44 0 .8-.36.8-.8V7.2c0-.44-.36-.8-.8-.8zm-1.6 8H6.4V8h11.2v6.4z" />
          <path d="M8 10.4h8v1.6H8z" />
          <path d="M8 13.6h5.6v1.6H8z" />
        </svg>
      ),
    },
    {
      name: "抖音",
      url: "https://www.douyin.com/user/MS4wLjABAAAAq76DktAYd0XQ6do2ACmc_ssSIlelXf5YJTfzJ-OWOmUUYk3tO3q0ijzqA2Mf1oXx",
      icon: (
        <svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor" className="text-[#5C4B63]">
          <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.59-1.16-2.59-2.5 0-1.4 1.16-2.5 2.59-2.5.27 0 .53.04.77.13v-3.13c-.27-.03-.54-.05-.81-.05-3.37 0-6.13 2.69-6.13 6 0 3.31 2.76 6 6.13 6 3.37 0 6.13-2.69 6.13-6V8.88c1.1.7 2.3 1.06 3.58 1.06v-3c-.8 0-1.58-.23-2.23-.64z" />
        </svg>
      ),
    },
  ]

  // Color schemes for cards - Updated with new brand colors
  const getColorScheme = (id: number) => {
    const schemes = [
      {
        text: "text-[#2E4A62]",
        light: "bg-[#2E4A62]/10",
        border: "border-[#2E4A62]/20",
        shadow: "shadow-[#2E4A62]/10",
        accent: "bg-[#2E4A62]",
        gradient: "from-[#2E4A62] to-[#2E4A62]/80",
      },
      {
        text: "text-[#5C4B63]",
        light: "bg-[#5C4B63]/10",
        border: "border-[#5C4B63]/20",
        shadow: "shadow-[#5C4B63]/10",
        accent: "bg-[#5C4B63]",
        gradient: "from-[#5C4B63] to-[#5C4B63]/80",
      },
      {
        text: "text-[#FF7E5F]",
        light: "bg-[#FF7E5F]/10",
        border: "border-[#FF7E5F]/20",
        shadow: "shadow-[#FF7E5F]/10",
        accent: "bg-[#FF7E5F]",
        gradient: "from-[#FF7E5F] to-[#FF7E5F]/80",
      },
    ]
    return schemes[(id - 1) % 3]
  }

  return (
    <div className="min-h-screen bg-[#F5F3F0] text-[#3D3D3D]">
      <Head>
        <title>24小时远程电脑维修</title>
        <meta name="description" content="专业远程电脑维修服务，全天候技术支持" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </Head>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 h-16 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("home")}>
            <div className="bg-[#C50A08] text-white font-bold py-2 px-4 rounded-lg text-xl shadow-md">修</div>
            <span className={`ml-2 font-bold text-xl ${isScrolled ? "text-[#2E4A62]" : "text-white"}`}>
              24小时远程维修
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none bg-white/10 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="菜单"
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-[#2E4A62]" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-[#2E4A62]" : "text-white"}`} />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {[
              { id: "home", label: "首页" },
              { id: "services", label: "服务项目" },
              { id: "targets", label: "服务对象" },
              { id: "testimonials", label: "用户评价" },
              { id: "faq", label: "常见问题" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
                className={`font-medium transition-colors duration-200 text-sm lg:text-base relative ${
                  activeSection === item.id
                    ? isScrolled
                      ? "text-[#FF7E5F]"
                      : "text-white"
                    : isScrolled
                      ? "text-[#767676] hover:text-[#FF7E5F]"
                      : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current transform -translate-y-1"></span>
                )}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 right-0 z-50 border-t border-gray-100 animate-fadeIn">
            <nav className="flex flex-col p-4">
              {[
                { id: "home", label: "首页" },
                { id: "services", label: "服务项目" },
                { id: "targets", label: "服务对象" },
                { id: "testimonials", label: "用户评价" },
                { id: "faq", label: "常见问题" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.id)
                  }}
                  className={`py-3 px-4 border-b border-gray-100 ${
                    activeSection === item.id ? "text-[#FF7E5F] font-medium" : "text-[#3D3D3D]"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("contact")
                }}
                className="mt-4 bg-[#FF7E5F] hover:bg-[#E56B4C] active:bg-[#CC573D] text-white px-4 py-3 rounded-lg font-medium shadow-md text-center transition-colors duration-300"
              >
                立即咨询
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-16 relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Updated background with brand colors */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2E4A62] via-[#2E4A62]/90 to-[#5C4B63]/90 z-10 opacity-90"></div>
          <img
            src="https://public.readdy.ai/ai/img_res/74c4303ebad28051eb5afcd151048583.jpg"
            alt="背景图"
            className="w-full h-full object-cover opacity-40"
            width="1920"
            height="1080"
            fetchPriority="high"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between min-h-[calc(80vh-4rem)] relative z-20 py-12 md:py-0">
          {/* Left Content */}
          <div className="w-full md:w-1/2 py-8 md:py-0 text-white flex flex-col justify-center md:pr-6 lg:pr-12">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 leading-tight animate-fadeInUp">
              远程维修
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF7E5F] to-[#FFD15C] inline-block">
                电脑专家
              </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white animate-fadeInUp animation-delay-200 mb-10 sm:mb-16 opacity-90">
              全天候专业工程师支持，解决您的各类电脑问题
            </p>

            {/* Social Media Icons - Enhanced */}
            <div className="mt-auto animate-fadeInUp animation-delay-300">
              <p className="text-white mb-4 text-lg uppercase tracking-wider font-medium">关注我们</p>
              <div className="flex items-center space-x-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-[#5C4B63]/20">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    aria-label={social.name}
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#2E4A62]/20 hover:bg-[#2E4A62]/30 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                      <div className="w-7 h-7 sm:w-8 sm:h-8">{social.icon}</div>
                    </div>
                    <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-medium">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Payment Area */}
          <div className="w-full md:w-5/12 mt-8 md:mt-0 flex justify-center animate-fadeInRight">
            <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 w-full max-w-md border border-[#2E4A62]/10">
              {/* Replace the QR code tabs UI with this simplified version */}
              <div className="flex mb-6 bg-[#F5F3F0] p-1.5 rounded-xl">
                <button
                  className={`flex-1 py-3 text-center cursor-pointer transition-all duration-200 font-medium rounded-lg ${
                    activeTab === "friend" ? "bg-[#2E4A62] text-white shadow-md" : "text-[#767676] hover:bg-white/80"
                  }`}
                  onClick={() => debouncedSetActiveTab("friend")}
                >
                  添加好友
                </button>
                <button
                  className={`flex-1 py-3 mx-1.5 text-center cursor-pointer transition-all duration-200 font-medium rounded-lg ${
                    activeTab === "wechat" ? "bg-[#5C4B63] text-white shadow-md" : "text-[#767676] hover:bg-white/80"
                  }`}
                  onClick={() => debouncedSetActiveTab("wechat")}
                >
                  微信支付
                </button>
                <button
                  className={`flex-1 py-3 text-center cursor-pointer transition-all duration-200 font-medium rounded-lg ${
                    activeTab === "alipay" ? "bg-[#FF7E5F] text-white shadow-md" : "text-[#767676] hover:bg-white/80"
                  }`}
                  onClick={() => debouncedSetActiveTab("alipay")}
                >
                  支付宝
                </button>
              </div>

              {/* Replace the QR code container with this improved version */}
              <div className="flex justify-center mb-6" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                {qrCodeLoading ? (
                  <div className="w-[280px] h-[280px] flex items-center justify-center bg-[#F5F3F0] rounded-xl border border-[#2E4A62]/10">
                    <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#5C4B63] border-t-transparent"></div>
                  </div>
                ) : qrCodeError ? (
                  <div className="w-[280px] h-[280px] flex flex-col items-center justify-center bg-[#F5F3F0] rounded-xl border border-[#2E4A62]/10">
                    <div className="text-[#E15554] mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div>
                    <p className="text-[#3D3D3D] mb-4 font-medium">二维码加载失败</p>
                    <button
                      onClick={handleRetryQrCode}
                      className="bg-[#FF7E5F] hover:bg-[#E56B4C] active:bg-[#CC573D] text-white px-6 py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      重试
                    </button>
                  </div>
                ) : (
                  <div className="transition-all duration-500 ease-in-out transform">
                    <div className="w-[280px] h-[280px] bg-white p-4 rounded-xl shadow-lg border border-[#2E4A62]/10">
                      <div className="w-full h-full rounded-lg overflow-hidden relative">
                        <img
                          src={qrCodes[activeTab][currentQRIndex] || "/placeholder.svg"}
                          alt={activeTab === "friend" ? "微信二维码" : activeTab === "wechat" ? "微信支付" : "支付宝"}
                          className="w-full h-full object-contain"
                          loading={activeTab === "friend" ? "eager" : "lazy"}
                        />
                        {(activeTab === "wechat" || activeTab === "alipay") && (
                          <div className="absolute bottom-2 right-2 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-[#767676]">
                            {currentQRIndex + 1}/2
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Replace the bottom text of the payment card with this simplified version */}
              <p className="text-center text-[#767676] font-medium">
                {activeTab === "friend"
                  ? "扫码添加，获取专业支持"
                  : activeTab === "wechat"
                    ? "微信扫码支付"
                    : "支付宝扫码支付"}
              </p>

              {/* Swipe indicator for mobile */}
              <div className="mt-4 text-center text-xs text-[#767676] md:hidden">
                <span>← 左右滑动切换支付方式 →</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce hidden md:flex flex-col items-center">
          <div
            className="text-white bg-white/10 p-2 rounded-full backdrop-blur-sm cursor-pointer hover:bg-white/20 transition-all duration-300"
            onClick={() => scrollToSection("services")}
          >
            <ChevronRight className="w-5 h-5 transform rotate-90" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#F5F3F0] to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E4A62] mb-3 sm:mb-4">
              我们的服务项目
            </h2>
            <p className="text-[#767676] max-w-2xl mx-auto text-base sm:text-lg">
              专业解决各类电脑问题，让您的数字生活更加顺畅
            </p>
          </div>

          {/* Replace the services section cards with this version (without icons): */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => {
              const colorScheme = getColorScheme(service.id)
              const subServices = service.description.split("、").slice(0, 3)

              return (
                <div
                  key={service.id}
                  className={`group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${colorScheme.shadow} border ${colorScheme.border} reveal`}
                >
                  {/* Content container */}
                  <div className="p-6 sm:p-8 relative">
                    <div
                      className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full ${colorScheme.light} opacity-50`}
                    ></div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#3D3D3D] mb-4 group-hover:text-[#FF7E5F] transition-colors duration-300 relative z-10">
                      {service.title}
                    </h3>

                    {/* Feature list */}
                    <div className="space-y-3 mb-6 sm:mb-8 relative z-10">
                      {subServices.map((feature, index) => (
                        <div key={index} className={`flex items-center ${colorScheme.text}`}>
                          <svg
                            className="w-5 h-5 mr-2 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action button */}
                    <div className="relative z-10">
                      <button
                        className={`group flex items-center space-x-2 ${colorScheme.text} font-medium transition-all duration-300`}
                      >
                        <span>了解详情</span>
                        <div
                          className={`w-8 h-8 rounded-full ${colorScheme.light} flex items-center justify-center transition-transform transform group-hover:translate-x-1 duration-300`}
                        >
                          <ChevronRight className="w-5 h-5" />
                        </div>
                      </button>
                    </div>

                    {/* Bottom accent bar */}
                    <div className={`absolute bottom-0 left-0 w-full h-1 ${colorScheme.accent}`}></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Targets Section */}
      <section id="targets" className="py-16 sm:py-20 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E4A62] mb-3 sm:mb-4">
              我们的服务对象
            </h2>
            <p className="text-[#767676] max-w-2xl mx-auto text-base sm:text-lg">
              无论您是谁，我们都能为您提供专业的IT支持服务
            </p>
          </div>

          {/* Replace the service targets section cards with this version (without icons): */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            {serviceTargets.map((target) => {
              const colorScheme = getColorScheme(target.id)

              return (
                <div
                  key={target.id}
                  className={`group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${colorScheme.shadow} border ${colorScheme.border} reveal`}
                >
                  {/* Content container */}
                  <div className="p-6 sm:p-8 relative">
                    <div
                      className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full ${colorScheme.light} opacity-50`}
                    ></div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#3D3D3D] mb-4 group-hover:text-[#FF7E5F] transition-colors duration-300 relative z-10">
                      {target.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#767676] mb-6 text-sm sm:text-base relative z-10">{target.description}</p>

                    {/* Feature list */}
                    <div className="space-y-3 mb-6 sm:mb-8 relative z-10">
                      <div className={`flex items-center ${colorScheme.text}`}>
                        <svg
                          className="w-5 h-5 mr-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>专业技术支持</span>
                      </div>
                      <div className={`flex items-center ${colorScheme.text}`}>
                        <svg
                          className="w-5 h-5 mr-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>个性化解决方案</span>
                      </div>
                      <div className={`flex items-center ${colorScheme.text}`}>
                        <svg
                          className="w-5 h-5 mr-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>全程贴心指导</span>
                      </div>
                    </div>

                    {/* Action button */}
                    <div className="relative z-10">
                      <button
                        className={`group flex items-center space-x-2 ${colorScheme.text} font-medium transition-all duration-300`}
                      >
                        <span>了解更多</span>
                        <div
                          className={`w-8 h-8 rounded-full ${colorScheme.light} flex items-center justify-center transition-transform transform group-hover:translate-x-1 duration-300`}
                        >
                          <ChevronRight className="w-5 h-5" />
                        </div>
                      </button>
                    </div>

                    {/* Bottom accent bar */}
                    <div className={`absolute bottom-0 left-0 w-full h-1 ${colorScheme.accent}`}></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 sm:py-20 md:py-24 bg-[#F5F3F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2E4A62] mb-3 sm:mb-4">用户真实评价</h2>
            <p className="text-[#767676] max-w-2xl mx-auto text-base sm:text-lg">听听我们的客户怎么说</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial) => {
              const colorScheme = getColorScheme(testimonial.id)

              return (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-xl shadow-md p-4 sm:p-6 border border-[#2E4A62]/10 hover:border-[#FF7E5F]/30 transition-colors duration-300 hover:shadow-lg transform hover:-translate-y-1 transition-transform duration-300 reveal"
                >
                  <div className="flex items-start mb-4">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mr-3 sm:mr-4 flex-shrink-0 bg-gradient-to-r ${colorScheme.gradient}`}
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-[#2E4A62]">{testimonial.name}</h4>
                      <div className="flex flex-wrap items-center">
                        <p className="text-[#767676] text-xs sm:text-sm mr-2">服务项目：{testimonial.service}</p>
                        <p className="text-[#767676]/70 text-xs">{testimonial.date}</p>
                      </div>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 sm:h-4 sm:w-4 ${i < testimonial.rating ? "text-[#FFD15C] fill-[#FFD15C]" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#F5F3F0] rounded-lg p-3 sm:p-4 mt-2 relative">
                    <div className="absolute top-0 left-4 transform -translate-y-1/2 rotate-45 w-3 h-3 bg-[#F5F3F0]"></div>
                    <p className="text-[#3D3D3D] italic text-sm sm:text-base">"{testimonial.content}"</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2E4A62] mb-3 sm:mb-4">常见问题解答</h2>
            <p className="text-[#767676] max-w-2xl mx-auto text-base sm:text-lg">解答您可能遇到的问题</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-xl shadow-sm border border-[#2E4A62]/10 hover:border-[#FF7E5F]/30 transition-colors duration-300 overflow-hidden reveal"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between focus:outline-none"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-[#2E4A62] flex items-center">
                    <span className="bg-gradient-to-r from-[#5C4B63] to-[#5C4B63]/80 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm">
                      {faq.id}
                    </span>
                    <span className="line-clamp-1">{faq.question}</span>
                  </h3>
                  <ChevronRight
                    className={`w-5 h-5 text-[#5C4B63] transition-transform duration-300 flex-shrink-0 ${
                      expandedFaqs.includes(faq.id) ? "transform rotate-90" : ""
                    }`}
                  />
                </button>
                <div
                  className={`px-4 sm:px-6 pb-3 sm:pb-4 transition-all duration-300 ${
                    expandedFaqs.includes(faq.id) ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p className="text-[#767676] pt-2 border-t border-gray-100 text-sm sm:text-base">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gradient-to-b from-[#F5F3F0] to-[#F5F3F0]/70 text-[#3D3D3D] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="bg-[#C50A08] text-white font-bold py-2 px-3 sm:px-4 rounded-lg text-lg sm:text-xl shadow-md">
                  修
                </div>
                <span className="ml-2 font-bold text-lg sm:text-xl text-[#2E4A62]">24小时远程维修</span>
              </div>

              <p className="mb-4 sm:mb-6 text-[#767676] leading-relaxed text-sm sm:text-base">
                我们是一支专业的IT远程支持团队，拥有5年以上经验，致力于为用户提供高效、专业的电脑问题解决方案。
                无论您是遇到系统故障、软件问题还是网络困扰，我们都能为您提供及时、专业的远程支持服务。
              </p>

              <div className="space-y-2 sm:space-y-3 text-[#3D3D3D] text-sm sm:text-base">
                <p className="flex items-center">
                  <span className="font-semibold mr-2">服务时间：</span>
                  <span>7×24小时全天候服务，节假日不休</span>
                </p>
                <p className="flex items-center">
                  <span className="font-semibold mr-2">微信号：</span>
                  <span>xiaozhang1609</span>
                </p>
                <p className="flex items-center">
                  <span className="font-semibold mr-2">服务范围：</span>
                  <span>系统维护、软件安装、网络故障、数据恢复等</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-[#2E4A62] border-b border-[#2E4A62]/20 pb-2">
                联系与关注
              </h3>

              <div className="mb-6 sm:mb-8">
                <p className="text-[#767676] mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  如需获取更多IT支持信息或查看我们的技术分享，欢迎关注我们的社交媒体账号。您也可以通过微信直接联系我们，获取即时的技术支持和解决方案。
                </p>

                <div className="flex flex-wrap gap-3 sm:gap-4 mt-3 sm:mt-4">
                  {socialMedia.map((platform, index) => (
                    <a
                      key={index}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3D3D3D] hover:text-[#FF7E5F] transition-colors duration-200 flex items-center text-sm sm:text-base"
                    >
                      {platform.name}
                      <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="text-[#767676] text-xs sm:text-sm mt-6 sm:mt-8">
                <p className="mb-2">© 2025 24小时远程维修服务 版权所有</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={() => scrollToSection("home")}
        className={`fixed bottom-4 sm:bottom-6 right-4 sm:right-6 bg-[#FF7E5F] hover:bg-[#E56B4C] active:bg-[#CC573D] text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 z-40 ${showBackToTop ? "opacity-100 visible" : "opacity-0 invisible"}`}
        aria-label="返回顶部"
      >
        <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Add CSS for animations */}
      {/* Update the global styles to improve animations and transitions */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; }
        .animate-fadeInRight { animation: fadeInRight 0.6s ease-out forwards; }
        .animate-pulse-slow { animation: pulse 3s infinite; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Improved focus styles for accessibility */
        a:focus, button:focus {
          outline: 2px solid rgba(46, 74, 98, 0.5);
          outline-offset: 2px;
        }
        
        /* Smooth scrolling for the entire page */
        html {
          scroll-behavior: smooth;
        }
        
        /* Better typography */
        body {
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  )
}

export default ITSupportLanding
