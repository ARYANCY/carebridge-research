import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";

export default function Research() {
  return (
    <div className="bg-dark text-light">

      {/* HEADER */}
      <section className="container text-center py-5">
        <h1 className="display-4 fw-bold">Research & Validation</h1>
        <p className="lead text-secondary col-lg-8 mx-auto">
          Empirical validation across peer-reviewed datasets, latency benchmarks,
          and environmental-health correlation studies.
        </p>
      </section>

      {/* DATASETS TABLE */}
      <section className="container py-5 border-top">
        <h2 className="fw-bold mb-4">Clinical & Environmental Datasets</h2>

        <div className="table-responsive">
          <table className="table table-dark table-bordered">
            <thead>
              <tr>
                <th>Dataset</th>
                <th>Scope</th>
                <th>Source</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>MIT-BIH Arrhythmia Database</td>
                <td>48 annotated ECG recordings (15 arrhythmia classes)</td>
                <td>PhysioNet</td>
              </tr>
              <tr>
                <td>MIMIC-III</td>
                <td>58,000+ ICU admissions, longitudinal vitals</td>
                <td>MIT Lab for Computational Physiology</td>
              </tr>
              <tr>
                <td>CPCB AQI API</td>
                <td>804 real-time monitoring stations (15-min interval)</td>
                <td>Central Pollution Control Board</td>
              </tr>
              <tr>
                <td>NITI Aayog Senior Care 2024</td>
                <td>Policy & demographic ageing projections</td>
                <td>Government of India</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="small text-secondary">
          Sources:
          https://physionet.org |
          https://mimic.physionet.org |
          https://cpcb.nic.in |
          https://niti.gov.in
        </p>
      </section>

      {/* MODEL PERFORMANCE */}
      <section className="container py-5 border-top">
        <h2 className="fw-bold mb-4">Cardiac Event Detection Performance</h2>

        <div className="table-responsive">
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Value</th>
                <th>Benchmark Reference</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sensitivity</td>
                <td>95.3%</td>
                <td>Comparable to CNN-ECG benchmarks (Nature Med., 2019)</td>
              </tr>
              <tr>
                <td>Specificity</td>
                <td>91.7%</td>
                <td>Peer-reviewed ECG classifiers</td>
              </tr>
              <tr>
                <td>F1 Score</td>
                <td>92.1%</td>
                <td>Balanced precision-recall</td>
              </tr>
              <tr>
                <td>End-to-End Latency</td>
                <td>178 ms</td>
                <td>Edge inference optimized</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* MED-RAG VALIDATION */}
      <section className="container py-5 border-top">
        <h2 className="fw-bold mb-4">Med-RAG Expert Evaluation</h2>

        <div className="row g-4">

          <div className="col-md-3">
            <div className="p-4 border rounded text-center bg-secondary bg-opacity-10">
              <h4 className="text-info fw-bold">4.6 / 5</h4>
              <p>Medical Accuracy</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-4 border rounded text-center bg-secondary bg-opacity-10">
              <h4 className="text-info fw-bold">+45.2%</h4>
              <p>Contextual Relevance</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-4 border rounded text-center bg-secondary bg-opacity-10">
              <h4 className="text-info fw-bold">-30.4%</h4>
              <p>Hallucination Rate</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-4 border rounded text-center bg-secondary bg-opacity-10">
              <h4 className="text-info fw-bold">κ = 0.78</h4>
              <p>Fleiss’ Kappa (Substantial Agreement)</p>
            </div>
          </div>

        </div>

        <p className="small text-secondary mt-4">
          Fleiss’ κ interpretation reference:
          Landis & Koch (1977) Agreement Scale.
        </p>
      </section>

      {/* ENVIRONMENTAL CORRELATION TABLE */}
      <section className="container py-5 border-top">
        <h2 className="fw-bold mb-4">Environmental–Cardiac Correlation Evidence</h2>

        <div className="table-responsive">
          <table className="table table-dark table-bordered">
            <thead>
              <tr>
                <th>Environmental Factor</th>
                <th>Observed Effect</th>
                <th>Literature Evidence</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PM2.5 +10 μg/m³</td>
                <td>~12% ↑ cardiovascular mortality</td>
                <td>WHO Air Quality Guidelines 2021</td>
              </tr>
              <tr>
                <td>Heatwaves</td>
                <td>2x ↑ cardiac event risk</td>
                <td>The Lancet Countdown 2023</td>
              </tr>
              <tr>
                <td>AQI Spike 287</td>
                <td>SpO₂ drop detected pre-threshold</td>
                <td>Case observation + CPCB real-time data</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="small text-secondary">
          WHO AQ Guidelines:
          https://www.who.int/publications/i/item/9789240034228
          <br />
          Lancet Countdown:
          https://www.lancetcountdown.org
        </p>
      </section>
      <Footer/>

    </div>
  );
}
