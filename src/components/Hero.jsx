import "bootstrap/dist/css/bootstrap.min.css";
import { Activity } from "lucide-react";
import { useEffect, useState } from "react";
import Body from "./body";
import "../styles/Hero.css";

export default function Hero() {
  const quotes = [
    "Predict. Prevent. Protect.",
    "AI That Cares Before Crisis.",
    "Digital Twin for Human Life.",
    "From Data to Diagnosis.",
    "Intelligence for Elder Health."
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-wrapper position-relative overflow-hidden min-vh-100 d-flex align-items-center">
      <div className="ambient-glow top-0 start-0 translate-middle"></div>

      <div className="container position-relative z-2 py-5">
        <div className="row align-items-center gy-5">
          
          {/* Content */}
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <div className="d-inline-flex align-items-center bg-dark-soft border border-info rounded-pill px-3 py-1 mb-4">
              <Activity className="text-info me-2 pulse-icon" size={16} />
              <span className="small text-info text-uppercase fw-bold ls-2">
                Live Digital Twin Active
              </span>
            </div>

            <h1 className="display-3 fw-bold text-white mb-2">
              Care<span className="text-gradient">Bridge</span>
            </h1>

            {/* Rotating Quotes */}
            <div
              key={index}
              style={{
                minHeight: "40px",
                fontSize: "1.1rem",
                fontWeight: "600",
                letterSpacing: "1px",
                color: "#00f0ff",
                marginBottom: "1rem",
                transition: "all 0.5s ease",
              }}
            >
              {quotes[index]}
            </div>

            <p className="fs-5 text-secondary mb-5 pe-lg-5">
              Bridging the "Grey Divide" with proactive, Zero-UI healthcare
              for the next generation of elderly care.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
              <a
                href="https://care-bridge-iota.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <button className="btn btn-info btn-lg px-4 py-3 rounded-4 fw-bold shadow-cyan-sm">
                  Analyze Vitals
                </button>
              </a>
            </div>
          </div>

          {/* 3D Model */}
          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <div
              className="video-viewport shadow-cyan-lg w-100 position-relative"
              style={{ maxWidth: "520px", height: "520px" }}
            >
              <Body />

              <div className="overlay-ui p-4 d-flex flex-column justify-content-between position-absolute top-0 start-0 w-100 h-100">
                <div className="d-flex justify-content-between align-items-start">
                  <div className="badge bg-info-soft border border-info small">
                    3D Organ Mesh v1.0
                  </div>
                </div>
                <div className="scan-line"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
