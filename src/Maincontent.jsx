import React, { useEffect } from "react";
import Jaisaikumarresume from "./assets/Jaisaikumar.pdf";

function Maincontent() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/scrollreveal";
    script.async = true;

    script.onload = () => {
      ScrollReveal().reveal(".Introtxt", {
        delay: 100,
        distance: "150px",
        duration: 300,
        easing: "ease-in-out",
        origin: "left",
        reset: true,
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <main className="Maincontainer">
      <div className="Maincontainertxt">
        <p className="Introtxt">
          Hi, I'm <span className="imp1">Jaisaikumar Velupula</span> <br />
          <span className="imp2">Front-End Developer</span> passionate about
          creating <br /> responsive and interactive web applications.
        </p>
        <p className="resumedownload">
          Click here to Download CV{" "}
          <button>
            <a href={Jaisaikumarresume} download="Jaisaikumarresume">
              Resume
            </a>
          </button>
        </p>
      </div>

      <div className="Maincontainerimg">
        <img
          src="https://img.freepik.com/premium-vector/flat-design-illustration-people-work-from-home_19830-90.jpg?w=740"
          alt="work"
          height="450px"
          className="mainimgwork"
        />
      </div>
    </main>
  );
}

export default Maincontent;
