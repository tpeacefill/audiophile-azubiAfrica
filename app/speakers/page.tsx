import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import OtherHero from '../components/OtherHero';
import Section2 from '../components/Section2';
import Section6 from '../components/Section6';
import Imageleft from '../components/Imageleft';
import ImageRight from '../components/ImageRight';

export default function SpeakersPage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <OtherHero title="Speakers" />
      <Imageleft
      span='NEW PRODUCT'
      image='/imageleft/ImageLeftSpeaker.jpg'
      h1= {<>ZX9<br/>SPEAKER</>}
      p="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
      />
      <ImageRight
      image="/imageright/ImageRightSpeaker.jpg"
      h1={<>ZX7<br/>SPEAKER</>}
      p="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
      />
      <Section2/>
      <Section6/>
      <Footer />
    </div>
  );
} 