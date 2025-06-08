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

export default function YX1WirelessPage() {
  const feature = productFeatures.find(p => p.slug === 'yx1-wireless');
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <ProductHero
        id="yx1-wireless"
        span="NEW PRODUCT"
        image="/imageleft/ImageLeftEarphone.jpg"
        h1={<>YX1 WIRELESS<br/>EARPHONES</>}
        p="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
        price="599"
        productName="YX1 WIRELESS"
      />
      {feature && (
        <ProductFeatures
          featureParagraph1={feature.featureParagraph1}
          featureParagraph2={feature.featureParagraph2}
          inTheBox={feature.inTheBox}
        />
      )}
      <ProductMockPhotos
        topLeft="/ProductMockup/YX1-WIRELESS/topLeft.png"
        bottomLeft="/ProductMockup/YX1-WIRELESS/bottomLeft.png"
        right="/ProductMockup/YX1-WIRELESS/Right.png"
      />
      <ProductYouMayLike
        products={[
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
          {
            name: 'ZX9 SPEAKER',
            image: '/imageleft/ImageLeftSpeaker.jpg',
            href: '/speakers/zx9',
          },
        ]}
      />
      <Section2/>
      <Section6 />
      <Footer />
    </div>
  );
} 