import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import OtherHero from '../components/OtherHero';
import Section2 from '../components/Section2';
import Section6 from '../components/Section6';
import Imageleft from '../components/Imageleft';
import ImageRight from '../components/ImageRight';

export default function HeadphonesPage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <OtherHero title="Headphones" />
      <Imageleft
        span="NEW PRODUCT"
        image="/imageleft/ImageLeftHeadphone.jpg"
        h1={<>XX99 MARK II<br/>HEADPHONES</>}
        p="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
      />
      <ImageRight
      image="/imageright/ImageRightHeadphone.jpg"
      h1={<>XX99 Mark I<br/>Headphones</>}
      p="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
      />
      <Imageleft
      image="/imageleft/ImageLeftHeadphone2.jpg"
      h1={<>XX59<br/>Headphones</>}
      p="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
      />
      <Section2/>
      <Section6/>
      <Footer />
    </div>
  );
} 