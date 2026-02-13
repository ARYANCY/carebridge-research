import Footer from "../components/Footer";

export default function Roadmap() {
  const phases = [
    {
      tag: "Phase 1 — 2026",
      title: "Prospective Clinical Validation",
      progress: 25,
      items: [
        "300 elderly patients (≥2 chronic conditions)",
        "6-month randomized controlled trial (RCT)",
        "Primary endpoint: hospitalization reduction",
        "CDSCO Class IIa regulatory submission",
        "Digital Personal Data Protection Act compliance",
      ],
    },
    {
      tag: "Phase 2 — 2026–2027",
      title: "ABDM National Integration",
      progress: 50,
      items: [
        "HL7 FHIR R4 interoperability",
        "Observation / Condition / MedicationRequest sync",
        "15-min bidirectional exchange",
        "Consent-managed architecture",
        "PHR integration under Ayushman Bharat Digital Mission",
      ],
    },
    {
      tag: "Phase 3 — 2027",
      title: "Rural BLE Proxy-Sync Scaling",
      progress: 70,
      items: [
        "Bluetooth Mesh (BLE 5.0+) networks",
        "Community gateway tablet (72h battery)",
        "CBOR compressed data model",
        "Pilot expansion: 800+ patients",
        "₹800 amortized hardware cost per patient",
      ],
    },
    {
      tag: "Phase 4 — 2028+",
      title: "Advanced Predictive Intelligence",
      progress: 90,
      items: [
        "LSTM-based 7-day cardiac forecasting",
        "Federated learning secure updates",
        "Fall detection (sensor fusion)",
        "Sleep staging via HRV modeling",
        "Voice biomarkers for early cognitive screening",
      ],
    },
  ];

  return (
    <div style={styles.pageWrapper}>

      {/* HEADER */}
      <section style={styles.headerSection}>
        <h1 style={styles.mainTitle}>Strategic Roadmap 2026–2030</h1>
        <p style={styles.mainSubtitle}>
          Regulatory validation, national health-stack integration,
          rural infrastructure deployment, and predictive AI expansion
          toward scalable public health impact.
        </p>
      </section>

      {/* TIMELINE */}
      {phases.map((phase, index) => (
        <section key={index} style={styles.section}>
          <div style={styles.phaseHeader}>
            <span style={styles.phaseTag}>{phase.tag}</span>
            <h2 style={styles.title}>{phase.title}</h2>
          </div>

          {/* Progress Bar */}
          <div style={styles.progressWrapper}>
            <div style={styles.progressBar}>
              <div
                style={{
                  ...styles.progressFill,
                  width: `${phase.progress}%`,
                }}
              />
            </div>
            <span style={styles.progressLabel}>
              Projected Completion Alignment: {phase.progress}%
            </span>
          </div>

          <ul style={styles.list}>
            {phase.items.map((item, i) => (
              <li key={i} style={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        </section>
      ))}

      {/* DEPLOYMENT METRICS */}
      <section style={styles.sectionAlt}>
        <h2 style={styles.title}>Deployment KPI Milestones</h2>

        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Year</th>
                <th>Patients Covered</th>
                <th>Hospitalization Reduction</th>
                <th>Operational Cost / Patient</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2026</td>
                <td>300</td>
                <td>15%</td>
                <td>₹1,200</td>
              </tr>
              <tr>
                <td>2027</td>
                <td>5,000+</td>
                <td>22%</td>
                <td>₹950</td>
              </tr>
              <tr>
                <td>2028</td>
                <td>25,000+</td>
                <td>27%</td>
                <td>₹820</td>
              </tr>
              <tr>
                <td>2030</td>
                <td>100,000+</td>
                <td>30%+</td>
                <td>₹650</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* RISK MITIGATION */}
      <section style={styles.section}>
        <h2 style={styles.title}>Risk & Mitigation Strategy</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Regulatory delays → Parallel CDSCO documentation & advisory board review
          </li>
          <li style={styles.listItem}>
            Rural connectivity gaps → BLE store-and-forward (24h resilience)
          </li>
          <li style={styles.listItem}>
            Model bias risk → Federated fairness auditing framework
          </li>
          <li style={styles.listItem}>
            Data breach exposure → AES-256 encryption + Zero-trust architecture
          </li>
        </ul>
      </section>

      {/* 2030 IMPACT */}
      <section style={styles.impactSection}>
        <h2 style={styles.impactTitle}>2030 Public Health Projection</h2>

        <div style={styles.impactGrid}>
          {[
            { value: "100K+", label: "Patients Served" },
            { value: "38,000", label: "Hospitalizations Prevented / Year" },
            { value: "₹310 Cr", label: "Annual Healthcare Savings" },
            { value: "92%+", label: "Predictive Accuracy" },
          ].map((item, index) => (
            <div key={index} style={styles.impactBox}>
              <h3 style={styles.impactValue}>{item.value}</h3>
              <p style={styles.impactLabel}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  pageWrapper: {
    background: "radial-gradient(circle at 10% 5%, #07121f 0%, #02060f 80%)",
    color: "#e6faff",
    fontFamily: "'Inter', sans-serif",
  },

  headerSection: {
    textAlign: "center",
    padding: "clamp(80px, 12vw, 160px) 8%",
  },

  mainTitle: {
    fontSize: "clamp(34px, 6vw, 72px)",
    fontWeight: "900",
    marginBottom: "20px",
  },

  mainSubtitle: {
    fontSize: "clamp(15px, 2.3vw, 22px)",
    color: "#9fb3c8",
    maxWidth: "850px",
    margin: "0 auto",
    lineHeight: "1.7",
  },

  section: {
    padding: "clamp(70px, 9vw, 120px) 8%",
    borderBottom: "1px solid rgba(0,240,255,0.08)",
  },

  sectionAlt: {
    padding: "clamp(70px, 9vw, 120px) 8%",
    background: "linear-gradient(180deg, #040915 0%, #02060f 100%)",
    borderBottom: "1px solid rgba(0,240,255,0.08)",
  },

  phaseHeader: {
    marginBottom: "25px",
  },

  phaseTag: {
    color: "#00f0ff",
    fontSize: "12px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    fontWeight: "700",
  },

  title: {
    fontSize: "clamp(22px, 4vw, 46px)",
    fontWeight: "800",
    marginTop: "12px",
    marginBottom: "25px",
  },

  progressWrapper: {
    marginBottom: "30px",
  },

  progressBar: {
    height: "10px",
    background: "rgba(255,255,255,0.1)",
    borderRadius: "6px",
  },

  progressFill: {
    height: "100%",
    background: "linear-gradient(90deg,#00f0ff,#00ffa3)",
    borderRadius: "6px",
  },

  progressLabel: {
    fontSize: "12px",
    color: "#7fa6c7",
  },

  list: {
    listStyle: "none",
    padding: 0,
    maxWidth: "900px",
  },

  listItem: {
    fontSize: "clamp(14px, 2vw, 18px)",
    marginBottom: "16px",
    color: "#c8e6ff",
    lineHeight: "1.7",
  },

  tableWrapper: {
    overflowX: "auto",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    color: "#d9f3ff",
  },

  impactSection: {
    padding: "clamp(100px, 14vw, 180px) 8%",
    textAlign: "center",
  },

  impactTitle: {
    fontSize: "clamp(26px, 5vw, 54px)",
    fontWeight: "900",
    marginBottom: "60px",
  },

  impactGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap",
  },

  impactBox: {
    padding: "40px",
    background: "rgba(0,240,255,0.05)",
    border: "1px solid rgba(0,240,255,0.15)",
    borderRadius: "20px",
    minWidth: "220px",
  },

  impactValue: {
    fontSize: "42px",
    color: "#00f0ff",
  },

  impactLabel: {
    fontSize: "13px",
    textTransform: "uppercase",
    color: "#6f859e",
  },
};
