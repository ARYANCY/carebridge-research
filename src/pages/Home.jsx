import React from "react";
import Hero from "../components/Hero";
import "bootstrap/dist/css/bootstrap.min.css";

import digitalTwin from "../assets/digital_twin_human.png";
import elderlyGraph from "../assets/elderly_demographic_graph.jpeg";
import aqiOverlay from "../assets/aqi_heat_overlay_visual.png";

export default function Home() {
  return (
    <div style={styles.pageWrapper}>
      <Hero />

      {/* SECTION 1 */}
      <section className="container py-5 border-bottom">
        <div className="row align-items-center gy-5">
          
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <span style={styles.subtitle}>The Grey Divide Crisis</span>
            <h2 className="fw-bold display-5 mb-4">
              173 Million Elderly. A Reactive Healthcare System.
            </h2>
            <p className="text-secondary fs-5">
              India’s elderly population will reach 173 million by 2026.
              75% manage two or more chronic diseases under fragmented,
              reactive care systems.
            </p>

            <ul className="list-unstyled mt-4">
              <li className="mb-3">₹45,000+ per preventable hospitalization</li>
              <li className="mb-3">70% digital literacy gap among caregivers</li>
              <li>No environmental-health correlation in current systems</li>
            </ul>
          </div>

          <div className="col-12 col-lg-6 text-center">
            <img src={elderlyGraph} alt="Demographic Growth" className="img-fluid rounded-4 shadow" />
          </div>

        </div>
      </section>

      {/* SECTION 2 */}
      <section className="container py-5 border-bottom bg-dark">
        <div className="row align-items-center gy-5 flex-lg-row-reverse">

          <div className="col-12 col-lg-6 text-center text-lg-start">
            <span style={styles.subtitle}>Core Innovation</span>
            <h2 className="fw-bold display-5 mb-4">
              Environmental–Vital Correlation Engine
            </h2>
            <p className="text-secondary fs-5">
              CareBridge introduces a Zero-UI 3D Digital Twin that correlates
              environmental stressors with cardiovascular biomarkers in real time.
            </p>

            <ul className="list-unstyled mt-4">
              <li className="mb-3">2–3 hour predictive cardiac risk window</li>
              <li className="mb-3">Passive IoT-based vitals capture</li>
              <li>Explainable Med-RAG intelligence layer</li>
            </ul>
          </div>

          <div className="col-12 col-lg-6 text-center">
            <img src={digitalTwin} alt="Digital Twin" className="img-fluid rounded-4 shadow" />
          </div>

        </div>
      </section>

      {/* SECTION 3 */}
      <section className="container py-5 text-center">
        <span style={styles.subtitle}>Why It Matters</span>
        <h2 className="fw-bold display-5 mb-4">
          Environment Is a Silent Cardiac Multiplier
        </h2>
        <p className="text-secondary fs-5 mx-auto" style={{ maxWidth: "800px" }}>
          A 10 μg/m³ increase in PM₂.₅ raises cardiovascular mortality by ~12%.
          Heatwaves double cardiac event risk in elderly populations.
        </p>

        <div className="row justify-content-center mt-5 g-4">
          <div className="col-12 col-md-4">
            <div className="p-4 border rounded-4 bg-dark">
              <h3 className="text-info fw-bold display-6">+12%</h3>
              <p className="small text-uppercase text-secondary">
                CVD mortality per 10 μg/m³ PM₂.₅
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="p-4 border rounded-4 bg-dark">
              <h3 className="text-info fw-bold display-6">2x</h3>
              <p className="small text-uppercase text-secondary">
                Heart attack risk in heatwaves
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="container py-5 border-top">
        <div className="row align-items-center gy-5">

          <div className="col-12 col-lg-6 text-center text-lg-start">
            <span style={styles.subtitle}>Projected Clinical Impact</span>
            <h2 className="fw-bold display-5 mb-4">
              From Reaction to Prevention
            </h2>

            <ul className="list-unstyled mt-4">
              <li className="mb-3">38% projected hospitalization reduction</li>
              <li className="mb-3">₹31,050 annual savings per patient</li>
              <li>83% interpretation accuracy in low-literacy cohort</li>
            </ul>
          </div>

          <div className="col-12 col-lg-6 text-center">
            <img src={aqiOverlay} alt="Environmental Overlay" className="img-fluid rounded-4 shadow" />
          </div>

        </div>
      </section>

    </div>
  );
}

const styles = {
  pageWrapper: {
    background: "radial-gradient(circle at 20% 10%, #0a1628 0%, #02060f 65%)",
    color: "#e6faff",
    fontFamily: "'Inter', sans-serif",
  },
  subtitle: {
    color: "#00f0ff",
    textTransform: "uppercase",
    fontSize: "13px",
    fontWeight: "700",
    letterSpacing: "3px",
    display: "block",
    marginBottom: "18px",
  },
};
