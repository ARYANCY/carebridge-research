import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Roadmap() {
  return (
    <div className="bg-dark text-light">

      {/* HEADER */}
      <section className="container text-center py-5">
        <h1 className="display-4 fw-bold">Roadmap & Deployment</h1>
        <p className="lead text-secondary col-lg-8 mx-auto">
          Clinical validation, ABDM integration, and rural scalability aligned
          with Indian regulatory frameworks through 2028.
        </p>
      </section>

      {/* PHASE TABLE OVERVIEW */}
      <section className="container py-5">
        <h2 className="fw-bold mb-4">Deployment Timeline (2026–2028)</h2>

        <div className="table-responsive">
          <table className="table table-dark table-bordered align-middle">
            <thead>
              <tr>
                <th>Phase</th>
                <th>Timeline</th>
                <th>Objective</th>
                <th>Regulatory Alignment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Phase 1</td>
                <td>2026</td>
                <td>300-patient RCT Validation</td>
                <td>CDSCO Class IIa</td>
              </tr>
              <tr>
                <td>Phase 2</td>
                <td>2026–27</td>
                <td>ABDM Interoperability</td>
                <td>HL7 FHIR R4</td>
              </tr>
              <tr>
                <td>Phase 3</td>
                <td>2027</td>
                <td>Rural BLE Mesh Scaling</td>
                <td>DPDP Act 2023</td>
              </tr>
              <tr>
                <td>Phase 4</td>
                <td>2028+</td>
                <td>Predictive AI Deployment</td>
                <td>Federated Learning</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* PHASE DETAILS */}
      <section className="container py-5 border-top">
        <div className="row g-5">

          <div className="col-lg-6">
            <h3 className="fw-bold">Phase 1 — Clinical Validation</h3>
            <ul>
              <li>300 elderly patients (≥2 chronic conditions)</li>
              <li>6-month randomized controlled trial</li>
              <li>Primary endpoint: hospitalization rate</li>
              <li>Aligned with CDSCO medical device classification (Class IIa)</li>
            </ul>

            <p className="small text-secondary">
              Reference: CDSCO Medical Device Rules, 2017 —
              https://cdsco.gov.in
            </p>
          </div>

          <div className="col-lg-6">
            <h3 className="fw-bold">Phase 2 — ABDM Integration</h3>
            <ul>
              <li>HL7 FHIR R4 compliant APIs</li>
              <li>Observation & Condition resource mapping</li>
              <li>15-min bidirectional sync</li>
              <li>Consent Manager integration</li>
            </ul>

            <p className="small text-secondary">
              Reference: ABDM Sandbox Documentation —
              https://abdm.gov.in
            </p>
          </div>

        </div>
      </section>

      {/* RURAL SCALING + DATA TABLE */}
      <section className="container py-5 border-top">
        <h3 className="fw-bold mb-4">Phase 3 — Rural Infrastructure Model</h3>

        <div className="table-responsive">
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th>Component</th>
                <th>Specification</th>
                <th>Cost (INR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BLE Mesh Network</td>
                <td>Bluetooth 5.0+</td>
                <td>₹800 / patient (amortized)</td>
              </tr>
              <tr>
                <td>Gateway Tablet</td>
                <td>72-hour battery</td>
                <td>₹12,000</td>
              </tr>
              <tr>
                <td>Data Format</td>
                <td>CBOR compressed (250KB/day)</td>
                <td>Minimal bandwidth</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="small text-secondary">
          Rural health infrastructure reference: National Health Mission —
          https://nhm.gov.in
        </p>
      </section>

      {/* 2030 IMPACT PROJECTION */}
      <section className="container py-5 border-top text-center">
        <h2 className="fw-bold mb-5">2030 Impact Projection</h2>

        <div className="row g-4 justify-content-center">

          <div className="col-md-4">
            <div className="p-4 border rounded bg-secondary bg-opacity-10">
              <h3 className="text-info display-6 fw-bold">100,000+</h3>
              <p>Projected Patients</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 border rounded bg-secondary bg-opacity-10">
              <h3 className="text-info display-6 fw-bold">38,000</h3>
              <p>Hospitalizations Prevented / year</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 border rounded bg-secondary bg-opacity-10">
              <h3 className="text-info display-6 fw-bold">₹310 Cr</h3>
              <p>Estimated Annual Savings</p>
            </div>
          </div>

        </div>

        <p className="mt-5 small text-secondary col-lg-8 mx-auto">
          WHO estimates that digital health interventions can reduce
          hospitalization rates by 20–40% in chronic disease cohorts.
          Source: WHO Global Strategy on Digital Health 2020–2025 —
          https://who.int/publications/i/item/9789240020924
        </p>
      </section>

      {/* DATA SOURCES */}
      <section className="container py-5 border-top">
        <h4 className="fw-bold">Evidence & Data Sources</h4>
        <ul>
          <li>UNFPA India Ageing Report 2023 — https://india.unfpa.org</li>
          <li>WHO Digital Health Strategy 2020–2025 — https://who.int</li>
          <li>ABDM Official Documentation — https://abdm.gov.in</li>
          <li>CDSCO Medical Device Rules 2017 — https://cdsco.gov.in</li>
          <li>Digital Personal Data Protection Act 2023 — https://meity.gov.in</li>
        </ul>
      </section>

    </div>
  );
}
