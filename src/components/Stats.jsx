import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const statsData = [
  { value: 15, suffix: "+", label: "Years of Experience", theme: "gold" },
  { value: 12, suffix: "", label: "African Countries Served", theme: "silver" },
  { value: 500, suffix: "+", label: "Successful Deals Closed", theme: "gold" },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction Rate",
    theme: "silver",
  },
];

function StatItem({ value, suffix, label, theme }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(value);
    const duration = 2000; // ms
    const step = end / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  const colorClass = theme === "gold" ? "text-amber-400" : "text-gray-300";
  const borderClass =
    theme === "gold" ? "border-amber-500/20" : "border-gray-500/20";
  const bgClass = theme === "gold" ? "bg-amber-500/5" : "bg-gray-500/5";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={`p-6 rounded-xl border ${borderClass} ${bgClass} backdrop-blur-sm text-center`}
    >
      <div className={`text-4xl md:text-5xl font-bold ${colorClass} mb-2`}>
        {count}
        {suffix}
      </div>
      <p className="text-gray-400 text-sm font-medium">{label}</p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="py-16 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statsData.map((stat, idx) => (
            <StatItem key={idx} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
