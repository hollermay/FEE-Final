
import { picture1,picture2, picture3,picture4, picture5, picture6, picture7, picture8, picture9, picture10 } from '../assets';
import { motion } from 'framer-motion';

const ImageGrid = () => {
  return (
    <div>
      <motion.div
        className="image-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
      >
        <div>
          <motion.img
            className="image span-1"
            src={picture1}
            alt="Portrait 1"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            className="image span-1"
            src={picture2}
            alt="Portrait 1"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            className="image span-3"
            src={picture3}
            alt="Portrait 1"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div>
          <motion.img
            className="image span-3"
            src={picture4}
            alt="Portrait 1"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            className="image span-1"
            src={picture5}
            alt="Portrait 1"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            className="image span-1"
            src={picture6}
            alt="Portrait 1"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div>
          <motion.img
            className="image span-1"
            src={picture7}
            alt="Portrait 1"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            className="image span-1"
            src={picture8}
            alt="Portrait 1"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            className="image span-2"
            src={picture9}
            alt="Portrait 1"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            className="image span-1"
            src={picture10}
            alt="Portrait 1"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
      <div className="load-more">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          LOAD MORE CLOTHES
        </motion.button>
      </div>
    </div>
  );
};

export default ImageGrid;
