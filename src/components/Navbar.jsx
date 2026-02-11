import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
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

      <NavLink to="/about" style={styles.link}>
        About
      </NavLink>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 60px",
    background: "#000",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "600",
    letterSpacing: "0.5px",
  },
};
