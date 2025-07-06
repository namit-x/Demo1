import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { staggerContainerVariants, staggerItemVariants } from "../utils/motionVariants";

export default function Footer() {
  return (
    <ScrollReveal direction="up" distance={40} duration={0.8} threshold={0.5}>
      <footer className="border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="grid md:grid-cols-4 gap-12 mb-12"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="md:col-span-2" variants={staggerItemVariants}>
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-2 border border-gold-400/30 rounded-sm bg-gold-400/5">
                  <Building2 className="w-6 h-6 text-gold-400" strokeWidth={1.2} />
                </div>
                <div>
                  <h4 className="font-display text-lg font-light tracking-wide">Studio65</h4>
                  <p className="text-gold-400/60 font-sans text-xs font-light tracking-widest uppercase">Architects</p>
                </div>
              </div>
              <p className="text-white/60 font-serif font-light leading-relaxed max-w-md mb-6 text-balance">
                Creating architectural solutions that blend functionality with aesthetic excellence, transforming
                visions into remarkable living spaces that inspire and endure.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 border border-white/20 rounded-sm flex items-center justify-center hover:border-gold-400/50 transition-colors cursor-pointer backdrop-blur-sm">
                  <div className="w-4 h-4 bg-white/40 rounded-sm"></div>
                </div>
                <div className="w-8 h-8 border border-white/20 rounded-sm flex items-center justify-center hover:border-gold-400/50 transition-colors cursor-pointer backdrop-blur-sm">
                  <div className="w-4 h-4 bg-white/40 rounded-sm"></div>
                </div>
                <div className="w-8 h-8 border border-white/20 rounded-sm flex items-center justify-center hover:border-gold-400/50 transition-colors cursor-pointer backdrop-blur-sm">
                  <div className="w-4 h-4 bg-white/40 rounded-sm"></div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={staggerItemVariants}>
              <h5 className="font-sans text-sm font-light tracking-wider uppercase mb-6 text-gold-400/80">Services</h5>
              <ul className="space-y-3">
                {["Residential Design", "Commercial Spaces", "Interior Planning", "Consultation", "Project Management", "Sustainable Design"].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-white/60 hover:text-gold-400 transition-colors font-sans text-sm">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={staggerItemVariants}>
              <h5 className="font-sans text-sm font-light tracking-wider uppercase mb-6 text-gold-400/80">Connect</h5>
              <ul className="space-y-3">
                {["Instagram", "LinkedIn", "Behance", "Pinterest", "Dribbble", "YouTube"].map((social) => (
                  <li key={social}>
                    <a href="#" className="text-white/60 hover:text-gold-400 transition-colors font-sans text-sm">
                      {social}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <ScrollReveal direction="fade" delay={400}>
            <div className="border-t border-white/10 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-white/40 font-sans text-sm font-light tracking-wider">
                  © 2025 Studio65 Architects. All rights reserved.
                </p>
                <div className="flex space-x-6">
                  <a href="#" className="text-white/40 hover:text-gold-400 transition-colors font-sans text-sm">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-white/40 hover:text-gold-400 transition-colors font-sans text-sm">
                    Terms of Service
                  </a>
                  <a href="#" className="text-white/40 hover:text-gold-400 transition-colors font-sans text-sm">
                    Careers
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </footer>
    </ScrollReveal>
  );
}