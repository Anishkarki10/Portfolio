import meter1 from "../assets/img/meter1.png";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.png";
import meter4 from "../assets/img/meter4.png";
import meter5 from "../assets/img/images (1).png";
import meter6 from "../assets/img/meter5.png";
import meter7 from "../assets/img/meter6.png";
import meter8 from "../assets/img/meter7.png";
import meter9 from "../assets/img/meter8.png";


import "../App.css"; 

const techStack = [
  { icon: meter1, name: "UI/UX Design" },
  { icon: meter5, name: "HTML" },
  { icon: meter3, name: "CSS" },
  { icon: meter6, name: "Bootstrap" },
  { icon: meter7, name: "Tailwindcss" },
  { icon: meter8, name: "JavaScript" },
  { icon: meter2, name: "ReactJS" },
  { icon: meter9, name: "C" },
  { icon: meter4, name: "C++" },
];

export const Skills = () => {
  return (
    
    <section 
      className="skills-section"
      id="skills"
      style={{ position: "relative", zIndex: 1  }}
    >
      <div className="skills-container">
        <h2 className="skills-title">Tech Stack</h2>
        <p className="skills-subtitle">
        Take a look at my skills <br /> I specialize in front-end development using HTML, CSS, JavaScript, React.js, Bootstrap, and Tailwind CSS. <br /> I’m also skilled in UI/UX design with Figma and have a strong foundation in C & C++.
        </p>

        <div className="skills-grid">
          {techStack.map((tech, index) => (
            <div key={index} className="skills-card">
              <img src={tech.icon} alt={tech.name} />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
};