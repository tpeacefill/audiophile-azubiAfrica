import Image from 'next/image';

export default function Section5() {
  return (
    <section className="w-full bg-white flex justify-center items-center pb-12">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6 w-full">
          {/* Left: Image */}
          <div className="md:basis-1/2 rounded-xl overflow-hidden min-h-[300px] h-[327px] flex items-center justify-center bg-black">
            {/* Small screen image */}
            <div className="block md:hidden w-full h-full">
              <Image
                src="/section5-ImageSmall.png"
                alt="YX1 Earphones"
                className="object-cover w-full h-[327px]"
                width={600}
                height={327}
                style={{maxHeight: '20rem'}}
                priority
              />
            </div>
            {/* Medium and up screen image */}
            <div className="hidden md:block w-full h-full">
              <Image
                src="/section5-Image.png"
                alt="YX1 Earphones"
                className="object-cover w-full h-full"
                width={600}
                height={320}
                style={{maxHeight: '20rem'}}
                priority
              />
            </div>
          </div>
          {/* Right: Content */}
          <div className="md:basis-1/2 rounded-xl bg-[#F1F1F1] flex flex-col items-start justify-center px-12 py-10 h-[327px]">
            <h2 className="text-xl md:text-3xl lg:text-4xl text-black font-medium tracking-widest uppercase mb-8">YX1 EARPHONES</h2>
            <button className="border border-black bg-transparent hover:bg-black hover:text-white font-bold px-10 py-4 text-base tracking-widest uppercase transition-all duration-200">
              SEE PRODUCT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 