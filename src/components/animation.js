import { delay } from "framer-motion";

export const slideUpVariants = {
  hidden: { y: 50, opacity: 0 }, // Start slightly below with no opacity
  visible: {
    y: 0, // Final position
    opacity: 1, // Fully visible
    transition: {
      staggerChildern: 2,
      duration: 1.8, // Duration of the slide-up animation
      ease: "easeOut",
    },
  },
};

export const slideLeftToRightVariants = {
  hidden: { x: -180, opacity: 0 }, // Start off-screen to the left with no opacity
  visible: {
    x: 0, // Final position
    opacity: 1, // Fully visible
    transition: {
      duration: 1.9, // Duration of the animation
      ease: "easeOut",
      staggerChildren: 2, // Delays children animations slightly
    },
  },
};


export const slideRightToLeft = ( delay ) => {
  return {
    hidden: { x: 45, opacity: 0 }, // Start off-screen to the right with no opacity
    visible: {
      x: 0, // Final position
      opacity: 1, // Fully visible
      transition: {
        duration: 1.2,
        delay: delay, // Duration of the animation for each element
        ease: "easeOut", // Smooth easing for a natural animation
        staggerChildren: 2, // Sequential delay for children animations
      },
    },
  }
  
};


export const zoomInVariants = {
  hidden: { scale: 0.5, opacity: 0 }, // Start smaller with no opacity
  visible: {
    scale: 1, // Full size
    opacity: 1, // Fully visible
    transition: {
      type: "Tween",
      staggerChildern: 1, delay: 0.4,
      duration: 1.2, // Duration of the zoom-in animation
      ease: "easeOut",
    },
  },
};
