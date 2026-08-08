import { Variants } from 'motion';

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const blurFade: Variants = {
  hidden: {
    opacity: 0,
    filter: 'blur(2px)',
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.3 },
  },
};
