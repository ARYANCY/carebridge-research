import { useEffect, useRef } from "react";
import "../styles/Hero.css";

export default function Hero() {
  const videoRef = useRef(null);
  const heroRef = useRef(null);
  const lastScrollY = useRef(window.scrollY);
  const lastTime = useRef(Date.now());

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play(); // start playback

    const handleScroll = () => {
      const now = Date.now();
      const currentScrollY = window.scrollY;

      const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);
      const timeDelta = now - lastTime.current;

      const scrollSpeed = scrollDelta / timeDelta; // px per ms

      // Map scroll speed to playbackRate
      let newRate = 0.3 + scrollSpeed * 5;

      // Clamp values
      newRate = Math.min(Math.max(newRate, 0.2), 3);

      video.playbackRate = newRate;

      lastScrollY.current = currentScrollY;
      lastTime.current = now;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-left">
        <h1 className="glow-title">CareBridge</h1>
        <p className="hero-sub">
          Your Care. Our Responsibility.
        </p>
      </div>

      <div className="hero-right">
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
    </section>
  );
}
