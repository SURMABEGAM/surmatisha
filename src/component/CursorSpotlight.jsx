import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CursorSpotlight = () => {
  const mainRef = useRef(null);
  const glow1Ref = useRef(null);
  const glow2Ref = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      // MAIN SPOTLIGHT (fast + smooth)
      gsap.to(mainRef.current, {
        x,
        y,
        duration: 0.2,
        ease: "power3.out",
      });

      // LAYER 1 (slower glow)
      gsap.to(glow1Ref.current, {
        x: x + 20,
        y: y + 20,
        duration: 0.4,
        ease: "power2.out",
      });

      // LAYER 2 (even slower big glow)
      gsap.to(glow2Ref.current, {
        x: x - 30,
        y: y - 30,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    const handleClick = () => {
      gsap.fromTo(
        mainRef.current,
        { scale: 0.8 },
        { scale: 1.4, duration: 0.2, yoyo: true, repeat: 1 },
      );
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const base =
    "fixed top-0 left-0 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[999]";

  return (
    <>
      {/* BIG SOFT GLOW (background layer) */}
      <div
        ref={glow2Ref}
        className={`${base} w-[700px] h-[700px] opacity-20`}
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.3), transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* MID GLOW */}
      <div
        ref={glow1Ref}
        className={`${base} w-[450px] h-[450px] opacity-40`}
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.6) 0%, rgba(168,85,247,0.35) 40%, transparent 75%)",
          filter: "blur(70px)",
        }}
      />

      {/* MAIN CURSOR SPOTLIGHT */}
      <div
        ref={mainRef}
        className={`${base} w-[250px] h-[250px]`}
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.6) 0%, rgba(168,85,247,0.35) 40%, transparent 75%)",
          filter: "blur(50px)",
        }}
      />
    </>
  );
};

export default CursorSpotlight;
