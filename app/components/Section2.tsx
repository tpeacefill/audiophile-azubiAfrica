"use client"

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const categories = [
  {
    title: 'HEADPHONES',
    image: '/section2/section2-Image1.png',
    link: '/headphones',
  },
  {
    title: 'SPEAKERS',
    image: '/section2/section2Image2.png',
    link: '/speakers',
  },
  {
    title: 'EARPHONES',
    image: '/section2/section2-Image3.png',
    link: '/earphones',
  },
];

export default function Section2() {
  return (
    <section className="bg-white w-full pt-12 sm:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-8 md:gap-10 lg:gap-12">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-center bg-gray-100 rounded-lg pt-0 pb-6 sm:pb-4 shadow-sm hover:shadow-lg transition-shadow duration-200 relative overflow-visible mb-10 sm:mb-0"
            >
              <div className="-mt-16 sm:-mt-16 md:-mt-20 flex items-center justify-center h-32 sm:h-40 md:h-48 lg:h-56 z-10 mb-4 sm:mb-0">
                <Image 
                  src={cat.image} 
                  alt={cat.title} 
                  width={160} 
                  height={160} 
                  className="object-contain w-32 h-32 sm:w-40 sm:h-40 md:w-40 md:h-40 lg:w-56 lg:h-56" 
                />
              </div>
              <h3 className="text-base sm:text-lg md:text-lg lg:text-2xl font-medium tracking-widest uppercase mb-3 sm:mb-2 text-black text-center">
                {cat.title}
              </h3>
              <Link href={cat.link} className="flex items-center space-x-2 group">
                <span className="text-gray-500 font-regular tracking-widest uppercase text-sm sm:text-base group-hover:text-[#D87D4A] transition-colors">
                  SHOP
                </span>
                <svg 
                  className="text-[#D87D4A] group-hover:translate-x-1 transition-transform w-4 h-4 sm:w-5 sm:h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
