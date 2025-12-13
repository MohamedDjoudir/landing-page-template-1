"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Square, Circle, Triangle, Hexagon } from "lucide-react";

export default function Features() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -25% 0px",
  });

  const features = [
    {
      icon: <Square className="w-6 h-6" />,
      title: "Minimalist Design",
      description:
        "Clean, uncluttered interfaces that focus on content and functionality without unnecessary elements.",
    },
    {
      icon: <Circle className="w-6 h-6" />,
      title: "Brutalist Approach",
      description:
        "Raw, honest design that embraces the digital medium without trying to mimic physical materials.",
    },
    {
      icon: <Triangle className="w-6 h-6" />,
      title: "Responsive Layout",
      description:
        "Perfectly adapted experiences across all devices, from desktop to mobile, without compromise.",
    },
    {
      icon: <Hexagon className="w-6 h-6" />,
      title: "Performance Focus",
      description:
        "Lightning-fast loading times and smooth interactions for optimal user experience.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 12,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 45,
        damping: 15,
        mass: 0.85,
        duration: 0.7,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 50,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-4 mt-20 sm:mt-0 sm:py-24 relative overflow-hidden bg-gradient-to-b from-black to-neutral-900"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-white/40"></div>
            <div className="text-xs uppercase tracking-widest text-white/80">
              Our Approach
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            Minimalist Design
            <br />
            <span className="text-white/70">Maximum Impact</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="border-2 border-white/20 bg-white/5 backdrop-blur-sm p-8 hover:border-white/50 hover:bg-white/10 transition-all duration-300 group rounded-sm"
            >
              <div className="mb-6 text-white/80 group-hover:text-white transition-colors">
                <div className="bg-white/10 p-3 inline-block rounded-sm group-hover:bg-white/20 transition-all duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-white/70 group-hover:text-white/90 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute top-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-white/3 rounded-full blur-3xl"></div>
    </section>
  );
}
