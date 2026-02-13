import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer-wrapper py-5">
        <div className="container">

          <div className="row text-center text-md-start">

            {/* Brand */}
            <div className="col-md-4 mb-4">
              <h4 className="footer-title">CareBridge</h4>
              <p className="footer-text">
                The 3D Digital Twin Framework for Proactive Elderly Care
                using Real-Time Sensor Data and GenAI Analytics.
              </p>
            </div>

            {/* Research & Prototype */}
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

            {/* Team LinkedIn */}
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

          {/* Bottom Bar */}
          <div className="footer-bottom text-center mt-4 pt-4">
            <p>
              © {new Date().getFullYear()} CareBridge · Built for Proactive
              Elderly Healthcare in India
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
          font-weight: 700;
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
        }
      `}</style>
    </>
  );
}
