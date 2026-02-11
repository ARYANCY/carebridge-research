import React from "react";
import Hero from "../components/Hero";

import digitalTwin from "../assets/digital_twin_human.png";
import elderlyGraph from "../assets/elderly_demographic_graph.jpeg";
import aqiOverlay from "../assets/aqi_heat_overlay_visual.png";

export default function Home() {
  return (
    <div style={styles.pageWrapper}>
      <Hero />

      {/* SECTION 1 — THE GREY DIVIDE CRISIS */}
      <section style={styles.sectionRow}>
        <div style={styles.textBlock}>
          <span style={styles.subtitle}>The Grey Divide Crisis</span>
          <h2 style={styles.title}>
            173 Million Elderly. A Reactive Healthcare System.
          </h2>
          <p style={styles.text}>
            India’s elderly population will reach 173 million by 2026.
            75% manage two or more chronic diseases under fragmented,
            reactive care systems.
          </p>

          <ul style={styles.list}>
            <li style={styles.listItem}>₹45,000+ per preventable hospitalization</li>
            <li style={styles.listItem}>70% digital literacy gap among caregivers</li>
            <li style={styles.listItem}>No environmental-health correlation in current systems</li>
          </ul>
        </div>

        <div style={styles.imageContainer}>
          <img src={elderlyGraph} alt="Demographic Growth" style={styles.image} />
        </div>
      </section>

      {/* SECTION 2 — THE CORE INNOVATION */}
      <section style={styles.sectionRowReverse}>
        <div style={styles.textBlock}>
          <span style={styles.subtitle}>Core Innovation</span>
          <h2 style={styles.title}>
            Environmental–Vital Correlation Engine
          </h2>
          <p style={styles.text}>
            CareBridge introduces a Zero-UI 3D Digital Twin that correlates
            environmental stressors (AQI, heat index, humidity)
            with cardiovascular biomarkers in real time.
          </p>

          <ul style={styles.list}>
            <li style={styles.listItem}>2–3 hour predictive cardiac risk window</li>
            <li style={styles.listItem}>Passive IoT-based vitals capture</li>
            <li style={styles.listItem}>Explainable Med-RAG intelligence layer</li>
          </ul>
        </div>

        <div style={styles.imageContainer}>
          <img src={digitalTwin} alt="Digital Twin" style={styles.image} />
        </div>
      </section>

      {/* SECTION 3 — ENVIRONMENTAL RISK CONTEXT */}
      <section style={styles.sectionCentered}>
        <span style={styles.subtitle}>Why It Matters</span>
        <h2 style={styles.titleCentered}>
          Environment Is a Silent Cardiac Multiplier
        </h2>
        <p style={styles.textCentered}>
          A 10 μg/m³ increase in PM₂.₅ raises cardiovascular mortality by ~12%.
          Heatwaves double cardiac event risk in elderly populations.
        </p>

        <div style={styles.gridStats}>
          <div style={styles.statBox}>
            <h3 style={styles.statTitle}>+12%</h3>
            <p style={styles.statText}>CVD mortality per 10 μg/m³ PM₂.₅</p>
          </div>

          <div style={styles.statBox}>
            <h3 style={styles.statTitle}>2x</h3>
            <p style={styles.statText}>Heart attack risk in heatwaves</p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — PROJECTED IMPACT */}
      <section style={styles.sectionRow}>
        <div style={styles.textBlock}>
          <span style={styles.subtitle}>Projected Clinical Impact</span>
          <h2 style={styles.title}>
            From Reaction to Prevention
          </h2>
          <ul style={styles.list}>
            <li style={styles.listItem}>38% projected hospitalization reduction</li>
            <li style={styles.listItem}>₹31,050 annual savings per patient</li>
            <li style={styles.listItem}>83% interpretation accuracy in low-literacy cohort</li>
          </ul>
        </div>

        <div style={styles.imageContainer}>
          <img src={aqiOverlay} alt="Environmental Overlay" style={styles.image} />
        </div>
      </section>
    </div>

    


  );
  
}
const styles = {
  pageWrapper: {
    background: "radial-gradient(circle at 20% 10%, #0a1628 0%, #02060f 65%)",
    color: "#e6faff",
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    overflowX: "hidden",
  },

  /* ================= SECTION STRUCTURE ================= */

  sectionRow: {
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "100px 10%",
    gap: "80px",
    borderBottom: "1px solid rgba(0,240,255,0.05)",
  },

  sectionRowReverse: {
    minHeight: "90vh",
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "100px 10%",
    gap: "80px",
    background: "#040915",
    borderBottom: "1px solid rgba(0,240,255,0.05)",
  },

  sectionCentered: {
    minHeight: "65vh",
    padding: "120px 15%",
    textAlign: "center",
    background: "linear-gradient(180deg, #040915 0%, #02060f 100%)",
  },

  /* ================= TYPOGRAPHY ================= */

  subtitle: {
    color: "#00f0ff",
    textTransform: "uppercase",
    fontSize: "13px",
    fontWeight: "700",
    letterSpacing: "3px",
    display: "block",
    marginBottom: "18px",
  },

  title: {
    fontSize: "52px",
    fontWeight: "800",
    lineHeight: "1.1",
    marginBottom: "30px",
    color: "#ffffff",
    fontFamily: "'Space Grotesk', 'Inter', sans-serif",
  },

  titleCentered: {
    fontSize: "50px",
    fontWeight: "800",
    marginBottom: "30px",
    color: "#ffffff",
    fontFamily: "'Space Grotesk', 'Inter', sans-serif",
  },

  text: {
    fontSize: "19px",
    lineHeight: "1.8",
    color: "#9fb3c8",
    marginBottom: "30px",
    maxWidth: "620px",
  },

  textCentered: {
    fontSize: "20px",
    lineHeight: "1.8",
    color: "#9fb3c8",
    maxWidth: "820px",
    margin: "0 auto 50px",
  },

  /* ================= LIST ================= */

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
    display: "flex",
    alignItems: "center",
    position: "relative",
    paddingLeft: "18px",
  },

  /* Manual dot indicator replacement */
  bulletDot: {
    position: "absolute",
    left: 0,
    width: "6px",
    height: "6px",
    background: "#00f0ff",
    borderRadius: "50%",
  },

  /* ================= IMAGES ================= */

  imageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    maxWidth: "560px",
    borderRadius: "20px",
    boxShadow:
      "0 30px 60px rgba(0,0,0,0.6), 0 0 40px rgba(0,240,255,0.12)",
    border: "1px solid rgba(0,240,255,0.12)",
  },

  /* ================= STATS ================= */

  gridStats: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    marginTop: "60px",
    flexWrap: "wrap",
  },

  statBox: {
    padding: "30px 50px",
    background: "rgba(0,240,255,0.04)",
    border: "1px solid rgba(0,240,255,0.12)",
    borderRadius: "16px",
    minWidth: "240px",
    textAlign: "center",
  },

  statTitle: {
    fontSize: "44px",
    color: "#00f0ff",
    marginBottom: "10px",
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: "700",
  },

  statText: {
    fontSize: "14px",
    letterSpacing: "0.5px",
    color: "#6f859e",
    textTransform: "uppercase",
  },

  /* ================= REFERENCE ================= */

  reference: {
    fontSize: "13px",
    marginTop: "35px",
    color: "#566a82",
    fontStyle: "italic",
  },

  link: {
    color: "#00f0ff",
    textDecoration: "none",
    marginLeft: "6px",
  },
};

