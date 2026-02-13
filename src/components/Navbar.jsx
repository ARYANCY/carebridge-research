import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav style={styles.nav}>
        <div style={styles.brand}>CareBridge</div>

        {/* Hamburger */}
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Links */}
        <div className={`links ${open ? "open" : ""}`}>
          <NavLink to="/" style={styles.link}>Home</NavLink>
          <NavLink to="/technology" style={styles.link}>Technology</NavLink>
          <NavLink to="/research" style={styles.link}>Research</NavLink>
          <NavLink to="/roadmap" style={styles.link}>Roadmap</NavLink>
          <NavLink to="/impact" style={styles.link}>Impact</NavLink>
        </div>
      </nav>

      <style jsx>{`
        .links {
          display: flex;
          gap: 42px;
          align-items: center;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 6px;
          width: 28px;
          height: 22px;
          cursor: pointer;
        }

        .hamburger span {
          height: 2px;
          width: 100%;
          background: white;
          transition: 0.3s ease;
        }

        /* ANIMATION */
        .hamburger.active span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }

        /* MOBILE */
        @media (max-width: 900px) {
          .hamburger {
            display: flex;
          }

          .links {
            position: absolute;
            top: 80px;
            right: 20px;
            background: rgba(5, 10, 20, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 30px;
            border-radius: 16px;
            gap: 24px;
            border: 1px solid rgba(0, 240, 255, 0.1);
            display: none;
          }

          .links.open {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
