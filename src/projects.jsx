import React, { useEffect } from "react";

function Projects() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/scrollreveal";
    script.async = true;
    script.onload = () => {
      ScrollReveal().reveal(".gittxt", {
        delay: 150,
        distance: "150px",
        duration: 200,
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
    <div className="Mainprojects">
      <h2 className="Projectsh2">Projects</h2>
      <div className="MyProjects">
        <div className="project1">
          <h2 className="hproj">Slot Machine game</h2>
          <p className="projdescript">
            Description: I developed a slot machine game that generates random
            numbers. If all three numbers match, the player wins a prize using
            python basic syntax
          </p>
        </div>
        <div className="project2">
          <h2 className="hproj">Rock Paper Scissors</h2>
          <p className="projdescript">
            Description: I developed a Rock Paper Scissors game using html ,css
            and javascript .
          </p>
        </div>
        <div className="project3">
          <h2 className="hproj">Cool Mania</h2>
          <p className="projdescript">
            Description: I developed website using wordress and its name ic
            coolmania ,its based on mocktails and cocktails , i have us ed astra
            theme and elementor page builder .
          </p>
        </div>
      </div>
      <p className="gittxt">
        Please click here to visit my Git repository{" "}
        <button>
          <a href="https://github.com/Jaisai12/" target="_blank">
            GITHUB
          </a>
        </button>
      </p>
    </div>
  );
}
export default Projects;
