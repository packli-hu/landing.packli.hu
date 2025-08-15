import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import {
  Drawer,
  DrawerTitle,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Logo from "@/components/logo";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const navItems = {
    home: "Főoldal",
    features: "Hatékony csomagszálítás",
    contact: "Kapcsolat",
  };

  const { resolvedTheme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(Object.keys(navItems)[0]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (window.scrollY < 50) {
        setActiveSection(Object.keys(navItems)[0]);
        return;
      }

      // Track active section based on scroll position
      const sections = ["features", "how-it-works", "contact"];
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            if (activeSection !== section) setActiveSection(section);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, navItems]);

  const handleNavClick = (item: string) => {
    setIsOpen(false);
    if (item === Object.keys(navItems)[0]) {
      // Scroll to top of page for Home link
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const targetId = item.toLowerCase().replace(" ", "-");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  const isActiveItem = (item: string) => {
    const sectionMap: { [key: string]: string } = {
      Home: "home",
      Features: "features",
      Contact: "contact",
    };
    return activeSection === sectionMap[item];
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-background/60 backdrop-blur-sm shadow-xs"
          : "bg-transparent"
      )}
    >
      <div
        className={cn(
          "container mx-auto px-6 py-4 flex items-center justify-between"
        )}
      >
        <Logo />

        <div className="flex items-center gap-2.5">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Nav items */}
            {Object.keys(navItems).map((key: string, index: number) => (
              <motion.button
                key={key}
                onClick={() => handleNavClick(key)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 2) * 0.1 }}
                className={cn(
                  "cursor-pointer transition-colors relative group",
                  isActiveItem(key)
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-accent-foreground hover:text-indigo-600 dark:hover:text-indigo-400"
                )}
              >
                {navItems[key as keyof typeof navItems]}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all ${
                    isActiveItem(key) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </motion.button>
            ))}

            <Button variant="default">Próbáld ki!</Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
              <DrawerTrigger asChild>
                <Button
                  className="cursor-pointer text-muted-foreground hover:bg-transparent hover:text-foreground"
                  variant="ghost"
                  size="icon"
                >
                  <Menu className="size-4" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="px-6 pb-8">
                <DrawerTitle></DrawerTitle>
                <nav className="flex flex-col space-y-4 mt-6">
                  {Object.keys(navItems).map((item) => (
                    <Button
                      key={item}
                      onClick={() => handleNavClick(item)}
                      variant="ghost"
                      className={cn(
                        "w-full justify-start hover:text-indigo-600 dark:hover:text-indigo-400",
                        isActiveItem(item) &&
                          "text-indigo-600 dark:text-indigo-400 font-medium"
                      )}
                    >
                      {navItems[item as keyof typeof navItems]}
                    </Button>
                  ))}
                  <div className="pt-4">
                    <RainbowButton
                      className="w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      Próbáld ki!
                    </RainbowButton>
                  </div>
                </nav>
              </DrawerContent>
            </Drawer>
          </div>

          {/* Theme Toggle */}
          {mounted && (
            <Button
              className="cursor-pointer text-muted-foreground hover:bg-transparent hover:text-foreground"
              variant="ghost"
              size="icon"
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
            >
              {resolvedTheme === "dark" ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )}
            </Button>
          )}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
