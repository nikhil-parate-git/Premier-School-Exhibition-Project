import React, { useState, useRef } from "react";
import "./Hero.css";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.png";
import img7 from "../../assets/images/img7.png";
import img8 from "../../assets/images/img8.png";
import img9 from "../../assets/images/img9.png";
import img10 from "../../assets/images/img10.png";
import img11 from "../../assets/images/img11.png";
import img12 from "../../assets/images/img12.png";

const col1_items = [img10, img2, img12, img3];
const col2_items = [img1, img8, img4, img11];
const col3_items = [img7, img9, img6, img5];

export default function Hero() {
  const [isPaused, setIsPaused] = useState(false);
  const [isSubmitPressed, setIsSubmitPressed] = useState(false);
  const [dragX, setDragX] = useState(0);
  const touchStartX = useRef(null);

  const togglePause = () => setIsPaused((prev) => !prev);

  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.touches[0].clientX - touchStartX.current;
    const clamped = Math.max(-40, Math.min(40, delta * 0.3));
    setDragX(clamped);
  };

  const handleTouchEnd = () => {
    touchStartX.current = null;
    setDragX(0);
    setIsPaused(false);
  };

  return (
    <section className="hero" aria-label="Hero Section">
      <div className="hero__container">
        <div className="hero__left">
          <h1 className="hero__title">
            <span className="hero__title-line1">Discover Gurugram's</span>
            <span className="hero__title-line2">Top 30+ Schools</span>
          </h1>
          <p className="hero__subtitle">ALL IN ONE PLACE</p>

          <div
            className="hero__event-card"
            role="group"
            aria-label="Event Schedule and Venue"
          >
            <div className="hero__event-info">
              <p className="hero__event-heading">Apparel House,</p>
              <span className="hero__event-subheading">Sec 44, Gurugram</span>
            </div>
            <div className="hero__divider" aria-hidden="true"></div>
            <div className="hero__event-info">
              <p className="hero__event-heading">2-3 August 2025</p>
              <span className="hero__event-subheading">
                Sat-Sun | 10AM - 6PM
              </span>
            </div>
          </div>
        </div>

        <div
          className={`hero__gallery${isPaused ? " hero__gallery--paused" : ""}`}
          aria-label="Scrolling gallery"
          role="region"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
        >
          <span className="hero__sr-only">
            Decorative auto-scrolling photo gallery showing students and
            activities at participating schools.
          </span>

          <button
            type="button"
            className="hero__gallery-toggle"
            onClick={togglePause}
            aria-pressed={isPaused}
            aria-label={
              isPaused ? "Play gallery animation" : "Pause gallery animation"
            }
          >
            <span aria-hidden="true">{isPaused ? "▶" : "❚❚"}</span>
          </button>

          <div
            className="hero__gallery-track-x"
            style={dragX ? { transform: `translateX(${dragX}px)` } : undefined}
            aria-hidden="true"
          >
            <div className="hero__column hero__column--down hero__column--slow">
              <div className="hero__track">
                {[...col1_items, ...col1_items].map((img, i) => (
                  <div
                    className={`hero__pill ${i % 2 === 0 ? "hero__pill--large" : "hero__pill--small"}`}
                    key={`col1-${i}`}
                  >
                    <img src={img} alt="" />
                  </div>
                ))}
              </div>
            </div>

            <div className="hero__column hero__column--up hero__column--fast">
              <div className="hero__track">
                {[...col2_items, ...col2_items].map((img, i) => (
                  <div
                    className={`hero__pill ${i % 2 === 0 ? "hero__pill--large" : "hero__pill--small"}`}
                    key={`col2-${i}`}
                  >
                    <img src={img} alt="" />
                  </div>
                ))}
              </div>
            </div>

            <div className="hero__column hero__column--down hero__column--medium">
              <div className="hero__track">
                {[...col3_items, ...col3_items].map((img, i) => (
                  <div
                    className={`hero__pill ${i % 2 === 0 ? "hero__pill--large" : "hero__pill--small"}`}
                    key={`col3-${i}`}
                  >
                    <img src={img} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="hero__form-box"
          role="region"
          aria-labelledby="enquire-now-heading"
        >
          <h2 id="enquire-now-heading" className="hero__form-title">
            Enquire Now
          </h2>
          <form className="hero__form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="parent-name" className="hero__sr-only">
              Parent's Name
            </label>
            <input
              id="parent-name"
              name="parentName"
              className="hero__form-input"
              placeholder="Parent's Name"
              autoComplete="name"
              aria-required="true"
            />

            <label htmlFor="phone-number" className="hero__sr-only">
              Phone number
            </label>
            <input
              id="phone-number"
              name="phoneNumber"
              type="tel"
              className="hero__form-input"
              placeholder="Phone number"
              autoComplete="tel"
              aria-required="true"
            />

            <label htmlFor="grade" className="hero__sr-only">
              Which grade are you looking for?
            </label>
            <textarea
              id="grade"
              name="grade"
              rows="4"
              className="hero__form-textarea"
              placeholder="Which grade are you looking for?"
              aria-required="true"
            ></textarea>

            <button
              type="submit"
              className={`hero__form-button${isSubmitPressed ? " hero__form-button--filled" : ""}`}
              aria-label="Submit Enquiry Form"
              aria-pressed={isSubmitPressed}
              onClick={() => setIsSubmitPressed((prev) => !prev)}
            >
              <span className="hero__form-button-arrow" aria-hidden="true">
                {isSubmitPressed ? "→" : "↗"}
              </span>
              <span className="hero__form-button-text">SUBMIT</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
