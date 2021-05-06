import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import styles from '@/styles/Slider.module.css';
import Image from 'next/image';

let images = [];

//fetch data from the api on component mounting
fetch('/api/cloudinary')
  .then((response) => response.json())
  .then((data) => {
    images = data.map((image) => {
      // console.log("In fetch", image);
      return image.url;
    });
    // console.log(images);
  });

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export const ImageSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const src = images.length > 0 ? images[imageIndex] : `/amazon.jpg`;

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          className={styles.img}
          key={page}
          custom={direction}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            x: { type: 'spring', stiffness: 400, damping: 100 },
            opacity: { duration: 0.2 },
          }}
          drag='x'
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <Image
            src={src}
            alt='Picture of the author'
            width={600}
            height={600}
          />
        </motion.div>
      </AnimatePresence>
      <motion.div
        className={styles.next}
        onClick={() => paginate(1)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {'‣'}
      </motion.div>
      <motion.div
        className={styles.prev}
        onClick={() => paginate(-1)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {'‣'}
      </motion.div>
    </>
  );
};

export default ImageSlider;
