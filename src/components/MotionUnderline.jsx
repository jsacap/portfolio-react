import { motion } from 'framer-motion';

export const MotionUnderline = ({ left, width }) => (
  <motion.div
    layoutId="underline"
    initial={false}
    animate={{ left, width }}
    transition={{ type: "spring", stiffness: 300, damping: 30 }}
    style={{
      position: "absolute",
      bottom: 0,
      height: "2px",
      backgroundColor: "white",
    }}
  />
);
