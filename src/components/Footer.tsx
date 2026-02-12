import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, QrCode } from "lucide-react";
import { useTheme } from "../App";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
    color: "hover:text-white",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
    color: "hover:text-blue-400",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:cnumin999@gmail.com",
    color: "hover:text-red-400",
  },
];

const projectLinks = [
  { label: "프로젝트 소스코드", href: "#" },
  { label: "기술 블로그", href: "#" },
  { label: "이력서", href: "#" },
];

export function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer className={`py-16 px-4 border-t ${
      darkMode ? "border-white/10" : "border-slate-200"
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            darkMode ? "text-white" : "text-slate-900"
          }`}>
            함께 일하고 싶으신가요?
          </h2>
          <p className={`mb-8 max-w-2xl mx-auto ${
            darkMode ? "text-gray-400" : "text-slate-600"
          }`}>
            데이터 기반 시스템 구축, 풀스택 개발에 관심이 있습니다.
            <br />
            새로운 기회에 도전하고 싶습니다! 연락주세요!
          </p>
          <motion.a
            href="mailto:your@email.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-bold text-lg shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow"
          >
            <Mail className="w-5 h-5" />
            연락하기
          </motion.a>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600">
                <QrCode className="w-5 h-5 text-white" />
              </div>
              <span className={`font-bold text-lg ${
                darkMode ? "text-white" : "text-slate-900"
              }`}>QR Project</span>
            </div>
            <p className={`text-sm leading-relaxed ${
              darkMode ? "text-gray-400" : "text-slate-600"
            }`}>
              QR 기반 제품 이력 추적 시스템 프로젝트입니다.
              인턴십 기간 동안 기획부터 개발, 배포까지 전 과정을 담당했습니다.
            </p>
          </div>

          {/* Project Links */}
          <div>
            <h3 className={`font-bold mb-4 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}>프로젝트</h3>
            <ul className="space-y-3">
              {projectLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`flex items-center gap-2 hover:text-cyan-500 transition-colors text-sm ${
                      darkMode ? "text-gray-400" : "text-slate-600"
                    }`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className={`font-bold mb-4 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}>소셜</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-xl transition-colors ${
                    darkMode
                      ? `bg-white/5 text-gray-400 ${social.color}`
                      : `bg-slate-100 text-slate-500 ${social.color}`
                  }`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
          darkMode ? "border-white/10" : "border-slate-200"
        }`}>
          <p className={`text-sm ${darkMode ? "text-gray-500" : "text-slate-500"}`}>
            © 2025 QR Project Portfolio. All rights reserved.
          </p>
          <p className={`text-sm ${darkMode ? "text-gray-500" : "text-slate-500"}`}>
            Built with React, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
