import Image from 'next/image';

export default function Section5() {
  return (
    <section className="w-full bg-white flex justify-center items-center pb-12">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6 w-full">
          {/* Left: Image */}
          <div className="flex-1 rounded-xl overflow-hidden min-h-[300px] flex items-center justify-center bg-black">
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
          {/* Right: Content */}
          <div className="flex-1 rounded-xl bg-[#F1F1F1] flex flex-col items-start justify-center px-8 py-10">
            <h2 className="text-black text-3xl md:text-4xl font-bold tracking-widest uppercase mb-8">YX1 EARPHONES</h2>
            <button className="border border-black bg-transparent hover:bg-black hover:text-white font-bold px-10 py-4 text-base tracking-widest uppercase transition-all duration-200">
              SEE PRODUCT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 