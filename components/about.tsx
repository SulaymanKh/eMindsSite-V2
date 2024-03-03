"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Slideshow from "./slideshow";

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
      <SectionHeading>Your Path to Awesome Maths Learning!</SectionHeading>
      <p className="mb-3">
      Welcome to eMinds Education, where maths becomes exciting and easy, right from the comfort of your own home! 
      We're super proud to offer the best online maths lessons that fit your style and dreams. 
      Great education shouldn't cost a ton – that's why we keep it affordable!
      Meet our cool teachers from real schools! They know maths inside out and are awesome at teaching. They'll help you learn in a way that clicks with you.
      </p>

      <p>
        <span className="font-medium font-bold">
        Joining Up Is Simple:
        </span>
        <br></br>Getting started is a breeze! Just get in touch with us, and we'll invite you for a free check. 
        We'll figure out where you're at and make a plan that's just for you.
      </p>
      <p>
      <span className="font-medium font-bold">
        We're Here for You:
        </span>
        <br></br>At eMinds Education, your success matters most. Whether you want to move up sets in maths class, 
        boost your grades, or tackle tougher stuff, we've got your back. Our lessons are all about what you need – homework help, test prep, 
        exam technique practice– you name it!
      </p>

      <Slideshow/>
    </motion.section>
  );
}
