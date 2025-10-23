import Navbar from "./Navbar";
import NavigationCircles from "./NavigationCircles";
import "@/styles/hero.scss";
import { letters, professionTexts, aboutText, socialIcons } from "@/data";
import { useEffect, useState } from "react";
import { Book, BookOpen } from "lucide-react";

const Hero = () => {
  const [hoveredLetter, setHoveredLetter] = useState<number | null>(null);
  const [currentText, setCurrentText] = useState(professionTexts[0]);
  const [isRotating, setIsRotating] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [roadImageOpacity, setRoadImageOpacity] = useState(0.5);
  let currentIndex = 0;

  useEffect(() => {
    //5秒換字，換的時候旋轉動畫0.3s
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % professionTexts.length;
      setCurrentText(professionTexts[currentIndex]);

      setIsRotating(true);

      setTimeout(() => {
        setIsRotating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="hero-wrapper">
      <Navbar />

      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-text">
            {letters.map((letter, index) => (
              <span
                key={index}
                className="hero-letter"
                onMouseEnter={() => setHoveredLetter(index)}
                onMouseLeave={() => setHoveredLetter(null)}
              >
                {letter.char}
                <img
                  src={letter.img}
                  alt={`Hover image ${index + 1}`}
                  className={`hero-image ${letter.rotate} ${
                    hoveredLetter === index ? "visable" : "invisible"
                  }`}
                />
              </span>
            ))}
          </span>

          <span className="hero-subtitle">
            My{" "}
            <span
              className={`hero-highlight ${
                isRotating ? "md-rotate-100deg" : "rotate-0deg"
              }`}
            >
              {currentText}
            </span>{" "}
            Website
          </span>
        </h1>

        <button
          className="hero-button"
          onClick={() => setIsTextVisible(!isTextVisible)}
          onMouseEnter={() => setRoadImageOpacity(0.8)}
          onMouseLeave={() => setRoadImageOpacity(0.5)}
        >
          {isTextVisible
            ? "Hiden My Story(關閉按鈕)"
            : "Read My Story(閱讀按鈕)"}
          {isTextVisible ? <Book /> : <BookOpen />}
        </button>

        <div className="hero-social-links">
          {socialIcons.map((social, index) => (
            <div key={index} className="hero-social-icon">
              <i className={social.icon}></i>
            </div>
          ))}
        </div>

        <div className="hero-background">
          <img
            src="images/road.png"
            alt="Road Image"
            className="hero-road-image"
            style={{ opacity: roadImageOpacity }}
          />

          <span className="hero-status-badge">歡迎來到我的React互動網頁！</span>

          <div
            className={`hero-about-section custom-scrollbar ${
              isTextVisible ? "scale-y-100" : "scale-y-0"
            }`}
          >
            <p className="hero-about-text">{aboutText}</p>
          </div>
        </div>
      </div>

      <NavigationCircles section="home" />
    </div>
  );
};

export default Hero;
