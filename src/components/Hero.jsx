import { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MousePointer2, Activity } from "lucide-react";
import "../styles/Hero.css";

export default function Hero() {
  const videoRef = useRef(null);
  const scrollTimeout = useRef(null);
  const lastScrollY = useRef(window.scrollY);
  const lastTime = useRef(Date.now());

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 0;

    const handleScroll = () => {
      const now = Date.now();
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);
      const timeDelta = now - lastTime.current || 1;
      const scrollSpeed = scrollDelta / timeDelta;

      if (video.paused) {
        video.play().catch(() => {});
      }

      let newRate = 0.5 + scrollSpeed * 8;
      video.playbackRate = Math.min(Math.max(newRate, 0.5), 4);

      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        video.pause();
        video.playbackRate = 0;
      }, 150);

      lastScrollY.current = currentScrollY;
      lastTime.current = now;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <section className="hero-wrapper position-relative overflow-hidden vh-100 d-flex align-items-center">
      {/* Background Ambient Glows */}
      <div className="ambient-glow top-0 start-0 translate-middle"></div>
      
      <div className="container position-relative z-index-2">
        <div className="row align-items-center gy-5">
          
          {/* Content Column */}
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <div className="d-inline-flex align-items-center bg-dark-soft border border-info rounded-pill px-3 py-1 mb-4">
              <Activity className="text-info me-2 pulse-icon" size={16} />
              <span className="small text-info text-uppercase fw-bold ls-2">Live Digital Twin Active</span>
            </div>
            
            <h1 className="display-2 fw-bold text-white mb-3 tracking-tighter">
              Care<span className="text-gradient">Bridge</span>
            </h1>
            
            <p className="fs-4 text-secondary mb-5 pe-lg-5">
              Bridging the "Grey Divide" with proactive, Zero-UI healthcare for the next generation of elderly care.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
              <button className="btn btn-info btn-lg px-5 py-3 rounded-4 fw-bold shadow-cyan-sm">
                Analyze Vitals
              </button>
              <div className="d-flex align-items-center justify-content-center text-secondary">
                <MousePointer2 className="me-2 anim-bounce-y" size={18} />
                <span className="small">Scroll to interact with the Twin</span>
              </div>
            </div>
          </div>

          {/* Video Column */}
          <div className="col-12 col-lg-6">
            <div className="video-viewport shadow-cyan-lg">
              <video
                ref={videoRef}
                src="/body.mp4"
                muted
                loop
                playsInline
                preload="auto"
                className="hero-video-element"
              />
              <div className="overlay-ui p-4 d-flex flex-column justify-content-between">
                <div className="d-flex justify-content-between align-items-start">
                  <div className="badge bg-info-soft border border-info">3D Organ Mesh v1.0</div>
                  <div className="small text-info fw-mono">LATENCY: 87ms</div>
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