'use client'

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ProductFeaturesProps {
  featureParagraph1: string;
  featureParagraph2: string;
  inTheBox: string[];
}

const ProductFeatures: React.FC<ProductFeaturesProps> = ({ featureParagraph1, featureParagraph2, inTheBox }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24 lg:px-10">
        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:col-span-2"
        >
          <h2 className="text-2xl sm:text-3xl font-bold uppercase mb-8 tracking-wide">Features</h2>
          <p className="text-gray-500 font-light text-base mb-6 whitespace-pre-line">{featureParagraph1}</p>
          <p className="text-gray-500 font-light text-base whitespace-pre-line">{featureParagraph2}</p>
        </motion.div>
        {/* In the Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          className="self-start lg:pl-16"
        >
          {/* On md: heading and list on same row, top-aligned, large gap. On lg: revert to block layout for grid cell. */}
          <div className="md:flex md:flex-row md:items-start md:justify-between md:gap-24 lg:block">
            <h2 className="text-2xl sm:text-3xl font-bold uppercase mb-8 md:mb-0 lg:mb-8 tracking-wide">In the Box</h2>
            <ul className="space-y-3 md:space-y-2 md:min-w-[20rem] md:text-left lg:min-w-0 lg:text-left">
              {inTheBox.map((item, idx) => {
                const match = item.match(/^(\d+x)\s(.+)$/i);
                return (
                  <li key={idx} className="flex items-baseline gap-3">
                    <span className="text-[#D87D4A] font-bold text-base min-w-[2.5rem]">
                      {match ? match[1] : item.split(' ')[0]}
                    </span>
                    <span className="text-gray-500 text-base font-light">
                      {match ? match[2] : item.split(' ').slice(1).join(' ')}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductFeatures; 