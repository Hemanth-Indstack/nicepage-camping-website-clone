import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Tours from "./sections/Tours";
import Services from "./sections/Services";
import CampingInfo from "./sections/CampingInfo";
import FamilyCamp from "./sections/FamilyCamp";
import SportsActivities from "./sections/SportsActivities";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Features />
        <Tours />
        <Services />
        <CampingInfo />
        <FamilyCamp />
        <SportsActivities />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
