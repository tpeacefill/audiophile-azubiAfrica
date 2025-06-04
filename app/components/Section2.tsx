import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    title: 'HEADPHONES',
    image: '/section2-Image1.png',
    link: '/headphones',
  },
  {
    title: 'SPEAKERS',
    image: '/section2Image2.png',
    link: '/speakers',
  },
  {
    title: 'EARPHONES',
    image: '/section2-Image3.png',
    link: '/earphones',
  },
];

export default function Section2() {
  return (
    <section className="bg-white w-full"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-48 grid grid-cols-1 md:grid-cols-3 gap-8">
      {categories.map((cat) => (
        <div
          key={cat.title}
          className="flex flex-col items-center bg-gray-100 rounded-lg pt-0 pb-4 shadow-sm hover:shadow-lg transition-shadow duration-200 relative overflow-visible"
        >
          <div className="-mt-20 flex items-center justify-center h-56 z-10">
            <Image src={cat.image} alt={cat.title} width={220} height={220} className="object-contain" />
          </div>
          <h3 className="text-xl font-medium tracking-widest uppercase mb-2 text-black text-center">{cat.title}</h3>
          <Link href={cat.link} className="flex items-center space-x-2 group">
            <span className="text-gray-500 font-regular tracking-widest uppercase text-base group-hover:text-[#D87D4A] transition-colors">SHOP</span>
            <svg className="text-[#D87D4A] text-xl group-hover:translate-x-1 transition-transform w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
      ))}
    </div></section>
  );
} 