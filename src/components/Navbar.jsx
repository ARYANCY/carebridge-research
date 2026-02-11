import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.brand}>CareBridge</div>

      <div style={styles.linksWrapper}>
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
    background: "rgba(2, 6, 15, 0.85)",
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

  link: {
    position: "relative",
    fontSize: "15px",
    fontWeight: "600",
    letterSpacing: "1.2px",
    textTransform: "uppercase",
    color: "#b8c7da",
    textDecoration: "none",
    paddingBottom: "6px",
    transition: "color 0.3s ease",
  },
};
