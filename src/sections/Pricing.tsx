"use client";
import { motion } from "framer-motion";
import CheckIcon from "@/assets/check.svg";
import clsx from "clsx";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="text-gradient text-[32px] tracking-tighter leading-[38px] my-6 text-center">
            Pricing
          </h2>
          <p className="section-description text-center">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            (
              { title, monthlyPrice, buttonText, popular, inverse, features },
              i
            ) => (
              <div
                key={i}
                className={clsx(
                  "card",
                  inverse === true && "border-black bg-black text-white"
                )}
              >
                <div className="flex justify-between">
                  <h3
                    className={clsx(
                      "text-lg font-bold text-black/50",
                      inverse && "text-white/60"
                    )}
                  >
                    {title}
                  </h3>
                  {popular && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span
                        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-bold"
                        animate={{
                          backgroundPositionX: "-100%",
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                          repeatType: "loop",
                        }}
                      >
                        Most Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    ${monthlyPrice}
                  </span>
                  <span
                    className={clsx(
                      "tracking-tight font-bold text-black/50",
                      inverse === true && "text-white/60"
                    )}
                  >
                    /month
                  </span>
                </div>
                <button
                  className={clsx(
                    "btn btn-primary w-full mt-[30px]",
                    inverse === true && "bg-white text-black"
                  )}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature, i) => (
                    <li key={i} className="text-sm flex items-center gap-4">
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
          <div></div>
        </div>
      </div>
    </section>
  );
};
