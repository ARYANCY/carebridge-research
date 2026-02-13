import React from "react";
import researchPaper from "../assets/CareBridge_The_3D_Digital_Twin_Framework_for_Proactive_Elderly_Care_Using_Real_Time_Sensor_Data_and_GenAIAnalytics.pdf";

export default function Footer() {
  return (
    <>
      <footer className="footer-wrapper py-5">
        <div className="container">

          <div className="row text-center text-md-start">

            {/* Brand + Research Download */}
            <div className="col-md-4 mb-4">
              <h4 className="footer-title">CareBridge</h4>

              <p className="footer-text">
                The 3D Digital Twin Framework for Proactive Elderly Care
                using Real-Time Sensor Data and GenAI Analytics.
              </p>

              <div className="download-section mt-4">

                <p className="download-text">
                  Access the complete technical documentation including:
                  clinical validation data, AI architecture diagrams,
                  predictive analytics benchmarks, environmental–cardiac
                  correlation evidence, regulatory pathway roadmap,
                  and 2030 healthcare impact projections.
                </p>

                <a
                  href={researchPaper}
                  download
                  className="download-btn"
                >
                  Download Full Research Paper (PDF)
                </a>

                <p className="analytics-text mt-3">
                  42+ pages · Peer-reviewed datasets · Edge-AI benchmarks ·
                  Rural deployment model · Federated learning framework.
                </p>

              </div>
            </div>

            {/* Platforms */}
            <div className="col-md-4 mb-4">
              <h5 className="footer-subtitle">Platforms</h5>
              <ul className="footer-links">
                <li>
                  <a
                    href="https://care-bridge-iota.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Prototype Platform
                  </a>
                </li>
                <li>
                  <a
                    href="https://carebridge-research.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Research Portal
                  </a>
                </li>
              </ul>
            </div>

            {/* Team */}
            <div className="col-md-4 mb-4">
              <h5 className="footer-subtitle">Team</h5>
              <ul className="footer-links">
                <li>
                  <a
                    href="https://www.linkedin.com/in/aryan-choudhury-37a5b937a/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Aryan Choudhury
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/rajdeep-mudiar-795ba91b6/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Rajdeep Mudiar
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/nishitadas21/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Nishita Das
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/zytact/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Arnab Chakraborty
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom */}
          <div className="footer-bottom text-center mt-5 pt-4">
            <p>
              © {new Date().getFullYear()} CareBridge ·
              AI-Driven Proactive Elderly Healthcare Infrastructure · India
            </p>
          </div>

        </div>
      </footer>

      <style jsx>{`

        .footer-wrapper {
          background: #0b1220;
          color: #ffffff;
          border-top: 1px solid rgba(0, 240, 255, 0.08);
        }

        .footer-title {
          font-size: 1.8rem;
          font-weight: 800;
          margin-bottom: 15px;
          background: linear-gradient(90deg, #00f5a0, #00d9f5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .footer-subtitle {
          font-size: 1.1rem;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .footer-text {
          font-size: 0.95rem;
          opacity: 0.8;
          line-height: 1.6;
        }

        .download-text {
          font-size: 0.9rem;
          opacity: 0.9;
          line-height: 1.6;
        }

        /* PREMIUM MEDICAL BUTTON */
        .download-btn {
          display: inline-block;
          margin-top: 15px;
          padding: 12px 24px;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.4px;
          border-radius: 12px;
          text-decoration: none;
          color: #ffffff;

          background: linear-gradient(
            135deg,
            #0052d4 0%,
            #4364f7 50%,
            #6fb1fc 100%
          );

          box-shadow:
            0 6px 22px rgba(67, 100, 247, 0.35),
            inset 0 0 8px rgba(255, 255, 255, 0.15);

          border: 1px solid rgba(255, 255, 255, 0.15);

          backdrop-filter: blur(6px);
        }

        .analytics-text {
          font-size: 0.8rem;
          opacity: 0.6;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 10px;
        }

        .footer-links a {
          text-decoration: none;
          color: #cbd5e1;
          font-size: 0.95rem;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          font-size: 0.85rem;
          opacity: 0.6;
        }

        @media (max-width: 768px) {
          .footer-title {
            font-size: 1.5rem;
          }

          .download-btn {
            width: 100%;
            text-align: center;
          }
        }

      `}</style>
    </>
  );
}
