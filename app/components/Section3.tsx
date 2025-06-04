import Image from 'next/image';

export default function Section3() {
  return (
    <section className="w-full bg-white flex justify-center items-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full bg-[#D87D4A] rounded-xl flex flex-col md:flex-row items-center overflow-hidden min-h-[400px] h-[35rem]">
          {/* Pattern background */}
          <Image
            src="/section3-pattern-circles.svg"
            alt="Pattern"
            width={1000}
            height={1000}
            className="absolute left-0 -ml-64 top-1/2 -translate-y-1/3 w-[1000px] h-[1000px] object-contain pointer-events-none select-none z-0"
          />
          {/* Speaker image */}
          <div className="flex-1 flex justify-center items-end z-10 md:pl-12 pt-8 md:pt-0 -ml-12 mt-28">
            <Image
              src="/section3-speaker.png"
              alt="ZX9 Speaker"
              width={400}
              height={520}
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>
          {/* Text content */}
          <div className="flex-1 flex flex-col items-center md:items-start justify-center z-10 text-center md:text-left px-6 py-10 md:py-0">
            <h2 className="text-white text-4xl md:text-6xl font-bold tracking-widest uppercase mb-6 leading-tight">ZX9<br />SPEAKER</h2>
            <p className="text-white text-base md:text-lg font-light mb-8 max-w-md">
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </p>
            <button className="bg-[#232323] hover:bg-[#4c4c4c] text-white font-bold px-10 py-4 text-base tracking-widest uppercase transition-all duration-200">
              SEE PRODUCT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 