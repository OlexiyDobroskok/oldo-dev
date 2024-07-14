import { type Variants } from "framer-motion";

export const anim = (variants: Variants) => {
  return {
    initial: 'initial',
    animate: 'animate',
    exit: 'exit',
    variants,
  };
};
