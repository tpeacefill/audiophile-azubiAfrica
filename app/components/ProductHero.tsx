'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useCartStore } from '../store/cartStore';

interface ProductHeroProps {
  span: string;
  image: string;
  h1: React.ReactNode;
  p: string;
  price: string;
  id: string;
  productName: string;
}

const ProductHero: React.FC<ProductHeroProps> = ({ span, image, h1, p, price, id, productName }) => {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const addItem = useCartStore((state) => state.addItem);

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCart = () => {
    // Convert price string to number, removing any commas
    const numericPrice = Number(price.replace(/,/g, ''));

    // Add the item with the selected quantity
    for (let i = 0; i < quantity; i++) {
      addItem({
        id,
        name: productName,
        price: numericPrice,
        image,
      });
    }
    
    setQuantity(1); // Reset quantity after adding to cart
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="w-full bg-white py-10 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto lg:px-10">
        <div className="mb-8 sm:mb-10 md:mb-12 mt-4 sm:mt-8 pt-10">
          <button
            type="button"
            onClick={() => router.back()}
            className="text-gray-500 hover:text-black text-sm font-light focus:outline-none cursor-pointer"
          >
            Go Back
          </button>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-12 lg:gap-24">
          {/* Image */}
          <div className="w-full flex justify-center md:justify-start md:flex-1">
            <div className="bg-[#f1f1f1] rounded-2xl w-full max-w-md sm:max-w-lg md:max-w-lg lg:max-w-2xl h-72 sm:h-80 md:h-[36rem] lg:w-[500px] lg:h-[500px] flex items-center justify-center overflow-hidden">
              <Image
                src={image}
                alt={typeof h1 === 'string' ? h1 : 'Product image'}
                width={400}
                height={400}
                className="object-contain w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-[28rem] lg:h-[28rem]"
                priority
              />
            </div>
          </div>
          {/* Content */}
          <div className="w-full max-w-xl flex flex-col items-start text-left md:items-start md:text-left md:flex-1 justify-center">
            <span className="text-[#D87D4A] tracking-[0.5em] text-sm font-medium uppercase mb-4 block">
              {span}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black uppercase mb-6 leading-tight">
              {h1}
            </h1>
            <p className="text-gray-500 font-light text-base leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
              {p}
            </p>
            <div className="text-black text-lg font-bold mb-8">$ {price}</div>
            <div className="flex flex-row items-center gap-4 w-full max-w-xs mb-8">
              <div className="flex items-center bg-gray-100 rounded w-full sm:w-32 h-12 justify-between px-4">
                <button className="text-2xl text-gray-700 hover:text-black transition-colors cursor-pointer" onClick={handleDecrease} disabled={quantity === 1}>-</button>
                <span className="text-lg font-semibold">{quantity}</span>
                <button className="text-2xl text-gray-700 hover:text-black transition-colors cursor-pointer" onClick={handleIncrease}>+</button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold w-full sm:w-auto px-4 h-12 text-sm tracking-widest uppercase transition-all duration-300 rounded cursor-pointer"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProductHero; 