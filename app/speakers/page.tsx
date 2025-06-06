import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import OtherHero from '../components/OtherHero';
import Section2 from '../components/Section2';
import Section6 from '../components/Section6';

export default function SpeakersPage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <OtherHero title="Speakers" />
      <Section2/>
      <Section6/>
      <Footer />
    </div>
  );
} 