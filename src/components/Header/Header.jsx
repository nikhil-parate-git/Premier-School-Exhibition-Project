import { useEffect, useRef, useState } from "react";
import "./Header.css";
import logo from "../../assets/icons/logo.webp";

const SCROLL_END = 180;
const LOGO_SCALE_END = 82 / 155;

function Header() {
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const rafId = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 480px)");
    const onMq = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    mq.addEventListener("change", onMq);

    const updateFromScroll = () => {
      const y = window.scrollY;
      const p = Math.min(Math.max(y / SCROLL_END, 0), 1);
      setProgress(p);
      rafId.current = null;
    };

    const handleScroll = () => {
      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(updateFromScroll);
      }
    };

    updateFromScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mq.removeEventListener("change", onMq);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  const slidingHeaderY = `${-progress * 100}%`;

  const logoScaleEnd = isMobile ? 55 / 100 : LOGO_SCALE_END;
  const logoScale = 1 - (1 - logoScaleEnd) * progress;

  const startH = isMobile ? 64 : 84;
  const endH = isMobile ? 52 : 60;
  const headerHeight = startH - (startH - endH) * progress;

  const lightButton = progress > 0.4;

  const isGone = progress >= 1;

  return (
    <>
      <a className="header__skip" href="#main-content">
        Skip to main content
      </a>

      <header
        className="header header--purple"
        aria-hidden="true"
        tabIndex={-1}
      >
        <div className="header__container--purple">
          <span className="header__logo--purple">
            <img
              src={logo}
              alt=""
              aria-hidden="true"
              className="header__logo-img--purple"
            />
          </span>

          <span className="header__btn--purple" aria-hidden="true">
            <span className="header__btn-text--purple">Register Now</span>
            <span className="header__btn-arrow--purple">→</span>
          </span>
        </div>
      </header>

      <header
        className="header header--white"
        role="banner"
        style={{
          transform: `translateY(${slidingHeaderY})`,

          visibility: isGone ? "hidden" : "visible",
          pointerEvents: isGone ? "none" : "auto",
        }}
      >
        <div
          className="header__container--white"
          style={{ height: `${headerHeight}px` }}
        >
          <a
            href="/"
            className="header__logo--white"
            aria-label="Premier Schools Exhibition – Home"
            tabIndex={isGone ? -1 : 0}
          >
            <span
              className="header__logo-scale--white"
              style={{ transform: `scale(${logoScale})` }}
            >
              <img src={logo} alt="Premier Schools Exhibition Logo" />
            </span>
          </a>

          <a
            className="header__btn--white"
            aria-label="Register Now"
            tabIndex={isGone ? -1 : 0}
            style={lightButton ? { borderColor: "#ffffff" } : undefined}
          >
            <span
              className="header__btn-icon--white"
              aria-hidden="true"
              style={
                lightButton
                  ? { background: "#ffffff", color: "#231055" }
                  : undefined
              }
            >
              ↗
            </span>
            <span
              className="header__btn-text--white"
              style={lightButton ? { color: "#ffffff" } : undefined}
            >
              REGISTER NOW
            </span>
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
