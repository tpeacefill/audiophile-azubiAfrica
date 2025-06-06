"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Imageleft = () => {
  return (
    <section className="w-full flex justify-center items-center py-16 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Image Left - Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center items-center w-full md:w-auto"
        >
          <div className="bg-[#f1f1f1] rounded-md flex items-center justify-center w-[20rem] h-[20rem] sm:w-[24rem] sm:h-[24rem] lg:w-[32rem] lg:h-[32rem]">
            <Image
              src="/ImageLeftHeadphone.jpg"
              alt="XX99 Mark II Headphones"
              width={400}
              height={400}
              className="object-contain w-[16rem] h-[16rem] sm:w-[20rem] sm:h-[20rem] lg:w-[28rem] lg:h-[28rem]"
              priority
            />
          </div>
        </motion.div>
        {/* Content Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left px-2 md:px-0"
        >
          <span className="text-[#D87D4A] tracking-[0.5em] text-sm font-medium uppercase mb-4">NEW PRODUCT</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black uppercase mb-6 leading-tight">XX99 MARK II<br />HEADPHONES</h2>
          <p className="text-gray-500 text-base md:text-lg font-light mb-8 max-w-md">
            The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
          </p>
          <Link href="/headphones/xx99-mark-two">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#D87D4A] hover:bg-[#fbaf85] text-white font-bold px-8 py-4 text-base tracking-widest uppercase transition-all duration-300 ease-out rounded shadow-md"
            >
              SEE PRODUCT
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Imageleft; 