"use client";
import {
  useMotionTemplate,
  useMotionValue,
  animate,
  motion,
} from "framer-motion";
import React, { useEffect } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";

const COLORS_TOP = ["#13FFAA", "#ff8b43", "#0017eb", "#eb0038"];

const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      id="about" 
      className="relative flex min-h-screen items-center justify-center px-8 py-24 text-gray-200"
    >

      <div className="container mx-auto flex items-center gap-16">
        <div className="flex flex-col w-[60%]">
          <h1 className="text-white text-5xl md:text-6xl font-black">
            Hey, this is 
          </h1>
          <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent text-5xl md:text-7xl">
            <motion.span
              style={{ color }} 
            >
            <Typewriter
              words={["Xin Rou", "Developer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
            </motion.span>
          </h1>

          <p className="my-6 max-w-xl">
          Final Year Computer Science Student @ APU | APU Hackthletes Design Team | APUBCC Devrel | Bybit Campus Ambassador
          </p>

          <div className="flex space-x-4">
          <motion.button
            style={{ border, boxShadow }}
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            className="flex w-fit items-center gap-2 rounded-full px-4 py-2 bg-gray-800 text-white shadow-lg"
          >
            Let&apos;s Connect
          </motion.button>
          <motion.button
            style={{ border, boxShadow }}
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            className="flex w-fit items-center gap-2 rounded-full px-4 py-2 bg-gray-800 text-white shadow-lg"
          >
            Download CV
            <FiArrowRight />
          </motion.button>
          </div>
        </div>

        <div className="w-[45%] flex justify-center">
          <Image
            src="/azuki.png" 
            alt="Crystal"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
