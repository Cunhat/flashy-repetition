import React from 'react';
import { motion } from 'framer-motion';

type FlashCardProps = {
  frontCard: React.ReactNode;
  backCard: React.ReactNode;
};

export const FlashCard: React.FC<FlashCardProps> = (props) => {
  const [rotate, setRotate] = React.useState<boolean>(false);
  return (
    <motion.div className='bg-transparent w-5/6 h-2/3 hover:cursor-pointer' onClick={() => setRotate(!rotate)} whileHover={{ scale: 1.05 }}>
      <motion.div
        transition={{ duration: 0.3 }}
        animate={{ rotateX: rotate ? 180 : 0 }}
        className='relative h-full w-full'
        style={{ transformStyle: 'preserve-3d' }}
      >
        <motion.div style={{ backfaceVisibility: 'hidden' }} className='absolute w-full h-full rounded-xl shadow-3xl bg-onyx p-4'>
          {props.frontCard}
        </motion.div>
        <motion.div
          style={{ backfaceVisibility: 'hidden' }}
          animate={{ rotateX: 180 }}
          className='absolute w-full h-full rounded-xl shadow-3xl bg-onyx p-4'
        >
          {props.backCard}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
