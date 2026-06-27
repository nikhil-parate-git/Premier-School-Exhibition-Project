import React, { useRef, useState, useEffect, useCallback } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import {
  FiUsers,
  FiBookOpen,
  FiPercent,
  FiGrid,
  FiMessageCircle,
  FiAward,
} from "react-icons/fi";
import "./ExhibitionSection.css";

const CARDS = [
  {
    id: 1,
    icon: FiUsers,
    title: "Interact Directly with School Heads",
    desc: "Get answers straight from the experts",
  },
  {
    id: 2,
    icon: FiBookOpen,
    title: "Compare Curriculum & Pedagogy",
    desc: "Understand the differences between CBSE, ICSE, IB, Cambridge, Finnish & more",
  },
  {
    id: 3,
    icon: FiPercent,
    title: "Get Exclusive Fee Structures & Offers",
    desc: "Access transparent information and avail offers",
  },
  {
    id: 4,
    icon: FiGrid,
    title: "Explore Schools' Offerings",
    desc: "Preview infrastructure, co-curricular, teaching methodology and culture",
  },
  {
    id: 5,
    icon: FiMessageCircle,
    title: "On-the-Spot Admissions & Counselling",
    desc: "Save time with instant applications and expert guidance",
  },
  {
    id: 6,
    icon: FiAward,
    title: "Meet Award-Winning Schools",
    desc: "Discover nationally ranked and globally recognised institutions under one roof",
  },
];

export default function ExhibitionSection() {
  const trackRef = useRef(null);
  const touchStartX = useRef(0);

  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragScrollLeft, setDragScrollLeft] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 600) setVisibleCount(1);
      else if (w < 900) setVisibleCount(2);
      else if (w < 1100) setVisibleCount(3);
      else setVisibleCount(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, CARDS.length - visibleCount);

  const goTo = useCallback(
    (idx) => setCurrent(Math.max(0, Math.min(idx, maxIndex))),
    [maxIndex],
  );

  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  useEffect(() => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector(".exb__card");
    if (!card) return;
    const cardW = card.getBoundingClientRect().width + 20;
    trackRef.current.scrollTo({ left: current * cardW, behavior: "smooth" });
  }, [current]);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.pageX - trackRef.current.offsetLeft);
    setDragScrollLeft(trackRef.current.scrollLeft);
  };
  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft = dragScrollLeft - (x - dragStartX) * 1.5;
  };
  const onMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const card = trackRef.current.querySelector(".exb__card");
    if (!card) return;
    const cardW = card.getBoundingClientRect().width + 20;
    goTo(Math.round(trackRef.current.scrollLeft / cardW));
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
  };

  return (
    <section className="exb" aria-labelledby="exb-heading">
      <a href="#after-exb" className="exb__skip">
        Skip exhibition section
      </a>
      <div className="exb__live" aria-live="polite" aria-atomic="true">
        Slide {current + 1} of {maxIndex + 1}
      </div>

      <div className="exb__inner">
        <h2 id="exb-heading" className="exb__heading">
          What Makes This Exhibition a Must&#8209;Visit
        </h2>

        <div
          className="exb__slider-wrapper"
          role="region"
          aria-label="Exhibition highlights slider"
          aria-roledescription="carousel"
          tabIndex="0"
          onKeyDown={onKeyDown}
        >
          <div
            ref={trackRef}
            className={`exb__track${isDragging ? " exb__track--dragging" : ""}`}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.id}
                  className="exb__card"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={card.title}
                >
                  <div className="exb__card-icon" aria-hidden="true">
                    <Icon size={38} strokeWidth={1.5} />
                  </div>
                  <h3 className="exb__card-title">{card.title}</h3>
                  <p className="exb__card-desc">{card.desc}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="exb__dots" role="group" aria-label="Slide indicators">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              className={`exb__dot${i === current ? " exb__dot--active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === current ? "true" : undefined}
            />
          ))}
        </div>
      </div>

      <div className="exb__divider" aria-hidden="true" />

      <div
        className="exb__controls"
        role="group"
        aria-label="Slider navigation"
      >
        <button
          className="exb__arrow exb__arrow--prev"
          onClick={prev}
          disabled={current === 0}
          aria-label="Previous slide"
        >
          <FiArrowLeft size={20} aria-hidden="true" />
        </button>
        <button
          className="exb__arrow exb__arrow--next"
          onClick={next}
          disabled={current >= maxIndex}
          aria-label="Next slide"
        >
          <FiArrowRight size={20} aria-hidden="true" />
        </button>
      </div>

      <div className="exb__arc" aria-hidden="true">
        <svg
          viewBox="0 0 1440 130"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 C360,130 1080,130 1440,0 L1440,130 L0,130 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div id="after-exb" tabIndex="-1" />
    </section>
  );
}
