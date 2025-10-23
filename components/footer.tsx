export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 border-t-4 border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-600 text-white font-black py-2.5 px-4 text-xl rounded-lg shadow-lg">修</div>
              <span className="font-black text-xl text-white tracking-tight">24小时远程电脑维修</span>
            </div>
            <p className="text-gray-300 text-base leading-relaxed">
              专业的远程电脑维修服务，为您解决各类电脑问题，提供全天候技术支持。
            </p>
          </div>
          <div>
            <h3 className="text-white font-black text-lg mb-6 border-l-4 border-red-600 pl-4">服务项目</h3>
            <ul className="space-y-3.5">
              {["系统维护", "游戏优化", "网络与驱动", "故障修复"].map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3 group-hover:w-2 group-hover:h-2 transition-all"></span>
                    <span className="font-medium">{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-black text-lg mb-6 border-l-4 border-red-600 pl-4">快速链接</h3>
            <ul className="space-y-3.5">
              {[
                { href: "#home", label: "首页" },
                { href: "#targets", label: "服务对象" },
                { href: "#testimonials", label: "用户评价" },
                { href: "#faq", label: "常见问题" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3 group-hover:w-2 group-hover:h-2 transition-all"></span>
                    <span className="font-medium">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-black text-lg mb-6 border-l-4 border-red-600 pl-4">联系我们</h3>
            <div className="space-y-3.5">
              <a
                href="https://zhang9.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white hover:translate-x-1 transition-all flex items-center group"
              >
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3 group-hover:w-2 group-hover:h-2 transition-all"></span>
                <span className="font-medium">官方网站</span>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white hover:translate-x-1 transition-all flex items-center group"
              >
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3 group-hover:w-2 group-hover:h-2 transition-all"></span>
                <span className="font-medium">微信客服</span>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white hover:translate-x-1 transition-all flex items-center group"
              >
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3 group-hover:w-2 group-hover:h-2 transition-all"></span>
                <span className="font-medium">QQ客服</span>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white hover:translate-x-1 transition-all flex items-center group"
              >
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3 group-hover:w-2 group-hover:h-2 transition-all"></span>
                <span className="font-medium">技术支持</span>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-10 border-t-2 border-gray-700 text-center space-y-3">
          <p className="text-gray-400 text-sm font-medium">© 2025 24小时远程电脑维修服务 版权所有</p>
          <a
            href="https://beian.miit.gov.cn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm font-medium inline-block"
          >
            宁ICP备2025009289号
          </a>
        </div>
      </div>
    </footer>
  )
}
