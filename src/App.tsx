import React, { useState, useEffect } from 'react';
import { 
  FormatQuote,
  Star,
  Menu,
  Close
} from '@mui/icons-material';

import { 
  ChevronDown,
  ChevronUp,
  X,
  ExternalLink,
  Settings,
  Gamepad,
  Network,
  AlertCircle,
  Download,
  LayoutGrid,
  Monitor,
  GraduationCap,
  Globe,
  Briefcase,
  Gamepad2,
  Building2,
  Users,
  Laptop2,
  MessageCircle,
  Clock,
  Mail,
  ArrowUp
} from 'lucide-react';

import ServiceCategory from './components/ServiceCategory';

// 数据定义
const testimonials = [
  {
    review: "游戏从40帧提升到120帧，网络延迟也降到了30ms以内。技术真的没话说，一次成功，太专业了！",
    author: "张先生",
    location: "上海",
    rating: 5,
    tag: "游戏玩家",
    date: "2023-12-15"
  },
  {
    review: "电脑被病毒感染很慌张，客服耐心指导，30分钟就帮我处理好了，还教我如何预防，服务态度特别好。",
    author: "王女士",
    location: "北京",
    rating: 5,
    tag: "日常办公",
    date: "2023-12-10"
  },
  {
    review: "C盘清理释放了100G空间，电脑速度快了很多，价格也很实惠。技术员很专业，讲解很细致。",
    author: "李先生",
    location: "深圳",
    rating: 5,
    tag: "系统优化",
    date: "2023-12-05"
  },
  {
    review: "蓝屏问题困扰很久，通过远程20分钟就解决了，还帮我做了系统优化，现在用起来特别顺畅。",
    author: "陈小姐",
    location: "广州",
    rating: 5,
    tag: "故障修复",
    date: "2023-11-30"
  },
  {
    review: "新买的电脑不会设置，技术员帮我一键优化，还装好了所有常用软件，省时又省心。",
    author: "刘女士",
    location: "杭州",
    rating: 5,
    tag: "新机设置",
    date: "2023-11-25"
  },
  {
    review: "打印机连不上电脑愁死了，远程几分钟就搞定，还教我如何自己解决类似问题，很贴心。",
    author: "赵先生",
    location: "成都",
    rating: 5,
    tag: "设备故障",
    date: "2023-11-20"
  }
];



const faqs = [
  {
    question: "你们的服务时间是怎样的？",
    answer: "我们提供7*24小时的在线支持服务。无论您是深夜打游戏遇到问题，还是凌晨赶工作卡顿，我们都能及时为您解决问题。"
  },
  {
    question: "如何保证我的数据安全？",
    answer: "我们非常重视客户数据的安全。在远程操作过程中，我们会事先告知并征得您的同意，所有操作均可见。同时，我们的技术人员都签署了严格的保密协议。"
  },
  {
    question: "远程维修的成功率有多高？",
    answer: "我们的远程维修成功率超过95%。在开始维修前，我们会先进行专业评估，如果问题确实无法远程解决，我们会诚实告知并建议其他解决方案。"
  },
  {
    question: "维修费用如何收取？",
    answer: "我们采用明码标价的收费方式，根据问题的复杂程度分为不同档次。在正式维修前会告知具体费用，绝不会有任何隐藏收费。如果问题没解决，可以申请退款。"
  },
  {
    question: "维修大概需要多长时间？",
    answer: "一般的问题15-30分钟内就能解决。复杂问题可能需要1-2小时。如果是系统重装等耗时操作，我们会提前告知具体时间，并全程在线指导。"
  },
  {
    question: "如何保证维修效果？",
    answer: "我们提供维修效果保障，维修后会进行全面的功能测试。同时提供3-7天的免费复查服务，如果问题复发可以免费再次维修。"
  },
  {
    question: "可以提供发票吗？",
    answer: "可以提供正规的电子发票或纸质发票，支持公司报销。开具发票需要您提供相关的开票信息，我们会在收到信息后1-3个工作日内处理。"
  },
  {
    question: "维修过程中需要我做什么？",
    answer: "您只需要保持电脑开机和网络通畅即可。维修过程中如果需要您协助，我们会给出清晰的指导。全程您可以通过共享屏幕查看维修操作。"
  },
  {
    question: "对电脑配置有要求吗？",
    answer: "基本上所有Windows系统的电脑都可以进行远程维修。您只需要确保电脑能够正常开机、连接网络，我们就能提供服务。如有特殊情况，会提前告知。"
  }
];



function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 transition-all duration-500 
      hover:shadow-xl hover:-translate-y-2 relative 
      before:absolute before:inset-0 before:bg-gradient-to-br 
      before:from-primary/5 before:to-secondary/5 before:opacity-0 
      before:transition-opacity before:duration-500 hover:before:opacity-100">
      <div className="absolute -top-4 -left-4 bg-primary/10 rounded-full p-3">
        <FormatQuote className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
          </div>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium">
            {testimonial.tag}
          </span>
        </div>

        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          {testimonial.review}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <p className="font-semibold text-gray-900">{testimonial.author}</p>
            <p className="text-xs sm:text-sm text-gray-500">{testimonial.location}</p>
          </div>
          <p className="text-xs sm:text-sm text-gray-400">{testimonial.date}</p>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border rounded-lg">
      <button 
        className="flex justify-between items-center w-full p-4 text-left" 
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-sm sm:text-base">{faq.question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />}
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-light">
          <p className="text-sm sm:text-base">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

function App() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleConsultation = () => {
    const qrCodeContainer = document.getElementById('wechat-qr-container');
    qrCodeContainer?.classList.add('animate-attention');
    setTimeout(() => {
      qrCodeContainer?.classList.remove('animate-attention');
    }, 3000);

    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleServiceDetails = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: "首页", href: "#home" },
    { name: "服务", href: "#services" },
    { name: "用户群体", href: "#target-users" },
    { name: "评价", href: "#reviews" },
    { name: "问答", href: "#faq" }
  ];

  return (
    <main className="overflow-x-hidden">
      <header id="home" className="py-20 sm:py-24 bg-gradient-to-br from-primary-dark/95 via-primary/90 to-primary-dark/95 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.02),transparent_70%)]">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.1]"></div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-8 relative z-10">
          <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md border-b border-white/10 shadow-sm shadow-primary-dark/10 ${isScrolled ? 'bg-primary-dark/85' : 'bg-primary-dark/50'}`}>
            <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
              {/* 品牌标识区 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#dc2626] rounded-xl flex items-center justify-center shadow-lg shadow-white/5 border border-white/15 hover:scale-105 transition-transform duration-300">
                  <span className="text-xl font-bold text-white">修</span>
                </div>
                <div className="hidden sm:block">
                  <span className={`text-sm font-medium tracking-wide transition-colors duration-300 ${isScrolled ? 'text-gray-700' : 'text-white/90'}`}>24小时在线</span>
                </div>
              </div>

              {/* 桌面端导航区 */}
              <div className="hidden lg:flex items-center justify-center flex-1 max-w-2xl mx-auto">
                {/* 导航链接区 */}
                <div className="flex items-center gap-8">
                  {navItems.map((item) => (
                    <a
                      key={item.name} 
                      href={item.href}
                      className="group relative px-3 py-2"
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                    >
                      <span className={`relative z-10 text-sm font-medium tracking-wide 
                        transition-all duration-300 flex items-center gap-1.5 ${isScrolled ? 'text-white' : 'text-white/90'} group-hover:text-white`}>
                        {item.name}
                        {item.external && <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" />}
                      </span>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-secondary/80 to-secondary rounded-full
                        transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100 shadow-glow"></div>
                    </a>
                  ))}
                </div>
              </div>

              {/* 右侧操作区 */}
              <div className="flex items-center gap-6">
                {/* 社交媒体图标区 */}
                <div className="hidden lg:flex items-center gap-3">
                  {[
                    { name: "哔哩哔哩", icon: "/bilibili.svg", url: "https://space.bilibili.com/3546607630944387" },
                    { name: "YouTube", icon: "/youtube.svg", url: "https://www.youtube.com/@itxiaozhang" },
                    { name: "小红书", icon: "/xiaohongshu.svg", url: "https://www.xiaohongshu.com/user/profile/65acb5d8000000000d01f14d" },
                    { name: "抖音", icon: "/douyin.svg", url: "https://www.douyin.com/user/MS4wLjABAAAAq76DktAYd0XQ6do2ACmc_ssSIlelXf5YJTfzJ-OWOmUUYk3tO3q0ijzqA2Mf1oXx" },
                    { name: "闲鱼", icon: "/xianyu.svg", url: "https://www.goofish.com/personal?userId=2214721009630" },
                    { name: "淘宝", icon: "/tobao.svg", url: "https://zhang9.taobao.com/" }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="p-3 hover:bg-white/15 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-white/5"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={social.icon} className="w-5 h-5 transition-transform" alt={social.name} />
                    </a>
                  ))}
                </div>

                {/* 移动端菜单按钮 */}
                <button 
                  className="lg:hidden p-2.5 rounded-xl bg-white/10 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label={mobileMenuOpen ? "关闭菜单" : "打开菜单"}
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </nav>

          {/* 移动端菜单 */}          {mobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 backdrop-blur-xl z-50 flex flex-col justify-center items-center border-l border-white/10">
              <button 
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/10 hover:bg-white/15 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="关闭菜单"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex flex-col items-center gap-8">
                {navItems.map((item) => (
                  <a
                    key={item.name} 
                    href={item.href}
                    className="text-xl font-medium text-white/90 hover:text-white transition-colors flex items-center gap-3"
                    onClick={() => setMobileMenuOpen(false)}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                  >
                    {item.name}
                    {item.external && <ExternalLink className="w-4 h-4" />}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* 主内容区 */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mt-12 lg:mt-24">
            {/* 左侧内容区 */}
            <div className="w-full lg:flex-1 lg:max-w-[50%] text-center lg:text-left flex flex-col justify-center space-y-12">
              <h1 className="relative">
                <span className="block text-6xl sm:text-7xl md:text-8xl font-bold
                  bg-gradient-to-r from-white via-white/95 to-white/90
                  bg-clip-text text-transparent leading-[1.1] tracking-tight
                  animate-fade-in-up">
                  远程修电脑
                </span>
                <span className="block text-2xl sm:text-3xl mt-8 text-white/80
                  animate-fade-in-up animation-delay-200 font-medium">
                  专业的远程技术支持，随时随地为您解决问题
                </span>
              </h1>

              <div className="space-y-8 animate-fade-in-up animation-delay-400">
                <div className="relative pl-6 border-l-2 border-secondary/50">
                  <h3 className="text-xl sm:text-2xl font-medium text-white/90 mb-2">
                    <span className="bg-gradient-to-r from-secondary to-secondary-dark bg-clip-text text-transparent">极速响应</span>
                    <span className="ml-2">5分钟接单</span>
                  </h3>
                  <p className="text-sm text-white/70">7×24小时在线支持，平均响应时间＜5分钟</p>
                </div>

                <div className="relative pl-6 border-l-2 border-secondary/50">
                  <h3 className="text-xl sm:text-2xl font-medium text-white/90 mb-2">
                    <span className="bg-gradient-to-r from-secondary to-secondary-dark bg-clip-text text-transparent">专业保障</span>
                    <span className="ml-2">微软认证工程师</span>
                  </h3>
                  <p className="text-sm text-white/70">5年+远程支持经验，累计服务10000+用户</p>
                </div>

                <div className="relative pl-6 border-l-2 border-secondary/50">
                  <h3 className="text-xl sm:text-2xl font-medium text-white/90 mb-2">
                    <span className="bg-gradient-to-r from-secondary to-secondary-dark bg-clip-text text-transparent">安全无忧</span>
                    <span className="ml-2">全程可追溯</span>
                  </h3>
                  <p className="text-sm text-white/70">操作透明可查，数据安全加密，问题彻底解决</p>
                </div>
              </div>

              <div className="mt-4 lg:hidden">
                <button 
                  onClick={handleConsultation}
                  className="w-full sm:w-auto px-8 py-4 text-lg font-medium rounded-xl
                    bg-gradient-to-r from-secondary to-secondary-dark text-white
                    shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30
                    transition-all duration-300 hover:scale-105"
                >
                  立即咨询
                </button>
              </div>
            </div>

            {/* 右侧二维码区 */}
            <div className="w-full sm:w-[85%] md:w-[65%] lg:w-[45%]">
              <div className="relative">
                <div id="wechat-qr-container" className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100/20 hover:shadow-2xl transition-shadow duration-300">
                  <div className="mb-4 sm:mb-6 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/15
                    backdrop-blur-sm rounded-xl p-4 relative group hover:border-primary/20 transition-all duration-300
                    w-full max-w-[320px] mx-auto hover:shadow-lg flex flex-col items-center gap-4">
                    <div className="w-full flex items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="text-xs text-gray-500 mb-1">微信号</div>
                        <div className="text-lg sm:text-xl font-medium text-primary select-all group-hover:text-primary-dark transition-colors">xiaozhang1609</div>
                      </div>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText('xiaozhang1609');
                          const btn = document.getElementById('copy-btn');
                          if (btn) {
                            btn.textContent = '已复制';
                            setTimeout(() => {
                              btn.textContent = '复制';
                            }, 2000);
                          }
                        }}
                        id="copy-btn"
                        className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary text-sm
                          rounded-lg transition-all duration-300 font-medium hover:scale-105 hover:shadow-md"
                      >
                        复制
                      </button>
                    </div>
                    <div className="w-full max-w-[280px] h-[280px] overflow-hidden rounded-xl shadow-inner hover:shadow-md transition-shadow duration-300">
                      <img 
                        src="/wechat-qr.png" 
                        alt="微信二维码" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 服务分类部分 */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white" id="services">
        <div className="container max-w-6xl mx-auto px-4">
          {/* 标题部分优化 */}
          <div className="relative mb-16 sm:mb-20">
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl blur-2xl"></div>
            <div className="relative text-center">
              <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-primary to-primary-dark 
                bg-clip-text text-transparent mb-4 sm:mb-6 tracking-tight">
                我的服务
              </h2>
              <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                提供全方位的电脑技术支持，让您的设备运行更流畅
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <ServiceCategory 
              title="系统维护与优化" 
              items={["系统重装", "电脑加速", "C盘清理", "弹窗清除"]} 
              icon={<Settings className="w-8 h-8 text-primary" />}
            />
            <ServiceCategory 
              title="游戏相关服务" 
              items={["游戏优化", "帧数提升", "驱动安装", "网络加速"]} 
              highlight 
              icon={<Gamepad className="w-8 h-8 text-primary-dark" />}
            />
            <ServiceCategory 
              title="网络与驱动服务" 
              items={["网络修复", "驱动更新", "网络优化", "驱动管理"]} 
              icon={<Network className="w-8 h-8 text-primary" />}
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-6 lg:mt-8">
            <ServiceCategory 
              title="故障修复服务" 
              items={["蓝屏修复", "软件修复", "打印机修", "蓝牙异常"]} 
              icon={<AlertCircle className="w-8 h-8 text-primary" />}
            />
            <ServiceCategory 
              title="软件与安装服务" 
              items={["软件安装", "软件更新", "浏览器修", "软件卸载"]} 
              icon={<Download className="w-8 h-8 text-primary" />}
            />
            <ServiceCategory 
              title="其他相关服务" 
              items={["新机开荒", "电脑加速", "游戏优化", "网络修复"]} 
              icon={<LayoutGrid className="w-8 h-8 text-primary" />}
            />
          </div>
        </div>
      </section>

      {/* 服务分类部分结束后添加服务对象模块 */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-light/30" id="target-users">
        <div className="container max-w-6xl mx-auto px-4">
          {/* 标题部分优化 */}
          <div className="relative mb-16 sm:mb-20">
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl blur-2xl"></div>
            <div className="relative text-center">
              <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-primary to-primary-dark 
                bg-clip-text text-transparent mb-4 sm:mb-6 tracking-tight">
                服务对象
              </h2>
              <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                无论您是电脑小白还是专业用户，我们都能为您提供专业的技术支持服务
              </p>
            </div>
          </div>
          
          {/* 卡片网格优化 */}
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                icon: <Monitor className="w-8 h-8 text-primary" />,
                title: "电脑小白",
                desc: "零基础用户也能轻松上手",
                highlight: true,
                delay: "delay-100"
              },
              {
                icon: <GraduationCap className="w-8 h-8 text-primary" />,
                title: "大学生",
                desc: "学习软件安装与论文排版",
                delay: "delay-200"
              },
              {
                icon: <Globe className="w-8 h-8 text-primary" />,
                title: "留学生",
                desc: "跨境网络与软件支持",
                delay: "delay-300"
              },
              {
                icon: <Briefcase className="w-8 h-8 text-primary" />,
                title: "办公族",
                desc: "效率软件配置与优化",
                highlight: true,
                delay: "delay-400"
              },
              {
                icon: <Gamepad2 className="w-8 h-8 text-primary" />,
                title: "游戏玩家",
                desc: "游戏性能与网络优化",
                highlight: true,
                delay: "delay-500"
              },
              {
                icon: <Building2 className="w-8 h-8 text-primary" />,
                title: "中小企业",
                desc: "企业IT运维解决方案",
                delay: "delay-600"
              },
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                title: "中老年用户",
                desc: "耐心指导，远程协助",
                highlight: true,
                delay: "delay-700"
              },
              {
                icon: <Laptop2 className="w-8 h-8 text-primary" />,
                title: "自由工作者",
                desc: "个性化软件环境搭建",
                delay: "delay-800"
              }
            ].map((item, index) => (
              <div key={index} 
                className={`group p-6 sm:p-8 rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1
                  ${item.highlight 
                    ? 'bg-gradient-to-br from-secondary/10 via-primary/5 to-transparent shadow-lg border border-secondary/20' 
                    : 'bg-white hover:bg-gradient-to-br hover:from-gray-50/80 hover:to-white shadow border border-gray-100'}
                  animate-fadeInUp ${item.delay}
                  backdrop-blur-sm`}>
                <div className="text-3xl sm:text-4xl mb-4 sm:mb-6 transform transition-transform duration-300 group-hover:scale-110
                  relative after:absolute after:inset-0 after:bg-white/20 after:rounded-full after:blur-xl 
                  after:opacity-0 group-hover:after:opacity-100 after:transition-opacity">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                
                {/* 悬浮时显示的装饰效果 */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 
                  rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            ))}
          </div>

          {/* 底部标签优化 */}
          <div className="mt-12 sm:mt-20 text-center">
            <div className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-sm sm:text-base font-medium text-primary
              bg-primary/5 hover:bg-primary/10 transition-all duration-300 hover:scale-105
              border border-primary/10 shadow-lg shadow-primary/5">
              <span className="text-xl">💡</span>
              根据不同用户需求提供定制化服务
            </div>
          </div>
        </div>
      </section>

      {/* 用户评价部分 */}
      <section className="py-16 sm:py-20 bg-gray-light" id="reviews">
        <div className="container max-w-6xl mx-auto px-4">
          {/* 标题部分优化 */}
          <div className="relative mb-16 sm:mb-20">
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl blur-2xl"></div>
            <div className="relative text-center">
              <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-primary to-primary-dark 
                bg-clip-text text-transparent mb-4 sm:mb-6 tracking-tight">
                用户评价
              </h2>
              <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                来自真实用户的使用体验，见证我们的专业服务
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* 常见问题部分 */}
      <section className="py-16 sm:py-20 bg-white" id="faq">
        <div className="container max-w-4xl mx-auto px-4">
          {/* 标题部分优化 */}
          <div className="relative mb-16 sm:mb-20">
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl blur-2xl"></div>
            <div className="relative text-center">
              <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-primary to-primary-dark 
                bg-clip-text text-transparent mb-4 sm:mb-6 tracking-tight">
                常见问题
              </h2>
              <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                解答您最关心的问题，让远程服务更透明放心
              </p>
            </div>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openFaqIndex === index}
                onToggle={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 页脚部分 */}
      <footer className="bg-gradient-to-br from-primary-dark to-primary text-white py-16 sm:py-20 relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          {/* 页脚导航和信息 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div>
              <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                关于我们
              </h4>
              <p className="text-white/70 leading-relaxed text-sm">
                微软认证工程师领衔团队，5年+远程支持经验，7×24小时在线。5分钟极速响应，专业解决游戏卡顿、办公故障等各类电脑问题，保障您的数字体验始终流畅。
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-white/10 rounded-lg text-xs font-medium hover:bg-white/20 transition-colors cursor-default">微软认证</span>
                <span className="px-3 py-1.5 bg-white/10 rounded-lg text-xs font-medium hover:bg-white/20 transition-colors cursor-default">5年经验</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 relative inline-block">
                <span className="relative z-10">快速链接</span>
                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-secondary"></span>
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "首页", href: "#home" },
                  { name: "服务项目", href: "#services" },
                  { name: "服务对象", href: "#target-users" },
                  { name: "用户评价", href: "#reviews" },
                  { name: "常见问题", href: "#faq" }
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-sm text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary/70 group-hover:bg-secondary transition-colors"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 relative inline-block">
                <span className="relative z-10">联系方式</span>
                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-secondary"></span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-white/10 rounded-lg">
                    <MessageCircle className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">微信号</p>
                    <p className="text-sm font-medium">xiaozhang1609</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-white/10 rounded-lg">
                    <Clock className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">工作时间</p>
                    <p className="text-sm font-medium">7×24小时全天服务</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-white/10 rounded-lg">
                    <Mail className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">邮箱地址</p>
                    <p className="text-sm font-medium">support@fixpc.cc</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 relative inline-block">
                <span className="relative z-10">关注我们</span>
                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-secondary"></span>
              </h3>
              <div className="space-y-2">
                {[
                  { name: "哔哩哔哩", icon: "/bilibili.svg", url: "https://space.bilibili.com/3546607630944387" },
                  { name: "YouTube", icon: "/youtube.svg", url: "https://www.youtube.com/@itxiaozhang" },
                  { name: "小红书", icon: "/xiaohongshu.svg", url: "https://www.xiaohongshu.com/user/profile/65acb5d8000000000d01f14d" },
                  { name: "抖音", icon: "/douyin.svg", url: "https://www.douyin.com/user/MS4wLjABAAAAq76DktAYd0XQ6do2ACmc_ssSIlelXf5YJTfzJ-OWOmUUYk3tO3q0ijzqA2Mf1oXx" },
                  { name: "闲鱼", icon: "/xianyu.svg", url: "https://www.goofish.com/personal?userId=2214721009630" },
                  { name: "淘宝", icon: "/tobao.svg", url: "https://zhang9.taobao.com/" }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="block text-sm text-white/70 hover:text-white transition-colors duration-300
                      hover:translate-x-1 transform-gpu flex items-center gap-2 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/70 group-hover:bg-secondary transition-colors"></span>
                    {social.name}
                  </a>
                ))}
              </div>
              
            </div>
          </div>
          
        </div>
      </footer>

      {/* 返回顶部按钮 */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-colors duration-300 z-50"
          aria-label="返回顶部"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </main>
  );
}

export default App;