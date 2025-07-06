import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { sectionVariants } from "../../utils/motionVariants";

export default function HeroSection() {
  return (
    <motion.section
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      variants={sectionVariants}
    >
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-950 via-charcoal-900 to-charcoal-950 opacity-95"></div>
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop"
          alt="Architectural Background"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-radial from-gold-500/10 via-transparent to-transparent" />
      </div>

      {/* Sophisticated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "120px 120px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <motion.h2
            className="font-display text-6xl md:text-8xl lg:text-9xl font-light mb-8 tracking-tight leading-none text-balance"
            variants={sectionVariants}
          >
            DESIGNING
            <br />
            <span className="text-gold-400/90">SPACES</span>
            <br />
            THAT INSPIRE
          </motion.h2>
          <motion.p
            className="font-serif text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-12 max-w-3xl text-balance"
            variants={sectionVariants}
          >
            We create architectural solutions that blend functionality with aesthetic excellence, transforming visions
            into remarkable living spaces that stand the test of time and inspire generations.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
            variants={sectionVariants}
          >
            <button className="group px-8 py-4 border border-gold-400/30 font-sans text-sm font-light tracking-wider uppercase hover:bg-gold-400 hover:text-charcoal-950 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
              View Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 font-sans text-sm font-light tracking-wider uppercase text-white/70 hover:text-gold-400 transition-colors">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>

      {/* Premium corner elements */}
      <div className="absolute top-24 left-8 w-20 h-20 border-l-2 border-t-2 border-gold-400/20"></div>
      <div className="absolute top-24 right-8 w-20 h-20 border-r-2 border-t-2 border-gold-400/20"></div>
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-gold-400/20"></div>
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-gold-400/20"></div>
    </motion.section>
  );
}
