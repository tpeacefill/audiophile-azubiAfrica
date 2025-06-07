import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Section6 from '../../components/Section6';
import Section2 from '@/app/components/Section2';
import ProductHero from '@/app/components/ProductHero';

export default function ZX7Page() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <ProductHero
        span="NEW PRODUCT"
        image="/imageright/ImageRightSpeaker.jpg"
        h1={<>ZX7<br/>SPEAKER</>}
        p="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
        price="3,500"
      />
      <Section2/>
      <Section6 />
      <Footer />
    </div>
  );
} 