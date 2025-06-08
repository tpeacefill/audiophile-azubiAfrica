'use client'


import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProductMockPhotosProps {
  topLeft: string;
  bottomLeft: string;
  right: string;
  altTopLeft?: string;
  altBottomLeft?: string;
  altRight?: string;
}

const ProductMockPhotos: React.FC<ProductMockPhotosProps> = ({
  topLeft,
  bottomLeft,
  right,
  altTopLeft = 'Product lifestyle photo',
  altBottomLeft = 'Product lifestyle photo',
  altRight = 'Product closeup photo',
}) => {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:px-10">
        {/* Left: Two stacked images */}
        <div className="flex flex-col gap-8 md:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full h-64 md:h-56 lg:h-64 rounded-xl overflow-hidden"
          >
            <Image src={topLeft} alt={altTopLeft} width={445} height={280} className="object-cover w-full h-full" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="w-full h-64 md:h-56 lg:h-64 rounded-xl overflow-hidden"
          >
            <Image src={bottomLeft} alt={altBottomLeft} width={445} height={280} className="object-cover w-full h-full" />
          </motion.div>
        </div>
        {/* Right: Large image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          className="w-full h-[33rem] md:col-span-2 rounded-xl overflow-hidden flex items-center justify-center"
        >
          <Image src={right} alt={altRight} width={635} height={592} className="object-cover w-full h-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default ProductMockPhotos; 