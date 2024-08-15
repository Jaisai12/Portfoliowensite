import React, { useEffect } from "react";

function Skil() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/scrollreveal";
    script.async = true;

    script.onload = () => {
      ScrollReveal().reveal(".skillh2", {
        delay: 350,
        distance: "150px",
        duration: 800,
        easing: "ease-in-out",
        origin: "left",
        reset: true,
      });
      ScrollReveal().reveal(".imgesskill", {
        delay: 100,
        distance: "50px",
        duration: 200,
        easing: "ease-in-out",
        origin: "bottom",
        opacity: 0,

        reset: true, // Allows animation to trigger again on re-entering viewport
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="Skillcontainer">
      <h2 className="skillh2">My Skills</h2>

      <div className="skillbox">
        <div className="skillimg">
          <h2>Frontend Technologies</h2>
          <div className="imgesskill">
            <img
              src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
              alt="Html5"
              height="75px"
            />
            <p>HTML 5</p>
          </div>
          <div className="imgesskill">
            <img
              src="https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000"
              alt="Html5"
              height="75px"
            />
            <p title="Cascading style sheet">CSS</p>
          </div>
          <div className="imgesskill">
            <img
              src="https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000"
              alt="Html5"
              height="75px"
            />
            <p>Tailwind CSS</p>
          </div>
          <div className="imgesskill">
            <img
              src="https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000"
              alt="Html5"
              height="75px"
            />
            <p>Java Script</p>
          </div>
          <div className="imgesskill">
            <img
              src="https://img.icons8.com/?size=100&id=123603&format=png&color=000000"
              alt="Html5"
              height="75px"
            />
            <p>React js</p>
          </div>
        </div>
        <div className="skillimg">
          <h2>Backend Technologies</h2>
          <div className="imgesskill">
            <img
              src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000"
              alt="Html5"
              height="75px"
            />
            <p>Node JS</p>
          </div>
          <div className="imgesskill">
            <img
              src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000"
              alt="Html5"
              height="75px"
            />
            <p>Python</p>
          </div>
          <h2>Cloud Services</h2>
          <div className="imgesskill">
            <img
              src="https://img.icons8.com/?size=100&id=33039&format=png&color=000000"
              alt="Html5"
              height="75px"
            />
            <p title="amazon web services">AWS</p>
          </div>
          <h2>Version Control System</h2>
          <div className="imgesskill">
            <img
              src="https://img.icons8.com/?size=100&id=52539&format=png&color=000000"
              alt="Html5"
              height="75px"
            />
            <p>Git Hub</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skil;
