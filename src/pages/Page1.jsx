import Hero from "../components/Hero";

import digitalTwin from "../assets/digital_twin_human.png";
import elderlyGraph from "../assets/elderly_demographic_graph.jpeg";
import aqiOverlay from "../assets/aqi_heat_overlay_visual.png";
import iotBoard from "../assets/iot_sensor_board.png";
import organMap from "../assets/3d_organ_heatmap.png";
import marketChart from "../assets/market_growth_chart_dark.png";

export default function Page1() {
  return (
    <>
      <Hero />

      {/* SECTION 1 — VISION (Image Right) */}
      <section style={styles.sectionRow}>
        <div style={styles.textBlock}>
          <h2 style={styles.title}>The Invisible Guardian</h2>
          <p style={styles.text}>
            CareBridge redefines elderly healthcare from passive monitoring
            to predictive clinical intelligence through a real-time 3D Digital Twin.
            It integrates biometric sensing, environmental exposure analytics,
            and AI-driven risk modeling.
          </p>

          <ul style={styles.list}>
            <li>IoT-driven continuous vitals capture (HR, SpO₂, AQI)</li>
            <li>Context-aware environmental correlation modeling</li>
            <li>Explainable AI health foresight engine</li>
          </ul>

          <p style={styles.reference}>
            WHO reports Non-Communicable Diseases cause 71% of global deaths.
            <a href="https://www.who.int/news-room/fact-sheets/detail/noncommunicable-diseases" target="_blank">
              (WHO NCD Report)
            </a>
          </p>
        </div>

        <img src={digitalTwin} alt="Digital Twin" style={styles.image} />
      </section>

      {/* SECTION 2 — DEMOGRAPHIC CRISIS (Image Left) */}
      <section style={styles.sectionRowReverse}>
        <img src={elderlyGraph} alt="Elderly Demographic Growth" style={styles.image} />

        <div style={styles.textBlock}>
          <h2 style={styles.title}>The Demographic Inflection</h2>

          <p style={styles.text}>
            India’s elderly population is projected to reach 173 million by 2026
            and 230 million by 2036. Nearly 70–75% of seniors suffer from at least
            one chronic illness.
          </p>

          <ul style={styles.list}>
            <li>Hypertension prevalence ~38%</li>
            <li>Diabetes prevalence ~31%</li>
            <li>Cardiovascular disease leading mortality cause</li>
          </ul>

          <p style={styles.reference}>
            Longitudinal Ageing Study in India (LASI)
            <a href="https://www.downtoearth.org.in/news/health/almost-70-senior-citizens-in-india-have-a-chronic-illness-74944" target="_blank">
              (Source)
            </a>
          </p>
        </div>
      </section>

      {/* SECTION 3 — ENVIRONMENTAL RISK (No Image) */}
      <section style={styles.sectionCentered}>
        <h2 style={styles.title}>Environment as Silent Catalyst</h2>

        <p style={styles.text}>
          Cardiovascular risk is significantly amplified by air pollution,
          temperature extremes, and humidity interaction.
        </p>

        <ul style={styles.list}>
          <li>Every 10 μg/m³ rise in PM₂.₅ increases CVD mortality by ~12%</li>
          <li>Heat + pollution events can double heart attack fatality risk</li>
          <li>Humidity modifies systemic inflammation pathways</li>
        </ul>

        <p style={styles.reference}>
          Frontiers in Public Health Meta-Analysis
          <a href="https://www.frontiersin.org/articles/10.3389/fpubh.2024.1487034/full" target="_blank">
            (Research Link)
          </a>
        </p>
      </section>

      {/* SECTION 4 — ENVIRONMENT VISUAL (Image Right) */}
      <section style={styles.sectionRow}>
        <div style={styles.textBlock}>
          <h2 style={styles.title}>The Exposure Overlay</h2>
          <p style={styles.text}>
            CareBridge correlates AQI, wet-bulb temperature, and particulate
            density with HRV (SDNN, RMSSD) to detect early cardiac stress patterns.
          </p>

          <p style={styles.reference}>
            European Journal of Preventive Cardiology
            <a href="https://academic.oup.com/eurjpc/article/31/9/1080/7602695" target="_blank">
              (Temperature-CVD Study)
            </a>
          </p>
        </div>

        <img src={aqiOverlay} alt="AQI Overlay" style={styles.image} />
      </section>

      {/* SECTION 5 — SYSTEM ARCHITECTURE (Image Left) */}
      <section style={styles.sectionRowReverse}>
        <img src={iotBoard} alt="IoT Stack" style={styles.image} />

        <div style={styles.textBlock}>
          <h2 style={styles.title}>Cognitive Health Stack</h2>

          <ul style={styles.list}>
            <li>Layer 01 — Perception: IoT sensor grid</li>
            <li>Layer 02 — Intelligence: Med-RAG + HRV modeling</li>
            <li>Layer 03 — Visualization: 3D organ heat mapping</li>
          </ul>

          <p style={styles.reference}>
            MIT-BIH Arrhythmia Database:
            <a href="https://physionet.org/content/mitdb/1.0.0/" target="_blank">
              (PhysioNet)
            </a>
          </p>
        </div>
      </section>

      {/* SECTION 6 — DIGITAL TWIN VISUAL (Image Right) */}
      <section style={styles.sectionRow}>
        <div style={styles.textBlock}>
          <h2 style={styles.title}>Real-Time Organ Intelligence</h2>
          <p style={styles.text}>
            The 3D Digital Twin maps cardiac stress, respiratory load,
            and environmental exposure in real time using predictive ML modeling.
          </p>
        </div>

        <img src={organMap} alt="3D Organ Heatmap" style={styles.image} />
      </section>

      {/* SECTION 7 — MARKET (Image Left) */}
      <section style={styles.sectionRowReverse}>
        <img src={marketChart} alt="Healthcare IoT Market" style={styles.image} />

        <div style={styles.textBlock}>
          <h2 style={styles.title}>The Market Expansion Curve</h2>

          <p style={styles.text}>
            The global Healthcare IoT market is projected to grow from
            $127.7B to over $289B within this decade.
          </p>

          <p style={styles.reference}>
            Fortune Business Insights:
            <a href="https://www.fortunebusinessinsights.com/industry-reports/healthcare-iot-market-101742" target="_blank">
              (Market Report)
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

/* ================= STYLING ================= */

const styles = {
  sectionRow: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "120px 10%",
    background: "#040915",
    color: "#e6faff",
    gap: "60px",
  },
  sectionRowReverse: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "120px 10%",
    background: "#02060f",
    color: "#d7faff",
    gap: "60px",
  },
  sectionCentered: {
    minHeight: "100vh",
    padding: "120px 15%",
    background: "#050b18",
    color: "#e6faff",
    textAlign: "center",
  },
  textBlock: {
    flex: 1,
    maxWidth: "600px",
  },
  title: {
    fontSize: "48px",
    marginBottom: "30px",
    color: "#00f0ff",
    letterSpacing: "2px",
  },
  text: {
    fontSize: "20px",
    lineHeight: "1.8",
    marginBottom: "20px",
  },
  list: {
    paddingLeft: "20px",
    marginBottom: "20px",
    lineHeight: "1.8",
  },
  image: {
    flex: 1,
    maxWidth: "500px",
    borderRadius: "20px",
    boxShadow: "0 0 40px rgba(0,255,255,0.25)",
  },
  reference: {
    fontSize: "14px",
    marginTop: "20px",
    opacity: 0.8,
  },
};
