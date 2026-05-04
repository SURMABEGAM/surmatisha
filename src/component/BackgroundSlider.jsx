import { useEffect, useState } from "react";
import bg1 from "../assets/images/bg1.jpg";
import bg7 from "../assets/images/bg7.jpg";
import bg8 from "../assets/images/bg8.jpg";
import bg9 from "../assets/images/bg9.jpg";
import bg6 from "../assets/images/bg6.jpg";

const images = [bg1, bg7, bg8, bg9, bg6];
export default function BackgroundSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: -1,
      }}
    >
      {images.map((img, i) => (
        <div
          key={i}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: i === index ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        />
      ))}
    </div>
  );
}
