'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ImageleftProps {
  span?: string;
  image: string;
  h1: React.ReactNode;
  p: string;
}

const Imageleft: React.FC<ImageleftProps> = ({ span, image, h1, p }) => {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20 px-0">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full flex justify-center lg:justify-start lg:px-8 lg:flex-1"
        >
          <div className="bg-[#f1f1f1] rounded-lg w-full max-w-full h-80 sm:h-96 lg:w-[500px] lg:h-[500px] flex items-center justify-center relative overflow-hidden">
            <Image
              src={image}
              alt={typeof h1 === 'string' ? h1 : 'Product image'}
              width={400}
              height={400}
              className="object-contain w-60 h-60 sm:w-80 sm:h-80 lg:w-[28rem] lg:h-[28rem]"
              priority
            />
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full max-w-2xl text-center flex flex-col items-center lg:items-start lg:text-left lg:flex-1"
        >
          {span && (
            <div className="mb-6">
              <span className="text-[#D87D4A] tracking-[0.5em] text-sm font-medium uppercase mb-4 block">
                {span}
              </span>
            </div>
          )}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black uppercase mb-6 leading-tight">
            {h1}
          </h1>
          <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
            {p}
          </p>
          <button className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold px-6 py-3 text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer">
            SEE PRODUCT
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Imageleft;