import React from 'react';
import { motion } from 'motion/react';

interface MotionRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  id?: string;
}

export const MotionReveal: React.FC<MotionRevealProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 28,
  className = '',
  id,
}) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
