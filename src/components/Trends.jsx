import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { trends, sponsor1, sponsor2, sponsor3, sponsor4, sponsor5, sponsor6 } from '../assets';

const Trends = () => {
  const trendsRef = useRef(null);
  const isInView = useInView(trendsRef, { once: true });

  return (
    <div>
      <motion.div
        className="trends"
        ref={trendsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="img">
          <motion.img
            src={trends}
            alt=""
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="headline">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            TOP 20 TRENDS FOR
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            SPRING/SUMMER
          </motion.h2>
          <div className="highlights">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              With Seventies influences from Saturday night fever to hippy deluxe,
              a khaki nod to military style alongside nautical accents,
              experiments with transparency, patchworks of vintage prints and mix
              & match approach to volume and fabric, for Summer 2015 we're set to
              see contrast take center stage. Stay a step ahead as we present a
              round-up of the runaway trends set to take Spring/Summer 2015 by
              storm.
            </motion.p>
            <div className="dots">
              <motion.div
                className="dot-on"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="dot-off"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="dot-off"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
          <div className="more">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              MORE
            </motion.button>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="sponsor"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.img
          src={sponsor1}
          alt=""
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.img
          src={sponsor2}
          alt=""
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.img
          src={sponsor3}
          alt=""
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.img
          src={sponsor4}
          alt=""
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.img
          src={sponsor5}
          alt=""
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.img
          src={sponsor6}
          alt=""
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  );
};

export default Trends;
