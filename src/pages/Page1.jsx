import Hero from "../components/Hero";

export default function Page1() {
  return (
    <>
      <Hero />

      <section style={styles.section}>
        <h2 style={styles.heading}>Problem Statement</h2>
        <p>
          India’s elderly population will exceed 173M by 2026. 
          75% suffer from at least one chronic disease and nearly 
          70% remain digitally disconnected. Current healthcare 
          systems are reactive rather than predictive.
        </p>
      </section>

      <section style={styles.sectionDark}>
        <h2 style={styles.heading}>Solution Overview</h2>
        <p>
          CareBridge is an IoT + GenAI powered 3D Digital Twin framework 
          integrating real-time physiological data, environmental 
          intelligence, and Med-RAG contextual reasoning.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Key Features</h2>
        <ul style={styles.list}>
          <li>Passive IoT Monitoring</li>
          <li>Real-Time 3D Visualization</li>
          <li>Environmental Correlation Engine</li>
          <li>Med-RAG Brain</li>
        </ul>
      </section>

      <section style={styles.sectionDark}>
        <h2 style={styles.heading}>Impact</h2>
        <ul style={styles.list}>
          <li>95% detection sensitivity (prototype)</li>
          <li>38% projected reduction in emergency hospitalizations</li>
          <li>Rural-ready via BLE proxy sync</li>
        </ul>
      </section>
    </>
  );
}

const styles = {
  section: {
    minHeight: "100vh",
    background: "#ffffff",
    color: "#111",
    padding: "100px 80px",
  },
  sectionDark: {
    minHeight: "100vh",
    background: "#111",
    color: "#ffffff",
    padding: "100px 80px",
  },
  heading: {
    fontSize: "42px",
    marginBottom: "30px",
  },
  list: {
    fontSize: "20px",
    lineHeight: "1.8",
  },
};
