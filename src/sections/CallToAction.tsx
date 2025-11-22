"use client";
import Image from "next/image";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const sectonRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectonRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [1, 0], [150, -150]);
  return (
    <section
      ref={sectonRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter text-gradient mt-5">
            Sign up for free today
          </h2>
          <p className="section-description text-center mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progbress and motivate your efforts.
          </p>
          <motion.img
            src={starImage.src}
            alt="Star Image"
            width={360}
            className="absolute -left-[350px] -top-[140px]"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={springImage.src}
            alt="Spring Image"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{
              translateY,
            }}
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn More</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
