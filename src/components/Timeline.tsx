import React from "react";
import Selector from "./Selector.tsx";
import Card from "./Card.tsx";
import { motion, AnimatePresence } from "motion/react";

function Timeline({ selected, setSelected }) {
  const animationConfig = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
    transition: { duration: 0.2 },
  };

  return (
    <div className="mx-auto flex w-4/5 flex-col">
      <Selector selected={selected} setSelected={setSelected} />
      <div className="mt-2 flex flex-col space-y-5 rounded-2xl border shadow shadow-white">
        <div className="ml-10 border-l border-white border-opacity-20">
          <AnimatePresence mode="wait">
            {selected === "Work" && (
              <motion.ul key="work" {...animationConfig} className="space-y-5">
                <li className="relative right-6 pt-12">
                  <Card
                    iconImage="/assets/tech_for_good_inc_logo.jpg"
                    name="Tech For Good Inc."
                    title="Software Engineer"
                    dates="June 2024 - Present"
                    link="https://www.techforgoodinc.org/"
                  />
                </li>
                <li className="relative right-6 pb-14">
                  <Card
                    iconImage="/assets/tesla.svg"
                    name="Tesla Motors"
                    title="Electric Vehicle Service Intern"
                    dates="June 2023 - Aug 2023"
                    link="https://www.tesla.com/"
                  />
                </li>
              </motion.ul>
            )}
            {selected === "Education" && (
              <motion.ul
                key="education"
                {...animationConfig}
                className="space-y-5"
              >
                <li className="relative right-6 pt-12">
                  <Card
                    iconImage="/assets/ufl.png"
                    name="University of Florida"
                    title="Bachelor of Science in Computer Science"
                    dates="Aug 2021 - May 2025"
                    link="https://ufl.edu/"
                  />
                </li>
                <li className="relative right-6 pb-14">
                  <Card
                    iconImage="/assets/terra.png"
                    name="TERRA Environmental Institute"
                    title="High School Diploma"
                    dates="Aug 2017 - May 2021"
                    link="https://terrawolves.com/"
                  />
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
