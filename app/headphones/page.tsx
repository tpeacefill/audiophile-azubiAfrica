import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import OtherHero from '../components/OtherHero';
import Section2 from '../components/Section2';
import Section6 from '../components/Section6';
import Imageleft from '../components/Imageleft';

export default function HeadphonesPage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <OtherHero title="Headphones" />
      <Imageleft />
      <Section2/>
      <Section6/>
      <Footer />
    </div>
  );
} 