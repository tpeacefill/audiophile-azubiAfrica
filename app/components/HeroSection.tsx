import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-visible bg-transparent">
      {/* Large screen: Absolutely positioned, large hero image that extends into the navbar */}
      <div className="hidden lg:block absolute right-28 top-0 h-[800px] w-[800px] -z-10 pointer-events-none select-none">
        <Image
          src="/HeroImage.png"
          alt="XX99 Mark II Headphones"
          width={800}
          height={800}
          className="object-contain w-full h-full drop-shadow-2xl"
          priority
        />
      </div>
      {/* Medium screen: Centered hero image */}
      <div className="hidden md:flex lg:hidden absolute inset-0 w-full items-center justify-center z-0">
        <Image
          src="/HeroImageMedium.png"
          alt="XX99 Mark II Headphones"
          width={600}
          height={600}
          className="object-contain w-full"
          priority
        />
      </div>
      {/* Small screen: Centered hero image */}
      <div className="flex md:hidden absolute inset-0 w-full h-full items-center justify-center z-0">
        <Image
          src="/HeroImageSmall.png"
          alt="XX99 Mark II Headphones"
          width={400}
          height={300}
          className="object-contain w-full h-full"
          priority
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[50vh] lg:min-h-[80vh]">
          {/* Text Content: Centered on small/medium, left on large */}
          <div className="flex flex-col justify-center items-center text-center -mt-8 lg:items-start lg:text-left lg:mt-0">
            <span className="inline-block tracking-[0.5em] text-gray-400 text-base md:text-lg font-light uppercase mb-6">
              NEW PRODUCT
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              XX99 MARK II
              <br />
              <span className="text-white">HEADPHONES</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed font-extralight mb-8 max-w-xl">
              Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </p>
            <Link href="/headphones">
              <button className="group bg-[#D87D4A] hover:bg-[#fbaf85] text-white font-bold px-8 py-4 text-base tracking-[0.1em] uppercase transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg">
                SEE PRODUCT
              </button>
            </Link>
          </div>
          {/* Right: Empty, image is absolutely positioned on large screens */}
          <div className="hidden lg:flex"></div>
        </div>
      </div>
    </section>
  );
}