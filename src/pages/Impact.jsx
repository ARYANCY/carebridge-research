export default function Roadmap() {
  return (
    <div style={styles.pageWrapper}>
      
      {/* HEADER */}
      <section style={styles.headerSection}>
        <h1 style={styles.mainTitle}>Roadmap & Deployment</h1>
        <p style={styles.mainSubtitle}>
          Clinical validation, national integration, and rural scalability strategy through 2028.
        </p>
      </section>

      {/* PHASE 1 */}
      <section style={styles.section}>
        <span style={styles.phaseTag}>Phase 1 — 2026</span>
        <h2 style={styles.title}>Prospective Clinical Validation</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>300 elderly patients (2+ chronic conditions)</li>
          <li style={styles.listItem}>6-month randomized controlled trial</li>
          <li style={styles.listItem}>Primary endpoint: all-cause hospitalization rate</li>
          <li style={styles.listItem}>CDSCO Class IIa medical device pathway</li>
          <li style={styles.listItem}>Digital Personal Data Protection Act compliance</li>
        </ul>
      </section>

      {/* PHASE 2 */}
      <section style={styles.sectionAlt}>
        <span style={styles.phaseTag}>Phase 2 — 2026–2027</span>
        <h2 style={styles.title}>ABDM Integration</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>HL7 FHIR R4 interoperability</li>
          <li style={styles.listItem}>Observation, Condition, MedicationRequest sync</li>
          <li style={styles.listItem}>15-minute bidirectional data exchange</li>
          <li style={styles.listItem}>Consent-managed data sharing architecture</li>
          <li style={styles.listItem}>Integration with Personal Health Records (PHR)</li>
        </ul>
      </section>

      {/* PHASE 3 */}
      <section style={styles.section}>
        <span style={styles.phaseTag}>Phase 3 — 2027</span>
        <h2 style={styles.title}>Rural BLE Proxy-Sync Scaling</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Bluetooth Mesh (BLE 5.0+) village networks</li>
          <li style={styles.listItem}>Community gateway tablet (72-hour operation)</li>
          <li style={styles.listItem}>250KB/day compressed CBOR data model</li>
          <li style={styles.listItem}>Pilot: 800+ patients (Assam + Maharashtra)</li>
          <li style={styles.listItem}>₹800 one-time hardware amortization per patient</li>
        </ul>
      </section>

      {/* PHASE 4 */}
      <section style={styles.sectionAlt}>
        <span style={styles.phaseTag}>Phase 4 — 2028+</span>
        <h2 style={styles.title}>Advanced Predictive Intelligence</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>LSTM-based 7-day cardiac risk forecasting</li>
          <li style={styles.listItem}>Federated learning for privacy-preserving updates</li>
          <li style={styles.listItem}>Fall detection (accelerometer + gyroscope fusion)</li>
          <li style={styles.listItem}>Sleep staging via HRV modeling</li>
          <li style={styles.listItem}>Voice biomarkers for cognitive screening</li>
        </ul>
      </section>

      {/* 2030 VISION */}
      <section style={styles.impactSection}>
        <h2 style={styles.impactTitle}>2030 Impact Projection</h2>

        <div style={styles.impactGrid}>
          <div style={styles.impactBox}>
            <h3 style={styles.impactValue}>100K+</h3>
            <p style={styles.impactLabel}>Patients Served</p>
          </div>

          <div style={styles.impactBox}>
            <h3 style={styles.impactValue}>38,000</h3>
            <p style={styles.impactLabel}>Hospitalizations Prevented Annually</p>
          </div>

          <div style={styles.impactBox}>
            <h3 style={styles.impactValue}>₹310 Cr</h3>
            <p style={styles.impactLabel}>Healthcare Savings</p>
          </div>
        </div>
      </section>

    </div>
  );
}
const styles = {
  pageWrapper: {
    background: "radial-gradient(circle at 10% 5%, #07121f 0%, #02060f 80%)",
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

  phaseTag: {
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

  impactSection: {
    padding: "120px 12%",
    textAlign: "center",
  },

  impactTitle: {
    fontSize: "48px",
    fontWeight: "800",
    marginBottom: "60px",
    fontFamily: "'Space Grotesk', sans-serif",
  },

  impactGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "50px",
    flexWrap: "wrap",
  },

  impactBox: {
    padding: "40px 60px",
    background: "rgba(0,240,255,0.05)",
    border: "1px solid rgba(0,240,255,0.12)",
    borderRadius: "20px",
    minWidth: "250px",
  },

  impactValue: {
    fontSize: "46px",
    fontFamily: "'Space Grotesk', sans-serif",
    color: "#00f0ff",
    marginBottom: "10px",
  },

  impactLabel: {
    fontSize: "14px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    color: "#6f859e",
  },
};
