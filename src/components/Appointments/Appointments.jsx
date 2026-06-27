// src/components/Appointments/Appointments.jsx
import React from "react";
import "./Appointments.css";

import appointmentBg from "../../assets/images/appointment.png";

export default function Appointments() {
  return (
    <section
      className="pse-appointments"
      style={{ backgroundImage: `url(${appointmentBg})` }}
      aria-labelledby="pse-appointments-heading"
    >
      <div className="pse-appointments__overlay">
        <div className="pse-appointments__container">
          <div className="pse-appointments__content">
            <span className="pse-appointments__sub">
              Exciting Opportunities for Parents!
            </span>
            <h2
              id="pse-appointments-heading"
              className="pse-appointments__title"
            >
              Pre-schedule Your School Appointments
            </h2>
            <p className="pse-appointments__meta">To Avoid Rush</p>

            <button className="pse-appointments__btn">
              <span className="pse-appointments__btn-icon">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </span>
              <span className="pse-appointments__btn-text">
                PRE-SCHEDULE NOW
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
