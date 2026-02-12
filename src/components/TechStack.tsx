import { motion } from "framer-motion";
import { 
  Server, 
  Zap, 
  Database, 
  Code2, 
  FileCode, 
  Palette, 
  Brain, 
  Globe 
} from "lucide-react";
import { useTheme } from "../App";

const technologies = [
  { name: "Node.js", color: "from-green-400 to-green-600", Icon: Server },
  { name: "Express", color: "from-gray-400 to-gray-600", Icon: Zap },
  { name: "MySQL", color: "from-blue-400 to-blue-600", Icon: Database },
  { name: "Python", color: "from-yellow-400 to-blue-500", Icon: Code2 },
  { name: "JavaScript", color: "from-yellow-300 to-yellow-500", Icon: FileCode },
  { name: "HTML/CSS", color: "from-orange-400 to-pink-500", Icon: Palette },
  { name: "NLP (soynlp)", color: "from-purple-400 to-purple-600", Icon: Brain },
  { name: "GeoIP", color: "from-cyan-400 to-cyan-600", Icon: Globe },
];

export function TechStack() {
  const { darkMode } = useTheme();

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className={`text-2xl font-bold mb-4 ${
            darkMode ? "text-gray-400" : "text-slate-600"
          }`}>사용 기술</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group"
            >
              <div className={`flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r ${tech.color} backdrop-blur-sm cursor-default shadow-lg`}>
                <tech.Icon className="w-5 h-5 text-white" />
                <span className="font-medium text-white">{tech.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
