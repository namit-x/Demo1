import type React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

interface LoadingPageProps {
  onComplete: () => void;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast progress animation over 800ms
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 10);
          return 100;
        }
        return prev + 10;
      });
    }, 100); // 100ms intervals for 1000ms total

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-charcoal-950 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content */}
      <div className="text-center space-y-6">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center mb-4"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gold-400/20 rounded-sm blur-sm" />
            <div className="relative bg-charcoal-950 border border-gold-400/30 rounded-sm p-3">
              <Building2 className="w-6 h-6 text-gold-400" strokeWidth={1.5} />
            </div>
          </div>
        </motion.div>

        {/* Company name */}
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          className="space-y-3"
        >
          <h1 className="font-display text-4xl md:text-6xl font-light text-white tracking-[0.1em]">
            Studio65
          </h1>

          <div className="flex items-center justify-center space-x-3">
            <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-12" />
            <div className="w-1 h-1 bg-white/40 rotate-45" />
            <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-12" />
          </div>

          <p className="text-white/70 font-sans text-base tracking-[0.25em] font-light uppercase">
            Architects
          </p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="w-48 mx-auto space-y-2"
        >
          <div className="h-px bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-gold-400/60 to-gold-300/80"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "easeOut" }}
            />
          </div>

          <div className="flex justify-between items-center text-xs text-white/50 font-sans">
            <span>LOADING</span>
            <span>{progress}%</span>
          </div>
        </motion.div>

        {/* Decorative corners */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: progress > 30 ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 pointer-events-none"
        >
          {/* Top corners */}
          <div className="absolute top-6 left-6 w-5 h-5 border-l border-t border-gold-400/30" />
          <div className="absolute top-6 right-6 w-5 h-5 border-r border-t border-gold-400/30" />

          {/* Bottom corners */}
          <div className="absolute bottom-6 left-6 w-5 h-5 border-l border-b border-gold-400/30" />
          <div className="absolute bottom-6 right-6 w-5 h-5 border-r border-b border-gold-400/30" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingPage;
