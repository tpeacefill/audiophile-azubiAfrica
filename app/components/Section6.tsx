"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Section6() {
  return (
    <section className="w-full bg-white flex justify-center items-center py-16 md:py-24 lg:py-32">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col lg:flex-row-reverse items-center lg:items-stretch gap-8 lg:gap-12"
        >
          {/* Responsive Images: Small, Medium, Large */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full flex justify-center lg:justify-end mb-8 lg:mb-0"
          >
            {/* Small screen image */}
            <div className="block sm:hidden w-full">
              <Image
                src="/section6/section6-ImageSmall.png"
                alt="Audiophile Store"
                className="rounded-md object-cover w-[327px] h-[300px] mx-auto"
                width={327}
                height={300}
                priority
              />
            </div>
            {/* Medium screen image */}
            <div className="hidden sm:block md:block lg:hidden w-full">
              <Image
                src="/section6/section6-ImageMedium.png"
                alt="Audiophile Store"
                className="rounded-md object-cover w-full h-[300px]"
                width={689}
                height={300}
                priority
              />
            </div>
            {/* Large screen image */}
            <div className="hidden lg:block w-full">
              <Image
                src="/section6/section6-Image.png"
                alt="Audiophile Store"
                className="rounded-md object-cover w-full md:w-[500px] lg:w-[540px] h-[400px] lg:h-[588px]"
                width={540}
                height={588}
                priority
              />
            </div>
          </motion.div>
          {/* Text below for small/medium, left for large */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full flex flex-col items-center lg:items-start justify-center text-center lg:text-left"
          >
            {/* Header for small and large screens */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-6 md:mb-8 block md:hidden lg:block">
              BRINGING YOU THE<br />
              <span className="text-[#D87D4A]">BEST</span> AUDIO GEAR
            </h2>
            {/* Header for medium screens only */}
            <h2 className="hidden md:block lg:hidden text-5xl font-medium tracking-tight mb-8">
              <span className="block">BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span></span>
              <span className="block">AUDIO GEAR</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg font-light max-w-xl">
              Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 