"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am currently a <span className="font-medium">BCA 3rd year student</span> with a strong passion for web development. 
        I recently completed a <span className="font-medium">MERN stack and Next.js internship</span> at 
        <span className="font-medium"> Navavi Private.ltd</span>, where I gained hands-on experience in{" "}
        <span className="font-medium">full-stack web development</span>. 
        <span className="italic"> My favorite part of programming</span> is solving problems and building intuitive, 
        user-friendly applications. My core stack includes{" "}
        <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>. I also have experience with TypeScript, 
        and I'm always eager to learn and work with new technologies. I'm currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a Full Stack Developer.
      </p>

      <p>
        <span className="italic">When I’m not coding</span>, I enjoy playing video games and watching movies. 
        I also love <span className="font-medium">learning new things</span>, and lately I’ve been exploring topics 
        in <span className="font-medium">history and philosophy</span>.
      </p>
    </motion.section>
  );
}
