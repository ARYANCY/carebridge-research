export default function Technology() {
  return (
    <div style={styles.pageWrapper}>
      {/* HEADER */}
      <section style={styles.headerSection}>
        <h1 style={styles.mainTitle}>System Architecture</h1>
        <p style={styles.mainSubtitle}>
          A 3-Layer Ambient Intelligence Framework for Proactive Elderly Care
        </p>
      </section>

      {/* LAYER 1 */}
      <section style={styles.section}>
        <span style={styles.layerTag}>Layer 01 — Perception</span>
        <h2 style={styles.title}>Edge Sensing Infrastructure</h2>
        <p style={styles.text}>
          ESP32-powered multi-sensor architecture capturing cardiovascular
          and environmental signals at clinical-grade resolution.
        </p>

        <ul style={styles.list}>
          <li style={styles.listItem}>MAX30102 (400 Hz PPG, HR, SpO₂, HRV)</li>
          <li style={styles.listItem}>DHT22 (Temperature & Humidity)</li>
          <li style={styles.listItem}>MQ-135 (Air Quality VOC Detection)</li>
          <li style={styles.listItem}>On-device anomaly detection (EWMA)</li>
          <li style={styles.listItem}>MQTT + TLS encrypted telemetry</li>
        </ul>
      </section>

      {/* LAYER 2 */}
      <section style={styles.sectionAlt}>
        <span style={styles.layerTag}>Layer 02 — Intelligence</span>
        <h2 style={styles.title}>Med-RAG Cognitive Engine</h2>
        <p style={styles.text}>
          Retrieval-Augmented Generation system grounded in clinical
          guidelines and patient-specific physiological baselines.
        </p>

        <ul style={styles.list}>
          <li style={styles.listItem}>Pinecone Vector DB (1536-d embeddings)</li>
          <li style={styles.listItem}>PubMed fine-tuned sentence transformers</li>
          <li style={styles.listItem}>Gemini / Llama inference backend</li>
          <li style={styles.listItem}>Top-K similarity retrieval (K=5)</li>
          <li style={styles.listItem}>Hallucination mitigation via citation enforcement</li>
        </ul>
      </section>

      {/* LAYER 3 */}
      <section style={styles.section}>
        <span style={styles.layerTag}>Layer 03 — Visualization</span>
        <h2 style={styles.title}>Zero-UI Digital Twin</h2>
        <p style={styles.text}>
          Real-time 3D organ mesh rendering translating physiological stress
          into intuitive spatial and color-coded cues.
        </p>

        <ul style={styles.list}>
          <li style={styles.listItem}>Three.js WebGL rendering (30 FPS)</li>
          <li style={styles.listItem}>Colorblind-safe palette encoding</li>
          <li style={styles.listItem}>WebSocket real-time sync (&lt;100ms)</li>
          <li style={styles.listItem}>Zero text-dependent interaction</li>
        </ul>
      </section>

      {/* INFRASTRUCTURE */}
      <section style={styles.sectionAlt}>
        <span style={styles.layerTag}>Cloud & Deployment</span>
        <h2 style={styles.title}>Scalable Infrastructure</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Google Cloud Run (Serverless compute)</li>
          <li style={styles.listItem}>PostgreSQL (Patient metadata)</li>
          <li style={styles.listItem}>Pinecone (Vector retrieval)</li>
          <li style={styles.listItem}>End-to-end latency: 178ms</li>
          <li style={styles.listItem}>₹10/patient/month cloud cost (1000 users)</li>
        </ul>
      </section>
    </div>
  );
}
const styles = {
  pageWrapper: {
    background: "radial-gradient(circle at 20% 10%, #0a1628 0%, #02060f 70%)",
    color: "#e6faff",
    fontFamily: "'Inter', sans-serif",
    paddingBottom: "120px",
  },

  headerSection: {
    textAlign: "center",
    padding: "120px 10% 80px",
  },

  mainTitle: {
    fontSize: "64px",
    fontWeight: "800",
    fontFamily: "'Space Grotesk', sans-serif",
    marginBottom: "20px",
    color: "#ffffff",
  },

  mainSubtitle: {
    fontSize: "20px",
    color: "#9fb3c8",
  },

  section: {
    padding: "100px 12%",
    borderBottom: "1px solid rgba(0,240,255,0.05)",
  },

  sectionAlt: {
    padding: "100px 12%",
    background: "#040915",
    borderBottom: "1px solid rgba(0,240,255,0.05)",
  },

  layerTag: {
    color: "#00f0ff",
    fontSize: "13px",
    fontWeight: "700",
    letterSpacing: "3px",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "15px",
  },

  title: {
    fontSize: "44px",
    fontWeight: "800",
    marginBottom: "25px",
    fontFamily: "'Space Grotesk', sans-serif",
    color: "#ffffff",
  },

  text: {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#9fb3c8",
    marginBottom: "30px",
    maxWidth: "800px",
  },

  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },

  listItem: {
    fontSize: "17px",
    marginBottom: "16px",
    color: "#c8e6ff",
    fontWeight: "500",
    paddingLeft: "18px",
    position: "relative",
  },
};
