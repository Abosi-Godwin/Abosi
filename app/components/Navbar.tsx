"use client";

import { useState } from "react";
import { MotionConfig, motion, useMotionValueEvent, useScroll } from "motion/react";

import Logo from "./Logo";
import Navlinks from "./Navlinks";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <MotionConfig reducedMotion="user">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-primary/20 transition-shadow duration-300 ${
          scrolled ? "shadow-lg shadow-black/5" : "shadow-none"
        }`}
      >
        <div
          className={`max-w-6xl mx-auto flex justify-between items-center px-3 md:px-10 transition-[padding] duration-300 ${
            scrolled ? "py-3" : "py-4"
          }`}
        >
          <Logo />
          <MobileNav />
          <Navlinks />
        </div>
      </motion.nav>
    </MotionConfig>
  );
};

export default Navbar;
