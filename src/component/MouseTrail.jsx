import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const images = [
  "https://assets.codepen.io/16327/Revised+Flair.png",
  "https://assets.codepen.io/16327/Revised+Flair-1.png",
  "https://assets.codepen.io/16327/Revised+Flair-2.png",
  "https://assets.codepen.io/16327/Revised+Flair-3.png",
];

const MouseTrail = () => {
  const trailRef = useRef([]);

  useEffect(() => {
    let current = 0;

    const handleMove = (e) => {
      const img = trailRef.current[current];

      if (!img) return;

      gsap.killTweensOf(img);

      gsap.set(img, {
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        scale: 0,
        rotation: gsap.utils.random(-30, 30),
      });

      gsap
        .timeline()
        .to(img, {
          scale: 1,
          duration: 0.25,
          ease: "back.out(2)",
        })
        .to(
          img,
          {
            y: e.clientY - 80,
            opacity: 0,
            scale: 0.3,
            duration: 1.2,
            ease: "power2.out",
          },
          0,
        );

      current = (current + 1) % trailRef.current.length;
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <>
      {Array.from({ length: 20 }).map((_, i) => (
        <img
          key={i}
          ref={(el) => (trailRef.current[i] = el)}
          src={images[i % images.length]}
          alt=""
          className="
            fixed
            top-0
            left-0
            w-10
            opacity-0
            pointer-events-none
            z-[9999]
            select-none
          "
        />
      ))}
    </>
  );
};

export default MouseTrail;
