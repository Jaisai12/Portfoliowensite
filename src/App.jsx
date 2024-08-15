import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Skil from "./Skil.jsx";
import Projects from "./projects.jsx";
import Maincontent from "./Maincontent.jsx";
import Education from "./Education.jsx";
import Contact from "./contact.jsx";
import "./index.css";

/* import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; */

function App() {
  return (
    <>
      <Header />

      <Maincontent />
      <section id="Skills">
        <Skil />
      </section>
      <section className="" id="Education">
        <Education className="" />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <section id="Contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default App;
