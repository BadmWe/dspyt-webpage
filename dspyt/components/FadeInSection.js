import React, { useEffect } from "react";

const FadeInSection = ({ children }) => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in-section");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-text");
        }
      });
    });

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return <div className="fade-in-section">{children}</div>;
};

export default FadeInSection;
