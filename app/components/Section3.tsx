"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Section3() {
  return (
    <section className="w-full bg-white flex justify-center items-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative w-full bg-[#D87D4A] rounded-xl flex flex-col lg:flex-row items-center overflow-hidden h-[700px] md:h-[60rem] lg:h-[560px]"
        >
          {/* Pattern background */}
          <Image
            src="/section3/section3-pattern-circles.svg"
            alt="Pattern"
            width={1000}
            height={1000}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0 -top-36 md:-top-72 lg:-top-10 lg:-left-[50px] lg:w-[800px] lg:h-[800px]"
          />
          {/* Speaker image - Mobile first */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center items-center z-10 pt-16 pb-8 md:flex-1 md:items-start md:justify-start md:pl-12 md:pb-0 md:-ml-12 md:mt-0 lg:mt-12"
          >
            <Image
              src="/section3/section3-speaker.png"
              alt="ZX9 Speaker"
              width={200}
              height={260}
              className="object-contain drop-shadow-xl md:w-[320px] md:h-[384px] md:max-w-none md:max-h-none lg:w-[400px] lg:h-[520px]"
              priority
            />
          </motion.div>
          {/* Text content - Mobile first */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center justify-center z-10 text-center px-6 pb-12 md:-mt-12 lg:flex-1 lg:items-start lg:text-left lg:py-0"
          >
            <h2 className="text-white text-5xl font-bold tracking-wider uppercase mb-6 leading-tight md:text-6xl md:tracking-widest">ZX9<br />SPEAKER</h2>
            <p className="text-white text-base font-light mb-8 max-w-xs md:max-w-md md:text-lg">
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </p>
            <Link href="/speakers/zx9">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#232323] hover:bg-[#4c4c4c] text-white font-bold px-8 py-4 text-sm cursor-pointer tracking-wider uppercase transition-all duration-200 md:px-10 md:text-base md:tracking-widest"
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