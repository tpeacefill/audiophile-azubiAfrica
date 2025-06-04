import Image from 'next/image';

export default function Section4() {
  return (
    <section className="w-full bg-white flex justify-center items-center py-12">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full rounded-xl overflow-hidden min-h-[300px] flex items-center" style={{height: '20rem'}}>
          {/* Background image */}
          <Image
            src="/section4-Image.png"
            alt="ZX7 Speaker Background"
            fill
            className="object-cover w-full h-full z-0"
            style={{objectPosition: 'right'}}
            priority
          />
    
          {/* Content */}
          <div className="relative z-20 flex flex-col items-start justify-center h-full pl-8 md:pl-16">
            <h2 className="text-black text-3xl md:text-4xl font-bold tracking-widest uppercase mb-8">ZX7 SPEAKER</h2>
            <button className="border border-black bg-transparent hover:bg-black hover:text-white font-bold px-10 py-4 text-base tracking-widest uppercase transition-all duration-200">
              SEE PRODUCT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 