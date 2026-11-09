'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import styles from './ScrollReveal.module.css';

export function ScrollReveal({ children, className = '', image = false }: {
  children: ReactNode;
  className?: string;
  image?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() !== false;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.98', 'start 0.35'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [image ? 32 : 56, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [image ? 0.7 : 0.35, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [image ? 1.08 : 1, 1]);
  const clipPath = useTransform(scrollYProgress, [0, 1], ['inset(6% 3% 6% 3%)', 'inset(0% 0% 0% 0%)']);

  return (
    <div ref={ref} className={className}>
      <div className={styles.entrance}>
        <motion.div
          style={reduceMotion ? undefined : { y, opacity, scale, clipPath: image ? clipPath : undefined }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
