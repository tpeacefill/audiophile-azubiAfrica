import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Section6 from '../../components/Section6';
import Section2 from '@/app/components/Section2';
import ProductHero from '@/app/components/ProductHero';

export default function XX99MarkIIPage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <ProductHero
        span="NEW PRODUCT"
        image="/imageleft/ImageLeftHeadphone.jpg"
        h1={<>XX99 MARK II<br/>HEADPHONES</>}
        p="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        price='2,999'
      />
      <Section2/>
      <Section6 />
      <Footer />
    </div>
  );
} 