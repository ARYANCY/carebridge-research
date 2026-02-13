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
          style={styles.hamburger}
          onClick={() => setOpen(!open)}
        >
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
        </div>

        {/* Links */}
        <div
          style={{
            ...styles.linksWrapper,
            ...(open ? styles.linksOpen : {}),
          }}
        >
          <NavLink to="/" style={styles.link}>
            Home
          </NavLink>
          <NavLink to="/technology" style={styles.link}>
            Technology
          </NavLink>
          <NavLink to="/research" style={styles.link}>
            Research
          </NavLink>
          <NavLink to="/roadmap" style={styles.link}>
            Roadmap
          </NavLink>
          <NavLink to="/impact" style={styles.link}>
            Impact
          </NavLink>
        </div>
      </nav>

      <style jsx>{`
        @media (max-width: 900px) {
          nav {
            padding: 20px 24px !important;
          }
        }
      `}</style>
    </>
  );
}

const styles = {
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "22px 80px",
    background: "rgba(2, 6, 15, 0.9)",
    backdropFilter: "blur(14px)",
    borderBottom: "1px solid rgba(0, 240, 255, 0.08)",
    fontFamily: "'Inter', sans-serif",
  },

  brand: {
    fontSize: "22px",
    fontWeight: "700",
    fontFamily: "'Space Grotesk', sans-serif",
    letterSpacing: "1px",
    color: "#ffffff",
  },

  linksWrapper: {
    display: "flex",
    gap: "42px",
    alignItems: "center",
  },

  linksOpen: {
    position: "absolute",
    top: "80px",
    right: "20px",
    background: "rgba(5, 10, 20, 0.95)",
    backdropFilter: "blur(20px)",
    flexDirection: "column",
    padding: "30px",
    borderRadius: "16px",
    gap: "24px",
    border: "1px solid rgba(0,240,255,0.1)",
  },

  link: ({ isActive }) => ({
    fontSize: "14px",
    fontWeight: "600",
    letterSpacing: "1.2px",
    textTransform: "uppercase",
    color: isActive ? "#00f0ff" : "#b8c7da",
    textDecoration: "none",
    paddingBottom: "6px",
  }),

  hamburger: {
    display: "none",
    flexDirection: "column",
    gap: "6px",
    cursor: "pointer",
  },

  bar: {
    width: "24px",
    height: "2px",
    backgroundColor: "#ffffff",
  },
};

/* Mobile behavior */
if (typeof window !== "undefined") {
  const mediaQuery = window.matchMedia("(max-width: 900px)");
  if (mediaQuery.matches) {
    styles.linksWrapper = {
      display: "none",
    };
    styles.hamburger.display = "flex";
  }
}
