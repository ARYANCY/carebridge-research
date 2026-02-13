import { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
    <section className="hero">
      <div className="container-fluid h-100">
        <div className="row align-items-center h-100 text-center text-md-start">

          {/* Left Section */}
          <div className="col-12 col-md-6 mb-5 mb-md-0">
            <h1 className="glow-title display-4 display-md-3 fw-bold">
              CareBridge
            </h1>
            <p className="hero-sub lead text-info">
              Your Care. Our Responsibility.
            </p>
            <div className="mt-3 small text-secondary">
              Scroll to Explore Intelligence
            </div>
          </div>

          {/* Right Section */}
          <div className="col-12 col-md-6 text-center">
            <div className="video-glow-container">
              <video
                ref={videoRef}
                src="/body.mp4"
                muted
                loop
                playsInline
                preload="auto"
                className="img-fluid hero-video"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
