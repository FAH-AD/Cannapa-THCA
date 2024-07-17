import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutUsComp = ({ direction = 'row', imageSrc, heading, text }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      ref={ref}
      className={`flex flex-col  ${direction === 'row' ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center mt-8 p-4 w-[80%] mx-auto`}
    >
      <div className="flex-shrink-0">
        <img src={imageSrc} alt="Side by Side" className="w-[450px] mb-6 rounded-md max-h-[300px]" />
      </div>
      <div className="ml-4 text-left">
        <motion.h2
          className="text-2xl font-bold mb-2 text-gray-800"
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 1 }}
        >
          {heading}
        </motion.h2>
        <motion.p
          className=""
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 1 }}
        >
          {text}
        </motion.p>
      </div>
    </div>
  );
};

export default AboutUsComp;
