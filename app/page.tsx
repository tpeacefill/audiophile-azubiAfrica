import HeroSection from './components/HeroSection';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className=" flex flex-col min-h-screen w-full">
      <Navbar/>
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  );
}