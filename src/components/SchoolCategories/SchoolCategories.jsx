import React, { useRef } from "react";
import "./SchoolCategories.css";

import school1 from "../../assets/images/harrow.png";
import school2 from "../../assets/images/swresburry.png";
import school3 from "../../assets/images/kings.png";
import school4 from "../../assets/images/woodstock.png";
import school5 from "../../assets/images/aka.png";
import school6 from "../../assets/images/Tisb.png";
import school7 from "../../assets/images/TTT.jfif";
import school8 from "../../assets/images/hopetown.png";
import school9 from "../../assets/images/college last.png";
import school10 from "../../assets/images/college last.png";

const LOGOS_DATA = [
  { src: school1, name: "Harrow School" },
  { src: school2, name: "Shrewsbury International School" },
  { src: school3, name: "King's International School" },
  { src: school4, name: "Woodstock School" },
  { src: school5, name: "AKA School" },
  { src: school6, name: "TISB" },
  { src: school7, name: "Participating school logo" },
  { src: school8, name: "Hopetown School" },
  { src: school9, name: "Participating school logo" },
  { src: school10, name: "Participating school logo" },
];

const ROW1_LOGOS = LOGOS_DATA;
const ROW2_LOGOS = LOGOS_DATA;

const SCROLL_STEP = 240;

export default function ParticipatingSchools() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  const handleMouseDown = (ref) => (e) => {
    const element = ref.current;
    if (!element) return;

    element.classList.add("pse-schools__row--grabbing");

    const startX = e.pageX - element.offsetLeft;
    const scrollLeft = element.scrollLeft;

    const handleMouseMove = (moveEvent) => {
      moveEvent.preventDefault();
      const x = moveEvent.pageX - element.offsetLeft;
      const walk = (x - startX) * 1.5;
      element.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUpOrLeave = () => {
      element.classList.remove("pse-schools__row--grabbing");
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUpOrLeave);
      document.removeEventListener("mouseleave", handleMouseUpOrLeave);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUpOrLeave);
    document.addEventListener("mouseleave", handleMouseUpOrLeave);
  };

  const handleKeyDown = (ref) => (e) => {
    const element = ref.current;
    if (!element) return;

    if (e.key === "ArrowRight") {
      e.preventDefault();
      element.scrollLeft += SCROLL_STEP;
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      element.scrollLeft -= SCROLL_STEP;
    }
  };

  return (
    <section className="pse-schools" aria-labelledby="pse-schools-heading">
      <div className="pse-schools__header">
        <h2 id="pse-schools-heading">Participating Schools</h2>
      </div>

      <p id="pse-schools-instructions" className="pse-schools__sr-only">
        Use the left and right arrow keys to scroll through the school logos.
      </p>

      <div
        className="pse-schools__row"
        ref={row1Ref}
        onMouseDown={handleMouseDown(row1Ref)}
        onKeyDown={handleKeyDown(row1Ref)}
        tabIndex="0"
        role="group"
        aria-label="Participating schools logos, row 1 of 2"
        aria-describedby="pse-schools-instructions"
      >
        <ul className="pse-schools__track">
          {ROW1_LOGOS.map((logo, idx) => (
            <li key={`row1-${idx}`} className="pse-schools__logo-card">
              <img
                src={logo.src}
                alt={logo.name}
                className="pse-schools__logo-img"
                draggable="false"
              />
            </li>
          ))}
        </ul>
      </div>

      <div
        className="pse-schools__row"
        ref={row2Ref}
        onMouseDown={handleMouseDown(row2Ref)}
        onKeyDown={handleKeyDown(row2Ref)}
        tabIndex="0"
        role="group"
        aria-label="Participating schools logos, row 2 of 2"
        aria-describedby="pse-schools-instructions"
      >
        <ul className="pse-schools__track">
          {ROW2_LOGOS.map((logo, idx) => (
            <li key={`row2-${idx}`} className="pse-schools__logo-card">
              <img
                src={logo.src}
                alt={logo.name}
                className="pse-schools__logo-img"
                draggable="false"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
