import React, { useEffect } from "react";
import "./cursorLight.css";

const CursorLight = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor-light");

    const handleMouseMove = (e) => {
      cursor.setAttribute(
        "style",
        "top: " + (e.pageY - 40) + "px; left: " + (e.pageX - 40) + "px;"
      );
      cursor.style.opacity = 1;
    };

    const handleMouseStop = () => {
      cursor.style.opacity = 0;
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseStop);

    let timer;
    document.addEventListener("mousemove", () => {
      clearTimeout(timer);
      timer = setTimeout(handleMouseStop, 1000);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseStop);
    };
  }, []);

  return <div className="cursor-light"></div>;
};

export default CursorLight;
