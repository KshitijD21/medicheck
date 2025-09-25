"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

export function AnimatedCounter({
  end,
  duration = 2000,
  suffix = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

interface StatisticCardProps {
  value: string;
  label: string;
  description?: string;
  delay?: number;
}

export function StatisticCard({
  value,
  label,
  description,
  delay = 0,
}: StatisticCardProps) {
  const numericValue = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/\d/g, "");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="text-center p-6 bg-white rounded-lg shadow-sm border border-[#E2E8F0] hover:shadow-md transition-shadow"
    >
      <div className="text-4xl font-bold text-[#1976D2] mb-2">
        {numericValue > 0 ? (
          <AnimatedCounter end={numericValue} suffix={suffix} />
        ) : (
          value
        )}
      </div>
      <h3 className="text-lg font-semibold text-[#1E293B] mb-1">{label}</h3>
      {description && <p className="text-sm text-[#64748B]">{description}</p>}
    </motion.div>
  );
}
