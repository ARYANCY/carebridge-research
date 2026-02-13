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
import { Heart, Activity, Wind, ShieldCheck, Zap, Database } from "lucide-react";

// Assets
import digitalTwin from "../assets/digital_twin_hero.png";
import esp32Img from "../assets/esp32_hardware.png";
import heartImg from "../assets/heart_3d_mesh.png";
import environmentalImg from "../assets/environmental_impact.png";
import roadmapImg from "../assets/roadmap_path.png";
import privacyImg from "../assets/privacy_switch.jpeg";

import Hero from "../components/Hero";
import Footer from "../components/Footer";

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, RadialLinearScale, Title, Tooltip, Legend, Filler);

export default function Home() {
  const ragData = {
    labels: ["Medical Accuracy", "Contextual Relevance", "Actionability", "Hallucination Reduction"],
    datasets: [{
      label: "Med-RAG Augmented",
      data: [4.6, 4.5, 4.4, 4.8],
      backgroundColor: "rgba(0, 240, 255, 0.2)",
      borderColor: "#00f0ff",
      borderWidth: 2,
    }]
  };

  const accuracyData = {
    labels: ["Sensitivity", "Specificity", "F1 Score"],
    datasets: [{
      label: "CareBridge Model Performance",
      data: [95.3, 91.7, 92.1],
      backgroundColor: ["#00f0ff", "#7000ff", "#ff007a"],
    }]
  };

  return (
    <div style={styles.pageWrapper}>
      <Hero />

      {/* 01. ABOUT US */}
      <section style={styles.sectionLarge} className="container text-center d-flex flex-column justify-content-center">
        <span style={styles.subtitle}>About Us</span>
        <h2 className="fw-bold display-4 mb-4">Bridging the Grey Divide</h2>
        <p className="text-secondary fs-5 mx-auto" style={{ maxWidth: "850px" }}>
          [cite_start]CareBridge is a 3D Digital Twin platform from Gauhati University designed to make proactive care actionable for India's 173 million seniors[cite: 9, 296]. [cite_start]We focus on a Zero-UI paradigm that eliminates digital literacy barriers[cite: 15, 77].
        </p>
        <img src={digitalTwin} alt="Digital Twin Concept" className="img-fluid rounded-5 shadow-lg mt-5 mx-auto" style={{maxWidth: '80%'}} />
      </section>

      {/* 03. TECHNOLOGY: EDGE SENSING */}
      <section style={styles.sectionLarge} className="container border-bottom d-flex align-items-center">
        <div className="row align-items-center gy-5 flex-lg-row-reverse w-100">
          <div className="col-12 col-lg-6 ps-lg-5">
            <span style={styles.subtitle}>Technology</span>
            <h2 className="fw-bold display-5 mb-4">ESP32 Perception Layer</h2>
            [cite_start]<p className="text-secondary">Continuous, passive monitoring using medical-grade sensors with 400Hz sampling rates[cite: 26, 27].</p>
            <div className="d-flex align-items-center mb-4">
              <Heart className="text-info me-3" size={32} /> 
              <div>
                <span className="d-block fw-bold">MAX30102 Cardiac Oximetry</span>
                [cite_start]<span className="small text-secondary">High-resolution pulse and SpO2 capture[cite: 26, 29].</span>
              </div>
            </div>
            
            <div className="d-flex align-items-center">
              <Wind className="text-info me-3" size={32} /> 
              <div>
                <span className="d-block fw-bold">Environmental Awareness</span>
                [cite_start]<span className="small text-secondary">MQ-135 Air Quality & DHT22 monitoring[cite: 32].</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 text-center">
            <img src={esp32Img} alt="Hardware Stack" className="img-fluid rounded-4 shadow-cyan" />
          </div>
        </div>
      </section>

      {/* 04. TECHNOLOGY: MED-RAG BRAIN */}
      <section style={styles.sectionLarge} className="container border-bottom d-flex align-items-center">
        <div className="row align-items-center gy-5 w-100">
          <div className="col-12 col-lg-6 pe-lg-5">
            <h2 className="fw-bold display-5 mb-4">Med-RAG Brain</h2>
            [cite_start]<p className="text-secondary">Evidence-grounded generation using Gemini 1.5 Pro and Pinecone vector databases[cite: 50, 58].</p>
            <ul className="list-unstyled mt-4">
              [cite_start]<li className="mb-3 d-flex align-items-center"><Activity className="text-primary me-2" /> ● 87ms cloud latency for real-time response [cite: 58]</li>
              [cite_start]<li className="mb-3 d-flex align-items-center"><ShieldCheck className="text-primary me-2" /> ● Hallucination mitigation via clinical entity extraction [cite: 65, 67]</li>
            </ul>
            
          </div>
          <div className="col-12 col-lg-6" style={{ height: '450px' }}>
            <Radar data={ragData} options={radarOptions} />
          </div>
        </div>
      </section>

      {/* 05. TECHNOLOGY: ZERO-UI DESIGN */}
      <section style={styles.sectionLarge} className="container text-center border-bottom d-flex flex-column justify-content-center">
        <span style={styles.subtitle}>Visual Innovation</span>
        <h2 className="fw-bold display-5 mb-4">The 3D Digital Twin</h2>
        [cite_start]<p className="text-secondary mb-5">Interpretation via color and spatial context—no text required[cite: 78].</p>
        <div className="row g-5 align-items-center">
          <div className="col-md-4">
            <div className="p-5 border rounded-4 bg-dark-soft">
              [cite_start]<h5 className="text-info mb-3">Cardiac Pulse [cite: 76]</h5>
              [cite_start]<p className="small text-secondary">A pulsating mesh that shifts from Blue (hypoxia) to Red (normal)[cite: 76].</p>
            </div>
          </div>
          <div className="col-md-4">
            <img src={heartImg} alt="3D Heart Mesh" className="img-fluid floating-anim" />
          </div>
          <div className="col-md-4">
            <div className="p-5 border rounded-4 bg-dark-soft">
              [cite_start]<h5 className="text-info mb-3">AQI Exposure [cite: 76]</h5>
              [cite_start]<p className="small text-secondary">Volumetric particle density visualization for clear situational awareness[cite: 76].</p>
            </div>
          </div>
        </div>
      </section>

      {/* 06. RESEARCH: CLINICAL VALIDATION */}
      <section style={styles.sectionLarge} className="container border-bottom d-flex align-items-center">
        <div className="row align-items-center gy-5 w-100">
          <div className="col-12 col-lg-6" style={{ height: '450px' }}>
            <Bar data={accuracyData} options={barOptions} />
          </div>
          <div className="col-12 col-lg-6 ps-lg-5">
            <span style={styles.subtitle}>Research</span>
            <h2 className="fw-bold display-5 mb-4">Gold Standard Training</h2>
            [cite_start]<p className="text-secondary mb-4">Validated against the MIT-BIH Arrhythmia Database and MIMIC-III ICU records[cite: 89, 100].</p>
            <div className="p-4 rounded-4 bg-dark-soft border-start border-info border-5">
              <h3 className="text-info fw-bold">95.3%</h3>
              [cite_start]<p className="m-0">Clinical Sensitivity for Cardiac Event Detection[cite: 126].</p>
            </div>
          </div>
        </div>
      </section>

      {/* 07. RESEARCH: ENVIRONMENTAL CORRELATION */}
      <section style={styles.sectionLarge} className="container border-bottom d-flex align-items-center">
        <div className="row align-items-center gy-5 flex-lg-row-reverse w-100">
          <div className="col-12 col-lg-6 ps-lg-5">
            <h2 className="fw-bold display-5 mb-4">Predictive Lead Time</h2>
            [cite_start]<p className="text-secondary">Detecting cardiac stress 2-3 hours before symptoms by correlating AQI and thermal triggers[cite: 21].</p>
            <div className="p-4 border rounded-4 bg-dark-soft mt-4">
              <Zap className="text-warning mb-3" size={32} />
              [cite_start]<h6>Case Study: Oct 2024 [cite: 151]</h6>
              [cite_start]<p className="small text-secondary mb-0">System identified respiratory stress and issued an alert 23 mins before SpO2 reached the clinical threshold[cite: 158].</p>
            </div>
            
          </div>
          <div className="col-12 col-lg-6 text-center">
            <img src={environmentalImg} alt="Correlation Analysis" className="img-fluid rounded-4 shadow-lg" />
          </div>
        </div>
      </section>

      {/* 08. ROADMAP */}
      <section style={styles.sectionLarge} className="container border-bottom d-flex align-items-center">
        <div className="row align-items-center gy-5 w-100">
          <div className="col-12 col-lg-6 pe-lg-5">
            <span style={styles.subtitle}>Roadmap</span>
            <h2 className="fw-bold display-5 mb-4">National Integration</h2>
            <div className="ms-4 mt-5">
              <div className="mb-5 border-start border-info border-4 ps-4">
                [cite_start]<p className="m-0 fw-bold fs-5">Q4 2026: ABDM Integration [cite: 214]</p>
                [cite_start]<p className="text-secondary">Bidirectional data sync via FHIR R4 standard[cite: 224, 226].</p>
              </div>
              <div className="border-start border-info border-4 ps-4">
                [cite_start]<p className="m-0 fw-bold fs-5">Q4 2027: Rural BLE Mesh [cite: 235]</p>
                [cite_start]<p className="text-secondary">Offline synchronization for 50+ villages in Assam and Maharashtra[cite: 251, 252].</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 text-center">
            <img src={roadmapImg} alt="Strategic Path" className="img-fluid rounded-4" />
          </div>
        </div>
      </section>

      {/* 09. IMPACT */}
      <section style={styles.sectionLarge} className="container text-center border-bottom d-flex flex-column justify-content-center">
        <span style={styles.subtitle}>Impact</span>
        <h2 className="fw-bold display-5 mb-5">Economic Resilience</h2>
        <div className="row g-5 mt-4">
          <div className="col-md-4">
            <div className="p-5 border rounded-4 bg-dark-soft shadow-hover">
              <h3 className="text-info display-6 fw-bold">38%</h3>
              [cite_start]<p className="text-secondary text-uppercase small ls-2">Hospitalization Reduction [cite: 176]</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-5 border rounded-4 bg-dark-soft shadow-hover">
              <h3 className="text-info display-6 fw-bold">₹31,050</h3>
              [cite_start]<p className="text-secondary text-uppercase small ls-2">Annual Savings Per Patient [cite: 177]</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-5 border rounded-4 bg-dark-soft shadow-hover">
              <h3 className="text-info display-6 fw-bold">83%</h3>
              [cite_start]<p className="text-secondary text-uppercase small ls-2">Caregiver Accuracy [cite: 179]</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. PRIVACY */}
      <section style={styles.sectionLarge} className="container d-flex align-items-center">
        <div className="row align-items-center gy-5 flex-lg-row-reverse w-100">
          <div className="col-12 col-lg-6 ps-lg-5">
            <span style={styles.subtitle}>Privacy</span>
            <h2 className="fw-bold display-5 mb-4">Responsible AI</h2>
            [cite_start]<p className="text-secondary mb-4">Privacy by design: No audio/video, local anomaly detection on-device, and AES-256 encryption[cite: 271].</p>
            <div className="d-flex align-items-center p-3 rounded-3 bg-dark-soft">
              <ShieldCheck className="text-success me-3" size={40} /> 
              <div>
                <span className="fw-bold d-block">Physical Opt-Out Switch</span>
                [cite_start]<span className="small text-secondary">Immediate manual disconnection control[cite: 278].</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 text-center">
            <img src={privacyImg} alt="Privacy Controls" className="img-fluid rounded-4 shadow-lg" style={{maxHeight: '400px'}} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const styles = {
  pageWrapper: {
    background: "radial-gradient(circle at 20% 10%, #0a1628 0%, #02060f 65%)",
    color: "#e6faff",
    fontFamily: "'Inter', sans-serif",
    minHeight: "100vh",
  },
  sectionLarge: {
    paddingTop: "120px",
    paddingBottom: "120px",
    minHeight: "80vh",
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
      ticks: { display: false } 
    } 
  },
  plugins: { legend: { display: false } }
};

const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: { 
    y: { grid: { color: "rgba(255, 255, 255, 0.05)" }, ticks: { color: "#e6faff" } }, 
    x: { ticks: { color: "#e6faff" } } 
  },
  plugins: { legend: { display: false } }
};