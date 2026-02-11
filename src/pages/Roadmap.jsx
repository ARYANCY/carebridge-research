export default function Roadmap() {
  return (
    <div style={styles.pageWrapper}>
      
      {/* HEADER */}
      <section style={styles.headerSection}>
        <h1 style={styles.mainTitle}>Deployment Roadmap</h1>
        <p style={styles.mainSubtitle}>
          Structured rollout from pilot validation to nationwide healthcare
          infrastructure integration.
        </p>
      </section>

      {/* PHASE 01 */}
      <section style={styles.section}>
        <span style={styles.sectionTag}>Phase 01</span>
        <h2 style={styles.title}>Pilot & Clinical Validation (2026)</h2>

        <ul style={styles.list}>
          <li style={styles.listItem}>
            150–300 elderly participants across urban Guwahati
          </li>
          <li style={styles.listItem}>
            Integration with local cardiology departments
          </li>
          <li style={styles.listItem}>
            HRV–AQI correlation validation under real exposure conditions
          </li>
          <li style={styles.listItem}>
            Institutional Ethics Committee approval
          </li>
        </ul>
      </section>

      {/* PHASE 02 */}
      <section style={styles.sectionAlt}>
        <span style={styles.sectionTag}>Phase 02</span>
        <h2 style={styles.title}>State-Level Expansion (2027)</h2>

        <ul style={styles.list}>
          <li style={styles.listItem}>
            Deployment across 5+ districts in Assam
          </li>
          <li style={styles.listItem}>
            Integration with ABDM (Ayushman Bharat Digital Mission)
          </li>
          <li style={styles.listItem}>
            Real-time CPCB environmental API linkage
          </li>
          <li style={styles.listItem}>
            Remote physician dashboard rollout
          </li>
        </ul>
      </section>

      {/* PHASE 03 */}
      <section style={styles.section}>
        <span style={styles.sectionTag}>Phase 03</span>
        <h2 style={styles.title}>National Scale Deployment (2028–2030)</h2>

        <ul style={styles.list}>
          <li style={styles.listItem}>
            100,000+ elderly users onboarded
          </li>
          <li style={styles.listItem}>
            Public–Private hospital partnerships
          </li>
          <li style={styles.listItem}>
            AI risk modeling adaptation per climatic zone
          </li>
          <li style={styles.listItem}>
            SaaS-based predictive analytics for government health agencies
          </li>
        </ul>
      </section>

      {/* REGULATORY & COMPLIANCE */}
      <section style={styles.sectionAlt}>
        <span style={styles.sectionTag}>Compliance Framework</span>
        <h2 style={styles.title}>Regulatory Alignment</h2>

        <ul style={styles.list}>
          <li style={styles.listItem}>
            HIPAA-equivalent data encryption protocols
          </li>
          <li style={styles.listItem}>
            ISO 13485 medical device quality standards
          </li>
          <li style={styles.listItem}>
            CDSCO digital health compliance
          </li>
          <li style={styles.listItem}>
            End-to-end encrypted cloud infrastructure
          </li>
        </ul>
      </section>

    </div>
  );
}
const styles = {
  pageWrapper: {
    background: "radial-gradient(circle at 20% 10%, #081220 0%, #02060f 75%)",
    color: "#e6faff",
    fontFamily: "'Inter', sans-serif",
    paddingBottom: "120px",
  },

  headerSection: {
    textAlign: "center",
    padding: "120px 10% 80px",
  },

  mainTitle: {
    fontSize: "60px",
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
    fontSize: "42px",
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
};
