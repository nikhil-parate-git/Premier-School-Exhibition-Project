import React from "react";
import {
  FiMapPin,
  FiPhone,
  FiFacebook,
  FiInstagram,
  FiYoutube,
} from "react-icons/fi";
import "./Footer.css";
import logo from "../../assets/icons/logo.webp";

export default function Footer() {
  return (
    <footer className="pse-footer" role="contentinfo">
      <div className="pse-footer__container">
        {/* Logo */}
        <div className="pse-footer__logo-section">
          <img
            src={logo}
            alt="Premier Schools Exhibition"
            className="pse-footer__logo"
            width="110"
            height="auto"
            loading="lazy"
          />
        </div>

        <section
          className="pse-footer__column"
          aria-labelledby="footer-corporate"
        >
          <div className="pse-footer__icon-box" aria-hidden="true">
            <FiMapPin size={18} strokeWidth={2} />
          </div>
          <div className="pse-footer__text-content">
            <h3 id="footer-corporate" className="pse-footer__col-heading">
              Corporate Office:
            </h3>
            <address className="pse-footer__address">
              <p>Suite B-5, Ballygunge Park Tower,</p>
              <p>67B Ballygunge Circular Road,</p>
              <p>Kolkata&nbsp;&ndash;&nbsp;700019</p>
            </address>
          </div>
        </section>

        <section
          className="pse-footer__column"
          aria-labelledby="footer-ahmedabad"
        >
          <div className="pse-footer__icon-box" aria-hidden="true">
            <FiMapPin size={18} strokeWidth={2} />
          </div>
          <div className="pse-footer__text-content">
            <h3 id="footer-ahmedabad" className="pse-footer__col-heading">
              Ahmedabad Office:
            </h3>
            <address className="pse-footer__address">
              <p>12/AA, Swastik Chambers, Near CU</p>
              <p>Shah College, Ashram Road,</p>
              <p>Ahmedabad&nbsp;&ndash;&nbsp;380009</p>
            </address>
          </div>
        </section>

        <section
          className="pse-footer__column"
          aria-labelledby="footer-contact"
        >
          <div className="pse-footer__icon-box" aria-hidden="true">
            <FiPhone
              size={18}
              strokeWidth={2}
              className="pse-footer__phone-icon"
            />
          </div>
          <div className="pse-footer__text-content">
            <h3 id="footer-contact" className="pse-footer__col-heading">
              Call us on
            </h3>
            <p className="pse-footer__phone">
              <a href="tel:9674805912" className="pse-footer__link">
                9674805912
              </a>
            </p>
            <p className="pse-footer__phone">
              <a href="tel:9674585012" className="pse-footer__link">
                9674585012
              </a>
            </p>
          </div>
        </section>

        <nav
          className="pse-footer__social-column"
          aria-label="Social media links"
        >
          <h3 className="pse-footer__col-heading">Follow us on</h3>
          <div className="pse-footer__socials-row">
            <a
              className="pse-footer__social-icon"
              aria-label="Visit our Instagram page (opens in new tab)"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram size={18} strokeWidth={2} aria-hidden="true" />
            </a>
            <a
              className="pse-footer__social-icon"
              aria-label="Visit our Facebook page (opens in new tab)"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiFacebook size={18} strokeWidth={2} aria-hidden="true" />
            </a>
            <a
              className="pse-footer__social-icon"
              aria-label="Visit our YouTube channel (opens in new tab)"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiYoutube size={18} strokeWidth={2} aria-hidden="true" />
            </a>
          </div>
        </nav>
      </div>

      <div className="pse-footer__copyright-bar">
        <p>
          <span aria-label="Copyright">&copy;</span> 2025 &nbsp;|&nbsp; All
          rights reserved. <span>Premier Schools Exhibition</span>
        </p>
      </div>
    </footer>
  );
}
