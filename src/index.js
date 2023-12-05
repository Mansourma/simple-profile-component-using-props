import React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar name="avatar" avatar="makeover4.png" />
      <div className="data">
        <Intro
          IntroName="Mohamed MANSOUR"
          description="I am Mohamed Mansour, currently undergoing training as a full-stack developer, with a focus on mastering React.js."
        />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img src={props.avatar} alt={props.name} className="avatar" />;
}

function Intro(props) {
  return (
    <div>
      <h1>{props.IntroName}</h1>
      <p>{props.description}</p>
    </div>
  );
}

function SkillList() {
  const skills = [
    { name: "Ract Js", level: "Beginner", color: "#08DDFF" },
    { name: "HTML", level: "Expert", color: "#ffcc00" },
    { name: "CSS", level: "Advanced", color: "#0099ff" },
    { name: "JavaScript", level: "Intermediate", color: "#ff3300" },
    { name: "PHP", level: "Advanced", color: "#7377AD" },
    { name: "MongoDB", level: "Intermediate", color: "#55AD47" },
    { name: "MySql", level: "Advanced", color: "#08668E" },
    { name: "Bootstrap", level: "Intermediate", color: "#7B09F8" },
  ];
  return (
    <div className="skill-list">
      {skills.map((skill, index) => (
        <Skill
          key={index}
          name={skill.name}
          level={skill.level}
          color={skill.color}
        />
      ))}
    </div>
  );
}

function Skill(props) {
  const skillStyle = {
    backgroundColor: props.color,
    padding: "10px",
    margin: "5px",
    borderRadius: "5px",
  };

  return (
    <div className="skill" style={skillStyle}>
      <h5>
        {props.name} {props.level}
      </h5>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement,
);
