"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import github from "@/public/github.svg";
import linkedin from "@/public/linkedin.svg";
import insta from "@/public/insta.svg";

const Contact = () => {
  return (
    <section
      id="contact"
      className="overflow-x-clip py-24 text-white max-w-[1200px] mx-auto px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.0 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-16"
      >
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-7xl font-bold text-gray-300"
        >
          Get in <span className="text-gray-500">touch</span>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-8 rounded-2xl space-y-8 mt-8"
          >
            <div className="space-y-2">
              <p className="text-lg text-gray-300">Phone</p>
              <a
                href="Tel: 017-3400544"
                className="text-2xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2"
              >
                +60173400544
                <span className="text-gray-500"> </span>
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-lg text-gray-300">Email</p>
              <a
                href="Mail: xinrou1961@gmail.com"
                className="text-2xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2"
              >
                xinrou1961@gmail.com
                <span className="text-gray-500"> </span>
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-lg text-gray-300">Office</p>
              <address className="text-xl not-italic leading-relaxed">
                Asia Pacific University
                <br />
                Jalan Technology
                <br />
                Kuala Lumpur
              </address>
            </div>
            <div className=" flex flex-row gap-4 mt-6">
                <Link href="https://github.com/raykon1221">
                    <Image src={github} alt="github" />
                </Link>
                <Link href="https://www.linkedin.com/in/lee-xin-rou-77b730262/">
                    <Image src={linkedin} alt="linkedin" />
                </Link>
                <Link href="https://www.instagram.com/xinrou1221.xr/" className="mt-1">
                    <Image src={insta} alt="insta"/>
                </Link>
            </div>
          </motion.div>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.14662745759!2d101.69798647478284!3d3.055405696920368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4abb795025d9%3A0x1c37182a714ba968!2sAsia%20Pacific%20University%20of%20Technology%20%26%20Innovation%20(APU)!5e0!3m2!1sen!2smy!4v1742542279490!5m2!1sen!2smy"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
