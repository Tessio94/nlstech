import { easeIn, stagger } from "motion/react";

export const cardContainer = {
  visible: {
    transition: {
      delayChildren: stagger(0.3),
    },
  },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, easingIn: easeIn },
  },
};

export const articleContainer = {
  visible: {
    transition: {
      delayChildren: stagger(0.3),
      //   delay: 0.75,
    },
  },
};

export const articleTitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, easingIn: easeIn },
  },
};

export const articleSubtitleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, easingIn: easeIn },
  },
};

export const articleListVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, easingIn: easeIn },
  },
};
