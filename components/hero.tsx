import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";

const Hero = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Mouse parallax state
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left - rect.width / 2) / rect.width,
      y: (e.clientY - rect.top - rect.height / 2) / rect.height,
    });
  };
  const handleMouseLeave = () => setMouse({ x: 0, y: 0 });

  return (
    <section
      className="relative lg:min-h-screen bg-gradient-to-br from-gray-50 dark:from-zinc-950 via-indigo-50 dark:via-black to-indigo-50 dark:to-zinc-950 pt-25 pb-20 lg:pt-40 lg:pb-20 overflow-hidden group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated gradient background */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {/* Light Orb 1 */}
        <motion.div
          className="absolute left-[10%] top-[15%] w-[320px] h-[320px] dark:w-[160px] dark:h-[160px]  bg-indigo-200 dark:bg-indigo-900 opacity-90 blur-[60px]"
          animate={{
            scale: [1, 1.13, 1],
            opacity: [0.85, 1, 0.85],
            x: mouse.x * 70 + 0,
            y: mouse.y * 40 + 0,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Core hotspot for orb 1 */}
        <motion.div
          className="absolute left-[18%] top-[23%] w-[90px] h-[90px]  bg-indigo-100 dark:bg-indigo-950 opacity-95 blur-[10px]"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.92, 1, 0.92],
            x: mouse.x * 90 + 0,
            y: mouse.y * 60 + 0,
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Light Orb 2 */}
        <motion.div
          className="absolute right-[12%] top-[30%] w-[220px] h-[220px]  bg-indigo-300 dark:bg-indigo-950 opacity-80 blur-[40px]"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.75, 0.95, 0.75],
            x: mouse.x * -60 + 0,
            y: mouse.y * 30 + 0,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Light Orb 3 */}
        <motion.div
          className="absolute left-[35%] bottom-[18%] w-[180px] h-[180px]  bg-blue-200 dark:bg-blue-600 opacity-80 blur-[30px]"
          animate={{
            scale: [1, 1.16, 1],
            opacity: [0.7, 0.9, 0.7],
            x: mouse.x * 40 + 0,
            y: mouse.y * -60 + 0,
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Light Orb 4 */}
        <motion.div
          className="absolute right-[22%] bottom-[8%] w-[150px] h-[150px]  bg-indigo-100 opacity-90 blur-[20px]"
          animate={{
            scale: [1, 1.11, 1],
            opacity: [0.8, 1, 0.8],
            x: mouse.x * -30 + 0,
            y: mouse.y * -40 + 0,
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-indigo-400/10 via-indigo-500/10 to-indigo-600/10"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-tl from-indigo-400/10 via-indigo-500/10 to-indigo-600/10"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Parallax moving elements on hover */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-indigo-600/20 dark:bg-gradient-to-br dark:from-indigo-600/20 dark:to-indigo-400/20  blur-xl"
        whileHover={{ x: 30, y: -20, scale: 1.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      <motion.div
        className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-indigo-400/20 to-indigo-600/20 dark:bg-gradient-to-br dark:from-indigo-600/20 dark:to-indigo-400/20  blur-xl"
        whileHover={{ x: -25, y: 15, scale: 1.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-indigo-400/20 to-indigo-600/20 dark:bg-gradient-to-br dark:from-indigo-600/20 dark:to-indigo-400/20  blur-xl"
        whileHover={{ x: 20, y: -30, scale: 1.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />

      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.3'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-black flex flex-col md:flex-row items-center gap-0.5 md:gap-1.25 justify-center text-3xl lg:text-7xl font-bold mb-4 lg:mb-8 leading-[1.2]"
          >
            <span className="bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-900 dark:from-gray-50 dark:via-blue-300 dark:to-indigo-900 bg-clip-text text-transparent">
              Futárszolgálatok gombnyomásra
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-xl text-muted-foreground mb-6 md:mb-10 max-w-[600px] mx-auto leading-relaxed"
          >
            Egy felület, több szállítási partner, számtalan szolgáltatás - a
            Packlival a csomagküldésed olcsóbbá és akár teljesen automatikussá
            válhat.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-10"
          >
            <Button
              size="lg"
              className="cursor-pointer hover:[&_svg]:translate-x-1"
              asChild
            >
              <Link href={"#subscribe"}>
                Próbáld ki az elsők között
                <ArrowRight className="h-5 w-5 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative max-w-5xl mx-auto"
          >
            {mounted && (
              <div className={"relative"}>
                <div className="relative group">
                  <img
                    src={
                      resolvedTheme != "dark"
                        ? "/screens/dashboard.png"
                        : "/screens/dashboard_dark.png"
                    }
                    className="w-full rounded-sm shadow-2xl border border-border"
                  />
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
