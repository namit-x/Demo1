import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2 } from 'lucide-react';

const LoadingPage: React.FC = () => {
  const [animationPhase, setAnimationPhase] = useState('initial'); // initial, nameFormed, elementsVisible, fadeOut
  const [showHomePage, setShowHomePage] = useState(false);

  const companyName = "Line-Ar-chitects";
  const letters = companyName.split("");

  // Generate random starting positions for each letter
  const getRandomPosition = (index: number) => {
    const positions = [
      { x: -400, y: -300 },
      { x: 400, y: -300 },
      { x: -500, y: 0 },
      { x: 500, y: 0 },
      { x: -400, y: 300 },
      { x: 400, y: 300 },
      { x: 0, y: -400 },
      { x: 0, y: 400 },
      { x: -600, y: -200 },
      { x: 600, y: -200 },
      { x: -600, y: 200 },
      { x: 600, y: 200 },
      { x: -300, y: -400 },
      { x: 300, y: -400 },
      { x: -700, y: 0 },
    ];
    return positions[index % positions.length];
  };

  useEffect(() => {
    // Phase 1: Letters collect and form company name (0-3s)
    const timer1 = setTimeout(() => setAnimationPhase('nameFormed'), 3000);
    
    // Phase 2: Premium elements fade in (3-6s)
    const timer2 = setTimeout(() => setAnimationPhase('elementsVisible'), 6000);
    
    // Phase 3: Everything fades out and homepage appears (8-9s)
    const timer3 = setTimeout(() => setAnimationPhase('fadeOut'), 8000);
    const timer4 = setTimeout(() => setShowHomePage(true), 9000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const letterVariants = {
    initial: (index: number) => ({
      x: getRandomPosition(index).x,
      y: getRandomPosition(index).y,
      opacity: 0,
      scale: 0.3,
      rotate: Math.random() * 720 - 360,
      filter: "blur(15px)",
    }),
    collecting: (index: number) => ({
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      filter: "blur(0px)",
      transition: {
        duration: 2.5,
        delay: index * 0.08,
        ease: [0.23, 1, 0.32, 1],
      },
    }),
    formed: {
      scale: 1,
      textShadow: "0 0 30px rgba(255, 255, 255, 0.3)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    fadeOut: {
      opacity: 0,
      scale: 0.95,
      filter: "blur(8px)",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  if (showHomePage) {
    return null; // Let App.tsx handle showing HomePage
  }

  return (
    <>
      {/* Premium Typography */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="fixed inset-0 bg-black overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0">
          {/* Minimal floating particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-px bg-white/20 rounded-full"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 8 + 6,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}

          {/* Architectural grid - only visible when elements are shown */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: animationPhase === 'elementsVisible' ? 0.03 : 0 
            }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <motion.div
            className="relative text-center"
            variants={containerVariants}
            animate={animationPhase === 'fadeOut' ? 'fadeOut' : ''}
          >
            {/* Golden Border Frame - Fades in after name is formed */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
              animate={{
                opacity: animationPhase === 'elementsVisible' ? 1 : 0,
                scale: animationPhase === 'elementsVisible' ? 1 : 0.8,
                rotate: animationPhase === 'elementsVisible' ? 0 : -2,
              }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
              className="absolute inset-0 -m-20 rounded-sm"
              style={{
                background: "linear-gradient(45deg, transparent 48%, rgba(212, 175, 55, 0.1) 50%, transparent 52%)",
                border: "1px solid rgba(212, 175, 55, 0.3)",
                boxShadow: "0 0 40px rgba(212, 175, 55, 0.15), inset 0 0 40px rgba(212, 175, 55, 0.05)",
              }}
            />

            {/* Corner Accent Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: animationPhase === 'elementsVisible' ? 1 : 0,
                scale: animationPhase === 'elementsVisible' ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              className="absolute -top-16 -left-16 w-8 h-8 border-l-2 border-t-2 border-amber-400/60"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: animationPhase === 'elementsVisible' ? 1 : 0,
                scale: animationPhase === 'elementsVisible' ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
              className="absolute -top-16 -right-16 w-8 h-8 border-r-2 border-t-2 border-amber-400/60"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: animationPhase === 'elementsVisible' ? 1 : 0,
                scale: animationPhase === 'elementsVisible' ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              className="absolute -bottom-16 -left-16 w-8 h-8 border-l-2 border-b-2 border-amber-400/60"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: animationPhase === 'elementsVisible' ? 1 : 0,
                scale: animationPhase === 'elementsVisible' ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
              className="absolute -bottom-16 -right-16 w-8 h-8 border-r-2 border-b-2 border-amber-400/60"
            />

            {/* Company Name - Always Visible Once Formed */}
            <div className="relative px-16 py-12">
              <div
                className="flex flex-wrap justify-center items-center gap-2 text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-[0.15em] mb-8"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 300,
                }}
              >
                {letters.map((letter, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    variants={letterVariants}
                    initial="initial"
                    animate={
                      animationPhase === 'initial' ? 'collecting' : 'collecting'
                    }
                    className="inline-block relative"
                  >
                    {letter === " " ? (
                      <span className="w-4 inline-block" />
                    ) : (
                      <span className="relative">
                        {letter}
                      </span>
                    )}
                  </motion.span>
                ))}
              </div>

              {/* Elegant Divider - Fades in after name is formed */}
              <AnimatePresence>
                {(animationPhase === 'nameFormed' || animationPhase === 'elementsVisible') && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "100%", opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                    className="flex items-center justify-center my-8"
                  >
                    <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-full max-w-md" />
                    <motion.div
                      initial={{ scale: 0, rotate: 0 }}
                      animate={{ scale: 1, rotate: 45 }}
                      transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                      className="mx-4 w-2 h-2 border border-white/40 rotate-45 bg-white/10"
                    />
                    <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-full max-w-md" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Subtitle - Fades in after name is formed */}
              <AnimatePresence>
                {(animationPhase === 'nameFormed' || animationPhase === 'elementsVisible') && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
                    className="text-center"
                  >
                    <p
                      className="text-white/80 text-lg md:text-xl tracking-[0.3em] font-light"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 200,
                      }}
                    >
                      ARCHITECTS
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Premium Logo Icon - Fades in with elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{
                opacity: animationPhase === 'elementsVisible' ? 1 : 0,
                scale: animationPhase === 'elementsVisible' ? 1 : 0.5,
                y: animationPhase === 'elementsVisible' ? 0 : 20,
              }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="absolute -top-8 left-1/2 transform -translate-x-1/2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-amber-400/20 rounded-sm blur-sm"></div>
                <div className="relative bg-black/80 p-3 border border-amber-400/30 rounded-sm backdrop-blur-sm">
                  <Building2 className="w-6 h-6 text-amber-400/80" strokeWidth={1.5} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Elegant Loading Indicator - Fades in with elements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: animationPhase === 'elementsVisible' ? 1 : 0,
            y: animationPhase === 'elementsVisible' ? 0 : 30,
          }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex items-center space-x-8">
            <div className="flex space-x-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="w-px h-8 bg-gradient-to-t from-white/20 to-white/60 rounded-full"
                  animate={{
                    scaleY: [0.4, 1, 0.4],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-white/60 text-xs tracking-[0.2em] font-light"
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              LOADING
            </motion.p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default LoadingPage;
