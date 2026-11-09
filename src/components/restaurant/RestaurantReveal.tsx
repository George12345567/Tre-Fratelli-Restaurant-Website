'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';

// The server owns the content; this boundary only animates its presentation.
export function RestaurantReveal({ children, className = '', image = false }: {
  children: ReactNode;
  className?: string;
  image?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() !== false;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.98', 'start 0.5'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [image ? 20 : 28, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [image ? 0.85 : 0.55, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [image ? 1.035 : 1, 1]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={reduceMotion ? undefined : { y, opacity, scale }}>
        {children}
      </motion.div>
    </div>
  );
}
