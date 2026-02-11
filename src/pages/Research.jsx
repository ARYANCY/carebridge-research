export default function Research() {
  return (
    <div style={styles.pageWrapper}>
      
      {/* HEADER */}
      <section style={styles.headerSection}>
        <h1 style={styles.mainTitle}>Research & Validation</h1>
        <p style={styles.mainSubtitle}>
          Empirical evaluation across clinical datasets, latency benchmarks,
          and environmental correlation case studies.
        </p>
      </section>

      {/* DATASETS */}
      <section style={styles.section}>
        <span style={styles.sectionTag}>Clinical Datasets</span>
        <h2 style={styles.title}>Training & Validation Sources</h2>

        <ul style={styles.list}>
          <li style={styles.listItem}>
            MIT-BIH Arrhythmia Database (48 ECG recordings, 15 classes)
          </li>
          <li style={styles.listItem}>
            MIMIC-III (58,000+ ICU admissions, longitudinal vitals)
          </li>
          <li style={styles.listItem}>
            CPCB Real-Time AQI API (804 monitoring stations, 15-min updates)
          </li>
          <li style={styles.listItem}>
            NITI Aayog Senior Care Reforms 2024 Policy Data
          </li>
        </ul>
      </section>

      {/* PERFORMANCE METRICS */}
      <section style={styles.sectionAlt}>
        <span style={styles.sectionTag}>Cardiac Event Detection</span>
        <h2 style={styles.title}>Model Performance</h2>

        <div style={styles.metricsGrid}>
          <div style={styles.metricBox}>
            <h3 style={styles.metricValue}>95.3%</h3>
            <p style={styles.metricLabel}>Sensitivity</p>
          </div>

          <div style={styles.metricBox}>
            <h3 style={styles.metricValue}>91.7%</h3>
            <p style={styles.metricLabel}>Specificity</p>
          </div>

          <div style={styles.metricBox}>
            <h3 style={styles.metricValue}>92.1%</h3>
            <p style={styles.metricLabel}>F1 Score</p>
          </div>

          <div style={styles.metricBox}>
            <h3 style={styles.metricValue}>178ms</h3>
            <p style={styles.metricLabel}>End-to-End Latency</p>
          </div>
        </div>
      </section>

      {/* RAG EVALUATION */}
      <section style={styles.section}>
        <span style={styles.sectionTag}>Med-RAG Evaluation</span>
        <h2 style={styles.title}>Expert Panel Assessment</h2>

        <ul style={styles.list}>
          <li style={styles.listItem}>
            Medical Accuracy improved from 3.3 → 4.6 / 5.0
          </li>
          <li style={styles.listItem}>
            Contextual Relevance improved by 45.2%
          </li>
          <li style={styles.listItem}>
            Hallucination rate reduced by 30.4%
          </li>
          <li style={styles.listItem}>
            Inter-rater reliability: Fleiss’ κ = 0.78
          </li>
        </ul>
      </section>

      {/* CASE STUDIES */}
      <section style={styles.sectionAlt}>
        <span style={styles.sectionTag}>Environmental-Vital Correlation</span>
        <h2 style={styles.title}>Real-World Case Studies</h2>

        <ul style={styles.list}>
          <li style={styles.listItem}>
            AQI spike (287) → SpO₂ drop detected 23 minutes before clinical threshold
          </li>
          <li style={styles.listItem}>
            Heatwave (42°C heat index) → HRV suppression flagged cardiac stress
          </li>
          <li style={styles.listItem}>
            Projected 38% reduction in preventable hospitalizations
          </li>
        </ul>
      </section>

    </div>
  );
}
const styles = {
  pageWrapper: {
    background: "radial-gradient(circle at 15% 10%, #081220 0%, #02060f 75%)",
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
    maxWidth: "900px",
    margin: "0 auto",
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

  sectionTag: {
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
    marginBottom: "30px",
    fontFamily: "'Space Grotesk', sans-serif",
    color: "#ffffff",
  },

  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },

  listItem: {
    fontSize: "18px",
    marginBottom: "18px",
    color: "#c8e6ff",
    fontWeight: "500",
    lineHeight: "1.6",
  },

  metricsGrid: {
    display: "flex",
    gap: "40px",
    flexWrap: "wrap",
    marginTop: "40px",
  },

  metricBox: {
    padding: "40px 60px",
    background: "rgba(0,240,255,0.05)",
    border: "1px solid rgba(0,240,255,0.12)",
    borderRadius: "18px",
    minWidth: "220px",
  },

  metricValue: {
    fontSize: "46px",
    fontFamily: "'Space Grotesk', sans-serif",
    color: "#00f0ff",
    marginBottom: "10px",
  },

  metricLabel: {
    fontSize: "14px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    color: "#6f859e",
  },
};
