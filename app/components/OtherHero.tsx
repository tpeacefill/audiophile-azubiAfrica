'use client'

import React from 'react';
import { motion } from 'framer-motion';

interface OtherHeroProps {
  title: string;
}

const OtherHero: React.FC<OtherHeroProps> = ({ title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-black text-white py-48 text-center"
    >
      <h1 className="text-4xl font-medium uppercase">{title}</h1>
    </motion.div>
  );
};

export default OtherHero; 