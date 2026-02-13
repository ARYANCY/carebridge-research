import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar, Radar } from "react-chartjs-2";
import { Heart, Activity, Wind, ShieldCheck, Zap } from "lucide-react";

// Assets
import digitalTwin from "../assets/digital_twin_hero.png";
import esp32Img from "../assets/esp32_hardware.png";
import heartImg from "../assets/heart_3d_mesh.png";
import environmentalImg from "../assets/environmental_impact.png";
import roadmapImg from "../assets/roadmap_path.png";
import privacyImg from "../assets/privacy_switch.jpeg";

import Hero from "../components/Hero";
import Footer from "../components/Footer";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Home() {
  const ragData = {
    labels: [
      "Medical Accuracy",
      "Contextual Relevance",
      "Actionability",
      "Hallucination Reduction",
    ],
    datasets: [
      {
        label: "Med-RAG Augmented",
        data: [4.6, 4.5, 4.4, 4.8],
        backgroundColor: "rgba(0, 240, 255, 0.2)",
        borderColor: "#00f0ff",
        borderWidth: 2,
      },
    ],
  };

  const accuracyData = {
    labels: ["Sensitivity", "Specificity", "F1 Score"],
    datasets: [
      {
        label: "CareBridge Model Performance",
        data: [95.3, 91.7, 92.1],
        backgroundColor: ["#00f0ff", "#7000ff", "#ff007a"],
      },
    ],
  };

  return (
    <div style={styles.pageWrapper}>
      <Hero />

      {/* ABOUT */}
      <section style={styles.sectionLarge} className="container text-center d-flex flex-column justify-content-center">
        <span style={styles.subtitle}>About Us</span>
        <h2 className="fw-bold display-4 mb-4">Bridging the Grey Divide</h2>
        <p className="text-secondary fs-5 mx-auto" style={{ maxWidth: "850px" }}>
          CareBridge is a 3D Digital Twin platform from Gauhati University
          designed to make proactive care actionable for India's 173 million
          seniors. We focus on a Zero-UI paradigm that eliminates digital
          literacy barriers.
        </p>
        <img
          src={digitalTwin}
          alt="Digital Twin Concept"
          className="img-fluid rounded-5 shadow-lg mt-5 mx-auto hover-scale"
          style={{ maxWidth: "80%" }}
        />
      </section>

      {/* EDGE SENSING */}
      <section style={styles.sectionLarge} className="container border-bottom d-flex align-items-center">
        <div className="row align-items-center gy-5 flex-lg-row-reverse w-100">
          <div className="col-12 col-lg-6 ps-lg-5">
            <span style={styles.subtitle}>Technology</span>
            <h2 className="fw-bold display-5 mb-4">ESP32 Perception Layer</h2>
            <p className="text-secondary">
              Continuous passive monitoring using medical-grade sensors with
              400Hz sampling rates.
            </p>

            <div className="d-flex align-items-center mb-4">
              <Heart className="text-info me-3" size={32} />
              <div>
                <span className="d-block fw-bold">
                  MAX30102 Cardiac Oximetry
                </span>
                <span className="small text-secondary">
                  High-resolution pulse and SpO2 capture.
                </span>
              </div>
            </div>

            <div className="d-flex align-items-center mt-4">
              <Wind className="text-info me-3" size={32} />
              <div>
                <span className="d-block fw-bold">
                  Environmental Awareness
                </span>
                <span className="small text-secondary">
                  MQ-135 Air Quality & DHT22 monitoring.
                </span>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 text-center">
            <img
              src={esp32Img}
              alt="Hardware Stack"
              className="img-fluid rounded-4 shadow-cyan"
            />
          </div>
        </div>
      </section>

      {/* MED-RAG */}
      <section style={styles.sectionLarge} className="container border-bottom d-flex align-items-center">
        <div className="row align-items-center gy-5 w-100">
          <div className="col-12 col-lg-6 pe-lg-5">
            <h2 className="fw-bold display-5 mb-4">Med-RAG Brain</h2>
            <p className="text-secondary">
              Evidence-grounded generation using Gemini 1.5 Pro and Pinecone
              vector databases.
            </p>

            <ul className="list-unstyled mt-4">
              <li className="mb-3 d-flex align-items-center">
                <Activity className="text-primary me-2" />
                ● 87ms cloud latency for real-time response
              </li>
              <li className="mb-3 d-flex align-items-center">
                <ShieldCheck className="text-primary me-2" />
                ● Hallucination mitigation via clinical entity extraction
              </li>
            </ul>
          </div>

          <div className="col-12 col-lg-6" style={{ height: "450px" }}>
            <Radar data={ragData} options={radarOptions} />
          </div>
        </div>
      </section>

      {/* CLINICAL VALIDATION */}
      <section style={styles.sectionLarge} className="container border-bottom d-flex align-items-center">
        <div className="row align-items-center gy-5 w-100">
          <div className="col-12 col-lg-6" style={{ height: "450px" }}>
            <Bar data={accuracyData} options={barOptions} />
          </div>

          <div className="col-12 col-lg-6 ps-lg-5">
            <span style={styles.subtitle}>Research</span>
            <h2 className="fw-bold display-5 mb-4">
              Gold Standard Training
            </h2>
            <p className="text-secondary mb-4">
              Validated against the MIT-BIH Arrhythmia Database and MIMIC-III
              ICU records.
            </p>

            <div className="p-4 rounded-4 bg-dark-soft border-start border-info border-5">
              <h3 className="text-info fw-bold">95.3%</h3>
              <p className="m-0">
                Clinical Sensitivity for Cardiac Event Detection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVACY */}
      <section style={styles.sectionLarge} className="container d-flex align-items-center">
        <div className="row align-items-center gy-5 flex-lg-row-reverse w-100">
          <div className="col-12 col-lg-6 ps-lg-5">
            <span style={styles.subtitle}>Privacy</span>
            <h2 className="fw-bold display-5 mb-4">Responsible AI</h2>
            <p className="text-secondary mb-4">
              Privacy by design: No audio/video, local anomaly detection
              on-device, and AES-256 encryption.
            </p>

            <div className="d-flex align-items-center p-3 rounded-3 bg-dark-soft">
              <ShieldCheck className="text-success me-3" size={40} />
              <div>
                <span className="fw-bold d-block">
                  Physical Opt-Out Switch
                </span>
                <span className="small text-secondary">
                  Immediate manual disconnection control.
                </span>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 text-center">
            <img
              src={privacyImg}
              alt="Privacy Controls"
              className="img-fluid rounded-4 shadow-lg"
              style={{ maxHeight: "400px" }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const styles = {
  pageWrapper: {
    background:
      "radial-gradient(circle at 20% 10%, #0a1628 0%, #02060f 65%)",
    color: "#e6faff",
    fontFamily: "'Inter', sans-serif",
    minHeight: "100vh",
  },
  sectionLarge: {
    paddingTop: "140px",
    paddingBottom: "140px",
    minHeight: "85vh",
  },
  subtitle: {
    color: "#00f0ff",
    textTransform: "uppercase",
    fontSize: "14px",
    fontWeight: "700",
    letterSpacing: "4px",
    display: "block",
    marginBottom: "20px",
  },
};

const radarOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      grid: { color: "rgba(255, 255, 255, 0.1)" },
      angleLines: { color: "rgba(255, 255, 255, 0.1)" },
      pointLabels: { color: "#e6faff", font: { size: 14 } },
      ticks: { display: false },
    },
  },
  plugins: { legend: { display: false } },
};

const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      grid: { color: "rgba(255, 255, 255, 0.05)" },
      ticks: { color: "#e6faff" },
    },
    x: { ticks: { color: "#e6faff" } },
  },
  plugins: { legend: { display: false } },
};
