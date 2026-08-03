import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroAnimation() {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power4.out",
      }
    );
  }, []);

  return <div ref={ref}></div>;
}