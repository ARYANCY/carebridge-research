import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <NavLink to="/" style={styles.link}>
        Page1
      </NavLink>

      <NavLink to="/page2" style={styles.link}>
        Page2
      </NavLink>

      <NavLink to="/page3" style={styles.link}>
        Page3
      </NavLink>

      <NavLink to="/page4" style={styles.link}>
        Page4
      </NavLink>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "30px",
    padding: "20px 40px",
    background: "#000",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "600",
  },
};
