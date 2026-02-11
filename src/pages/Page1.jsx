import React from "react";
import Hero from "../components/Hero";

// Assets - Ensure these paths match your project structure
import digitalTwin from "../assets/digital_twin_human.png";
import elderlyGraph from "../assets/elderly_demographic_graph.jpeg";
import aqiOverlay from "../assets/aqi_heat_overlay_visual.png";
import iotBoard from "../assets/iot_sensor_board.png";
import organMap from "../assets/3d_organ_heatmap.png";
import marketChart from "../assets/market_growth_chart_dark.png";

export default function Page1() {
  return (
    <div style={styles.pageWrapper}>
      <Hero />

      {/* SECTION 1 — VISION (Image Right) */}
      <section style={styles.sectionRow}>
        <div style={styles.textBlock}>
          <span style={styles.subtitle}>Our Core Vision</span>
          <h2 style={styles.title}>The Invisible Guardian</h2>
          <p style={styles.text}>
            CareBridge redefines elderly healthcare from passive monitoring
            to predictive clinical intelligence through a real-time 3D Digital Twin.
            It integrates biometric sensing and AI-driven risk modeling.
          </p>

          <ul style={styles.list}>
            <li style={styles.listItem}>IoT-driven continuous vitals capture (HR, SpO₂, AQI)</li>
            <li style={styles.listItem}>Context-aware environmental correlation modeling</li>
            <li style={styles.listItem}>Explainable AI health foresight engine</li>
          </ul>

          <p style={styles.reference}>
            WHO reports Non-Communicable Diseases cause 71% of global deaths.
            <a href="https://www.who.int/news-room/fact-sheets/detail/noncommunicable-diseases" style={styles.link} target="_blank" rel="noreferrer"> (WHO Report)</a>
          </p>
        </div>
        <div style={styles.imageContainer}>
          <img src={digitalTwin} alt="Digital Twin" style={styles.image} />
        </div>
      </section>

      {/* SECTION 2 — DEMOGRAPHIC CRISIS (Image Left) */}
      <section style={styles.sectionRowReverse}>
        <div style={styles.textBlock}>
          <span style={styles.subtitle}>Market Reality</span>
          <h2 style={styles.title}>The Demographic Inflection</h2>
          <p style={styles.text}>
            India’s elderly population is projected to reach 173 million by 2026. 
            Nearly 75% of seniors suffer from at least one chronic illness, requiring 
            smarter intervention tools.
          </p>

          <ul style={styles.list}>
            <li style={styles.listItem}>Hypertension prevalence ~38%</li>
            <li style={styles.listItem}>Diabetes prevalence ~31%</li>
            <li style={styles.listItem}>Cardiovascular disease leading mortality cause</li>
          </ul>

          <p style={styles.reference}>
            Longitudinal Ageing Study in India (LASI)
            <a href="https://www.downtoearth.org.in/news/health/almost-70-senior-citizens-in-india-have-a-chronic-illness-74944" style={styles.link} target="_blank" rel="noreferrer"> (Source)</a>
          </p>
        </div>
        <div style={styles.imageContainer}>
          <img src={elderlyGraph} alt="Elderly Growth Chart" style={styles.image} />
        </div>
      </section>

      {/* SECTION 3 — ENVIRONMENTAL RISK (Centered) */}
      <section style={styles.sectionCentered}>
        <span style={styles.subtitle}>Silent Catalysts</span>
        <h2 style={styles.titleCentered}>Environment & Cardiac Risk</h2>
        <p style={styles.textCentered}>
          Cardiovascular risk is significantly amplified by air pollution,
          temperature extremes, and humidity interaction.
        </p>
        <div style={styles.gridStats}>
            <div style={styles.statBox}>
                <h3 style={styles.statTitle}>+12%</h3>
                <p style={styles.statText}>CVD Mortality per 10 μg/m³ PM₂.₅</p>
            </div>
            <div style={styles.statBox}>
                <h3 style={styles.statTitle}>2.0x</h3>
                <p style={styles.statText}>Heart Attack risk in Heat Waves</p>
            </div>
        </div>
      </section>

      {/* SECTION 4 — EXPOSURE VISUAL (Image Right) */}
      <section style={styles.sectionRow}>
        <div style={styles.textBlock}>
          <span style={styles.subtitle}>Predictive Analytics</span>
          <h2 style={styles.title}>The Exposure Overlay</h2>
          <p style={styles.text}>
            CareBridge correlates AQI, wet-bulb temperature, and particulate
            density with HRV to detect early cardiac stress patterns before they escalate.
          </p>
          <p style={styles.reference}>
            European Journal of Preventive Cardiology
            <a href="https://academic.oup.com/eurjpc/article/31/9/1080/7602695" style={styles.link} target="_blank" rel="noreferrer"> (Study Link)</a>
          </p>
        </div>
        <div style={styles.imageContainer}>
          <img src={aqiOverlay} alt="AQI Overlay" style={styles.image} />
        </div>
      </section>

      {/* SECTION 5 — SYSTEM ARCHITECTURE (Image Left) */}
      <section style={styles.sectionRowReverse}>
        <div style={styles.textBlock}>
          <span style={styles.subtitle}>Technology</span>
          <h2 style={styles.title}>Cognitive Health Stack</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}><strong>Layer 01 — Perception:</strong> IoT sensor grid</li>
            <li style={styles.listItem}><strong>Layer 02 — Intelligence:</strong> Med-RAG + HRV modeling</li>
            <li style={styles.listItem}><strong>Layer 03 — Visualization:</strong> 3D organ heat mapping</li>
          </ul>
        </div>
        <div style={styles.imageContainer}>
          <img src={iotBoard} alt="IoT Hardware" style={styles.image} />
        </div>
      </section>

      {/* SECTION 6 — MARKET DATA (Image Right) */}
      <section style={styles.sectionRow}>
        <div style={styles.textBlock}>
          <span style={styles.subtitle}>Growth</span>
          <h2 style={styles.title}>Market Expansion</h2>
          <p style={styles.text}>
            The global Healthcare IoT market is projected to reach $289B by 2030, 
            driven by the urgent need for remote senior care solutions.
          </p>
        </div>
        <div style={styles.imageContainer}>
          <img src={marketChart} alt="Market Growth" style={styles.image} />
        </div>
      </section>
    </div>
  );
}

/* ================= THEME STYLING ================= */

const styles = {
  pageWrapper: {
    background: "#02060f",
    color: "#e6faff",
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    overflowX: "hidden",
  },
  sectionRow: {
    minHeight: "85vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "80px 10%",
    gap: "60px",
    borderBottom: "1px solid rgba(0, 240, 255, 0.05)",
  },
  sectionRowReverse: {
    minHeight: "85vh",
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "80px 10%",
    gap: "60px",
    background: "#040915",
    borderBottom: "1px solid rgba(0, 240, 255, 0.05)",
  },
  sectionCentered: {
    minHeight: "60vh",
    padding: "100px 15%",
    textAlign: "center",
    background: "radial-gradient(circle at center, #0a1628 0%, #02060f 100%)",
  },
  textBlock: {
    flex: 1,
    maxWidth: "600px",
  },
  subtitle: {
    color: "#00f0ff",
    textTransform: "uppercase",
    fontSize: "14px",
    fontWeight: "bold",
    letterSpacing: "3px",
    display: "block",
    marginBottom: "15px",
  },
  title: {
    fontSize: "44px",
    fontWeight: "800",
    marginBottom: "25px",
    color: "#ffffff",
    lineHeight: "1.1",
  },
  titleCentered: {
    fontSize: "44px",
    fontWeight: "800",
    marginBottom: "25px",
    color: "#ffffff",
  },
  text: {
    fontSize: "19px",
    lineHeight: "1.7",
    color: "#b0c4de",
    marginBottom: "25px",
  },
  textCentered: {
    fontSize: "20px",
    lineHeight: "1.7",
    color: "#b0c4de",
    maxWidth: "800px",
    margin: "0 auto 40px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginBottom: "30px",
  },
  listItem: {
    fontSize: "17px",
    marginBottom: "15px",
    paddingLeft: "30px",
    position: "relative",
    color: "#d1e8ff",
    display: "flex",
    alignItems: "center",
  },
  // Pseudo-bullet point logic
  // Note: For actual React, you'd use a bullet icon or SVG here
  imageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    maxWidth: "520px",
    borderRadius: "16px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.6), 0 0 20px rgba(0,240,255,0.15)",
    border: "1px solid rgba(0,240,255,0.1)",
  },
  gridStats: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    marginTop: "40px",
  },
  statBox: {
    padding: "20px 40px",
    background: "rgba(0, 240, 255, 0.03)",
    border: "1px solid rgba(0, 240, 255, 0.1)",
    borderRadius: "12px",
    minWidth: "200px",
  },
  statTitle: {
    fontSize: "36px",
    color: "#00f0ff",
    margin: "0 0 10px 0",
  },
  statText: {
    fontSize: "14px",
    margin: 0,
    color: "#6a7c92",
  },
  reference: {
    fontSize: "13px",
    marginTop: "30px",
    color: "#566a82",
    fontStyle: "italic",
  },
  link: {
    color: "#00f0ff",
    textDecoration: "none",
    marginLeft: "5px",
    transition: "opacity 0.2s",
    "&:hover": { opacity: 0.8 }
  },
};