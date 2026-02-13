import React from "react";
import Footer from "../components/Footer";
export default function Impact() {
  return (
    <>
      <section className="impact-wrapper py-5">

        {/* Section 1 – Problem Scale */}
        <div className="container text-center mb-5">
          <h2 className="section-title mb-4">The Growing Crisis</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="impact-card p-4">
                <h3>173M+</h3>
                <p>Indian seniors by 2026 (UNFPA 2023)</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="impact-card p-4">
                <h3>70%</h3>
                <p>Digital literacy gap among elderly</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="impact-card p-4">
                <h3>75%</h3>
                <p>Suffer from chronic diseases</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 – System Gap */}
        <div className="container text-center mb-5">
          <h2 className="section-title mb-4">Current System Gap</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="impact-card p-4">
                <p>Monitoring systems are reactive and threshold-based.</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="impact-card p-4">
                <p>No correlation between AQI, heat & cardiac stress.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 – Our Innovation */}
        <div className="container text-center mb-5">
          <h2 className="section-title mb-4">CareBridge Innovation</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="impact-card p-4">
                <p>Zero-UI Passive Monitoring</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="impact-card p-4">
                <p>3D Digital Twin Visualization</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="impact-card p-4">
                <p>Predictive Alerts (2–3 hrs early)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 – AI & Intelligence */}
        <div className="container text-center mb-5">
          <h2 className="section-title mb-4">AI & Intelligence Layer</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="impact-card p-4">
                <p>GenAI-powered Med-RAG Clinical Reasoning</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="impact-card p-4">
                <p>Environmental–Vital Correlation Engine</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5 – Rural Accessibility */}
        <div className="container text-center mb-5">
          <h2 className="section-title mb-4">Rural & Offline Ready</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="impact-card p-4">
                <p>Edge AI Inference (Offline)</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="impact-card p-4">
                <p>Bluetooth Store & Forward (24h caching)</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="impact-card p-4">
                <p>LoRa Mesh Network Scaling</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6 – Impact Vision */}
        <div className="container text-center">
          <h2 className="section-title mb-4">Our Vision</h2>
          <div className="impact-card p-5">
            <p>
              Transform elderly monitoring from reactive emergency response
              to proactive, predictive risk prevention using Real-Time
              Sensor Data and GenAI Analytics.
            </p>
          </div>
        </div>



      </section>
        <Footer/>

      {/* CSS inside JSX */}
      <style jsx>{`
        .impact-wrapper {
          background: #0f172a;
          color: white;
        }

        .section-title {
          font-weight: 700;
          font-size: 2rem;
          background: linear-gradient(90deg, #00f5a0, #00d9f5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .impact-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          backdrop-filter: blur(10px);
          transition: 0.3s ease;
        }

        .impact-card h3 {
          font-size: 2rem;
          font-weight: bold;
          color: #00f5a0;
        }

        .impact-card p {
          margin: 0;
          font-size: 1rem;
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 1.6rem;
          }

          .impact-card {
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </>
  );
}
