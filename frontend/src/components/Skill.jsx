import React, { useState } from "react";
import SkillCard from "./SkillCard";
import Web from "../assets/web.png";
import Ai from "../assets/Ai.png";
import Problem from "../assets/problemSolving.png";
import WebdevCards from "./WebdevCards";

const Skill = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const skills = [
    {
      id: "web",
      img: Web,
      title: "Web-Devlopment",
      des: "I have strong experience in modern web development, building scalable and user-focused applications using current technologies. I enjoy transforming ideas into clean, maintainable products and aim to contribute to open-source projects that prioritize performance, accessibility, and real-world impact.",
    },
    {
      id: "ml",
      img: Ai,
      title: "Machine Learning",
      des: "I am deeply interested in Machine Learning and motivated to explore how data-driven models can solve real-world problems. I am actively building my foundations and look forward to contributing to impactful, research-oriented projects through continuous learning and experimentation.",
    },
    {
      id: "problem",
      img: Problem,
      title: "Problem solving",
      des: "I consistently practice problem solving to strengthen my algorithmic thinking and write efficient, optimized solutions. I approach challenges methodically and enjoy tackling complex problems—skills I aim to apply while contributing meaningfully to GSoC projects.",
    },
  ];
  return (
    <section className="SkillWrapper" id="skill">
      <div className="skillDiv1">
        <h3 className="skillH3">Skills i have</h3>
        <h1 className="skillH1">
          <span className="skillSpan">Tools and Technologies</span>
          <br /> I work with
        </h1>
      </div>
      <div className="skillCardDiv">
        {skills.map(
          (skill) =>
            (!activeSkill || activeSkill === skill.id) && (
              <SkillCard
                key={skill.id}
                Img={skill.img}
                title={skill.title}
                des={skill.des}
                onClick={() => setActiveSkill(skill.id)}
              />
            )
        )}
      </div>
      {activeSkill === "web" && <WebdevCards />}
      {activeSkill === "ml" && <MLCards />}
      {activeSkill === "problem" && <ProblemCards />}
    </section>
  );
};

export default Skill;
