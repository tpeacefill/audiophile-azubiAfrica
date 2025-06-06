import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import OtherHero from '../components/OtherHero';
import Section2 from '../components/Section2';
import Section6 from '../components/Section6';
import Imageleft from '../components/Imageleft';

export default function EarphonesPage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <OtherHero title="Earphones" />
      <Imageleft
      span='NEW PRODUCT'
      image="/imageleft/ImageleftEarphone.jpg"
      h1={<>YX1 WIRELESS<br/>EARPHONES</>}
      p="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
      />
      <Section2 />
      <Section6 />
      <Footer />
    </div>
  );
} 