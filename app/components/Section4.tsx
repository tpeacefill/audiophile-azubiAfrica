import Image from 'next/image';

export default function Section4() {
  return (
    <section className="w-full bg-white flex justify-center items-center py-6 sm:py-8 lg:py-12">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full rounded-xl overflow-hidden h-64 sm:h-72 md:h-80 lg:h-96 flex items-center">
          {/* Background image - Mobile first, then responsive */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="/section4-ImageSmall.png"
              alt="ZX7 Speaker Background"
              fill
              className="object-cover w-full h-full md:hidden"
              style={{objectPosition: 'right'}}
              priority
            />
            <Image
              src="/section4-ImageMedium.png"
              alt="ZX7 Speaker Background"
              fill
              className="object-cover w-full h-full hidden md:block lg:hidden"
              style={{objectPosition: 'right'}}
              priority
            />
            <Image
              src="/section4-Image.png"
              alt="ZX7 Speaker Background"
              fill
              className="object-cover w-full h-full hidden lg:block"
              style={{objectPosition: 'right'}}
              priority
            />
          </div>
    
          {/* Content - Mobile first layout */}
          <div className="relative z-20 flex flex-col items-start justify-center h-full px-6 sm:px-8 md:px-12 lg:px-16">
            <h2 className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-widest uppercase mb-4 sm:mb-6 lg:mb-8">
              ZX7 SPEAKER
            </h2>
            <button className="border border-black bg-transparent hover:bg-black hover:text-white font-bold px-6 py-3 sm:px-8 sm:py-3 lg:px-10 lg:py-4 text-sm sm:text-base tracking-widest uppercase transition-all duration-200">
              SEE PRODUCT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}