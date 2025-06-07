import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Section6 from '../../components/Section6';
import Section2 from '@/app/components/Section2';
import ProductHero from '@/app/components/ProductHero';
import ProductFeatures from '../../components/ProductFeatures';
import { productFeatures } from '@/app/data/feature';
import ProductMockPhotos from '@/app/components/ProductMockPhotos';

export default function XX99MarkIPage() {
  const feature = productFeatures.find(p => p.slug === 'xx99-mark-i');
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
      {feature && (
        <ProductFeatures
          featureParagraph1={feature.featureParagraph1}
          featureParagraph2={feature.featureParagraph2}
          inTheBox={feature.inTheBox}
        />
      )}
      <ProductMockPhotos
        topLeft="/ProductMockup/XX99-MARK-I/topLeft.png"
        bottomLeft="/ProductMockup/XX99-MARK-I/bottomLeft.png"
        right="/ProductMockup/XX99-MARK-I/Right.png"
      />
      <Section2/>
      <Section6 />
      <Footer />
    </div>
  );
} 