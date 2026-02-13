import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className="nav">
        <div className="brand">CareBridge</div>

        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </div>

        <div className={`links ${open ? "open" : ""}`}>
          <NavLink to="/" className="link" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/technology" className="link" onClick={closeMenu}>Technology</NavLink>
          <NavLink to="/research" className="link" onClick={closeMenu}>Research</NavLink>
          <NavLink to="/roadmap" className="link" onClick={closeMenu}>Roadmap</NavLink>
          <NavLink to="/impact" className="link" onClick={closeMenu}>Impact</NavLink>
        </div>

        {open && <div className="overlay" onClick={closeMenu}></div>}
      </nav>

      <style jsx>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 1000;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 22px 80px;
          background: rgba(2, 6, 15, 0.92);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(0, 240, 255, 0.08);
          font-family: "Inter", sans-serif;
        }

        .brand {
          font-size: 22px;
          font-weight: 700;
          font-family: "Space Grotesk", sans-serif;
          color: white;
          letter-spacing: 1px;
        }

        .links {
          display: flex;
          gap: 42px;
          align-items: center;
        }

        .link {
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          text-decoration: none;
          color: #b8c7da;
          transition: color 0.25s ease;
        }

        .link.active {
          color: #00f0ff;
        }

        /* HAMBURGER */
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 6px;
          width: 28px;
          height: 22px;
          cursor: pointer;
          z-index: 1100;
        }

        .hamburger span {
          height: 2px;
          width: 100%;
          background: white;
          transition: all 0.35s ease;
        }

        .hamburger.active span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }

        /* OVERLAY */
        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(4px);
          z-index: 900;
        }

        /* MOBILE */
        @media (max-width: 900px) {
          .nav {
            padding: 20px 24px;
          }

          .hamburger {
            display: flex;
          }

          .links {
            position: fixed;
            top: 0;
            right: -100%;
            height: 100vh;
            width: 260px;
            background: rgba(5, 10, 20, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding-top: 120px;
            gap: 32px;
            border-left: 1px solid rgba(0, 240, 255, 0.1);
            transition: right 0.35s ease;
            z-index: 1000;
          }

          .links.open {
            right: 0;
          }
        }
      `}</style>
    </>
  );
}
