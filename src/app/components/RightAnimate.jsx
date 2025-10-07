"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
 
const HeroRightImages = () => {
  const imageRef = useRef(null);
 
  const images = ["/hero-img/r2.png", "/hero-img/r1.png","/hero-img/r3.png","/hero-img/r4.png"]; // 👈 Use your two images here
  const [currentImage, setCurrentImage] = useState(0);
 
  // Fade-in animation for image change
  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" }
      );
    }
  }, [currentImage]);
 
  // Image rotation every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
 
  return (
    <div
      className="
        hero-image
        relative
        w-full
        flex
        justify-center
        items-center
        perspective-[1500px]
        md:justify-center
        md:items-center
        lg:justify-end
      "
    >
      <div
        ref={imageRef}
        className="
          w-full
          max-w-[100%]
          sm:max-w-[500px]
          md:max-w-[600px]
          lg:max-w-[2000px]
          transform-gpu
          md:mx-auto
        "
      >
        <img
          key={currentImage}
          src={images[currentImage]}
          alt="Cyber Insurability"
          className="
            w-full
            h-auto
            object-contain
            rounded-lg
            block
            md:block
            lg:inline
          "
        />
      </div>
    </div>
  );
};
 
export default HeroRightImages;
 