export const NAV_ITEMS = [
  { id: "home", label: "首页" },
  { id: "services", label: "服务项目" },
  { id: "targets", label: "服务对象" },
  { id: "testimonials", label: "用户评价" },
  { id: "faq", label: "常见问题" },
]

export const SERVICES = [
  { id: 1, title: "🎮 游戏安装与配置", description: "游戏安装教程、安装失败修复、运行库安装、Steam/Epic问题解决、显卡驱动更新" },
  { id: 2, title: "⚙️ 游戏优化与加速", description: "游戏卡顿修复、掉帧优化、FPS提升、显卡设置、系统优化、游戏加速器配置" },
  { id: 3, title: "🧩 游戏问题与修复", description: "闪退修复、黑屏问题、无法启动、更新失败、存档损坏、MOD冲突解决" },
  { id: 4, title: "💻 系统重装与环境修复", description: "重装系统、系统优化、驱动安装、DirectX/VC++修复、系统文件缺失修复" },
]

export const SERVICE_TARGETS = [
  { id: 1, title: "电脑小白", description: "零基础用户的贴心帮手，简单易懂的指导与全程协助" },
  { id: 2, title: "大学生", description: "论文写作、专业软件安装、学习环境优化的最佳助手" },
  { id: 3, title: "办公族", description: "提升工作效率，解决办公软件问题，保障数据安全" },
  { id: 4, title: "游戏玩家", description: "游戏性能优化，解决游戏崩溃、卡顿问题，提升游戏体验" },
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: "王先生",
    avatar: "王",
    service: "游戏优化",
    rating: 5,
    content: "《原神》游戏帧数从60提升到了120+，再也不卡顿了！技术人员很专业，远程操作很流畅，显卡驱动也帮我更新了。",
  },
  {
    id: 2,
    name: "李女士",
    avatar: "李",
    service: "Steam问题修复",
    rating: 5,
    content: "Steam一直登录异常，远程几分钟就帮我解决了，非常专业！现在下载游戏速度也快了很多。",
  },
  {
    id: 3,
    name: "张同学",
    avatar: "张",
    service: "游戏闪退修复",
    rating: 5,
    content: "《赛博朋克2077》一直闪退，以为要重装系统，没想到远程就修好了！原来是DirectX的问题，太厉害了。",
  },
]

export const FAQS = [
  { id: 1, question: "服务时间是怎样的？", answer: "我们提供7×24小时全天候服务，无论何时您遇到游戏问题、系统故障或其他电脑问题，都可以联系我们。" },
  {
    id: 2,
    question: "游戏卡顿、掉帧问题能解决吗？",
    answer: "可以！我们专业处理游戏卡顿、掉帧、FPS低等问题，通过显卡设置优化、系统优化、驱动更新等方式提升游戏性能。",
  },
  {
    id: 3,
    question: "Steam、Epic等平台问题能修复吗？",
    answer: "当然可以！我们处理各种游戏平台问题，包括Steam登录异常、Epic无法启动、下载速度慢、账号绑定等问题。",
  },
  {
    id: 4,
    question: "游戏闪退、黑屏、无法启动怎么办？",
    answer: "这些都是常见问题，我们通过DirectX/VC++修复、运行库安装、系统文件修复等方式快速解决游戏启动问题。",
  },
  { id: 5, question: "如何保障我的数据安全？", answer: "所有远程操作全程可视，不会触碰您的隐私文件和游戏存档，且所有数据传输均采用加密技术。" },
  { id: 6, question: "收费方式是怎样的？", answer: "我们采用先服务后付费的模式，服务满意后再付款，让您无后顾之忧。游戏优化、系统修复都有明确报价。" },
]
