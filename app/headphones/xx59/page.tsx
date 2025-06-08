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

export default function XX59Page() {
  const feature = productFeatures.find(p => p.slug === 'xx59');
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <ProductHero
        id="xx59"
        span="NEW PRODUCT"
        image="/imageleft/ImageLeftHeadphone2.jpg"
        h1={<>XX59<br/>HEADPHONES</>}
        p="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
        price="899"
        productName="XX59"
      />
      {feature && (
        <ProductFeatures
          featureParagraph1={feature.featureParagraph1}
          featureParagraph2={feature.featureParagraph2}
          inTheBox={feature.inTheBox}
        />
      )}
      <ProductMockPhotos
        topLeft="/ProductMockup/XX59/topLeft.png"
        bottomLeft="/ProductMockup/XX59/botttomLeft.png"
        right="/ProductMockup/XX59/Right.png"
      />
      <ProductYouMayLike
        products={[
          {
            name: 'XX99 MARK II',
            image: '/imageleft/ImageLeftHeadphone.jpg',
            href: '/headphones/xx99-mark-ii',
          },
          {
            name: 'XX99 MARK I',
            image: '/imageright/ImageRightHeadphone.jpg',
            href: '/headphones/xx99-mark-i',
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