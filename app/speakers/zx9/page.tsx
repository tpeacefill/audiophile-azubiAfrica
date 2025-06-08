import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Section6 from '../../components/Section6';
import Section2 from '@/app/components/Section2';
import ProductHero from '@/app/components/ProductHero';
import ProductFeatures from '../../components/ProductFeatures';
import { productFeatures } from '@/app/data/feature';
import ProductMockPhotos from '@/app/components/ProductMockPhotos';
import ProductYouMayLike from '@/app/components/ProductYouMayLike';

export default function ZX9Page() {
  const feature = productFeatures.find(p => p.slug === 'zx9');
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <ProductHero
        id="zx9"
        span="NEW PRODUCT"
        image="/imageleft/ImageLeftSpeaker.jpg"
        h1={<>ZX9<br/>SPEAKER</>}
        p="Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        price="4,500"
        productName="ZX9"
      />
      {feature && (
        <ProductFeatures
          featureParagraph1={feature.featureParagraph1}
          featureParagraph2={feature.featureParagraph2}
          inTheBox={feature.inTheBox}
        />
      )}
      <ProductMockPhotos
        topLeft="/ProductMockup/ZX9/topLeft.png"
        bottomLeft="/ProductMockup/ZX9/bottomLeft.png"
        right="/ProductMockup/ZX9/Right.png"
      />
      <ProductYouMayLike
        products={[
          {
            name: 'ZX7 SPEAKER',
            image: '/imageright/ImageRightSpeaker.jpg',
            href: '/speakers/zx7',
          },
          {
            name: 'XX99 MARK I',
            image: '/imageright/ImageRightHeadphone.jpg',
            href: '/headphones/xx99-mark-i',
          },
          {
            name: 'XX59',
            image: '/imageleft/ImageLeftHeadphone2.jpg',
            href: '/headphones/xx59',
          },
        ]}
      />
      <Section2/>
      <Section6 />
      <Footer />
    </div>
  );
} 