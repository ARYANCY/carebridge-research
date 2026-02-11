import { useEffect, useRef } from "react";
import "../styles/Hero.css";

export default function Hero() {
  const videoRef = useRef(null);
  const heroRef = useRef(null);
  const scrollTimeout = useRef(null);
  const lastScrollY = useRef(window.scrollY);
  const lastTime = useRef(Date.now());

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set a very slow base or pause initially
    video.playbackRate = 0; 

    const handleScroll = () => {
      const now = Date.now();
      const currentScrollY = window.scrollY;

      // Calculate Speed
      const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);
      const timeDelta = now - lastTime.current || 1;
      const scrollSpeed = scrollDelta / timeDelta;

      // 1. Play if moving
      if (video.paused) {
        video.play().catch(() => {}); // Catch browser policy blocks
      }

      // 2. Map scroll speed to playback rate
      // Minimum 0.5 when moving, max 4.0 for fast scrolls
      let newRate = 0.5 + scrollSpeed * 8;
      video.playbackRate = Math.min(Math.max(newRate, 0.5), 4);

      // 3. Clear existing timeout and set a new one to detect "Stop"
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        // Smoothly pause the video when scrolling stops
        video.pause();
        video.playbackRate = 0;
      }, 150); // 150ms of no scroll events = "stopped"

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
    <section className="hero" ref={heroRef}>
      <div className="hero-content">
        <div className="hero-left">
          <h1 className="glow-title">CareBridge</h1>
          <p className="hero-sub">Your Care. Our Responsibility.</p>
          <div className="scroll-indicator">Scroll to Explore Intelligence</div>
        </div>

        <div className="hero-right">
          <div className="video-glow-container">
            <video
              ref={videoRef}
              src="/body.mp4"
              muted
              loop
              playsInline
              preload="auto"
              className="hero-video"
            />
          </div>
        </div>
      </div>
    </section>
  );
}