import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { sectionVariants } from "../utils/motionVariants";

export default function Header() {
  return (
    <motion.header
      className="border-b border-white/10 relative z-50 bg-charcoal-950/95 backdrop-blur-md fixed w-full top-0"
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-2.5 border border-gold-400/30 rounded-sm bg-gold-400/5 backdrop-blur-sm">
              <Building2 className="w-6 h-6 text-gold-400" strokeWidth={1.2} />
            </div>
            <div>
              <h1 className="font-display text-xl font-light tracking-wide">Studio65</h1>
              <p className="text-gold-400/70 text-xs font-sans font-light tracking-widest uppercase">Architects</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            {["Projects", "Services", "About", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-sans text-sm font-light tracking-wider uppercase hover:text-gold-400 transition-colors relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
}