import React from 'react';
import Image from 'next/image';

interface ImageRightProps {
  image: string;
  h1: React.ReactNode;
  p: string;
}

const ImageRight: React.FC<ImageRightProps> = ({ image, h1, p }) => {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-12 lg:flex-row-reverse lg:items-center lg:gap-20 px-0">
        {/* Right Side - Image */}
        <div className="w-full flex justify-center lg:justify-end lg:px-8 lg:flex-1">
          <div className="bg-[#f1f1f1] rounded-lg w-full max-w-3xl h-80 sm:h-96 lg:w-[500px] lg:h-[500px] flex items-center justify-center relative overflow-hidden">
            <Image
              src={image}
              alt={typeof h1 === 'string' ? h1 : 'Product image'}
              width={450}
              height={450}
              className="object-contain w-60 h-60 sm:w-80 sm:h-80 lg:w-[28rem] lg:h-[28rem]"
              priority
            />
          </div>
        </div>

        {/* Left Side - Content */}
        <div className="w-full max-w-2xl text-center flex flex-col lg:pl-8 items-center lg:items-start lg:text-left lg:flex-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black uppercase mb-6 leading-tight">
            {h1}
          </h1>
          <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
            {p}
          </p>
          <button className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold px-6 py-3 text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer">
            SEE PRODUCT
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImageRight; 