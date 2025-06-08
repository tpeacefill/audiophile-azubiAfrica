import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Section6 from '../../components/Section6';
import Section2 from '@/app/components/Section2';
import ProductHero from '@/app/components/ProductHero';
import ProductFeatures from '@/app/components/ProductFeatures';
import { productFeatures } from '@/app/data/feature';
import ProductMockPhotos from '@/app/components/ProductMockPhotos';
import ProductYouMayLike from '@/app/components/ProductYouMayLike';

export default function XX99MarkIIPage() {
  const features = productFeatures.find(f => f.slug === 'xx99-mark-ii');
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <ProductHero
        id="xx99-mark-ii"
        span="NEW PRODUCT"
        image="/imageleft/ImageLeftHeadphone.jpg"
        h1={<>XX99 MARK II<br/>HEADPHONES</>}
        p="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        price='2,999'
        productName="XX99 MARK II"
      />
      {features && (
        <ProductFeatures
          featureParagraph1={features.featureParagraph1}
          featureParagraph2={features.featureParagraph2}
          inTheBox={features.inTheBox}
        />
      )}
      <ProductMockPhotos
        topLeft="/ProductMockup/XX99-MARK-II/topLeft.png"
        bottomLeft="/ProductMockup/XX99-MARK-II/bottomLeft.png"
        right="/ProductMockup/XX99-MARK-II/Right.png"
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