import React from "react";
import "./Stats.css";
import laurelleft from "../../assets/icons/leftlaurel.png";
import laurelright from "../../assets/icons/rightlaurel.png";

const STATS_DATA = [
  {
    content: (
      <>
        <span className="pse-stats__text">Trusted by</span>
        <span className="pse-stats__text pse-stats__text--bold">
          1 Million+
        </span>
        <span className="pse-stats__text">Parents</span>
      </>
    ),
  },
  {
    content: (
      <>
        <span className="pse-stats__text pse-stats__text--bold">22+</span>
        <span className="pse-stats__text pse-stats__text--bold">Years</span>
        <span className="pse-stats__text">of Legacy</span>
      </>
    ),
  },
  {
    content: (
      <>
        <span className="pse-stats__text pse-stats__text--bold">500+</span>
        <span className="pse-stats__text">Participating</span>
        <span className="pse-stats__text">Schools</span>
      </>
    ),
  },
  {
    content: (
      <>
        <span className="pse-stats__text pse-stats__text--bold">17 Cities</span>
        <span className="pse-stats__text">Across the</span>
        <span className="pse-stats__text">Globe</span>
      </>
    ),
  },
];

export default function Stats() {
  return (
    <section className="pse-stats" aria-labelledby="pse-stats-heading">
      <h2 id="pse-stats-heading" className="pse-stats__sr-only">
        Key statistics and achievements
      </h2>
      <ul className="pse-stats__grid">
        {STATS_DATA.map((item, idx) => (
          <li key={idx} className="pse-stats__item">
            <div className="pse-stats__wreath-wrapper">
              <img
                src={laurelleft}
                className="pse-stats__laurel pse-stats__laurel--left"
                alt=""
                aria-hidden="true"
              />
              <p className="pse-stats__content">{item.content}</p>
              <img
                src={laurelright}
                className="pse-stats__laurel pse-stats__laurel--right"
                alt=""
                aria-hidden="true"
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
