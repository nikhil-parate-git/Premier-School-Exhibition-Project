import React, { useState, useRef } from "react";
import "./BestFits.css";

import img1 from "../../assets/images/fits1.png";
import img2 from "../../assets/images/fits2.png";
import img3 from "../../assets/images/fits3.png";
import img4 from "../../assets/images/fits4.png";

const CARDS_DATA = [
  {
    id: "card-1",
    title: "Pre-Schools & Early Learning Centres",
    description:
      "Nurturing foundational skills for toddlers and pre-primary children.",
    image: img1,
  },
  {
    id: "card-2",
    title: "K-12 CBSE Day Schools",
    description:
      "Reputed schools offering complete schooling from Kindergarten to Grade 12.",
    image: img2,
  },
  {
    id: "card-3",
    title: "Heritage to New-Age Schools",
    description:
      "Time-tested schools to innovative pedagogy, tech enabled, future-ready schools",
    image: img3,
  },
  {
    id: "card-4",
    title: "International Curriculum Schools",
    description:
      "Offering IB, Cambridge, Finnish and other global curricula with a global learning environment.",
    image: img4,
  },
];

export default function Bestschools() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    if (trackRef.current) {
      const card = trackRef.current.querySelector(".bf-cards__card");
      if (card) {
        const cardWidth = card.offsetWidth;
        const gap = 16;
        trackRef.current.scrollTo({
          left: (cardWidth + gap) * index,
          behavior: "smooth",
        });
      }
    }
  };

  const handleScroll = () => {
    if (trackRef.current && window.innerWidth <= 768) {
      const scrollLeft = trackRef.current.scrollLeft;
      const card = trackRef.current.querySelector(".bf-cards__card");
      if (card) {
        const cardWidth = card.offsetWidth;
        const gap = 16;
        const newIndex = Math.round(scrollLeft / (cardWidth + gap));
        if (newIndex !== activeIndex && newIndex < CARDS_DATA.length) {
          setActiveIndex(newIndex);
        }
      }
    }
  };

  return (
    <section className="bf-section" aria-labelledby="bf-section-heading">
      <div className="bf-section__header">
        <h2 id="bf-section-heading" className="bf-section__title">
          Choose the School That Fits You Best
        </h2>
      </div>

      <div
        className="bf-cards"
        ref={trackRef}
        onScroll={handleScroll}
        role="region"
        aria-label="School categories carousel"
        tabIndex="0"
      >
        <ul className="bf-cards__track">
          {CARDS_DATA.map((card) => (
            <li
              key={card.id}
              id={card.id}
              className="bf-cards__card"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0) 85%), url(${card.image})`,
              }}
            >
              <div className="bf-cards__content">
                <h3 className="bf-cards__card-title">{card.title}</h3>
                <p className="bf-cards__card-desc">{card.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="bf-pagination"
        role="tablist"
        aria-label="Slider controls"
      >
        {CARDS_DATA.map((card, idx) => (
          <button
            key={`dot-${idx}`}
            className={`bf-pagination__dot ${activeIndex === idx ? "bf-pagination__dot--active" : ""}`}
            onClick={() => handleDotClick(idx)}
            role="tab"
            aria-selected={activeIndex === idx}
            aria-controls={card.id}
            aria-label={`Go to slide ${idx + 1} of ${CARDS_DATA.length}`}
          />
        ))}
      </div>
    </section>
  );
}
