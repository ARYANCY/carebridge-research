useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  let hasStarted = false;

  const handleScroll = () => {
    const now = Date.now();
    const currentScrollY = window.scrollY;

    // Start video only after user scrolls
    if (!hasStarted && currentScrollY > 10) {
      video.play();
      hasStarted = true;
    }

    if (!hasStarted) return;

    const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);
    const timeDelta = now - lastTime.current;

    const scrollSpeed = scrollDelta / timeDelta;

    let newRate = 0.3 + scrollSpeed * 5;
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
