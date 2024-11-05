// View Transition Animations
export const slideInFromRight = {
  old: {
    name: 'slideOut',
    duration: '0.3s',
    easing: 'ease-out',
    fillMode: 'forwards',
  },
  new: {
    name: 'slideIn',
    duration: '0.3s',
    easing: 'ease-out',
    fillMode: 'backwards',
  }
}

export const fadeInOut = {
  old: {
    name: 'fadeOut',
    duration: '0.3s',
    easing: 'ease-out',
    fillMode: 'forwards',
  },
  new: {
    name: 'fadeIn',
    duration: '0.3s',
    easing: 'ease-out',
    fillMode: 'backwards',
  }
}

// Keyframe Animations
export const keyframes = {
  slideIn: {
    from: { transform: 'translateX(100%)', opacity: 0 },
    to: { transform: 'translateX(0)', opacity: 1 },
  },
  slideOut: {
    from: { transform: 'translateX(0)', opacity: 1 },
    to: { transform: 'translateX(-100%)', opacity: 0 },
  },
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  fadeOut: {
    from: { opacity: 1 },
    to: { opacity: 0 },
  },
}

// Gradient Animations
export const gradients = {
  cyan: {
    blob: "radial-gradient(circle at center, oklch(0.6 0.15 195), transparent 40%)",
    blur: "blur(100px)",
    animation: {
      initial: {
        scale: 0.8,
        opacity: 0,
        filter: "blur(100px)",
      },
      animate: {
        scale: [1, 1.1, 0.9, 1],
        opacity: [0.5, 0.7, 0.5],
        filter: ["blur(100px)", "blur(120px)", "blur(100px)"],
        transition: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
    },
  },
} as const;

// Menu Animations
export const menuTransition = {
  type: 'spring',
  bounce: 0.3,
  duration: 0.4,
  damping: 20,
  stiffness: 350,
} as const;

export const menuAnimations = {
  stagger: {
    open: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
  },
  item: {
    open: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25,
      },
    },
    closed: {
      y: 20,
      opacity: 0,
      scale: 0.9,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25,
      },
    },
  },
} as const;
