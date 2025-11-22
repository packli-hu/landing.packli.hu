import { motion } from "framer-motion";
import React from "react";

const Logo = ({ onClick }: any) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 leading-0 cursor-pointer"
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
