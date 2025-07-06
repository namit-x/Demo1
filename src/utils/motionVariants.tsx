import type { Variants } from "framer-motion";

export const pageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.02,
    filter: "blur(8px)",
    transition: {
      duration: 0.6,
      ease: [0.23, 0, 0.32, 0]
    }
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.5,
      ease: [0.23, 1, 0.32, 1],
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    filter: "blur(8px)",
    transition: {
      duration: 0.8,
      ease: "easeIn"
    }
  }
};

export const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    transition: {
      duration: 0.5,
      ease: "easeIn"
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3
    }
  }
};

export const staggerContainerVariants: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

export const staggerItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};