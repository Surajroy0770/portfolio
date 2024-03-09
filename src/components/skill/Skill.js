import './skill.css'
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

function Skill() {

  return (
    <section id='skill'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container container_skill">
        <div className="frontend">
          <h3>Frontend Development</h3>
          <div className="skill_content">
            <article className="skill_details">
              <FaHtml5/><h4>HTML</h4>
            </article>
            <article className="skill_details">
              <IoLogoCss3/><h4>CSS</h4>
            </article>
            <article className="skill_details">
              <IoLogoJavascript/><h4>JAVASCRIPT</h4>
            </article>
            <article className="skill_details">
              <FaReact/><h4>REACT</h4>
            </article>
            <article className="skill_details">
              <FaBootstrap/><h4>BOOTSTRAP</h4>
            </article>
          </div>
        </div>
        <div className="backend">
          <h3>Backend Development</h3>
          <div className="skill_content">
            <article className="skill_details">
              <SiMysql/><h4>MYSQL</h4>
            </article>
            <article className="skill_details">
              <FaPython/><h4>PYTHON</h4>
            </article>
            <article className="skill_details">
              <SiMongodb/><h4>MONGODB</h4>
            </article>
            <article className="skill_details">
              <BsFiletypeSql/><h4>SQL</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill