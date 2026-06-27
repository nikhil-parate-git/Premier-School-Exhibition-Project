import React from "react";
import SkipLink from "./components/SkipLink/SkipLink";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import Bestschools from "./components/BestSchools/BestSchools";
import ParticipatingSchools from "./components/SchoolCategories/SchoolCategories";
import Appointments from "./components/Appointments/Appointments";
import ExhibitionSection from "./components/ExhibitionSection/ExhibitionSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <SkipLink targetId="main-content" />

      <Header />

      <main id="main-content">
        <Hero />
        <Stats />
        <ParticipatingSchools />
        <Bestschools />
        <Appointments />
        <ExhibitionSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
