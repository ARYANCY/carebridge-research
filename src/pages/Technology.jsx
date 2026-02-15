import Footer from "../components/Footer";

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

      {/* LAYER SECTIONS */}
      {layers.map((layer, index) => (
        <section
          key={index}
          style={layer.alt ? styles.sectionAlt : styles.section}
        >
          <div style={styles.container}>
            <span style={styles.layerTag}>{layer.tag}</span>
            <h2 style={styles.title}>{layer.title}</h2>
            <p style={styles.text}>{layer.description}</p>

            <div style={styles.grid}>
              {layer.items.map((item, i) => (
                <div key={i} style={styles.card}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
}

const layers = [
  {
    tag: "Layer 01 — Perception",
    title: "Edge Sensing Infrastructure",
    description:
      "ESP32-powered multi-sensor architecture capturing cardiovascular and environmental signals at clinical-grade resolution.",
    items: [
      "MAX30102 (400 Hz PPG, HR, SpO₂, HRV)",
      "DHT22 (Temperature & Humidity)",
      "MQ-135 (Air Quality VOC Detection)",
      "On-device anomaly detection (EWMA)",
      "MQTT + TLS encrypted telemetry",
    ],
  },
  {
    tag: "Layer 02 — Intelligence",
    title: "Med-RAG Cognitive Engine",
    alt: true,
    description:
      "Retrieval-Augmented Generation system grounded in clinical guidelines and patient-specific physiological baselines.",
    items: [
      "Pinecone Vector DB (1536-d embeddings)",
      "PubMed fine-tuned sentence transformers",
      "Gemini / Llama inference backend",
      "Top-K similarity retrieval (K=5)",
      "Hallucination mitigation via citation enforcement",
    ],
  },
  {
    tag: "Layer 03 — Visualization",
    title: "Zero-UI Digital Twin",
    description:
      "Real-time 3D organ mesh rendering translating physiological stress into intuitive spatial and color-coded cues.",
    items: [
      "Three.js WebGL rendering (30 FPS)",
      "Colorblind-safe palette encoding",
      "WebSocket real-time sync (<100ms)",
      "Zero text-dependent interaction",
    ],
  },
  {
    tag: "Cloud & Deployment",
    title: "Scalable Infrastructure",
    alt: true,
    description:
      "Serverless, low-latency architecture enabling nationwide deployment at minimal cost.",
    items: [
      "Google Cloud Run (Serverless compute)",
      "PostgreSQL (Patient metadata)",
      "Pinecone (Vector retrieval)",
      "End-to-end latency: 178ms",
      "₹10/patient/month cloud cost (1000 users)",
    ],
  },
];

const styles = {
  pageWrapper: {
    background: "radial-gradient(circle at 20% 10%, #0a1628 0%, #02060f 70%)",
    color: "#e6faff",
    fontFamily: "'Inter', sans-serif",
  },

  headerSection: {
    textAlign: "center",
    padding: "clamp(70px, 12vw, 140px) 6%",
  },

  mainTitle: {
    fontSize: "clamp(34px, 6vw, 70px)",
    fontWeight: "900",
    fontFamily: "'Space Grotesk', sans-serif",
    marginBottom: "20px",
    letterSpacing: "-1px",
  },

  mainSubtitle: {
    fontSize: "clamp(15px, 2.3vw, 22px)",
    color: "#9fb3c8",
    maxWidth: "750px",
    margin: "0 auto",
    lineHeight: "1.7",
  },

  section: {
    padding: "clamp(60px, 8vw, 120px) 8%",
    borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
  },

  sectionAlt: {
    padding: "clamp(60px, 8vw, 120px) 8%",
    background: "linear-gradient(180deg, #040915 0%, #02060f 100%)",
    borderBottom: "1px solid rgba(0,240,255,0.06)",
  },

  container: {
    maxWidth: "1100px",
    margin: "0 auto",
  },

  layerTag: {
    color: "#00f0ff",
    fontSize: "clamp(11px, 1.5vw, 13px)",
    fontWeight: "700",
    letterSpacing: "3px",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "14px",
  },

  title: {
    fontSize: "clamp(22px, 4vw, 46px)",
    fontWeight: "800",
    marginBottom: "22px",
    fontFamily: "'Space Grotesk', sans-serif",
  },

  text: {
    fontSize: "clamp(14px, 2.2vw, 18px)",
    lineHeight: "1.8",
    color: "#9fb3c8",
    marginBottom: "40px",
    maxWidth: "750px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "24px",
  },

  card: {
    background: "rgba(0,240,255,0.05)",
    border: "1px solid rgba(0,240,255,0.12)",
    padding: "24px",
    borderRadius: "18px",
    fontSize: "clamp(13px, 2vw, 16px)",
    color: "#c8e6ff",
    lineHeight: "1.6",
    backdropFilter: "blur(6px)",
  },
};
