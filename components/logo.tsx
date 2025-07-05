import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const TAILWIND_FUCHSIA_CLASSES = [
  "fill-indigo-300 dark:fill-indigo-600",
  "fill-indigo-400 dark:fill-indigo-500",
  "fill-indigo-500 dark:fill-indigo-400",
  "fill-indigo-600 dark:fill-indigo-300",
  "fill-indigo-700 dark:fill-indigo-200",
];

const Logo = () => {
  // State for stepped color animation
  const [step, setStep] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % TAILWIND_FUCHSIA_CLASSES.length);
    }, 1000); // 400ms per step ~2s full cycle
    return () => clearInterval(interval);
  }, []);

  // Offset each rect's color cycle for a lively effect
  const getClass = (offset: number) =>
    TAILWIND_FUCHSIA_CLASSES[(step + offset) % TAILWIND_FUCHSIA_CLASSES.length];

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 leading-0"
    >
      {/* Logo Text */}
      <svg
        width="132"
        height="142"
        viewBox="0 0 132 142"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-5"
      >
        <path d="M26.27 0H131.25L119.07 100H15.25L26.27 0Z" fill="#665EE7" />
        <path d="M12.915 29H76L61.5948 142H0L12.915 29Z" fill="#3831BA" />
        <path d="M23.5 29H76L67 100H15L23.5 29Z" fill="#4F48CF" />
      </svg>

      <span className="text-2xl font-bold bg-gradient-to-r from-indigo-700 dark:from-indigo-400 to-indigo-400 dark:to-indigo-300 bg-clip-text text-transparent">
        Packli
      </span>
    </motion.div>
  );
};

export default Logo;
