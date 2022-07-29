import React from 'react';
import { motion } from 'framer-motion';

type FlashCardProps = {
  frontCard: string;
  backCard: string;
};

export const FlashCard: React.FC<any> = (props) => {
  const [rotate, setRotate] = React.useState<boolean>(false);
  return (
    <motion.div
      className='bg-purple w-5/6 h-2/3 rounded-xl bg-onyx shadow-3xl hover:cursor-pointer'
      animate={{ rotateX: rotate ? 180 : 0 }}
      transition={{ duration: 0.3 }}
      onClick={() => setRotate(!rotate)}
      whileHover={{ scale: 1.05 }}
    >
      {rotate ? <motion.div transition={{ delay: 0.31 }}>UHEUEHUEHUHEUHEUHE</motion.div> : <div>KKKKKKKKKKKK</div>}
    </motion.div>
  );
};
