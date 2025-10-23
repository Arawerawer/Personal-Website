import { skillCards } from "@/data/index";
import "@/styles/services.scss";
import { useEffect, useState } from "react";
import NavigationCircles from "./NavigationCircles";

const Services = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const getPositionClass = (card: (typeof skillCards)[number]) => {
    const position = isLargeScreen
      ? card.hoverPosition.large
      : card.hoverPosition.small;
    return position === "bottom" ? "bottom-0" : "top-0";
  };

  const getHoverPositionClass = (card: (typeof skillCards)[number]) => {
    const position = isLargeScreen
      ? card.hoverPosition.large
      : card.hoverPosition.small;
    return position === "bottom" ? "bottom-full" : "top-full";
  };

  return (
    <div id="services" className="services-section">
      <h2 className="services-title">Skill-set</h2>

      <div className="services-grid">
        {skillCards.map((card, index) => (
          <div
            key={index}
            className="skill-card"
            onMouseEnter={() => setHoveredCardIndex(index)}
            onMouseLeave={() => setHoveredCardIndex(null)}
          >
            <div className="skill-card-content">
              <i className={`${card.icon} skill-icon`}></i>

              <h3 className="skill-title">{card.title}</h3>

              <p className="skill-description custom-scrollbar">
                {card.description}
              </p>
            </div>

            <div
              className={`skill-hover-panel ${getPositionClass(card)} ${
                hoveredCardIndex === index && `${getHoverPositionClass(card)}`
              }`}
            >
              {isLargeScreen && card.hoverPosition.large === "top" && (
                <div className="project-links">
                  {[...Array(card.projectCount)].map((_, index) => (
                    <div key={index} className="project-link">
                      <i className="bx bx-star"></i>
                    </div>
                  ))}
                </div>
              )}

              <h2 className="project-count">熟悉度</h2>

              {(!isLargeScreen ||
                (isLargeScreen && card.hoverPosition.large === "bottom")) && (
                <div className="project-links">
                  {[...Array(card.projectCount)].map((_, index) => (
                    <div key={index} className="project-link">
                      <i className="bx bx-star"></i>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <NavigationCircles section="services" />
    </div>
  );
};

export default Services;
