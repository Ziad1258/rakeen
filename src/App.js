import { useContext, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { RakeenContext } from "./context/ContextProvider";
import Home from "./sections/Home";
import Definition from "./sections/Definition";
import MobileNavBar from "./components/MobileNavBar";
import Values from "./sections/Values";
import ScrollToTopIcon from "./components/ScrollToTopIcon";
import Services from "./sections/Services";
import Extentions from "./sections/Extentions"
import CountriesDev from "./sections/CountriesDev";
import Sectors from "./sections/Sectors";
import Assets from "./sections/Assets";
import Footer from "./components/Footer";
export default function App() {
  const { showdorpNav, setShowdorpNav, showNav, setShowNav } =
    useContext(RakeenContext);

  const handleClick = (e) => {
    if (e.target.id !== "rakeen") {
      setShowdorpNav(false);
    } else {
      setShowdorpNav(!showdorpNav);
    }

    if (e.target.id === "toggle-icon" || e.target.closest("#toggle-icon")) {
      setShowNav(!showNav);
    } else if (e.target.id === "rakeen" && showNav) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  return (
    <div
      className={`${showNav ? "overflow-hidden max-h-screen" : ""}`}
      onClick={handleClick}
    >
      <Navbar />
      <MobileNavBar />
      <Home />
      <Definition />
      <Values />
      <Services />
      <Extentions />
      <CountriesDev />
      <Sectors />
      <Assets />
      <Footer />
      <ScrollToTopIcon />
    </div>
  );
}
