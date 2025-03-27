"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import logitech from "@/public/logitech.png";
import oracle from "@/public/oracle.png";
import hata from "@/public/hata.png";
import binance from "@/public/binance.png";
import bybit from "@/public/bybit.png";

const images = [
  { src: binance, alt: "binance" },
  { src: bybit, alt: "bybit" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "oracle" },
  { src: binance, alt: "binance" },
  { src: hata, alt: "hata" },
  { src: bybit, alt: "bybit" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "oracle" },
  { src: binance, alt: "binance" },
  { src: hata, alt: "hata" },
  { src: bybit, alt: "bybit" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "oracle" },
  { src: binance, alt: "binance" },
  { src: hata, alt: "hata" },
  { src: bybit, alt: "bybit" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "oracle" },
];
const LogoAnimation = () => {
  return (
    <div className="py-8 bg-purple-200/10 opacity-80">
      <div className="container mx-auto">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%", //move left by half of its width
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                height={30}
                width={90}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoAnimation;
