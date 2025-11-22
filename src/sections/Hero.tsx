"use client";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  useMotionValueEvent(scrollYProgress, "change", (latestValue) =>
    console.log(latestValue)
  );
  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_90%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter my-6 text-gradient">
              Pathway to productivity
            </h1>
            <p className="text-center text-xl text-[#010D3E] tracking-tight">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for Free</button>
              <button className="btn btn-text gap-1">
                <span>Learn More</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              className="md:absolute md:h-full md:w-auto md:max-w-none md:left-6 lg:left-0"
              src={cogImage.src}
              alt="cog image"
              height={648}
              width={648}
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 5,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={cylImage.src}
              width={220}
              height={220}
              alt="Cylinder Image"
              className="hidden md:block md:absolute -top-8 -left-32"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={noodleImage.src}
              width={220}
              height={220}
              alt="Noodle Image"
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
