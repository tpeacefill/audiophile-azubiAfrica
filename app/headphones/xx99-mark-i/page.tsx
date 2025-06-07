import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Section6 from '../../components/Section6';
import Section2 from '@/app/components/Section2';
import ProductHero from '@/app/components/ProductHero';

export default function XX99MarkIPage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <ProductHero
        span="NEW PRODUCT"
        image="/imageright/ImageRightHeadphone.jpg"
        h1={<>XX99 MARK I<br/>HEADPHONES</>}
        p="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
        price="1,750"
      />
      <Section2/>
      <Section6 />
      <Footer />
    </div>
  );
} 