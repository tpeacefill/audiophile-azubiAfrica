import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Section6 from '../../components/Section6';
import Section2 from '@/app/components/Section2';
import ProductHero from '@/app/components/ProductHero';

export default function ZX9Page() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <ProductHero
        span="NEW PRODUCT"
        image="/imageleft/ImageLeftSpeaker.jpg"
        h1={<>ZX9<br/>SPEAKER</>}
        p="Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        price="4,500"
      />
      <Section2/>
      <Section6 />
      <Footer />
    </div>
  );
} 