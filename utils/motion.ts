import { Variants } from "framer-motion";

export function slideInFromLeft(delay: number = 0, duration: number = 0.5): Variants {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
        ease: "easeInOut", // Easing function for smoother transition
      },
    },
  };
}

export function slideInFromRight(delay: number = 0, duration: number = 0.5): Variants {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
        ease: "easeInOut", // Easing function for smoother transition
      },
    },
  };
}

export const slideInFromTop: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};