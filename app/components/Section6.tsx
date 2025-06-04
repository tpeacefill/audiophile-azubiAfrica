import Image from 'next/image';

export default function Section6() {
  return (
    <section className="w-full bg-white flex justify-center items-center py-32">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text */}
          <div className="flex-1 flex flex-col items-start justify-center">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8">
              BRINGING YOU THE<br />
              <span className="text-[#D87D4A]">BEST</span> AUDIO GEAR
            </h2>
            <p className="text-gray-500 text-base md:text-lg font-light max-w-lg">
              Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
            </p>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex items-center justify-center">
            <Image
              src="/section6-Image.png"
              alt="Audiophile Store"
              className="rounded-md object-cover w-full h-[588px]"
              width={540}
              height={588}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 