"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Section5() {
  return (
    <section className="w-full bg-white flex justify-center items-center pb-12">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col md:flex-row gap-6 w-full"
        >
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="md:basis-1/2 rounded-xl overflow-hidden min-h-[300px] h-[327px] flex items-center justify-center bg-black"
          >
            {/* Small screen image */}
            <div className="block md:hidden w-full h-full">
              <Image
                src="/section5/section5-ImageSmall.png"
                alt="YX1 Earphones"
                className="object-cover w-full h-[327px]"
                width={600}
                height={327}
                style={{maxHeight: '20rem'}}
                priority
              />
            </div>
            {/* Medium and up screen image */}
            <div className="hidden md:block w-full h-full">
              <Image
                src="/section5/section5-Image.png"
                alt="YX1 Earphones"
                className="object-cover w-full h-full"
                width={600}
                height={320}
                style={{maxHeight: '20rem'}}
                priority
              />
            </div>
          </motion.div>
          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="md:basis-1/2 rounded-xl bg-[#F1F1F1] flex flex-col items-start justify-center px-12 py-10 h-[327px]"
          >
            <h2 className="text-xl md:text-3xl lg:text-4xl text-black font-medium tracking-widest uppercase mb-8">YX1 EARPHONES</h2>
            <Link href="/earphones/yx1-wireless">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="border border-black bg-transparent hover:bg-black hover:text-white font-bold px-10 py-4 text-base tracking-widest uppercase transition-all duration-200 cursor-pointer"
              >
                SEE PRODUCT
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 