import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  name: string;
  image: string;
  href: string;
}

interface ProductYouMayLikeProps {
  products: Product[];
}

const ProductYouMayLike: React.FC<ProductYouMayLikeProps> = ({ products }) => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto lg:px-10">
        <h2 className="text-2xl sm:text-3xl font-bold uppercase text-center mb-14 tracking-wide">You may also like</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.name} className="flex flex-col items-center">
              <div className="bg-[#f1f1f1] rounded-xl w-full h-64 flex items-center justify-center mb-8">
                <Image src={product.image} alt={product.name} width={350} height={318} className="object-contain w-full h-full max-w-[350px] max-h-[318px]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold uppercase mb-6 tracking-wide text-center">{product.name}</h3>
              <Link href={product.href} className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold px-8 py-3 text-xs tracking-widest uppercase transition-all duration-300 rounded cursor-pointer block text-center">
                See Product
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductYouMayLike; 