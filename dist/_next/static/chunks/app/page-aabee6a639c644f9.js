(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{1724:(e,s,t)=>{Promise.resolve().then(t.bind(t,6864))},6864:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>B});var a=t(8081),r=t(7426),i=t.n(r),l=t(2149),n=t(6748),c=t(3597),o=t(4331),d=t(8286),x=t(5058),m=t(9939),h=t(18),b=t(7543),j=t(4150),f=t(5326),p=t(1011),u=t(7188),w=t(4159),g=t(1511),v=t(9076),N=t(2522),y=t(1153),F=t(3602),k=t(5586),E=t(4404),A=t(6801),z=t(9418),C=t.n(z);let D=()=>{let[e,s]=(0,l.useState)("friend"),[t,r]=(0,l.useState)(!1),[z,D]=(0,l.useState)(!1),[B,I]=(0,l.useState)(0),L=(0,l.useRef)(0),M=(0,l.useRef)(0),R=(0,l.useRef)(null),q=(0,l.useRef)(null),[S,T]=(0,l.useState)(!1),[U,_]=(0,l.useState)("home"),[H,O]=(0,l.useState)(!1),[Y,V]=(0,l.useState)([]),[W,X]=(0,l.useState)(!1),J={friend:["/weixinhaoyou1.webp","/weixinhaoyou2.webp"],wechat:["/weixinzhifu1.webp","/weixinzhifu2.webp"],alipay:["/zhifubaozhifu1.webp","/zhifubaozhifu2.webp"]},P=(0,l.useCallback)(()=>{("wechat"===e||"alipay"===e)&&I(e=>+(0===e))},[e]),Q=e=>{q.current&&clearTimeout(q.current),q.current=setTimeout(()=>{s(e),I(0)},200)};(0,l.useEffect)(()=>{Object.values(J).flat().forEach(e=>{new Image().src=e})},[]),(0,l.useEffect)(()=>(R.current&&clearInterval(R.current),("wechat"===e||"alipay"===e)&&(R.current=setInterval(P,1e4)),()=>{R.current&&clearInterval(R.current)}),[e,P]),(0,l.useEffect)(()=>{let e=()=>{O(window.scrollY>10),X(window.scrollY>300);let e=["home","services","targets","testimonials","faq"].find(e=>{if("home"===e)return window.scrollY<300;let s=document.getElementById(e);if(!s)return!1;let t=s.getBoundingClientRect();return t.top<=100&&t.bottom>=100});e&&_(e),document.querySelectorAll(".reveal").forEach(e=>{e.getBoundingClientRect().top<.85*window.innerHeight&&e.classList.add("active")})};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,l.useEffect)(()=>{setTimeout(()=>window.dispatchEvent(new Event("scroll")),100)},[]);let G=e=>{T(!1);let s=document.getElementById(e);s&&window.scrollTo({top:"home"===e?0:s.offsetTop-64,behavior:"smooth"})},K=e=>{V(s=>s.includes(e)?s.filter(s=>s!==e):[...s,e])},Z=[{id:1,title:"系统维护",icon:(0,a.jsx)(n.A,{className:"w-6 h-6"}),description:"系统重装、系统加速、垃圾清理"},{id:2,title:"游戏优化",icon:(0,a.jsx)(c.A,{className:"w-6 h-6"}),description:"游戏帧数提升、游戏驱动安装、游戏运行优化"},{id:3,title:"网络与驱动",icon:(0,a.jsx)(o.A,{className:"w-6 h-6"}),description:"网络修复、网络优化、驱动程序安装"},{id:4,title:"故障修复",icon:(0,a.jsx)(d.A,{className:"w-6 h-6"}),description:"蓝屏修复、软件故障修复、系统崩溃恢复"},{id:5,title:"软件安装",icon:(0,a.jsx)(x.A,{className:"w-6 h-6"}),description:"软件安装、软件更新、软件激活"},{id:6,title:"数据恢复",icon:(0,a.jsx)(m.A,{className:"w-6 h-6"}),description:"误删文件恢复、硬盘数据修复、备份还原"}],$=[{id:1,title:"电脑小白",icon:(0,a.jsx)(h.A,{className:"w-6 h-6"}),description:"零基础用户的贴心帮手，简单易懂的指导与全程协助"},{id:2,title:"大学生",icon:(0,a.jsx)(b.A,{className:"w-6 h-6"}),description:"论文写作、专业软件安装、学习环境优化的最佳助手"},{id:3,title:"办公族",icon:(0,a.jsx)(j.A,{className:"w-6 h-6"}),description:"提升工作效率，解决办公软件问题，保障数据安全"},{id:4,title:"游戏玩家",icon:(0,a.jsx)(c.A,{className:"w-6 h-6"}),description:"游戏性能优化，解决游戏崩溃、卡顿问题，提升游戏体验"},{id:5,title:"自由工作者",icon:(0,a.jsx)(f.A,{className:"w-6 h-6"}),description:"专业软件支持，创意工作环境优化，设备性能提升"},{id:6,title:"留学生",icon:(0,a.jsx)(p.A,{className:"w-6 h-6"}),description:"跨国网络问题解决，语言环境配置，海外软件使用支持"}];u.A,w.A,g.A,v.A;let ee=[{name:"哔哩哔哩",url:"https://space.bilibili.com/3546607630944387",icon:(0,a.jsx)("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"currentColor",className:"text-[#5C4B63]",children:(0,a.jsx)("path",{d:"M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906L17.813 4.653zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773H5.333zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933.373zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933.373z"})})},{name:"YouTube",url:"https://www.youtube.com/@itxiaozhang",icon:(0,a.jsx)("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"currentColor",className:"text-[#FF7E5F]",children:(0,a.jsx)("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})})},{name:"小红书",url:"https://www.xiaohongshu.com/user/profile/65acb5d8000000000d01f14d",icon:(0,a.jsxs)("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"currentColor",className:"text-[#FF7E5F]",children:[(0,a.jsx)("path",{d:"M19.2 6.4H4.8C4.36 6.4 4 6.76 4 7.2v9.6c0 .44.36.8.8.8h14.4c.44 0 .8-.36.8-.8V7.2c0-.44-.36-.8-.8-.8zm-1.6 8H6.4V8h11.2v6.4z"}),(0,a.jsx)("path",{d:"M8 10.4h8v1.6H8z"}),(0,a.jsx)("path",{d:"M8 13.6h5.6v1.6H8z"})]})},{name:"抖音",url:"https://www.douyin.com/user/MS4wLjABAAAAq76DktAYd0XQ6do2ACmc_ssSIlelXf5YJTfzJ-OWOmUUYk3tO3q0ijzqA2Mf1oXx",icon:(0,a.jsx)("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"currentColor",className:"text-[#5C4B63]",children:(0,a.jsx)("path",{d:"M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.59-1.16-2.59-2.5 0-1.4 1.16-2.5 2.59-2.5.27 0 .53.04.77.13v-3.13c-.27-.03-.54-.05-.81-.05-3.37 0-6.13 2.69-6.13 6 0 3.31 2.76 6 6.13 6 3.37 0 6.13-2.69 6.13-6V8.88c1.1.7 2.3 1.06 3.58 1.06v-3c-.8 0-1.58-.23-2.23-.64z"})})}],es=e=>[{text:"text-[#2E4A62]",light:"bg-[#2E4A62]/10",border:"border-[#2E4A62]/20",shadow:"shadow-[#2E4A62]/10",accent:"bg-[#2E4A62]",gradient:"from-[#2E4A62] to-[#2E4A62]/80"},{text:"text-[#5C4B63]",light:"bg-[#5C4B63]/10",border:"border-[#5C4B63]/20",shadow:"shadow-[#5C4B63]/10",accent:"bg-[#5C4B63]",gradient:"from-[#5C4B63] to-[#5C4B63]/80"},{text:"text-[#FF7E5F]",light:"bg-[#FF7E5F]/10",border:"border-[#FF7E5F]/20",shadow:"shadow-[#FF7E5F]/10",accent:"bg-[#FF7E5F]",gradient:"from-[#FF7E5F] to-[#FF7E5F]/80"}][(e-1)%3];return(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1 min-h-screen bg-[#F5F3F0] text-[#3D3D3D]",children:[(0,a.jsxs)(C(),{children:[(0,a.jsx)("title",{className:"jsx-705ed443c69a8be1",children:"24小时远程电脑维修"}),(0,a.jsx)("meta",{name:"description",content:"专业远程电脑维修服务，全天候技术支持",className:"jsx-705ed443c69a8be1"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0",className:"jsx-705ed443c69a8be1"})]}),(0,a.jsxs)("header",{className:"jsx-705ed443c69a8be1 "+"fixed top-0 left-0 right-0 h-16 z-50 transition-all duration-300 ".concat(H?"bg-white shadow-md":"bg-transparent"),children:[(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1 max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between",children:[(0,a.jsxs)("div",{onClick:()=>G("home"),className:"jsx-705ed443c69a8be1 flex items-center cursor-pointer",children:[(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 bg-[#C50A08] text-white font-bold py-2 px-4 rounded-lg text-xl shadow-md",children:"修"}),(0,a.jsx)("span",{className:"jsx-705ed443c69a8be1 "+"ml-2 font-bold text-xl ".concat(H?"text-[#2E4A62]":"text-white"),children:"24小时远程维修"})]}),(0,a.jsx)("button",{onClick:()=>T(!S),"aria-label":"菜单",className:"jsx-705ed443c69a8be1 md:hidden p-2 rounded-md focus:outline-none bg-white/10 backdrop-blur-sm",children:S?(0,a.jsx)(N.A,{className:"w-6 h-6 ".concat(H?"text-[#2E4A62]":"text-white")}):(0,a.jsx)(y.A,{className:"w-6 h-6 ".concat(H?"text-[#2E4A62]":"text-white")})}),(0,a.jsx)("nav",{className:"jsx-705ed443c69a8be1 hidden md:flex items-center space-x-6 lg:space-x-10",children:[{id:"home",label:"首页"},{id:"services",label:"服务项目"},{id:"targets",label:"服务对象"},{id:"testimonials",label:"用户评价"},{id:"faq",label:"常见问题"}].map(e=>(0,a.jsxs)("a",{href:"#".concat(e.id),onClick:s=>{s.preventDefault(),G(e.id)},className:"jsx-705ed443c69a8be1 "+"font-medium transition-colors duration-200 text-sm lg:text-base relative ".concat(U===e.id?H?"text-[#FF7E5F]":"text-white":H?"text-[#767676] hover:text-[#FF7E5F]":"text-white/90 hover:text-white"),children:[e.label,U===e.id&&(0,a.jsx)("span",{className:"jsx-705ed443c69a8be1 absolute bottom-0 left-0 w-full h-0.5 bg-current transform -translate-y-1"})]},e.id))})]}),S&&(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 md:hidden bg-white shadow-lg absolute top-16 left-0 right-0 z-50 border-t border-gray-100 animate-fadeIn",children:(0,a.jsxs)("nav",{className:"jsx-705ed443c69a8be1 flex flex-col p-4",children:[[{id:"home",label:"首页"},{id:"services",label:"服务项目"},{id:"targets",label:"服务对象"},{id:"testimonials",label:"用户评价"},{id:"faq",label:"常见问题"}].map(e=>(0,a.jsx)("a",{href:"#".concat(e.id),onClick:s=>{s.preventDefault(),G(e.id)},className:"jsx-705ed443c69a8be1 "+"py-3 px-4 border-b border-gray-100 ".concat(U===e.id?"text-[#FF7E5F] font-medium":"text-[#3D3D3D]"),children:e.label},e.id)),(0,a.jsx)("a",{href:"#contact",onClick:e=>{e.preventDefault(),G("contact")},className:"jsx-705ed443c69a8be1 mt-4 bg-[#FF7E5F] hover:bg-[#E56B4C] active:bg-[#CC573D] text-white px-4 py-3 rounded-lg font-medium shadow-md text-center transition-colors duration-300",children:"立即咨询"})]})})]}),(0,a.jsxs)("section",{id:"home",className:"jsx-705ed443c69a8be1 pt-16 relative min-h-screen flex items-center",children:[(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1 absolute inset-0 z-0 overflow-hidden",children:[(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 absolute inset-0 bg-gradient-to-r from-[#2E4A62] via-[#2E4A62]/90 to-[#5C4B63]/90 z-10 opacity-90"}),(0,a.jsx)("img",{src:"https://public.readdy.ai/ai/img_res/74c4303ebad28051eb5afcd151048583.jpg",alt:"背景图",width:"1920",height:"1080",fetchPriority:"high",className:"jsx-705ed443c69a8be1 w-full h-full object-cover opacity-40"})]}),(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between min-h-[calc(80vh-4rem)] relative z-20 py-12 md:py-0",children:[(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1 w-full md:w-1/2 py-8 md:py-0 text-white flex flex-col justify-center md:pr-6 lg:pr-12",children:[(0,a.jsxs)("h1",{className:"jsx-705ed443c69a8be1 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 leading-tight animate-fadeInUp",children:["远程维修",(0,a.jsx)("br",{className:"jsx-705ed443c69a8be1"}),(0,a.jsx)("span",{className:"jsx-705ed443c69a8be1 bg-clip-text text-transparent bg-gradient-to-r from-[#FF7E5F] to-[#FFD15C] inline-block",children:"电脑专家"})]}),(0,a.jsx)("p",{className:"jsx-705ed443c69a8be1 text-xl sm:text-2xl md:text-3xl text-white animate-fadeInUp animation-delay-200 mb-10 sm:mb-16 opacity-90",children:"全天候专业工程师支持，解决您的各类电脑问题"}),(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1 mt-auto animate-fadeInUp animation-delay-300",children:[(0,a.jsx)("p",{className:"jsx-705ed443c69a8be1 text-white mb-4 text-lg uppercase tracking-wider font-medium",children:"关注我们"}),(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 flex items-center space-x-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-[#5C4B63]/20",children:ee.map((e,s)=>(0,a.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer","aria-label":e.name,className:"jsx-705ed443c69a8be1 group relative",children:[(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 w-14 h-14 sm:w-16 sm:h-16 bg-[#2E4A62]/20 hover:bg-[#2E4A62]/30 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg",children:(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 w-7 h-7 sm:w-8 sm:h-8",children:e.icon})}),(0,a.jsx)("span",{className:"jsx-705ed443c69a8be1 absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-medium",children:e.name})]},s))})]})]}),(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 w-full md:w-5/12 mt-8 md:mt-0 flex justify-center animate-fadeInRight",children:(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1 bg-white rounded-2xl shadow-2xl p-4 sm:p-6 w-full max-w-md border border-[#2E4A62]/10",children:[(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1 flex mb-6 bg-[#F5F3F0] p-1.5 rounded-xl",children:[(0,a.jsx)("button",{onClick:()=>Q("friend"),className:"jsx-705ed443c69a8be1 "+"flex-1 py-3 text-center cursor-pointer transition-all duration-200 font-medium rounded-lg ".concat("friend"===e?"bg-[#2E4A62] text-white shadow-md":"text-[#767676] hover:bg-white/80"),children:"添加好友"}),(0,a.jsx)("button",{onClick:()=>Q("wechat"),className:"jsx-705ed443c69a8be1 "+"flex-1 py-3 mx-1.5 text-center cursor-pointer transition-all duration-200 font-medium rounded-lg ".concat("wechat"===e?"bg-[#5C4B63] text-white shadow-md":"text-[#767676] hover:bg-white/80"),children:"微信支付"}),(0,a.jsx)("button",{onClick:()=>Q("alipay"),className:"jsx-705ed443c69a8be1 "+"flex-1 py-3 text-center cursor-pointer transition-all duration-200 font-medium rounded-lg ".concat("alipay"===e?"bg-[#FF7E5F] text-white shadow-md":"text-[#767676] hover:bg-white/80"),children:"支付宝"})]}),(0,a.jsx)("div",{onTouchStart:e=>{L.current=e.touches[0].clientX},onTouchEnd:t=>{M.current=t.changedTouches[0].clientX;let a=M.current-L.current;if(Math.abs(a)>50){let t=["friend","wechat","alipay"],r=t.indexOf(e);a>0&&r>0?s(t[r-1]):a<0&&r<t.length-1&&s(t[r+1])}},className:"jsx-705ed443c69a8be1 flex justify-center mb-6",children:t?(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 w-[280px] h-[280px] flex items-center justify-center bg-[#F5F3F0] rounded-xl border border-[#2E4A62]/10",children:(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 animate-spin rounded-full h-16 w-16 border-4 border-[#5C4B63] border-t-transparent"})}):z?(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1 w-[280px] h-[280px] flex flex-col items-center justify-center bg-[#F5F3F0] rounded-xl border border-[#2E4A62]/10",children:[(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 text-[#E15554] mb-4",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"jsx-705ed443c69a8be1 h-16 w-16",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",className:"jsx-705ed443c69a8be1"})})}),(0,a.jsx)("p",{className:"jsx-705ed443c69a8be1 text-[#3D3D3D] mb-4 font-medium",children:"二维码加载失败"}),(0,a.jsx)("button",{onClick:()=>{r(!0),D(!1),setTimeout(()=>{r(!1),D(Math.random()>.9)},1500)},className:"jsx-705ed443c69a8be1 bg-[#FF7E5F] hover:bg-[#E56B4C] active:bg-[#CC573D] text-white px-6 py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200",children:"重试"})]}):(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 transition-all duration-500 ease-in-out transform",children:(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 w-[280px] h-[280px] bg-white p-4 rounded-xl shadow-lg border border-[#2E4A62]/10",children:(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1 w-full h-full rounded-lg overflow-hidden relative",children:[(0,a.jsx)("img",{src:J[e][B]||"/placeholder.svg",alt:"friend"===e?"微信二维码":"wechat"===e?"微信支付":"支付宝",loading:"friend"===e?"eager":"lazy",className:"jsx-705ed443c69a8be1 w-full h-full object-contain"}),("wechat"===e||"alipay"===e)&&(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1 absolute bottom-2 right-2 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-[#767676]",children:[B+1,"/2"]})]})})})}),(0,a.jsx)("p",{className:"jsx-705ed443c69a8be1 text-center text-[#767676] font-medium",children:"friend"===e?"扫码添加，获取专业支持":"wechat"===e?"微信扫码支付":"支付宝扫码支付"}),(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 mt-4 text-center text-xs text-[#767676] md:hidden",children:(0,a.jsx)("span",{className:"jsx-705ed443c69a8be1",children:"← 左右滑动切换支付方式 →"})})]})})]}),(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce hidden md:flex flex-col items-center",children:(0,a.jsx)("div",{onClick:()=>G("services"),className:"jsx-705ed443c69a8be1 text-white bg-white/10 p-2 rounded-full backdrop-blur-sm cursor-pointer hover:bg-white/20 transition-all duration-300",children:(0,a.jsx)(F.A,{className:"w-5 h-5 transform rotate-90"})})})]}),(0,a.jsx)("section",{id:"services",className:"jsx-705ed443c69a8be1 py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#F5F3F0] to-white relative",children:(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1 max-w-7xl mx-auto px-4 sm:px-6 relative z-10",children:[(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1 text-center mb-10 sm:mb-16",children:[(0,a.jsx)("h2",{className:"jsx-705ed443c69a8be1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E4A62] mb-3 sm:mb-4",children:"我们的服务项目"}),(0,a.jsx)("p",{className:"jsx-705ed443c69a8be1 text-[#767676] max-w-2xl mx-auto text-base sm:text-lg",children:"专业解决各类电脑问题，让您的数字生活更加顺畅"})]}),(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",children:Z.map(e=>{let s=es(e.id),t=e.description.split("、").slice(0,3);return(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 "+"group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ".concat(s.shadow," border ").concat(s.border," reveal"),children:(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1 p-6 sm:p-8 relative",children:[(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 "+"absolute top-0 right-0 w-24 h-24 rounded-bl-full ".concat(s.light," opacity-50")}),(0,a.jsx)("h3",{className:"jsx-705ed443c69a8be1 text-xl sm:text-2xl font-bold text-[#3D3D3D] mb-4 group-hover:text-[#FF7E5F] transition-colors duration-300 relative z-10",children:e.title}),(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 space-y-3 mb-6 sm:mb-8 relative z-10",children:t.map((e,t)=>(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1 "+"flex items-center ".concat(s.text),children:[(0,a.jsx)("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"jsx-705ed443c69a8be1 w-5 h-5 mr-2 flex-shrink-0",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7",className:"jsx-705ed443c69a8be1"})}),(0,a.jsx)("span",{className:"jsx-705ed443c69a8be1",children:e})]},t))}),(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 relative z-10",children:(0,a.jsxs)("button",{className:"jsx-705ed443c69a8be1 "+"group flex items-center space-x-2 ".concat(s.text," font-medium transition-all duration-300"),children:[(0,a.jsx)("span",{className:"jsx-705ed443c69a8be1",children:"了解详情"}),(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 "+"w-8 h-8 rounded-full ".concat(s.light," flex items-center justify-center transition-transform transform group-hover:translate-x-1 duration-300"),children:(0,a.jsx)(F.A,{className:"w-5 h-5"})})]})}),(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 "+"absolute bottom-0 left-0 w-full h-1 ".concat(s.accent)})]})},e.id)})})]})}),(0,a.jsx)("section",{id:"targets",className:"jsx-705ed443c69a8be1 py-16 sm:py-20 md:py-24 bg-white relative",children:(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1 max-w-7xl mx-auto px-4 sm:px-6 relative z-10",children:[(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1 text-center mb-10 sm:mb-16",children:[(0,a.jsx)("h2",{className:"jsx-705ed443c69a8be1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E4A62] mb-3 sm:mb-4",children:"我们的服务对象"}),(0,a.jsx)("p",{className:"jsx-705ed443c69a8be1 text-[#767676] max-w-2xl mx-auto text-base sm:text-lg",children:"无论您是谁，我们都能为您提供专业的IT支持服务"})]}),(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10",children:$.map(e=>{let s=es(e.id);return(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 "+"group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ".concat(s.shadow," border ").concat(s.border," reveal"),children:(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1 p-6 sm:p-8 relative",children:[(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 "+"absolute top-0 right-0 w-24 h-24 rounded-bl-full ".concat(s.light," opacity-50")}),(0,a.jsx)("h3",{className:"jsx-705ed443c69a8be1 text-xl sm:text-2xl font-bold text-[#3D3D3D] mb-4 group-hover:text-[#FF7E5F] transition-colors duration-300 relative z-10",children:e.title}),(0,a.jsx)("p",{className:"jsx-705ed443c69a8be1 text-[#767676] mb-6 text-sm sm:text-base relative z-10",children:e.description}),(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1 space-y-3 mb-6 sm:mb-8 relative z-10",children:[(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1 "+"flex items-center ".concat(s.text),children:[(0,a.jsx)("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"jsx-705ed443c69a8be1 w-5 h-5 mr-2 flex-shrink-0",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7",className:"jsx-705ed443c69a8be1"})}),(0,a.jsx)("span",{className:"jsx-705ed443c69a8be1",children:"专业技术支持"})]}),(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1 "+"flex items-center ".concat(s.text),children:[(0,a.jsx)("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"jsx-705ed443c69a8be1 w-5 h-5 mr-2 flex-shrink-0",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7",className:"jsx-705ed443c69a8be1"})}),(0,a.jsx)("span",{className:"jsx-705ed443c69a8be1",children:"个性化解决方案"})]}),(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1 "+"flex items-center ".concat(s.text),children:[(0,a.jsx)("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"jsx-705ed443c69a8be1 w-5 h-5 mr-2 flex-shrink-0",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7",className:"jsx-705ed443c69a8be1"})}),(0,a.jsx)("span",{className:"jsx-705ed443c69a8be1",children:"全程贴心指导"})]})]}),(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 relative z-10",children:(0,a.jsxs)("button",{className:"jsx-705ed443c69a8be1 "+"group flex items-center space-x-2 ".concat(s.text," font-medium transition-all duration-300"),children:[(0,a.jsx)("span",{className:"jsx-705ed443c69a8be1",children:"了解更多"}),(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 "+"w-8 h-8 rounded-full ".concat(s.light," flex items-center justify-center transition-transform transform group-hover:translate-x-1 duration-300"),children:(0,a.jsx)(F.A,{className:"w-5 h-5"})})]})}),(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 "+"absolute bottom-0 left-0 w-full h-1 ".concat(s.accent)})]})},e.id)})})]})}),(0,a.jsx)("section",{id:"testimonials",className:"jsx-705ed443c69a8be1 py-16 sm:py-20 md:py-24 bg-[#F5F3F0]",children:(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1 max-w-7xl mx-auto px-4 sm:px-6",children:[(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1 text-center mb-10 sm:mb-16",children:[(0,a.jsx)("h2",{className:"jsx-705ed443c69a8be1 text-2xl sm:text-3xl md:text-4xl font-bold text-[#2E4A62] mb-3 sm:mb-4",children:"用户真实评价"}),(0,a.jsx)("p",{className:"jsx-705ed443c69a8be1 text-[#767676] max-w-2xl mx-auto text-base sm:text-lg",children:"听听我们的客户怎么说"})]}),(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",children:[{id:1,name:"王先生",content:"游戏帧数从60提升到了120+，电脑运行速度快了很多，服务态度也很好！",rating:5,service:"游戏优化",date:"2025-03-15"},{id:2,name:"李女士",content:"电脑中毒了，远程几分钟就帮我解决了，非常专业，感谢！",rating:5,service:"病毒处理",date:"2025-03-10"},{id:3,name:"张同学",content:"系统崩溃了，以为要重装系统，没想到远程就修好了，太厉害了！",rating:5,service:"系统修复",date:"2025-03-05"},{id:4,name:"刘先生",content:"电脑开机特别慢，远程优化后速度提升了好几倍，非常满意！",rating:5,service:"系统优化",date:"2025-02-28"},{id:5,name:"赵女士",content:"软件安装一直报错，工程师很耐心地帮我解决了，服务很贴心！",rating:5,service:"软件安装",date:"2025-02-20"},{id:6,name:"陈同学",content:"网络连接不稳定，远程诊断后问题迎刃而解，技术真的很专业！",rating:5,service:"网络修复",date:"2025-02-15"}].map(e=>{let s=es(e.id);return(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1 bg-white rounded-xl shadow-md p-4 sm:p-6 border border-[#2E4A62]/10 hover:border-[#FF7E5F]/30 transition-colors duration-300 hover:shadow-lg transform hover:-translate-y-1 transition-transform duration-300 reveal",children:[(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1 flex items-start mb-4",children:[(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 "+"w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mr-3 sm:mr-4 flex-shrink-0 bg-gradient-to-r ".concat(s.gradient),children:e.name.charAt(0)}),(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1",children:[(0,a.jsx)("h4",{className:"jsx-705ed443c69a8be1 text-base sm:text-lg font-semibold text-[#2E4A62]",children:e.name}),(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1 flex flex-wrap items-center",children:[(0,a.jsxs)("p",{className:"jsx-705ed443c69a8be1 text-[#767676] text-xs sm:text-sm mr-2",children:["服务项目：",e.service]}),(0,a.jsx)("p",{className:"jsx-705ed443c69a8be1 text-[#767676]/70 text-xs",children:e.date})]}),(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 flex mt-1",children:[void 0,void 0,void 0,void 0,void 0].map((s,t)=>(0,a.jsx)(k.A,{className:"h-3 w-3 sm:h-4 sm:w-4 ".concat(t<e.rating?"text-[#FFD15C] fill-[#FFD15C]":"text-gray-300")},t))})]})]}),(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1 bg-[#F5F3F0] rounded-lg p-3 sm:p-4 mt-2 relative",children:[(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 absolute top-0 left-4 transform -translate-y-1/2 rotate-45 w-3 h-3 bg-[#F5F3F0]"}),(0,a.jsxs)("p",{className:"jsx-705ed443c69a8be1 text-[#3D3D3D] italic text-sm sm:text-base",children:['"',e.content,'"']})]})]},e.id)})})]})}),(0,a.jsx)("section",{id:"faq",className:"jsx-705ed443c69a8be1 py-16 sm:py-20 md:py-24 bg-white",children:(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1 max-w-7xl mx-auto px-4 sm:px-6",children:[(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1 text-center mb-10 sm:mb-16",children:[(0,a.jsx)("h2",{className:"jsx-705ed443c69a8be1 text-2xl sm:text-3xl md:text-4xl font-bold text-[#2E4A62] mb-3 sm:mb-4",children:"常见问题解答"}),(0,a.jsx)("p",{className:"jsx-705ed443c69a8be1 text-[#767676] max-w-2xl mx-auto text-base sm:text-lg",children:"解答您可能遇到的问题"})]}),(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 max-w-3xl mx-auto space-y-3 sm:space-y-4",children:[{id:1,question:"服务时间是怎样的？",answer:"我们提供7\xd724小时全天候服务，无论何时您遇到问题，都可以联系我们。"},{id:2,question:"如何保障我的数据安全？",answer:"所有远程操作全程可视，不会触碰您的隐私文件，且所有数据传输均采用加密技术。"},{id:3,question:"维修成功率有多高？",answer:"我们的维修成功率超过98%，对于极少数无法远程解决的问题，我们会提供替代解决方案。"},{id:4,question:"收费方式是怎样的？",answer:"我们采用先服务后付费的模式，服务满意后再付款，让您无后顾之忧。"},{id:5,question:"维修需要多长时间？",answer:"大多数问题可在30分钟内解决，复杂问题最长不超过2小时，我们会提前告知预计时间。"},{id:6,question:"如何保障服务质量？",answer:"所有工程师均有5年以上经验，且提供7天内免费复查服务，确保问题彻底解决。"}].map(e=>(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1 bg-white rounded-xl shadow-sm border border-[#2E4A62]/10 hover:border-[#FF7E5F]/30 transition-colors duration-300 overflow-hidden reveal",children:[(0,a.jsxs)("button",{onClick:()=>K(e.id),className:"jsx-705ed443c69a8be1 w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between focus:outline-none",children:[(0,a.jsxs)("h3",{className:"jsx-705ed443c69a8be1 text-base sm:text-lg font-semibold text-[#2E4A62] flex items-center",children:[(0,a.jsx)("span",{className:"jsx-705ed443c69a8be1 bg-gradient-to-r from-[#5C4B63] to-[#5C4B63]/80 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm",children:e.id}),(0,a.jsx)("span",{className:"jsx-705ed443c69a8be1 line-clamp-1",children:e.question})]}),(0,a.jsx)(F.A,{className:"w-5 h-5 text-[#5C4B63] transition-transform duration-300 flex-shrink-0 ".concat(Y.includes(e.id)?"transform rotate-90":"")})]}),(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 "+"px-4 sm:px-6 pb-3 sm:pb-4 transition-all duration-300 ".concat(Y.includes(e.id)?"max-h-40 opacity-100":"max-h-0 opacity-0 overflow-hidden"),children:(0,a.jsx)("p",{className:"jsx-705ed443c69a8be1 text-[#767676] pt-2 border-t border-gray-100 text-sm sm:text-base",children:e.answer})})]},e.id))})]})}),(0,a.jsx)("footer",{id:"contact",className:"jsx-705ed443c69a8be1 bg-gradient-to-b from-[#F5F3F0] to-[#F5F3F0]/70 text-[#3D3D3D] py-12 sm:py-16",children:(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 max-w-7xl mx-auto px-4 sm:px-6",children:(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12",children:[(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1",children:[(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1 flex items-center mb-4 sm:mb-6",children:[(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 bg-[#C50A08] text-white font-bold py-2 px-3 sm:px-4 rounded-lg text-lg sm:text-xl shadow-md",children:"修"}),(0,a.jsx)("span",{className:"jsx-705ed443c69a8be1 ml-2 font-bold text-lg sm:text-xl text-[#2E4A62]",children:"24小时远程维修"})]}),(0,a.jsx)("p",{className:"jsx-705ed443c69a8be1 mb-4 sm:mb-6 text-[#767676] leading-relaxed text-sm sm:text-base",children:"我们是一支专业的IT远程支持团队，拥有5年以上经验，致力于为用户提供高效、专业的电脑问题解决方案。 无论您是遇到系统故障、软件问题还是网络困扰，我们都能为您提供及时、专业的远程支持服务。"}),(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1 space-y-2 sm:space-y-3 text-[#3D3D3D] text-sm sm:text-base",children:[(0,a.jsxs)("p",{className:"jsx-705ed443c69a8be1 flex items-center",children:[(0,a.jsx)("span",{className:"jsx-705ed443c69a8be1 font-semibold mr-2",children:"服务时间："}),(0,a.jsx)("span",{className:"jsx-705ed443c69a8be1",children:"7\xd724小时全天候服务，节假日不休"})]}),(0,a.jsxs)("p",{className:"jsx-705ed443c69a8be1 flex items-center",children:[(0,a.jsx)("span",{className:"jsx-705ed443c69a8be1 font-semibold mr-2",children:"微信号："}),(0,a.jsx)("span",{className:"jsx-705ed443c69a8be1",children:"xiaozhang1609"})]}),(0,a.jsxs)("p",{className:"jsx-705ed443c69a8be1 flex items-center",children:[(0,a.jsx)("span",{className:"jsx-705ed443c69a8be1 font-semibold mr-2",children:"服务范围："}),(0,a.jsx)("span",{className:"jsx-705ed443c69a8be1",children:"系统维护、软件安装、网络故障、数据恢复等"})]})]})]}),(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1",children:[(0,a.jsx)("h3",{className:"jsx-705ed443c69a8be1 text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-[#2E4A62] border-b border-[#2E4A62]/20 pb-2",children:"联系与关注"}),(0,a.jsxs)("div",{className:"jsx-705ed443c69a8be1 mb-6 sm:mb-8",children:[(0,a.jsx)("p",{className:"jsx-705ed443c69a8be1 text-[#767676] mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base",children:"如需获取更多IT支持信息或查看我们的技术分享，欢迎关注我们的社交媒体账号。您也可以通过微信直接联系我们，获取即时的技术支持和解决方案。"}),(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 flex flex-wrap gap-3 sm:gap-4 mt-3 sm:mt-4",children:ee.map((e,s)=>(0,a.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"jsx-705ed443c69a8be1 text-[#3D3D3D] hover:text-[#FF7E5F] transition-colors duration-200 flex items-center text-sm sm:text-base",children:[e.name,(0,a.jsx)(E.A,{className:"w-3 h-3 ml-1 opacity-70"})]},s))})]}),(0,a.jsx)("div",{className:"jsx-705ed443c69a8be1 text-[#767676] text-xs sm:text-sm mt-6 sm:mt-8",children:(0,a.jsx)("p",{className:"jsx-705ed443c69a8be1 mb-2",children:"\xa9 2025 24小时远程维修服务 版权所有"})})]})]})})}),(0,a.jsx)("button",{onClick:()=>G("home"),"aria-label":"返回顶部",className:"jsx-705ed443c69a8be1 "+"fixed bottom-4 sm:bottom-6 right-4 sm:right-6 bg-[#FF7E5F] hover:bg-[#E56B4C] active:bg-[#CC573D] text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 z-40 ".concat(W?"opacity-100 visible":"opacity-0 invisible"),children:(0,a.jsx)(A.A,{className:"w-5 h-5 sm:w-6 sm:h-6"})}),(0,a.jsx)(i(),{id:"705ed443c69a8be1",children:"@-webkit-keyframes fadeInUp{from{opacity:0;-webkit-transform:translatey(20px);transform:translatey(20px)}to{opacity:1;-webkit-transform:translatey(0);transform:translatey(0)}}@-moz-keyframes fadeInUp{from{opacity:0;-moz-transform:translatey(20px);transform:translatey(20px)}to{opacity:1;-moz-transform:translatey(0);transform:translatey(0)}}@-o-keyframes fadeInUp{from{opacity:0;-o-transform:translatey(20px);transform:translatey(20px)}to{opacity:1;-o-transform:translatey(0);transform:translatey(0)}}@keyframes fadeInUp{from{opacity:0;-webkit-transform:translatey(20px);-moz-transform:translatey(20px);-o-transform:translatey(20px);transform:translatey(20px)}to{opacity:1;-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}}@-webkit-keyframes fadeInRight{from{opacity:0;-webkit-transform:translatex(-20px);transform:translatex(-20px)}to{opacity:1;-webkit-transform:translatex(0);transform:translatex(0)}}@-moz-keyframes fadeInRight{from{opacity:0;-moz-transform:translatex(-20px);transform:translatex(-20px)}to{opacity:1;-moz-transform:translatex(0);transform:translatex(0)}}@-o-keyframes fadeInRight{from{opacity:0;-o-transform:translatex(-20px);transform:translatex(-20px)}to{opacity:1;-o-transform:translatex(0);transform:translatex(0)}}@keyframes fadeInRight{from{opacity:0;-webkit-transform:translatex(-20px);-moz-transform:translatex(-20px);-o-transform:translatex(-20px);transform:translatex(-20px)}to{opacity:1;-webkit-transform:translatex(0);-moz-transform:translatex(0);-o-transform:translatex(0);transform:translatex(0)}}@-webkit-keyframes pulse{0%,100%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}}@-moz-keyframes pulse{0%,100%{-moz-transform:scale(1);transform:scale(1)}50%{-moz-transform:scale(1.05);transform:scale(1.05)}}@-o-keyframes pulse{0%,100%{-o-transform:scale(1);transform:scale(1)}50%{-o-transform:scale(1.05);transform:scale(1.05)}}@keyframes pulse{0%,100%{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);-moz-transform:scale(1.05);-o-transform:scale(1.05);transform:scale(1.05)}}.animate-fadeInUp{-webkit-animation:fadeInUp.6s ease-out forwards;-moz-animation:fadeInUp.6s ease-out forwards;-o-animation:fadeInUp.6s ease-out forwards;animation:fadeInUp.6s ease-out forwards}.animate-fadeInRight{-webkit-animation:fadeInRight.6s ease-out forwards;-moz-animation:fadeInRight.6s ease-out forwards;-o-animation:fadeInRight.6s ease-out forwards;animation:fadeInRight.6s ease-out forwards}.animate-pulse-slow{-webkit-animation:pulse 3s infinite;-moz-animation:pulse 3s infinite;-o-animation:pulse 3s infinite;animation:pulse 3s infinite}.animation-delay-200{-webkit-animation-delay:.2s;-moz-animation-delay:.2s;-o-animation-delay:.2s;animation-delay:.2s}.animation-delay-300{-webkit-animation-delay:.3s;-moz-animation-delay:.3s;-o-animation-delay:.3s;animation-delay:.3s}.animation-delay-400{-webkit-animation-delay:.4s;-moz-animation-delay:.4s;-o-animation-delay:.4s;animation-delay:.4s}.animation-delay-500{-webkit-animation-delay:.5s;-moz-animation-delay:.5s;-o-animation-delay:.5s;animation-delay:.5s}.reveal{opacity:0;-webkit-transform:translatey(30px);-moz-transform:translatey(30px);-ms-transform:translatey(30px);-o-transform:translatey(30px);transform:translatey(30px);-webkit-transition:all.8s ease-out;-moz-transition:all.8s ease-out;-o-transition:all.8s ease-out;transition:all.8s ease-out}.reveal.active{opacity:1;-webkit-transform:translatey(0);-moz-transform:translatey(0);-ms-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}a:focus,button:focus{outline:2px solid rgba(46,74,98,.5);outline-offset:2px}html{scroll-behavior:smooth}body{text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}"})]})};function B(){return(0,a.jsx)(D,{})}}},e=>{var s=s=>e(e.s=s);e.O(0,[587,497,954,358],()=>s(1724)),_N_E=e.O()}]);