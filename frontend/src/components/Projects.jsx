import React, { useState } from "react";
import ProjectsCard from "./ProjectsCard";
import P1 from "../assets/CodeBox.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Projects = () => {
  const cards = Array(5).fill({
    Img: P1,
    title: "Code-Box",
    des: "Code-Box is a modular compiler written in C++ that implements core compiler phases including lexing, parsing, semantic analysis, intermediate representation, optimization, and code generation. The project is built to demonstrate strong systems-level understanding and compiler design principles."
  });

  const visibleCards = 3;
  const cardWidth = 320;
  const gap = 20;
  const step = cardWidth + gap;

  const [index, setIndex] = useState(1);
  const [activeIndex, setActiveIndex] = useState(2);

  const maxIndex = cards.length - visibleCards;

  const next = () => {
    setIndex((prev) => {
      const newIndex = Math.min(prev + 1, maxIndex+1);
      setActiveIndex(newIndex + 1);
      return newIndex;
    });
  };

  const prev = () => {
    setIndex((prev) => {
      const newIndex = Math.max(prev - 1, -1);
      setActiveIndex(newIndex + 1);
      return newIndex;
    });
  };

  const handleCardClick = (i) => {
    const newIndex = Math.min(
      Math.max(i - 1, 0),
      maxIndex
    );
    setIndex(newIndex);
    setActiveIndex(i);
  };

  return (
    <section
      className="pWrapper"
      id="projects"
    >
      <div className="flex flex-col pt-10">
        <p className="text-xl text-[#27083F]">Ideas & Projects</p>
        <p className="text-5xl">
          <span className="text-4xl text-[#5419D7]">Some things</span>
          <br />I’ve worked on
        </p>
      </div>

      <div className="overflow-hidden perspective-[1200px]">
        <div
          className="flex gap-5 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * step}px)`
          }}
        >
          {cards.map((item, i) => {
            const isActive = i === activeIndex;

            return (
              <div
                key={i}
                onClick={() => handleCardClick(i)}
                className={`
                  cursor-pointer shrink-0 transition-all duration-500 ease-in-out
                  ${isActive
                    ? "scale-100 opacity-100 z-30"
                    : "scale-90 opacity-50 blur-[1px] z-10"}
                `}
                style={{
                  transform: isActive
                    ? "translateZ(0px)"
                    : "translateZ(-120px)"
                }}
              >
                <ProjectsCard
                  Img={item.Img}
                  title={item.title}
                  des={item.des}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="pBtnDiv">
        <button
          onClick={prev}
          disabled={index === -1}
          className="pButton"
        >
          <FaAngleLeft className="pButtonIcon" />
        </button>

        <button
          onClick={next}
          disabled={index === maxIndex+1}
          className="pButton"
        >
          <FaAngleRight className="pButtonIcon" />
        </button>
      </div>
    </section>
  );
};

export default Projects;
