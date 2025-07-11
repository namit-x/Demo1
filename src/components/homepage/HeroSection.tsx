import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { sectionVariants } from "../../utils/motionVariants";

export default function HeroSection() {
  return (
    <motion.section
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      variants={sectionVariants}
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-charcoal-300"></div>
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop&q=80&auto=format&fit=crop"
          alt="Luxury Architectural Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-radial from-gold-500/15 via-transparent to-transparent" />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.8]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 0.5px, transparent 0.5px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0.5px, transparent 0.5px)
            `,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-4xl ml-0 md:ml-12 lg:ml-24">
          {/* Improved Typography */}
          <motion.div
            className="mb-12"
            variants={sectionVariants}
          >
            <motion.p
              className="font-sans text-gold-400/90 text-sm md:text-base uppercase tracking-[0.3em] mb-4"
              variants={sectionVariants}
            >
              Architectural Excellence Since 2022
            </motion.p>

            <motion.h1
              className="font-display text-5xl md:text-7xl lg:text-8xl font-medium mb-6 tracking-tight leading-none text-balance"
              variants={sectionVariants}
            >
              <span className="text-white/95">Designing</span>
              <br />
              <span className="text-gold-400/90">Timeless</span>
              <br />
              <span className="text-white/95">Spaces</span>
            </motion.h1>

            <motion.div
              className="w-24 h-0.5 bg-gold-400/60 my-8"
              variants={sectionVariants}
            />

            <motion.p
              className="font-serif text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-2xl text-balance italic"
              variants={sectionVariants}
            >
              "Where form meets function to create spaces that don't just house lives, but elevate them."
            </motion.p>
          </motion.div>

          {/* Enhanced Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-start"
            variants={sectionVariants}
          >
            <button className="group px-8 py-4 bg-gold-400/10 border border-gold-400/30 font-sans text-sm font-medium tracking-wider uppercase hover:bg-gold-400 hover:text-charcoal-950 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
              Explore Our Portfolio
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 font-sans text-sm font-medium tracking-wider uppercase text-white/80 hover:text-gold-400 transition-colors group">
              <span className="relative">
                About Our Studio
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gold-400 group-hover:w-full transition-all duration-300"></span>
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Refined Corner Elements */}
      <div className="absolute top-24 left-8 w-16 h-16 border-l border-t border-gold-400/20"></div>
      <div className="absolute top-24 right-8 w-16 h-16 border-r border-t border-gold-400/20"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-gold-400/20"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-gold-400/20"></div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-8 h-8 border-r border-b border-white/30 transform rotate-45"></div>
      </motion.div>
    </motion.section>
  );
}