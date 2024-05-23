import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { prev, next, mainPicture } from '../assets';

const Hero = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });

  return (
    <div ref={heroRef}>
      <motion.div
        className="main-picture"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="season-text">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            NEW
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            SEASON
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            LOOKS
          </motion.h3>
        </div>
        <div className="auntie">
          <motion.img
            src={mainPicture}
            alt=""
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="arrow">
          <motion.img
            src={prev}
            alt=""
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={next}
            alt=""
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
      <motion.div
        className="season-btn"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.button
          className="spring"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          SPRING
        </motion.button>
        <motion.button
          className="summer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          SUMMER
        </motion.button>
        <motion.button
          className="autumn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          AUTUMN
        </motion.button>
        <motion.button
          className="winter"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          WINTER
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;