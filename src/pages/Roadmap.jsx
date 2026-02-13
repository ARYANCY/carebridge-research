import Footer from "../components/Footer";

export default function Roadmap() {
  const phases = [
    {
      tag: "Phase 1 — 2026",
      title: "Prospective Clinical Validation",
      items: [
        "300 elderly patients (2+ chronic conditions)",
        "6-month randomized controlled trial",
        "Primary endpoint: all-cause hospitalization rate",
        "CDSCO Class IIa medical device pathway",
        "Digital Personal Data Protection Act compliance",
      ],
    },
    {
      tag: "Phase 2 — 2026–2027",
      title: "ABDM Integration",
      alt: true,
      items: [
        "HL7 FHIR R4 interoperability",
        "Observation, Condition, MedicationRequest sync",
        "15-minute bidirectional data exchange",
        "Consent-managed architecture",
        "Integration with Personal Health Records (PHR)",
      ],
    },
    {
      tag: "Phase 3 — 2027",
      title: "Rural BLE Proxy-Sync Scaling",
      items: [
        "Bluetooth Mesh (BLE 5.0+) village networks",
        "Community gateway tablet (72-hour operation)",
        "Compressed CBOR data model",
        "Pilot: 800+ patients",
        "₹800 hardware amortization per patient",
      ],
    },
    {
      tag: "Phase 4 — 2028+",
      title: "Advanced Predictive Intelligence",
      alt: true,
      items: [
        "LSTM-based 7-day cardiac risk forecasting",
        "Federated learning model updates",
        "Fall detection (sensor fusion)",
        "Sleep staging via HRV modeling",
        "Voice biomarkers for cognitive screening",
      ],
    },
  ];

  const additionalSections = [
    {
      title: "Regulatory & Certification Timeline",
      items: [
        "CDSCO full certification (2027)",
        "ISO 13485 medical device compliance",
        "HIPAA-equivalent encryption framework",
        "State public health procurement approval",
      ],
    },
    {
      title: "Hospital & Public Health Partnerships",
      alt: true,
      items: [
        "Tertiary care cardiology departments",
        "Government district hospitals",
        "Telemedicine networks",
        "Ayushman Bharat empanelment",
      ],
    },
    {
      title: "Financial Sustainability Model",
      items: [
        "₹10/month cloud cost optimization",
        "Public-private subscription hybrid",
        "CSR-based rural sponsorship model",
        "Insurance reimbursement integration",
      ],
    },
    {
      title: "Geographic Expansion Strategy",
      alt: true,
      items: [
        "Assam → Maharashtra → Karnataka",
        "Tier-2 and Tier-3 rural prioritization",
        "Climate-adaptive AI calibration",
        "Localization in regional languages",
      ],
    },
    {
      title: "Research & Publication Roadmap",
      items: [
        "Peer-reviewed cardiology journals",
        "HRV–AQI correlation dataset publication",
        "AI fairness & bias mitigation study",
        "Open public health impact dashboard",
      ],
    },
    {
      title: "Data Security & Governance",
      alt: true,
      items: [
        "End-to-end AES-256 encryption",
        "Zero-trust cloud infrastructure",
        "Role-based access control (RBAC)",
        "Federated learning privacy safeguards",
      ],
    },
    {
      title: "Workforce Enablement",
      items: [
        "Village health worker training kits",
        "Tele-consultation onboarding modules",
        "AI-assisted triage workflow training",
        "Clinical dashboard certification",
      ],
    },
    {
      title: "KPI & Outcome Metrics",
      alt: true,
      items: [
        "30% hospitalization reduction",
        "20% medication adherence improvement",
        "Real-time risk scoring accuracy >92%",
        "Annual cost savings per patient >₹25,000",
      ],
    },
  ];

  return (
    <div style={styles.pageWrapper}>
      
      {/* HEADER */}
      <section style={styles.headerSection}>
        <h1 style={styles.mainTitle}>Roadmap & Deployment</h1>
        <p style={styles.mainSubtitle}>
          Clinical validation, national integration, rural scalability, and predictive intelligence expansion through 2030.
        </p>
      </section>

      {/* CORE PHASES */}
      {phases.map((phase, index) => (
        <section
          key={index}
          style={phase.alt ? styles.sectionAlt : styles.section}
        >
          <span style={styles.phaseTag}>{phase.tag}</span>
          <h2 style={styles.title}>{phase.title}</h2>
          <ul style={styles.list}>
            {phase.items.map((item, i) => (
              <li key={i} style={styles.listItem}>{item}</li>
            ))}
          </ul>
        </section>
      ))}

      {/* STRATEGIC EXPANSION */}
      {additionalSections.map((sec, index) => (
        <section
          key={index}
          style={sec.alt ? styles.sectionAlt : styles.section}
        >
          <h2 style={styles.title}>{sec.title}</h2>
          <ul style={styles.list}>
            {sec.items.map((item, i) => (
              <li key={i} style={styles.listItem}>{item}</li>
            ))}
          </ul>
        </section>
      ))}

      {/* IMPACT */}
      <section style={styles.impactSection}>
        <h2 style={styles.impactTitle}>2030 Impact Projection</h2>
        <div style={styles.impactGrid}>
          {[
            { value: "100K+", label: "Patients Served" },
            { value: "38,000", label: "Hospitalizations Prevented Annually" },
            { value: "₹310 Cr", label: "Healthcare Savings" },
          ].map((item, index) => (
            <div key={index} style={styles.impactBox}>
              <h3 style={styles.impactValue}>{item.value}</h3>
              <p style={styles.impactLabel}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer/>

    </div>
  );
}

const styles = {
  pageWrapper: {
    background: "radial-gradient(circle at 10% 5%, #07121f 0%, #02060f 80%)",
    color: "#e6faff",
    fontFamily: "'Inter', sans-serif",
    paddingBottom: "clamp(80px, 12vw, 160px)",
  },

  headerSection: {
    textAlign: "center",
    padding: "clamp(80px, 12vw, 160px) 6%",
  },

  mainTitle: {
    fontSize: "clamp(34px, 6vw, 72px)",
    fontWeight: "900",
    fontFamily: "'Space Grotesk', sans-serif",
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
    padding: "clamp(60px, 8vw, 110px) 8%",
    borderBottom: "1px solid rgba(0,240,255,0.06)",
  },

  sectionAlt: {
    padding: "clamp(60px, 8vw, 110px) 8%",
    background: "linear-gradient(180deg, #040915 0%, #02060f 100%)",
    borderBottom: "1px solid rgba(0,240,255,0.06)",
  },

  phaseTag: {
    color: "#00f0ff",
    fontSize: "clamp(11px, 1.3vw, 13px)",
    fontWeight: "700",
    letterSpacing: "3px",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "14px",
  },

  title: {
    fontSize: "clamp(22px, 4vw, 46px)",
    fontWeight: "800",
    marginBottom: "28px",
    fontFamily: "'Space Grotesk', sans-serif",
  },

  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    maxWidth: "900px",
  },

  listItem: {
    fontSize: "clamp(14px, 2.1vw, 18px)",
    marginBottom: "16px",
    color: "#c8e6ff",
    lineHeight: "1.7",
  },

  impactSection: {
    padding: "clamp(100px, 14vw, 180px) 8%",
    textAlign: "center",
  },

  impactTitle: {
    fontSize: "clamp(26px, 5vw, 54px)",
    fontWeight: "900",
    marginBottom: "clamp(40px, 8vw, 80px)",
    fontFamily: "'Space Grotesk', sans-serif",
  },

  impactGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "clamp(20px, 5vw, 60px)",
    flexWrap: "wrap",
  },

  impactBox: {
    padding: "clamp(30px, 5vw, 55px)",
    background: "rgba(0,240,255,0.05)",
    border: "1px solid rgba(0,240,255,0.15)",
    borderRadius: "24px",
    minWidth: "clamp(200px, 40vw, 280px)",
  },

  impactValue: {
    fontSize: "clamp(28px, 6vw, 52px)",
    fontFamily: "'Space Grotesk', sans-serif",
    color: "#00f0ff",
    marginBottom: "10px",
  },

  impactLabel: {
    fontSize: "clamp(11px, 1.8vw, 14px)",
    textTransform: "uppercase",
    color: "#6f859e",
  },
};
