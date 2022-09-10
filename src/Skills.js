import { DiHtml5, DiCss3, DiJavascript1, DiJqueryLogo,  } from "react-icons/di";
import { SiFirebase } from "react-icons/si";
import { FaSass, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";

const style = { color: "#606c38", fontSize:"4rem"}
const Skills = () => {
  return (
    
    <section className="skills" id="skills">
      <div className="wrapper">
        <h2>Skills</h2>
        <ul className="skillset">
          <li>
            <DiHtml5 style={style}/>
            <p>HTML 5</p>
          </li>
          <li>
            <DiCss3 style={style}/>
            <p>CSS 3</p>
          </li>
          <li>
            <DiJavascript1 style={style}/>
            <p>JavaScript</p>
          </li>
          <li>
            <DiJqueryLogo style={style}/>
            <p>jQuery</p>
          </li>
          <li>
            <FaSass style={style}/>
            <p>Sass</p>
          </li>
          <li>
            <SiFirebase style={style}/>
            <p>Firebase</p>
          </li>
          <li>
            <FaReact style={style}/>
            <p>React</p>
          </li>
          <li>
            <FaGitAlt style={style}/>
            <p>Git</p>
          </li>
          <li>
            <FaGithub style={style}/>
            <p>GitHub</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Skills;