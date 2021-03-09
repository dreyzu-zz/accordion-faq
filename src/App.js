import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import data from "./data.ts";
import classnames from "classnames";
import React, { useState } from "react";

function App() {
  const [expandedItem, setExpandedItem] = useState();

  const boxAnimation = {
    initial: {
      y: 0,
    },
    float: {
      y: -20,
    },
  };

  const arrowAnimation = {
    initial: {
      rotate: 0,
    },
    expanded: {
      rotate: 180,
    },
  };

  const womanAnimation = {
    initial: {
      y: 0,
    },
    float: {
      y: -15,
    },
  };

  return (
    <div className="flex justify-center items-center relative h-screen w-screen bg-gradient-to-b from-soft-violet to-soft-blue">
      <div className="flex flex-col rounded-2xl bg-white w-full max-w-md shadow-2xl mt-48 mx-6 mb-32 md:mt-14 md:mx-12 md:mb-0 md:flex-row md:max-w-3xl">
        <div className="flex flex-col justify-center items-center relative w-full">
          <motion.img
            alt="box"
            src="images/illustration-box-desktop.svg"
            className="absolute hidden left-0 -ml-20 z-20 w-40 mt-24 md:block"
            variants={boxAnimation}
            animate="float"
            transition={{
              ease: "easeInOut",
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <div className="relative pb-16 -mb-16 pt-8 -mt-8 md:overflow-hidden">
            {/* desktop illustrations */}
            <img
              alt="illustration of a woman shopping online"
              src="images/illustration-woman-online-desktop.svg"
              className="hidden -ml-12 relative z-10 md:block"
            />
            <img
              alt="card's background"
              src="images/bg-pattern-desktop.svg"
              className="hidden -ml-12 absolute inset-y-0 top-6 left-0 md:block"
            />
            {/* mobile illustrations */}
            <img
              alt="illustration of a woman shopping online mobile"
              src="images/illustration-woman-online-mobile.svg"
              variants={womanAnimation}
              animate="float"
              className="md:hidden -mt-28 -ml-5 z-10 self-center relative"
              transition={{
                ease: "easeInOut",
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <img
              alt="card's background"
              src="images/bg-pattern-mobile.svg"
              className="-ml-1 transform -translate-y-20 md:hidden"
            />
          </div>
        </div>
        <div className="w-full p-8 -mt-20 md:p-16 md:mt-0">
          <h1 className="text-center text-very-dark-blue font-body font-bold text-4xl md:text-left">
            FAQ
          </h1>
          <div className="mt-4 flex flex-col">
            {data.map((item) => (
              <motion.div
                key={item.id}
                onClick={() => setExpandedItem(item.id)}
                className="group flex flex-col cursor-pointer"
              >
                <div className="flex justify-between items-center py-3">
                  <p
                    className={classnames(
                      "text-xs transition-color duration-150 text-desatured-blue group-hover:text-soft-red font-body",
                      { "font-bold": expandedItem === item.id }
                    )}
                  >
                    {item.title}
                  </p>
                  <motion.img
                    alt="arrow"
                    src="images/icon-arrow-down.svg"
                    className="h-1.5"
                    variants={arrowAnimation}
                    animate={expandedItem === item.id ? "expanded" : "initial"}
                  />
                </div>
                <AnimatePresence>
                  {expandedItem === item.id && (
                    <motion.p
                      className="font-body text-dark-blue text-xs mb-3"
                      key={item.id}
                      initial={{ height: 0, opacity: 0, marginBottom: 0 }}
                      animate={{ height: "auto", opacity: 1, marginBottom: 12 }}
                      exit={{ height: 0, opacity: 0, marginBottom: 0 }}
                      transition={{ type: "tween" }}
                    >
                      {item.description}
                    </motion.p>
                  )}
                </AnimatePresence>
                <hr className="border-light-blue" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
